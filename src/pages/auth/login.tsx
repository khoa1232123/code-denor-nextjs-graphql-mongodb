import InputField from "@/components/InputField";
import { LoginInput, MeDocument, MeQuery } from "@/gql/graphql";
import { useLoginMutation } from "@/gql/graphql-hooks";
import { Button } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const { loginUser, error } = useLoginMutation();
  const initialValues: LoginInput = {
    usernameOrEmail: "",
    password: "",
  };

  const handleLoginSubmit = async (
    values: LoginInput,
    { setErrors }: FormikHelpers<LoginInput>
  ) => {
    const res = await loginUser({
      variables: {
        loginInput: values,
      },
      update(cache, { data }) {
        if (data?.login.success) {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: { me: data.login },
          });
        }
      },
    });
    // if (res.data?.login.errors) {
    //   setErrors(mapFieldErrors(res.data.login.errors));
    // } else if (res.data?.login.user) {
    //   toast({
    //     title: "Welcome ",
    //     description: res.data.login.user.username,
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   router.push("/");
    // }
  };

  return (
    <div className="login-page">
      <Formik initialValues={initialValues} onSubmit={handleLoginSubmit}>
        <Form className="login-page__form">
          <h1 className="login-page__form__title">Login</h1>
          <InputField
            label="Email or Username"
            name="hello"
            type="text"
            className="login-page__form__input"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            className="login-page__form__input"
          />
          <Button
            variant="contained"
            color="info"
            className="login-page__form__button"
          >
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
