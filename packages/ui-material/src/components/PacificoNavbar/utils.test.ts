import { describe, it , expect } from 'vitest'
import { filterPagesByProp, groupByGroup, groupByNavBar, groupByPageParent, indexByNavbar } from './utils'
import { Page } from './types'

const testFilterPagesByProp = ()=>{
  const pagesWithNavBarProp: Page[] = [{
    id: 'page1',
    slug: 'slug',
    navBarItemId: 'idNavbar'
  }]

  const pagesWithNonabvarProp: Page[] = [{
    id: 'page2',
    slug: 'slug2',
  }]

  const pages = pagesWithNavBarProp.concat(pagesWithNonabvarProp)

  const pagesFilteredByNavbar = filterPagesByProp(pages, 'navBarItemId')

  expect(pagesFilteredByNavbar.length).toEqual(pagesWithNavBarProp.length)

  expect(pagesFilteredByNavbar).toEqual(pagesWithNavBarProp)
}

const testGroupByGroup = ()=>{
  const subgroups1 = [{
    groupId: 'grupo1',
    id: '2'
  }]

  const subgroups2 = [{
    groupId: 'grupo2',
    id: '2'
  }]

  const subgroups = subgroups1.concat(subgroups2)

  const subgroupsByGroup = groupByGroup(subgroups)

  expect(subgroupsByGroup).toEqual({
    grupo1: subgroups1,
    grupo2: subgroups2
  })
}

const testGroupByNavBarItem = ()=>{
  const groups = [{
    columnOrder: 0, 
    id: 'sadas',
    name: 'hola',
    navBarItemId: '1',
  }]


  const groupsByNavbar = groupByNavBar(groups)

  expect(groupsByNavbar).toEqual({'1': groups})
}

describe.skip('Utils pacifico navbar', ()=>{
  it('filter pages by prop', testFilterPagesByProp)

  it('group by group', testGroupByGroup)

  it('group by navBar', testGroupByNavBarItem)
})
