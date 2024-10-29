function downloadInvoice() {
  const invoiceElement = document.getElementById("invoice");
  const options = {
    margin: 1,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(options).from(invoiceElement).save();
}

// Function to convert numbers to words
function numberToWords(num) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100)
    return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "");
  if (num < 1000)
    return (
      ones[Math.floor(num / 100)] +
      " hundred" +
      (num % 100 ? " and " + numberToWords(num % 100) : "")
    );
  if (num < 100000)
    return (
      numberToWords(Math.floor(num / 1000)) +
      " thousand" +
      (num % 1000 ? " " + numberToWords(num % 1000) : "")
    );
  return (
    numberToWords(Math.floor(num / 100000)) +
    " lakh" +
    (num % 100000 ? " " + numberToWords(num % 100000) : "")
  );
}

// Handle form submission and update invoice preview
document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let totalAmount = 0;
  // Basic form fields
  const invoiceName = document.getElementById("invoiceName").value;
  const invoiceNo = document.getElementById("invoiceNo").value;
  const date = document.getElementById("date").value;
  //   const clientName = document.getElementById("clientName").value;
  //   const clientAddress = document.getElementById("clientAddress").value;
  //   const clientContact = document.getElementById("clientContact").value;
  //   const poNo = document.getElementById("poNo").value;
  const companyName = document.getElementById("companyName").value;
  const companyAddress = document.getElementById("companyAddress").value;
  const trainerName = document.getElementById("trainerName").value;
  const trainerContact = document.getElementById("trainerContact").value;

  // Payment details
  const bankName = document.getElementById("bankName").value;
  const accountHolderName = document.getElementById("accountHolderName").value;
  const accountNo = document.getElementById("accountNo").value;
  const ifscCode = document.getElementById("ifscCode").value;
  const panNumber = document.getElementById("panNumber").value;
  const bankAddress = document.getElementById("bankAddress").value;

  // Service details

  const serviceDetailsContainer = document.getElementById(
    "displayServiceDetails"
  );
  serviceDetailsContainer.innerHTML = "";
  document
    .querySelectorAll("#serviceDetailsContainer .service-details-entry")
    .forEach((entry) => {
      const description = entry.querySelector(
        "input[name='description']"
      ).value;
      const rateType = entry.querySelector("select[name='rateType']").value;
      const quantity =
        parseFloat(entry.querySelector("input[name='quantity']").value) || 0;
      const rate =
        parseFloat(entry.querySelector("input[name='rate']").value) || 0;
      const amount = quantity * rate;

      // Update service entry in the invoice display
      const serviceDetailHTML = `
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Rate Type:</strong> ${rateType}</p>
        <p><strong>Quantity:</strong> ${quantity} ${
        rateType === "hourly" ? "Hours" : "Days"
      }</p>
        <p><strong>Rate (INR):</strong> ${rate}</p>
        <p><strong>Amount:</strong> ${amount}</p>
      `;
      serviceDetailsContainer.insertAdjacentHTML(
        "beforeend",
        serviceDetailHTML
      );
      totalAmount += amount;
    });

  // Update main fields in the invoice preview
  document.getElementById("displayInvoiceName").textContent = invoiceName;
  document.getElementById("displayInvoiceNo").textContent = invoiceNo;
  document.getElementById("displayDate").textContent = date;
  //   document.getElementById("displayClientName").textContent = clientName;
  //   document.getElementById("displayClientAddress").textContent = clientAddress;
  //   document.getElementById("displayClientContact").textContent = clientContact;
  //   document.getElementById("displayPoNo").textContent = poNo;
  document.getElementById("displayCompanyName").textContent = companyName;
  document.getElementById("displayCompanyAddress").textContent = companyAddress;
  document.getElementById("displayTrainerName").textContent = trainerName;
  document.getElementById("displayTrainerContact").textContent = trainerContact;

  // Update bank details in the invoice preview
  document.getElementById("displayBankName").textContent = bankName;
  document.getElementById("displayAccountHolderName").textContent =
    accountHolderName;
  document.getElementById("displayAccountNo").textContent = accountNo;
  document.getElementById("displayIfscCode").textContent = ifscCode;
  document.getElementById("displayPanNumber").textContent = panNumber;
  document.getElementById("displayBankAddress").textContent = bankAddress;

  // Display total amount and amount in words
//   document.getElementById("displayAmount").textContent = totalAmount;
  document.getElementById("displayTotal").textContent = totalAmount;
  document.getElementById("displayAmountInWords").textContent =
    numberToWords(totalAmount) + " rupees only";

  // Hide form and show invoice preview
  document.getElementById("invoiceForm").style.display = "none";
  document.getElementById("invoice").style.display = "block";
});

// Function to toggle between form and invoice preview
function editInvoice() {
  document.getElementById("invoiceForm").style.display = "block";
  document.getElementById("invoice").style.display = "none";
}

// Function to add a new service entry dynamically
function addServiceDetail() {
  const serviceDetailsContainer = document.getElementById(
    "serviceDetailsContainer"
  );
  const newServiceEntry = document.createElement("div");
  newServiceEntry.classList.add("form-row", "service-details-entry");
  newServiceEntry.innerHTML = `
      <div class="form-group">
        <label for="description">Description:</label>
        <input type="text" name="description" required>
      </div>
      <div class="form-group">
        <label for="rateType">Rate Type:</label>
        <select name="rateType" required>
          <option value="hourly">Hourly Rate</option>
          <option value="daily">Daily Rate</option>
        </select>
      </div>
      <div class="form-group">
        <label for="quantity">Number of Hours/Days:</label>
        <input type="number" name="quantity" required>
      </div>
      <div class="form-group">
        <label for="rate">Rate (INR):</label>
        <input type="number" name="rate" required>
      </div>
    `;
  serviceDetailsContainer.appendChild(newServiceEntry);
}
