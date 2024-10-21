document.getElementById('save-button').addEventListener('click', function (e) {
  e.preventDefault();
  const chatbotUrl = document.getElementById('chatbot-url').value;
  const errorTip = document.getElementById('error-tip');

  if (chatbotUrl.trim() === "") {
    errorTip.textContent = "Dify ChatBot URL cannot be empty.";
  } else if (!isValidUrl(chatbotUrl)) {
    errorTip.textContent = "Invalid URL format.";
  } else if (!isHttpsUrl(chatbotUrl)) {
    errorTip.textContent = "URL must use HTTPS.";
  } else {
    errorTip.textContent = "";

    chrome.storage.sync.set({
      'chatbotUrl': chatbotUrl,
    }, function () {
      alert('Save Success!');
    });
  }
});

// Load parameters from chrome.storage when the page loads
chrome.storage.sync.get(['chatbotUrl'], function (result) {
  const chatbotUrlInput = document.getElementById('chatbot-url');

  if (result.chatbotUrl) {
    chatbotUrlInput.value = result.chatbotUrl;
  }

});

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function isHttpsUrl(url) {
  const parser = document.createElement('a');
  parser.href = url;
  return parser.protocol === 'https:';
}
