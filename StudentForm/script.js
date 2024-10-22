// Handling the form submission
const form = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
let editIndex = null;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    if (editIndex === null) {
        addStudent(firstName, lastName, email);
    } else {
        updateStudent(firstName, lastName, email);
    }

    form.reset();
    editIndex = null;
});

function addStudent(firstName, lastName, email) {
    const newRow = studentTable.insertRow();
    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;

    const actionsCell = newRow.insertCell(3);
    actionsCell.innerHTML = `
        <button class="btn-edit" onclick="editStudent(this)">Edit</button>
        <button class="btn-delete" onclick="deleteStudent(this)">Delete</button>
    `;
}

function editStudent(button) {
    const row = button.parentElement.parentElement;
    document.getElementById('firstName').value = row.cells[0].innerText;
    document.getElementById('lastName').value = row.cells[1].innerText;
    document.getElementById('email').value = row.cells[2].innerText;
    editIndex = row.rowIndex;
}

function updateStudent(firstName, lastName, email) {
    const row = studentTable.rows[editIndex - 1];
    row.cells[0].innerText = firstName;
    row.cells[1].innerText = lastName;
    row.cells[2].innerText = email;
}

function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    studentTable.deleteRow(row.rowIndex - 1);
}