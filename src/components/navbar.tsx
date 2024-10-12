import {
  Input,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as UINavbar,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <UINavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME store</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <form id="search-form" role="search">
            <Input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
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
