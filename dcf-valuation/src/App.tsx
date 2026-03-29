import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DCFTool from "@/pages/DCFTool";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DCFTool />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
