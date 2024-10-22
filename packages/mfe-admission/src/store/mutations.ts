import { IState } from ".";
import { ApplicationYearSem } from "../model/AdmissionProgram";
import { Semesaters } from "../../../shared/standalone";
export default {
    setSemesters(state: IState, semester: Semesaters[]) {
        state.semesters = semester;
    },
    setAppSemester(state: IState, appYearSem: ApplicationYearSem) {
        state.appYearSem = appYearSem;
    }
};
