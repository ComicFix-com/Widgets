// Module for splitting payments with UPI, equally among users
class SplitPaymentUPI {
  constructor(totalAmount) {
    this.totalAmount = totalAmount;
    this.users = [];
  }

  // Add user with their UPI ID
  addUser(name, upiId) {
    this.users.push({ name, upiId });
  }

  // Calculate equal payments for each user
  calculateEqualPayments() {
    const numOfUsers = this.users.length;
    const amountPerUser = (this.totalAmount / numOfUsers).toFixed(2); // equally split and format to 2 decimal places

    return this.users.map(user => {
      return {
        name: user.name,
        upiId: user.upiId,
        amount: amountPerUser,
        upiLink: this.generateUPILink(user.upiId, amountPerUser)
      };
    });
  }

  // Generate UPI payment link
  generateUPILink(upiId, amount) {
    const encodedUPIId = encodeURIComponent(upiId);
    const encodedAmount = encodeURIComponent(amount);
    const encodedMerchant = encodeURIComponent('Split Payment');
    
    // Return UPI deep link
    return `upi://pay?pa=${encodedUPIId}&pn=${encodedMerchant}&am=${encodedAmount}&cu=INR`;
  }

  // Function to initiate the splitting process
  splitEqually() {
    if (this.users.length === 0) {
      throw new Error("No users added to split the payment.");
    }

    const payments = this.calculateEqualPayments();
    console.log("Payment details:", payments);
    return payments;
  }
}

// Example usage:

// Initialize the module with the total amount to be split
const totalAmount = 100; // Example: INR 100
const splitPayment = new SplitPaymentUPI(totalAmount);

// Add users (name, UPI ID)
splitPayment.addUser("User1", "user1@upi");
splitPayment.addUser("User2", "user2@upi");
splitPayment.addUser("User3", "user3@upi");
splitPayment.addUser("User4", "user4@upi");
splitPayment.addUser("User5", "user5@upi");
splitPayment.addUser("User6", "user6@upi");
splitPayment.addUser("User7", "user7@upi");
splitPayment.addUser("User8", "user8@upi");
splitPayment.addUser("User9", "user9@upi");
splitPayment.addUser("User10", "user10@upi");

// Get the equal split payments and UPI links
const paymentDetails = splitPayment.splitEqually();

// Output the result
paymentDetails.forEach(payment => {
  console.log(`Pay ${payment.name} (${payment.upiId}) ₹${payment.amount}: ${payment.upiLink}`);
});
