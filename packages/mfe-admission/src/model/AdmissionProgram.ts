interface ProgramsList {
  id: number;
  program: string;
  openClose: number;
  openDate: string;
  closeDate: string;
  activeYN: number;
  programId: number;
  fromFee: number;
  testNO: number;
  examDate: string;
  paymentOptionOpenClose: string;
  admissionYear: number;
  admissionSem: number; // Change this to number
  resultPublishDate: string;
  admissionSemName: string;
  openSatus: boolean;
}
interface ApplicantSummery {
  id: number;
  program: string;
  admissionYear: number;
  admissionSem: number; // Change this to number
  admissionSemName: string;
  applicantCount: number;
  paidCount: number

}

interface ApplicationYearSem {
  applicationYear: string,
  applicationSem: string
}
export { ProgramsList, ApplicantSummery, ApplicationYearSem }