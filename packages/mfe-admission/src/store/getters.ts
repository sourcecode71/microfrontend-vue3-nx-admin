import { IState } from ".";
export default {
    getCurrentAppYear(state: IState){return state.applicationYearSem.applicationYear;}, 
    getCurrentAppSem(state:IState){return state.applicationYearSem.applicationSem}
};
