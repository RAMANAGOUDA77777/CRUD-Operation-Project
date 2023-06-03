import React, { useEffect, useState } from "react";
import style from "./home.module.css"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Edituser =()=>{
    let [name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let navigate = useNavigate();

    let {abc}= useParams();

    let changeData=(e)=>{
       setName(e.target.value)
    }
    let changeSal =(e)=>{
        setSalary(e.target.value)
    }
    let changeCompany =(e)=>{
        setCompany(e.target.value)
    }
    let formHandale =(e)=>{
        e.preventDefault()
        let payload ={name, salary, company}
        axios.put(`http://localhost:3000/users/${abc}`,payload)
        .then(()=>{
            console.log("get the daya")
        })
        .catch(()=>{
            console.log("not get it")
        })
        navigate("/users")
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${abc}`)
        .then((resp)=>{
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company) 
        })
        .catch(()=>{
            console.log("did not get it data");
        })
    },[abc])

    return(
        <div id={style.myForm}>
            <form>
                <h1>UPDATE USER</h1>
                <label htmlFor="">Name</label >
                <input type="text" value={name} onChange={changeData} />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={changeSal}/>
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={changeCompany}/>
                <button onClick={formHandale} >Submit</button>
            </form>
        </div>
    )
}
export default Edituser