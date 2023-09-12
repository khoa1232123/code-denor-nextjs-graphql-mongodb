import { QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import {
  AttributeDocument,
  AttributeQuery,
  AttributeQueryVariables,
  AttributesDocument,
  AttributesQuery,
  AttributesQueryVariables,
  ChangePasswordDocument,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  CreateAttributeDocument,
  CreateAttributeMutation,
  CreateAttributeMutationVariables,
  CreateProductDocument,
  CreateProductMutation,
  CreateProductMutationVariables,
  DeleteAttributeDocument,
  DeleteAttributeMutation,
  DeleteAttributeMutationVariables,
  DeleteProductDocument,
  DeleteProductMutation,
  DeleteProductMutationVariables,
  ForgotPasswordDocument,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  LogoutDocument,
  LogoutMutation,
  LogoutMutationVariables,
  MeDocument,
  MeQuery,
  MeQueryVariables,
  ProductBySlugDocument,
  ProductBySlugQuery,
  ProductBySlugQueryVariables,
  ProductDocument,
  ProductQuery,
  ProductQueryVariables,
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables,
  UpdateAttributeDocument,
  UpdateAttributeMutation,
  UpdateAttributeMutationVariables,
  UpdateProductDocument,
  UpdateProductMutation,
  UpdateProductMutationVariables,
} from "./graphql";

// Mutation User
export const useRegisterMutation = () => {
  const [registerUser, { data, error, loading }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(RegisterDocument);

  return { registerUser, data, error, loading };
};

export const useLoginMutation = () => {
  const [loginUser, { data, error, loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LoginDocument);

  return { loginUser, data, error, loading };
};

export const useLogoutMutation = () => {
  const [logout, { loading, error }] = useMutation<
    LogoutMutation,
    LogoutMutationVariables
  >(LogoutDocument);

  return { logout, loading, error };
};

export const useForgotPasswordMutation = () => {
  const [forgotPassword, { loading, error }] = useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument);

  return { forgotPassword, loading, error };
};

export const useChangePasswordMutation = () => {
  const [changePassword, { loading, error }] = useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument);

  return { changePassword, loading, error };
};

// Query User
export const useMeQuery = () => {
  const { data, loading, error } = useQuery<MeQuery, MeQueryVariables>(
    MeDocument
  );

  return { ...data?.me, loading, error };
};

// Mutation Product
export const useCreateProductMutation = () => {
  const [createProduct, { data, error, loading }] = useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument);

  return { createProduct, data, error, loading };
};

export const useUpdateProductMutation = () => {
  const [updateProduct, { data, error, loading }] = useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument);

  return { updateProduct, data, error, loading };
};

export const useDeleteProductMutation = () => {
  const [deleteProduct, { data, error, loading }] = useMutation<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >(DeleteProductDocument);

  return { deleteProduct, data, error, loading };
};

// Query Product
export const useProductsQuery = (
  baseOptions: QueryHookOptions<ProductsQuery, ProductsQueryVariables> = {}
) => {
  const { data, loading, error } = useQuery<
    ProductsQuery,
    ProductsQueryVariables
  >(ProductsDocument, baseOptions);

  return { ...data?.getProducts, loading, error };
};

export const useProductQuery = (
  baseOptions: QueryHookOptions<ProductQuery, ProductQueryVariables>
) => {
  const { data, loading, error } = useQuery<
    ProductQuery,
    ProductQueryVariables
  >(ProductDocument, baseOptions);

  return { ...data?.getProduct, loading, error };
};

export const useProductBySlugQuery = (
  baseOptions: QueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>
) => {
  const { data, loading, error } = useQuery<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >(ProductBySlugDocument, baseOptions);

  return { ...data?.getProductBySlug, loading, error };
};

// Mutation Attribute
export const useCreateAttributeMutation = () => {
  const [createAttribute, { data, error, loading }] = useMutation<
    CreateAttributeMutation,
    CreateAttributeMutationVariables
  >(CreateAttributeDocument);

  return { createAttribute, data, error, loading };
};

export const useUpdateAttributeMutation = () => {
  const [updateAttribute, { data, error, loading }] = useMutation<
    UpdateAttributeMutation,
    UpdateAttributeMutationVariables
  >(UpdateAttributeDocument);

  return { updateAttribute, data, error, loading };
};

export const useDeleteAttributeMutation = () => {
  const [deleteAttribute, { data, error, loading }] = useMutation<
    DeleteAttributeMutation,
    DeleteAttributeMutationVariables
  >(DeleteAttributeDocument);

  return { deleteAttribute, data, error, loading };
};

// Query Attribute
export const useAttributesQuery = (
  baseOptions: QueryHookOptions<AttributesQuery, AttributesQueryVariables> = {}
) => {
  const { data, loading, error } = useQuery<
    AttributesQuery,
    AttributesQueryVariables
  >(AttributesDocument, baseOptions);

  return { ...data?.getAttributes, loading, error };
};

export const useAttributeQuery = (
  baseOptions: QueryHookOptions<AttributeQuery, AttributeQueryVariables>
) => {
  const { data, loading, error } = useQuery<
    AttributeQuery,
    AttributeQueryVariables
  >(AttributeDocument, baseOptions);

  return { ...data?.getAttribute, loading, error };
};
