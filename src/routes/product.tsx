import { Card, CardHeader, Image } from "@nextui-org/react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { ProductType } from "../type/product";
import Rating from "../components/rating";

export async function loader({ params }: LoaderFunctionArgs) {
  return fetch("https://fakestoreapi.com/products/" + params.productId);
}

export default function Product() {
  const {
    title,
    image,
    description,
    price,
    rating: { count, rate },
  } = useLoaderData() as ProductType;

  return (
    <article className="flex gap-5 mt-9">
      <Image
        shadow="sm"
        radius="lg"
        width="100%"
        height="100%"
        alt={title}
        className="object-cover h-[140px] w-full"
        src={image}
      />
      <Card>
        <CardHeader className="flex flex-col items-start gap-3">
          <h1 className="text-3xl">{title}</h1>
          <div className="space-y-3">
            <Rating rating={rate} count={count} />
            <p className="text-2xl">Price: ${price}</p>
          </div>
          <p className="text-xl text-gray-800 mt-3">{description}</p>
        </CardHeader>
      </Card>
    </article>
  );
}
