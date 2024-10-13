import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useCategorizedProducts } from "../hooks/use-categorized-products";
import { CategoryType, ProductType } from "../type/product";
import ProudctCard from "./product-card";

export default function CategoryTabs({
  categories,
  products,
}: {
  categories: CategoryType;
  products: ProductType[];
}) {
  const categorizedProducts = useCategorizedProducts(products);

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        {categories.map((category) => (
          <Tab key={category} title={category}>
            {categorizedProducts[category]?.length > 0 && ( // Check for category existence and products
              <Card>
                <CardBody className="gap-5 grid grid-cols-2 sm:grid-cols-4">
                  {/* Iterate over products in this category */}
                  {categorizedProducts[category]?.map((product) => (
                    <ProudctCard key={product.id} product={product} /> // Use a Product component
                  ))}
                </CardBody>
              </Card>
            )}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
