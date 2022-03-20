# Marvel Champions Conquest Companion App

This application was created to be a companion app for _Marvel Champions Conquest_ (MCC), a fan-made campaign designed for the Living Card Game (LCG) _Marvel Champions_. Initially, this app will handle card reward rolls for a variety of in-game activities. The app is still very much a work-in-progress. It started as personal passion project to provide practice as I learn a new stack. The goal over time is to add additional functionality to track acquired cards and credits for each player, and handle achievement and shop functionality.

## Stack & Structure

### Backend

- Node
- Express
- SQLite

### Frontend

- JS React
- Tailwind

### Structure

- Application is split into [client](client) and [server](server) folders that each have their own dependencies and package.json files.
- Structure was split in such a way to allow others to create their own frontend if desired, while still being able to make use of API calls in [server](server/routes/index.js) folder.

## Requirements & Installation

- Node.js is required and can be downloaded [here](https://nodejs.org/en/download/).

1. Clone repo to local machine.
2. Navigate to [server](server) folder in repo via terminal and run "npm install" to install dependencies.
3. Navigate to [client](client) folder in repo in via terminal and run "npm install" to install dependencies.
4. Run "npm start" in [server](server) folder - served on [http://localhost:9000](http://localhost:9000).
5. Run "npm start" (seperate terminal tab) in [client](client) folder - served on [http://localhost:3000](http://localhost:3000).
6. Run "npm run build-css" (seperate terminal tab) to build public styles CSS file and watch for changes.
7. No need to run migrations, as a master DB file is included in repository.
8. Navigate to [http://localhost:3000](http://localhost:3000) in browser and you should see app displayed.

## Usage

1. Select player in top left corner of sidebar.
2. Select reward (ex. minion kills at varied HP or manual roll) based on rewards for which you need to roll.
3. If performing manual roll, select reward roll value (refer to [MCC Rulebook](https://drive.google.com/drive/folders/1s87w8nJLEG_dx_OCpXOT_s7szEBV02tg) for various roll rewards). If minion kill was chosen, roll value will be selected for you and locked.
4. Click and confirm roll.
5. In some cases, depending on your initial roll, you may have the opportunity to select card faction. If so, select faction and confirm roll.
6. Reward card will be displayed (name, faction, and card tier), along with card image. Card quantity will be decremented from potential card pool in database.
7. Either sell and confirm card back to card pool (card quantity will be incremented in database) or reset and start a new reward roll.

- The "Update Card Images" button will fire out a request to [Marvel Card Database API](https://marvelcdb.com/api/) to update images for any cards in database that do not already have images assigned.
- At this point, credits are not being tracked in app when selling cards, but there are plans to do so in the near future.

## Upcoming Tasks

### Code

- [x] Add NPM package classnames for react components
- [ ] Add controllers to [server](server) folder to follow MVC architecture.
- [ ] Add intermediate table to track acquired player cards.

### New Features

- [ ] Add functionality to track credits on a per player basis as cards are sold.
- [ ] Add functionality to track credits acquired for completing side schemes.
- [ ] Add functionality to manually enter player names and credits as necessary.
- [ ] Add view to display acquired cards on a per player basis.
- [ ] Add shop functionality to display cards available in shop.
- [ ] Add functionality to track game achievements.

## Helpful Links

- [MCC Rulebook - Google Drive](https://drive.google.com/drive/folders/1s87w8nJLEG_dx_OCpXOT_s7szEBV02tg)
- [MCC Board Game Geek](https://boardgamegeek.com/thread/2733809/marvel-champions-conquest)
- [MCC Discord Community](https://discord.gg/HhWCehDwJS)
- [Marvel Card Database](https://marvelcdb.com/)
- [Marvel Card Database API](https://marvelcdb.com/api/)

## Credits

- [Venkaz](https://boardgamegeek.com/user/Venkaz) on Board Game Geek for creating fan-made MCC campaign and inspiring this app.
- [Marvel Card Database API](https://marvelcdb.com/api/) for card images.

## License

MIT License

Copyright (c) 2022 Marc Bein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
