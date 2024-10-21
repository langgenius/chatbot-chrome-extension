document.getElementById('save-button').addEventListener('click', function (e) {
  e.preventDefault();
  const chatbotUrl = document.getElementById('chatbot-url').value;
  const errorTip = document.getElementById('error-tip');
  const dataExtraction = document.getElementById('data-extraction').checked;
  const dataTypes = Array.from(document.getElementById('data-types').selectedOptions).map(option => option.value);

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
      'dataExtraction': dataExtraction,
      'dataTypes': dataTypes
    }, function () {
      alert('Save Success!');
    });
  }
});

// Load parameters from chrome.storage when the page loads
chrome.storage.sync.get(['chatbotUrl', 'dataExtraction', 'dataTypes'], function (result) {
  const chatbotUrlInput = document.getElementById('chatbot-url');
  const dataExtractionInput = document.getElementById('data-extraction');
  const dataTypesInput = document.getElementById('data-types');

  if (result.chatbotUrl) {
    chatbotUrlInput.value = result.chatbotUrl;
  }

  if (result.dataExtraction !== undefined) {
    dataExtractionInput.checked = result.dataExtraction;
  }

  if (result.dataTypes) {
    Array.from(dataTypesInput.options).forEach(option => {
      if (result.dataTypes.includes(option.value)) {
        option.selected = true;
      }
    });
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
