import { RouterProvider, useHref, useNavigate } from "react-router-dom";
import router from "./routes";
import { NextUIProvider } from "@nextui-org/react";

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}
