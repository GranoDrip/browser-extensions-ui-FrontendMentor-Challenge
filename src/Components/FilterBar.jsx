// FilterBr.jsx
import "./compStyles/FilterBarStyle.css"

export default function FilterBar({theme,filter,setFilter}){
    
    return(
        <>
            <div className={"listContainer " + theme}>
                <h2 className={"headerText " + theme}>Extensions List</h2>
                <div className={"buttonsContainer " + theme}>
                    <button onClick={()=>setFilter(0)} className={"filterButton " + theme + (filter === 0 ? " selected" : "")} >All</button>
                    <button onClick={()=>setFilter(1)} className={"filterButton " + theme + (filter === 1 ? " selected" : "")} >Active</button>
                    <button onClick={()=>setFilter(-1)} className={"filterButton " + theme + (filter === -1 ? " selected" : "")} >Inactive</button>
                </div>
            </div>
        </>
    )

}