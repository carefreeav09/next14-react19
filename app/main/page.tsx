"use server";
import HomeComponent from "../component/views/home";

async function getHomeData(page: number) {
  const res = await fetch(`https://dummyjson.com/products?skip=${page}`);
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
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const { products } = await getHomeData(page);

  return (
    <>
      <HomeComponent products={products} page={page} />
    </>
  );
}
