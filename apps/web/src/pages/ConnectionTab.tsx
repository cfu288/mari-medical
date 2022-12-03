import { IonContent, IonHeader, IonPage, IonButton } from '@ionic/react';
import { useCallback, useEffect, useState } from 'react';
import { ConnectionDocument } from '../models/ConnectionDocument';
import { OnPatient } from '../services/OnPatient';
import { DatabaseCollections, useRxDb } from '../components/RxDbProvider';
import { RxDatabase, RxDocument } from 'rxdb';
import { GenericBanner } from '../components/GenericBanner';
import { ConnectionCard } from '../components/ConnectionCard';
import FHIR from 'fhirclient';
import Config from '../environments/config.json';
import { Routes } from '../Routes';
async function getConnectionCards(
  db: RxDatabase<DatabaseCollections, any, any>
) {
  return db.connection_documents
    .find({
      selector: {},
    })
    .exec()
    .then((list) => list as unknown as RxDocument<ConnectionDocument>[]);
}

const ConnectionTab: React.FC = () => {
  const db = useRxDb(),
    [list, setList] = useState<RxDocument<ConnectionDocument>[]>(),
    onpatientLoginUrl = OnPatient.getLoginUrl(),
    epicLoginHandler = () => {
      (window as any).FHIR = FHIR;

      const params = {
        client_id: '47f1082f-274d-4cc6-b8e4-60dfad42da60',
        scope: 'patient/*.read',
        redirect_uri: `${Config.PUBLIC_URL}${Routes.EpicCallback}`,
        fhirServiceUrl:
          'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/DSTU2/',
      };

      FHIR.oauth2.authorize(params).then((x) => alert(x));
    },
    getList = useCallback(() => {
      getConnectionCards(db).then((list) => {
        setList(list as unknown as RxDocument<ConnectionDocument>[]);
      });
    }, [db]),
    fetchData = useCallback(
      async (
        connectionDocument: RxDocument<ConnectionDocument>,
        db: RxDatabase<DatabaseCollections>
      ) => await OnPatient.syncAllRecords(connectionDocument, db),
      []
    );

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <IonPage>
      <IonHeader>
        <GenericBanner text="Add Connections" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mx-auto flex max-w-4xl flex-col gap-x-4 px-4 pt-2 sm:px-6 lg:px-8">
          <div className="py-6 text-xl font-extrabold">
            Connect to Patient Portal
          </div>
          <div className="text-sm font-medium text-gray-500">
            Connect to a patient portal to automatic download your most recent
            data.
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-x-4 px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 py-8">
            {list?.map((item) => (
              <ConnectionCard
                key={item._id}
                item={item}
                fetchData={fetchData}
              />
            ))}
          </ul>
          <div className="box-border flex	w-full justify-center align-middle">
            <IonButton className="m-4 h-12 w-11/12" href={onpatientLoginUrl}>
              <p className="font-bold">Log in to OnPatient</p>
            </IonButton>
          </div>
          <div className="box-border flex	w-full justify-center align-middle">
            <IonButton className="m-4 h-12 w-11/12" onClick={epicLoginHandler}>
              <p className="font-bold">Log in to Epic</p>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ConnectionTab;
