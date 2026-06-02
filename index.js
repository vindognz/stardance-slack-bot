const axios = require("axios");

require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/vnz-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/vnz-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/vnz-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke from API." });
  }
});

app.command('/vnz-coffee', async ({ ack, respond }) => {
  await ack();

  try {
    const coffeeURL = `https://coffee.alexflipnote.dev/random?t=${Date.now()}`;

    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Here's your coffee! ☕",
          },
        },
        {
          type: "image",
          image_url: coffeeURL,
          alt_text: "Coffee",
        },
      ],
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a coffee image from API." });
  }
});

app.command('/vnz-help', async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
  - /vnz-help    - You're looking at it...
  - /vnz-ping    - Check bot latency.
  - /vnz-catfact - Get a cat fact from the API.
  - /vnz-joke    - Get a joke from the API.
`
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();