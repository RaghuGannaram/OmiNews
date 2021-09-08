import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signInAction, signOutAction} from '../redux'
import MainSpace from './MainSpace'
import NewsFeed from './NewsFeed'


export class Welcome extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        return (
            this.props.isLoggedIn ?  <MainSpace/> : 
            <div className = "welcomeBanner">
                <h1>Welcome to Omi News</h1>
                <p>Here is the list of things happened today...</p>
                <p>Please sign in to save the articles</p>
                <NewsFeed/>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
