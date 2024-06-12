import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { API_URL } from "../config";

const HospitalContext = createContext();

const initialState = {
  hospitals: [],
  isLoading: false,
  states: [],
  cities: [],
  selectedState: "",
  selectedCity: "",
  bookings: [
    {
      ProviderID: "020024",
      HospitalName: "CENTRAL PENINSULA GENERAL HOSPITAL",
      Address: "250 HOSPITAL PLACE",
      City: "SOLDOTNA",
      State: "Alaska",
      HospitalType: "Acute Care Hospitals",
      Hospitaloverallrating: 3,
    },
    {
      ProviderID: "020024",
      HospitalName: "CENTRAL PENINSULA GENERAL HOSPITAL",
      Address: "250 HOSPITAL PLACE",
      City: "SOLDOTNA",
      State: "Alaska",
      HospitalType: "Acute Care Hospitals",
      Hospitaloverallrating: 3,
    },
    {
      ProviderID: "020024",
      HospitalName: "CENTRAL PENINSULA GENERAL HOSPITAL",
      Address: "250 HOSPITAL PLACE",
      City: "SOLDOTNA",
      State: "Alaska",
      HospitalType: "Acute Care Hospitals",
      Hospitaloverallrating: 3,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "search/states":
      return { ...state, states: action.payload };
    case "select/state":
      return { ...state, selectedState: action.payload, selectedCity: "" };
    case "search/cities":
      return { ...state, cities: action.payload };
    case "select/city":
      return { ...state, selectedCity: action.payload };
    case "search/loading":
      return { ...state, isLoading: true };
    case "search/hospitals":
      return {
        ...state,
        hospitals: action.payload,
        isLoading: false,
      };
    default:
      throw new Error("action type is unknown!");
  }
}

function HospitalProvider({ children }) {
  const [
    {
      hospitals,
      isLoading,
      states,
      cities,
      selectedCity,
      selectedState,
      bookings,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const fetchStates = async () => {
    try {
      const response = await axios.get(`${API_URL}/states`);
      dispatch({ type: "search/states", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <HospitalContext.Provider
      value={{
        hospitals,
        isLoading,
        states,
        cities,
        selectedCity,
        selectedState,
        bookings,
        dispatch,
      }}
    >
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
