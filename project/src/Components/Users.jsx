import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";
const Users =()=>{
  let[content,setContent]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((resp)=>{
      console.log(resp.data);
      setContent(resp.data);
    })
    .catch(()=>{
      console.log("there is no data");
    })
  },[])

  let deleteData =(x)=>{
    axios.delete(`http://localhost:3000/users/${x}`)
    window.location.assign("/users")
  }
    return(
        <div id={style.userProfile}>
         {content.map(({id,name,salary,company})=>{
          return(
            <div id={style.profile}>
              <table>
                <tr>
                  <th colSpan="2">USERS {id}</th>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>: {name}</td>
                </tr>
                <tr>
                  <td>SALARY</td>
                  <td>: {salary}</td>
                </tr>
                <tr>
                  <td>COMPANY</td>
                  <td>: {company}</td>
                </tr>
                <tr>
                  <td><Link to={`/edit/${id}`}>EDIT</Link></td>
                  <td><button onClick={()=>{deleteData(id)}}>DELETE</button></td>
                </tr>
              </table>
           </div>
          )
         })}
        </div>
    )
}
export default Users