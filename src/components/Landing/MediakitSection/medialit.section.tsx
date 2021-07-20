import { useLanguage } from "../../LanguageProvider/language.provider"
import { MediaKitContainer, MediaKitSectionContainer, MediaKitWrapper } from "./mediakit.styles"
import {Link} from 'react-router-dom'

import Lines from '../../../assets/lines.png' 



const MediakitSection: React.FC = () => {
    const {language} = useLanguage()


    return (
        <MediaKitSectionContainer>
            <MediaKitWrapper >
                <MediaKitContainer style={{backgroundImage: `url(${Lines})`}}>
                    <h5>
                        {language.mediakit.title}
                    </h5>
                    <span>
                    {language.mediakit.subtitle}
                    </span>
                    <Link to='/styles'>
                        <button>
                            {language.mediakit.follow}
                        </button>
                    </Link>
                </MediaKitContainer>
            </MediaKitWrapper>
        </MediaKitSectionContainer>
    )

}




export default MediakitSection