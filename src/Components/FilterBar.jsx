import "./compStyles/FilterBarStyle.css"

export default function FilterBar({theme}){
    
    return(
    <>
        <div className={"listContainer " + theme}>
            <h2 className={"headerText " + theme}>Extensions List</h2>
            <div className={"buttonsContainer " + theme}>
                <button className={"filterButton " + theme} >All</button>
                <button className={"filterButton " + theme} >Active</button>
                <button className={"filterButton " + theme} >Inactive</button>
            </div>
        </div>
    </>
    )

}