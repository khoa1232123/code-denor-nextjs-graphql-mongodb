/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment catInfo on Category {\n  id\n  title\n  slug\n  content\n  posts {\n    id\n    title\n  }\n  createdAt\n  updatedAt\n}": types.CatInfoFragmentDoc,
    "fragment dataInfo on DataMutationResponse {\n  code\n  success\n  message\n  user {\n    ...userInfo\n  }\n  post {\n    ...postInfo\n  }\n  posts {\n    ...postInfo\n  }\n  errors {\n    ...fieldError\n  }\n}": types.DataInfoFragmentDoc,
    "fragment fieldError on FieldError {\n  field\n  message\n}": types.FieldErrorFragmentDoc,
    "fragment postInfo on Post {\n  id\n  title\n  slug\n  summary\n  published\n  content\n  categories {\n    ...catInfo\n  }\n  user {\n    ...userInfo\n  }\n  createdAt\n  updatedAt\n}": types.PostInfoFragmentDoc,
    "fragment userInfo on User {\n  id\n  username\n  email\n}": types.UserInfoFragmentDoc,
    "mutation CreatePost($createPostInput: CreatePostInput!) {\n  createPost(createPostInput: $createPostInput) {\n    ...dataInfo\n  }\n}\n\nmutation UpdatePost($updatePostInput: UpdatePostInput!) {\n  updatePost(updatePostInput: $updatePostInput) {\n    ...dataInfo\n  }\n}\n\nmutation DeletePost($id: String!) {\n  deletePost(id: $id) {\n    ...dataInfo\n  }\n}": types.CreatePostDocument,
    "mutation Register($registerInput: RegisterInput!) {\n  register(registerInput: $registerInput) {\n    ...dataInfo\n  }\n}\n\nmutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    ...dataInfo\n  }\n}\n\nmutation Logout {\n  logout\n}\n\nmutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {\n  forgotPassword(forgotPasswordInput: $forgotPasswordInput) {\n    ...dataInfo\n  }\n}\n\nmutation ChangePassword($changePasswordInput: ChangePasswordInput!) {\n  changePassword(changePasswordInput: $changePasswordInput) {\n    ...dataInfo\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    ...dataInfo\n  }\n}": types.MeDocument,
    "query Posts($getPostsInput: GetPostsInput) {\n  getPosts(getPostsInput: $getPostsInput) {\n    ...dataInfo\n  }\n}\n\nquery Post($id: String!) {\n  getPost(id: $id) {\n    ...dataInfo\n  }\n}": types.PostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment catInfo on Category {\n  id\n  title\n  slug\n  content\n  posts {\n    id\n    title\n  }\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment catInfo on Category {\n  id\n  title\n  slug\n  content\n  posts {\n    id\n    title\n  }\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment dataInfo on DataMutationResponse {\n  code\n  success\n  message\n  user {\n    ...userInfo\n  }\n  post {\n    ...postInfo\n  }\n  posts {\n    ...postInfo\n  }\n  errors {\n    ...fieldError\n  }\n}"): (typeof documents)["fragment dataInfo on DataMutationResponse {\n  code\n  success\n  message\n  user {\n    ...userInfo\n  }\n  post {\n    ...postInfo\n  }\n  posts {\n    ...postInfo\n  }\n  errors {\n    ...fieldError\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment fieldError on FieldError {\n  field\n  message\n}"): (typeof documents)["fragment fieldError on FieldError {\n  field\n  message\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment postInfo on Post {\n  id\n  title\n  slug\n  summary\n  published\n  content\n  categories {\n    ...catInfo\n  }\n  user {\n    ...userInfo\n  }\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment postInfo on Post {\n  id\n  title\n  slug\n  summary\n  published\n  content\n  categories {\n    ...catInfo\n  }\n  user {\n    ...userInfo\n  }\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment userInfo on User {\n  id\n  username\n  email\n}"): (typeof documents)["fragment userInfo on User {\n  id\n  username\n  email\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($createPostInput: CreatePostInput!) {\n  createPost(createPostInput: $createPostInput) {\n    ...dataInfo\n  }\n}\n\nmutation UpdatePost($updatePostInput: UpdatePostInput!) {\n  updatePost(updatePostInput: $updatePostInput) {\n    ...dataInfo\n  }\n}\n\nmutation DeletePost($id: String!) {\n  deletePost(id: $id) {\n    ...dataInfo\n  }\n}"): (typeof documents)["mutation CreatePost($createPostInput: CreatePostInput!) {\n  createPost(createPostInput: $createPostInput) {\n    ...dataInfo\n  }\n}\n\nmutation UpdatePost($updatePostInput: UpdatePostInput!) {\n  updatePost(updatePostInput: $updatePostInput) {\n    ...dataInfo\n  }\n}\n\nmutation DeletePost($id: String!) {\n  deletePost(id: $id) {\n    ...dataInfo\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($registerInput: RegisterInput!) {\n  register(registerInput: $registerInput) {\n    ...dataInfo\n  }\n}\n\nmutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    ...dataInfo\n  }\n}\n\nmutation Logout {\n  logout\n}\n\nmutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {\n  forgotPassword(forgotPasswordInput: $forgotPasswordInput) {\n    ...dataInfo\n  }\n}\n\nmutation ChangePassword($changePasswordInput: ChangePasswordInput!) {\n  changePassword(changePasswordInput: $changePasswordInput) {\n    ...dataInfo\n  }\n}"): (typeof documents)["mutation Register($registerInput: RegisterInput!) {\n  register(registerInput: $registerInput) {\n    ...dataInfo\n  }\n}\n\nmutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    ...dataInfo\n  }\n}\n\nmutation Logout {\n  logout\n}\n\nmutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {\n  forgotPassword(forgotPasswordInput: $forgotPasswordInput) {\n    ...dataInfo\n  }\n}\n\nmutation ChangePassword($changePasswordInput: ChangePasswordInput!) {\n  changePassword(changePasswordInput: $changePasswordInput) {\n    ...dataInfo\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    ...dataInfo\n  }\n}"): (typeof documents)["query Me {\n  me {\n    ...dataInfo\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts($getPostsInput: GetPostsInput) {\n  getPosts(getPostsInput: $getPostsInput) {\n    ...dataInfo\n  }\n}\n\nquery Post($id: String!) {\n  getPost(id: $id) {\n    ...dataInfo\n  }\n}"): (typeof documents)["query Posts($getPostsInput: GetPostsInput) {\n  getPosts(getPostsInput: $getPostsInput) {\n    ...dataInfo\n  }\n}\n\nquery Post($id: String!) {\n  getPost(id: $id) {\n    ...dataInfo\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;