chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('how.html', {
    bounds: {
      width: 400,
      height: 400
    }
  });
});
