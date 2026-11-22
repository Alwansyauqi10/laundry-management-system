import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import api from "@/lib/axios";

type VerifyEmailPayload = {
  email: string;
  code: string;
  password: string;
};

async function verifyEmail(values: VerifyEmailPayload) {
  const response = await api.post("/auth/verify-email", values);
  return response.data;
}

function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Verification failed";
  }
  return "Something went wrong. Please try again.";
}

export default function useVerifyEmail() {
  return useMutation({
    mutationFn: verifyEmail,
    onSuccess: () => toast.success("Email verified. Please log in."),
    onError: (error) => toast.error(getErrorMessage(error)),
  });
}
