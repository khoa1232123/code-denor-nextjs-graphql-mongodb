import { QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import {
  ChangePasswordDocument,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  CreateProductDocument,
  CreateProductMutation,
  CreateProductMutationVariables,
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
  baseOptions: QueryHookOptions<ProductsQuery, ProductsQueryVariables>
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
