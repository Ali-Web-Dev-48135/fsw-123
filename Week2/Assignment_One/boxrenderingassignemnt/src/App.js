import Card from './Card';
import {data} from './data';


function App() {
  const propStyles =[ 
    {
      "display": "flex",
      "align-item": "center",
      "justify-content": "center",
      "flex-direction": "row",
      "width": "99%",
      "margin": "15rem 0rem 0rem 0rem",

    },
    {
      "backgroundColor": "red",
      "width": "12rem"

    },
    {
      "backgroundColor": "orange",
      "width": "12rem"
    },
    {
      "backgroundColor": "yellow",
      "width": "12rem"
    },
    {
      "backgroundColor": "green",
      "width": "12rem"
    },
   
];
  
  return (
    <div style={propStyles[0]}>
      <Card style={propStyles[1]} data={data[0]}/>
      <Card style={propStyles[2]} data={data[1]}/>
      <Card style={propStyles[3]} data={data[2]}/>
      <Card style={propStyles[4]} data={data[3]}/>
    </div>   
  )
};

export default App;
