import {Line} from 'react-chartjs-2'
import {Chart as ChartJs, LineElement,CategoryScale, LinearScale, PointElement, Legend, Tooltip} from 'chart.js'
import { useState } from 'react'

ChartJs.register(LineElement,CategoryScale , LinearScale, PointElement, Legend, Tooltip)

//categoryscale - X axis
//LinearScale - Y axis
//Legend- for labeling what is what
//Toolztip- whne hoverred on it, shows the x,y coordinate values

const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],  //x-axis labels
    datasets: [
        {
        label: 'Guest',
        data: [200,20,360, 130, 490],
        //backgroundColor: '#FFFFFF',
        borderColor: '#E9A0A0',
        //pointBorderColor:'aqua',
        fill: true,
        tension: 0.5,  //for curve
    },
    {
        label: 'User',
        data: [100, 50, 200, 80, 300],
        borderColor: '#9BDD7C',
        fill: false,
        tension: 0.4
    }
] 
}

//TODO:- make data array dynamic.

const options ={
    plugins: {
        legend:{
            display: true,
            align: 'end'
        },

    },
    scales: {
        y:{
            min: 0, max:500
        }
    }
} 

const LineChart  = () => {
    const [currentMonth, setMonth] = useState('jan-feb')

    return(
        <div className='p-3 rounded-xl bg-[#FFFFFF]' style={{backgroundColor: '#ffffff'}}>
            <h1 className='font-black font-[700] text-sm '>Activities</h1>
            <select onChange={(e) => setMonth(e.target.value)} value={currentMonth} className='w-[107px] mb-2 text-[#858585] outline-none text-[12px] pr-[-10px]'>
                <option value="jan-feb">Jan-Feb 2024</option>
                <option value="feb-march">Feb-March 2024</option>
                <option value="march-april">March-April 2024</option>
                <option value="april-may">April-May 2024</option>
                <option value="may-june">May-June 2024</option>
            </select>

            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart