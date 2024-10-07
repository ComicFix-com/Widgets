

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
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Here’s a sample `README.md` file that developers can use to understand how to integrate the Map widget into their projects.

```markdown
# Map Widget Integration

## Overview

This Map Widget allows you to easily integrate a Google Map into your web projects. Customize the map's center, zoom level, and more with just a few lines of code.

## Getting Started

### Prerequisites

- A Google Maps API key. You can obtain one by following the [Google Maps Platform documentation](https://developers.google.com/maps/gmp-get-started).

### Installation

1. Download the `mapWidget.js` file and include it in your project directory.
2. Ensure you have an internet connection to load the Google Maps API.

### Usage

Follow the steps below to implement the Map Widget in your HTML file.

#### Step 1: Create a Map Container

Add a `<div>` element in your HTML where you want the map to be displayed:

```html
<div id="map"></div>
```

#### Step 2: Include the Google Maps API and Map Widget Script

In the `<head>` section of your HTML file, include the Google Maps API script and the `mapWidget.js` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map Widget Example</title>
    <style>
        /* Map container style */
        #map {
            height: 400px; /* Adjust the height as needed */
            width: 100%;   /* Full width */
        }
    </style>
</head>
<body>
```

#### Step 3: Initialize the Widget

After including the scripts, you can initialize the Map Widget in a `<script>` tag at the bottom of your `<body>` section:

```html
    <!-- Google Maps API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

    <!-- Include the Map Widget script -->
    <script src="path/to/mapWidget.js"></script>

    <!-- Initialize the map widget -->
    <script>
        MapWidget({
            selector: '#map', // The div where the map will render
            zoom: 12,         // Custom zoom level
            center: { lat: 40.7128, lng: -74.0060 } // Custom center (New York City)
        });
    </script>

</body>
</html>
```

### Customization Options

You can customize the Map Widget by passing in the following options:

- **selector**: The CSS selector for the map container (e.g., `#map`, `.map-container`).
- **zoom**: Zoom level for the map (e.g., `10`, `12`, etc.).
- **center**: The latitude and longitude coordinates to center the map (e.g., `{ lat: 40.7128, lng: -74.0060 }`).

### Example

Here's a complete example of how to integrate the Map Widget:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map Widget Example</title>
    <style>
        /* Map container style */
        #map {
            height: 400px; /* Adjust the height */
            width: 100%;   /* Full width */
        }
    </style>
</head>
<body>

    <h2>Map Widget Demo</h2>
    <!-- Map container -->
    <div id="map"></div>

    <!-- Google Maps API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

    <!-- Include the Map Widget script -->
    <script src="path/to/mapWidget.js"></script>

    <!-- Initialize the map widget -->
    <script>
        MapWidget({
            selector: '#map', // The div where the map will render
            zoom: 12,         // Custom zoom level
            center: { lat: 40.7128, lng: -74.0060 } // Custom center (New York City)
        });
    </script>

</body>
</html>
```

### License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
```

### How to Use the README
- Replace `YOUR_API_KEY` with your actual Google Maps API key.
- Replace `path/to/mapWidget.js` with the actual path where the `mapWidget.js` file is located.
- Developers can follow the instructions to integrate the map widget seamlessly into their projects.









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

