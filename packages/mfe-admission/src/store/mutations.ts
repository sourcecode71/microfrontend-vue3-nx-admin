import { IState } from ".";
import { ApplicationYearSem } from "../model/AdmissionProgram";
import { Semesters } from "../../../shared/standalone";
export default {
    setSemesters(state: IState, semester: Semesters[]) {
        state.semesters = semester;
    },
    setApplicationYearSem(state: IState, appYearSem: ApplicationYearSem) {
        state.applicationYearSem = appYearSem;
    }
};
