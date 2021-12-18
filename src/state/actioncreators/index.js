//An action creator is a function that creates and returns an action object. 
//We typically use these so that we don't have to write the action object by hand
//every time we want to use it.

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}

