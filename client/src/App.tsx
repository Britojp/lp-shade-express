import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Empresa from "@/pages/Empresa";
import Produtos from "@/pages/Produtos";
import Catalogo from "@/pages/Catalogo";
import Revendas from "@/pages/Revendas";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/empresa" component={Empresa} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/catalogo" component={Catalogo} />
      <Route path="/revendas" component={Revendas} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1 pt-32">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
