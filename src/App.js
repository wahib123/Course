import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { CourseDetails } from './Components/CourseDetails';
import Home from './Components/Home';
function App() {
  return (
    <Switch>
      <Route exact component={Home} path="/Course" />
      <Route exact component={CourseDetails} path="/courseDetail" />
    </Switch>
    
  );
}

export default App;
