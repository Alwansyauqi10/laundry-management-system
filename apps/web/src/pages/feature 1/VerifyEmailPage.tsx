import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useVerifyEmail from "@/hooks/auth/useVerifyEmail";
import {
  verifyEmailSchema,
  type VerifyEmailSchema,
} from "@/Schema/feature 1/verifyEmail";

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const registeredEmail = location.state?.email || "";
  const { mutate, isPending } = useVerifyEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailSchema>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      email: registeredEmail,
    },
  });

  const handleVerify = (values: VerifyEmailSchema) => {
    mutate(
      {
        email: values.email,
        code: values.code,
        password: values.password,
      },
      {
        onSuccess: () => navigate("/login"),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(handleVerify)}
      className="w-[400px] mx-auto mt-20 border border-gray-200 rounded-xl p-8 space-y-4 shadow-sm"
    >
      <h1 className="text-2xl font-semibold">Verify your email</h1>

      <p className="text-sm text-gray-500">
        Enter the 6-digit code sent to your email and create your password.
      </p>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="code">6-digit verification code</Label>
        <Input
          id="code"
          inputMode="numeric"
          maxLength={6}
          placeholder="123456"
          {...register("code")}
        />
        {errors.code && (
          <p className="text-red-500 text-sm">{errors.code.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Verifying..." : "Verify email"}
      </Button>

      <p className="text-sm text-center">
        Already verified?{" "}
        <Link to="/login" className="text-blue-600">
          Log in
        </Link>
      </p>
    </form>
  );
}
