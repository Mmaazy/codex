import "./App.css";
import React from "react";
import Home from "./components/home";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import PartnersLogo from "./components/partners";
import SliderCard from "./components/slider";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import Homethree from "./components/homethree";
import Homefour from "./components/homefour";
import Team from "./components/team";
import TableData from "./components/table";
import Tracker from "./components/tracker";
import ShoppingCart from "./components/shoppingcart";
import Graph from "./components/graph";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //console.log(expenses[0].date)

  return (
    <React.Fragment>
      <BrowserRouter>
        <Home />
        <Route exact path="/" component={Homethree} />
        <Route exact path="/" component={Homefour} />
        <Route exact path="/" component={SliderCard} />
        <Route exact path="/" component={Team} />     
        <Route exact path="/" component={PartnersLogo} />
        <Route exact path="/" component={ContactUs} />
        <Route exact path="/" component={Footer} />
{/*         <TableData
          id={expenses[0].id}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date.toISOString()}
        />
        <TableData
          id={expenses[1].id}
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date.toISOString()}
        />
        <TableData
          id={expenses[2].id}
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date.toISOString()}
        /> */}
        <Switch>
          <Route path="/tracker" component={Tracker} />
          <Route path="/jsondata" component={ShoppingCart} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
