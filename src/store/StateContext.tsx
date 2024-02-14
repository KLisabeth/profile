import React, { ReactNode, useReducer, createContext, Dispatch } from 'react';

// Define the shape of your state
interface State {
    count: number;
    projects: Project[];
}

// Define project interface
interface Project {
    id: string;
    name: string;
    // other project properties
}

// Define action types
type Action =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'SET_COUNT'; payload: number }
    | { type: 'GET_PROJECT'; payload: Project }
    | { type: 'REMOVE_PROJECT'; payload: string }; // payload: project id

// Define initial state
const initialState: State = {
    count: 0,
    projects: [],
};

// Create a context
const StateContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

// Define a reducer
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'SET_COUNT':
            return { ...state, count: action.payload };
        case 'GET_PROJECT':
            return { ...state, projects: [...state.projects, action.payload] };
        case 'REMOVE_PROJECT':
            return { ...state, projects: state.projects.filter(project => project.id !== action.payload) };
        default:
            return state;
    }
};

// State provider component
export const StateProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom hook for using the state
export const useStateValue = () => React.useContext(StateContext);
