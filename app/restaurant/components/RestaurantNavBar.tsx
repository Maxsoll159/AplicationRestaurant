import Link from "next/link"

export const RestaurantNavBar = ({slug} : {slug: string}) => {
    console.log("SOY SLUG", slug)
    return (
        <nav className="flex text-reg border-b pb-2">
            <Link href={`/restaurant/${slug}`} className="mr-7"> Overviews </Link>
            <Link href={`/restaurant/${slug}/menu`} className="mr-7"> Menu </Link>
        </nav>
    )
}