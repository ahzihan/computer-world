
import React from 'react';
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useGraph from '../../hooks/useGraph';
import './Dashboard.css';

const Dashboard = () => {
    const [ graph, setGraph ] = useGraph();
    return (
        <div>
            <h2 className='text-center my-3'>Welcome to Dashboard</h2>
            <div className='chart-container container my-5'>
                <div className='cart mx-auto col-sm-12'>
                    <LineChart width={450} height={300} data={graph}>
                        <Line dataKey="investment" fill="#8884d8" />
                        <Line dataKey="sell" fill="#8884d8" />
                        <Line dataKey="revenue" fill="#8884d8" />
                        <XAxis dataKey='month'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                    <h4 className='text-center'>Line Chart</h4>
                </div>
                <div className='cart mx-auto col-sm-12'>
                    <BarChart width={450} height={300} data={graph}>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <XAxis dataKey='month'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                    <h4 className='text-center'>Bar Chart</h4>
                </div>
                <div className='cart mx-auto col-sm-12'>
                    <PieChart width={450} height={300}>
                        <Pie
                            dataKey="investment"
                            isAnimationActive={false}
                            data={graph}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Pie dataKey="month" data={graph} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                        <Tooltip />
                    </PieChart>
                    <h4 className='text-center'>Pie Chart</h4>
                </div>
                <div className='cart mx-auto col-sm-12'>
                    <ComposedChart width={450} height={300} data={graph}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                    <h4 className='text-center'>Composed Chart</h4>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;