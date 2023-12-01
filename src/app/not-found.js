import Link from "next/link"
import React from "react"

const notFoundPage = () => {
  return (
    <div class="kyz-vertical__center max-w-xl mx-auto">
        <div class="text-center px-4">
            <h1 class="mb-4 text-2xl md:text-6xl font-bold">404</h1>
            <p class="text-gray-600 text-sm md:text-lg">Oops! The page you are looking for could not be found.</p>
            <Link href="/" class="mt-6 inline-block bg-owned-primary-500 px-5 py-1 font-semibold text-owned-light-500 hover:bg-owned-primary-300 transition-all text-sm md:text-lg">Go back to Home</Link>
        </div>
    </div>
  )
}

export default notFoundPage