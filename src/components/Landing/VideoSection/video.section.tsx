import { SectionContainer } from "./video.section.styles"
import {Player, BigPlayButton} from 'video-react'

const VideoSection: React.FC = () => {
    
    return (
        <SectionContainer>
            <Player src="/video.mp4" poster='/black.png'>
              <BigPlayButton position="center" />
            </Player>
        </SectionContainer>
    )


}



export default VideoSection