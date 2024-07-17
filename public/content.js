const TIME_LIMIT = 1000 * 60 * 60;

const { hostname } = new URL(window.location.href);
let interval;

function replaceContent() {
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column;">
      <img src="https://i.redd.it/1xoyoaqy5vqb1.jpg" alt="Time limit exceeded" width="200" />
      <h1>Time limit exceeded!</h1>
      <p>Get back to work!</p>
    </div>
  `;
}

function checkTimeLimit(domainTimes) {
  if (domainTimes && domainTimes[hostname] >= TIME_LIMIT) {
    replaceContent();
    clearInterval(interval);
  }
}

chrome.runtime.sendMessage({ type: 'getTimes' }, (domainTimes) => {
  checkTimeLimit(domainTimes);
  interval = setInterval(() => {
    chrome.runtime.sendMessage({ type: 'getTimes' }, (updatedDomainTimes) => {
      checkTimeLimit(updatedDomainTimes);
    });
  }, 1000);
});

