import { Commit } from "vuex";
import { Semesters } from "../../../shared/standalone";
import { ApplicationYearSem } from "../model/AdmissionProgram";
import STORE_CONSTANTS from "./constants";


const {
    SET_SEMESTERS,
    SET_APPLICATION_YEAR_SEM
} = STORE_CONSTANTS.MUTATIONS;

export default {
    setSemesters({ commit }: { commit: Commit }, semesters: Semesters[]) {
        commit(SET_SEMESTERS, semesters);
    },
    setApplicationYearSem({ commit }: { commit: Commit }, appYearSem: ApplicationYearSem) {
        commit(SET_APPLICATION_YEAR_SEM, appYearSem);
    }
}