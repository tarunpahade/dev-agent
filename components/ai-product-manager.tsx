"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { RequirementForm } from "./requirement-form";
import { PRDDisplay } from "./prd-display";
import { generatePRD } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";


export function AIProductManager() {
  const [prd, setPrd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
const [showResponse,setShowResponse]=useState(false)
  const handleSubmit = async (email: string, requirements: string) => {
    try {
      setIsLoading(true);
      const response = await generatePRD(email, requirements);
      console.log(response);
      setShowResponse(true)
      setPrd(response);
    } catch (error) {
      console.log(error);
      
      toast({
        title: "Error",
        description: "Failed to generate PRD. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Bot className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">AI Product Manager</h1>
      </div>
      
      <RequirementForm onSubmit={handleSubmit} isLoading={isLoading} />
    {showResponse ? (
      <PRDDisplay content={prd} />
    ) : null

    }
      
    </div>
  );
}