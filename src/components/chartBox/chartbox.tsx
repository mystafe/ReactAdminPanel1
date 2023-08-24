import "./chartbox.scss"
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

type Props = {
  title: string,
  number: string|number,
  icon: string,
  color: string,
  percentage: number,
  chartData: object[],
  dataKey: string
}

const ChartBox = (props:Props) => {
  return (
    <div className="chartBox">
    <div className="boxInfo">
      <div className="title">
        <img src={props.icon} alt="" />
        <span>{props.title}</span>

        
      </div>
      <h1>{props.number}</h1>
      <Link to="/" style={{color: props.color}}>See All</Link>

    </div>
    <div className="chartInfo">
      <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        <LineChart data={props.chartData}>
          <Tooltip contentStyle={{background:"transparent",border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:50,y:10}}/>
          <Line type="monotone" dataKey={props.dataKey}
          dot={false}
          stroke={props.color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="texts">
        <span>
          <div className="percentage" style={{color: props.percentage>0?"limegreen":"tomato"}}>
            {props.percentage}%
          </div>  
        </span>
        <span>
          <div className="duration">this month
          </div>  
        </span>

      </div>
    </div>
    </div>
    

  
  )
}

export default ChartBox