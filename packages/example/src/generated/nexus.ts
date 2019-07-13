/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */

import * as ctx from "../context"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AccessTokenInput: { // input type
    created?: string | null; // String
    id?: string | null; // String
    scopes?: string[] | null; // [String!]
    ttl?: number | null; // Float
    userId?: number | null; // Float
  }
  AccountInput: { // input type
    balance?: number | null; // Float
    id?: number | null; // Float
    name?: string | null; // String
  }
  AddressInput: { // input type
    city?: string | null; // String
    id?: string | null; // String
    state?: string | null; // String
    street?: string | null; // String
    zipCode?: string | null; // String
  }
  BookInput: { // input type
    id?: number | null; // Float
    links?: NexusGenInputs['LinkInput'][] | null; // [LinkInput!]
    name?: string | null; // String
  }
  CustomerInput: { // input type
    accountIds?: number[] | null; // [Float!]
    age?: number | null; // Float
    billingAddress?: NexusGenInputs['AddressInput'] | null; // AddressInput
    emailList?: NexusGenInputs['EmailAddressInput'][] | null; // [EmailAddressInput!]
    id?: number | null; // Float
    name?: string | null; // String
  }
  EmailAddressInput: { // input type
    address?: string | null; // String
    id?: string | null; // String
    label?: string | null; // String
  }
  LinkInput: { // input type
    id?: number | null; // Float
    linkedId?: number | null; // Float
    linkedType?: string | null; // String
    name?: string | null; // String
    notes?: string | null; // String
  }
  OrderInput: { // input type
    customerId?: number | null; // Float
    date?: string | null; // String
    description?: string | null; // String
    id?: number | null; // Float
  }
  ShipmentInput: { // input type
    date?: string | null; // String
    description?: string | null; // String
    id?: number | null; // Float
    orderId?: number | null; // Float
  }
  UserInput: { // input type
    email?: string | null; // String
    emailVerified?: boolean | null; // Boolean
    id?: number | null; // Float
    realm?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AccessToken: {};
  Account: {};
  Address: {};
  Book: {};
  Books3: {};
  BooksCount: {};
  BooksExists: {};
  BooksPeopleCount: {};
  BooksUpdate: {};
  Customer: {};
  Customers3: {};
  CustomersAccountsCount: {};
  CustomersCount: {};
  CustomersEmailsCount: {};
  CustomersExists: {};
  CustomersOrdersCount: {};
  CustomersOrdersShipmentsCount: {};
  CustomersUpdate: {};
  EmailAddress: {};
  Link: {};
  Mutation: {};
  Order: {};
  Orders3: {};
  OrdersCount: {};
  OrdersExists: {};
  OrdersShipmentsCount: {};
  OrdersUpdate: {};
  Query: {};
  Shipment: {};
  Shipments3: {};
  ShipmentsCount: {};
  ShipmentsExists: {};
  ShipmentsUpdate: {};
  User: {};
  Users3: {};
  UsersAccessTokensCount: {};
  UsersCount: {};
  UsersExists: {};
  UsersUpdate: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AccessTokenInput: NexusGenInputs['AccessTokenInput'];
  AccountInput: NexusGenInputs['AccountInput'];
  AddressInput: NexusGenInputs['AddressInput'];
  BookInput: NexusGenInputs['BookInput'];
  CustomerInput: NexusGenInputs['CustomerInput'];
  EmailAddressInput: NexusGenInputs['EmailAddressInput'];
  LinkInput: NexusGenInputs['LinkInput'];
  OrderInput: NexusGenInputs['OrderInput'];
  ShipmentInput: NexusGenInputs['ShipmentInput'];
  UserInput: NexusGenInputs['UserInput'];
}

export interface NexusGenFieldTypes {
  AccessToken: { // field return type
    created: string | null; // String
    id: string | null; // String
    scopes: string[] | null; // [String!]
    ttl: number | null; // Float
    userId: number | null; // Float
  }
  Account: { // field return type
    balance: number | null; // Float
    id: number | null; // Float
    name: string | null; // String
  }
  Address: { // field return type
    city: string | null; // String
    id: string | null; // String
    state: string | null; // String
    street: string | null; // String
    zipCode: string | null; // String
  }
  Book: { // field return type
    id: number | null; // Float
    links: NexusGenRootTypes['Link'][] | null; // [Link!]
    name: string | null; // String
  }
  Books3: { // field return type
    exists: boolean | null; // Boolean
  }
  BooksCount: { // field return type
    count: number | null; // Float
  }
  BooksExists: { // field return type
    exists: boolean | null; // Boolean
  }
  BooksPeopleCount: { // field return type
    count: number | null; // Float
  }
  BooksUpdate: { // field return type
    count: number | null; // Float
  }
  Customer: { // field return type
    accountIds: number[] | null; // [Float!]
    age: number | null; // Float
    billingAddress: NexusGenRootTypes['Address'] | null; // Address
    emailList: NexusGenRootTypes['EmailAddress'][] | null; // [EmailAddress!]
    id: number | null; // Float
    name: string | null; // String
  }
  Customers3: { // field return type
    exists: boolean | null; // Boolean
  }
  CustomersAccountsCount: { // field return type
    count: number | null; // Float
  }
  CustomersCount: { // field return type
    count: number | null; // Float
  }
  CustomersEmailsCount: { // field return type
    count: number | null; // Float
  }
  CustomersExists: { // field return type
    exists: boolean | null; // Boolean
  }
  CustomersOrdersCount: { // field return type
    count: number | null; // Float
  }
  CustomersOrdersShipmentsCount: { // field return type
    count: number | null; // Float
  }
  CustomersUpdate: { // field return type
    count: number | null; // Float
  }
  EmailAddress: { // field return type
    address: string | null; // String
    id: string | null; // String
    label: string | null; // String
  }
  Link: { // field return type
    id: number | null; // Float
    linkedId: number | null; // Float
    linkedType: string | null; // String
    name: string | null; // String
    notes: string | null; // String
  }
  Mutation: { // field return type
    bookCreate: NexusGenRootTypes['Book'] | null; // Book
    bookDeleteById: string | null; // String
    bookExistsHeadBooksId: NexusGenRootTypes['Books3'] | null; // Books3
    bookPatchOrCreate: NexusGenRootTypes['Book'] | null; // Book
    bookPrototypeCreatePeople: NexusGenRootTypes['Link'] | null; // Link
    bookPrototypePatchAttributes: NexusGenRootTypes['Book'] | null; // Book
    bookPrototypeUpdateByIdPeople: NexusGenRootTypes['Link'] | null; // Link
    bookReplaceByIdPostBooksIdReplace: NexusGenRootTypes['Book'] | null; // Book
    bookReplaceByIdPutBooksId: NexusGenRootTypes['Book'] | null; // Book
    bookReplaceOrCreatePostBooksReplaceOrCreate: NexusGenRootTypes['Book'] | null; // Book
    bookReplaceOrCreatePutBooks: NexusGenRootTypes['Book'] | null; // Book
    bookUpdateAll: NexusGenRootTypes['BooksUpdate'] | null; // BooksUpdate
    bookUpsertWithWhere: NexusGenRootTypes['Book'] | null; // Book
    customerCreate: NexusGenRootTypes['Customer'] | null; // Customer
    customerDeleteById: string | null; // String
    customerExistsHeadCustomersId: NexusGenRootTypes['Customers3'] | null; // Customers3
    customerPatchOrCreate: NexusGenRootTypes['Customer'] | null; // Customer
    customerPrototypeCreateAccounts: NexusGenRootTypes['Account'] | null; // Account
    customerPrototypeCreateAddress: NexusGenRootTypes['Address'] | null; // Address
    customerPrototypeCreateEmails: NexusGenRootTypes['EmailAddress'] | null; // EmailAddress
    customerPrototypeCreateOrders: NexusGenRootTypes['Order'] | null; // Order
    customerPrototypeCreateOrdersShipments: NexusGenRootTypes['Shipment'] | null; // Shipment
    customerPrototypeExistsAccounts: boolean | null; // Boolean
    customerPrototypeLinkAccounts: NexusGenRootTypes['Account'] | null; // Account
    customerPrototypePatchAttributes: NexusGenRootTypes['Customer'] | null; // Customer
    customerPrototypeUpdateAddress: NexusGenRootTypes['Address'] | null; // Address
    customerPrototypeUpdateByIdAccounts: NexusGenRootTypes['Account'] | null; // Account
    customerPrototypeUpdateByIdEmails: NexusGenRootTypes['EmailAddress'] | null; // EmailAddress
    customerPrototypeUpdateByIdOrders: NexusGenRootTypes['Order'] | null; // Order
    customerPrototypeUpdateByIdOrdersShipments: NexusGenRootTypes['Shipment'] | null; // Shipment
    customerReplaceByIdPostCustomersIdReplace: NexusGenRootTypes['Customer'] | null; // Customer
    customerReplaceByIdPutCustomersId: NexusGenRootTypes['Customer'] | null; // Customer
    customerReplaceOrCreatePostCustomersReplaceOrCreate: NexusGenRootTypes['Customer'] | null; // Customer
    customerReplaceOrCreatePutCustomers: NexusGenRootTypes['Customer'] | null; // Customer
    customerUpdateAll: NexusGenRootTypes['CustomersUpdate'] | null; // CustomersUpdate
    customerUpsertWithWhere: NexusGenRootTypes['Customer'] | null; // Customer
    orderCreate: NexusGenRootTypes['Order'] | null; // Order
    orderDeleteById: string | null; // String
    orderExistsHeadOrdersId: NexusGenRootTypes['Orders3'] | null; // Orders3
    orderPatchOrCreate: NexusGenRootTypes['Order'] | null; // Order
    orderPrototypeCreateShipments: NexusGenRootTypes['Shipment'] | null; // Shipment
    orderPrototypePatchAttributes: NexusGenRootTypes['Order'] | null; // Order
    orderPrototypeUpdateByIdShipments: NexusGenRootTypes['Shipment'] | null; // Shipment
    orderReplaceByIdPostOrdersIdReplace: NexusGenRootTypes['Order'] | null; // Order
    orderReplaceByIdPutOrdersId: NexusGenRootTypes['Order'] | null; // Order
    orderReplaceOrCreatePostOrdersReplaceOrCreate: NexusGenRootTypes['Order'] | null; // Order
    orderReplaceOrCreatePutOrders: NexusGenRootTypes['Order'] | null; // Order
    orderUpdateAll: NexusGenRootTypes['OrdersUpdate'] | null; // OrdersUpdate
    orderUpsertWithWhere: NexusGenRootTypes['Order'] | null; // Order
    shipmentCreate: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentDeleteById: string | null; // String
    shipmentExistsHeadShipmentsId: NexusGenRootTypes['Shipments3'] | null; // Shipments3
    shipmentPatchOrCreate: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentPrototypePatchAttributes: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentReplaceByIdPostShipmentsIdReplace: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentReplaceByIdPutShipmentsId: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentReplaceOrCreatePostShipmentsReplaceOrCreate: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentReplaceOrCreatePutShipments: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentUpdateAll: NexusGenRootTypes['ShipmentsUpdate'] | null; // ShipmentsUpdate
    shipmentUpsertWithWhere: NexusGenRootTypes['Shipment'] | null; // Shipment
    userCreate: NexusGenRootTypes['User'] | null; // User
    userDeleteById: string | null; // String
    userExistsHeadUsersId: NexusGenRootTypes['Users3'] | null; // Users3
    userLogin: string | null; // String
    userPatchOrCreate: NexusGenRootTypes['User'] | null; // User
    userPrototypeCreateAccessTokens: NexusGenRootTypes['AccessToken'] | null; // AccessToken
    userPrototypePatchAttributes: NexusGenRootTypes['User'] | null; // User
    userPrototypeUpdateByIdAccessTokens: NexusGenRootTypes['AccessToken'] | null; // AccessToken
    userReplaceByIdPostUsersIdReplace: NexusGenRootTypes['User'] | null; // User
    userReplaceByIdPutUsersId: NexusGenRootTypes['User'] | null; // User
    userReplaceOrCreatePostUsersReplaceOrCreate: NexusGenRootTypes['User'] | null; // User
    userReplaceOrCreatePutUsers: NexusGenRootTypes['User'] | null; // User
    userUpdateAll: NexusGenRootTypes['UsersUpdate'] | null; // UsersUpdate
    userUpsertWithWhere: NexusGenRootTypes['User'] | null; // User
  }
  Order: { // field return type
    customerId: number | null; // Float
    date: string | null; // String
    description: string | null; // String
    id: number | null; // Float
  }
  Orders3: { // field return type
    exists: boolean | null; // Boolean
  }
  OrdersCount: { // field return type
    count: number | null; // Float
  }
  OrdersExists: { // field return type
    exists: boolean | null; // Boolean
  }
  OrdersShipmentsCount: { // field return type
    count: number | null; // Float
  }
  OrdersUpdate: { // field return type
    count: number | null; // Float
  }
  Query: { // field return type
    accessToken: NexusGenRootTypes['AccessToken'] | null; // AccessToken
    account: NexusGenRootTypes['Account'] | null; // Account
    address: NexusGenRootTypes['Address'] | null; // Address
    book: NexusGenRootTypes['Book'] | null; // Book
    bookFindById: NexusGenRootTypes['Book'] | null; // Book
    books: NexusGenRootTypes['Book'][] | null; // [Book!]
    booksCount: NexusGenRootTypes['BooksCount'] | null; // BooksCount
    booksExists: NexusGenRootTypes['BooksExists'] | null; // BooksExists
    booksPeople: NexusGenRootTypes['Link'][] | null; // [Link!]
    booksPeopleCount: NexusGenRootTypes['BooksPeopleCount'] | null; // BooksPeopleCount
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    customerFindById: NexusGenRootTypes['Customer'] | null; // Customer
    customerPrototypeGetOrdersCustomer: NexusGenRootTypes['Customer'] | null; // Customer
    customers: NexusGenRootTypes['Customer'][] | null; // [Customer!]
    customersAccounts: NexusGenRootTypes['Account'][] | null; // [Account!]
    customersAccountsCount: NexusGenRootTypes['CustomersAccountsCount'] | null; // CustomersAccountsCount
    customersCount: NexusGenRootTypes['CustomersCount'] | null; // CustomersCount
    customersEmails: NexusGenRootTypes['EmailAddress'][] | null; // [EmailAddress!]
    customersEmailsCount: NexusGenRootTypes['CustomersEmailsCount'] | null; // CustomersEmailsCount
    customersExists: NexusGenRootTypes['CustomersExists'] | null; // CustomersExists
    customersOrders: NexusGenRootTypes['Order'][] | null; // [Order!]
    customersOrdersCount: NexusGenRootTypes['CustomersOrdersCount'] | null; // CustomersOrdersCount
    customersOrdersShipments: NexusGenRootTypes['Shipment'][] | null; // [Shipment!]
    customersOrdersShipmentsCount: NexusGenRootTypes['CustomersOrdersShipmentsCount'] | null; // CustomersOrdersShipmentsCount
    emailAddress: NexusGenRootTypes['EmailAddress'] | null; // EmailAddress
    link: NexusGenRootTypes['Link'] | null; // Link
    order: NexusGenRootTypes['Order'] | null; // Order
    orderFindById: NexusGenRootTypes['Order'] | null; // Order
    orderFindOne: NexusGenRootTypes['Order'] | null; // Order
    orderPrototypeFindByIdShipments: NexusGenRootTypes['Shipment'] | null; // Shipment
    orderPrototypeGetCustomer: NexusGenRootTypes['Customer'] | null; // Customer
    orders: NexusGenRootTypes['Order'][] | null; // [Order!]
    ordersCount: NexusGenRootTypes['OrdersCount'] | null; // OrdersCount
    ordersExists: NexusGenRootTypes['OrdersExists'] | null; // OrdersExists
    ordersShipments: NexusGenRootTypes['Shipment'][] | null; // [Shipment!]
    ordersShipmentsCount: NexusGenRootTypes['OrdersShipmentsCount'] | null; // OrdersShipmentsCount
    shipment: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentFindById: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentFindOne: NexusGenRootTypes['Shipment'] | null; // Shipment
    shipmentPrototypeGetOrder: NexusGenRootTypes['Order'] | null; // Order
    shipments: NexusGenRootTypes['Shipment'][] | null; // [Shipment!]
    shipmentsCount: NexusGenRootTypes['ShipmentsCount'] | null; // ShipmentsCount
    shipmentsExists: NexusGenRootTypes['ShipmentsExists'] | null; // ShipmentsExists
    user: NexusGenRootTypes['User'] | null; // User
    userFindById: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][] | null; // [User!]
    usersAccessTokens: NexusGenRootTypes['AccessToken'][] | null; // [AccessToken!]
    usersAccessTokensCount: NexusGenRootTypes['UsersAccessTokensCount'] | null; // UsersAccessTokensCount
    usersCount: NexusGenRootTypes['UsersCount'] | null; // UsersCount
    usersExists: NexusGenRootTypes['UsersExists'] | null; // UsersExists
  }
  Shipment: { // field return type
    date: string | null; // String
    description: string | null; // String
    id: number | null; // Float
    orderId: number | null; // Float
  }
  Shipments3: { // field return type
    exists: boolean | null; // Boolean
  }
  ShipmentsCount: { // field return type
    count: number | null; // Float
  }
  ShipmentsExists: { // field return type
    exists: boolean | null; // Boolean
  }
  ShipmentsUpdate: { // field return type
    count: number | null; // Float
  }
  User: { // field return type
    email: string | null; // String
    emailVerified: boolean | null; // Boolean
    id: number | null; // Float
    realm: string | null; // String
    username: string | null; // String
  }
  Users3: { // field return type
    exists: boolean | null; // Boolean
  }
  UsersAccessTokensCount: { // field return type
    count: number | null; // Float
  }
  UsersCount: { // field return type
    count: number | null; // Float
  }
  UsersExists: { // field return type
    exists: boolean | null; // Boolean
  }
  UsersUpdate: { // field return type
    count: number | null; // Float
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    bookCreate: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
    }
    bookDeleteById: { // args
      id: string; // String!
    }
    bookExistsHeadBooksId: { // args
      id: string; // String!
    }
    bookPatchOrCreate: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
    }
    bookPrototypeCreatePeople: { // args
      id: string; // String!
      linkInput?: NexusGenInputs['LinkInput'] | null; // LinkInput
    }
    bookPrototypePatchAttributes: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
      id: string; // String!
    }
    bookPrototypeUpdateByIdPeople: { // args
      fk: string; // String!
      id: string; // String!
      linkInput?: NexusGenInputs['LinkInput'] | null; // LinkInput
    }
    bookReplaceByIdPostBooksIdReplace: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
      id: string; // String!
    }
    bookReplaceByIdPutBooksId: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
      id: string; // String!
    }
    bookReplaceOrCreatePostBooksReplaceOrCreate: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
    }
    bookReplaceOrCreatePutBooks: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
    }
    bookUpdateAll: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
      where?: string | null; // String
    }
    bookUpsertWithWhere: { // args
      bookInput?: NexusGenInputs['BookInput'] | null; // BookInput
      where?: string | null; // String
    }
    customerCreate: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
    }
    customerDeleteById: { // args
      id: string; // String!
    }
    customerExistsHeadCustomersId: { // args
      id: string; // String!
    }
    customerPatchOrCreate: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
    }
    customerPrototypeCreateAccounts: { // args
      accountInput?: NexusGenInputs['AccountInput'] | null; // AccountInput
      id: string; // String!
    }
    customerPrototypeCreateAddress: { // args
      addressInput?: NexusGenInputs['AddressInput'] | null; // AddressInput
      id: string; // String!
    }
    customerPrototypeCreateEmails: { // args
      emailAddressInput?: NexusGenInputs['EmailAddressInput'] | null; // EmailAddressInput
      id: string; // String!
    }
    customerPrototypeCreateOrders: { // args
      id: string; // String!
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    customerPrototypeCreateOrdersShipments: { // args
      id: string; // String!
      nk: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    customerPrototypeExistsAccounts: { // args
      fk: string; // String!
      id: string; // String!
    }
    customerPrototypeLinkAccounts: { // args
      fk: string; // String!
      id: string; // String!
    }
    customerPrototypePatchAttributes: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
      id: string; // String!
    }
    customerPrototypeUpdateAddress: { // args
      addressInput?: NexusGenInputs['AddressInput'] | null; // AddressInput
      id: string; // String!
    }
    customerPrototypeUpdateByIdAccounts: { // args
      accountInput?: NexusGenInputs['AccountInput'] | null; // AccountInput
      fk: string; // String!
      id: string; // String!
    }
    customerPrototypeUpdateByIdEmails: { // args
      emailAddressInput?: NexusGenInputs['EmailAddressInput'] | null; // EmailAddressInput
      fk: string; // String!
      id: string; // String!
    }
    customerPrototypeUpdateByIdOrders: { // args
      fk: string; // String!
      id: string; // String!
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    customerPrototypeUpdateByIdOrdersShipments: { // args
      fk: string; // String!
      id: string; // String!
      nk: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    customerReplaceByIdPostCustomersIdReplace: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
      id: string; // String!
    }
    customerReplaceByIdPutCustomersId: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
      id: string; // String!
    }
    customerReplaceOrCreatePostCustomersReplaceOrCreate: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
    }
    customerReplaceOrCreatePutCustomers: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
    }
    customerUpdateAll: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
      where?: string | null; // String
    }
    customerUpsertWithWhere: { // args
      customerInput?: NexusGenInputs['CustomerInput'] | null; // CustomerInput
      where?: string | null; // String
    }
    orderCreate: { // args
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderDeleteById: { // args
      id: string; // String!
    }
    orderExistsHeadOrdersId: { // args
      id: string; // String!
    }
    orderPatchOrCreate: { // args
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderPrototypeCreateShipments: { // args
      id: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    orderPrototypePatchAttributes: { // args
      id: string; // String!
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderPrototypeUpdateByIdShipments: { // args
      fk: string; // String!
      id: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    orderReplaceByIdPostOrdersIdReplace: { // args
      id: string; // String!
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderReplaceByIdPutOrdersId: { // args
      id: string; // String!
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderReplaceOrCreatePostOrdersReplaceOrCreate: { // args
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderReplaceOrCreatePutOrders: { // args
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
    }
    orderUpdateAll: { // args
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
      where?: string | null; // String
    }
    orderUpsertWithWhere: { // args
      orderInput?: NexusGenInputs['OrderInput'] | null; // OrderInput
      where?: string | null; // String
    }
    shipmentCreate: { // args
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentDeleteById: { // args
      id: string; // String!
    }
    shipmentExistsHeadShipmentsId: { // args
      id: string; // String!
    }
    shipmentPatchOrCreate: { // args
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentPrototypePatchAttributes: { // args
      id: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentReplaceByIdPostShipmentsIdReplace: { // args
      id: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentReplaceByIdPutShipmentsId: { // args
      id: string; // String!
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentReplaceOrCreatePostShipmentsReplaceOrCreate: { // args
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentReplaceOrCreatePutShipments: { // args
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
    }
    shipmentUpdateAll: { // args
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
      where?: string | null; // String
    }
    shipmentUpsertWithWhere: { // args
      shipmentInput?: NexusGenInputs['ShipmentInput'] | null; // ShipmentInput
      where?: string | null; // String
    }
    userCreate: { // args
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userDeleteById: { // args
      id: string; // String!
    }
    userExistsHeadUsersId: { // args
      id: string; // String!
    }
    userLogin: { // args
      include?: string | null; // String
      usersLoginInput: string; // String!
    }
    userPatchOrCreate: { // args
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userPrototypeCreateAccessTokens: { // args
      accessTokenInput?: NexusGenInputs['AccessTokenInput'] | null; // AccessTokenInput
      id: string; // String!
    }
    userPrototypePatchAttributes: { // args
      id: string; // String!
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userPrototypeUpdateByIdAccessTokens: { // args
      accessTokenInput?: NexusGenInputs['AccessTokenInput'] | null; // AccessTokenInput
      fk: string; // String!
      id: string; // String!
    }
    userReplaceByIdPostUsersIdReplace: { // args
      id: string; // String!
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userReplaceByIdPutUsersId: { // args
      id: string; // String!
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userReplaceOrCreatePostUsersReplaceOrCreate: { // args
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userReplaceOrCreatePutUsers: { // args
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
    }
    userUpdateAll: { // args
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
      where?: string | null; // String
    }
    userUpsertWithWhere: { // args
      userInput?: NexusGenInputs['UserInput'] | null; // UserInput
      where?: string | null; // String
    }
  }
  Query: {
    accessToken: { // args
      fk: string; // String!
      id: string; // String!
    }
    account: { // args
      fk: string; // String!
      id: string; // String!
    }
    address: { // args
      id: string; // String!
      refresh?: boolean | null; // Boolean
    }
    book: { // args
      filter?: string | null; // String
    }
    bookFindById: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    books: { // args
      filter?: string | null; // String
    }
    booksCount: { // args
      where?: string | null; // String
    }
    booksExists: { // args
      id: string; // String!
    }
    booksPeople: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    booksPeopleCount: { // args
      id: string; // String!
      where?: string | null; // String
    }
    customer: { // args
      filter?: string | null; // String
    }
    customerFindById: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    customerPrototypeGetOrdersCustomer: { // args
      id: string; // String!
      nk: string; // String!
      refresh?: boolean | null; // Boolean
    }
    customers: { // args
      filter?: string | null; // String
    }
    customersAccounts: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    customersAccountsCount: { // args
      id: string; // String!
      where?: string | null; // String
    }
    customersCount: { // args
      where?: string | null; // String
    }
    customersEmails: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    customersEmailsCount: { // args
      id: string; // String!
      where?: string | null; // String
    }
    customersExists: { // args
      id: string; // String!
    }
    customersOrders: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    customersOrdersCount: { // args
      id: string; // String!
      where?: string | null; // String
    }
    customersOrdersShipments: { // args
      filter?: string | null; // String
      id: string; // String!
      nk: string; // String!
    }
    customersOrdersShipmentsCount: { // args
      id: string; // String!
      nk: string; // String!
      where?: string | null; // String
    }
    emailAddress: { // args
      fk: string; // String!
      id: string; // String!
    }
    link: { // args
      fk: string; // String!
      id: string; // String!
    }
    order: { // args
      fk: string; // String!
      id: string; // String!
    }
    orderFindById: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    orderFindOne: { // args
      filter?: string | null; // String
    }
    orderPrototypeFindByIdShipments: { // args
      fk: string; // String!
      id: string; // String!
    }
    orderPrototypeGetCustomer: { // args
      id: string; // String!
      refresh?: boolean | null; // Boolean
    }
    orders: { // args
      filter?: string | null; // String
    }
    ordersCount: { // args
      where?: string | null; // String
    }
    ordersExists: { // args
      id: string; // String!
    }
    ordersShipments: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    ordersShipmentsCount: { // args
      id: string; // String!
      where?: string | null; // String
    }
    shipment: { // args
      fk: string; // String!
      id: string; // String!
      nk: string; // String!
    }
    shipmentFindById: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    shipmentFindOne: { // args
      filter?: string | null; // String
    }
    shipmentPrototypeGetOrder: { // args
      id: string; // String!
      refresh?: boolean | null; // Boolean
    }
    shipments: { // args
      filter?: string | null; // String
    }
    shipmentsCount: { // args
      where?: string | null; // String
    }
    shipmentsExists: { // args
      id: string; // String!
    }
    user: { // args
      filter?: string | null; // String
    }
    userFindById: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    users: { // args
      filter?: string | null; // String
    }
    usersAccessTokens: { // args
      filter?: string | null; // String
      id: string; // String!
    }
    usersAccessTokensCount: { // args
      id: string; // String!
      where?: string | null; // String
    }
    usersCount: { // args
      where?: string | null; // String
    }
    usersExists: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AccessToken" | "Account" | "Address" | "Book" | "Books3" | "BooksCount" | "BooksExists" | "BooksPeopleCount" | "BooksUpdate" | "Customer" | "Customers3" | "CustomersAccountsCount" | "CustomersCount" | "CustomersEmailsCount" | "CustomersExists" | "CustomersOrdersCount" | "CustomersOrdersShipmentsCount" | "CustomersUpdate" | "EmailAddress" | "Link" | "Mutation" | "Order" | "Orders3" | "OrdersCount" | "OrdersExists" | "OrdersShipmentsCount" | "OrdersUpdate" | "Query" | "Shipment" | "Shipments3" | "ShipmentsCount" | "ShipmentsExists" | "ShipmentsUpdate" | "User" | "Users3" | "UsersAccessTokensCount" | "UsersCount" | "UsersExists" | "UsersUpdate";

export type NexusGenInputNames = "AccessTokenInput" | "AccountInput" | "AddressInput" | "BookInput" | "CustomerInput" | "EmailAddressInput" | "LinkInput" | "OrderInput" | "ShipmentInput" | "UserInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
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