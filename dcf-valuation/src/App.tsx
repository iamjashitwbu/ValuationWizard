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
        <div style={{position:"fixed", bottom:"12px", right:"16px", opacity:0.4, fontSize:"12px", fontFamily:"sans-serif", zIndex:9999}}>
  Built by Jashit Kale
</div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
