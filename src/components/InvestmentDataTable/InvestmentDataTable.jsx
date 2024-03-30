import InvestmentDataTableEntry from "./InvestmentDataTableEntry";

export default function InvestmentDataTable({ annualData }) {
    return <table id="result" className="center">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {annualData.map((yearData) => <InvestmentDataTableEntry key={yearData.year} yearData={yearData} />)}
        </tbody>

    </table>
}