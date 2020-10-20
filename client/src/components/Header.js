import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { isAuth, getCookie, signout  } from '../helpers/auth';
import axios from 'axios';


class Header extends React.Component {
  state= {
    token: '',
    formdata:{
      name: '',
      email: '',
      password: '',
      role: ''
    },
    isLoggedIn: 'no'
  }

  componentDidMount(){
    const token = getCookie('token');
    
    this.setState({token:token});
    if(token!==undefined){
      this.setState({isLoggedIn:'yes'});
    }
    
    var deets = {
      role: '',
      name: '',
      email: ''
    }
    
    if(token!==undefined){
      axios.get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
        .then(res => {
          deets = res.data;
          this.setState({formdata:deets});
          // console.log(this.state.formdata);
          
        })
        .catch(err => {
          toast.error(`Error To Your Information ${err.response.statusText}`);
          if (err.response.status === 401) {
            signout(() => {
              // history.push('/login');
            });
          }
        });
    }
    
  }

  render() {
    return (
      <div>
        <div class="header row">
            <div class="col-md-4 p1">
            <Link to="/">
                <div class="logo">

                </div>
            </Link>
            </div>
            <div class="col-md-8 p2">
                <div class="nav1">
                    <Nav id="mr-auto">
                    
                              <Link class="link" to="/"> HOME </Link>
                              <Link class="link" to="/about-us"> ABOUT US </Link>

                              <Link class="emergency" to="/emergency">
                                  EMERGENCY 24x7
                              </Link>
                              <Link class="link" to="/contact-us"> CONTACT US </Link>
                               
                              {this.state.isLoggedIn==='yes'?
                                <>   
                                  <Link class="link" to="/signout" style = {{ marginRight: "15px" }}> SIGN OUT </Link>
                                </>
                              :
                              <>
                                <Link class="link" to="/login"> SIGN IN </Link>
                                <Link style = {{ marginRight: "15px" }} class="link" to="/register"> SIGN UP </Link>  
                              </>
                              }

                    </Nav>
                </div>
                <div class="nav2">
                    <Navbar id="mr-auto2">
                            <Link class="link" to="/appointment"><div class="appointment"></div> APPOINTMENTS </Link>
                            <Link class="link" to="/reports"><div class="reports"></div> LAB REPORTS </Link>
                            <Link class="link " to="/doctor"><div class="doctor"></div> FIND A DOCTOR </Link>
                            <Link class="link " to="/queries"><div class="queries"></div> QUICK QUERIES </Link>
                     </Navbar>
                </div>

            </div>

        </div>

      </div>
    );
  }
}
export default Header;



