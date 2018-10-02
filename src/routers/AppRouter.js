import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashbordPage from '../components/ExpenseDashbordPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
  // HTML5 の History API を使ってルーティングするコンポーネント
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        {/* 
          Route がおそらく最も使われるコンポーネント
          path の値に URL がマッチするときに component をレンダリングする
        */}
        <Route path="/" component={ExpenseDashbordPage} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
