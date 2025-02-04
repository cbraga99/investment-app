
import Input from "../components/Input";

export default function UserInput({values, handleValues}) {

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input type="number" defaultValue={values.initialInvestment} onChange={(event)=>handleValues('initialInvestment', event.target.value)} />
          </div>
          <div>
            <label>Anual Investment</label>
            <input type="number" defaultValue={values.annualInvestment} onChange={(event)=>handleValues('annualInvestment', event.target.value)} />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input type="number" defaultValue={values.expectedReturn} onChange={(event)=>handleValues('expectedReturn', event.target.value)} />
          </div>
          <div>
            <label>Duration</label>
            <input type="number" defaultValue={values.duration} onChange={(event)=>handleValues('duration', event.target.value)} />
          </div>
        </div>
      </div>
      {/* <div className="input-group">
        <Input
          desc="Initial Investment"
          type="number"
          defaultValue={initialInvestment}
          handleChanges={handleInvestment}
        ></Input>
        <Input
          desc="Anual Investment"
          type="number"
          defaultValue={annualInvestment}
          handleChanges={handleInvestment}
        ></Input>
      </div>
      <div className="input-group">
        <Input
          desc="Expected Return"
          type="number"
          defaultValue={expectedReturn}
          handleChanges={handleInvestment}
        ></Input>
        <Input
          desc="Duration"
          type="number"
          defaultValue={duration}
          handleChanges={handleInvestment}
        ></Input>
      </div> */}
      {/* </div> */}
    </>
  );
}
