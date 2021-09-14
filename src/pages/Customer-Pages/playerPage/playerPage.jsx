import React from 'react';

import PlayVideo from '../../../components/videoPlayer/videoPlayer'
import './playerPage.scss'

class PlayerPage extends React.Component {






    render() {
        
        return (
            <section className="player-page">
                <PlayVideo/>
            
            </section>
        )
    }
}

export default PlayerPage;