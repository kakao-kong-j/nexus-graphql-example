/**
 * This file was automatically generated by Nexus 0.9.9
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  UserType: "ADMIN" | "GUEST" | "USER"
}

export interface NexusGenRootTypes {
  Query: {};
  User: { // root type
    age: number; // Int!
    createdAt: string; // String!
    email: string; // String!
    ID: string; // String!
    name: string; // String!
    userType: NexusGenEnums['UserType']; // UserType!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  UserType: NexusGenEnums['UserType'];
}

export interface NexusGenFieldTypes {
  Query: { // field return type
    user: NexusGenRootTypes['User']; // User!
    users: NexusGenRootTypes['User'][]; // [User!]!
    version: string; // String!
  }
  User: { // field return type
    age: number; // Int!
    createdAt: string; // String!
    email: string; // String!
    ID: string; // String!
    name: string; // String!
    userType: NexusGenEnums['UserType']; // UserType!
  }
}

export interface NexusGenArgTypes {
  Query: {
    user: { // args
      ID: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "UserType";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}