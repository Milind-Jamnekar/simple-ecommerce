import { useEffect, useState } from "react";
import { ProductType } from "../type/product";

export function useCategorizedProducts(products: ProductType[]) {
  const [categorizedProducts, setCategorizedProducts] = useState<
    Record<string, ProductType[]>
  >({});

  useEffect(() => {
    if (products.length > 0) {
      const categorized = products.reduce((acc, product) => {
        const category = product.category;
        acc[category] = acc[category] || [];
        acc[category].push(product);
        return acc;
      }, {} as Record<string, ProductType[]>);
      setCategorizedProducts(categorized);
    }
  }, [products]);

  return categorizedProducts;
}
