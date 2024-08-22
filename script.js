// Select People Data
const peopleSum = document.querySelector('#peopleSum');

// Increament By One
const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener("click", () => {
  count++;
  peopleSum.innerHTML = count;
});

// Decreament By One
const minusSum = document.getElementById('minusSum');
minusSum.addEventListener("click", () => {
  if (count > 1) {
    count--;
  }
  peopleSum.innerHTML = count;
});

// Calculate
const calculator = document.getElementById('calculator');
calculator.addEventListener("click", () => {
  // Display Summary Tab
  document.querySelector('.totalPerPerson').style.display = "block";

  // Calculate
  const totalBill = Number(document.getElementById('totalBill').value);
  const tipMain = Number(document.getElementById('tipMain').value);
  let total = totalBill * (tipMain / 100);
  let finalPeople = peopleSum.innerHTML;

  // Display Total Bill
  document.querySelector('#finalBill').innerHTML = totalBill;

  // Display Tip
  document.getElementById('tipAmount').innerHTML = tipMain;

  const taxAmount = document.getElementById('taxAmount').innerHTML = (totalBill + 5) / 100;

  // Final Calculation
  document.getElementById('totalPerPerson').innerHTML = (
    (totalBill + total + taxAmount) /
    finalPeople
  ).toFixed(2);
});