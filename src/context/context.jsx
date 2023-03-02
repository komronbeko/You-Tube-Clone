import React, { createContext, useState } from "react";

export const ContextApi = createContext({});

const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sideBar, setSideBar] = useState(false);
    const [systemsToggle, setSystemsToggle] = useState(false);

    const relatedToSidebar = {
      setSideBar,
      sideBar
    }
    const relatedToSystems = {
      setSystemsToggle,
      systemsToggle
    }

    const state = {
        setLoading,
        setError,
        loading,
        error
    }

  return (
    <ContextApi.Provider value={{state, relatedToSidebar, relatedToSystems}}>
        {children}
    </ContextApi.Provider>
  )
}

export default ContextProvider
