import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountriesApp from "../components/CountriesApp";
import Header from "../components/Header";
import CountryDetail from "../components/CountryDetail";
import { ThemeProvider } from "../components/themeContext";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <ThemeProvider>
        <Header />
        <Switch>
          <Route path="/country/:country">
            <CountryDetail />
          </Route>
          <Route path="/" exact={true}>
            <CountriesApp />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  </BrowserRouter>
);

export default AppRouter;
