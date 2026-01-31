"use client";

import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

// Zod schema for validation
const settingsSchema = z.object({
  whatsapp_number: z.string().optional(),
  // Add more settings here in the future
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

export default function GlobalSettingsPage() {
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
  });

  // Fetch current settings
  const { data: settings, isLoading } = useQuery({
    queryKey: ["global-settings"],
    queryFn: async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || "http://localhost:3001"}/api/settings`);
      return response.data.data; // API returns object { success: true, data: { key: value } }
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });

  // Update form when data loads
  useEffect(() => {
    if (settings) {
      reset({
        whatsapp_number: settings.whatsapp_number || "",
      });
    }
  }, [settings, reset]);

  // Mutation to save settings
  const mutation = useMutation({
    mutationFn: async (data: SettingsFormValues) => {
      // Convert form object to array format expected by backend
      const settingsArray = Object.entries(data).map(([key, value]) => ({
        key,
        value: value || "", // Send empty string if undefined/null
      }));

      return axios.post(
        `${process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || "http://localhost:3001"}/api/settings`,
        { settings: settingsArray },
        { withCredentials: true } // Important for admin auth
      );
    },
    onSuccess: () => {
      setMessage({ type: "success", text: "Settings updated successfully! The site has been revalidated." });
      queryClient.invalidateQueries({ queryKey: ["global-settings"] });
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    },
    onError: (error) => {
      console.error("Save settings error:", error);
      setMessage({ type: "error", text: "Failed to save settings. Please try again." });
    },
  });

  const onSubmit = (data: SettingsFormValues) => {
    setMessage(null);
    mutation.mutate(data);
  };

  if (isLoading) {
    return <div className="p-8">Loading settings...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Global Site Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-brands fa-whatsapp text-green-500"></i>
                  </div>
                  <input
                    {...register("whatsapp_number")}
                    type="text"
                    placeholder="+91 98765 43210"
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Includes country code. Used for the floating WhatsApp button.
                </p>
                {errors.whatsapp_number && (
                  <p className="mt-1 text-sm text-red-500">{errors.whatsapp_number.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Add more sections here later (e.g., Social Links, Footer Info) */}

          <div className="pt-4 flex items-center justify-end">
            <button
              type="button"
              onClick={() => reset()}
              className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`px-6 py-2 rounded-lg text-white font-medium transition-all shadow-md hover:shadow-lg ${
                mutation.isPending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:transform active:scale-95"
              }`}
            >
              {mutation.isPending ? (
                <span className="flex items-center">
                  <i className="fas fa-circle-notch fa-spin mr-2"></i> Saving...
                </span>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>

        {/* Status Message Toast */}
        {message && (
          <div
            className={`fixed bottom-8 right-8 px-6 py-4 rounded-lg shadow-xl text-white font-medium flex items-center animate-in slide-in-from-bottom-5 fade-in duration-300 ${
              message.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <i className={`mr-3 fas ${message.type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}`}></i>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
