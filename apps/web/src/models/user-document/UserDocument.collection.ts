import { RxCollection } from 'rxdb';
import {
  toTypedRxJsonSchema,
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
} from 'rxdb';
import { userDocumentSchemaLiteral } from './UserDocument.schema';

const userDocumentSchemaTyped = toTypedRxJsonSchema(userDocumentSchemaLiteral);

type UserDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof userDocumentSchemaTyped
>;

export const UserDocumentSchema: RxJsonSchema<UserDocumentType> =
  userDocumentSchemaLiteral;

export type UserDocumentCollection = RxCollection<UserDocumentType>;
