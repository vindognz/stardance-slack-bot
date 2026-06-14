# Stardance Slack Bot

A simple Slack bot built with Node.js. The bot provides a few fun utility commands, including latency checks, random cat facts, jokes, and coffee images.

This project was created following the Stardance Slack Bot tutorial.

## Features

* Responds to custom Slack slash commands
* Retrieves data from public APIs
* Easy to extend with additional commands

## Available Commands

| Command        | Description                                             |
| -------------- | ------------------------------------------------------- |
| `/vnz-help`    | Display a list of available commands                    |
| `/vnz-ping`    | Check if the bot is online and measure response latency |
| `/vnz-catfact` | Get a random cat fact                                   |
| `/vnz-joke`    | Receive a random joke                                   |
| `/vnz-coffee`  | Get a random coffee image                               |

## Usage

* Use the bot in my [HackClub Slack Channel](https://hackclub.enterprise.slack.com/archives/C0B8BKARPHU)

or
* Invite the bot to your Slack workspace and use any of the available slash commands in a channel where the bot is installed.


### Example

```text
/vnz-help
```

The bot will respond with a list of available commands and their descriptions.

```text
/vnz-joke
```

The bot will respond with a randomly generated joke fetched from an external API.
