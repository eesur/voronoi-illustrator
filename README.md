This repo is a system for taking path data out of adobe illustrator and using it to create a [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram)

[Illustrator Point Exporter](https://github.com/elcontraption/illustrator-point-exporter) is used for of Export [x, y] anchor point coordinates as JSON from Adobe Illustrator. The path tool is used, **without beizer curves**. The path tool is ideal, as then we only get [x, y] values for each point. 

TODO: create a video and/or images to explain the steps

## Setup (only need to do this once)
- You need [node](https://nodejs.org/en/) installed 
- Install [blockup](https://github.com/gabrielflorit/blockup): npm install -g blockup
- Clone/download this repo locally.

---------------------

## Usage

#### Create the path data:

- In Illustrator, File > Scripts > Other Script and locate [`script/exporter.js`](dist/exporter.js).
- Name and save your JSON export to: `voronoi/_dataFiles`

#### Create the voronoi:

- Set your settings in `voronoi/index.html` such as img name and data file name
- Go in to to the voronoi folder: `cd voronoi` and run: `blockup` 
- View at: [http://localhost:3000/](http://localhost:3000/)

---------------------

## Export the voronoi

TODO: add an export button

for now copy element from dev tools, save as an svg file and import into illustrator