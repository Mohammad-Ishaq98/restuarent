import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = (props) =>{
  console.log(props);
  return (
    <div className="">
      <Card>
        <CardBody>
          <CardImg alt={props.dish.name} src={props.dish.img} />
          <CardImgOverlay>
            <h2>Lorem ipsum dolor sit.</h2>
            <CardTitle >{props.dish.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  )
}

export default MenuItem;