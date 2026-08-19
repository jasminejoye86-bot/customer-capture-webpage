// function submitForm() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const csType = document.getElementById("csType").value;
//     const amount = document.getElementById("amount").value;

//     if (!name || !email || !csType) {
//         alert("Please fill all fields!");
//         return;
//     }

//     if (csType === "new") {
//         const table = document.getElementById("newTable").querySelector("tbody");
//         const row = table.insertRow();
//         row.insertCell(0).innerText = name;
//         row.insertCell(1).innerText = email;
//         row.insertCell(2).innerHTML = `<button class="btn btn-primary" onclick="approveCustomer(this)">Approve</button>`;
//     } else {
//         const table = document.getElementById("existingTable").querySelector("tbody");
//         const row = table.insertRow();
//         row.insertCell(0).innerText = name;
//         row.insertCell(1).innerText = email;
//         row.insertCell(2).innerText = amount || "0";
//         row.insertCell(3).innerHTML = `<button class="btn btn-warning" onclick="deleteBtn()">Delete</button>`;
//     }

//     // Reset form after submit
//     document.forms["myF"].reset();
//     document.getElementById("amt").style.display = "none";
// }

// // Show/hide Amount field based on type
// function changCT() {
//     const csType = document.getElementById("csType").value;
//     document.getElementById("amt").style.display = csType === "existing" ? "table-row" : "none";
// }

// // Approve button logic: move from New → Existing
// function approveCustomer(btn) {
//     const row = btn.parentNode.parentNode;
//     const name = row.cells[0].innerText;
//     const email = row.cells[1].innerText;

//     // Add to Existing table
//     const exTable = document.getElementById("existingTable").querySelector("tbody");
//     const newRow = exTable.insertRow();
//     newRow.insertCell(0).innerText = name;
//     newRow.insertCell(1).innerText = email;
//     newRow.insertCell(2).innerText = "0";
//     newRow.insertCell(3).innerHTML = `<button class="btn btn-warning">edit</button>`;

//     // Remove from New table
//     row.remove();
// }
function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;
    let cstype = document.getElementById("csType").value;
    if (!name && !email && !amount) {

    }
    if (cstype == "new") {
        let table = document.getElementById("newTable").querySelector("tbody");
        row = table.insertRow()
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = email;
        row.insertCell(2).innerHTML = `<button class="btn btn-primary" onclick="ApproveRow(this)">Approve</button>`;
    }
    else {
        let table = document.getElementById("existingTable").querySelector("tbody");
        row = table.insertRow()
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = email;
        row.insertCell(2).innerText = amount || "0";
        row.insertCell(3).innerHTML = `<button class="btn btn-secondary" onclick="Deletebtn(this)">Delete</button>`;
        document.forms["myF"].reset();
        document.getElementById("amt").style.display = "none"
    }

}
function changCT() {
    let cstype = document.getElementById("csType").value;
    let amt = document.getElementById("amt")
    if (cstype == "existing") {
        amt.style.display = "table-row";
    } else {
        amt.style.display = "none";
    }
}
function ApproveRow(btn) {
    let row = btn.parentNode.parentNode;
    console.log(row)
    const name = row.cells[0].innerText;
    const email = row.cells[1].innerText;
    const extable = document.getElementById("existingTable").querySelector("tbody");
    const newRow = extable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = "0";
    newRow.insertCell(3).innerHTML = `<button class="btn btn-primary" onclick="Deletebtn(this)">Delete</button>`
    row.remove();
}
function Deletebtn(btn) {
    let row = btn.parentNode.parentNode;
    console.log(row)
    row.remove();
}