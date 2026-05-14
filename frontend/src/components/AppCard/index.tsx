import {
    Card,
    CardHeader,
    CardContent,
} from '@mui/material';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type AppCardProps = {
    title?: string;
    action?: ReactNode;
    children: ReactNode;
};

export default function AppCard({
    title,
    action,
    children,
}: AppCardProps) {
    return (
        <Card className={styles.card}>
            {title && (
                <CardHeader
                    title={
                        <span className={styles.title}>
                            {title}
                        </span>
                    }
                    action={action}
                    className={styles.header}
                    sx={{
                        '& .MuiCardHeader-content': {
                            textAlign: 'left',
                        },
                    }}
                />
            )}

            <CardContent className={styles.content}>
                {children}
            </CardContent>
        </Card>
    );
}