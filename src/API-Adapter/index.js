const srcInfo = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft"

export const getSrcInfo = async () => {
    try{
        const response = await fetch(`${srcInfo}/posts`)
        const data = await response.json()
        
        return data
    }catch(error){
        console.error(error)
    }
}
