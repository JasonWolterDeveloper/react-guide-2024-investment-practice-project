import { formatter } from "../../util/investment"

export default function InvestmentDataTableEntry({ yearData }) {
    return <tr>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(yearData.totalInterest)}</td>
        <td>{formatter.format(yearData.investedCapital)}</td>
    </tr>
}