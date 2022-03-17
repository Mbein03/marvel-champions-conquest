# Marvel Champions Conquest Companion App

This application was created to be a companion app for Marvel Champions Conquest (MCC), a fan-made campaign designed for the Living Card Game (LCG) Marvel Champions. Initially, this app will handle card loot rolls for a variety of in-game activities. The app is still very much a work-in-progress. It started as personal passion project to provide practice as I learn a new stack. The goal over time is to add additional functionality to track acquired cards and credits for each player, and handle achievement and shop functionality.

## Stack & Structure

### Backend

- Node
- Express
- SQLite

### Frontend

- JS React
- Tailwind

### Structure

- Application is split into "client" and "server" folders that each have their own dependencies and package.json files.
- Structure was split in such a way to allow others to create their own frontend if desired, while still being able to make use of API calls in server backend

## Requirements & Installation

- Node.js is required and can be installed [https://nodejs.org/en/download/](here).

1. Clone repo to local machine
2. Navigate to "server" folder in repo via terminal and run "npm install" to install dependencies.
3. Navigate to "client" folder in repo in via terminal and run "npm install" to install dependencies.
4. Run "npm start in server folder - served on [http://localhost:9000](http://localhost:9000).
5. Run "npm start" in client folder - served on [http://localhost:3000](http://localhost:3000).
6. Run "npm run build-css" to build public styles file and watch for changes.
7. No need to run migrations, as a master DB file is included in repository.
8. Navigate to [http://localhost:3000](http://localhost:3000) and enjoy!

## Usage

- Select player in top left corner of sidebar.
- Select loot drop type (ex. minion kills at varied HP or manual roll) based on rewards you need to roll for.
- If performing manual roll, select roll tier (refer to MCC Rulebook for various roll types).
- Click and confirm roll.
- In some cases, depending on your initial roll, you may have the opportunity to select card faction. If so, select faction and confirm roll.
- Loot card result will be displayed (name, faction, and tier), along w/ image of card. Card quantity will be decremented from potential card pool.
- Either sell card back to card pool (card quantity will be incremented) or reset and start anew.
- At this point, credits are not being tracked in app, but there are plans to do so in the near future.

## Helpful Links

- [MCC Rulebook - Google Drive](https://drive.google.com/drive/folders/1s87w8nJLEG_dx_OCpXOT_s7szEBV02tg)
- [[https://boardgamegeek.com/thread/2733809/marvel-champions-conquest](MCC Board Game Geek)
- [https://discord.gg/HhWCehDwJS](MCC Discord Community)
- [https://marvelcdb.com/](Marvel Card Database)
- [https://marvelcdb.com/api/](Marvel Card Database API)

## Credits

- [https://boardgamegeek.com/user/Venkaz](Venkaz) on Board Game Geek for creating fan-made MCC campaign and inspiring this app.
- [https://marvelcdb.com/api/](Marvel Card Database API) for card images.
