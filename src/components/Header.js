import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signInAction, signOutAction} from "../redux"

function Header(props) {
    return (
        <div>
            <div className = "mainHeader">
                <Link to = "/"><span className = "headLeft" >Omi News</span></Link>
                <Link to = "/signin" onClick = {props.isLoggedIn ? props.signOut : props.sigIn}><span className = "headRight" >{props.isLoggedIn ? "Sign Out" : "Sign In"}</span></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        isLoggedIn : state.LOGIN_STATUS
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        signIn : () => dispatch(signInAction()),
        signOut : () =>dispatch(signOutAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
