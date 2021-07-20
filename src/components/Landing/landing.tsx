import React, {useRef} from 'react'
import AboutSection from './AboutSection/about.section';
import AppSection from './AppSection/app.section';
import BlockchainSection from './BlockchainSection/blockchain.section';
import GeneralSection from './GeneralSection/general.section';
import { LandingContainer, LandingWrapper } from './landing.styles';
import MediakitSection from './MediakitSection/medialit.section';
import MediumSection from './MediumSection/medium.section';
import ProductsSection from './ProductsSection/products.section';
import RoadmapSection from './RoadmapSection/roadmap.section';
import SocialSection from './SocialSection/social.section';
import StoreLinksSection from './StoreLinksSection/store_links.section';
import VideoSection from './VideoSection/video.section';





const Landing: React.FC = () => {
    const generalRef = useRef<HTMLElement>(null)

    return (
        <LandingWrapper  style={{
            backgroundImage: `url('bg.png')`
        }}>
            <LandingContainer>
                <GeneralSection ref={generalRef}/>
                <MediumSection/>
                <BlockchainSection/>
                <AppSection/>
                <ProductsSection/>
                <StoreLinksSection/>
                <VideoSection/>
                <SocialSection/>
                <AboutSection/>
                <RoadmapSection/>
                <MediakitSection/>
            </LandingContainer>
        </LandingWrapper>
    )
}



export default Landing;