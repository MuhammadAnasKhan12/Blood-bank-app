import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fbGet } from '../config/firebase/fbmethods';
import './Style/acceptor.css'; 
import ACard from '../components/AccCard';

function Acceptor() {
  const userid = useParams();
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fbGet("users")
      .then((res:any) => {
        setDonors(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userBloodGroup = userid.id;

  const filteredDonors = userBloodGroup === 'A'
  ? donors.filter((donor:any) => donor.bloodgroup === userBloodGroup || donor.bloodgroup === 'AB')
  : userBloodGroup === 'AB'
  ? donors.filter((donor:any) => donor.bloodgroup === 'AB')
  : userBloodGroup === 'B'
  ? donors.filter((donor:any) => donor.bloodgroup === userBloodGroup || donor.bloodgroup === 'AB')
  : donors;


  return (
    <div className="acceptor-container">
      <h1 className="acceptor-title">Available Acceptors</h1>
      <div className="donor-list">
        {filteredDonors.map((x:any, i:any) => (
         <ACard key={i} namee={x.username} bgg={x.bloodgroup} no={i+1} email={x.email} />
))}
      </div>
    </div>
  );
}

export default Acceptor;






