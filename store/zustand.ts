import create from "zustand";
import { Action } from "../types";
import {persist,devtools} from "zustand/middleware";

const completeAction = (actions: Action[], index: number): Action[] => {
  actions[index].completed = true;
  return actions;
};

const setTotalPoint = (completedActions: Action[]): number => {
  let totalPoint = 0;
  completedActions.forEach((action) => {
    totalPoint += action.point;
  });
  return totalPoint;
};
const getCompletedActions = (actions: Action[]): Action[] => {
  console.log(actions);
  const completedActions = actions.filter((action) => {
    return action.completed == true;
  });
  return completedActions;
};

type Store = {
  actions: Action[];
  completedActions: Action[];
  totalPoint: number;
  load: (actions: Action[]) => void;
  completeAction: (id: number) => void;
  setTotalPoint: () => void;
  getCompletedActions: () => void;
};

const useStore = create<Store>()(
    devtools(persist(
      (set) => ({
        actions: [],
        completedActions: [],
        totalPoint: 0,

        load: (actions) => {
          set(() => ({
            actions: actions
          }));
        },

        setTotalPoint: () => {
          set((state) => ({
            totalPoint: setTotalPoint(state.completedActions),
          }));
        },

        completeAction: (index) => {
          set((state) => ({ actions: completeAction(state.actions, index) }));
        },
        getCompletedActions: () => {
          set((state) => ({
            completedActions: getCompletedActions(state.actions),
          }));
        },
      }),{
        name: 'actions-storage'
      },
))
);

export default useStore;






