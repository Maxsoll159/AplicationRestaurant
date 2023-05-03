import Link from "next/link";
import { NarBar } from '../../components/NavBar';
import { Headers, Rating, RestaurantNavBar, Title, Description, Images, Reviews, ReservationCard } from "../components";
import { fetchForSlug } from "@/helpers/Api";


export default async function RestaurantDetails({ params }: { params: { slug: string } }) {
    const { slug } = params
    const [data] = await fetchForSlug(slug)

    return (
        <>
            <div>


                <RestaurantNavBar slug={data?.slug} />
                <Title name={data.name} />
                <Rating />
                <Description description={data.description} />
                <Images image={data.images} />
                <Reviews />



            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard />
            </div>

        </>

    )
}