
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 

class PlayVideo extends Component {
    player = {}
    state = {
        video: {
            src: "https://res.cloudinary.com/dui8rkfs5/video/upload/v1630231639/videos/q7wf58aaorymnmzoig8i.mp4",
            poster: "http://www.example.com/path/to/video_poster.jpg"
        }
    }
 
 
 
    render() {

       
        const { title, movieVideoUrl, movieImageUrl, movieBannerUrl } = this.props.playMovie;
        console.log(movieVideoUrl);
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={movieVideoUrl}
                    poster={movieBannerUrl}
                    width="1500"
                    height="700"
                  
                />
            </div>
        );
    }
}

export default PlayVideo;