import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import AppCard from '../AppCard';

const data = [
    { day: 'Dom', value: 3 },
    { day: 'Seg', value: 4 },
    { day: 'Ter', value: 5 },
    { day: 'Qua', value: 5 },
    { day: 'Qui', value: 7 },
    { day: 'Sex', value: 7 },
    { day: 'Sáb', value: 8 },
];

export default function UsageLineChart() {
    return (
        <AppCard title="Distribuição Diária de Uso por Usuário">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="day" />

                    <YAxis
                        domain={[0, 12]}
                        ticks={[0, 3, 6, 9, 12]}
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#1976d2"
                    />
                </LineChart>
            </ResponsiveContainer>
        </AppCard>
    );
}