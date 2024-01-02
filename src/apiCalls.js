export async function getTopArticles(country) {
    let Url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=adce009eed63469b8050f78512e9a7bc`
    try {
        const response = await fetch(Url)
        if (!response.ok) {
            throw new Error(`Top articles not found.`)
        }
        return response.json()
    } catch (error) {
        throw new Error(`Error fetching albums: ${error.message}`)
    }
}