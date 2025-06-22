import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import { useState } from "react";

const INVESTMENT_DATA = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investmentData, setInvestmentData] = useState(INVESTMENT_DATA);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInvestmentData((prevData) => ({
      ...prevData,
      [name]: +value,
    }));
  }

  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <div className="input-group">
            <Input
              label="Initial Investment"
              name="initialInvestment"
              value={investmentData.initialInvestment}
              onInputChange={handleInputChange}
            />

            <Input
              label="Annual Investment"
              name="annualInvestment"
              value={investmentData.annualInvestment}
              onInputChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <Input
              label="Expected Return"
              name="expectedReturn"
              value={investmentData.expectedReturn}
              onInputChange={handleInputChange}
            />

            <Input
              label="Duration (Years)"
              name="duration"
              value={investmentData.duration}
              onInputChange={handleInputChange}
            />
          </div>
        </section>
        <Result investmentData={investmentData} />
      </main>
    </>
  );
}

export default App;
