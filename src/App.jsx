import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import InvestmentDataTable from "./components/InvestmentDataTable/InvestmentDataTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [annualData, setAnnualData] = useState(calculateInvestmentResults({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  }));

  const annualDataChangeHandler = (newData) => {
    console.log(newData);
    setAnnualData(newData);
  }

  return (
    <div>
      <Header/>
      <UserInput onAnnualDataChange={annualDataChangeHandler}/>
      <InvestmentDataTable annualData={annualData}/>
    </div>
  )
}

export default App
