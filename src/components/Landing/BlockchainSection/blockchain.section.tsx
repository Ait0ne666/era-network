import { useLanguage } from "../../LanguageProvider/language.provider"
import { Card, Cards, SectionContainer, SectionHeader, SectionTitle } from "./blockchain.section.styles"

const BlockchainSection : React.FC = () => {

    const {language} = useLanguage()




    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>
                    {language.blockchain.title}
                </SectionTitle>
            </SectionHeader>
            <Cards>
                <Card>
                    <span>1</span>
                    <span>{language.blockchain.based}</span>
                </Card>
                <Card>
                    <span>2</span>
                    <span>{language.blockchain.transactions}</span>
                </Card>
                <Card>
                    <span>3</span>
                    <span>{language.blockchain.combine}</span>
                </Card>
            </Cards>
        </SectionContainer>

    )
}



export default BlockchainSection