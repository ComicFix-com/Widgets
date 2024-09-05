# Widget Integration README

This repository provides modules for integrating WhatsApp, Instagram, and Twitter widgets into your website with ease. Follow the instructions below to set up each widget using the provided modules.
--------------------------------------

## WhatsApp Widget Integration

To integrate the WhatsApp widget into your website, follow these steps:

1. **Import the WhatsApp Widget Module**:
   Ensure you have the `WhatsAppWidget.js` file in your project.

2. **Add the Following Script to Your HTML**:

    ```html
    <script type="module">
        import { createWhatsAppWidget, injectStyles, loadExternalLibraries } from './WhatsAppWidget.js';

        // Load necessary external libraries
        loadExternalLibraries();

        // Inject required styles for the widget
        injectStyles();

        // Create the WhatsApp widget with your phone number
        createWhatsAppWidget('1234567890'); // Replace with your phone number
    </script>
    ```

3. **Customize**:
   Replace `'1234567890'` with your actual phone number to start using the widget on your site.

## Instagram Widget Integration

To integrate the Instagram widget, follow these steps:

1. **Import the Instagram Widget Module**:
   Ensure you have the `instagramWidget.js` file in your project.

2. **Add the Following Script to Your HTML**:

    ```html
    <script type="module">
        import { createInstagramWidget } from './instagramWidget.js';

        // Call the function with custom options
        createInstagramWidget({
            url: 'https://www.instagram.com/yourprofile', // Set your Instagram profile URL
            size: '60px', // Size of the button
            position: { bottom: '30px', right: '30px' }, // Position of the button
            hoverScale: 1.2 // Hover effect scale
        });
    </script>
    ```

3. **Customize**:
   Replace the URL with your actual Instagram profile or content link.

## Twitter Widget Integration

To integrate the Twitter widget into your website, follow these steps:

1. **Import the Twitter Widget Module**:
   Ensure you have the `TwitterWidget.js` file in your project.

2. **Add the Following Script to Your HTML**:

    ```html
    <script type="module">
        import { createTwitterWidget, injectStyles, loadExternalLibraries } from './TwitterWidget.js';

        // Load necessary external libraries
        loadExternalLibraries();

        // Inject required styles for the widget
        injectStyles();

        // Create the Twitter widget with your Twitter handle
        createTwitterWidget('yourTwitterHandle'); // Replace with your Twitter handle
    </script>
    ```

3. **Customize**:
   Replace `'yourTwitterHandle'` with your actual Twitter handle.

## Additional Notes

- Ensure that all necessary external libraries are loaded as part of your project setup.
- Customize the widgets with your phone number, Instagram content, and Twitter handle.
- Style the widgets as per your website's design by editing the CSS within each module.

--------------------------------------------------------------------------------------

Here’s a streamlined `README.md` file focusing on integration details for the MetaMask fund checker widget:

```markdown
# MetaMask Fund Checker Widget

## Overview

The MetaMask Fund Checker Widget is a client-side JavaScript widget that allows users to connect their MetaMask wallet and check their Ethereum account balance. The widget is designed to be easily integrated into any website with minimal setup.

## Features

- **Connect MetaMask**: Requests access to the user's MetaMask wallet.
- **Display Ethereum Account**: Shows the connected Ethereum account address.
- **Show Balance**: Displays the account balance in ETH.

## Integration

### 1. Obtain the JavaScript File

- Host the provided JavaScript file (`widget.js`) on your web server or any static file hosting service.

### 2. Include the Widget in Your Website

To include the widget on your website, add the following script tag to the `<head>` or `<body>` section of your HTML:

```html
<script src="URL_TO_YOUR_WIDGET_JS_FILE"></script>
```

Replace `URL_TO_YOUR_WIDGET_JS_FILE` with the URL where `widget.js` is hosted.

### 3. Widget Placement

The widget is automatically injected into the bottom-right corner of the page. It will appear as a fixed element on the screen, so no additional HTML or CSS modifications are required.

## Requirements

- **MetaMask**: Users must have MetaMask installed in their browser.
- **Web3**: The widget dynamically loads the Web3 library required for Ethereum interactions.

## Notes

- Ensure that the URL to the JavaScript file is correct and accessible from your website.
- The widget uses the Web3 library to interact with the Ethereum blockchain and MetaMask.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

```

This `README.md` file provides essential information about the widget and how to integrate it into a website, focusing solely on the integration process and requirements.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

```markdown
# Google Translate Popup Module

This module provides a reusable Google Translate popup with a golden button for easy translation of web pages. The module includes all necessary HTML, CSS, and JavaScript to integrate the functionality into your project.

## Features

- **Golden Trigger Button:** A floating button styled in golden color that triggers the Google Translate popup.
- **Popup Window:** A white popup window that displays Google Translate widget.
- **Responsive Design:** The button and popup are designed to be responsive and adapt to different screen sizes.

## Getting Started

To use the Google Translate popup module in your project, follow these steps:

### 1. Include the JavaScript Module

Add the following script tag to your HTML file to include the module:

```html
<script src="path/to/googleTranslatePopup.js"></script>
```

Make sure to replace `"path/to/googleTranslatePopup.js"` with the actual path to the JavaScript file.

### 2. Initialize the Popup

Add the following script tag to initialize the Google Translate popup:

```html
<script>
  // Initialize the Google Translate popup
  initTranslatePopup();
</script>
```

### HTML Structure

The JavaScript module automatically creates the following elements in your HTML:

- **Trigger Button:** A floating button at the bottom right of the page with a golden color.
- **Popup Window:** A popup window that appears above the button when clicked, containing the Google Translate widget.

### How It Works

1. **Button Creation:** The module creates a button with the golden color and adds it to the bottom-right corner of the page.
2. **Popup Creation:** A popup window is created and styled to appear above the button.
3. **Google Translate Initialization:** The module dynamically loads the Google Translate script and initializes it.
4. **Toggle Visibility:** Clicking the button toggles the visibility of the popup with a smooth transition.

### Customization

You can customize the appearance of the button and popup by modifying the JavaScript module. Here’s how:

- **Button Color:** Change the `backgroundColor` property in the `createTranslatePopup` function.
- **Popup Styling:** Adjust the `background`, `padding`, `borderRadius`, and other CSS properties in the `createTranslatePopup` function.

### Example

Here’s an example of how to include and initialize the module:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Google Translate Popup Example</title>
</head>
<body>
  <!-- Your content here -->

  <!-- Include the Google Translate Popup JavaScript module -->
  <script src="path/to/googleTranslatePopup.js"></script>
  <script>
    // Initialize the Google Translate popup
    initTranslatePopup();
  </script>
</body>
</html>
```

### License

This module is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

### Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/your-repo/google-translate-popup).

```

### Explanation

- **Features:** Describes the key features of the module.
- **Getting Started:** Instructions for including and initializing the module.
- **HTML Structure:** Explains the elements created by the module.
- **How It Works:** Provides an overview of the module's functionality.
- **Customization:** Instructions for modifying the button and popup styles.
- **Example:** Provides a simple example of how to integrate the module.
- **License:** Information about the module's license.
- **Support:** Instructions for seeking help or reporting issues.



------------------------------------------------------------------------------------------------------------------------------------------------------------
Donation Widget JavaScript Module
This JavaScript module allows you to easily add a donation widget to your website that supports payments via Google Pay using UPI. The module provides a customizable donation button that can be styled and integrated with minimal effort.

Features
Easy integration with any website
Customizable UPI ID and donation amount
Automatically injects required CSS styles
Responsive design for different screen sizes
Installation
Download the Module

Download the donation-widget.js file and include it in your project's directory.

Include the Script in Your HTML

Add the following script tag to your HTML file, preferably before the closing </body> tag:

html
Copy code
<script src="path/to/donation-widget.js" defer></script>
Replace path/to/donation-widget.js with the actual path to the donation-widget.js file in your project.

Usage
Initialize the Donation Widget

After including the script, call the createDonationWidget function in your JavaScript code to initialize the widget. You need to provide the UPI ID, donation amount, and optional note.

Example:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Widget Example</title>
    <script src="path/to/donation-widget.js" defer></script>
</head>
<body>
    <!-- Your content here -->

    <script>
        // Initialize the donation widget with your UPI ID and amount
        window.addEventListener('load', function() {
            createDonationWidget('your-upi-id@upi', 500, 'Support Your Cause');
        });
    </script>
</body>
</html>
upiId: Your Google Pay UPI ID (e.g., your-upi-id@upi).
amount: The donation amount in INR.
note: An optional note for the transaction (e.g., 'Support Your Cause').
----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Download the Files

You can download the required files for the widgets from the repository. Simply clone the repository or download the files directly:

- **Clone the Repository**:
  ```bash
  git clone https://github.com/muhammedadnanv/Widgets.git
