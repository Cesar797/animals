import axios from "axios";
const SearchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=_XXcLkACv1WeH2jUL8dz5hhnFnZiaXC_6Q0yoLHlMuo'
    const respónse = await axios.get(url, {
params:{
    query: term
}
    })
    console.log(Response)
    return Response.data.results
} 
export default SearchImage
