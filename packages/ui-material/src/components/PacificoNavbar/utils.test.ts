import { describe, it ,TestContext } from 'vitest'
import { filterPagesByProp, groupByGroup, groupByNavBar, groupByPageParent, indexByNavbar } from './utils'
import { Page } from './types'
import { indexBy } from 'ramda'

const testFilterPagesByProp = ({expect}: TestContext)=>{
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

  expect(pagesFilteredByNavbar).toEqual(pagesWithNavBarProp)
}

const testGroupByGroup = ({ expect }: TestContext)=>{
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

const testGroupByNavBarItem = ({ expect }:TestContext)=>{
  const groups = [{
    columnOrder: 0, 
    id: 'sadas',
    name: 'hola',
    navBarItemId: '1',
  }]


  const groupsByNavbar = groupByNavBar(groups)

  expect(groupsByNavbar).toEqual({'1': groups})
}

const  testIndexByNavbar = ({expect}: TestContext)=>{
  const page = {
    id: 'page1',
    slug: 'slug',
    navBarItemId: 'idNavbar'
  }

  const { idNavbar } = indexByNavbar([page])

  expect(idNavbar).toEqual(page)
}

const testGroupByPageParent = ({ expect }: TestContext)=>{
  const pagesWithNavBar : Page[] = [{
    id: 'page1',
    slug: 'slug',
    navBarItemId: 'idNavbar'
  }]

  const pagesWithGroup : Page[] = [{
    id: 'page2',
    slug : 'slug2',
    groupId: 'idGroup'
  }]

  const pagesWithSubgroup : Page[] = [{
    id: 'page3',
    slug: 'slug3',
    subgroupId: 'idSubgroup'
  }]

  const pages = pagesWithNavBar.concat(pagesWithGroup, pagesWithSubgroup)

  const {
    pagesInGroups, 
    pagesByNavBar: pagesInNavBar, 
    pagesInSubgroups
  } = groupByPageParent(pages)

  expect(pagesInGroups).toEqual(pagesWithGroup)
  expect(pagesInNavBar).toEqual(indexBy(({ navBarItemId })=> navBarItemId, pagesWithNavBar))
  expect(pagesInSubgroups).toEqual(pagesWithSubgroup)
}

describe.concurrent('Utils pacifico navbar', ()=>{
  it('filter pages by prop', testFilterPagesByProp)

  it('group by group', testGroupByGroup)

  it('group by navBar', testGroupByNavBarItem)

  it('group by page parent', testGroupByPageParent)

  it('index by navbar', testIndexByNavbar)
})
