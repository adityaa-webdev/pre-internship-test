import "./App.css";

import TableData from "./table_data";
import TableHead from "./table_head";
function App() {
  return (
    <div className="myTable">
      <table>
        <TableHead />
        <TableData />
      </table>
    </div>
  );
}

export default App;
