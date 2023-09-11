type navbarItemType = {
  icon: string;
  title: string;
  link: string;
};

export type navbarType = {
  icon: string;
  title: string;
  link: string;
  subMenu?: navbarItemType[];
};
