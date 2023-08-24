import StackedArea from '../../components/StacketAreaChart/StackedArea'
import Barchart from '../../components/barChart/barchart'
import ChartBox from '../../components/chartBox/chartbox'
import TopBox from '../../components/navbar/topBox/TopBox'
import PieChartBox from '../../components/pieChartBox/piechartbox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'

import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1"><TopBox/> </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/> </div>
      <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/> </div>
      <div className="box box7"><StackedArea/> </div>
      <div className="box box8"><Barchart {...barChartBoxVisit}/></div>
      <div className="box box9"><Barchart {...barChartBoxRevenue}/></div>
      
      
      </div>
  )
}

export default Home