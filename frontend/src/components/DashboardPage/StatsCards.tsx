import { Box, Grid, Typography } from '@mui/material';
import AppCard from '../AppCard';

const cards = [
    {
        title: 'Tempo Total Ativo',
        value: '65h 55min',
        color: '#FFF4E5',
        valueColor: '#f58e3f',
        footer: 'Tempo total somado no período',
    },
    {
        title: 'Média por Usuário',
        value: '16h 29min',
        color: '#E8F5E9',
        valueColor: '#128c88',
        footer: 'Média no período selecionado',
    },
    {
        title: 'Sessões por Usuário',
        value: '16',
        color: '#E3F2FD',
        valueColor: '#1d4ed8',
        footer: 'Média de sessões realizadas',
    },
    {
        title: 'Usuários Ativos',
        value: '3/4',
        color: '#F3E5F5',
        valueColor: '#1d4ed8',
        footer: 'Usuários com login recente',
    },
    {
        title: 'Tempo Máquina Operou',
        value: '28h 25min',
        color: '#FCE4EC',
        valueColor: '#7e22ce',
        footer: 'Processamento automâtico no período',
    },
    {
        title: 'Total Economizado',
        value: 'R$ 81.648,00',
        color: '#E8F5E9',
        valueColor: '#128c88',
        footer: 'Economia mensal estimada',
    },
];

export default function StatsCards() {
    return (
        <AppCard title="Dashboard de Tempo de Uso por Usuários">
            <Grid container spacing={2}>
                {cards.map((card) => (
                    <Grid
                        key={card.title}
                        size={{ xs: 12, sm: 6, md: 2 }}
                    >
                        <Box
                            sx={{
                                backgroundColor: card.color,
                                borderRadius: '14px',
                                padding: 2,
                                height: '100%',
                                border: '1px solid #f1f1f1',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '0.90rem',
                                    fontWeight: 700,
                                    textAlign: 'left',
                                    width: '100%',
                                    color: '#1f2937',
                                    lineHeight: 1.3,
                                }}
                            >
                                {card.title}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    mt: 1,
                                    color: card.valueColor,
                                    textAlign: 'left',
                                    width: '100%',
                                }}
                            >
                                {card.value}
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'block',
                                    fontSize: '0.8rem',
                                    mt: 1,
                                    color: '#55585e',
                                    textAlign: 'left',
                                    width: '100%',
                                }}
                            >
                                {card.footer}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </AppCard>
    );
}