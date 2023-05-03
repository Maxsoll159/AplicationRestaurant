import { PrismaClient, Restaurant } from '@prisma/client';



const prisma = new PrismaClient

export const fetchRestaurants = async () => {
    const restaurant = await prisma.restaurant.findMany({
        select: {
            id: true,
            name: true,
            main_image: true,
            cuisine: true,
            location: true,
            price: true,
            slug: true
        }
    });
    return restaurant
}



export const fetchForSlug = async (slug: string) => {
    const restaurantx = await prisma.restaurant.findMany({
        where: {
            slug: slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
        }

    });

    if (!restaurantx) {
        throw new Error();
    }

    return restaurantx
}

export const fetchForSlugs = async (slug: string) => {
    const restaurantx = await prisma.restaurant.findMany({
        where: {
            slug: slug
        },
        select: {
            items: true
        }
    });

    if (!restaurantx) {
        throw new Error();
    }

    return restaurantx
}


export const ApiSearch = async (city: string) => {
    const restaurantx = await prisma.location.findMany({
        where: {
            name: city
        },
        select: {
            id: true,
            name: true,
            restaurants: true,
            created_at: true,
            updated_at: true
        }
    });

    if (!restaurantx) {
        throw new Error();
    }

    return restaurantx
}

