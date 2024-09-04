// googleTranslatePopup.js

(function() {
  // Function to create and insert the HTML elements
  function createTranslatePopup() {
    // Create and style the trigger button
    const button = document.createElement('button');
    button.id = 'translatePopupButton';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.backgroundColor = '#FFD700'; // Golden color
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.style.color = 'white';
    button.style.fontSize = '24px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    button.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    button.style.transition = 'background-color 0.3s, transform 0.3s';
    button.textContent = '🌐';
    document.body.appendChild(button);

    // Create and style the popup
    const popup = document.createElement('div');
    popup.id = 'google_translate_element_popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.bottom = '80px';
    popup.style.right = '20px';
    popup.style.width = '200px';
    popup.style.height = 'auto';
    popup.style.background = '#ffffff'; // White background
    popup.style.padding = '10px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
    popup.style.overflow = 'hidden';
    popup.style.zIndex = '1000';
    popup.style.transition = 'opacity 0.3s, transform 0.3s';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.fontSize = '14px';
    popup.style.lineHeight = '1.5';
    document.body.appendChild(popup);

    const translateElement = document.createElement('div');
    translateElement.id = 'google_translate_element';
    translateElement.style.width = '100%';
    translateElement.style.height = '100%';
    translateElement.style.overflowY = 'auto';
    translateElement.style.backgroundColor = '#ffffff';
    translateElement.style.borderRadius = '8px';
    translateElement.style.padding = '10px';
    popup.appendChild(translateElement);
  }

  // Function to initialize Google Translate
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );
  }

  // Function to load the Google Translate script
  function loadGoogleTranslateScript(callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=' + callback;
    document.body.appendChild(script);
  }

  // Function to toggle the visibility of the popup
  function setupPopupToggle() {
    document.getElementById('translatePopupButton').onclick = function() {
      const popup = document.getElementById('google_translate_element_popup');
      if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
      } else {
        popup.style.opacity = '0';
        popup.style.transform = 'translateY(20px)';
        setTimeout(function() {
          popup.style.display = 'none';
        }, 300);
      }
    };
  }

  // Initialize the module
  function initTranslatePopup() {
    createTranslatePopup();
    loadGoogleTranslateScript('googleTranslateElementInit');
    setupPopupToggle();
  }

  // Expose the module to global scope
  window.initTranslatePopup = initTranslatePopup;
})();
