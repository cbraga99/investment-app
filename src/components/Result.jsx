
import { calculateInvestmentResults, formatter } from "../util/investment.js";
import TableRow from "../components/TableRow.jsx";

export default function Result({data}){

    let rowData = calculateInvestmentResults(data);
    console.log(rowData)

    let ti = 0;
    const rows = rowData.map(item =>(
                    // ti = ti + item.interest;
                <TableRow key={item.year} totalInv={ti = ti + item.interest} inputData={data} val={item}></TableRow>
            )
            )
            // )
    //     }
    // }
    
    return(
        <>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Investment</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {rows}
                {/* {rowData.length > 0 && rowData.map(item =>(
                    <TableRow key={item.year} totalInv={data} val={item}></TableRow>
                    )
                )} */}
            </tbody>
        </table>
        </>
    )
}