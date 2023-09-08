import HomeComponents from "@/components/HomeComponents";
import { useProductsQuery } from "@/gql/graphql-hooks";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { products, loading, error } = useProductsQuery({});
  const { products, count, loading, error } = useProductsQuery({});

  // console.log({ products, loading, error, count });

  return (
    <>
      <Head>
        <title>Home page 2</title>
      </Head>

      <HomeComponents />
    </>
  );
}
