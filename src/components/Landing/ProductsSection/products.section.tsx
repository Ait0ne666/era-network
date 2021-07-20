import { useLanguage } from "../../LanguageProvider/language.provider"
import { products } from "./products"




import { SectionContainer,
    ProductBody,
    ProductContainer,
    ProductDeviceType,
    ProductHeader,
    ProductHeaderLeft,
    ProductIcon,
    ProductheaderRight,
    SectionGrid,
    ProductItem


} from "./products-sections.styles"

import {ReactComponent as WebSVG} from '../../../assets/web.svg'
import {ReactComponent as DesktopSVG} from '../../../assets/desktop.svg'
import {ReactComponent as MobileSVG} from '../../../assets/mobile.svg'





const ProductsSection: React.FC = () => {
    const {currentLanguage} = useLanguage()


    return (
        <SectionContainer>
            <SectionGrid>
                {
                    products.map((product, index) => {
                        const parts = currentLanguage === 'en' ? product.partsEng : product.parts


                        console.log(parts)
                        return (
                            <ProductContainer key={index}>
                                <ProductHeader>
                                    <ProductHeaderLeft>
                                        <ProductIcon>
                                            <img src={product.icon}  alt='icon'/>
                                        </ProductIcon>
                                        {currentLanguage === 'en' ? product.titleEng : product.title}
                                    </ProductHeaderLeft>
                                    <ProductheaderRight>
                                        {
                                            product.types.map((type, index) => {
                                                return (
                                                    <ProductDeviceType key={index}>
                                                        {
                                                            type === 'desktop' ? <DesktopSVG/> : type === 'mobile' ? <MobileSVG/> : <WebSVG/>
                                                        }
                                                        </ProductDeviceType>
                                                )
                                            })
                                        }
                                    </ProductheaderRight>
                                </ProductHeader>
                                <ProductBody>

                                        {
                                            parts.map((part, index) => {
                                                return <ProductItem>
                                                    <div>.</div>
                                                    <span>{part}</span>
                                                </ProductItem>
                                            })
                                        }
                                </ProductBody>
                                </ProductContainer>
                        )
                    })
                }
            </SectionGrid>
        </SectionContainer>
    )
}



export default ProductsSection