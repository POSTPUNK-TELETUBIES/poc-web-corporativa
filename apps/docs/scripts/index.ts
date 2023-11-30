import { PacificoNavbarItem } from 'ui-material'
import { columns } from '../src/stubs/navbaritems.ts'
import { writeFileSync } from 'node:fs'

const pages: PacificoNavbarItem[] = [
  {
    label: 'Hola',
    items: columns
  }
]

writeFileSync('./pages', JSON.stringify({
  pages
}))
