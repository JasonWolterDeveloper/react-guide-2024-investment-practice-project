import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import InvestmentDataTable from "./components/InvestmentDataTable/InvestmentDataTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const InvestmentDataChangeHandler = ( dataPoint, newValue ) => {
    setInvestmentData((oldInvestmentData) =>{
      let newInvestmentData = {...oldInvestmentData};
      newInvestmentData[dataPoint] = newValue;
      return newInvestmentData
    })

  }

  const numberConvertedInvesetmentData = {
    initialInvestment: Number(investmentData.initialInvestment),
    annualInvestment: Number(investmentData.annualInvestment),
    expectedReturn: Number(investmentData.expectedReturn),
    duration: Number(investmentData.duration)
  }

  const annualData = calculateInvestmentResults(numberConvertedInvesetmentData)

  return (
    <div>
      <Header/>
      <UserInput investmentData={investmentData} onInvestmentDataChange={InvestmentDataChangeHandler}/>
      <InvestmentDataTable annualData={annualData}/>
    </div>
  )
}

export default App
