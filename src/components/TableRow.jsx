import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function TableRow({val, inputData, totalInv}){

    let valueEndOfYear = formatter.format(val.valueEndOfYear)
    let interest = formatter.format(val.interest)
    let annualInvestment = formatter.format(totalInv)
    let investedCapital = formatter.format(val.annualInvestment*val.year +inputData.initialInvestment)

    return(
        <tr>
            <td>{val.year}</td>
            <td>{valueEndOfYear}</td>
            <td>{interest}</td>
            <td>{annualInvestment}</td>
            <td>{investedCapital}</td>
        </tr>
    )
}