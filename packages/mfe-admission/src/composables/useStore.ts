import store from "../store";
import STORE_CONSTANTS from "../store/constants";
import { ComputedRef, computed } from "vue";
import {  ApplicationYearSem } from "../model/AdmissionProgram";
import { Semesters } from "../../../shared/standalone";

export const useStore = () => {
    const {
        SET_APPLICATION_YEAR_SEM,
        SET_SEMESTERS
    } = STORE_CONSTANTS.ACTIONS;
    const {
        GET_CURRENT_APP_SEM,
        GET_CURRENT_APP_YEAR
    } = STORE_CONSTANTS.GETTERS;

    const computedState = {
        semesters: computed(() => store.state.semesters) as ComputedRef<Semesters[]>,
        applicationYearSem: computed(() => store.state.applicationYearSem) as ComputedRef<ApplicationYearSem>
    };
    const actions = {
        setSemesters: (semester: Semesters[]) => {
            store.dispatch(SET_SEMESTERS, semester);
        },
        setApplicationYearSem: (appSemester: ApplicationYearSem) => {
            store.dispatch(SET_APPLICATION_YEAR_SEM, appSemester)
        }
    };

    const getters = {
        appYear: computed(() => store.getters[GET_CURRENT_APP_YEAR]),
        appSem: computed(() => store.getters[GET_CURRENT_APP_SEM])
    }
    return { ...computedState, ...actions, ...getters };
};
