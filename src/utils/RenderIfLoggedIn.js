const RenderIfLoggedIn = ({children})=>{
    if(! JSON.parse(localStorage.getItem("user"))?.email){
        return null;
    }
    return children;
}
export default RenderIfLoggedIn;