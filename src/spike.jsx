import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"

function Canvas({children,size}) { 
    return (<svg width = {size} height = {size}> {children}</svg>);
}

function Polygon({x,y,n,radius}) {
    var pointsA = "";
    var angle = 2/n*Math.PI;
    var i = 0;
    while (i < n) {
            var nextPointX = x+radius*Math.cos(i*angle);
            var nextPointY= y-radius*Math.sin(i*angle);
            pointsA +=  nextPointY + "," + nextPointX+ " ";   
            i=i+1;          
    }        
    var pointx = x+radius*Math.cos(0);
    var pointy = y+radius*Math.sin(0);
    pointsA +=  pointy + "," + pointx ;  
    return (<polygon id="star" 
        points = {pointsA} >
         </polygon>)
}


function polygon({x,y,n,radius}) {
    var pointsA = [];
    var angle = 2/n*Math.PI;
    var i = 0;
    while (i < n) {
            var nextPointX = x+radius*Math.cos(i*angle);
            var nextPointY= y-radius*Math.sin(i*angle);
            pointsA.push([nextPointY, nextPointX]) ;   
            i=i+1;          
    }        
    var pointx = x+radius*Math.cos(0);
    var pointy = y+radius*Math.sin(0);
    pointsA.push([pointy, pointx]) ; 
    console.log(JSON.stringify({
        type: "Feature", 
        geometry: { 
            type: "Polygon",
            coordinates:[pointsA]
        },
        properties: {}
    }))
}
polygon({x: 40.80962, y: -73.96079, n: 5,radius: .0001})
function Pointstojson() {
    var pointsA = Polygon() ;
    var geo = {
        "type": "Feature",
        "geometry": {
        "type": "Polygon",
        "coordinates": [
            pointsA   
        ]
        },
        "properties": {}
    };
    console.log(JSON.stringify(geo= {"coordinates": pointsA}))
}
//Pointstojson()

function App() {
    return (
        <> <div>   
            <Canvas size = "500">    
                <Polygon x = {40.80962}
                        y= {-73.96079} 
                        n= {6} 
                        radius = {0.0001}/>      
            </Canvas>
            </div> </>    
    )
}


ReactDom.render(<App />, document.getElementById('container'))