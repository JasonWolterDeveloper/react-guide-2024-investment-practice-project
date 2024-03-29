import NumberInputField from "./NumberInputField"
import { calculateInvestmentResults } from "../util/investment"
import { useState } from "react"

export default function UserInput({ onAnnualDataChange }) {
    const [initialInvestment, setInitialInvestment] = useState(10000);
    const [annualInvestment, setAnnualInvestment] = useState(1200);
    const [expectedReturn, setExpectedReturn] = useState(6)
    const [duration, setDuration] = useState(10);

    const initialInvestmentChangeHandler = (newValue) => {
        setInitialInvestment(newValue);
        calculateNewAnnualData();
    }

    const annualInvestmentChangeHandler = (newValue) => {
        setAnnualInvestment(newValue);
        calculateNewAnnualData();
    }

    const expectedReturnChangeHandler = (newValue) => {
        setExpectedReturn(newValue);
        calculateNewAnnualData();
    }

    const durationChangeHandler = (newValue) => {
        setDuration(newValue);
        calculateNewAnnualData();
    }

    const calculateNewAnnualData = () => {
        const investmentData = {
            initialInvestment: Number(initialInvestment),
            annualInvestment: Number(annualInvestment),
            expectedReturn: Number(expectedReturn),
            duration: Number(duration)
        }

        const newAnnualData = calculateInvestmentResults(investmentData)
        onAnnualDataChange(newAnnualData);
    }

    return (
        <div id="user-input">
            <span className="input-group">
                <NumberInputField title={"Initial Investment"} value={initialInvestment} onChange={initialInvestmentChangeHandler}/>
                <NumberInputField title={"Annual Investment"} value={annualInvestment} onChange={annualInvestmentChangeHandler}/>
            </span>
            <span className="input-group"> 
                <NumberInputField title={"Expected Return"} value={expectedReturn} onChange={expectedReturnChangeHandler}/>
                <NumberInputField title={"Duration"} value={duration} onChange={durationChangeHandler}/>
            </span>
        </div>
    )
};