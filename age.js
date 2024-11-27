document.addEventListener("DOMContentLoaded", function () {
  // Automatically populate today's date in the input fields
  const today = new Date();
  document.getElementById("d2").value = today.getDate();
  document.getElementById("m2").value = today.getMonth() + 1; // Months are 0-based
  document.getElementById("y2").value = today.getFullYear();
});

function calculateAge() {
  // Get input values for the birth date
  const d1 = parseInt(document.getElementById("d1").value, 10);
  const m1 = parseInt(document.getElementById("m1").value, 10);
  const y1 = parseInt(document.getElementById("y1").value, 10);

  // Get today's date
  const today = new Date();
  const d2 = today.getDate();
  const m2 = today.getMonth() + 1; // Months are 0-based
  const y2 = today.getFullYear();

  // Validate input
  if (!isValidDate(d1, m1, y1)) {
    alert("Please enter a valid date of birth");
    return;
  }

  if (new Date(y1, m1 - 1, d1) > today) {
    alert("Date of birth cannot be in the future");
    return;
  }

  // Calculate age
  let ageYears = y2 - y1;
  let ageMonths = m2 - m1;
  let ageDays = d2 - d1;

  if (ageDays < 0) {
    ageMonths--;
    const daysInLastMonth = new Date(y2, m2 - 1, 0).getDate();
    ageDays += daysInLastMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Display result
  document.getElementById("result").innerHTML = `
    <img src="sticker_25.gif" alt="Celebration Sticker"> 
    You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.
  `;

  // Clear input fields
  clearInputs(["d1", "m1", "y1"]);

  // Trigger confetti effect
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
}

function isValidDate(day, month, year) {
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

  // Check if the date exists
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function clearInputs(inputIds) {
  inputIds.forEach((id) => (document.getElementById(id).value = ""));
}
