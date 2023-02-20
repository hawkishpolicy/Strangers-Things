const srcInfo = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft"

export const getSrcInfo = async () => {
    try{
        const response = await fetch(`${srcInfo}/posts`)
        const result = await response.json()
        const postArray = result.data.posts
        
        return postArray
    }catch(error){
        console.error(error)
    }
}
