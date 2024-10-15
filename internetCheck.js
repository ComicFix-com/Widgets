// internetCheck.js
class InternetCheck {
    constructor({ slowThreshold = 1500, checkInterval = 5000 } = {}) {
        this.slowThreshold = slowThreshold; // Time in ms above which the connection is considered slow
        this.checkInterval = checkInterval; // Interval to check connection
        this.isOnline = navigator.onLine; // Check if the browser detects online status
        this.init();
    }

    init() {
        // Listen for online and offline events from the browser
        window.addEventListener('online', () => this.handleOnlineStatus(true));
        window.addEventListener('offline', () => this.handleOnlineStatus(false));

        // Start periodic checks for internet speed
        this.checkConnectionSpeed();

        // Continue checking at regular intervals
        setInterval(() => this.checkConnectionSpeed(), this.checkInterval);
    }

    handleOnlineStatus(status) {
        this.isOnline = status;
        if (!status) {
            console.log("The internet is down.");
            this.notify("Internet is down.");
        }
    }

    async checkConnectionSpeed() {
        if (!this.isOnline) return;

        const startTime = performance.now();

        try {
            // Attempt to fetch a small resource to measure speed
            await fetch('', { mode: 'no-cors' });

            const endTime = performance.now();
            const duration = endTime - startTime;

            if (duration > this.slowThreshold) {
                console.log("The internet is slow.");
                this.notify("Internet is slow.");
            } else {
                console.log("The internet connection is good.");
            }
        } catch (error) {
            // Fetch failed, so the internet might be down
            console.log("Failed to connect, possible internet issue.");
            this.notify("Failed to check connection, internet might be down.");
        }
    }

    notify(message) {
        // Notify other parts of the app or developers that the internet is slow or down
        const event = new CustomEvent('internetStatus', { detail: message });
        window.dispatchEvent(event);
        // Optionally, display a message to the user:
        alert(message);
    }
}

// To integrate this module:
const internetChecker = new InternetCheck({
    slowThreshold: 1500, // Customize slow threshold (ms)
    checkInterval: 5000  // Customize the check interval (ms)
});

