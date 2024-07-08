import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import data from "../data.json";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const initialState = {
    filterList: [],
    list: data,
  };

  function handleFilter(filters) {
    if (filters.length > 0) {
      const filtered = data.filter((item) =>
        filters.every(
          (tech) => item.languages.includes(tech) || item.tools.includes(tech),
        ),
      );
      return filtered;
    } else {
      return data;
    }
  }

  function reducer(state, action) {
    let updatedFilterList;
    switch (action.type) {
      case "ADD_FILTER":
        if (state.filterList.includes(action.payload)) return state;
        updatedFilterList = [...state.filterList, action.payload];
        return {
          ...state,
          filterList: updatedFilterList,
          list: handleFilter(updatedFilterList),
        };
      case "REMOVE_FILTER":
        updatedFilterList = state.filterList.filter(
          (item) => item !== action.payload,
        );
        return {
          ...state,
          filterList: updatedFilterList,
          list: handleFilter(updatedFilterList),
        };
      case "RESET_FILTER":
        return {
          ...state,
          filterList: [],
          list: data,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const addFilter = (payload) => {
    dispatch({ type: "ADD_FILTER", payload });
  };

  const removeFilter = (payload) => {
    dispatch({ type: "REMOVE_FILTER", payload });
  };

  const resetFilter = () => {
    dispatch({ type: "RESET_FILTER" });
  };

  return (
    <FilterContext.Provider
      value={{
        filterList: state.filterList,
        addFilter,
        removeFilter,
        resetFilter,
        list: state.list,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};

export { FilterProvider, useFilter };
