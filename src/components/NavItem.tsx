import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavItemsProp {
  onMenuItemClick: (menuKey: string) => void;
  isSelected: boolean;
  menuName: string;
  menuKey: string;
  isDisabled?:boolean;
}

const NavItem = (prop: NavItemsProp) => {
  return (
    <Button
      onClick={() => {
        prop.onMenuItemClick(prop.menuKey);
      }}
      variant="link"
      className={cn("text-xl font-bold text-teal-700 hover:scale-125", {
        underline: prop.isSelected,
      })}
      disabled={prop.isDisabled}
    >
      {prop.menuName}
    </Button>
  );
};

export default NavItem;
