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
import AutomotiveServices from "./pages/AutomotiveServices";
import AutomotiveProducts from "./pages/AutomotiveProducts";
import NorthPortPage from "./pages/NorthPortPage";
import PortCharlottePage from "./pages/PortCharlottePage";
import SarasotaPage from "./pages/SarasotaPage";
import PuntaGordaPage from "./pages/PuntaGordaPage";
import VenicePage from "./pages/VenicePage";
import EnglewoodPage from "./pages/EnglewoodPage";
import BradentonPage from "./pages/BradentonPage";
import CharlotteCountyPage from "./pages/CharlotteCountyPage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking" component={Booking} />
      <Route path="/payment" component={Payment} />
      <Route path="/automotive-services" component={AutomotiveServices} />
      <Route path="/automotive-products" component={AutomotiveProducts} />
      <Route path="/locksmith-north-port" component={NorthPortPage} />
      <Route path="/locksmith-port-charlotte" component={PortCharlottePage} />
      <Route path="/locksmith-sarasota" component={SarasotaPage} />
      <Route path="/locksmith-punta-gorda" component={PuntaGordaPage} />
      <Route path="/locksmith-venice-fl" component={VenicePage} />
      <Route path="/locksmith-englewood" component={EnglewoodPage} />
      <Route path="/locksmith-bradenton" component={BradentonPage} />
      <Route path="/emergency-locksmith-charlotte-county" component={CharlotteCountyPage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
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
