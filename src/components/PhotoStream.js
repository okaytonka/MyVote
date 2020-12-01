import React from "react";
import ReactDOM from "react-dom";
import { Image } from "@zzwing/react-image";
import { Card } from "@material-ui/core";
const src = "https://zwing.site/react-image/static/img/logo.ffda68b3.jpg";
export default function PhotoStream() {
  return (
    <div className="PhotoStream" style={{display:"flex",marginBottom:50}}>
        <Card style={{width:150,marginRight:5}}><Image src={src} width={150} height={150} style={{ margin: "5px" }} /></Card>
        <Card style={{width:150,marginRight:5}}><Image src={src} width={150} height={150} style={{ margin: "5px" }} /></Card>
        <Card style={{width:150,marginRight:5}}><Image src={src} width={150} height={150} style={{ margin: "5px" }} /></Card>

    </div>
  );
}

const rootElement = document.getElementById("root");
