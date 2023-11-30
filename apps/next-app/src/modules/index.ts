import "reflect-metadata";
import { ErrorProxyCMS, LocalCMSProvider } from "@/services";
import { container } from "tsyringe";
import { ComponentResponse } from "@/types";
import { PacificoNavbarItem } from "ui-material";
import data from '../../mock/data/navbar.json'
import { CMSResolver, ContentfulCMSProvider, GetOneRawResponse } from "@/services/ContenfulCMSProvider";
import { RequestInit } from "@/services/FetchClient";

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

container.registerInstance<RequestInit>('FetchOptions',{
  baseURL: 'https://rickandmortyapi.com/graphql',

})


container.registerInstance<CMSResolver<GetOneRawResponse>>('Resolver', {
  getOneResolve(rawData) {
    return {
      response:{
        data: {
          many: 'asdsad'
        }
      },
      metadata: {
        name: rawData.data.name
      }
    }
  }}
)

const ProvidersMap: Record<string, any> = {
  'localProvider': LocalCMSProvider,
  'contentfulProvider': ContentfulCMSProvider
}

const currentProviderName = process.env['NEXT_DATA_PROVIDER'] 
  ?? 'localProvider'

container
  .registerSingleton(
    'CurrentCms', 
    ProvidersMap[currentProviderName]
  )
container
  .registerSingleton('FallbackCms', LocalCMSProvider)

export const dataProvider = container.resolve(ErrorProxyCMS<ComponentResponse<{
  pages: PacificoNavbarItem[]
}>>)
