import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilterBar from '../../../components/DashboardPage/FilterBar';
import StatsCards from '../../../components/DashboardPage/StatsCards';
import UserList from '../../../components/DashboardPage/UserList';
import UsageLineChart from '../../../components/DashboardPage/UsageLineChart';
import CapacityChart from '../../../components/DashboardPage/CapacityChart';
import AppCard from '../../../components/AppCard';
import type { ReportType } from "../../../../models/ReportType";
import { getReport } from '../../../../services/report'

export default function Dashboard() {
    const [data, setData] = useState<ReportType | null>(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataError, setDataError] = useState(false);

    useEffect(() => {
        console.log('chamando endpoint...');

        getReport()
            .then((resp) => {
                console.log('res back:', resp);

                setData(resp);
                setDataLoaded(true);
            })
            .catch((err) => {
                console.error('error back:', err);
                setDataError(true);
                setDataLoaded(true);
            });
    }, []);

    return (
        <AppCard>
            <Box sx={{ p: 3 }}>
                <FilterBar />

                <Box sx={{ mt: 3 }}>
                    <StatsCards />
                </Box>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <UserList />
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <UsageLineChart />

                        <Box sx={{ mt: 2 }}>
                            <CapacityChart />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </AppCard>
    );
}