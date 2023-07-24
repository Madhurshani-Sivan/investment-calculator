import TableBody from "./TableBody";
import TableHead from "./TableHead";

const ResultsTable = (props) => {
  return (
    <table className="result">
      <TableHead />
      <TableBody
        data={props.data}
        initialInvestment={props.initialInvestment}
      />
    </table>
  );
};

export default ResultsTable;
