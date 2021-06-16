import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const VideoList = lazy(() => import("./pages/videoListing"));
const VideoPlayer = lazy(() => import("./pages/videoPlayer"));
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path="/listing">
            <VideoList />
          </Route>
          <Route exact path="/player">
            <VideoPlayer />
          </Route>
          <Route path="/">
            <VideoList />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
