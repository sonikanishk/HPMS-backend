import React from 'react';
import './reports.css'
import { isAuth } from '../helpers/auth';
import { Redirect,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


class Appointment extends React.Component{
render(){
    return(
        <div>
            {isAuth() ? null : toast.error('Please Sign in First')}
                {isAuth() ? null : <Redirect to="/loginmain"/>}
                <ToastContainer/>
                <div class="marqee">
                   <li class="list-inline">
                       COVID-19 Helpline: 011-42253001, 011-42253002, 011-42253003, +91-9818840984, +91-9311407392, 9311407393
                   </li>
                </div>
                <div class="findadoc"> 
                    <h2> YOUR REPORTS </h2>
                </div> 
                <div class="contentf" style={{marginTop:"25px",textAlign:"-webkit-center"}}>
                    <div class="picccc"> </div>
                    <p style={{textAlign:"left"}}> Currently you have no Due Reports. </p>
                    
                </div>
        </div>
    )
}
};
export default Appointment;