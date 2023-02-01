let boundary;

function preload(){
    boundary = loadJSON("khorug_residential.geojson");
}

let padding = 20;

function setup(){
    createCanvas(windowHeight, windowHeight);
    background('#67a5da');

    let geom;
    let polygons;
    let coords;
    let features = boundary[0].features;

    fill('#81b214');
    stroke('#fff');
    for (let i = 0; i < features.length; i++) {
        geom = features[i].geometry;
        polygons = geom.coordinates;
        coords = polygons[0];

        beginShape();
        for (let j = 0; j < coords.length; j++) {
            let lon = coords[j][0];
            let lat = coords[j][1];
            let x = map(lon, 160, 180, 0+padding, width-padding);
            let y = map(lat, -50, -30, height-padding, 0+padding);
            vertex(x,y);
        }
        endShape(CLOSE);
    }
}