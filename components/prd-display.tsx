import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PRDDisplayProps {
  content: string;
}

export function PRDDisplay({ content }: PRDDisplayProps) {
  // if (!content) return null;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Generated PRD</h2>
      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {content}
        </pre>
      </ScrollArea>
    </Card>
  );
}