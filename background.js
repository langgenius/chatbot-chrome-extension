chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'sendData') {
    const formattedData = formatData(message.data);
    sendDataToLLM(formattedData);
  }
});

function formatData(data) {
  // Sanitize and format the extracted data
  return {
    headings: data.headings.map(sanitizeText),
    paragraphs: data.paragraphs.map(sanitizeText),
    links: data.links.map(sanitizeUrl),
    images: data.images.map(sanitizeUrl),
    metadata: {
      title: sanitizeText(data.metadata.title),
      description: sanitizeText(data.metadata.description),
      keywords: sanitizeText(data.metadata.keywords)
    }
  };
}

function sanitizeText(text) {
  // Implement text sanitization logic
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sanitizeUrl(url) {
  // Implement URL sanitization logic
  const parser = document.createElement('a');
  parser.href = url;
  if (parser.protocol !== 'https:') {
    return '';
  }
  return url;
}

function sendDataToLLM(data) {
  // Implement the logic to send data to the LLM
  fetch('https://your-llm-endpoint.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Data sent to LLM:', result);
  })
  .catch(error => {
    console.error('Error sending data to LLM:', error);
  });
}
