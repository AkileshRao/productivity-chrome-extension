# Productivity Chrome Extension with ReactJS

A Chrome extension to improve user productivity on the browser built with ReactJS.

Steps to install

- Clone the repository.
- `npm install`  - To install dependencies
- `npm build`  - To build the extension inside the build folder.
- Go to chrome://extensions and inside select the “Load unpacked” option.
- Before that make sure you toggle the "Developer mode" option.
- Upload the build folder; ideally, you should see your extension in the list.
- In your extensions list, you should see your new local extension.
- When you open a website, open your extension; ideally, you should have the time spent on each website in the form of a list.
- Switching to a new tab should pause the time on the first tab.

Based on the timer set, if your time goes beyond that set timer, you should see a cat image instead of the actual DOM content. 

Further optimizations:
- Add a reset feature every day at night.
- Add a manual reset button.
- Stop calculating time spent after it has breached the timer. (Hint: You need to stop the interval inside the App component conditionally for that domain)
  
![Screenshot 2024-08-11 080739](https://github.com/user-attachments/assets/05af51dc-ca96-4c55-82db-2fad1b8f13a0)

  
