(function() {
  
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Widget Container */
            .donate-widget-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }

           
            .donate-widget {
                background-color: #4285F4; /* Google Pay blue */
                color: white;
                padding: 15px 25px;
                text-decoration: none;
                border-radius: 30px;
                font-size: 16px;
                font-weight: bold;
                font-family: 'Arial', sans-serif;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                transition: background-color 0.3s ease, transform 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .donate-widget:hover {
                background-color: #357AE8;
                transform: translateY(-3px); /* Adds slight lift on hover */
            }

            .gpay-icon {
                width: 30px;
                height: auto;
                margin-right: 10px;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .donate-widget {
                    padding: 12px 20px;
                    font-size: 14px;
                }

                .gpay-icon {
                    width: 25px;
                }
            }

            @media (max-width: 480px) {
                .donate-widget {
                    padding: 10px 15px;
                    font-size: 13px;
                    border-radius: 20px;
                }

                .gpay-icon {
                    width: 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    
    function createDonationWidget(upiId, amount, note) {
        // Validate inputs
        if (!upiId || !amount || isNaN(amount) || amount <= 0) {
            console.error('Invalid UPI ID or amount.');
            return;
        }

        
        injectStyles();

      
        const container = document.createElement('div');
        container.className = 'donate-widget-container';

       
        const button = document.createElement('a');
        button.href = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=Donation&am=${encodeURIComponent(amount)}&cu=INR&tn=${encodeURIComponent(note)}`;
        button.className = 'donate-widget';
        button.id = 'donateButton';

        // Add Google Pay icon
        const icon = document.createElement('img');
        icon.src = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png';
        icon.alt = 'Google Pay';
        icon.className = 'gpay-icon';

        // Add text
        button.textContent = `Support via Google Pay`;

        // Append icon and text to button
        button.appendChild(icon);
        container.appendChild(button);

        // Append container to the body
        document.body.appendChild(container);
    }

    // Expose the function to the global scope
    window.createDonationWidget = createDonationWidget;
})();
