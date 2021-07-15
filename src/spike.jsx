import React, { useEffect, useState } from "react"
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
            i++
        }
        while (i<n) 
    
    return (<polygon id="star" 
        points = {pointsA}
        fill = "orange"> </polygon>)
}

function App() {
    var [spikes,setSpikes] = useState(0)
    useEffect(()=>{  
        setInterval (() => {
            setSpikes(value => value + 1)    
        }, 1000)
    }, [])
    var lst =[1,2,3, 4,5, 6]
    
    return (
        <div style = {{position: "relative", width: "1024px", height: "768px"}}> 
        {
            lst.map((l)=> {
                return (
                <div style = {{position: "absolute", top: Math.random()*1000, left: Math.random()*1000 }}>   
                <Canvas size = "200">
                    <Polygon n= {spikes} 
                        radius = {10*l}/>      
                </Canvas>
                </div>
                )
            })            
        }   
        </div> 
    )
}

ReactDom.render(<App />, document.getElementById('container'))