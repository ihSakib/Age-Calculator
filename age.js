document.addEventListener('DOMContentLoaded', function () {
  // Create a new Date object
  var today = new Date();

  // Get the current day, month, and year
  var day = today.getDate();
  var month = today.getMonth() + 1; // Note: months are zero-based, so we add 1
  var year = today.getFullYear();

  // Populate the input fields
  document.getElementById('d2').value = day;
  document.getElementById('m2').value = month;
  document.getElementById('y2').value = year;
});





function calculateAge() {
  var d1 = parseInt(document.getElementById('d1').value);
  var m1 = parseInt(document.getElementById('m1').value);
  var y1 = parseInt(document.getElementById('y1').value);

  var today = new Date(); // Get the current date
  var d2 = today.getDate();
  var m2 = today.getMonth() + 1;
  var y2 = today.getFullYear();

  // Validate the input
  if (isNaN(d1) || isNaN(m1) || isNaN(y1) || isNaN(d2) || isNaN(m2) || isNaN(y2)) {
    alert("Please enter valid dates");
    return;
  }

  // Calculate age
  var ageYears, ageMonths, ageDays;

  if (y1 > y2 || (y1 == y2 && (m1 > m2 || (m1 == m2 && d1 > d2)))) {
    alert("Invalid date of birth");
    return;
  }

  ageYears = y2 - y1;
  ageMonths = m2 - m1;
  ageDays = d2 - d1;

  if (ageDays < 0) {
    ageMonths--;
    var daysInLastMonth = new Date(y2, m2 - 1, 0).getDate();
    ageDays += daysInLastMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById('result').innerHTML = `<img src="sticker_25.gif">You are ${ageYears} years, ${ageMonths} months, ${ageDays} days old`;

  // Clear input fields
  document.getElementById('d1').value = '';
  document.getElementById('m1').value = '';
  document.getElementById('y1').value = '';

  // Execute confetti code
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
}
