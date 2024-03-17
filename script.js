document.getElementById("check").addEventListener("click", validateURL);

function validateURL() {
  var webhook = document.getElementById("webhook").value;

  if (webhook === "") {
    alert("Sorry, the URL is empty.");
    return;
  }

  if (!webhook.startsWith("https://discord.com/api/webhooks/")) {
    alert("This is not a webhook URL!");
    return;
  }

  fetch(webhook)
    .then(function(response) {
      if (response.status === 200) {
        alert("Starting the process!")
        console.log("Process is starting at the background...");
      } else {
        alert("Sorry Please enter a valid webhook url")
        console.log("URL Replied with status code of " + response.status);
      }
    })
    .catch(function(error) {
      console.error();
      alert("An error has occured")
    });
}