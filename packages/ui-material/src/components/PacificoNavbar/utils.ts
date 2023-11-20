import { groupBy, indexBy } from "ramda"
import { Group, Page, Subgroup } from "./types"

export const filterPagesByProp = (pages: Page[], propName: keyof Page) => pages
  .filter((page: Page)=>!!page[propName])


export const indexByNavbar= indexBy((page: Page)=> page.navBarItemId)
  
export const groupByPageParent = (pages: Page[])=>{
  const filterByProp = (propName: keyof Page) =>filterPagesByProp(pages, propName)

  return {
    pagesByNavBar:indexByNavbar(filterByProp('navBarItemId')),
    pagesInGroups:filterByProp('groupId'),
    pagesInSubgroups:filterByProp('subgroupId'),
   }
}

export const groupByNavBar = groupBy((group: Group)=> group.navBarItemId)

export const groupByGroup = groupBy((subgroup: Subgroup)=> subgroup.groupId)
