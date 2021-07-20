import { useLanguage } from "../../LanguageProvider/language.provider";
import { SectionHeader } from "../BlockchainSection/blockchain.section.styles";
import {
  InfoContainer,
  SectionContainer,
  SectionTitle,
  ChartContainer,
  InfoRow,
  TableContainer,
  YContainer,
  ChartInnerContainer,
  GeneralInfoContainer,
  CapitalizationInfo,
  CapitalizationEmphasis,
  DescriptionContainer,
  TableHeader,
  TableRow,
} from "./abous.styles";
import {
  CartesianGrid,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import { useWindowDimensions } from "../../../hooks/dimensions";
import { Divider } from "@chakra-ui/react";
import moment from 'moment'


const tempData = [
  {
    year: 0,
    amount: 0,
  },
  {
    year: 1,
    amount: 0.2,
  },
  {
    year: 2,
    amount: 0.5,
  },
  {
    year: 3,
    amount: 0.8,
  },
  {
    year: 4,
    amount: 1.2,
  },
  {
    year: 5,
    amount: 1.8,
  },
  {
    year: 6,
    amount: 2.5,
  },
  {
    year: 7,
    amount: 2.8,
  },
  {
    year: 8,
    amount: 3.3,
  },
  {
    year: 9,
    amount: 3.6,
  },
  {
    year: 10,
    amount: 4,
  },
];





const isActive = (start: number, end: number) => {
    const startDate = moment('17.10.2020', 'DD.MM.yyyy').toDate()
    
    let s = moment(startDate).clone().add(start, 'M')
    let e = moment(startDate).clone().add(end, 'M')

    if (moment().isBetween(s, e)) return 0

    if (moment().isAfter(e)) return -1

    return 1

}




const AboutSection: React.FC = () => {
  const { language, currentLanguage } = useLanguage();
  const {width} = useWindowDimensions()


  const calculateChartWidth = (width: number) => {
    let containerWidth: number;
    if (width>=1280) {
        containerWidth=1200
    } else {
        containerWidth = width-80
    }


    return (containerWidth-80-33)*0.6
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{language.about.title}</SectionTitle>
      </SectionHeader>
      <InfoContainer>
          <GeneralInfoContainer>
              <CapitalizationInfo>
                  <div>
                      <span style={{marginBottom: 14}}>{language.about.emission.full}</span>
                      <span>{language.about.emission.start}</span>
                  </div>
                  <div>
                      <CapitalizationEmphasis>
                          {`$ 78 603 420`}
                      </CapitalizationEmphasis>
                      <span>{language.about.emission.capitalization}</span>
                  </div>
                  <div>
                      <CapitalizationEmphasis>
                          {`$ 1 3939`}
                      </CapitalizationEmphasis>
                      <span>{language.about.emission.rate}</span>
                  </div>
                  <div>
                      <CapitalizationEmphasis>
                          {`56 391 004`}
                      </CapitalizationEmphasis>
                      <span>{language.about.emission.emit}</span>
                  </div>
              </CapitalizationInfo>
              <DescriptionContainer>
                  <span style={{marginBottom: 10}}>
                      {language.about.decription.first}
                  </span>
                  <span>
                      {language.about.decription.second}
                  </span>
              </DescriptionContainer>
              </GeneralInfoContainer>
        <InfoRow>
          <ChartContainer>
              <ChartInnerContainer>
            <AreaChart   width={calculateChartWidth(width)} height={calculateChartWidth(width)/2} data={tempData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} innerRadius={50}>
              <Area
              
                dataKey="amount"
                fill="#FCE34C"
                fillOpacity={1}
                stroke="#F6C142"
                radius={10}
                
              />
              
              <CartesianGrid stroke="rgba(163, 163, 163, 0.05)" radius={10} />
              {/* <Line type="monotone" dataKey="amount" stroke="#ff7300"  dot={false} /> */}
              <YAxis
                mirror={true}
                dataKey="amount"
                axisLine={false}
                
                tickLine={false}
                type="number"
                ticks={[1, 2, 3, 4, 5]}
                tickCount={6}
                tickFormatter={(value, index) => {
                    if (value < 5) {
                        return `${value} ${language.about.billion}`;
                    } else {
                        return "";
                    }
                }}
                fontSize={14}
                fontFamily={'Montserrat'}
                fontWeight={500}
                color={'#221F20'}
                
              />

            </AreaChart>
            </ChartInnerContainer>
            <YContainer>
                {
                   new Array(11).fill(0).map((n, value) => {
                    if (value === 0) {
                        return <div>0</div>;
                        } else if (value < 10) {
                        return <div>{`${value}${currentLanguage === "en" ? "y" : "г"}`}</div>;
                        } else {
                        return <div></div>;
                        }
                   })
                }

            </YContainer>
          </ChartContainer>
          <TableContainer>
              <TableHeader>
                  {language.about.risks}
              </TableHeader>
              <TableRow finished={isActive(1,6)===-1} active={isActive(1,6)===0}>
                  <span>{`1-6 ${language.about.month}.`}</span>
                  <span>21-30%</span>
              </TableRow>
              <Divider margin='0px;' color='#C4C4C4' backgroundColor='#C4C4C4' opacity='1'/>
              <TableRow finished={isActive(7,12)===-1} active={isActive(7,12)===0}>
                  <span>{`7-12 ${language.about.month}.`}</span>
                  <span>16-25%</span>
              </TableRow>
              <Divider margin='0px;' color='#C4C4C4' backgroundColor='#C4C4C4' opacity='1'/>
              <TableRow finished={isActive(13,18)===-1} active={isActive(13,18)===0}>
                  <span>{`13-18 ${language.about.month}. (${currentLanguage==='en'? 'from': 'с'} 18.10.2021)`}</span>
                  <span>11-20%</span>
              </TableRow>
              <Divider margin='0px;' color='#C4C4C4' backgroundColor='#C4C4C4' opacity='1'/>
              <TableRow>
                  <span>{`19-60 ${language.about.month}.`}</span>
                  <span>6-15%</span>
              </TableRow>
              <Divider margin='0px;' color='#C4C4C4' backgroundColor='#C4C4C4' opacity='1'/>
              <TableRow>
                  <span>{`61-96 ${language.about.month}.`}</span>
                  <span>1-10%</span>
              </TableRow>
              <Divider margin='0px;' color='#C4C4C4' backgroundColor='#C4C4C4' opacity='1'/>
              <TableRow>
                  <span>{`97-120 ${language.about.month}.`}</span>
                  <span>1-5%</span>
              </TableRow>
              <Divider margin='0px;' color='#C4C4C4' backgroundColor='#C4C4C4' opacity='1'/>
              <TableRow>
                  <span>{`121 ${language.about.month}.`}</span>
                  <span>0%</span>
              </TableRow>
          </TableContainer>
        </InfoRow>
      </InfoContainer>
    </SectionContainer>
  );
};

export default AboutSection;
