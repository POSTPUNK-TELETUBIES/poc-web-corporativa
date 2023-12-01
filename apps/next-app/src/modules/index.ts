import "reflect-metadata";
import { ErrorProxyCMS, LocalCMSProvider } from "@/services";
import { container } from "tsyringe";
import { ComponentResponse } from "@/types";
import defaultRequests from "../services/ContenfulCMSProvider/constants";
import data from '../../mock/data/navbar.json'
import { CMSResolver, ContentfulCMSProvider, GetOneRawResponse, SectionResponse } from "@/services/ContenfulCMSProvider";
import { RequestInit } from "@/services/FetchClient";
import { GraphQLClient } from "@/services/GraphQLCLient";

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
  baseURL: 'https://graphql.contentful.com/content/v1/spaces/f9g0ncoxwgr2',
  headers:{
    'Authorization': 'Bearer S0pDoN18OfScFo--CvJ1n1vhST7xCqKpvsSpBiKs2mE'
  }
})


container.registerInstance<CMSResolver>('Resolver', {
  getOneResolve(rawData: GetOneRawResponse): ComponentResponse<SectionResponse> {
    return {
      response:{
        data: rawData.data.section
      },
      metadata: {
        name: rawData.data.section.name
      }
    }
  }}
)

container.registerInstance('Request', defaultRequests)

const ProvidersMap: Record<string, any> = {
  'localProvider': LocalCMSProvider,
  'contentfulProvider': ContentfulCMSProvider
}


const currentProviderName = process.env['NEXT_DATA_PROVIDER'] 
  ?? 'contentfulProvider'

container
  .registerSingleton(
    'CurrentCms', 
    ProvidersMap[currentProviderName]
  )
container
  .registerSingleton('FallbackCms', LocalCMSProvider)

export const dataProvider = container.resolve(ErrorProxyCMS)

export const graphqlClient = container.resolve(GraphQLClient)
