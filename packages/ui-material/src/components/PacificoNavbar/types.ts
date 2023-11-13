export interface Page{
  slug: string;
  id: string;
  groupId?: string;
  subgroupId?: string;
  navBarItemId?: string;
  isVisible?: boolean
}

export interface Group{
  id: string
  columnOrder: number;
  order?: number;
  navBarItemId: string;
  name: string;
}

export interface Subgroup{
  id: string;
  groupId: string;
 }


export interface NavbarItem{
  id: string;
  label: string;
}
