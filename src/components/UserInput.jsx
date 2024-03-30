import NumberInputField from "./NumberInputField"

export default function UserInput({ investmentData, onInvestmentDataChange }) {
    const initialInvestmentChangeHandler = (newValue) => {
        onInvestmentDataChange("initialInvestment", newValue);
    }
    const annualInvestmentChangeHandler = (newValue) => {
        onInvestmentDataChange("annualInvestment", newValue);
    }
    const expectedReturnChangeHandler = (newValue) => {
        onInvestmentDataChange("expectedReturn", newValue);
    }
    const durationChangeHandler = (newValue) => {
        onInvestmentDataChange("duration", newValue);
    }

    return (
        <div id="user-input">
            <span className="input-group">
                <NumberInputField title={"Initial Investment"} value={investmentData.initialInvestment} onChange={initialInvestmentChangeHandler}/>
                <NumberInputField title={"Annual Investment"} value={investmentData.annualInvestment} onChange={annualInvestmentChangeHandler}/>
            </span>
            <span className="input-group"> 
                <NumberInputField title={"Expected Return"} value={investmentData.expectedReturn} onChange={expectedReturnChangeHandler}/>
                <NumberInputField title={"Duration"} value={investmentData.duration} onChange={durationChangeHandler}/>
            </span>
        </div>
    )
};