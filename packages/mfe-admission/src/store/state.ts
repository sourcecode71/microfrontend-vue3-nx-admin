import { ApplicationYearSem } from "@/model/AdmissionProgram";
import { Semesters } from "../../../shared/standalone";

export default () => ({
  semesters: [] as Semesters[],
  applicationYearSem: {
    applicationYear: "",
    applicationSem: ""
  } as ApplicationYearSem
});
