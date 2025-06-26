var table = document.createElement("table");
document.body.appendChild(table);

var headTable = document.createElement("thead");
table.appendChild(headTable);


var bodyTable = document.createElement("tbody");
table.appendChild(bodyTable);

var headtr = document.createElement("tr");
headTable.appendChild(headtr);

var headth = document.createElement("th")
headtr.appendChild(headth);
headth.innerHTML = "employeedetails";
headth.colSpan = "2";

var allHeading = ["Name:", "Age:", "des:", "sal:"];
var allData = ["sathyanarayana", "46", "society director", "450303"];
for (let i = 0; i < 4; i++) {
    var alltr = document.createElement("tr");
    bodyTable.appendChild(alltr);

    var allth = document.createElement("th")
    alltr.appendChild(allth);
    allth.innerHTML = allHeading[i];

    var alltd = document.createElement("td")
    alltr.appendChild(alltd);
    alltd.innerHTML = allData[i];
}


