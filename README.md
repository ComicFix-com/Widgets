# Widget Integration README

This repository provides modules for integrating WhatsApp, Instagram, and Twitter widgets into your website with ease. Follow the instructions below to set up each widget using the provided modules.

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

## Download the Files

You can download the required files for the widgets from the repository. Simply clone the repository or download the files directly:

- **Clone the Repository**:
  ```bash
  git clone https://github.com/muhammedadnanv/Widgets.git
