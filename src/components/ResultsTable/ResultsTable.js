import TableBody from "./TableBody";
import TableHead from "./TableHead";
import classes from "./ResultsTable.module.css";

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <TableHead />
      <TableBody
        data={props.data}
        initialInvestment={props.initialInvestment}
      />
    </table>
  );
};

export default ResultsTable;
