import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InfoTooltipProps {
  content: string;
  source?: string;
}

export function InfoTooltip({ content, source }: InfoTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors ml-1"
        >
          <HelpCircle className="h-3.5 w-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-sm p-3" side="top">
        <p>{content}</p>
        {source && (
          <p className="mt-1 text-xs text-yellow-600 dark:text-yellow-400">
            <strong>Where to find:</strong> {source}
          </p>
        )}
      </TooltipContent>
    </Tooltip>
  );
}
