function isStrongPassword(password) {
  if (typeof password !== 'string') {
    console.log("❌ Password must be a string.");
    return;
  }

  if (password.length < 8) {
    console.log("❌ Too short. Must be at least 8 characters.");
    return;
  }

  if (!/[A-Z]/.test(password)) {
    console.log("❌ Missing uppercase letter.");
    return;
  }

  if (!/[a-z]/.test(password)) {
    console.log("❌ Missing lowercase letter.");
    return;
  }

  if (!/[0-9]/.test(password)) {
    console.log("❌ Missing number.");
    return;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    console.log("❌ Missing special character.");
    return;
  }

  console.log("✅ Strong password!");
}

// Example usage
let passwordInput = prompt("Enter your password:");
isStrongPassword(passwordInput);