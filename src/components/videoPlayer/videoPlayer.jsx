
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
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {


        const {title,movieVideoUrl,movieImageUrl,movieBannerUrl } =  this.props.playMovie;
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={movieVideoUrl}
                    poster={movieBannerUrl}
                    width="1500"
                    height="700"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}

export default PlayVideo;