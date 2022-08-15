import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import logo from '../assets/logo.svg';
import { createRxDatabase, RxDatabase } from 'rxdb';
import { Transition } from '@headlessui/react';
import { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';
import plugin from 'pouchdb-adapter-idb';
import {
  ConnectionDocumentCollection,
  connectionDocumentSchema,
} from '../models/ConnectionDocumentCollection';
import {
  ClinicalDocumentCollection,
  ClinicalDocumentSchema,
} from '../models/ClinicalDocumentCollection';
import { environment } from '../environments/environment';

// import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
// import { RxDBMigrationPlugin } from 'rxdb/plugins/migration';
// addRxPlugin(RxDBMigrationPlugin);
// addRxPlugin(RxDBDevModePlugin);

addPouchPlugin(plugin);

export type DatabaseCollections = {
  clinical_documents: ClinicalDocumentCollection;
  connection_documents: ConnectionDocumentCollection;
};

const RxDbContext = React.createContext<
  RxDatabase<DatabaseCollections> | undefined
>(undefined);

type RxDbProviderProps = PropsWithChildren<unknown>;

async function initRxDb() {
  const db = await createRxDatabase<DatabaseCollections>({
    name: environment.database_name,
    storage: getRxStoragePouch('idb'),
    multiInstance: true,
    ignoreDuplicate: true,
  });

  await db.addCollections<DatabaseCollections>({
    clinical_documents: {
      schema: ClinicalDocumentSchema,
    },
    connection_documents: {
      schema: connectionDocumentSchema,
    },
  });

  return db;
}

export function RxDbProvider(props: RxDbProviderProps) {
  const [db, setDb] = useState<RxDatabase<DatabaseCollections>>();

  useEffect(() => {
    initRxDb().then((db) => {
      setDb(db);
    });
  }, []);

  return (
    <Transition show={!!db}>
      <Transition.Child
        leave="transition-opacity ease-linear duration-150"
        leaveFrom="opacity-0"
        leaveTo="opacity-100"
        enter="transition-opacity ease-linear duration-150"
        enterFrom="opacity-100"
        enterTo="opacity-0"
      >
        <div className="flex flex-col h-screen w-full justify-center items-center gap-8">
          <img className="w-48 h-48" src={logo} alt="Loading screen"></img>
        </div>
      </Transition.Child>
      <Transition.Child
        enter="transition-opacity ease-linear duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <RxDbContext.Provider value={db}>{props.children}</RxDbContext.Provider>
      </Transition.Child>
    </Transition>
  );
}

export function useRxDb() {
  const context = useContext(RxDbContext);
  if (context === undefined) {
    throw new Error('useRxDb must be used within a RxDbProvider');
  }
  return context;
}