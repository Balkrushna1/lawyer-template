import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.submit.path, {
        method: api.inquiries.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit inquiry');
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Requested",
        description: "Thank you for your inquiry. We will contact you soon!",
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
