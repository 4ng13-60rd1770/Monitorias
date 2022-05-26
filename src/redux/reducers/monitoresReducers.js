import { monitores } from "../types/types";

const initialState = {
  monitores: [],
  carreras: [
    "Administración Pública",
    "Arquitectura Moda y Diseño",
    "Arte y Bellas Artes",
    "Calidad",
    "Ciencias Biológicas, Ciencias Políticas, Ciencias Sociales y Humanidades",
    "Comunicación, Periodismo, Ciencias de la Información",
    "Contaduría, Derecho y Leyes",
    "Física y Química",
    "Historia y Geografía",
    "Idiomas",
    "Informática e Información",
    "Ingeniería y Tecnología",
    "Lengua y Literatura",
    "Matemática, Economía y Finanzas",
    "Matemática, Economía y Finanzas",
    "Medio Ambiente y Geología",
    "Nutrición y Alimentación",
    "Psicología",
    "Salud y Medicina"
  ],
};

export const monitoresReducers = (state = initialState, action) => {
  switch (action.type) {
    case monitores.register:
      return { ...state, monitores: [...state.monitores,action.payload] };
    case monitores.get:
      return { ...state, monitores: action.payload };
      case monitores.delete:
        return {monitores:state.monitores.filter(m=>m.email !== action.payload)}
    default:
      return state;
  }
};
