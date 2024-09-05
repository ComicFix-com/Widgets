

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

## Download the Files

Clone the repository or download the files directly:

- **Clone the Repository**:
  ```bash
  git clone https://github.com/muhammedadnanv/Widgets.git
  ```

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/muhammedadnanv/Widgets).

```

