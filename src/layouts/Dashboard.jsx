import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route } from "react-router";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/cart" component={CartDetail} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
