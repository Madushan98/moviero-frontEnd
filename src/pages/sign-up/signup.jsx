import React from 'react';
import axios from 'axios';
import './signup.css'
import FormInput from '../../components/reusable-Components/sign-input/sign-input.component'

import {
    Link
}

    from "react-router-dom";

class Signup extends React.Component {


    handleSubmit = async e => {
        e.preventDefault();
        console.log("Hello");

        const user = {
            "userName": this.userName,
            "email": this.email,
            "password": this.password,

        }

            ;




        if (this.password === this.confirmPassword) {
            axios.post('users', user).then(res => {
                console.log(res);
            }

            ).catch(err => {
                console.log(err);
            }

            )
        }

        else {
            alert('Password Doesnt Match');
        }


    }

    render() {
        return (<section className="sign-section"> <div className="sign-up"> <div className="sign-title"> <h1>Welcome to Moviero</h1> <h3>Have an account? <p> <Link to="/signin">Sign in</Link></p> </h3> </div> <form className="signup-form" onSubmit={
            this.handleSubmit
        }

        > <FormInput type='text'
            name='userName'
            placeholder=' user name'

            onChange={
                event => this.userName = event.target.value
            }

            label='User name'
            required /> <FormInput type='text'
                name='email'
                placeholder=' Email'

                onChange={
                    event => this.email = event.target.value
                }

                label='Email'
                required /> <FormInput type='password'
                    name='password'
                    placeholder=' password'

                    onChange={
                        event => this.password = event.target.value
                    }

                    label='Password'
                    required /> <FormInput type='password'
                        name='confirm-password'
                        placeholder=' confirm-password'

                        onChange={
                            event => this.confirmPassword = event.target.value
                        }

                        label='Confirm Password'
                        required /> <button className="submit-button" type="submit">Sign Up</button> </form> </div> </section>);


    }

}

export default Signup;