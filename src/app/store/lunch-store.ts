import {defaultLunches, ILunch} from "../model/lunch-model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddLunch, IncrementUpvotes, RemoveLunch, ResetUpvotes} from "./lunch-actions";
import cloneDeep from 'lodash-es/cloneDeep';

export class LunchModel {
  lunches: ILunch[];
}

@State<LunchModel>({
  name: 'lunches',
  defaults: defaultLunches,
})
export class LunchState {

  @Selector()
  static getLunches(state: LunchModel): ILunch[] {
    return state.lunches;
  }

  @Action(IncrementUpvotes)
  updateLunchUpvotes({getState, patchState}: StateContext<LunchModel>, action: IncrementUpvotes) {
    const stateCopy = cloneDeep(getState());
    stateCopy.lunches.filter(lunch => lunch.name === action.payload)
      .forEach(lunch => lunch.upvotes = ++lunch.upvotes);

    patchState({
      lunches: stateCopy.lunches,
    });
  }

  @Action(AddLunch)
  addLunch({getState, patchState}: StateContext<LunchModel>, action: AddLunch) {
    const stateCopy = {...getState()};
    stateCopy.lunches.push({
      name: action.payload,
      upvotes: 0,
    });

    patchState({
      lunches: stateCopy.lunches,
    });
  }

  @Action(RemoveLunch)
  removeLunch({getState, patchState}: StateContext<LunchModel>, action: RemoveLunch) {
    const stateCopy = {...getState()};
    const inxToRemove = stateCopy.lunches.indexOf(stateCopy.lunches.find(lunch => lunch.name === action.payload));
    stateCopy.lunches.splice(inxToRemove, 1);

    patchState({
      lunches: stateCopy.lunches,
    });
  }

  @Action(ResetUpvotes)
  resetUpvotes({getState, patchState}: StateContext<LunchModel>) {
    const stateCopy = {...getState()};
    stateCopy.lunches.map(lunch => lunch.upvotes = 0);

    patchState({
      lunches: stateCopy.lunches,
    });
  }

}
