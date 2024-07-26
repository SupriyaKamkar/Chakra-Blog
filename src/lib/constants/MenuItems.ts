interface MenuItems {
  name: string;
  key: string;
  isDisabled: boolean;
}

export const MenuItems: MenuItems[] = [
  {
    name: "Home",
    key: "home",
    isDisabled: false,
  },
  {
    name: "Products",
    key: "products",
    isDisabled: true,
  },
];
