/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Attribute = {
  __typename?: 'Attribute';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  values?: Maybe<Array<Scalars['String']['output']>>;
};

export type AttributeInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['DateTime']['input'];
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Category = {
  __typename?: 'Category';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  posts?: Maybe<Array<Post>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangePasswordWhenForgotInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateAttributeInput = {
  content?: Scalars['String']['input'];
  title?: Scalars['String']['input'];
  values?: Array<Scalars['String']['input']>;
};

export type CreateCategoryInput = {
  content?: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type CreatePostCommentInput = {
  content?: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreatePostInput = {
  content?: Scalars['String']['input'];
  postCatIds?: Array<Scalars['String']['input']>;
  postTagIds?: Array<Scalars['String']['input']>;
  published?: Scalars['Boolean']['input'];
  summary?: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type CreateProductCatInput = {
  content?: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type CreateProductInput = {
  content?: Scalars['String']['input'];
  discount?: Scalars['Float']['input'];
  image?: Scalars['String']['input'];
  price?: Scalars['Float']['input'];
  published?: Scalars['Boolean']['input'];
  quantity?: Scalars['Float']['input'];
  title?: Scalars['String']['input'];
  variantOptions?: InputMaybe<Array<VariantOptionInput>>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

export type CreateTagInput = {
  title?: Scalars['String']['input'];
};

export type DataMutationResponse = MutationResponse & {
  __typename?: 'DataMutationResponse';
  attribute?: Maybe<Attribute>;
  attributes?: Maybe<Array<Attribute>>;
  categories?: Maybe<Array<Category>>;
  category?: Maybe<Category>;
  code: Scalars['Float']['output'];
  count?: Maybe<Scalars['Float']['output']>;
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  postComment?: Maybe<PostComment>;
  postComments?: Maybe<Array<PostComment>>;
  posts?: Maybe<Array<Post>>;
  product?: Maybe<Product>;
  productCat?: Maybe<ProductCat>;
  productCats?: Maybe<Array<ProductCat>>;
  products?: Maybe<Array<Product>>;
  success: Scalars['Boolean']['output'];
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type GetAttributesInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type GetCategoriesInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type GetPostsInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type GetProductCatsInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type GetProductsInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type GetTagsInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: DataMutationResponse;
  changePasswordWhenForgot: DataMutationResponse;
  createAttribute: DataMutationResponse;
  createCategory: DataMutationResponse;
  createPost: DataMutationResponse;
  createPostComment: DataMutationResponse;
  createProduct: DataMutationResponse;
  createProductCat: DataMutationResponse;
  createTag: DataMutationResponse;
  deleteAttribute: DataMutationResponse;
  deleteCategory: DataMutationResponse;
  deletePost: DataMutationResponse;
  deletePostComment: DataMutationResponse;
  deleteProduct: DataMutationResponse;
  deleteProductCat: DataMutationResponse;
  deleteTag: DataMutationResponse;
  forgotPassword: DataMutationResponse;
  login: DataMutationResponse;
  logout: Scalars['Boolean']['output'];
  register: DataMutationResponse;
  updateAttribute: DataMutationResponse;
  updateCategory: DataMutationResponse;
  updatePost: DataMutationResponse;
  updatePostComment: DataMutationResponse;
  updateProduct: DataMutationResponse;
  updateProductCat: DataMutationResponse;
  updateTag: DataMutationResponse;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangePasswordWhenForgotArgs = {
  changePasswordWhenForgotInput: ChangePasswordWhenForgotInput;
};


export type MutationCreateAttributeArgs = {
  createAttributeInput: CreateAttributeInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreatePostCommentArgs = {
  createPostCommentInput: CreatePostCommentInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateProductCatArgs = {
  createProductCatInput: CreateProductCatInput;
};


export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};


export type MutationDeleteAttributeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePostCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductCatArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateAttributeArgs = {
  updateAttributeInput: UpdateAttributeInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput?: InputMaybe<UpdateCategoryInput>;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdatePostCommentArgs = {
  updatePostCommentInput: UpdatePostCommentInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProductCatArgs = {
  updateProductCatInput: UpdateProductCatInput;
};


export type MutationUpdateTagArgs = {
  updateTagInput?: InputMaybe<UpdateTagInput>;
};

export type MutationResponse = {
  code: Scalars['Float']['output'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  categories?: Maybe<Array<Category>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  postCatIds: Array<Scalars['String']['output']>;
  postComments: Array<PostComment>;
  postTagIds: Array<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type PostComment = {
  __typename?: 'PostComment';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type Product = {
  __typename?: 'Product';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  discount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  published: Scalars['Boolean']['output'];
  quantity: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  variantOptions?: Maybe<Array<VariantOption>>;
  variants?: Maybe<Array<ProductVariant>>;
};

export type ProductCat = {
  __typename?: 'ProductCat';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  products?: Maybe<Array<Product>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  attribute?: Maybe<Attribute>;
  attributeId: Scalars['String']['output'];
  values?: Maybe<Array<Scalars['String']['output']>>;
};

export type ProductVariantInput = {
  attribute?: InputMaybe<AttributeInput>;
  attributeId: Scalars['String']['input'];
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  getAttribute: DataMutationResponse;
  getAttributes: DataMutationResponse;
  getCategories: DataMutationResponse;
  getCategory: DataMutationResponse;
  getPost: DataMutationResponse;
  getPosts: DataMutationResponse;
  getProduct: DataMutationResponse;
  getProductCat: DataMutationResponse;
  getProductCats: DataMutationResponse;
  getProducts: DataMutationResponse;
  getTag: DataMutationResponse;
  getTags: DataMutationResponse;
  me: DataMutationResponse;
};


export type QueryGetAttributeArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAttributesArgs = {
  getAttributesInput: GetAttributesInput;
};


export type QueryGetCategoriesArgs = {
  getCategoriesInput: GetCategoriesInput;
};


export type QueryGetCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostsArgs = {
  getPostsInput?: InputMaybe<GetPostsInput>;
};


export type QueryGetProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProductCatArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProductCatsArgs = {
  getProductCatsInput?: InputMaybe<GetProductCatsInput>;
};


export type QueryGetProductsArgs = {
  getProductsInput?: InputMaybe<GetProductsInput>;
};


export type QueryGetTagArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTagsArgs = {
  getTagsInput?: InputMaybe<GetTagsInput>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  posts?: Maybe<Array<Post>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type UpdateAttributeInput = {
  content?: Scalars['String']['input'];
  id: Scalars['String']['input'];
  title?: Scalars['String']['input'];
  values?: Array<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  content?: Scalars['String']['input'];
  id: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type UpdatePostCommentInput = {
  content?: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type UpdatePostInput = {
  content?: Scalars['String']['input'];
  id?: Scalars['String']['input'];
  postCatIds?: Array<Scalars['String']['input']>;
  postTagIds?: Array<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  summary?: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type UpdateProductCatInput = {
  content?: Scalars['String']['input'];
  id: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type UpdateProductInput = {
  content?: Scalars['String']['input'];
  discount?: Scalars['Float']['input'];
  id: Scalars['String']['input'];
  image?: Scalars['String']['input'];
  price?: Scalars['Float']['input'];
  published?: Scalars['Boolean']['input'];
  quantity?: Scalars['Float']['input'];
  title?: Scalars['String']['input'];
  variantOptions?: InputMaybe<Array<VariantOptionInput>>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

export type UpdateTagInput = {
  id: Scalars['String']['input'];
  title?: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type VariantOption = {
  __typename?: 'VariantOption';
  SKU: Scalars['String']['output'];
  discount: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  published: Scalars['Boolean']['output'];
  quantity: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  variants: Array<VariantOptionItem>;
};

export type VariantOptionInput = {
  SKU: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  image?: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  published: Scalars['Boolean']['input'];
  quantity: Scalars['Float']['input'];
  title: Scalars['String']['input'];
  variants?: Array<VariantOptionItemInput>;
};

export type VariantOptionItem = {
  __typename?: 'VariantOptionItem';
  attribute?: Maybe<Attribute>;
  attributeId: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type VariantOptionItemInput = {
  attribute?: InputMaybe<AttributeInput>;
  attributeId: Scalars['String']['input'];
  value?: Scalars['String']['input'];
};

export type CatInfoFragment = { __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null };

export type DataInfoFragment = { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

export type FieldErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type PostInfoFragment = { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null };

export type UserInfoFragment = { __typename?: 'User', id: string, username: string, email: string };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type UpdatePostMutationVariables = Exact<{
  updatePostInput: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type ChangePasswordMutationVariables = Exact<{
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type PostsQueryVariables = Exact<{
  getPostsInput?: InputMaybe<GetPostsInput>;
}>;


export type PostsQuery = { __typename?: 'Query', getPosts: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type PostQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', getPost: { __typename?: 'DataMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null, post?: { __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title: string, slug: string, summary: string, published: boolean, content: string, createdAt: any, updatedAt: any, categories?: Array<{ __typename?: 'Category', id: string, title: string, slug: string, content: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, email: string } | null }> | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export const UserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UserInfoFragment, unknown>;
export const CatInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CatInfoFragment, unknown>;
export const PostInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<PostInfoFragment, unknown>;
export const FieldErrorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<FieldErrorFragment, unknown>;
export const DataInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<DataInfoFragment, unknown>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPostInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPostInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPostInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePostInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePostInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePostInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"forgotPasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"forgotPasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"forgotPasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changePasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"changePasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changePasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getPostsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPostsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getPostsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getPostsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"dataInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"catInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"catInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fieldError"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"dataInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataMutationResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fieldError"}}]}}]}}]} as unknown as DocumentNode<PostQuery, PostQueryVariables>;