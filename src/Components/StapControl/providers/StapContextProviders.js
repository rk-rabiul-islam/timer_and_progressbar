import { useReducer } from "react";
import StapContexts from "../Contexts/StapContext";
import StapReducers from "../reducers/StapReducers";



export const INITIAL_VALUE = 'STAP1';


// create AuthProviders
const StapContextProviders = ({children}) => {

    const [stepChanger, stepChangerDispatch] = useReducer(StapReducers, INITIAL_VALUE);

    return (

        <StapContexts.Provider value={{
            stepChanger,
            stepChangerDispatch
            }}
        >
            {children}
        </StapContexts.Provider>
    
    );
}

// Export AuthContextProviders
export default StapContextProviders;