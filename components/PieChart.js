import {
    Chart as ChartJs,
    Tooltip,
    ArcElement,
    Legend
} from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartJs.register(Tooltip,
    ArcElement,
    Legend)

const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [{
        data: [55,31,14],
        backgroundColor: ['#98D89E','#EE8484', '#F6DC7D'] 
    }]
}

const options={
    plugins: {
        legend:{
            display: true,
            position: 'right'   //posirtions right
        },

    }
}


const PieChart = () => {

    return(
        <div className='p-2 '>
            {/* <h1> Pie Chart</h1> */}
            <Pie data={data} options={options}/>
        </div>

    )
}

export default PieChart