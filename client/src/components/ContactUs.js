import React from 'react';
import './contactus.css';
import {Link} from 'react-router-dom'
import '../assets/hospital.jpg';
class ContactUs extends React.Component {
    render(){
        return(
            <div>
                <div class="marqee">
                   <li class="list-inline">
                      COVID-19 Helpline: 011-42253001, 011-42253002, 011-42253003, +91-9818840984, +91-9311407392, 9311407393
                   </li>
                </div>
                <div class = "contactus responsive">
                    <h2> CONTACT US </h2>
                </div>
                <div class="cont shadow">
                    <div class = "contpic rounded">
                       
                    </div>
                </div>
                <div class="row content">
                    <div class="col-xl-4" style={{paddingTop:"10px"}}>
                        <div class="card">
                            
                            <div class="card-body">
                                <h5 class="card-title"> HOSPITAL LOCATION </h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li style={{textAlign:"center",flex:"auto"}}> &nbsp; <i class="fas fa-map-marker-alt"></i> No.46,7th street, Tansi Nagar, Velachery, Chennai - 600042 </li> <br/>
                                <li style={{textAlign:"center",flex:"auto"}}> &nbsp; <i class="fas fa-phone-square-alt"></i> +91-44-22432370 / 3370 </li> <br/>
                                <li style={{textAlign:"center",flex:"auto"}}> &nbsp; <i class="fas fa-envelope-square"></i> hospital@hpms.com </li>
                            </ul>
                            <div class="card-body row">
                                <Link to='/appointment' class="card-link" style={{textAlign:"center",flex:"auto"}}> Book Appointment </Link>
                                <Link to='/doctor' class="card-link" style={{textAlign:"center",flex:"auto"}}> Find Doctor </Link>
                            </div>
                        </div> 
                    </div>
                    <div class="col-xl-8">
                    <form style={{paddingTop:"10px",marginTop:"10px"}} class="rounded  card">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity"/>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Delhi</option>
                                    <option>Kolkata</option>
                                    <option>Mumbai</option>
                                    <option>Chennai</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary"> Submit </button>
                    </form>            
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUs;


                        