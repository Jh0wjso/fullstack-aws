import { Routes, Route } from "react-router-dom";
import CreateSession from "./pages/CreateSession";
import SessionListPage from "./pages/SessionListPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SessionListPage />} />
      <Route path="/create-session" element={<CreateSession />} />
      <Route path="/sessions" element={<SessionListPage />} />
    </Routes>
  );
}
