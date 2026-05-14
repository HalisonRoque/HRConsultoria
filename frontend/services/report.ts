import api from "./api";
import type { ReportType } from "../models/ReportType";

export const getReport = async (): Promise<ReportType> => {
    const { data } = await api.get<ReportType>("/api/report")
    return data;
};