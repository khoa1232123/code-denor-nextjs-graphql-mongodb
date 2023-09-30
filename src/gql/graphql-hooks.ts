import { QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import {
  AttributeDocument,
  AttributeQuery,
  AttributeQueryVariables,
  AttributesDocument,
  AttributesQuery,
  AttributesQueryVariables,
  CategoriesDocument,
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoryDocument,
  CategoryQuery,
  CategoryQueryVariables,
  ChangePasswordDocument,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  CreateAttributeDocument,
  CreateAttributeMutation,
  CreateAttributeMutationVariables,
  CreateCategoryDocument,
  CreateCategoryMutation,
  CreateCategoryMutationVariables,
  CreateProductCatDocument,
  CreateProductCatMutation,
  CreateProductCatMutationVariables,
  CreateProductDocument,
  CreateProductMutation,
  CreateProductMutationVariables,
  DeleteAttributeDocument,
  DeleteAttributeMutation,
  DeleteAttributeMutationVariables,
  DeleteCategoryDocument,
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables,
  DeleteProductCatDocument,
  DeleteProductCatMutation,
  DeleteProductCatMutationVariables,
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
  ProductCatDocument,
  ProductCatQuery,
  ProductCatQueryVariables,
  ProductCatsDocument,
  ProductCatsQuery,
  ProductCatsQueryVariables,
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
  UpdateCategoryDocument,
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables,
  UpdateProductCatDocument,
  UpdateProductCatMutation,
  UpdateProductCatMutationVariables,
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

// Mutation Product Cat
export const useCreateProductCatMutation = () => {
  const [createProductCat, { data, error, loading }] = useMutation<
    CreateProductCatMutation,
    CreateProductCatMutationVariables
  >(CreateProductCatDocument);

  return { createProductCat, data, error, loading };
};

export const useUpdateProductCatMutation = () => {
  const [updateProductCat, { data, error, loading }] = useMutation<
    UpdateProductCatMutation,
    UpdateProductCatMutationVariables
  >(UpdateProductCatDocument);

  return { updateProductCat, data, error, loading };
};

export const useDeleteProductCatMutation = () => {
  const [deleteProductCat, { data, error, loading }] = useMutation<
    DeleteProductCatMutation,
    DeleteProductCatMutationVariables
  >(DeleteProductCatDocument);

  return { deleteProductCat, data, error, loading };
};

// Query Product Cat
export const useProductCatsQuery = (
  baseOptions: QueryHookOptions<
    ProductCatsQuery,
    ProductCatsQueryVariables
  > = {}
) => {
  const { data, loading, error } = useQuery<
    ProductCatsQuery,
    ProductCatsQueryVariables
  >(ProductCatsDocument, baseOptions);

  return { ...data?.getProductCats, loading, error };
};

export const useProductCatQuery = (
  baseOptions: QueryHookOptions<ProductCatQuery, ProductCatQueryVariables>
) => {
  const { data, loading, error } = useQuery<
    ProductCatQuery,
    ProductCatQueryVariables
  >(ProductCatDocument, baseOptions);

  return { ...data?.getProductCat, loading, error };
};

// Mutation Post Category
export const useCreateCategoryMutation = () => {
  const [createCategory, { data, error, loading }] = useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CreateCategoryDocument);

  return { createCategory, data, error, loading };
};

export const useUpdateCategoryMutation = () => {
  const [updateCategory, { data, error, loading }] = useMutation<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >(UpdateCategoryDocument);

  return { updateCategory, data, error, loading };
};

export const useDeleteCategoryMutation = () => {
  const [deleteCategory, { data, error, loading }] = useMutation<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >(DeleteCategoryDocument);

  return { deleteCategory, data, error, loading };
};

// Query Post Category
export const useCategoriesQuery = (
  baseOptions: QueryHookOptions<CategoriesQuery, CategoriesQueryVariables> = {}
) => {
  const { data, loading, error } = useQuery<
    CategoriesQuery,
    CategoriesQueryVariables
  >(CategoriesDocument, baseOptions);

  return { ...data?.getCategories, loading, error };
};

export const useCategoryQuery = (
  baseOptions: QueryHookOptions<CategoryQuery, CategoryQueryVariables>
) => {
  const { data, loading, error } = useQuery<
    CategoryQuery,
    CategoryQueryVariables
  >(CategoryDocument, baseOptions);

  return { ...data?.getCategory, loading, error };
};
