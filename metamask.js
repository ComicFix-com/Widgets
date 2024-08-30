(function() {
    // Create widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.style.fontFamily = 'Arial, sans-serif';
    widgetContainer.style.display = 'flex';
    widgetContainer.style.flexDirection = 'column';
    widgetContainer.style.alignItems = 'center';
    widgetContainer.style.padding = '15px';
    widgetContainer.style.border = '1px solid #ccc';
    widgetContainer.style.backgroundColor = '#fff';
    widgetContainer.style.borderRadius = '8px';
    widgetContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    widgetContainer.style.width = '300px';
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '15px';
    widgetContainer.style.right = '15px';
    widgetContainer.style.zIndex = '1000';
    widgetContainer.style.fontSize = '14px';

    // Create title
    const title = document.createElement('h3');
    title.textContent = 'MetaMask Fund Checker';
    title.style.margin = '0';
    title.style.fontSize = '18px';
    widgetContainer.appendChild(title);

    // Create connect button
    const connectButton = document.createElement('button');
    connectButton.textContent = 'Connect MetaMask';
    connectButton.style.padding = '10px 20px';
    connectButton.style.fontSize = '16px';
    connectButton.style.cursor = 'pointer';
    connectButton.style.border = 'none';
    connectButton.style.borderRadius = '4px';
    connectButton.style.backgroundColor = '#007bff';
    connectButton.style.color = '#fff';
    connectButton.style.margin = '10px 0';
    connectButton.style.outline = 'none';
    widgetContainer.appendChild(connectButton);

    // Create account display
    const accountDiv = document.createElement('div');
    widgetContainer.appendChild(accountDiv);

    // Create balance display
    const balanceDiv = document.createElement('div');
    widgetContainer.appendChild(balanceDiv);

    // Append widget to body
    document.body.appendChild(widgetContainer);

    // Load Web3 library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js';
    script.onload = function() {
        window.addEventListener('load', function() {
            connectButton.addEventListener('click', async function() {
                if (window.ethereum) {
                    try {
                        // Request account access
                        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                        const account = accounts[0];
                        accountDiv.textContent = `Connected account: ${account}`;

                        // Fetch balance
                        const web3 = new Web3(window.ethereum);
                        const balance = await web3.eth.getBalance(account);
                        balanceDiv.textContent = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
                    } catch (error) {
                        console.error('User denied account access or an error occurred:', error);
                        accountDiv.textContent = 'Failed to connect or retrieve balance.';
                    }
                } else {
                    accountDiv.textContent = 'MetaMask is not installed.';
                }
            });
        });
    };
    document.head.appendChild(script);
})();
