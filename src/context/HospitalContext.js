import { createContext, useContext, useReducer } from "react";

const HospitalContext = createContext();

const initialState = {
  hospitals: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "search/loading":
      return { ...state, isLoading: true };
    case "search/hospitals":
      return { ...state, hospitals: action.payload, isLoading: false };
    default:
      throw new Error("action type is unknown!");
  }
}

function HospitalProvider({ children }) {
  const [{ hospitals, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <HospitalContext.Provider value={{ hospitals, isLoading, dispatch }}>
      {children}
    </HospitalContext.Provider>
  );
}

function useHospital() {
  const context = useContext(HospitalContext);

  if (context === undefined) {
    throw new Error("Datacontext used outside the provider!");
  }
  return context;
}

export { HospitalProvider, useHospital };
