"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()

    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()

            const keyword = searchRef.current.value

            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative w-full md:w-auto">
            <input 
                className="w-full md:w-auto h-10 px-4 bg-owned-dark-500 bg-opacity-0 text-white outline-none rounded-lg text-sm placeholder:text-sm placeholder:text-owned-grey-500" 
                placeholder="Cari anime..."
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button 
                className="absolute top-2.5 end-4 text-owned-grey-500 hover:text-owned-primary-500 transition-all" 
                onClick={handleSearch}
            >
                <MagnifyingGlass size={20} />
            </button>
        </div>
    )
}

export default InputSearch