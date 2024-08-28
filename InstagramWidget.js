export function createInstagramWidget(options) {
    // Set default options
    const defaultOptions = {
        url: 'https://www.instagram.com/yourprofile', // Default Instagram URL
        size: '60px', // Size of the button
        position: { bottom: '20px', right: '20px' }, // Default position
        hoverScale: 1.1, // Scale on hover
    };

    // Merge user options with default options
    const config = { ...defaultOptions, ...options };

    // Create the widget container
    const widget = document.createElement('div');
    widget.style.position = 'fixed';
    widget.style.bottom = config.position.bottom;
    widget.style.right = config.position.right;
    widget.style.backgroundColor = '#25D366'; // Instagram color
    widget.style.borderRadius = '50%';
    widget.style.width = config.size;
    widget.style.height = config.size;
    widget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    widget.style.display = 'flex';
    widget.style.justifyContent = 'center';
    widget.style.alignItems = 'center';
    widget.style.zIndex = '1000';
    widget.style.transition = 'transform 0.3s ease';

    // Create the link element
    const link = document.createElement('a');
    link.href = config.url;
    link.target = '_blank';

    // Create the image element
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'; // Instagram icon URL
    img.style.width = `calc(${config.size} - 20px)`;
    img.style.height = `calc(${config.size} - 20px)`;
    img.style.borderRadius = '50%';

    // Append the image to the link, and the link to the widget
    link.appendChild(img);
    widget.appendChild(link);

    // Add hover effect
    widget.addEventListener('mouseenter', () => {
        widget.style.transform = `scale(${config.hoverScale})`;
    });
    widget.addEventListener('mouseleave', () => {
        widget.style.transform = 'scale(1)';
    });

    // Append the widget to the body
    document.body.appendChild(widget);
}
