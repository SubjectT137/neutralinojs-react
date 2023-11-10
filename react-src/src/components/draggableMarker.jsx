import { useEffect } from "react";


function DraggableMarker(props) {

    var isDraggable = true;
    var curID = 0;



    
   // yourNumber = parseInt(hexString, 16);

    useEffect(() => {
        if(isDraggable){
            





        }

        var currDate = Math.floor(Date.now()/1000);
        curID = currDate.toString(16);
        console.log("Current ID: ",curID);

    }, );


    return (<>
        <div id={curID} style={{ width:"40px", border:"2px solid red"}}>dsa</div>


    </>);
}


export default DraggableMarker;