import React from "react";
import ReactDOM from "react-dom";
import { Image } from "@zzwing/react-image";
import { Card } from "@material-ui/core";
import Axios from 'axios';


const src = "https://zwing.site/react-image/static/img/logo.ffda68b3.jpg";
export const dataresponse=[];
 function PhotoViewer(){
  const response =  Axios.get(`http://localhost:3000/photos/`,
  {params:{userId:1}} )
      .then(res => {

console.log(res.data);           
  dataresponse.push(res.data);
      })
}

export default async function PhotoStream() {
await PhotoViewer();

  
  return (
    <div>

      {dataresponse.map((mydata,index) =>
    
    <div className="PhotoStream" style={{display:"flex",marginBottom:50}}>
    <Card style={{width:150,marginRight:5}}><Image src={mydata[index].listPhoto.photo1} width={150} height={150} style={{ margin: "5px" }} /></Card>
    <Card style={{width:150,marginRight:5}}><Image src={mydata[index].listPhoto.photo2} width={150} height={150} style={{ margin: "5px" }} /></Card>
    <Card style={{width:150,marginRight:5}}><Image src={mydata[index].listPhoto.photo3} width={150} height={150} style={{ margin: "5px" }} /></Card>

</div>
    )}
    </div>
    

  );
}

const rootElement = document.getElementById("root");
