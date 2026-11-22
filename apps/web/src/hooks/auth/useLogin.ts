import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import api from "@/lib/axios";
import type { LoginSchema } from "@/Schema/feature 1/login";

async function loginUser(values: LoginSchema) {
  const response = await api.post("/auth/login", values);
  return response.data;
}

function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Login failed";
  }
  return "Something went wrong. Please try again.";
}

export default function useLogin() {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => toast.success("Login successful"),
    onError: (error) => toast.error(getErrorMessage(error)),
  });
}
