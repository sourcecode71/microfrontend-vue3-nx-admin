import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { ApplicationYearSem } from "../model/AdmissionProgram";
import { Semesters } from "../../../shared/standalone";
export interface IState {
  semesters:Semesters[],
  applicationYearSem:ApplicationYearSem,
}
export default createStore({
  actions,
  mutations,
  getters,
  state
});
