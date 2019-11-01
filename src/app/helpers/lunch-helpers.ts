import {ILunch} from "../model/lunch-model";

export const sortLunches = (list: ILunch[]): ILunch[] => {
  return list.sort((a, b) => b.upvotes - a.upvotes)
};
