import { createBrowserRouter } from "react-router-dom";
import Lineup from "./component/lineup/line-up";
import Member from "./component/member/member";
import Home from "./pages/home/home";
import Live from "./pages/live/live";
import Club from "./pages/teams/teams";
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/clubs",
      element:<Club /> 
    },{
      path:"/line-ups",
      element:<Lineup /> 
    },
    {
      path:"/live",
      element:<Live /> 
    },
    {
      path:"/team-members",
      element:<Member />
    }


  ])
  return (
    <div className="App">
      <router/>
      
       
       
      
    </div>
  );
}

export default App;
