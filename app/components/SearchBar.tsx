
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export const SearchBar = () => {
    const router = useRouter();
    const [location, setLocation] = useState<string>("")
    return (
        <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
                className="rounded  mr-3 p-2 w-[450px]"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="State, city or town"
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={() => {
                if (location === "banana") return;
                router.push(`/search?city=${location}`)
            }}>
                Let's go
            </button>
        </div>
    )
}