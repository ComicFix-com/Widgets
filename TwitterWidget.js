// TwitterWidget.js

// Function to load external libraries if needed (e.g., Font Awesome)
export function loadExternalLibraries() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
}

// Function to inject styles for the Twitter widget
export function injectStyles() {
    const styles = `
        .twitter-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #1DA1F2;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            transition: transform 0.3s ease;
        }

        .twitter-widget:hover {
            transform: scale(1.1);
        }

        .twitter-widget i {
            color: white;
            font-size: 28px;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

// Function to create the Twitter widget
export function createTwitterWidget(twitterHandle) {
    const widget = document.createElement('div');
    widget.className = 'twitter-widget';

    const link = document.createElement('a');
    link.href = `https://twitter.com/${twitterHandle}`;
    link.target = '_blank';

    const icon = document.createElement('i');
    icon.className = 'fab fa-twitter';

    link.appendChild(icon);
    widget.appendChild(link);

    document.body.appendChild(widget);
}
