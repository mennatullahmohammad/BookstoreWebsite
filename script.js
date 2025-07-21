function validatePurchaseForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  if (!name || !email || !address) {
    alert("Please fill in all fields.");
    return false;
  }

  alert(`Thank you ${name}! Your order for Blood Over Bright Haven has been placed.`);
  return true;
}

function validatesigninform(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all the fields.")
        return false;
    }

    alert(`Welcome back, ${username}!`)
}