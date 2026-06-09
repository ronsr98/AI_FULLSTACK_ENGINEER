// A custom error type for invalid contact data
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Throws a ValidationError if the email is invalid
function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email must contain @ symbol");
  }
}

module.exports = { ValidationError, validateEmail };
