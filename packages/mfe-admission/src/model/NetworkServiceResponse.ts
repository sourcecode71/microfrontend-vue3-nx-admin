import { ProgramsList, ApplicantSummery } from "./AdmissionProgram";
// Define a generic interface for network service responses
interface NetworkServiceResponse<T> {
    status?: number;
    message?: string;
    success?: boolean;
    data: T;
    errors: string[];
}

// Now, you can create type aliases for each specific response
type ProgramsListResponse = NetworkServiceResponse<ProgramsList[]>;
type ApplicantSummeryResponse = NetworkServiceResponse<ApplicantSummery[]>;

export { NetworkServiceResponse, ProgramsListResponse, ApplicantSummeryResponse };