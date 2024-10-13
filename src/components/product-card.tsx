import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ProductType } from "../type/product";
import { useNavigate } from "react-router-dom";

export default function ProudctCard({
  product: { id, image, title, price },
}: {
  product: ProductType;
}) {
  const navigate = useNavigate();

  return (
    <Card shadow="sm" isPressable onPress={() => navigate("/product/" + id)}>
      <CardBody className="overflow-visible p-3">
        <Image
          shadow="lg"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[140px]"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b className="line-clamp-1">{title}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
    </Card>
  );
}
