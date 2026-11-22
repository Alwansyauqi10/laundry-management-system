import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { toast } from "sonner";
import axios from "axios";
import type { RegisterSchema } from "@/Schema/feature 1/register";

async function registerUser(values: RegisterSchema) {
  const response = await api.post("/auth/register", values);
  return response.data;
}

function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Registration failed";
  }
  return "Something went wrong. Please try again.";
}

export default function useRegister() {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => toast.success("Check your email to verify your account."),
    onError: (error) => toast.error(getErrorMessage(error)),
  });
}
