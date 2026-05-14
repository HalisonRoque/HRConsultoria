import {
    Box,
    Chip,
    Stack,
    Typography,
} from '@mui/material';
import AppCard from '../AppCard';

const users = [
    {
        name: 'Fernando Lopes',
        status: 'Ativo',
        lastLogin: 'Hoje às 08:32',
        totalTime: '18h 50min',
        machineTime: '8h 30min',
        sessions: 24,
        averagePerDay: '3h 12min',
        monthlySavings: 'R$ 24.500,00',
    },
    {
        name: 'Lorena Lima',
        status: 'Ativo',
        lastLogin: 'Hoje às 09:14',
        totalTime: '16h 20min',
        machineTime: '7h 20min',
        sessions: 19,
        averagePerDay: '2h 48min',
        monthlySavings: 'R$ 18.200,00',
    },
    {
        name: 'Márcia Costa',
        status: 'Inativo',
        lastLogin: 'Ontem às 18:42',
        totalTime: '15h 10min',
        machineTime: '6h 00min',
        sessions: 14,
        averagePerDay: '2h 10min',
        monthlySavings: 'R$ 12.300,00',
    },
];

export default function UserList() {
    return (
        <AppCard title="Detalhamento por Usuário">
            <Stack spacing={2}>
                {users.map((user) => (
                    <Box
                        key={user.name}
                        sx={{
                            border: '1px solid #e5e7eb',
                            borderRadius: '14px',
                            p: 2.5,
                            transition: '0.2s ease',
                            backgroundColor: '#fcfcfc',
                            '&:hover': {
                                borderColor: '#d1d5db',
                                backgroundColor: '#f6f6f7',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                mb: 2,
                                width: '100%',
                            }}
                        >
                            {/* Esquerda */}
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#111827', textAlign: 'left' }}>
                                    {user.name}
                                </Typography>

                                <Typography sx={{ fontSize: '0.8rem', color: '#6b7280', textAlign: 'left' }}>
                                    Último login: {user.lastLogin}
                                </Typography>
                            </Box>

                            {/* Direita */}
                            <Chip
                                label={user.status}
                                size="small"
                                variant="filled"
                                sx={{
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    height: '24px',

                                    ...(user.status === 'Ativo'
                                        ? {
                                            bgcolor: '#dcfce7',
                                            color: '#166534',
                                        }
                                        : {
                                            bgcolor: '#fee2e2',
                                            color: '#991b1b',
                                        }),
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'center',
                                gap: 8,
                                width: '100%',
                                maxWidth: '900px',
                                margin: '0 auto',
                            }}
                        >
                            {/* Coluna da Esquerda */}
                            <Box sx={{ flex: 1 }}>
                                <Stack spacing={2}>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                            Tempo total
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                                            {user.totalTime}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                            Tempo máquina
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, color: '#7e22ce', fontSize: '1rem' }}>
                                            {user.machineTime}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                            Sessões realizadas
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                                            {user.sessions}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            {/* Coluna da Direita */}
                            <Box sx={{ flex: 1 }}>
                                <Stack spacing={2} sx={{ textAlign: 'left' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                            Média por dia
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                                            {user.averagePerDay}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                            Economia mensal
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, color: '#16a34a', fontSize: '1rem' }}>
                                            {user.monthlySavings}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </AppCard>
    );
}