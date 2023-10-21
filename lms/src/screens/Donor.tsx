import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { fbGet } from '../config/firebase/fbmethods';
import "./Style/donor.css"
import "./Style/donor.css"
import BCard from '../components/Card';
function Donor() {
  let userid = useParams();
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fbGet("users").then(
      (res:any)=>{setDonors(res)
        console.log(donors)
      }).catch((err)=>{console.log(err)})
  },[]);

  const userBloodGroup = userid.id; 

   const filteredDonors = userBloodGroup === 'O'
    ? donors.filter((donor:any) => donor.bloodgroup === userBloodGroup)
    : userBloodGroup === 'AB'
    ? donors.filter((donor:any) => donor.bloodgroup === userBloodGroup || ['A', 'B', 'O'].includes(donor.bloodgroup))
    : userBloodGroup === 'B'
    ? donors.filter((donor:any) => donor.bloodgroup === userBloodGroup || donor.bloodgroup === 'O')
    : userBloodGroup === 'A'
    ? donors.filter((donor:any) => donor.bloodgroup === userBloodGroup || donor.bloodgroup === 'O')
    : donors;


  

  return(
    <>
    <div className="acceptor-container">
      <h1 className="acceptor-title">Available Donors</h1>
      <div className="donor-list">
        {filteredDonors.map((x:any, i:any) => (
         <BCard key={i} namee={x.username} bgg={x.bloodgroup} no={i+1} email={x.email} />
))}
      </div>
    </div>
    </>
  )
}

export default Donor