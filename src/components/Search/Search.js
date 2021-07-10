import React, {useState, useContext} from 'react';
import { Context } from '../Context/Context.js';
import "./Search.css"

function Search(){
    const [search, setSearch] = useState("")
    const {employees, setDisplayedEmployees} = useContext(Context)
    
    function updateSearch({target}){
        const searchTerm = target.value
        setSearch(searchTerm)
        const filterResult = employees.filter(function(employee){
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        setDisplayedEmployees([...filterResult])
    }
    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;