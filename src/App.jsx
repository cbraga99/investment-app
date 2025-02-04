import { useState } from 'react'
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { calculateInvestmentResults, formatter } from "./util/investment.js";

function App() {

    const [invValues, setInvValues]=useState(
        {
        initialInvestment:0,
        annualInvestment:0,
        expectedReturn:0,
        duration:0,
    }
    );
    // console.log(invValues)
    // console.log(calculateInvestmentResults(invValues))

    function handleInvValues(obj, val){
        if(obj == 'initialInvestment'){
            setInvValues({...invValues, initialInvestment:parseInt(val)});
        } else if(obj == 'annualInvestment'){
            setInvValues({...invValues, annualInvestment:parseInt(val)});
        } else if(obj == 'expectedReturn'){
            setInvValues({...invValues, expectedReturn:parseInt(val)});
        } else if(obj == 'duration'){
            setInvValues({...invValues, duration:parseInt(val)});
        }
    }


  return (
    <>
      <Header></Header>
      <UserInput values={invValues} handleValues={handleInvValues}></UserInput>
      <Result data={invValues}></Result>
    </>
  );
}

export default App;
