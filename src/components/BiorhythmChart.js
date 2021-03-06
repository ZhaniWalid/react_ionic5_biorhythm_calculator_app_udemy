// Use this cmd: 'npm install dayjs' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import dayjs from 'dayjs';
import React from 'react';
// Use this cmd: 'npm install recharts' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from 'recharts';
import { calculateBiorhythmsSeries } from '../calculations';
import './BiorhythmChart.css';

/* const dataChart = [
    { date: '2020-12-10', physical: 0.99,  emotional: 0.50,  intellectual: -0.25 },
    { date: '2020-12-11', physical: 0.37,  emotional: -0.50, intellectual: -0.85 },
    { date: '2020-12-12', physical: -0.10, emotional: -0.90, intellectual: 0.48 }
]; */

// function formatDate(isoStringDate) {
const formatDate = (isoStringDate) => { // This is the same func also but with arrows (=>) way (ES6)
    return dayjs(isoStringDate).format('D MMM');
}

// function BiorhythmChart() {
const BiorhythmChart = ({ birthDate, targetDate}) => { // This is the same func also but with arrows (=>) way (ES6)
    // Substract a periode that' start 15 days before the targetDate' & 'ends 15 days after the targetDate'
    const startDate = dayjs(targetDate).subtract(15, 'days');
    // 31 days = 15 'before targetDate' + 15 days 'after the targetDate' + the 'targetDate itself' (= 1)
    const dataChart = calculateBiorhythmsSeries(birthDate, startDate, 31).map(item => ({
        ...item, // '...' (= Spread Operator) => copy old properties + keeping other properties + Adding them as elements to a new array
        date: formatDate(item.date)
    }));
    return (
        <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
            <LineChart data={dataChart}>
                {/* Note: The array has '31 elements' centered around the 'targetDate' (Starting from the index=0 [= the 1st element])    
                'dataChart[3].date'  => the "4th" element
                'dataChart[15].date' => So the "15th element corresponds to the 'targetDate'"
                'dataChart[27].date' => the "28" element */}
                <XAxis dataKey="date" ticks={[dataChart[3].date, dataChart[15].date, dataChart[27].date]} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" /> {/* strokeDasharray="3 3" => Draw the line for '3 pixels, then skip, then repeat' */}

                {/* 'x' => At which point on the 'XAxis' we want to draw this Line (on our example => at the middle of the 'chart') */}
                <ReferenceLine x={dataChart[15].date} />

                <Line type="natural" dot={false} dataKey="physical"     className="physical" />
                <Line type="natural" dot={false} dataKey="emotional"    className="emotional" />
                <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhythmChart;