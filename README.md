
# Widget Integration README

This repository provides modules for integrating WhatsApp, Instagram, and Twitter widgets into your website with ease. Below are the instructions for setting up each widget using the provided modules.

## WhatsApp Widget Integration

To integrate the WhatsApp widget into your website, follow these steps:

1. **Import the WhatsApp Widget Module**: Ensure you have the `WhatsAppWidget.js` file in your project.

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

3. **Customize**: Replace `'1234567890'` with your actual phone number to start using the widget on your site.

## Instagram Integration

To add an Instagram widget, follow these steps:

1. **Insert the Instagram Image**: Use the following markdown to include an image or your Instagram feed.

    ```markdown
    ![Instagram Widget](https://github.com/user-attachments/assets/82ebf51e-b9c2-406a-937e-523fe3143836)
    ```

2. **Customization**: Replace the link with your actual image or a link to your Instagram content.

## Twitter Widget Integration

To integrate the Twitter widget into your website, follow these steps:

1. **Import the Twitter Widget Module**: Ensure you have the `TwitterWidget.js` file in your project.

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

3. **Customize**: Replace `'yourTwitterHandle'` with your actual Twitter handle.

## Additional Notes

- Ensure that all necessary external libraries are loaded as part of your project setup.
- Customize the widgets with your own phone number, Instagram image, and Twitter handle.
- Style the widgets as per your website's design by editing the CSS within each module.
