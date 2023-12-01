import { LayoutNavbar } from "@/components/LayoutNavbar";
import { dataProvider } from "@/modules";

const fetchPages = ()=> dataProvider.getOne('pages');

export default async function NavbarContainer(){
  const data = await fetchPages()

  return <LayoutNavbar items={data?.response.data.pages ?? []} />
}