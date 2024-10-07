

```markdown
# Widget Integration Guide

This repository provides modules for integrating WhatsApp, Instagram, Twitter, Google Translate, and Donation widgets into your website with ease. Follow the instructions below for each widget.

## WhatsApp Widget Integration

### 1. Import the Module

Ensure you have the `WhatsAppWidget.js` file in your project.

### 2. Add the Script

Include the following script in your HTML:

```html
<script type="module">
    import { createWhatsAppWidget, injectStyles, loadExternalLibraries } from './WhatsAppWidget.js';

    // Load external libraries
    loadExternalLibraries();

    // Inject styles
    injectStyles();

    // Initialize the WhatsApp widget
    createWhatsAppWidget('1234567890'); // Replace with your phone number
</script>
```

### 3. Customize

Replace `'1234567890'` with your actual phone number.

## Instagram Widget Integration

### 1. Import the Module

Ensure you have the `instagramWidget.js` file in your project.

### 2. Add the Script

Include the following script in your HTML:

```html
<script type="module">
    import { createInstagramWidget } from './instagramWidget.js';

    // Initialize Instagram widget
    createInstagramWidget({
        url: 'https://www.instagram.com/yourprofile', // Replace with your Instagram profile URL
        size: '60px', // Button size
        position: { bottom: '30px', right: '30px' }, // Button position
        hoverScale: 1.2 // Hover effect scale
    });
</script>
```

### 3. Customize

Replace the URL with your actual Instagram profile or content link.

## Twitter Widget Integration

### 1. Import the Module

Ensure you have the `TwitterWidget.js` file in your project.

### 2. Add the Script

Include the following script in your HTML:

```html
<script type="module">
    import { createTwitterWidget, injectStyles, loadExternalLibraries } from './TwitterWidget.js';

    // Load external libraries
    loadExternalLibraries();

    // Inject styles
    injectStyles();

    // Initialize the Twitter widget
    createTwitterWidget('yourTwitterHandle'); // Replace with your Twitter handle
</script>
```

### 3. Customize

Replace `'yourTwitterHandle'` with your actual Twitter handle.

## Google Translate Popup Module

### 1. Include the JavaScript Module

Add the following script to your HTML:

```html
<script src="path/to/googleTranslatePopup.js"></script>
```

### 2. Initialize the Popup

Add the following script to initialize the Google Translate popup:

```html
<script>
  // Initialize the Google Translate popup
  initTranslatePopup();
</script>
```

### Customization

You can customize the appearance of the button and popup by modifying the JavaScript module.

## Donation Widget

### 1. Download and Include the Script

Download the `donation-widget.js` file and include it in your HTML:

```html
<script src="path/to/donation-widget.js" defer></script>
```

### 2. Initialize the Widget

Add the following script to initialize the donation widget:

```html
<script>
    // Initialize the donation widget
    window.addEventListener('load', function() {
        createDonationWidget('your-upi-id@upi', 500, 'Support Your Cause');
    });
</script>
```

### Customization

- **upiId**: Your Google Pay UPI ID (e.g., `your-upi-id@upi`).
- **amount**: The donation amount in INR.
- **note**: An optional note for the transaction.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Here's the `README.md` file that explains how to use your PhonePe payment widget in JavaScript:

```markdown
# PhonePe Payment Widget

A reusable **client-side PhonePe payment widget** built using pure JavaScript. This widget allows developers to integrate PhonePe payments into their websites easily, without the need for API calls or backend services. It generates a deep link to redirect users to the PhonePe app for payment processing.

## Features

- Simple integration with just HTML and JavaScript.
- Customizable with options for the merchant's VPA, name, transaction amount, and more.
- Automatically generates unique transaction IDs if none are provided.
- Provides an easy-to-use "Pay with PhonePe" button.
- Lightweight and no backend needed.

## How to Use

### 1. Include the Widget JavaScript

Download or copy the `phonepe-widget.js` script and include it in your project.

```html
<script src="path/to/phonepe-widget.js"></script>
```

### 2. Create a Container for the Payment Button

In your HTML file, add a container where the PhonePe payment button will be rendered.

```html
<div id="phonepePayButton"></div>
```

### 3. Initialize the Widget

In your JavaScript, initialize the widget by creating a new `PhonePeWidget` instance with the required options. Then, render the button inside the specified container.

```javascript
const phonePeWidget = new PhonePeWidget({
  merchantVPA: "merchant_vpa@bank",       // Your merchant VPA
  merchantName: "Your Merchant Name",      // Name of the merchant
  transactionId: "TX123456789",            // (Optional) Unique transaction ID
  orderId: "ORDER123456",                  // (Optional) Unique order ID
  amount: 500,                             // Transaction amount in INR
  currency: "INR",                         // Currency code (default: INR)
  callbackUrl: "https://yourwebsite.com/callback" // Callback URL (optional)
});

// Render the Pay with PhonePe button in the container
phonePeWidget.renderButton("phonepePayButton");
```

### 4. Customize the Button (Optional)

You can style the button using CSS. The widget creates a button with the class `phonepe-button`, which you can customize as needed.

```css
.phonepe-button {
  background-color: #7a4de6;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  border: none;
}

.phonepe-button:hover {
  background-color: #6b40d1;
}
```

## Example

Here’s a full example of how to integrate the PhonePe payment widget:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PhonePe Payment Widget Example</title>
  <style>
    .phonepe-button {
      background-color: #7a4de6;
      color: white;
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      border: none;
    }
    .phonepe-button:hover {
      background-color: #6b40d1;
    }
  </style>
</head>
<body>
  <h2>Pay with PhonePe</h2>

  <!-- Payment Button Container -->
  <div id="phonepePayButton"></div>

  <!-- Include PhonePe Widget JavaScript -->
  <script src="phonepe-widget.js"></script>

  <!-- Initialize the Widget -->
  <script>
    // Configure the widget with necessary options
    const phonePeWidget = new PhonePeWidget({
      merchantVPA: "merchant_vpa@bank",
      merchantName: "Your Merchant Name",
      transactionId: "TX123456789",
      orderId: "ORDER123456",
      amount: 500,  // Amount in INR
      currency: "INR",
      callbackUrl: "https://yourwebsite.com/callback"
    });

    // Render the Pay Button in the specified element
    phonePeWidget.renderButton("phonepePayButton");
  </script>
</body>
</html>
```

## Options

- `merchantVPA`: (Required) The merchant's Virtual Payment Address (VPA).
- `merchantName`: (Required) The name of the merchant displayed on the PhonePe app.
- `transactionId`: (Optional) A unique transaction ID. If not provided, it is automatically generated.
- `orderId`: (Optional) A unique order ID. If not provided, it is automatically generated.
- `amount`: (Required) The transaction amount in INR. Must be greater than 0.
- `currency`: (Optional) The currency code. Default is `INR`.
- `callbackUrl`: (Optional) A callback URL that PhonePe will redirect to after payment.

## License

This PhonePe payment widget is free to use for anyone.

---

Feel free to customize the widget as per your needs and integrate it into your web projects!
```

### How to Use This `README.md`:

- Place this `README.md` file in the root directory of your project repository.
- This documentation explains the widget functionality, provides a basic example, and offers easy-to-understand instructions for developers looking to integrate the widget.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Download the Files

Clone the repository or download the files directly:

- **Clone the Repository**:
  ```bash
  git clone https://github.com/muhammedadnanv/Widgets.git
  ```

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/muhammedadnanv/Widgets).

```
adnanmuhammad4393@gmail.com
''''''''''''

