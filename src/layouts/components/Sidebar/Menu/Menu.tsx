import { MenuItemProps } from '../SidebarTypes';
import MenuItem from './MenuItem';

type MenuProps = {
  menuList: MenuItemProps[];
};

function Menu({ menuList }: MenuProps) {
  return (
    <>
      {menuList.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </>
  );
}

export default Menu;
