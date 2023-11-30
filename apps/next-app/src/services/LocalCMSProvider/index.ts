import { ComponentResponse } from "@/types";
import { DataProvider, StringOrNumber } from "data-provider-types";
import { inject, injectable } from "tsyringe";

// TODO: evaluate migrating this to a library
@injectable()
export class LocalCMSProvider implements DataProvider<ComponentResponse>{
  constructor(
    @inject('DataTable') private dataTable: Record<string, {
      staticData?: ComponentResponse | null;
      staticDataMany?: ComponentResponse[]
      dynamicCallBack?: ()=> Promise<ComponentResponse | null>,
      dynamicCallBackMany?: ()=> Promise<ComponentResponse[]>
    }>,
  ){}

  private async executeDynamicImport(id: string){
    const dynamicImportCb = this.dataTable[id]?.dynamicCallBack
  
    if(dynamicImportCb)
      return await dynamicImportCb()
  }

  //TODO: give more flex to this method to decide if is using dynamic imports or fetch
  //TODO: could be a strategy pattern
  //TODO: what would happen if the data is in yml format and not in json?
  async getOne(id: StringOrNumber): Promise<ComponentResponse | null> {
    try {
      const dynamicResult = await this.executeDynamicImport(id.toString())
  
      if(dynamicResult)
        return dynamicResult
      
      // TODO: evaluate if is necessary this behavior by default or let decide the dynamic cb
      const { default: data } =  await import(id.toString());
  
      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('There is no such a dynamic import or the path is not okay')

      return this.syncGetOne(id);
    }
  }

  syncGetOne(id: StringOrNumber){
    return this.dataTable[id.toString()]?.staticData ?? null;
  }
}
