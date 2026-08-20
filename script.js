
function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;
    let cstype = document.getElementById("csType").value;
    if (!name || !email || !amount) {
        alert("please fill out form first")
        return;
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