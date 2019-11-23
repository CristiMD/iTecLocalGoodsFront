import { FETCH_TEST } from "./types";

export const fetchTest = (msg) => dispatch => {
    let x = msg;
    console.log(x);
    dispatch({
        type: FETCH_TEST,
        payload: x
    })
}