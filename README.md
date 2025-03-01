dWdnY2Y6Ly9iY3JhLmZjYmd2c2wucGJ6L2dlbnB4LzVwc2tIZ1B4Y3hQVkVlWGxxVVhGb1kgcm90MTM= </br>
6 28 15 26 15<br> {/\_\_/}</br>( • . •)</br>/ > 🤍

<h1 align="center">Discord Log Bot</h1>

<p align="center">

[![Total Views](https://hits.sh/github.com/Mid0aria/discord-log-bot.svg?view=today-total&label=Repo%20Today/Total%20Views&color=770ca1&labelColor=007ec6)](https://github.com/Mid0aria/discord-log-bot)
[![Last Commit](https://img.shields.io/github/last-commit/mid0aria/discord-log-bot)](https://github.com/Mid0aria/discord-log-bot)

## Türkçe içerik.
[Türkçe içeriğe ulaşmak için tıkla.](https://github.com/TexaPY/discord-log-bot/blob/main/README_TR.md)

## Need a help ?

Do you need a tutorial? [Watch Youtube Video](https://www.youtube.com/watch?v=QYC9apZHG5o)

If you need help, join the [Discord server here](https://discord.gg/WzYXVbXt6C)

</p>

# Contents

[⭐・Star History](#star-history)<br>
[👑・Features](#features)<br>
[⚙・Config.json example](#configjson-example)<br>
[🔗・Required Links](#required-links)<br>
[🎈・Installation](#Installation)<br>

## ⭐・Star History

<h2 align="center">Goal: <a href="https://github.com/Mid0aria/discord-log-bot/stargazers"><img src="https://img.shields.io/github/stars/Mid0aria/discord-log-bot" /></a> / 512</h2>
⭐⭐⭐ You can also give this repository a star so that others know we're trusted!<br>

[![Star History Chart](https://api.star-history.com/svg?repos=Mid0aria/discord-log-bot&type=Date)](https://star-history.com/#Mid0aria/discord-log-bot&Date)

## 👑・Features

-   Assigns the logs of almost all mismatch events to the channel you set
-   Auto Installing Dependencies
-   Anti Crash
-   Multi Database Support
    -   JSON
    -   MYSQL
    -   MONGODB

## ⚙・config.json example

```
{
    "bot": {
        "token": "xxx" / your discord bot token
    },
    "db": {
        "type": "x", / your preferred database type (json, mysql, mongodb)
        "mysql": {
            "MYSQL_HOST": "xxx", // fill this section if u preferred mysql
            "MYSQL_USER": "xxx", // fill this section if u preferred mysql
            "MYSQL_PWD": "xxx", // fill this section if u preferred mysql
            "MYSQL_DB": "logger" // dont touch this
        },
        "mongo": {
            "MONGO_TOKEN": "mongodb+srv://xxx" // fill this section if u preferred mongodb
        }
    }
}

```

## 🔗・Required Links

[NodeJS](https://nodejs.org/en/)<br>
[Terminal](https://apps.microsoft.com/detail/9n0dx20hk701)<br>
[Bot ZIP File](https://github.com/Mid0aria/discord-log-bot/archive/refs/heads/main.zip)

## 🎈・Installation

### 🖥️・Windows / Linux

```bash
# Check Node.js version:
node -v

# Clone the files with git:
git clone https://github.com/Mid0aria/discord-log-bot
# Optionally you can also download from github at https://github.com/Mid0aria/discord-log-bot/archive/refs/heads/main.zip

# Enter into the cloned directory:
cd discord-log-bot

# Configure the bot
notepad config.json # On windows
nano config.json # On linux, can also use any other preferred file writing software

# Run the bot:
node bot.js
```
