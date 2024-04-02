"use client";
import { IDummyProducts } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomeComponent = ({
  products,
  page,
  limit,
}: {
  products: IDummyProducts;
  page: number;
  limit: number;
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center">
        <Link href={`/?page=${page - 1}`}>Back</Link>

        <select
          onChange={(event) => {
            router.push(`/?page=${page}&limit=${event.target.value}`);
          }}
        >
          <option value={"10"}> 10</option>
          <option value="20">20</option>
          <option value="100">100</option>
        </select>
        <Link href={`/?page=${page + 1}`}>Next</Link>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {products &&
          products instanceof Array &&
          products?.map((item: IDummyProducts, index: number) => {
            return (
              <div key={index}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={200}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeComponent;
