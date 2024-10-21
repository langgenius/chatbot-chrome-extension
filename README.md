## Chrome Dify ChatBot插件

### Method 1: Chrome Extension Store * [Click to visit](https://chrome.google.com/webstore/detail/dify-chatbot/ceehdapohffmjmkdcifjofadiaoeggaf/related?hl=zh-CN&authuser=0) *

### Method 2: Load in Developer Mode Locally

- Go to Chrome browser extension management, you can directly access [chrome://extensions/](chrome://extensions/)
- Enable "Developer mode" and click "Load unpacked extension"

![img-1.png](images/img-1.png)

- Then open the root directory of the extension source file
    - third-party
        - chrome plug-in
            - content.js          Floating button JS script
            - favicon.png         Extension icon
            - manifest.json       Extension description file
            - options.css         Extension configuration page style file
            - options.html        Extension configuration static HTML page
            - options.js          Extension configuration JS script

### After importing the extension, subsequent configurations are the same
- Create Dify application configuration, click on "Embed" in the application overview, switch to the Chrome browser extension installation view, click the copy button to get the ChatBot URL, as shown in the figure:

![img-2.png](images/img-2.png)
- Click "Save" and confirm the prompt to successfully configure

![img-3.png](images/img-3.png)

- Restart the browser to ensure that all pages are refreshed successfully
- Dify chatbot floating bar can be loaded normally on any page in Chrome, if you need to change the chatbot, just change the ChatBot URL

![img-4.png](images/img-4.png)

### Security Considerations and Best Practices

When using the Dify Chatbot Chrome extension, it is important to follow these security considerations and best practices:

1. **Validate and Sanitize URLs**: Ensure that the ChatBot URL is validated and sanitized before embedding it in an iframe. This helps prevent potential security vulnerabilities such as XSS attacks.

2. **Use HTTPS**: Always use HTTPS for the ChatBot URL to ensure secure communication between the extension and the chatbot server.

3. **Content Security Policy (CSP)**: The extension includes a content security policy to enhance security. Make sure to review and update the CSP as needed to protect against potential threats.

4. **Security Headers**: The extension includes security headers such as X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection. These headers help protect against common security vulnerabilities.

5. **Regular Updates**: Keep the extension and its dependencies up to date to ensure that you have the latest security patches and improvements.

By following these security considerations and best practices, you can help ensure the safe and secure use of the Dify Chatbot Chrome extension.
