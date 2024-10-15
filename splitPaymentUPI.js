// paymentSplitter.js
class PaymentSplitter {
    constructor(totalAmount, upiIds = []) {
        this.totalAmount = totalAmount;
        this.upiIds = upiIds;
        this.paymentLinks = [];
    }

    // Method to add UPI IDs
    addUpiId(upiId) {
        this.upiIds.push(upiId);
    }

    // Method to remove UPI ID
    removeUpiId(upiId) {
        this.upiIds = this.upiIds.filter(id => id !== upiId);
    }

    // Method to split the total amount equally among UPI IDs
    splitEqually() {
        if (this.upiIds.length === 0) {
            throw new Error("No UPI IDs available to split the payment.");
        }

        const splitAmount = (this.totalAmount / this.upiIds.length).toFixed(2);
        this.paymentLinks = this.upiIds.map(upiId => this.generateUpiLink(upiId, splitAmount));
        return this.paymentLinks;
    }

    // Method to split the total amount by custom ratios (e.g., 50%, 30%, 20%)
    splitByRatios(ratios = []) {
        if (this.upiIds.length !== ratios.length) {
            throw new Error("UPI IDs and ratio count mismatch.");
        }

        const totalRatio = ratios.reduce((acc, val) => acc + val, 0);
        this.paymentLinks = this.upiIds.map((upiId, index) => {
            const share = (this.totalAmount * ratios[index] / totalRatio).toFixed(2);
            return this.generateUpiLink(upiId, share);
        });
        return this.paymentLinks;
    }

    // Helper method to generate UPI payment links
    generateUpiLink(upiId, amount) {
        return `upi://pay?pa=${upiId}&am=${amount}&cu=INR`;
    }

    // Method to display payment links for all participants
    displayPaymentLinks() {
        if (this.paymentLinks.length === 0) {
            throw new Error("No payment links available. Please split the payment first.");
        }

        this.paymentLinks.forEach((link, index) => {
            console.log(`UPI ID: ${this.upiIds[index]}, Link: ${link}`);
        });
    }
}

// Export the module for use in other files
module.exports = PaymentSplitter;
