import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import useRegister from "@/hooks/auth/useRegister";
import {
  registerSchema,
  type RegisterSchema,
} from "@/Schema/feature 1/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const { mutate, isPending } = useRegister();

  const handleRegister = (values: RegisterSchema) => {
    mutate(values, {
      onSuccess: () =>
        navigate("/verify-email", {
          state: { email: values.email },
        }),
    });
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="w-[400px] mx-auto mt-20 border border-gray-200 rounded-xl p-8 space-y-4 shadow-sm">
        <h1 className="text-2xl font-semibold">Create your Laundrix account</h1>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {formState.errors.name && (
          <p className="text-red-500 text-sm">
            {formState.errors.name.message}
          </p>
        )}
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {formState.errors.email && (
          <p className="text-red-500 text-sm">
            {formState.errors.email.message}
          </p>
        )}
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Registering..." : "Create account"}
        </Button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}
