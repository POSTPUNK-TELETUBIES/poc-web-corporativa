import { dataProvider } from "@/modules";
import { SectionResponse } from "@/services/ContenfulCMSProvider";
import { Typography } from "@mui/material";


export default async function HeroContainer(){
  const {response:{data}} = await dataProvider
    .getOne<SectionResponse>('ZxmtOCRcEFBRtZBdL0g8i', {requestName: 'section'})

  return <Typography>{data.title}</Typography>
}