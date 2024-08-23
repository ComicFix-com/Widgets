// WhatsAppWidget.js

// Function to create the WhatsApp widget
export function createWhatsAppWidget(phoneNumber) {
    const widgetContainer = document.createElement('div');
    widgetContainer.classList.add('whatsapp-widget');

    const link = document.createElement('a');
    link.href = `https://wa.me/${phoneNumber}`;
    link.target = '_blank';
    link.id = 'whatsapp-link';

    const icon = document.createElement('i');
    icon.classList.add('fab', 'fa-whatsapp');

    link.appendChild(icon);
    widgetContainer.appendChild(link);
    document.body.appendChild(widgetContainer);

    // Add hover effect for animation
    link.addEventListener('mouseover', function() {
        icon.classList.add('pulse-animation');
    });

    link.addEventListener('animationend', function() {
        icon.classList.remove('pulse-animation');
    });
}

// Function to inject required styles
export function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
        .whatsapp-widget a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-color: #25d366;
            border-radius: 50%;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
        }
        .whatsapp-widget a i {
            color: #fff;
            font-size: 30px;
            transition: transform 0.3s ease-in-out;
        }
        .whatsapp-widget a:hover {
            transform: scale(1.2);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
        }
        .whatsapp-widget a:hover i {
            transform: rotate(20deg);
        }
        @media (max-width: 768px) {
            .whatsapp-widget {
                bottom: 15px;
                right: 15px;
            }
            .whatsapp-widget a {
                width: 50px;
                height: 50px;
            }
            .whatsapp-widget a i {
                font-size: 25px;
            }
        }
        @media (max-width: 480px) {
            .whatsapp-widget {
                bottom: 10px;
                right: 10px;
            }
            .whatsapp-widget a {
                width: 45px;
                height: 45px;
            }
            .whatsapp-widget a i {
                font-size: 22px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Function to load required external libraries (Bootstrap and FontAwesome)
export function loadExternalLibraries() {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    bootstrapLink.rel = 'stylesheet';
    document.head.appendChild(bootstrapLink);

    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    fontAwesomeLink.rel = 'stylesheet';
    document.head.appendChild(fontAwesomeLink);
}
