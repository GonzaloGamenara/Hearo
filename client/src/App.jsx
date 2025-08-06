import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen.jsx";
import { HomeScreen } from "./components/HomeScreen.jsx";
import { SoloGameScreen } from "./components/SoloGameScreen.jsx";
import { MultiplayerGameScreen } from "./components/MultiplayerGameScreen.jsx";
import { DailySongScreen } from "./components/DailySongScreen.jsx";
import { LeaderBoardScreen } from "./components/LeaderBoardScreen.jsx";
import { NotFoundScreen } from "./components/NotFoundScreen.jsx";

import { ProtectedRoute } from "./routes/ProtectedRoute.jsx";
import { PublicRoute } from "./routes/PublicRoute.jsx";
import { AutoRedirect } from "./routes/AutoRedirect.jsx";

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AutoRedirect />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solo"
          element={
            <ProtectedRoute>
              <SoloGameScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/multiplayer/:roomId"
          element={
            <ProtectedRoute>
              <MultiplayerGameScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/daily"
          element={
            <ProtectedRoute>
              <DailySongScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderBoardScreen />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
