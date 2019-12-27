import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from '../Pages/Home';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';
import Myaccount from '../Pages/Myaccount';
import Collection from '../Pages/Collection';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import YourItems from '../Pages/YourItems';
import HowToRent from '../Pages/HowToRent';
import EarnWithUs from '../Pages/EarnWithUs';
import OnlineHelp from '../Pages/OnlineHelp';
import FAQS from '../Pages/FAQS';
import ItemDetails from '../Pages/ItemDetails';
import AccountInfo from '../Pages/AccountInfo';
import ItemCategory from '../Pages/ItemsCategory';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';

function RouteViews() {
  return (
    <Switch>
         <Route path="/" exact  component={HomePage} />
         <Route path="/signup" component={Signup} />
         <Route path="/signin" component={Signin} />
         <Route path="/myaccount" component={Myaccount} />
         <Route path="/itemdetails" component={ItemDetails} />
         <Route path="/contact" component={Contact} />
         <Route path="/collection" component={Collection} />
         <Route path="/about" component={About} />
         <Route path="/youritems" component={YourItems} />
         <Route path="/howtorent" component={HowToRent} />
         <Route path="/earnwithus" component={EarnWithUs} />
         <Route path="/onlinehelp" component={OnlineHelp} />
         <Route path="/faqs" component={FAQS} />
         <Route path="/accountinfo" component={AccountInfo} />
         <Route path="/category" component={ItemCategory} />
         <Route path="/forgotpassword" component={ForgotPassword} />
         <Route path="/reset" component={ResetPassword} />
       </Switch>
  );
}

export default RouteViews;