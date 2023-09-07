import { InputField } from "@/components";
import { LoginInput } from "@/gql/graphql";
import { useLoginMutation } from "@/gql/graphql-hooks";
import { AccountCircle, VisibilityOff } from "@mui/icons-material";
import { Button, InputAdornment } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const { loginUser, error } = useLoginMutation();
  const initialValues: LoginInput = {
    usernameOrEmail: "",
    password: "",
  };

  const handleLoginSubmit = async (
    values: LoginInput,
    { setErrors }: FormikHelpers<LoginInput>
  ) => {
    console.log("submit");

    const res = await loginUser({
      variables: {
        loginInput: values,
      },
      //   update(cache, { data }) {
      //     if (data?.login.success) {
      //       cache.writeQuery<MeQuery>({
      //         query: MeDocument,
      //         data: { me: data.login },
      //       });
      //     }
      //   },
    });
    if (res.data?.login.errors) {
      console.log("error");

      //   setErrors(mapFieldErrors(res.data.login.errors));
    } else if (res.data?.login.user) {
      console.log("success");
      //   toast({
      //     title: "Welcome ",
      //     description: res.data.login.user.username,
      //     status: "success",
      //     duration: 3000,
      //     isClosable: true,
      //   });
      router.push("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <Formik initialValues={initialValues} onSubmit={handleLoginSubmit}>
          <Form className="login-page__form">
            <h1 className="login-page__form__title">Sign In</h1>
            <InputField
              placeholder="Username"
              name="usernameOrEmail"
              type="text"
              className="login-page__form__input"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <InputField
              placeholder="Password"
              name="password"
              type="password"
              className="login-page__form__input"
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
