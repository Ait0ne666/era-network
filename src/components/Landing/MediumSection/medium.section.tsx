
import { ArticleBody, ArticleDate, ArticleHeader, ArticleItem, Articles, SectionContainer, SectionHeader, SectionTitle } from './medium.section.styles'
import 'moment/locale/ru'
import moment from 'moment'
import { useLanguage } from '../../LanguageProvider/language.provider'
import { CustomButton } from '../../../styles/common.styles'
import {useSelector} from 'react-redux'
import { contentSelectors } from '../../../redux/content/content.selectors'

import {ReactComponent as MediumSVG} from '../../../assets/medium.svg'

moment.locale('ru')

const MediumSection: React.FC = () => {
    const {language} = useLanguage()
    const articles = useSelector(contentSelectors.mediumArticles)



    const format = 'DD MMM yyyy'



    return (
        <>
        {
            articles.length>0 ?
                <SectionContainer>
                    <SectionHeader>
                        <SectionTitle>
                            {language.medium.articles}
                        </SectionTitle>
                        <CustomButton >
                            {language.medium.allArticles}
                        </CustomButton>
                    </SectionHeader>
                    <Articles>
                        {
                            articles.map(article => {
                                return <ArticleItem>
                                    <ArticleHeader>
                                        <MediumSVG/>
                                        {article.title}
                                    </ArticleHeader>
                                    <ArticleBody>
                                        {article.subtitle}
                                    </ArticleBody>
                                    <ArticleDate>
                                        {moment(article.date).format(format)}
                                    </ArticleDate>
                                    </ArticleItem>
                            })
                        }
                    </Articles>
                </SectionContainer>
            :null
        }
        </>
    )
}


export default MediumSection