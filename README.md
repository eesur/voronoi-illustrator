This repo is a system for taking path data out of adobe illustrator and using it to create a [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram)

[Illustrator Point Exporter](https://github.com/elcontraption/illustrator-point-exporter) is used for of Export [x, y] anchor point coordinates as JSON from Adobe Illustrator. The path tool is used, **without beizer curves**. The path tool is ideal, as then we only get [x, y] values for each point. 

![fuji](https://user-images.githubusercontent.com/1597761/36935512-8fdc00fe-1ef0-11e8-90b8-fd9cdf09abd7.jpg)

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

<img width="983" alt="screenshot 2018-03-03 14 25 14" src="https://user-images.githubusercontent.com/1597761/36935430-91c67710-1eef-11e8-8c2e-06aa3a1c7829.png">

for now copy element from dev tools, save as an svg file and import into illustrator

---------------------

## Use in the wild:

[Voronoi Portraits| A level mock](https://medium.com/@Muskeen/voronoi-portraits-a-level-mock-cc469b520d2b). 
![1 wac3srq_2w2obu5f7hm7xw](https://user-images.githubusercontent.com/1597761/40311426-9e7b2bda-5d07-11e8-9953-9560e5f911f4.jpeg)

---------------------
