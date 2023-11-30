import "reflect-metadata";
import { ErrorProxyCMS, LocalCMSProvider } from "@/services";
import { container } from "tsyringe";
import { ComponentResponse } from "@/types";
import { PacificoNavbarItem } from "ui-material";
import data from '../../mock/data/navbar.json'

container.registerInstance('DataTable', {pages: {
  staticData:{
    metadata:{
      name: 'pages'
    },
    response:{
      data
    }
  }
}})
container.registerSingleton('CurrentCms', LocalCMSProvider)
container.registerSingleton('FallbackCms', LocalCMSProvider)

export const dataProvider = container.resolve(ErrorProxyCMS<ComponentResponse<{
  pages: PacificoNavbarItem[]
}>>)
