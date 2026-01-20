import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Empresa from "@/pages/Empresa";
import Produtos from "@/pages/Produtos";
import Catalogo from "@/pages/Catalogo";
import Revendas from "@/pages/Revendas";
import NotFound from "@/pages/not-found";

const basePath = import.meta.env.PROD ? "/lp-shade-express" : "";

function Router() {
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/empresa" component={Empresa} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/revendas" component={Revendas} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <TopBar />
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
