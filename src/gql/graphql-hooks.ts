import { useMutation, useQuery } from "@apollo/client";
import {
  ChangePasswordDocument,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
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
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables,
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
