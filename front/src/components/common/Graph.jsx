import React from 'react'
import { Chart } from 'react-charts'

const MyChart=()=>{
    const data = React.useMemo(
        () => [
          {
            label:'Series 1',
            data:[[1, 0], [2, 5], [3, -5]]
          },
          {
            label:'Series 2',
            data:[[1, 0], [2, 0], [3, 0]]
          },
        ],
        []  
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
    return(
        <div
        style={{
          width: '800px',
          height: '250px'
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    )
}
export default MyChart;