import React, { createContext, useContext, useEffect, useState } from 'react'

const defaultContext = {
  loggedIn: false,
  setLoggedIn: () => false
}

export const AppContext = createContext(defaultContext)
export const useAppContext = () => {
  return useContext(AppContext);
}

const AppProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(()=> {
        const token = window.localStorage.getItem ("userToken")
        setLoggedIn(token)
    }, [])


  return (
    <AppContext.Provider
      value={{ loggedIn, setLoggedIn }}
    >
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider