import React from 'react';
import {connect} from 'react-redux';
import {signInAction, signInSucceededAction, signOutAction} from "../redux"

function Header(props) {
    return (
        <div>
            <div className = "mainHeader">
                <span className = "headLeft" onClick= {props.homeHeader}>Omi News</span>
                <span className = "headRight" onClick = {props.isLoggedIn ? props.signOut : props.signIn}>
                    {props.isLoggedIn ? "Sign Out" : "Sign In"}
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        isLoggedIn : state.IS_LOGGED_IN
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        signIn : () => dispatch(signInAction()),
        signInSucceededAction : () => dispatch(signInSucceededAction()),
        signOut : () =>dispatch(signOutAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
