import "./barchart.scss"
import { BarChart,Bar, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from "react-router-dom";

type Props = {
  title: string,
  color: string,
  chartData: object[],
  dataKey: string
}

const Barchart = (props:Props) => {
  return (
    <div className="barChart">
      <h1>{props.title}</h1>
      <Link to="/" style={{color: props.color}}>See All</Link>

  
      <div className="chart">
      <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
          <Tooltip contentStyle={{background:"#2a3447",borderRadius:"5px"}}
          labelStyle={{display:"none"}}
          // cursor={false}
          cursor={{fill:"none"}}
          // position={{x:50,y:10}}
          />
          <Bar dataKey={props.dataKey} fill={props.color}  />
          
        </BarChart>
      </ResponsiveContainer>


      </div>
      <div className="texts">
 
        <span>
          <div className="duration">this month
          </div>  
        </span>

      </div>
    </div>
    
  )
}

export default Barchart