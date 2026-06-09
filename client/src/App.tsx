import { Toaster } from "@/components/ui/sonner";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";

function Router() {
  const path = window.location.pathname;

  if (path === "/") {
    return <Home />;
  }

  if (path === "/404") {
    return <NotFound />;
  }

  return <NotFound />;
}

function App() {
  return (
    <>
      <Toaster />
      <Router />
    </>
  );
}

export default App;