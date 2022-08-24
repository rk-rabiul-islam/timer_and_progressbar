

// create Reducer

const StapReducers = (state, {type, payload}) => {

    switch (type) {
        case 'CHANGESTAP':
            return payload;      

        default:
            return state;

    }

}

// export AuthReducer

export default StapReducers;