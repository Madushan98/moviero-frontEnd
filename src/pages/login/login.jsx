import React from 'react';
import axios from 'axios';
import './login.css'
import FormInput from '../../components/reusable-Components/sign-input/sign-input.component'
import { connect } from 'react-redux';
import store from './../../redux/store'
import { logUser } from './../../redux/user/user.action';
import {
    Link
} from "react-router-dom";

class Login extends React.Component {



    handleSubmit = async e => {
        e.preventDefault();

        const {
            logUser
        }

        = this.props;



        const user = {

            "email": this.email,
            "password": this.password,

        };

        axios.post('users/login', user).then(
            res => {



                localStorage.setItem('token', res.headers.authorization);
                localStorage.setItem('userId', res.headers.userid);
                console.log(localStorage.getItem('token'));
                logUser();
            }
        ).catch(err => {
            console.log(err);
        })

    }






    render() {
        return ( < section className = "sign-section" >

            < div className = "sign-in" >
            <  div className = "sign-title" >
            <h1 > Welcome to Moviero </h1> <h3 > Don't Have an account? <p>  <Link to='/signup'>Sign Up</Link> </p> </h3>


            </div> 
            <form className="signin-form" onSubmit={this.handleSubmit } >
        < FormInput type = 'text'
        name = 'email'

        onChange = {
            event => this.email = event.target.value
        }

        label = 'Email'
        required / > 
        < FormInput type = 'password' name = 'password'  onChange = { event => this.password = event.target.value } label = 'Password' required / > 

        < button className = "submit-button"type = "submit" > Login </button> 
        
        </form > 
        
        
        </div> 
        
        
        
        </section > 
        
        
        );
}

}

const mapDispatchToProps = dispatch => {
    return {
        logUser: () => dispatch(logUser())
    }
}


export default connect(null, mapDispatchToProps)(Login);