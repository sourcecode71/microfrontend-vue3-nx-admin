import { IState } from ".";
export default {
    getCurrentYear(state: IState){return state.applicationYearSem.applicationYear;}, 
    getCurrentSem(state:IState){return state.applicationYearSem.applicationSem}
};
