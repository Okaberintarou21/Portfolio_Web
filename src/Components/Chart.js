import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
} from 'chart.js';

// Register the necessary components for the chart
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const SkillPieChart = () => {
    const data = {
        labels: ["Bootstrap",'tailwind','React', 'Node.js', 'Express', 'PostgreSQL', 'Tensorflow',"Git"], // Labels for tools/frameworks
        datasets: [
            {
                label: 'Tools & Frameworks',
                data: [50, 50, 50, 50, 50, 50, 50, 50],
                backgroundColor: [
                    '#FFB6C1',  // ชมพูอ่อน (Light Pink)
                    '#FFEB3B',  // เหลืองสด (Bright Yellow)
                    '#4CAF50',  // เขียวสด (Bright Green)
                    '#00BCD4',  // น้ำเงินฟ้า (Cyan)
                    '#FFC107',  // ส้ม (Amber)
                    '#E91E63',  // ชมพูเข้ม (Hot Pink)
                    '#03A9F4',  // น้ำเงินอ่อน (Light Blue)
                    '#8BC34A',  // เขียวอ่อน (Light Green)
                ]
                
                
                ,
                borderColor: [
                    '#FFB6C1',  // ชมพูอ่อน (Light Pink)
                    '#FFEB3B',  // เหลืองสด (Bright Yellow)
                    '#4CAF50',  // เขียวสด (Bright Green)
                    '#00BCD4',  // น้ำเงินฟ้า (Cyan)
                    '#FFC107',  // ส้ม (Amber)
                    '#E91E63',  // ชมพูเข้ม (Hot Pink)
                    '#03A9F4',  // น้ำเงินอ่อน (Light Blue)
                    '#8BC34A',  // เขียวอ่อน (Light Green)
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default SkillPieChart;
