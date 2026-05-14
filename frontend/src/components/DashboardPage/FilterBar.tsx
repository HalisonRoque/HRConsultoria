import { Box, MenuItem, TextField } from '@mui/material';

export default function FilterBar() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
            }}
        >
            <TextField
                select
                defaultValue="todos"
                size="small"
                sx={{
                    width: '40%',
                    '& .MuiSelect-select': {
                        textAlign: 'left',
                    },
                }}
            >
                <MenuItem
                    value="todos"
                    sx={{ justifyContent: 'flex-start' }}
                >
                    Todos
                </MenuItem>

                <MenuItem
                    value="ativos"
                    sx={{ justifyContent: 'flex-start' }}
                >
                    Ativos
                </MenuItem>

                <MenuItem
                    value="inativos"
                    sx={{ justifyContent: 'flex-start' }}
                >
                    Inativos
                </MenuItem>
            </TextField>
        </Box>
    );
}