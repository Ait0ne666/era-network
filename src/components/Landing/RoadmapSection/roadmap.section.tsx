import { SectionContainer, SectionHeader, SectionTitle } from "./roadmap.styles"
import {useEffect, useRef, } from 'react'

import {ReactComponent as RoadSVG} from '../../../assets/road.svg' 
import Road from '../../../assets/road.png'
import { useWindowDimensions } from "../../../hooks/dimensions"

const RoadmapSection: React.FC = () => {

    const {width} = useWindowDimensions()

    const getRoadmapWidth = (width: number) => {
        if (width>=1280) return 1200
        return width-80 
    } 

    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>
                    Roadmap
                </SectionTitle>
            </SectionHeader>

            <RoadSVG width={getRoadmapWidth(width)} height={getRoadmapWidth(width)/4812*2926}/>
        </SectionContainer>
    )
}


export default RoadmapSection