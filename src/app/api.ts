export async function fetchMyBooks() {
    const response = await fetch("http://localhost:3000/api/my-books", {cache: "no-cache"})
    const data = await response.json()

    return data
}