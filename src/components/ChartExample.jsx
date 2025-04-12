import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const monthlySalesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Monthly Sales (in units)',
            data: [1200, 1500, 1800, 2000, 2200, 2500],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
        },
    ],
};

const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Revenue (in ₹ Lakhs)',
            data: [50, 60, 70, 80, 90, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        },
    ],
};

const marketShareData = {
    labels: ['Brand A', 'Brand B', 'Brand C', 'Brand D'],
    datasets: [
        {
            label: 'Market Share (%)',
            data: [40, 30, 20, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
    ],
};

const topDealersData = {
    labels: ['Dealer X', 'Dealer Y', 'Dealer Z'],
    datasets: [
        {
            label: 'Sales (in units)',
            data: [500, 700, 600],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const customerSatisfactionData = {
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    datasets: [
        {
            label: 'Customer Feedback',
            data: [60, 25, 10, 5],
            backgroundColor: ['#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const quarterlyGrowthData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Quarterly Growth (%)',
            data: [5, 10, 15, 20],
            borderColor: '#FFCE56',
            backgroundColor: '#FFCE56',
        },
    ],
};

const yearOnYearSalesData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'Year-on-Year Sales (in units)',
            data: [10000, 12000, 15000, 18000, 20000],
            borderColor: '#9966FF',
            backgroundColor: '#C9A9FF',
        },
    ],
};

const topSalesAreasData = {
    labels: ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6', 'Area 7', 'Area 8', 'Area 9', 'Area 10'],
    datasets: [
        {
            label: 'Sales (in units)',
            data: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
    ],
};

const topProductsData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
        {
            label: 'Sales (in units)',
            data: [3000, 2500, 2000, 1500, 1000],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
    ],
};

export default function ChartExample() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">Motorbike Sales in India</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Monthly Sales</h2>
                    <Line data={monthlySalesData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Revenue</h2>
                    <Bar data={revenueData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Market Share</h2>
                    <Pie data={marketShareData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Top Dealers</h2>
                    <Bar data={topDealersData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Customer Satisfaction</h2>
                    <Doughnut data={customerSatisfactionData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Quarterly Growth</h2>
                    <Line data={quarterlyGrowthData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Year-on-Year Sales</h2>
                    <Line data={yearOnYearSalesData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Top 10 Sales Areas</h2>
                    <Bar data={topSalesAreasData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Top Products</h2>
                    <Pie data={topProductsData} options={{ responsive: true, animation: { duration: 1000 } }} />
                </div>
            </div>
        </div>
    );
}
