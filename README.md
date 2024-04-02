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