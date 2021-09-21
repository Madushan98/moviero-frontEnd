import React from "react";
import { connect } from "react-redux"
import PlayVideo from "../../../components/videoPlayer/videoPlayer";
import "./playerPage.scss";
import StreamMovieCard from '../../../components/reusable-Components/stream-movie-card/streamMovieCard'
import axios from 'axios'
class PlayerPage extends React.Component {

    state = {

        streamMovies: [],
        currentPlay : null,
    }




    getStreamMovies(userId) {
          const url = "http://localhost:8000/users/" + userId + "/purches";
    

setTimeout(() => {
         
 axios.get(url,{
                headers: {
                    Authorization: localStorage.getItem('token'), 
                },
            })
     .then(response => {
         
       console.log(response.data);
         
       this.setState({
         streamMovies :response.data.purchesMovies
       })
      
     })
        .catch(error => {
         
               
            console.error('There was an error!', error);
        });  

        }
    , 100)


    }
    
  
  

  setPlayUrl =(playMovie) => {
    console.log(playMovie);
    
    if (playMovie != null) {
      
   this.setState({
  currentPlay: playMovie,
})
    } else {
      
 
    }
 

 }





  
  
  componentDidMount() {
    
    this.getStreamMovies(this.props.currentUser.userId);


  }


    render() {
      
      
    return (
      <section className="player-page">

        {


          this.state.currentPlay == null ? (<div></div> )
        
        :  (  <div className="now-playing">
<div >
            Now Playing
            <hr></hr>
          </div>
              <PlayVideo playMovie={ this.state.currentPlay} />
        </div>)
        
        
        
        }
        

      

        
        
        <div className="purchases">
          <div className="stream-playList">
            Stream PlayList
            <hr></hr>
          </div>

          {
            this.state.streamMovies.map((movie,index) => {
              
              return (
                <StreamMovieCard key={index} movie={movie} setPlayUrl={ this.setPlayUrl}/>
              )

            })
               
          }
            </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
   
  };
};


export default connect(mapStateToProps,null)(PlayerPage);
