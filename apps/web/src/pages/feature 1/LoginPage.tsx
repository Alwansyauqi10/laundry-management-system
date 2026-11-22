import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "@/hooks/auth/useLogin";
import { loginSchema, type LoginSchema } from "@/Schema/feature 1/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();
  const handleLogin = (values: LoginSchema) =>
    mutate(values, { onSuccess: () => navigate("/") });
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="w-[400px] mx-auto mt-20 border border-gray-200 rounded-xl p-8 space-y-4 shadow-sm">
        <h1 className="text-2xl font-semibold">Welcome back to Laundrix</h1>
        <Label htmlFor="login-email">Email</Label>
        <Input id="login-email" type="email" {...register("email")} />
        {formState.errors.email && (
          <p className="text-red-500 text-sm">
            {formState.errors.email.message}
          </p>
        )}
        <Label htmlFor="login-password">Password</Label>
        <Input id="login-password" type="password" {...register("password")} />
        {formState.errors.password && (
          <p className="text-red-500 text-sm">
            {formState.errors.password.message}
          </p>
        )}
        <div className="text-right text-sm">
          <Link to="/forgot-password" className="text-blue-600">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Logging in..." : "Log in"}
        </Button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
