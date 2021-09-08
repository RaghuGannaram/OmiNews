import React, { Component } from 'react';
import {connect} from 'react-redux';
import ArchiveFeed from "./ArchiveFeed";
import {signInAction, signOutAction} from "../redux"

export class MainSpace extends Component {

    
    render() {
        return (
            <>
                {this.props.isLoggedIn && <ArchiveFeed/>}
            </>
        )
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(MainSpace)