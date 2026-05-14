export type ReportType = {
    summary: DashboardSummaryDto;
    users: UserUsageDto[];
    dailyUsageChart: DailyUsageDto[];
};

export type DashboardSummaryDto = {
    totalActiveHours: number;
    averageHoursPerUser: number;
    totalSessions: number;
    activeUsers: number;
    inactiveUsers: number;
    totalMachineHours: number;
    totalEconomy: number;
    economyPeriod: string;
};

export type UserUsageDto = {
    userName: string;
    userType: string;
    lastLogin: string;
    totalActiveHours: number;
    averageHoursPerDay: number;
    machineProcessingHours: number;
    sessions: number;
    isActive: boolean;
    economyGenerated: number;
};

export type DailyUsageDto = {
    userName: string;
    day: string;
    hoursUsed: number;
};