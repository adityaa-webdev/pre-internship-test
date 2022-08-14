import './table_head.css'
export default function TableHead() {
  return (
    <><thead>
      <tr>
        <th rowSpan="2">MACHINE NAME</th>
        <th rowSpan="2">MACHINE ID</th>
        <th colSpan="3">ENERGY CONSUMED</th>
        <th rowSpan="2">ACTIVE POWER(MW)</th>
        <th rowSpan="2">APPARENT POWER(MVA)</th>
        <th rowSpan="2">REACTIVE POWER(MVAr)</th>
        <th rowSpan="2">CURRENT(Amps)</th>
        <th rowSpan="2">VOLTAGE(Volts)</th>
        <th rowSpan="2">POWER FACTOR</th>
        <th colSpan="3">IDLE TIME</th>
      </tr>
      <tr>
        <td>Today</td>
        <td>MTD</td>
        <td>YTD</td>

        <td>Today</td>
        <td>MTD</td>
        <td>YTD</td>
      </tr>
      </thead>
    </>
  );
}
