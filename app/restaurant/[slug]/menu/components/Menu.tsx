import { MenuCard } from "./MenuCard"
import { Item } from '@prisma/client'
export const Menu = ({ menu }: { menu: any }) => {
    console.log("JIJIJAJ", menu)
    return (
        <main className="bg-white mt-5">
            <div>
                <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    {
                        menu.items.length ? (
                            menu.items.map((res: any) => (
                                <MenuCard key={res.id} item={res} />
                            ))
                        ) : (<div>
                            No hay menu
                        </div>)
                    }
                </div>
            </div>
        </main>
    )
}  