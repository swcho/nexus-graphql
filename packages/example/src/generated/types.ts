export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

/** API key credentials for the security protocol 'api_key' */
export type ApiKeyInput = {
  /** No description available. */
  apiKey?: Maybe<Scalars['String']>
}

/** Describes the result of uploading an image resource */
export type ApiResponse = {
  __typename?: 'ApiResponse'
  /** No description available. */
  code?: Maybe<Scalars['Int']>
  /** No description available. */
  message?: Maybe<Scalars['String']>
  /** No description available. */
  type?: Maybe<Scalars['String']>
}

/** A category for a pet */
export type Category = {
  __typename?: 'Category'
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** The start of any mutation */
export type Mutation = {
  __typename?: 'Mutation'
  /** Place an order for a pet
   *
   * Equivalent to POST /store/order
   */
  placeOrder?: Maybe<Order>
  /** uploads an image
   *
   * Equivalent to POST /pet/{petId}/uploadImage
   */
  uploadFile?: Maybe<ApiResponse>
}

/** The start of any mutation */
export type MutationPlaceOrderArgs = {
  orderInput: OrderInput
}

/** The start of any mutation */
export type MutationUploadFileArgs = {
  multipartFormDataInput?: Maybe<Scalars['String']>
  petId: Scalars['Float']
}

/** An order for a pets from the pet store */
export type Order = {
  __typename?: 'Order'
  /** No description available. */
  complete?: Maybe<Scalars['Boolean']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  petId?: Maybe<Scalars['Float']>
  /** No description available. */
  quantity?: Maybe<Scalars['Int']>
  /** No description available. */
  shipDate?: Maybe<Scalars['String']>
  /** Order Status */
  status?: Maybe<Status2>
}

/** An order for a pets from the pet store */
export type OrderInput = {
  /** No description available. */
  complete?: Maybe<Scalars['Boolean']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  petId?: Maybe<Scalars['Float']>
  /** No description available. */
  quantity?: Maybe<Scalars['Int']>
  /** No description available. */
  shipDate?: Maybe<Scalars['String']>
  /** Order Status */
  status?: Maybe<Status2>
}

/** A pet for sale in the pet store */
export type Pet = {
  __typename?: 'Pet'
  /** A category for a pet */
  category?: Maybe<Category>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
  /** No description available. */
  photoUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  /** pet status in the store */
  status?: Maybe<Status>
  /** No description available. */
  tags?: Maybe<Array<Maybe<Tag>>>
}

/** The start of any query */
export type Query = {
  __typename?: 'Query'
  /** For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
   *
   * Equivalent to GET /store/order/{orderId}
   */
  order?: Maybe<Order>
  /** Multiple status values can be provided with comma separated strings
   *
   * Equivalent to GET /pet/findByStatus
   */
  petFindByStatus?: Maybe<Array<Maybe<Pet>>>
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * Equivalent to GET /pet/findByTags
   */
  petFindByTags?: Maybe<Array<Maybe<Pet>>>
  /** Get user by user name
   *
   * Equivalent to GET /user/{username}
   */
  user?: Maybe<User>
  /** Logs user into the system
   *
   * Equivalent to GET /user/login
   */
  userLogin?: Maybe<Scalars['String']>
  /** A viewer that wraps all operations authenticated via security scheme 'api_key', which is of type 'apiKey' */
  viewerApiKey?: Maybe<ViewerApiKey>
  /** A viewer that wraps operations for all available authentication mechanisms */
  viewerAnyAuth?: Maybe<ViewerAnyAuth>
}

/** The start of any query */
export type QueryOrderArgs = {
  orderId: Scalars['Float']
}

/** The start of any query */
export type QueryPetFindByStatusArgs = {
  status: Array<Maybe<Status3ListItem>>
}

/** The start of any query */
export type QueryPetFindByTagsArgs = {
  tags: Array<Maybe<Scalars['String']>>
}

/** The start of any query */
export type QueryUserArgs = {
  username: Scalars['String']
}

/** The start of any query */
export type QueryUserLoginArgs = {
  password: Scalars['String']
  username: Scalars['String']
}

/** The start of any query */
export type QueryViewerApiKeyArgs = {
  apiKey: Scalars['String']
}

/** The start of any query */
export type QueryViewerAnyAuthArgs = {
  apiKey?: Maybe<ApiKeyInput>
}

export enum Status {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export enum Status2 {
  Placed = 'placed',
  Approved = 'approved',
  Delivered = 'delivered',
}

export enum Status3ListItem {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

/** A tag for a pet */
export type Tag = {
  __typename?: 'Tag'
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  name?: Maybe<Scalars['String']>
}

/** A User who is purchasing from the pet store */
export type User = {
  __typename?: 'User'
  /** No description available. */
  email?: Maybe<Scalars['String']>
  /** No description available. */
  firstName?: Maybe<Scalars['String']>
  /** No description available. */
  id?: Maybe<Scalars['Float']>
  /** No description available. */
  lastName?: Maybe<Scalars['String']>
  /** No description available. */
  password?: Maybe<Scalars['String']>
  /** No description available. */
  phone?: Maybe<Scalars['String']>
  /** User Status */
  userStatus?: Maybe<Scalars['Int']>
  /** No description available. */
  username?: Maybe<Scalars['String']>
}

/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuth = {
  __typename?: 'viewerAnyAuth'
  /** Returns a single pet
   *
   * Equivalent to GET /pet/{petId}
   */
  pet?: Maybe<Pet>
  /** Returns a map of status codes to quantities
   *
   * Equivalent to GET /store/inventory
   */
  storeInventory?: Maybe<Scalars['JSON']>
}

/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthPetArgs = {
  petId: Scalars['Float']
}

/** A viewer for security scheme 'api_key' */
export type ViewerApiKey = {
  __typename?: 'viewerApiKey'
  /** Returns a single pet
   *
   * Equivalent to GET /pet/{petId}
   */
  pet?: Maybe<Pet>
  /** Returns a map of status codes to quantities
   *
   * Equivalent to GET /store/inventory
   */
  storeInventory?: Maybe<Scalars['JSON']>
}

/** A viewer for security scheme 'api_key' */
export type ViewerApiKeyPetArgs = {
  petId: Scalars['Float']
}
