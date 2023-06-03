import React, { useState } from "react"; 
import style from "./home.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Createuser =()=>{
    let [name,setName]= useState("");
    let [salary,setSalary]= useState("");
    let [company,setCompany]= useState("");
    let goto=useNavigate()

    let nameData =(e)=>{
        setName(e.target.value)
    }
    let salaryData =(e)=>{
        setSalary(e.target.value)
    }
    let companyData =(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
       e.preventDefault()
       let payload={name,salary,company}
       axios.post("http://localhost:3000/users",payload)
       .then(()=>{
        console.log("Data to be added");
       })
       .catch(()=>{
        console.log("Something went wrong");
       })
       goto('/users')
    }
    return(
        <div id={style.myForm}>
           <form>
               <label>Name</label>
               <input type="text" value={name} onChange={nameData} />
               <label>Salary</label>
               <input type="text"  value={salary} onChange={salaryData}/>
               <label>Company</label>
               <input type="text" value={company} onChange={companyData} />
               <button onClick={formHandle}>Submit</button>
           </form>
        </div>
    )
}
export default Createuser