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

document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const invoiceNo = document.getElementById("invoiceNo").value;
  const date = document.getElementById("date").value;
  const clientName = document.getElementById("clientName").value;
  const clientAddress = document.getElementById("clientAddress").value;
  const clientContact = document.getElementById("clientContact").value;
  const poNo = document.getElementById("poNo").value;
  const companyName = document.getElementById("companyName").value;
  const companyAddress = document.getElementById("companyAddress").value;
  const trainerName = document.getElementById("trainerName").value;
  const description = document.getElementById("description").value;
  const rateType = document.getElementById("rateType").value;
  const quantity = document.getElementById("quantity").value;
  const rate = document.getElementById("rate").value;
  const bankName = document.getElementById("bankName").value;
  const accountNo = document.getElementById("accountNo").value;
  const ifscCode = document.getElementById("ifscCode").value;

  // Calculate amount
  const amount = quantity * rate;

  // Update invoice display
  document.getElementById("displayInvoiceNo").textContent = invoiceNo;
  document.getElementById("displayDate").textContent = date;
  document.getElementById("displayClientName").textContent = clientName;
  document.getElementById("displayClientAddress").textContent = clientAddress;
  document.getElementById("displayClientContact").textContent = clientContact;
  document.getElementById("displayPoNo").textContent = poNo;
  document.getElementById("displayCompanyName").textContent = companyName;
  document.getElementById("displayCompanyAddress").textContent = companyAddress;
  document.getElementById("displayTrainerName").textContent = trainerName;
  document.getElementById("displayTrainerName2").textContent = trainerName;
  document.getElementById("displayDescription").textContent = description;
  document.getElementById("displayQuantity").textContent = `${quantity} ${
    rateType === "hourly" ? "Hours" : "Days"
  }`;
  document.getElementById("displayRate").textContent = rate;
  document.getElementById("displayAmount").textContent = amount;
  document.getElementById("displayTotal").textContent = amount;
  document.getElementById("displayAmountInWords").textContent =
    numberToWords(amount) + " rupees only";
  document.getElementById("displayBankName").textContent = bankName;
  document.getElementById("displayAccountNo").textContent = accountNo;
  document.getElementById("displayIfscCode").textContent = ifscCode;

  // Hide form and show invoice
  document.getElementById("invoiceForm").style.display = "none";
  document.getElementById("invoice").style.display = "block";
});

function editInvoice() {
  document.getElementById("invoiceForm").style.display = "block";
  document.getElementById("invoice").style.display = "none";
}

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

// Event Listener for Form Submission
document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Extract and display data, including new fields
  // ... (populate invoice fields as needed)

  // Hide form and show invoice
  document.getElementById("invoiceForm").style.display = "none";
  document.getElementById("invoice").style.display = "block";
});

function editInvoice() {
  document.getElementById("invoiceForm").style.display = "block";
  document.getElementById("invoice").style.display = "none";
}

function addServiceDetail() {
  const serviceDetailsContainer = document.getElementById(
    "serviceDetailsContainer"
  );
  const newServiceEntry = document.createElement("div");
  newServiceEntry.classList.add("form-row", "service-details-entry");
  newServiceEntry.innerHTML = `
          <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" name="description" required />
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
            <input type="number" name="quantity" required />
          </div>
          <div class="form-group">
            <label for="rate">Rate (INR):</label>
            <input type="number" name="rate" required />
          </div>
        `;
  serviceDetailsContainer.appendChild(newServiceEntry);
}

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

document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("displayInvoiceName").textContent =
    document.getElementById("invoiceName").value;
  document.getElementById("displayInvoiceNo").textContent =
    document.getElementById("invoiceNo").value;
  document.getElementById("displayDate").textContent =
    document.getElementById("date").value;

  document.getElementById("displayCompanyName").textContent =
    document.getElementById("companyName").value;
  document.getElementById("displayCompanyAddress").textContent =
    document.getElementById("companyAddress").value;
  document.getElementById("displayTrainerName").textContent =
    document.getElementById("trainerName").value;
  document.getElementById("displayTrainerContact").textContent =
    document.getElementById("trainerContact").value;

  const serviceDetailsContainer = document.getElementById(
    "displayServiceDetails"
  );
  serviceDetailsContainer.innerHTML = "";
  document
    .querySelectorAll("#serviceDetailsContainer .service-details-entry")
    .forEach(function (entry) {
      const description = entry.querySelector(
        "input[name='description']"
      ).value;
      const rateType = entry.querySelector("select[name='rateType']").value;
      const quantity = entry.querySelector("input[name='quantity']").value;
      const rate = entry.querySelector("input[name='rate']").value;

      const serviceDetailHTML = `
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Rate Type:</strong> ${rateType}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Rate (INR):</strong> ${rate}</p>
          `;
      serviceDetailsContainer.insertAdjacentHTML(
        "beforeend",
        serviceDetailHTML
      );
    });

  document.getElementById("displayBankName").textContent =
    document.getElementById("bankName").value;
  document.getElementById("displayAccountHolderName").textContent =
    document.getElementById("accountHolderName").value;
  document.getElementById("displayAccountNo").textContent =
    document.getElementById("accountNo").value;
  document.getElementById("displayIfscCode").textContent =
    document.getElementById("ifscCode").value;
  document.getElementById("displayPanNumber").textContent =
    document.getElementById("panNumber").value;
  document.getElementById("displayBankAddress").textContent =
    document.getElementById("bankAddress").value;

  document.getElementById("invoiceForm").style.display = "none";
  document.getElementById("invoice").style.display = "block";
});

function editInvoice() {
  document.getElementById("invoiceForm").style.display = "block";
  document.getElementById("invoice").style.display = "none";
}
