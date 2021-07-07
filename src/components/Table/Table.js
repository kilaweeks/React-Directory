import React, { useState, useContext } from 'react';
import Button from "../Button/Button.js"; 
import { Context } from "../Context/Context.js";
import { useGet } from "../../hooks/API.js"; 
import "./Table.css"



function Table() {
    const [url] = useState("https://randomuser.me/api/?results=100")
    const { sortFunc } = useGet(url);
    const { displayedEmployees} = useContext(Context)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("name")}><Button>First Name</Button></td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.uuid}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;