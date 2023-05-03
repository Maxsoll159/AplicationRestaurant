import { PRICE } from '@prisma/client';
export const Price = ({ price}:any) => {
    const renderPrice = () => {
        if (price === PRICE.CHEAT) {
            return <>
                <span>$$</span> <span className='text-gray-400'>$$</span>
            </>
        } else if (price === PRICE.REGULAR) {
            <>
                <span>$$$</span> <span className='text-gray-400'>$</span>
            </>
        } else {
            <span>$$$$</span>
        }
    }
    return (
        <p className="mr-3 flex">{renderPrice()}</p>
    )
}