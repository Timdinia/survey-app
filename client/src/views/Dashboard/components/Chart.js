import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from 'recharts';
import Title from '../../../layout/Main/components/Title';

// Generate Sales Data
function createData(points, amount) {
  return { points, amount };
}

const data = [
  createData('Jan', 0),
  createData('Fev', 300),
  createData('Mar', 750),
  createData('Avr', 300),
  createData('Mai', 1000),
  createData('Jun', 2000),
  createData('Jui', 700),
  createData('Aou', 2400),
  createData('Sep', 2900)
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>
        Customer Satisfaction{' '}
        <span role="img" aria-label="smiling emoji">
          😃
        </span>
      </Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}>
          <XAxis dataKey="points" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Customer points (CP)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
