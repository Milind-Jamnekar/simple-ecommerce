import { Outlet, useHref, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { NextUIProvider } from "@nextui-org/react";

export default function Root() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </NextUIProvider>
  );
}
