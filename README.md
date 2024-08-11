# Productivity Chrome Extension with ReactJS

A chrome extension to improve user productivity on the browser.

Steps to install

- Clone the repository.
- `npm install`  - To install dependencies
- `npm build`  - To build the extension inside the build folder.
- Go to chrome://extensions and inside select “Load unpacked” option.
- Upload the build folder and you should ideally see your extension in the list.
- Open any website and in your extensions list, you should see your new local extension.
- Open it and ideally should have the time spent on each website in form of a list.
- Switching to a new tab should pause the time on the first tab.

Based on the timer set, if your time spent goes beyond that set timer, you should see a cat image instead of the actual DOM content. 

Further optimizations:

- Add a reset feature every day at night.
- Add a manual reset button.
- Stop calculating time spent after it has breached the timer.(Hint: You need to stop the interval inside the App component conditionally for that domain)
  
![Screenshot 2024-08-11 080739](https://github.com/user-attachments/assets/05af51dc-ca96-4c55-82db-2fad1b8f13a0)

  
