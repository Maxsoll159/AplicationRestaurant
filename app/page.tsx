
import { fetchRestaurants } from '@/helpers/Api';
import { Header, RestaurantCard } from './components';

export default async function Home() {
  const data = await fetchRestaurants();
  return (
    <>
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {
            data.map((dat:any) =>
              <RestaurantCard restaurant = {dat} />
            )
          }
        </div>
      </main>
    </>


  )
}
