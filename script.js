document.getElementById('payrollForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);

    // Calculate total pay
    const totalPay = hours * rate;

    // Create a new row in the table
    const table = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells
    const nameCell = newRow.insertCell(0);
    const hoursCell = newRow.insertCell(1);
    const rateCell = newRow.insertCell(2);
    const totalPayCell = newRow.insertCell(3);

    // Append data to cells
    nameCell.textContent = name;
    hoursCell.textContent = hours.toFixed(2);
    rateCell.textContent = rate.toFixed(2);
    totalPayCell.textContent = totalPay.toFixed(2);

    // Clear form
    document.getElementById('payrollForm').reset();
});