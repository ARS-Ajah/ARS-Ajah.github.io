const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const webhook = document.querySelector('#webhook').value;

  if (!webhook) {
    alert('Sorry, please fill the text box');
    return;
  }

  const generateString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 18; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const sendRequest = (string) => {
    const url = `https://discordapp.com/api/v9/entitlements/gift-codes/${string}?with_application=false&with_subscription_plan=true`;

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          sendWebhook(string);
        } else {
          alert('Sorry, please send a valid webhook URL');
        }
      })
      .catch((error) => {
        alert('Sorry, there was an error sending the request');
      });
  };

  const sendWebhook = (string) => {
    const data = {
      content: string,
    };

    fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('String sent successfully!');
        } else {
          alert('Sorry, there was an error sending the webhook');
        }
      })
      .catch((error) => {
        alert('Sorry, there was an error sending the webhook');
      });
  };

  const string = generateString();
  sendRequest(string);
});