import {
    Box,
    Grid,
    Typography,
} from '@mui/material';

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';

import AppCard from '../AppCard';

const data = [
    {
        name: 'Fernando Lopes',
        value: 8,
    },
    {
        name: 'Lorena Lima',
        value: 6,
    },
    {
        name: 'Márcia Costa',
        value: 5,
    },
];

export default function CapacityChart() {
    return (
        <AppCard title="Capacidade da Máquina x Equivalência Humana">
            <Grid
                container
                spacing={1.5}
                sx={{ mb: 3 }}
            >
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{
                            background: '#fdfbfb',
                            border: '1px solid #e8e7e7',
                            borderRadius: '10px',
                            p: 1.5,
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#6b7280',
                                mb: 0.5,
                                fontSize: '0.8rem',
                                width: '100%',
                                textAlign: 'left',
                            }}
                        >
                            Conciliações por dia
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: '#2563eb',
                                fontSize: '1.1rem',
                                wordBreak: 'break-word',
                                width: '100%',
                                textAlign: 'left',
                            }}
                        >
                            2.430.000
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{
                            background: '#fdfbfb',
                            border: '1px solid #e8e7e7',
                            borderRadius: '10px',
                            p: 1.5,
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#6b7280',
                                mb: 0.5,
                                fontSize: '0.8rem',
                                width: '100%',
                                textAlign: 'left',
                            }}
                        >
                            Equivalência Humana
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: '#a85fec',
                                fontSize: '1.1rem',
                                wordBreak: 'break-word',
                                width: '100%',
                                textAlign: 'left',
                            }}

                        >
                            24.3 analistas
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{
                            background: '#fdfbfb',
                            border: '1px solid #e8e7e7',
                            borderRadius: '10px',
                            p: 1.5,
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#6b7280',
                                mb: 0.5,
                                fontSize: '0.8rem',
                                width: '100%',
                                textAlign: 'left',
                            }}
                        >
                            Economia Mensal
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: '#2e9635',
                                fontSize: '1.1rem',
                                wordBreak: 'break-word',
                                width: '100%',
                                textAlign: 'left',
                            }}

                        >
                            R$ 81.648,00
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <ResponsiveContainer width="100%" height={170}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{
                        top: 5,
                        right: 10,
                        left: 25,
                        bottom: 5,
                    }}
                >
                    <XAxis
                        type="number"
                        tick={{
                            fontSize: 12,
                        }}
                    />

                    <YAxis
                        dataKey="name"
                        type="category"
                        width={130}
                        tick={{
                            fontSize: 14,
                        }}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                        fill="#2563eb"
                        radius={[0, 6, 6, 0]}
                        barSize={24}
                    />
                </BarChart>
            </ResponsiveContainer>
        </AppCard>
    );
}