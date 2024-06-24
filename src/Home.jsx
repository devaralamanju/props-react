import Productlist from "./Productlist"
function Home({data}){
    return(
        <>
        <div>This is home component</div>
        <h2>Admin {data}</h2>
        <Productlist></Productlist>
        </>
    )
}

export default Home