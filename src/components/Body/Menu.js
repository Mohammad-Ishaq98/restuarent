import React,{Component} from "react";
import DISHES from "../../dishes/Dishes";
import MenuItem from "./MenuItem";
class Menu extends Component {
  state = {
    dishes : DISHES,
  }

  render (){
    const menu = this.state.dishes.map(item =>{
      return (
        <MenuItem dish={item} key={item.id}/>
      )
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {menu}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;