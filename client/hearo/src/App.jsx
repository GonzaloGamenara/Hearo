import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen.jsx";
import { HomeScreen } from "./components/HomeScreen.jsx";
import { SoloGameScreen } from "./components/SoloGameScreen.jsx";
import { MultiplayerGameScreen } from "./components/MultiplayerGameScreen.jsx";
import { DailySongScreen } from "./components/DailySongScreen.jsx";
import { LeaderBoardScreen } from "./components/LeaderBoardScreen.jsx";
import { NotFoundScreen } from "./components/NotFoundScreen.jsx";
import './styles/App.css'

function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginScreen />}/>
          <Route path="/home" element={<HomeScreen />}/>
          <Route path="/solo" element={<SoloGameScreen />}/>
          <Route path="/multiplayer/:roomId" element={<MultiplayerGameScreen />}/>
          <Route path="/daily" element={<DailySongScreen />}/>
          <Route path="/leaderboard" element={<LeaderBoardScreen />}/>
          <Route path="*" element={<NotFoundScreen />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;