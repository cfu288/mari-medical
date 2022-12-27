import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import logo from '../assets/logo.svg';
import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb';
import { Transition } from '@headlessui/react';
import { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';
import plugin from 'pouchdb-adapter-idb';
import {
  ConnectionDocumentCollection,
  ConnectionDocumentSchema,
} from '../models/ConnectionDocumentCollection';
import {
  ClinicalDocumentCollection,
  ClinicalDocumentSchema,
} from '../models/ClinicalDocumentCollection';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration';
import {
  UserDocumentCollection,
  UserDocumentSchema,
} from '../models/UserDocumentCollection';
// to use the update() method, you need to add the update plugin.
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';

addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBDevModePlugin);

addPouchPlugin(plugin);

export type DatabaseCollections = {
  clinical_documents: ClinicalDocumentCollection;
  connection_documents: ConnectionDocumentCollection;
  user_documents: UserDocumentCollection;
};

const RxDbContext = React.createContext<
  RxDatabase<DatabaseCollections> | undefined
>(undefined);

type RxDbProviderProps = PropsWithChildren<unknown>;

async function initRxDb() {
  const db = await createRxDatabase<DatabaseCollections>({
    name: 'mere_db',
    storage: getRxStoragePouch('idb'),
    multiInstance: true,
    ignoreDuplicate: true,
  });

  await db.addCollections<DatabaseCollections>({
    clinical_documents: {
      schema: ClinicalDocumentSchema,
    },
    connection_documents: {
      schema: ConnectionDocumentSchema,
    },
    user_documents: {
      schema: UserDocumentSchema,
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
    <>
      <Transition
        show={!!db}
        enter="transition-opacity ease-linear duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <RxDbContext.Provider value={db}>{props.children}</RxDbContext.Provider>
      </Transition>
      <Transition
        show={!db}
        leave="transition-opacity ease-linear duration-150"
        leaveFrom="opacity-0"
        leaveTo="opacity-100"
        enter="transition-opacity ease-linear duration-150"
        enterFrom="opacity-100"
        enterTo="opacity-0"
      >
        <div className="z-20 flex h-screen w-full flex-col items-center justify-center gap-8">
          <img className="h-48 w-48" src={logo} alt="Loading screen"></img>
        </div>
      </Transition>
    </>
  );
}

export function useRxDb() {
  const context = useContext(RxDbContext);
  if (context === undefined) {
    throw new Error('useRxDb must be used within a RxDbProvider');
  }
  return context;
}
