import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./viewProperty.css";
import Header from "./header";
import Sidebar from "./sideBar";
import axios from "axios";
const ViewProperty = () => {

  const authToken = localStorage.getItem("authorization");
  const [postData, setPostdata] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();
 
  function handleAddProperty(e) {
    navigate("/Property");
  }
  useEffect(() => {
    fetch("https://real-estate-server-pro.herokuapp.com/property", { method: "GET", headers: { authorization: authToken } })

      .then((data) => {
        return data.json();

      })
      .then((pData) => {
        setPostdata(pData.reverse())

      }).catch((err)=>{
        navigate("/")
      });
  }, []);
  function handleStatus(e){
    if(e.target.value==="Unsold")
    {
      e.target.value = "Sold";
    }
  }
  
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="box10">
        <form className="search-bar">
          <input onChange={(e) => { setSearchTerm(e.target.value) }} type="text" placeholder="Search Here" name="q" />
          <button><img src="/images/search.svg"/></button>
        </form>
        <button type="submit" value="+Add Property" onClick={handleAddProperty} className="button25">+Add Property</button>
      </div>
      <div className="BasicInfo2">

          <table sx={{ minWidth: 650 }} aria-label="simple table">
              <tr>
                <th className="td1">PPDID</th>
                <th className="td2">Images</th>
                <th className="td3">Property</th>
                <th className="td4">Contact</th>
                <th className="td5">Area</th>
                <th className="td6">Views</th>
                <th className="td7">Status</th>
                <th className="td8">Days Left</th>
                <th className="td9">Action</th>
              </tr>
            {postData.filter((user) => {
              const PPDID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
              if (searchTerm === "") {
                return user;
              } else if (PPDID.toLowerCase().includes(searchTerm.toLowerCase())) {
                return user;
              }
            }).map((user, i) => {
              const PPDID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
              return (
                  <tr>
                    <td className="td1">{PPDID}</td>
                    <td className="td21"><img src="/images/images.svg"/></td>
                    <td className="td3">{user.PropertyType}</td>
                    <td className="td4">{user.Mobile}</td>
                    <td className="td5">{user.TotalArea}</td>
                    <td className="td6">{user.Views}</td>
                    <td className="td71"><input type="submit" value="Unsold" onClick={handleStatus} className="sold"/></td>
                    <td className="td8">{user.DaysLeft}</td>
                    <td className="td91"><img src="/images/eye-fill.svg"/><img src="/images/pencil-fill.svg"/></td>
                  </tr>
              )
            })}
          </table>
      </div>
    </div>





  )
}

export default ViewProperty;