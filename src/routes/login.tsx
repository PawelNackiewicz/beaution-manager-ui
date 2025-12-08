import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LoginForm, useAuth } from "@/features/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/organisms/card/Card";
import { Spinner } from "@/components/ui/atoms/spinner/Spinner";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { user, isLoading, login } = useAuth();

  useEffect(() => {
    if (!isLoading && user?.isLoggedIn) {
      navigate({ to: "/" });
    }
  }, [isLoading, user, navigate]);

  const handleLogin = (email: string) => {
    login(email);
    navigate({ to: "/" });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Spinner className="size-8" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-primary/10 via-background to-secondary/10">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Beaution Manager</CardTitle>
          <CardDescription>
            Zaloguj się, aby zarządzać swoim salonem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm onSubmit={handleLogin} />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Wersja demonstracyjna - podaj dowolny email, aby się zalogować
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
