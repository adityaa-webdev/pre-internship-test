import table from "./table";
import "./table_data.css";
export default function TableData() {
  return (
    <>
      {table.map((data) => {
        return (
          <tbody>
            <tr style={{color:'white',backgroundColor:'rgba(255,255,255,0.2)',border:'1px solid transparent',borderBottom:'1px solid grey'}}>
              <td>{data.machine_name}</td>
              <td>{data.machine_id}</td>
              <td>{data.current}</td>
              <td>{data.voltage}</td>
              <td>{data.power_factor}</td>
              <td>{data.active_power}</td>
              <td>{data.apparent_power}</td>
              <td>{data.reactive_power}</td>
              <td>{data.daily_energy}</td>
              <td>{data.monthly_energy}</td>
              <td>{data.yearly_energy}</td>
              <td>{data.idle_daily}</td>
              <td>{data.idle_monthly}</td>
              <td>{data.idle_yearly}</td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
