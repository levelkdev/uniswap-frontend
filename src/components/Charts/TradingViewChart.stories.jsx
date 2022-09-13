import { DAI } from '@swapr/sdk'

import { Flex } from 'rebass'

import { TradingViewAreaChart } from './TradingViewAreaChart'

const data = [
  {
    time: 1662486000,
    value: '1601.794376003465471685150261540348',
  },
  {
    time: 1662490200,
    value: '1578.683769390060178475980473812557',
  },
  {
    time: 1662491100,
    value: '1575.762172192810446717267291093502',
  },
  {
    time: 1662494400,
    value: '1575.355619427407286529672150282773',
  },
  {
    time: 1662500100,
    value: '1578.835799883877198590696485506083',
  },
  {
    time: 1662501600,
    value: '1579.248800100554447123987046737473',
  },
  {
    time: 1662502200,
    value: '1579.248800100554447123987046737473',
  },
  {
    time: 1662503700,
    value: '1579.248800100554447123987046737473',
  },
  {
    time: 1662511200,
    value: '1531.207805990304496667296723170274',
  },
  {
    time: 1662513900,
    value: '1533.880642428749749890375593982467',
  },
  {
    time: 1662517800,
    value: '1514.601988588982865906550499230396',
  },
  {
    time: 1662518100,
    value: '1514.601988588982865906550499230396',
  },
  {
    time: 1662523500,
    value: '1506.675183432894678612650126115599',
  },
  {
    time: 1662525000,
    value: '1507.078550885016159012479448412367',
  },
  {
    time: 1662536100,
    value: '1515.288894755500182345078681640809',
  },
  {
    time: 1662538200,
    value: '1515.288894755500182345078681640809',
  },
  {
    time: 1662539100,
    value: '1515.288894755500182345078681640809',
  },
  {
    time: 1662543000,
    value: '1517.401705633453008126536150219745',
  },
  {
    time: 1662544200,
    value: '1517.401705633453008126536150219745',
  },
  {
    time: 1662555000,
    value: '1513.43327109786236226011861120273',
  },
  {
    time: 1662558300,
    value: '1544.910632421456173563233117574199',
  },
  {
    time: 1662560100,
    value: '1540.451996193581617194538134796052',
  },
  {
    time: 1662561900,
    value: '1540.364047153364109450563267174822',
  },
]

export default {
  title: 'TradingViewAreaChart',
  component: TradingViewAreaChart,
}

//👇 We create a “template” of how args map to rendering
const Template = args => (
  <Flex bg="#1e1e55" p={4} width={['100%', '550px', '550px', '600px', '650px']}>
    <TradingViewAreaChart {...args} />
  </Flex>
)

//👇 Each story then reuses that template
export const TradingViewAreaChartTemplate = Template.bind({})

TradingViewAreaChartTemplate.args = {
  data: data,
  tokenSymbol: DAI[1].symbol,
  showHours: false,
}