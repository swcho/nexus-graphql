export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** No description available. */
export type AccessToken = {
  __typename?: 'AccessToken'
  /** No description available. */
  created?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['String']>
  /** Array of scopes granted to this access token. */
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** time to live in seconds (2 weeks by default) */
  ttl?: Maybe<Scalars['Float']>
  /** No description available. */
  userId?: Maybe<Scalars['Float']>
}

/** No description available. */
export type AccessTokenInput = {
  /** No description available. */
  created?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['String']>
  /** Array of scopes granted to this access token. */
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** time to live in seconds (2 weeks by default) */
  ttl?: Maybe<Scalars['Float']>
  /** No description available. */
  userId?: Maybe<Scalars['Float']>
}

/** No description available. */
export type Account = {
  __typename?: 'Account'
  /** No description available. */
  balance?: Maybe<Scalars['Float']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** No description available. */
export type AccountInput = {
  /** No description available. */
  balance?: Maybe<Scalars['Float']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** No description available. */
export type Address = {
  __typename?: 'Address'
  /** No description available. */
  city?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['String']>
  /** No description available. */
  state?: Maybe<Scalars['String']>
  /** No description available. */
  street?: Maybe<Scalars['String']>
  /** No description available. */
  zipCode?: Maybe<Scalars['String']>
}

/** No description available. */
export type AddressInput = {
  /** No description available. */
  city?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['String']>
  /** No description available. */
  state?: Maybe<Scalars['String']>
  /** No description available. */
  street?: Maybe<Scalars['String']>
  /** No description available. */
  zipCode?: Maybe<Scalars['String']>
}

/** No description available. */
export type Book = {
  __typename?: 'Book'
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  links?: Maybe<Array<Maybe<Link>>>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** No description available. */
export type BookInput = {
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  links?: Maybe<Array<Maybe<LinkInput>>>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** No description available. */
export type Books2 = {
  __typename?: 'Books2'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type BooksCount = {
  __typename?: 'BooksCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type BooksExists = {
  __typename?: 'BooksExists'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type BooksPeopleCount = {
  __typename?: 'BooksPeopleCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** Information related to the outcome of the operation */
export type BooksUpdate = {
  __typename?: 'BooksUpdate'
  /** The number of instances updated */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type Customer = {
  __typename?: 'Customer'
  /** No description available. */
  accountIds?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** No description available. */
  age?: Maybe<Scalars['Float']>
  /** No description available. */
  billingAddress?: Maybe<Address>
  /** No description available. */
  emailList?: Maybe<Array<Maybe<EmailAddress>>>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** No description available. */
export type CustomerInput = {
  /** No description available. */
  accountIds?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** No description available. */
  age?: Maybe<Scalars['Float']>
  /** No description available. */
  billingAddress?: Maybe<AddressInput>
  /** No description available. */
  emailList?: Maybe<Array<Maybe<EmailAddressInput>>>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** No description available. */
export type Customers2 = {
  __typename?: 'Customers2'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type CustomersAccountsCount = {
  __typename?: 'CustomersAccountsCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type CustomersCount = {
  __typename?: 'CustomersCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type CustomersEmailsCount = {
  __typename?: 'CustomersEmailsCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type CustomersExists = {
  __typename?: 'CustomersExists'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type CustomersOrdersCount = {
  __typename?: 'CustomersOrdersCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type CustomersOrdersShipmentsCount = {
  __typename?: 'CustomersOrdersShipmentsCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** Information related to the outcome of the operation */
export type CustomersUpdate = {
  __typename?: 'CustomersUpdate'
  /** The number of instances updated */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type EmailAddress = {
  __typename?: 'EmailAddress'
  /** No description available. */
  address?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['String']>
  /** No description available. */
  label?: Maybe<Scalars['String']>
}

/** No description available. */
export type EmailAddressInput = {
  /** No description available. */
  address?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['String']>
  /** No description available. */
  label?: Maybe<Scalars['String']>
}

/** No description available. */
export type Link = {
  __typename?: 'Link'
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  linkedId?: Maybe<Scalars['Float']>
  /** No description available. */
  linkedType?: Maybe<Scalars['String']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
  /** No description available. */
  notes?: Maybe<Scalars['String']>
}

/** No description available. */
export type LinkInput = {
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  linkedId?: Maybe<Scalars['Float']>
  /** No description available. */
  linkedType?: Maybe<Scalars['String']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
  /** No description available. */
  notes?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type Mutation = {
  __typename?: 'Mutation'
  /** Create a new instance of the model and persist it into the data source.
   *
   * Equivalent to POST /Books
   */
  bookCreate?: Maybe<Book>
  /** Create a change stream.
   *
   * Equivalent to POST /Books/change-stream
   */
  bookCreateChangeStreamPostBooksChangeStream?: Maybe<Scalars['String']>
  /** Delete a model instance by {{id}} from the data source.
   *
   * Equivalent to DELETE /Books/{id}
   */
  bookDeleteById?: Maybe<Scalars['String']>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to HEAD /Books/{id}
   */
  bookExistsHeadBooksId?: Maybe<Books2>
  /** Patch an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PATCH /Books
   */
  bookPatchOrCreate?: Maybe<Book>
  /** 이 모델의 people에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Books/{id}/people
   */
  bookPrototypeCreatePeople?: Maybe<Link>
  /** Patch attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PATCH /Books/{id}
   */
  bookPrototypePatchAttributes?: Maybe<Book>
  /** people에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Books/{id}/people/{fk}
   */
  bookPrototypeUpdateByIdPeople?: Maybe<Link>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to POST /Books/{id}/replace
   */
  bookReplaceByIdPostBooksIdReplace?: Maybe<Book>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PUT /Books/{id}
   */
  bookReplaceByIdPutBooksId?: Maybe<Book>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to POST /Books/replaceOrCreate
   */
  bookReplaceOrCreatePostBooksReplaceOrCreate?: Maybe<Book>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PUT /Books
   */
  bookReplaceOrCreatePutBooks?: Maybe<Book>
  /** Update instances of the model matched by {{where}} from the data source.
   *
   * Equivalent to POST /Books/update
   */
  bookUpdateAll?: Maybe<BooksUpdate>
  /** Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * Equivalent to POST /Books/upsertWithWhere
   */
  bookUpsertWithWhere?: Maybe<Book>
  /** Create a new instance of the model and persist it into the data source.
   *
   * Equivalent to POST /Customers
   */
  customerCreate?: Maybe<Customer>
  /** Create a change stream.
   *
   * Equivalent to POST /Customers/change-stream
   */
  customerCreateChangeStreamPostCustomersChangeStream?: Maybe<Scalars['String']>
  /** Delete a model instance by {{id}} from the data source.
   *
   * Equivalent to DELETE /Customers/{id}
   */
  customerDeleteById?: Maybe<Scalars['String']>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to HEAD /Customers/{id}
   */
  customerExistsHeadCustomersId?: Maybe<Customers2>
  /** Patch an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PATCH /Customers
   */
  customerPatchOrCreate?: Maybe<Customer>
  /** 이 모델의 accounts에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Customers/{id}/accounts
   */
  customerPrototypeCreateAccounts?: Maybe<Account>
  /** 이 모델의 address에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Customers/{id}/address
   */
  customerPrototypeCreateAddress?: Maybe<Address>
  /** 이 모델의 emails에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Customers/{id}/emails
   */
  customerPrototypeCreateEmails?: Maybe<EmailAddress>
  /** 이 모델의 orders에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Customers/{id}/orders
   */
  customerPrototypeCreateOrders?: Maybe<Order>
  /** 이 모델의 shipments에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Customers/{id}/orders/{nk}/shipments
   */
  customerPrototypeCreateOrdersShipments?: Maybe<Shipment>
  /** ID로 항목에 대한 accounts 관계의 존재를 확인하십시오.
   *
   * Equivalent to HEAD /Customers/{id}/accounts/rel/{fk}
   */
  customerPrototypeExistsAccounts?: Maybe<Scalars['Boolean']>
  /** accounts에 대해 ID로 관련 항목을 추가하십시오.
   *
   * Equivalent to PUT /Customers/{id}/accounts/rel/{fk}
   */
  customerPrototypeLinkAccounts?: Maybe<Account>
  /** Patch attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PATCH /Customers/{id}
   */
  customerPrototypePatchAttributes?: Maybe<Customer>
  /** 이 모델의 address을(를) 업데이트하십시오.
   *
   * Equivalent to PUT /Customers/{id}/address
   */
  customerPrototypeUpdateAddress?: Maybe<Address>
  /** accounts에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Customers/{id}/accounts/{fk}
   */
  customerPrototypeUpdateByIdAccounts?: Maybe<Account>
  /** emails에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Customers/{id}/emails/{fk}
   */
  customerPrototypeUpdateByIdEmails?: Maybe<EmailAddress>
  /** orders에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Customers/{id}/orders/{fk}
   */
  customerPrototypeUpdateByIdOrders?: Maybe<Order>
  /** shipments에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Customers/{id}/orders/{nk}/shipments/{fk}
   */
  customerPrototypeUpdateByIdOrdersShipments?: Maybe<Shipment>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to POST /Customers/{id}/replace
   */
  customerReplaceByIdPostCustomersIdReplace?: Maybe<Customer>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PUT /Customers/{id}
   */
  customerReplaceByIdPutCustomersId?: Maybe<Customer>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to POST /Customers/replaceOrCreate
   */
  customerReplaceOrCreatePostCustomersReplaceOrCreate?: Maybe<Customer>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PUT /Customers
   */
  customerReplaceOrCreatePutCustomers?: Maybe<Customer>
  /** Update instances of the model matched by {{where}} from the data source.
   *
   * Equivalent to POST /Customers/update
   */
  customerUpdateAll?: Maybe<CustomersUpdate>
  /** Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * Equivalent to POST /Customers/upsertWithWhere
   */
  customerUpsertWithWhere?: Maybe<Customer>
  /** Create a new instance of the model and persist it into the data source.
   *
   * Equivalent to POST /Orders
   */
  orderCreate?: Maybe<Order>
  /** Create a change stream.
   *
   * Equivalent to POST /Orders/change-stream
   */
  orderCreateChangeStreamPostOrdersChangeStream?: Maybe<Scalars['String']>
  /** Delete a model instance by {{id}} from the data source.
   *
   * Equivalent to DELETE /Orders/{id}
   */
  orderDeleteById?: Maybe<Scalars['String']>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to HEAD /Orders/{id}
   */
  orderExistsHeadOrdersId?: Maybe<Orders2>
  /** Patch an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PATCH /Orders
   */
  orderPatchOrCreate?: Maybe<Order>
  /** 이 모델의 shipments에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Orders/{id}/shipments
   */
  orderPrototypeCreateShipments?: Maybe<Shipment>
  /** Patch attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PATCH /Orders/{id}
   */
  orderPrototypePatchAttributes?: Maybe<Order>
  /** shipments에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Orders/{id}/shipments/{fk}
   */
  orderPrototypeUpdateByIdShipments?: Maybe<Shipment>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to POST /Orders/{id}/replace
   */
  orderReplaceByIdPostOrdersIdReplace?: Maybe<Order>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PUT /Orders/{id}
   */
  orderReplaceByIdPutOrdersId?: Maybe<Order>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to POST /Orders/replaceOrCreate
   */
  orderReplaceOrCreatePostOrdersReplaceOrCreate?: Maybe<Order>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PUT /Orders
   */
  orderReplaceOrCreatePutOrders?: Maybe<Order>
  /** Update instances of the model matched by {{where}} from the data source.
   *
   * Equivalent to POST /Orders/update
   */
  orderUpdateAll?: Maybe<OrdersUpdate>
  /** Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * Equivalent to POST /Orders/upsertWithWhere
   */
  orderUpsertWithWhere?: Maybe<Order>
  /** Create a new instance of the model and persist it into the data source.
   *
   * Equivalent to POST /Shipments
   */
  shipmentCreate?: Maybe<Shipment>
  /** Create a change stream.
   *
   * Equivalent to POST /Shipments/change-stream
   */
  shipmentCreateChangeStreamPostShipmentsChangeStream?: Maybe<Scalars['String']>
  /** Delete a model instance by {{id}} from the data source.
   *
   * Equivalent to DELETE /Shipments/{id}
   */
  shipmentDeleteById?: Maybe<Scalars['String']>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to HEAD /Shipments/{id}
   */
  shipmentExistsHeadShipmentsId?: Maybe<Shipments2>
  /** Patch an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PATCH /Shipments
   */
  shipmentPatchOrCreate?: Maybe<Shipment>
  /** Patch attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PATCH /Shipments/{id}
   */
  shipmentPrototypePatchAttributes?: Maybe<Shipment>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to POST /Shipments/{id}/replace
   */
  shipmentReplaceByIdPostShipmentsIdReplace?: Maybe<Shipment>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PUT /Shipments/{id}
   */
  shipmentReplaceByIdPutShipmentsId?: Maybe<Shipment>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to POST /Shipments/replaceOrCreate
   */
  shipmentReplaceOrCreatePostShipmentsReplaceOrCreate?: Maybe<Shipment>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PUT /Shipments
   */
  shipmentReplaceOrCreatePutShipments?: Maybe<Shipment>
  /** Update instances of the model matched by {{where}} from the data source.
   *
   * Equivalent to POST /Shipments/update
   */
  shipmentUpdateAll?: Maybe<ShipmentsUpdate>
  /** Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * Equivalent to POST /Shipments/upsertWithWhere
   */
  shipmentUpsertWithWhere?: Maybe<Shipment>
  /** Create a new instance of the model and persist it into the data source.
   *
   * Equivalent to POST /Users
   */
  userCreate?: Maybe<User>
  /** Create a change stream.
   *
   * Equivalent to POST /Users/change-stream
   */
  userCreateChangeStreamPostUsersChangeStream?: Maybe<Scalars['String']>
  /** Delete a model instance by {{id}} from the data source.
   *
   * Equivalent to DELETE /Users/{id}
   */
  userDeleteById?: Maybe<Scalars['String']>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to HEAD /Users/{id}
   */
  userExistsHeadUsersId?: Maybe<Users2>
  /** Login a user with username/email and password.
   *
   * Equivalent to POST /Users/login
   */
  userLogin?: Maybe<Scalars['String']>
  /** Patch an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PATCH /Users
   */
  userPatchOrCreate?: Maybe<User>
  /** 이 모델의 accessTokens에서 새 인스턴스를 작성합니다.
   *
   * Equivalent to POST /Users/{id}/accessTokens
   */
  userPrototypeCreateAccessTokens?: Maybe<AccessToken>
  /** Patch attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PATCH /Users/{id}
   */
  userPrototypePatchAttributes?: Maybe<User>
  /** accessTokens에 대해 ID로 관련 항목을 업데이트하십시오.
   *
   * Equivalent to PUT /Users/{id}/accessTokens/{fk}
   */
  userPrototypeUpdateByIdAccessTokens?: Maybe<AccessToken>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to POST /Users/{id}/replace
   */
  userReplaceByIdPostUsersIdReplace?: Maybe<User>
  /** Replace attributes for a model instance and persist it into the data source.
   *
   * Equivalent to PUT /Users/{id}
   */
  userReplaceByIdPutUsersId?: Maybe<User>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to POST /Users/replaceOrCreate
   */
  userReplaceOrCreatePostUsersReplaceOrCreate?: Maybe<User>
  /** Replace an existing model instance or insert a new one into the data source.
   *
   * Equivalent to PUT /Users
   */
  userReplaceOrCreatePutUsers?: Maybe<User>
  /** Update instances of the model matched by {{where}} from the data source.
   *
   * Equivalent to POST /Users/update
   */
  userUpdateAll?: Maybe<UsersUpdate>
  /** Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * Equivalent to POST /Users/upsertWithWhere
   */
  userUpsertWithWhere?: Maybe<User>
}

/** The start of any mutation */
export type MutationBookCreateArgs = {
  bookInput?: Maybe<BookInput>
}

/** The start of any mutation */
export type MutationBookCreateChangeStreamPostBooksChangeStreamArgs = {
  applicationXWwwFormUrlencodedInput?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationBookDeleteByIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationBookExistsHeadBooksIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationBookPatchOrCreateArgs = {
  bookInput?: Maybe<BookInput>
}

/** The start of any mutation */
export type MutationBookPrototypeCreatePeopleArgs = {
  id: Scalars['String']
  linkInput?: Maybe<LinkInput>
}

/** The start of any mutation */
export type MutationBookPrototypePatchAttributesArgs = {
  bookInput?: Maybe<BookInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationBookPrototypeUpdateByIdPeopleArgs = {
  fk: Scalars['String']
  id: Scalars['String']
  linkInput?: Maybe<LinkInput>
}

/** The start of any mutation */
export type MutationBookReplaceByIdPostBooksIdReplaceArgs = {
  bookInput?: Maybe<BookInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationBookReplaceByIdPutBooksIdArgs = {
  bookInput?: Maybe<BookInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationBookReplaceOrCreatePostBooksReplaceOrCreateArgs = {
  bookInput?: Maybe<BookInput>
}

/** The start of any mutation */
export type MutationBookReplaceOrCreatePutBooksArgs = {
  bookInput?: Maybe<BookInput>
}

/** The start of any mutation */
export type MutationBookUpdateAllArgs = {
  bookInput?: Maybe<BookInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationBookUpsertWithWhereArgs = {
  bookInput?: Maybe<BookInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationCustomerCreateArgs = {
  customerInput?: Maybe<CustomerInput>
}

/** The start of any mutation */
export type MutationCustomerCreateChangeStreamPostCustomersChangeStreamArgs = {
  applicationXWwwFormUrlencodedInput?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationCustomerDeleteByIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerExistsHeadCustomersIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPatchOrCreateArgs = {
  customerInput?: Maybe<CustomerInput>
}

/** The start of any mutation */
export type MutationCustomerPrototypeCreateAccountsArgs = {
  accountInput?: Maybe<AccountInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeCreateAddressArgs = {
  addressInput?: Maybe<AddressInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeCreateEmailsArgs = {
  emailAddressInput?: Maybe<EmailAddressInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeCreateOrdersArgs = {
  id: Scalars['String']
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationCustomerPrototypeCreateOrdersShipmentsArgs = {
  id: Scalars['String']
  nk: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationCustomerPrototypeExistsAccountsArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeLinkAccountsArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypePatchAttributesArgs = {
  customerInput?: Maybe<CustomerInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeUpdateAddressArgs = {
  addressInput?: Maybe<AddressInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeUpdateByIdAccountsArgs = {
  accountInput?: Maybe<AccountInput>
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeUpdateByIdEmailsArgs = {
  emailAddressInput?: Maybe<EmailAddressInput>
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerPrototypeUpdateByIdOrdersArgs = {
  fk: Scalars['String']
  id: Scalars['String']
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationCustomerPrototypeUpdateByIdOrdersShipmentsArgs = {
  fk: Scalars['String']
  id: Scalars['String']
  nk: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationCustomerReplaceByIdPostCustomersIdReplaceArgs = {
  customerInput?: Maybe<CustomerInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerReplaceByIdPutCustomersIdArgs = {
  customerInput?: Maybe<CustomerInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationCustomerReplaceOrCreatePostCustomersReplaceOrCreateArgs = {
  customerInput?: Maybe<CustomerInput>
}

/** The start of any mutation */
export type MutationCustomerReplaceOrCreatePutCustomersArgs = {
  customerInput?: Maybe<CustomerInput>
}

/** The start of any mutation */
export type MutationCustomerUpdateAllArgs = {
  customerInput?: Maybe<CustomerInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationCustomerUpsertWithWhereArgs = {
  customerInput?: Maybe<CustomerInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationOrderCreateArgs = {
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderCreateChangeStreamPostOrdersChangeStreamArgs = {
  applicationXWwwFormUrlencodedInput?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationOrderDeleteByIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationOrderExistsHeadOrdersIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationOrderPatchOrCreateArgs = {
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderPrototypeCreateShipmentsArgs = {
  id: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationOrderPrototypePatchAttributesArgs = {
  id: Scalars['String']
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderPrototypeUpdateByIdShipmentsArgs = {
  fk: Scalars['String']
  id: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationOrderReplaceByIdPostOrdersIdReplaceArgs = {
  id: Scalars['String']
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderReplaceByIdPutOrdersIdArgs = {
  id: Scalars['String']
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderReplaceOrCreatePostOrdersReplaceOrCreateArgs = {
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderReplaceOrCreatePutOrdersArgs = {
  orderInput?: Maybe<OrderInput>
}

/** The start of any mutation */
export type MutationOrderUpdateAllArgs = {
  orderInput?: Maybe<OrderInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationOrderUpsertWithWhereArgs = {
  orderInput?: Maybe<OrderInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationShipmentCreateArgs = {
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentCreateChangeStreamPostShipmentsChangeStreamArgs = {
  applicationXWwwFormUrlencodedInput?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationShipmentDeleteByIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationShipmentExistsHeadShipmentsIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationShipmentPatchOrCreateArgs = {
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentPrototypePatchAttributesArgs = {
  id: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentReplaceByIdPostShipmentsIdReplaceArgs = {
  id: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentReplaceByIdPutShipmentsIdArgs = {
  id: Scalars['String']
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentReplaceOrCreatePostShipmentsReplaceOrCreateArgs = {
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentReplaceOrCreatePutShipmentsArgs = {
  shipmentInput?: Maybe<ShipmentInput>
}

/** The start of any mutation */
export type MutationShipmentUpdateAllArgs = {
  shipmentInput?: Maybe<ShipmentInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationShipmentUpsertWithWhereArgs = {
  shipmentInput?: Maybe<ShipmentInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationUserCreateArgs = {
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserCreateChangeStreamPostUsersChangeStreamArgs = {
  applicationXWwwFormUrlencodedInput?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationUserDeleteByIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationUserExistsHeadUsersIdArgs = {
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationUserLoginArgs = {
  include?: Maybe<Scalars['String']>
  usersLoginInput: Scalars['String']
}

/** The start of any mutation */
export type MutationUserPatchOrCreateArgs = {
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserPrototypeCreateAccessTokensArgs = {
  accessTokenInput?: Maybe<AccessTokenInput>
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationUserPrototypePatchAttributesArgs = {
  id: Scalars['String']
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserPrototypeUpdateByIdAccessTokensArgs = {
  accessTokenInput?: Maybe<AccessTokenInput>
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any mutation */
export type MutationUserReplaceByIdPostUsersIdReplaceArgs = {
  id: Scalars['String']
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserReplaceByIdPutUsersIdArgs = {
  id: Scalars['String']
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserReplaceOrCreatePostUsersReplaceOrCreateArgs = {
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserReplaceOrCreatePutUsersArgs = {
  userInput?: Maybe<UserInput>
}

/** The start of any mutation */
export type MutationUserUpdateAllArgs = {
  userInput?: Maybe<UserInput>
  where?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type MutationUserUpsertWithWhereArgs = {
  userInput?: Maybe<UserInput>
  where?: Maybe<Scalars['String']>
}

/** No description available. */
export type Order = {
  __typename?: 'Order'
  /** No description available. */
  customerId?: Maybe<Scalars['Float']>
  /** No description available. */
  date?: Maybe<Scalars['String']>
  /** No description available. */
  description?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
}

/** No description available. */
export type OrderInput = {
  /** No description available. */
  customerId?: Maybe<Scalars['Float']>
  /** No description available. */
  date?: Maybe<Scalars['String']>
  /** No description available. */
  description?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
}

/** No description available. */
export type Orders2 = {
  __typename?: 'Orders2'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type OrdersCount = {
  __typename?: 'OrdersCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type OrdersExists = {
  __typename?: 'OrdersExists'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type OrdersShipmentsCount = {
  __typename?: 'OrdersShipmentsCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** Information related to the outcome of the operation */
export type OrdersUpdate = {
  __typename?: 'OrdersUpdate'
  /** The number of instances updated */
  count?: Maybe<Scalars['Float']>
}

/** The start of any query */
export type Query = {
  __typename?: 'Query'
  /** accessTokens에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Users/{id}/accessTokens/{fk}
   */
  accessToken?: Maybe<AccessToken>
  /** accounts에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Customers/{id}/accounts/{fk}
   */
  account?: Maybe<Account>
  /** 페치에 하나의 관계 address이(가) 있습니다.
   *
   * Equivalent to GET /Customers/{id}/address
   */
  address?: Maybe<Address>
  /** Find first instance of the model matched by filter from the data source.
   *
   * Equivalent to GET /Books/findOne
   */
  book?: Maybe<Book>
  /** Find a model instance by {{id}} from the data source.
   *
   * Equivalent to GET /Books/{id}
   */
  bookFindById?: Maybe<Book>
  /** Find all instances of the model matched by filter from the data source.
   *
   * Equivalent to GET /Books
   */
  books?: Maybe<Array<Maybe<Book>>>
  /** Create a change stream.
   *
   * Equivalent to GET /Books/change-stream
   */
  booksChangeStream?: Maybe<Scalars['String']>
  /** Count instances of the model matched by where from the data source.
   *
   * Equivalent to GET /Books/count
   */
  booksCount?: Maybe<BooksCount>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to GET /Books/{id}/exists
   */
  booksExists?: Maybe<BooksExists>
  /** Book의 people을(를) 조회합니다.
   *
   * Equivalent to GET /Books/{id}/people
   */
  booksPeople?: Maybe<Array<Maybe<Link>>>
  /** Book의 people을(를) 계수합니다.
   *
   * Equivalent to GET /Books/{id}/people/count
   */
  booksPeopleCount?: Maybe<BooksPeopleCount>
  /** 페치가 관계 customer에 속합니다.
   *
   * Equivalent to GET /Orders/{id}/customer
   */
  customer?: Maybe<Customer>
  /** Find a model instance by {{id}} from the data source.
   *
   * Equivalent to GET /Customers/{id}
   */
  customerFindById?: Maybe<Customer>
  /** Find first instance of the model matched by filter from the data source.
   *
   * Equivalent to GET /Customers/findOne
   */
  customerFindOne?: Maybe<Customer>
  /** orders에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Customers/{id}/orders/{fk}
   */
  customerPrototypeFindByIdOrders?: Maybe<Order>
  /** shipments에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Customers/{id}/orders/{nk}/shipments/{fk}
   */
  customerPrototypeFindByIdOrdersShipments?: Maybe<Shipment>
  /** 페치가 관계 customer에 속합니다.
   *
   * Equivalent to GET /Customers/{id}/orders/{nk}/customer
   */
  customerPrototypeGetOrdersCustomer?: Maybe<Customer>
  /** Find all instances of the model matched by filter from the data source.
   *
   * Equivalent to GET /Customers
   */
  customers?: Maybe<Array<Maybe<Customer>>>
  /** Customer의 accounts을(를) 조회합니다.
   *
   * Equivalent to GET /Customers/{id}/accounts
   */
  customersAccounts?: Maybe<Array<Maybe<Account>>>
  /** Customer의 accounts을(를) 계수합니다.
   *
   * Equivalent to GET /Customers/{id}/accounts/count
   */
  customersAccountsCount?: Maybe<CustomersAccountsCount>
  /** Create a change stream.
   *
   * Equivalent to GET /Customers/change-stream
   */
  customersChangeStream?: Maybe<Scalars['String']>
  /** Count instances of the model matched by where from the data source.
   *
   * Equivalent to GET /Customers/count
   */
  customersCount?: Maybe<CustomersCount>
  /** Customer의 emails을(를) 조회합니다.
   *
   * Equivalent to GET /Customers/{id}/emails
   */
  customersEmails?: Maybe<Array<Maybe<EmailAddress>>>
  /** Customer의 emails을(를) 계수합니다.
   *
   * Equivalent to GET /Customers/{id}/emails/count
   */
  customersEmailsCount?: Maybe<CustomersEmailsCount>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to GET /Customers/{id}/exists
   */
  customersExists?: Maybe<CustomersExists>
  /** Customer의 orders을(를) 조회합니다.
   *
   * Equivalent to GET /Customers/{id}/orders
   */
  customersOrders?: Maybe<Array<Maybe<Order>>>
  /** Customer의 orders을(를) 계수합니다.
   *
   * Equivalent to GET /Customers/{id}/orders/count
   */
  customersOrdersCount?: Maybe<CustomersOrdersCount>
  /** Order의 shipments을(를) 조회합니다.
   *
   * Equivalent to GET /Customers/{id}/orders/{nk}/shipments
   */
  customersOrdersShipments?: Maybe<Array<Maybe<Shipment>>>
  /** Order의 shipments을(를) 계수합니다.
   *
   * Equivalent to GET /Customers/{id}/orders/{nk}/shipments/count
   */
  customersOrdersShipmentsCount?: Maybe<CustomersOrdersShipmentsCount>
  /** emails에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Customers/{id}/emails/{fk}
   */
  emailAddress?: Maybe<EmailAddress>
  /** people에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Books/{id}/people/{fk}
   */
  link?: Maybe<Link>
  /** 페치가 관계 order에 속합니다.
   *
   * Equivalent to GET /Shipments/{id}/order
   */
  order?: Maybe<Order>
  /** Find a model instance by {{id}} from the data source.
   *
   * Equivalent to GET /Orders/{id}
   */
  orderFindById?: Maybe<Order>
  /** Find first instance of the model matched by filter from the data source.
   *
   * Equivalent to GET /Orders/findOne
   */
  orderFindOne?: Maybe<Order>
  /** shipments에 대해 ID로 관련 항목을 찾으십시오.
   *
   * Equivalent to GET /Orders/{id}/shipments/{fk}
   */
  orderPrototypeFindByIdShipments?: Maybe<Shipment>
  /** Find all instances of the model matched by filter from the data source.
   *
   * Equivalent to GET /Orders
   */
  orders?: Maybe<Array<Maybe<Order>>>
  /** Create a change stream.
   *
   * Equivalent to GET /Orders/change-stream
   */
  ordersChangeStream?: Maybe<Scalars['String']>
  /** Count instances of the model matched by where from the data source.
   *
   * Equivalent to GET /Orders/count
   */
  ordersCount?: Maybe<OrdersCount>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to GET /Orders/{id}/exists
   */
  ordersExists?: Maybe<OrdersExists>
  /** Order의 shipments을(를) 조회합니다.
   *
   * Equivalent to GET /Orders/{id}/shipments
   */
  ordersShipments?: Maybe<Array<Maybe<Shipment>>>
  /** Order의 shipments을(를) 계수합니다.
   *
   * Equivalent to GET /Orders/{id}/shipments/count
   */
  ordersShipmentsCount?: Maybe<OrdersShipmentsCount>
  /** Find first instance of the model matched by filter from the data source.
   *
   * Equivalent to GET /Shipments/findOne
   */
  shipment?: Maybe<Shipment>
  /** Find a model instance by {{id}} from the data source.
   *
   * Equivalent to GET /Shipments/{id}
   */
  shipmentFindById?: Maybe<Shipment>
  /** Find all instances of the model matched by filter from the data source.
   *
   * Equivalent to GET /Shipments
   */
  shipments?: Maybe<Array<Maybe<Shipment>>>
  /** Create a change stream.
   *
   * Equivalent to GET /Shipments/change-stream
   */
  shipmentsChangeStream?: Maybe<Scalars['String']>
  /** Count instances of the model matched by where from the data source.
   *
   * Equivalent to GET /Shipments/count
   */
  shipmentsCount?: Maybe<ShipmentsCount>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to GET /Shipments/{id}/exists
   */
  shipmentsExists?: Maybe<ShipmentsExists>
  /** Find a model instance by {{id}} from the data source.
   *
   * Equivalent to GET /Users/{id}
   */
  user?: Maybe<User>
  /** Find first instance of the model matched by filter from the data source.
   *
   * Equivalent to GET /Users/findOne
   */
  userFindOne?: Maybe<User>
  /** Find all instances of the model matched by filter from the data source.
   *
   * Equivalent to GET /Users
   */
  users?: Maybe<Array<Maybe<User>>>
  /** User의 accessTokens을(를) 조회합니다.
   *
   * Equivalent to GET /Users/{id}/accessTokens
   */
  usersAccessTokens?: Maybe<Array<Maybe<AccessToken>>>
  /** User의 accessTokens을(를) 계수합니다.
   *
   * Equivalent to GET /Users/{id}/accessTokens/count
   */
  usersAccessTokensCount?: Maybe<UsersAccessTokensCount>
  /** Create a change stream.
   *
   * Equivalent to GET /Users/change-stream
   */
  usersChangeStream?: Maybe<Scalars['String']>
  /** Count instances of the model matched by where from the data source.
   *
   * Equivalent to GET /Users/count
   */
  usersCount?: Maybe<UsersCount>
  /** Check whether a model instance exists in the data source.
   *
   * Equivalent to GET /Users/{id}/exists
   */
  usersExists?: Maybe<UsersExists>
}

/** The start of any query */
export type QueryAccessTokenArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any query */
export type QueryAccountArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any query */
export type QueryAddressArgs = {
  id: Scalars['String']
  refresh?: Maybe<Scalars['Boolean']>
}

/** The start of any query */
export type QueryBookArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryBookFindByIdArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryBooksArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryBooksChangeStreamArgs = {
  options?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryBooksCountArgs = {
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryBooksExistsArgs = {
  id: Scalars['String']
}

/** The start of any query */
export type QueryBooksPeopleArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryBooksPeopleCountArgs = {
  id: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomerArgs = {
  id: Scalars['String']
  refresh?: Maybe<Scalars['Boolean']>
}

/** The start of any query */
export type QueryCustomerFindByIdArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryCustomerFindOneArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomerPrototypeFindByIdOrdersArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any query */
export type QueryCustomerPrototypeFindByIdOrdersShipmentsArgs = {
  fk: Scalars['String']
  id: Scalars['String']
  nk: Scalars['String']
}

/** The start of any query */
export type QueryCustomerPrototypeGetOrdersCustomerArgs = {
  id: Scalars['String']
  nk: Scalars['String']
  refresh?: Maybe<Scalars['Boolean']>
}

/** The start of any query */
export type QueryCustomersArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomersAccountsArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryCustomersAccountsCountArgs = {
  id: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomersChangeStreamArgs = {
  options?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomersCountArgs = {
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomersEmailsArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryCustomersEmailsCountArgs = {
  id: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomersExistsArgs = {
  id: Scalars['String']
}

/** The start of any query */
export type QueryCustomersOrdersArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryCustomersOrdersCountArgs = {
  id: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryCustomersOrdersShipmentsArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
  nk: Scalars['String']
}

/** The start of any query */
export type QueryCustomersOrdersShipmentsCountArgs = {
  id: Scalars['String']
  nk: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryEmailAddressArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any query */
export type QueryLinkArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any query */
export type QueryOrderArgs = {
  id: Scalars['String']
  refresh?: Maybe<Scalars['Boolean']>
}

/** The start of any query */
export type QueryOrderFindByIdArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryOrderFindOneArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryOrderPrototypeFindByIdShipmentsArgs = {
  fk: Scalars['String']
  id: Scalars['String']
}

/** The start of any query */
export type QueryOrdersArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryOrdersChangeStreamArgs = {
  options?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryOrdersCountArgs = {
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryOrdersExistsArgs = {
  id: Scalars['String']
}

/** The start of any query */
export type QueryOrdersShipmentsArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryOrdersShipmentsCountArgs = {
  id: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryShipmentArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryShipmentFindByIdArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryShipmentsArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryShipmentsChangeStreamArgs = {
  options?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryShipmentsCountArgs = {
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryShipmentsExistsArgs = {
  id: Scalars['String']
}

/** The start of any query */
export type QueryUserArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryUserFindOneArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryUsersArgs = {
  filter?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryUsersAccessTokensArgs = {
  filter?: Maybe<Scalars['String']>
  id: Scalars['String']
}

/** The start of any query */
export type QueryUsersAccessTokensCountArgs = {
  id: Scalars['String']
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryUsersChangeStreamArgs = {
  options?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryUsersCountArgs = {
  where?: Maybe<Scalars['String']>
}

/** The start of any query */
export type QueryUsersExistsArgs = {
  id: Scalars['String']
}

/** No description available. */
export type Shipment = {
  __typename?: 'Shipment'
  /** No description available. */
  date?: Maybe<Scalars['String']>
  /** No description available. */
  description?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  orderId?: Maybe<Scalars['Float']>
}

/** No description available. */
export type ShipmentInput = {
  /** No description available. */
  date?: Maybe<Scalars['String']>
  /** No description available. */
  description?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  orderId?: Maybe<Scalars['Float']>
}

/** No description available. */
export type Shipments2 = {
  __typename?: 'Shipments2'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type ShipmentsCount = {
  __typename?: 'ShipmentsCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type ShipmentsExists = {
  __typename?: 'ShipmentsExists'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** Information related to the outcome of the operation */
export type ShipmentsUpdate = {
  __typename?: 'ShipmentsUpdate'
  /** The number of instances updated */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type User = {
  __typename?: 'User'
  /** No description available. */
  email?: Maybe<Scalars['String']>
  /** No description available. */
  emailVerified?: Maybe<Scalars['Boolean']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  realm?: Maybe<Scalars['String']>
  /** No description available. */
  username?: Maybe<Scalars['String']>
}

/** No description available. */
export type UserInput = {
  /** No description available. */
  email?: Maybe<Scalars['String']>
  /** No description available. */
  emailVerified?: Maybe<Scalars['Boolean']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  realm?: Maybe<Scalars['String']>
  /** No description available. */
  username?: Maybe<Scalars['String']>
}

/** No description available. */
export type Users2 = {
  __typename?: 'Users2'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** No description available. */
export type UsersAccessTokensCount = {
  __typename?: 'UsersAccessTokensCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type UsersCount = {
  __typename?: 'UsersCount'
  /** No description available. */
  count?: Maybe<Scalars['Float']>
}

/** No description available. */
export type UsersExists = {
  __typename?: 'UsersExists'
  /** No description available. */
  exists?: Maybe<Scalars['Boolean']>
}

/** Information related to the outcome of the operation */
export type UsersUpdate = {
  __typename?: 'UsersUpdate'
  /** The number of instances updated */
  count?: Maybe<Scalars['Float']>
}
