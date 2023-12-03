export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    const data = response.data.flatMap(item => item[objectProperty])
    return data
}

export const getRandomAnimeResponse = (data, limit) => {
    const first = ~~(Math.random() * (data.length - limit) + 1)
    const last = first + limit
    const response = { data: data.slice(first, last) }
    return response
}