import React, { Component } from 'react'
import NewsFeed from './NewsFeed'

export class ArchiveFeed extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showMain: false,
             showArchive: true
        }
    }
    showMainHandler = () =>{
        this.setState({showMain:true, showArchive: false})
    }
    showArchiveHandler = () =>{
        this.setState({showMain:false, showArchive: true})
    }
    render() {
        return (
            <>
              {
                  this.state.showMain ? 
                  <span
                    onClick= {this.showArchiveHandler}
                    className= "showArchiveHandler" 
                  >
                      Go To ArchiveFeed
                  </span> :
                  <span
                    onClick= {this.showMainHandler}
                    className= "showMainHandler" 
                  >
                      Go To MainFeed
                  </span>
              }  
              {
                  this.state.showMain ? <NewsFeed/>:
                  <div className = "archiveFeed">
                      Welcome to the Archive News from Database
                  </div>
              }
            </>
        )
    }
}

export default ArchiveFeed
