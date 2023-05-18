function isASCII(str) {
    const parts = new URL(str);
    const nonASCIIRegex = /%[89A-Fa-f][0-9A-Fa-f]|%[CD][0-9A-Fa-f]%[89A-Fa-f][0-9A-Fa-f]/;
    return ['hostname', 'pathname', 'search'].every(part => !nonASCIIRegex.test(parts[part]));
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.url && !isASCII(request.url)) {
    sendResponse({nonASCII: true});
    chrome.action.setBadgeText({text: '!', tabId: sender.tab.id});
    chrome.action.setBadgeBackgroundColor({color: '#FF0000', tabId: sender.tab.id});
  }
});
