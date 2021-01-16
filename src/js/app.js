// placeholder
import PopoverRender from "./react/popover";
import TooltipRender from "./react/tooltip";
import ShoppingListRender from "./react/shoppinglist";

// needed to ensure that this is included for the browser
import React from "react";
import ReactDOM from 'react-dom';
import Popper from "popper.js";


ReactDOM.render(<ShoppingListRender/>, document.getElementById('root'));

