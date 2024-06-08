import { createContext, useContext, useReducer } from "react";

const HospitalContext = createContext();

const initialState = {
  hospitals: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "search/hospitals":
      console.log(action.payload);
      return { ...state, hospitals: action.payload };
    default:
      throw new Error("action type is unknown!");
  }
}

function HospitalProvider({ children }) {
  const [{ hospitals }, dispatch] = useReducer(reducer, initialState);

  return (
    <HospitalContext.Provider value={{ hospitals, dispatch }}>
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
