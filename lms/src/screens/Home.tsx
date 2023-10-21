import React from 'react'
import "./Style/home.css"
import IButton from '../components/IButton'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function Home() {
    let blood = useParams();
    console.log(blood)
    const navigate = useNavigate();
    const donor = ()=>{
        navigate(`/acceptors/${blood.id}`)
    }
    const acceptor = ()=>{
        navigate(`/donors/${blood.id}`)
    }

  return (
    <div className='main'>
        <div className='header'>
            <h1>Welcome To The Blood Bank</h1>
        </div>
        <div className='m-body'>
            <div className='mid'>
                <div className='donor'>
                    <h3>Are you a donor?</h3>
                    <p style={{color:"red"}}>click below</p>
                    <IButton variants='contained' startIcon={null} label1='Donor' Click={donor}/>
                </div>
                <div className="acceptor">
                    <h3>Are you a acceptor?</h3>
                    <p style={{color:"red"}}>click below</p>
                    <IButton variants='contained' startIcon={null} label1='Acceptor' Click={acceptor}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home