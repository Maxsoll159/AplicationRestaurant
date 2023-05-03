
import { fetchForSlugs } from '@/helpers/Api';
import { RestaurantNavBar } from '../../components';
import { Menu } from './components/Menu';
export default async function RestaurantMenu({params} : {params: any}) {
    const {slug} = params
    const [data] = await fetchForSlugs(slug)
    return (
        <>

            <div className="bg-white w-[100%] rounded p-3 shadow">
                <RestaurantNavBar slug={slug}   />
                <Menu menu={data} />
            </div>

        </>

    )
}