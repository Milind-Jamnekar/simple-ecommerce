import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Index, { loader as indexLoader } from "./routes/index";
import Product, { loader as productLoader } from "./routes/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index />, loader: indexLoader },
      {
        path: "/product/:productId",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
]);

export default router;
