chrome.runtime.sendMessage({url: window.location.href}, function(response) {
  console.log(`Sent URL in content script: ${window.location.href}`);  // Log the URL
  if (response.nonASCII) {
    let warningDiv = document.createElement('div');
    warningDiv.textContent = 'WARNING: This URL contains non-ASCII characters';
    warningDiv.style.backgroundColor = 'red';
    warningDiv.style.color = 'white';
    warningDiv.style.fontSize = '20px';
    warningDiv.style.textAlign = 'center';
    warningDiv.style.padding = '10px 0';
    warningDiv.style.position = 'fixed';
    warningDiv.style.width = '100%';
    warningDiv.style.top = '0';
    warningDiv.style.left = '0';
    warningDiv.style.right = '0';
    warningDiv.style.zIndex = '9999';
    warningDiv.style.margin = '0';

    document.body.prepend(warningDiv);
  }
});
