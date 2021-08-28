import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signInAction, signInSucceededAction, signOutAction} from "../redux";

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"Omi",
             password:"",
             error:""
        }
    }
    
    handleInputchange = (event) =>{
        event.target.name === "username" ? this.setState({username: event.target.value}) : this.setState({password:  event.target.value})
    }

    handleInputValidation = () =>{
        if(this.state.username === "" || this.state.password ===""){
            this.setState({error: "Please fill the form"})
            return false
        }
        else{
            this.setState({error: ""})
            return true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.handleInputValidation() &&
        this.state.username === "Omi" &&
        this.state.password === "1234")
        {
            this.props.signInSucceededAction()
        }
    } 

    render() {
        return (
            <div className = "signInCard">
                <h3>Sign In</h3>
                <form className = "form" onSubmit = {this.handleSubmit}>
                    <div className = "form-field">
                        <label>User Name</label>
                        <input
                            name = "username"
                            id = "username"
                            type = "text"
                            value = {this.state.username}
                            onChange = {this.handleInputchange}
                        />
                        <div className = "form-field">
                            <label>Password</label>
                            <input
                                name = "password"
                                id = "password"
                                type = "password"
                                value = {this.state.password}
                                onChange={this.handleInputchange}
                            />
                        </div>
                        <div>
                            <span style = {{color : "white"}}>{this.state.error}</span>
                        </div>
                        <div className="form-field">
                            <input
                                id = "signin-button"
                                type = "submit"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        isLoggedIn : state.IS_LOGGED_IN,
        showSignIn:  state.SHOW_SIGN_IN
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        signIn : () => dispatch(signInAction()),
        signInSucceededAction : () => dispatch(signInSucceededAction()),
        signOut : () =>dispatch(signOutAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
