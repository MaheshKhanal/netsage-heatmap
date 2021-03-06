import React, { useEffect } from 'react';
import Chart from 'chart.heatmap.js';

export const Canvas = props => {
  let data = {
    labels: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h'],
    datasets: [
      {
        label: 'Monday',
        data: [8, 6, 5, 7, 9, 8, 1, 6, 3, 3, 8, 7],
      },
      {
        label: 'Tuesday',
        data: [6, 8, 5, 6, 5, 5, 7, 0, 0, 3, 0, 7],
      },
      {
        label: 'Wednesday',
        data: [8, 5, 6, 4, 2, 2, 3, 0, 2, 0, 10, 8],
      },
      {
        label: 'Thursday',
        data: [4, 0, 7, 4, 6, 3, 2, 4, 2, 10, 8, 2],
      },
      {
        label: 'Friday',
        data: [1, 0, 0, 7, 0, 4, 1, 3, 4, 5, 1, 10],
      },
    ],
  };
  useEffect(() => {
    console.log('rendering');
    const chartDiv = document.getElementById('Chart_' + props.panelId);
    if (chartDiv) {
      let ctx = chartDiv.getContext('2d');
      if (ctx) {
        new Chart(ctx).HeatMap(props.data, props.options);
      }
    }
  });
  return (
    <div>
      <canvas id={'Chart_' + props.panelId} style={{ height: props.height, width: props.width }}></canvas>
    </div>
  );
};
