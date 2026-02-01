import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Per instructions, we are mocking the submission but keeping the structure ready
      // If we were hitting the API:
      /*
      const res = await fetch(api.inquiries.submit.path, {
        method: api.inquiries.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit inquiry');
      return res.json();
      */
      
      // Simulating network request for "Mock submission"
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: "Inquiry received" };
    },
    onSuccess: () => {
      toast({
        title: "Consultation Requested",
        description: "We have received your details and will call you shortly.",
        variant: "default", 
        className: "bg-green-600 text-white border-green-700"
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please call us directly.",
        variant: "destructive",
      });
    }
  });
}
