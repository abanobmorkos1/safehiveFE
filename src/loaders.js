const URL = "https://safehivebe.onrender.com"
export const indexLoader = async () => {
    const response = await fetch(URL + "/safehive/")
    const safehive = await response.json()
    return safehive
}

export const showLoader = async ({params}) => {
    const  response = await fetch(URL + `/safehive/${params.id}/`)
    const safehive = await response.json()
    return safehive
}