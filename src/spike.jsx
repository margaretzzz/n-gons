import React, { Children } from "react"
import ReactDom from "react-dom"

function Canvas({children,size}) { 
    return (<svg width = {size} height = {size}> {children}</svg>);
}

function Polygon({n, radius}) {
    var pointsA = ""
    var angle = 2/n*Math.PI
    var i = 0
        do {
            var nextPointX = 100+radius*Math.cos(i*angle)
            var nextPointY= 100-radius*Math.sin(i*angle)
            pointsA += nextPointX + "," + nextPointY + " "
            //console.log("Point X" + (i+1) + ": " + nextPointX)
            // console.log("Point Y" + (i+1) + ": " +nextPointY)
            i++
        }
        while (i<n) 
    
    return (<polygon id="star" 
        points = {pointsA}
        fill = "pink"> </polygon>)
}

function App() {
    return (
       <> <div>   
            <Canvas size = "500">
                <Polygon n= {6} radius = {50}/>      
            </Canvas>
        </div>
        <div>
            <Canvas size = "500">
                <Polygon n= {4} radius = {50}/>      
            </Canvas>
        </div> </>
    )
}

ReactDom.render(<App />, document.getElementById('container'))