import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Individual from "./pages/Individual";
import Business from "./pages/Business";
import ComboService from "./pages/ComboService";
import Investments from "./pages/Investments";
import OneOnOne from "./pages/OneOnOne";
import PricesPlans from "./pages/PricesPlans";
import Schedule from "./pages/Schedule";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/business" element={<Business />} />
          <Route path="/combo-service" element={<ComboService />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/1-1" element={<OneOnOne />} />
          <Route path="/prices-plans" element={<PricesPlans />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
