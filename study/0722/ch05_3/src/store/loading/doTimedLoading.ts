import { Dispatch } from "redux";
import { setLoading } from "./actions";

export const doTimeLoading =
  (duration: number = 3 * 1000) =>
  (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const timerID = setTimeout(() => {
      clearTimeout(timerID);
      dispatch(setLoading(false));
    }, duration);
  };
