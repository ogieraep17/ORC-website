import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SchedulePage from "@/pages/SchedulePage";
import StandingsPage from "@/pages/StandingsPage";
import CommunityPage from "@/pages/CommunityPage";
import JoinPage from "@/pages/JoinPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
