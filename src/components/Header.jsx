import logoImg from "../assets/investment-calculator-logo.png"

export default function Header() {
    return <div id="header">
            <img src={logoImg} alt={"Bag of Gold Coins"} />           
            <h1>My Investment Calculator</h1>
        </div>
};