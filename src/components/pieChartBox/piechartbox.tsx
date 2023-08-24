import "./piechartbox.scss"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
  { name: 'Mobile', value: 400,Color:"#08F" },
  { name: 'Desktop', value: 300,Color:"#00C49F" },
  { name: 'Laptop', value: 300,Color:"#FFBB28" },
  { name: 'Tablet', value: 200,Color:"#FF8042" },
];


const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height={300}>
      <PieChart width={800} height={400}>
        <Tooltip contentStyle={{background:"white",borderRadius:"5px"}}
          labelStyle={{display:"none"}}
           //cursor={{fill:"none"}}
           />
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          dataKey="value"
        >  
          {data.map((item) => (
            <Cell key={item.name} fill={item.Color} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
            <div className="dot" style={{background:item.Color}}></div>
            </div>
         
            <div className="name">{item.name}</div>
            <div className="value">{item.value}</div>

        </div>
        ))}
      

      </div>


    </div>
    
  )
}

export default PieChartBox