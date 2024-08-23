How to Use the Module
Include the Module in your project:

Ensure your project supports ES6 modules. If you're using a tool like Webpack, ES6 modules will be supported by default.
Import the Functions from WhatsAppWidget.js:

javascript
Copy code
import { createWhatsAppWidget, injectStyles, loadExternalLibraries } from './WhatsAppWidget.js';

// Load necessary external libraries
loadExternalLibraries();

// Inject required styles for the widget
injectStyles();

// Create the WhatsApp widget with your phone number
createWhatsAppWidget('1234567890');
