"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";

interface RequirementFormProps {
  onSubmit: (email: string, requirements: string) => Promise<void>;
  isLoading: boolean;
}

export function RequirementForm({ onSubmit, isLoading }: RequirementFormProps) {
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, requirements);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="requirements" className="text-sm font-medium">
            Business Requirements
          </label>
          <Textarea
            id="requirements"
            placeholder="Enter your business requirements here..."
            className="min-h-[150px]"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating PRD...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Generate PRD
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}