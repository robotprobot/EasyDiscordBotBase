## 🤖 EasyDiscordBotBase - the simple to use Discord bot base.
EasyDiscordBotBase is a ready to go discord bot base that takes advantage of the new Discord.js 14, slash commands and other new features.

EasyDiscordBotBase allows the owner to create or install custom modules to add features. Share your modules in the Discussions tab!

---

>⚠️ EasyDiscordBotBase should not be used for illegal or immoral purposes, and should not be used to be disruptive in general. Think about others. The developers of the EasyDiscordBotBase will take no responsibility for the actions of custom module creators.

---

### 💽 Setup:
> 📋 Manual requirements - Node 18.6.0 or greater is recommended. NPM (included with Node) and Git is required to run these commands. The installation process will take care of any other requirements automatically.

1) Clone this repo using the command ```git clone <repo-link>``` and enter the folder.
2) Run the command ```npm install``` to install the required dependencies.
3) Create a file in the root directory called ```.env```.
4) Copy and paste the following template into the file: 

```
DISCORD_TOKEN=<token>
DISCORD_CLIENTID=<clientid>
```
Replace the ```<token>``` and ```<clientid>``` with the bot token and client ID respectively. You can get this information from the [Discord Developer Portal](https://discord.com/developers/applications).

5) Add or create any modules you like in the "commands" folder.
6) Run the command ```npm run refresh-commands```.
7) Run the command ```npm run start``` to start the bot.

👍 The bot should now be operating and can be added to servers by appending your client ID into the following link:

```https://discord.com/api/oauth2/authorize?client_id= <clientid> &scope=applications.commands```.

If you need to turn off the bot, simply use the command ```npm run stop```.

---

### 👀 Monitoring:
#### EasyDiscordBotBase can be monitored in two different ways: 

On-server within a terminal by using the command ```npm run monitor```, which will show the process memory, CPU usage and logs.

Remotely with the pm2.io service which shows much more advanced metrics and can be accessed from anywhere, using the command ```npm run monitor-remote``` to setup.

---

> ⚠️ There is no warranty included or implied with EasyDiscordBotBase, and the creator will accept no liability for damage or loss. It is assumed that you have some technical competence and the ability to host a Discord bot server.
If you require support, please use the Issues tab on GitHub for base support, or the Community Help and Support section in the Discussions tab on GitHub for help with modules.
