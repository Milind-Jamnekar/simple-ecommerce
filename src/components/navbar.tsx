import {
  Input,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as UINavbar,
} from "@nextui-org/react";
import { Form, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <UINavbar>
      <NavbarBrand>
        <NavLink to="/" className="font-bold text-inherit">
          ACME store
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Form id="search-form" role="search">
            <Input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="search"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Cart</Link>
        </NavbarItem>
      </NavbarContent>
    </UINavbar>
  );
}
