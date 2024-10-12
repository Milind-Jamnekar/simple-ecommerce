import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}
