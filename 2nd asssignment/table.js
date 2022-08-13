function GenerateTable() {
  var equipments = new Array();
  equipments.push([
    "Machine Name",
    "Machine ID",
    "Energy Consumed",
    "Active Power(MW)",
    "Apparent Power(MVA)",
    "Reactive Power(MVAr)",
    "CURRENT(Amps)",
    "VOLTAGE(Volts)",
    "POWER FACTOR",
    "IDLE TIME",
  ]);
    equipments.push(["Today", "MTD", "YTD", "Today", "MTD", "YTD"]);

  equipments.push([
    "Auto Winding Machine",
    "machine001",
    0,
    0,
    0,
    0.0,
    0.0,
    0.0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  equipments.push([
    "Boiler Machine",
    "machine004",
    0,
    0,
    0,
    0.0,
    0.0,
    0.0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  var table = document.createElement("TABLE");
  table.border = "1";

  var columnCount = equipments[0].length;

  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = equipments[0][i];
    row.appendChild(headerCell);
  }
  
  

  for (var i = 1; i < equipments.length; i++) {
    row = table.insertRow(-1);
    for (var j = 0; j < columnCount; j++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = equipments[i][j];
    }
  }

  var dvTable = document.getElementById("table");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
  let heading = document.getElementsByTagName("th");
  heading[0].setAttribute("rowspan", "2");
  heading[1].setAttribute("rowspan", "2");
  heading[3].setAttribute("rowspan", "2");
  heading[4].setAttribute("rowspan", "2");
  heading[5].setAttribute("rowspan", "2");
  heading[6].setAttribute("rowspan", "2");
  heading[7].setAttribute("rowspan", "2");
  heading[8].setAttribute("rowspan", "2");

  heading[2].setAttribute("colspan", "3");
  heading[9].setAttribute("colspan", "3");
}
