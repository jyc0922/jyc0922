import type { Action } from "redux";
import * as CT from "../commonTypes";

export type State = Record<CT.UUID, CT.UUID[]>;

export type SetListidCardids = Action<"@listidCardids/set"> & {
  payload: CT.ListidCardids;
};

export type RemoveListidAction = Action<"@listidCardids/remove"> & {
  payload: CT.UUID;
};

export type PrependCardidToListidAction =
  Action<"@listidCardids/prependCardid"> & {
    payload: CT.CardidListid;
  };
export type AppendCardidToListidAction =
  Action<"@listidCardids/appendCardid"> & {
    payload: CT.CardidListid;
  };
export type RemoveCardidFromListidAction =
  Action<"@listidCardids/removeCardid"> & {
    payload: CT.CardidListid;
  };

export type Actions =
  | SetListidCardids
  | RemoveListidAction
  | PrependCardidToListidAction
  | AppendCardidToListidAction
  | RemoveCardidFromListidAction;
