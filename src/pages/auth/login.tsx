import { InputField } from "@/components";
import { LoginInput } from "@/gql/graphql";
import { useLoginMutation } from "@/gql/graphql-hooks";
import { AccountCircle, VisibilityOff } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const { loginUser, error } = useLoginMutation();
  const [data, setData] = useState<LoginInput>({
    password: "",
    usernameOrEmail: "",
  });
  const initialValues: LoginInput = {
    usernameOrEmail: "",
    password: "",
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({ ...data, [name]: value });
  };

  const handleLoginSubmit = async () => {
    console.log("submit");

    const res = await loginUser({
      variables: {
        loginInput: data,
      },
    });
    console.log(res.data, data);

    if (res.data?.login.errors) {
      console.log("error");
    } else if (res.data?.login.user) {
      console.log("success");
      router.push("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <Formik initialValues={initialValues} onSubmit={handleLoginSubmit}>
          <Form className="login-page__form">
            <h1 className="login-page__form__title">Sign In</h1>
            <TextField
              placeholder="Username"
              name="usernameOrEmail"
              type="text"
              className="login-page__form__input"
              onChange={handleOnChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Password"
              name="password"
              type="password"
              className="login-page__form__input"
              onChange={handleOnChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="info"
              className="login-page__form__button"
            >
              Login
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

export default LoginPage;
