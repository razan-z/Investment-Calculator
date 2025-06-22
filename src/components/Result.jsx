import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ investmentData }) {
  const {
    initialInvestment = 0,
    annualInvestment = 0,
    expectedReturn = 0,
    duration = 0,
  } = investmentData;

  // Input validation
  if (
    initialInvestment <= 0 ||
    annualInvestment < 0 ||
    expectedReturn < 0 ||
    duration <= 0
  ) {
    return (
      <div className="center">
        <h2>Investment Results</h2>
        <p>Please provide valid investment data.</p>
      </div>
    );
  }

  const investmentResults = calculateInvestmentResults(investmentData);

  return (
    <table id="result">
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
        {investmentResults.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>
              {formatter.format(
                yearData.valueEndOfYear -
                  (initialInvestment + annualInvestment * yearData.year)
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + annualInvestment * yearData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
