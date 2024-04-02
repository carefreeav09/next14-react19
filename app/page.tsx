"use server";
import HomeComponent from "./component/views/home";

async function getHomeData(page: number, limit: number) {
  const offset = page * limit;
  const res = await fetch(
    `https://dummyjson.com/products?skip=${offset}&limit=${limit}`
  );
  const data = await res.json();
  return data;
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 0;

  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;

  const { products } = await getHomeData(page, limit);

  console.log(products, "products");

  return (
    <>
      <HomeComponent products={products} page={page} limit={limit} />
    </>
  );
}
