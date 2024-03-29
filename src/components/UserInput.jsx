import NumberInputField from "./NumberInputField"

export default function UserInput() {
    return (
        <div id="user-input">
            <span className="input-group">
                <NumberInputField title={"Box de la Box"} value={"55"}/>
                <NumberInputField title={"Another Input"} value={"This is a value"}/>
            </span>
            <span className="input-group"> 
                <NumberInputField title={"Box de la Box 2"} value={"5500"}/>
                <NumberInputField title={"Another Input the second"} value={"This is a second value"}/>
            </span>
        </div>
    )
};