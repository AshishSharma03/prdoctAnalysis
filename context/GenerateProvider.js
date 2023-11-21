import React, { createContext, useContext, useEffect, useState } from 'react'

const GenerateContext = createContext()

function GenerateProvider({children}) {
    const [Generate,setGenerate] = useState(false)
    const [ResoposnseData,setResoposnseData] = useState(false)
    const [Data,setData] = useState(false)
  
  return (
    <GenerateContext.Provider value={{Generate,setGenerate,ResoposnseData,setResoposnseData,Data,setData}}>
        {children}
    </GenerateContext.Provider>
  )
}

export default GenerateProvider

export const useMyContext = () => {
    return useContext(GenerateContext);
  };