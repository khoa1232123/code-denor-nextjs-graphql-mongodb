import { InputField } from "@/components";
import { LoginInput, MeDocument, MeQuery, RegisterInput } from "@/gql/graphql";
import { useLoginMutation, useRegisterMutation } from "@/gql/graphql-hooks";
import { Button, FormLabel } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  const { registerUser, error } = useRegisterMutation();
  const initialValues: RegisterInput = {
    email: "",
    password: "",
    username: "",
  };

  const handleRegisterSubmit = async (
    values: RegisterInput,
    { setErrors }: FormikHelpers<RegisterInput>
  ) => {
    const res = await registerUser({
      variables: {
        registerInput: values,
      },
      update(cache, { data }) {
        if (data?.register.success) {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: { me: data.register },
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
      <div className="login-page__wrapper">
        <Formik initialValues={initialValues} onSubmit={handleRegisterSubmit}>
          <Form className="login-page__form">
            <h1 className="login-page__form__title">Register</h1>
            <InputField
              placeholder="Email"
              name="email"
              type="text"
              className="login-page__form__input"
            />
            <InputField
              placeholder="Username"
              name="username"
              type="text"
              className="login-page__form__input"
            />
            <InputField
              placeholder="Password"
              name="password"
              type="password"
              className="login-page__form__input"
            />
            <Button
              variant="contained"
              color="info"
              className="login-page__form__button"
            >
              Register
            </Button>
            <div className="login-page__form__more">
              <Link href={"/auth/forgot-password"}>Forgot password?</Link>
              <Link href={"/auth/register"}>Create Account</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
