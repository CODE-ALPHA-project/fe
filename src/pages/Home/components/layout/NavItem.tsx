import React from "react";
import * as styles from "./NavItem.css";

interface NavItemProps {
  onClick: () => void;
  ItemName: string;
}

const NavItem: React.FC<NavItemProps> = ({ onClick, ItemName }) => {
  return (
    <>
      <div className={styles.sidebarNavItem} onClick={onClick}>
        {ItemName}
      </div>
    </>
  );
};

export default NavItem;
