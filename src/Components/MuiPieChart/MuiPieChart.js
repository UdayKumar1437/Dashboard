import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function MuiPieChart() {
    return (
        <PieChart
            series={[
                {
                    innerRadius: 40,
                    outerRadius: 150,
                    paddingAngle: 1,
                    cornerRadius: 5,
                    //   startAngle: -45,
                    //   endAngle: 225,
                    // cx: 220,
                    // cy: 180,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                },
            ]}
            width={400}
            height={400}
            slotProps={{
                legend: {
                    hidden:true
                }
            }}
        />
    );
}
