import { monitorias } from "../types/typesMonitorias";


const initialState = {
  monitorias: [],
};

export const monitoriasReducer = (state = initialState,action) => {
  switch (action.type) {
    case monitorias.add:
     
      return {...state, monitorias: [...state.monitorias,action.payload] };

    default:
      return state;
  }
};
