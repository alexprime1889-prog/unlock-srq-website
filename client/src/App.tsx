import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import NotFound from "@/pages/not-found";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import PortCharlottePage from "./pages/PortCharlottePage";
import PuntaGordaPage from "./pages/PuntaGordaPage";
import VenicePage from "./pages/VenicePage";
import CharlotteCountyPage from "./pages/CharlotteCountyPage";
import AboutUs from "./pages/AboutUs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking" component={Booking} />
      <Route path="/payment" component={Payment} />
      <Route path="/locksmith-port-charlotte" component={PortCharlottePage} />
      <Route path="/locksmith-punta-gorda" component={PuntaGordaPage} />
      <Route path="/locksmith-venice-fl" component={VenicePage} />
      <Route path="/emergency-locksmith-charlotte-county" component={CharlotteCountyPage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
