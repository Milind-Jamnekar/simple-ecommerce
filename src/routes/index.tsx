import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import CategoryTabs from "../components/category-tabs";
import { CategoryType, ProductType } from "../type/product";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const categoryParams = url.searchParams.get("category");

  try {
    if (categoryParams) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryParams}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch category products: ${response.statusText}`
        );
      }
      return response.json();
    }

    const productsResponse = await fetch("https://fakestoreapi.com/products");
    if (!productsResponse.ok) {
      throw new Error(
        `Failed to fetch products: ${productsResponse.statusText}`
      );
    }
    const products = await productsResponse.json();

    const categoriesResponse = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!categoriesResponse.ok) {
      throw new Error(
        `Failed to fetch categories: ${categoriesResponse.statusText}`
      );
    }
    const categories = await categoriesResponse.json();

    return { products, categories };
  } catch (error) {
    console.error("Error in loader:", error);
    // Handle the error gracefully, e.g., return a default value or redirect
    throw new Response("Failed to load data", { status: 500 });
  }
}

export default function Index() {
  const { products, categories } = useLoaderData() as {
    products: ProductType[];
    categories: CategoryType;
  };

  return (
    <div>
      <section>
        <CategoryTabs products={products} categories={categories} />
      </section>
    </div>
  );
}
