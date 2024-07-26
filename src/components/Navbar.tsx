import { MenuItems } from "@/lib/constants/MenuItems";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItem from "./NavItem";

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("home");

  const onMenuItemClick = (selectedItem: string) => {
    setSelectedMenu(selectedItem);
  };

  return (
    <div className="sticky z-50 top-0 inset-x-2 h-20 shadow-lg  w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <header className="relatiive ">
        <MaxWidthWrapper>
          <div className="pt-2">
            <div className="flex h-16 items-center justify-between">
              {/*TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-16 w-16" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <div className="flex gap-4 h-full">
                  <div className="flex">
                    <div className="relative flex items-center">
                      {MenuItems.map((mi) => {
                        return (
                          <NavItem
                            menuName={mi.name}
                            menuKey={mi.key}
                            key={mi.key}
                            isSelected={mi.key===selectedMenu}
                            onMenuItemClick={onMenuItemClick}
                            isDisabled={mi.isDisabled}
                          ></NavItem>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-center">
                  <button className="text-sm hover:animate-wiggle rounded-lg  font-bold text-white  p-2 animated-background bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default NavBar;
