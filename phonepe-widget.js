(function (global) {
  function PhonePeWidget(options) {
    if (!options || typeof options !== "object") {
      throw new Error("PhonePeWidget requires an options object");
    }

    // Set default options
    this.merchantVPA = options.merchantVPA || "";
    this.merchantName = options.merchantName || "Merchant";
    this.transactionId = options.transactionId || new Date().getTime().toString(); // Generate unique transaction ID
    this.orderId = options.orderId || "ORDER" + new Date().getTime();
    this.amount = options.amount || 0;
    this.currency = options.currency || "INR";
    this.callbackUrl = options.callbackUrl || "";

    // Validate required parameters
    if (!this.merchantVPA) {
      throw new Error("merchantVPA is required.");
    }
    if (this.amount <= 0) {
      throw new Error("amount must be greater than 0.");
    }
  }

  // Generate PhonePe deep link URL
  PhonePeWidget.prototype.getDeepLink = function () {
    const deepLink = `phonepe://pay?pa=${this.merchantVPA}` +
      `&pn=${encodeURIComponent(this.merchantName)}` +
      `&mc=0000&tid=${this.transactionId}` +
      `&tr=${this.orderId}` +
      `&am=${this.amount}` +
      `&cu=${this.currency}` +
      (this.callbackUrl ? `&url=${encodeURIComponent(this.callbackUrl)}` : "");

    return deepLink;
  };

  // Inject the Pay Button into the DOM
  PhonePeWidget.prototype.renderButton = function (buttonId) {
    const buttonElement = document.getElementById(buttonId);
    if (!buttonElement) {
      throw new Error("Button element not found");
    }

    // Create the button HTML
    buttonElement.innerHTML = `<button class="phonepe-button">Pay ₹${this.amount} with PhonePe</button>`;

    // Add click event to redirect to PhonePe deep link
    buttonElement.querySelector(".phonepe-button").addEventListener("click", () => {
      window.location.href = this.getDeepLink();
    });
  };

  // Expose the PhonePeWidget to the global scope (window object)
  global.PhonePeWidget = PhonePeWidget;
})(window);
