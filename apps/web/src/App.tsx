
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-6">
      <Toaster position="top-right" richColors />

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Laundry Management System
        </h1>
        <p className="text-muted-foreground">
          Welcome to our laundry management application.
        </p>
      </div>

      <div className="flex gap-3">
        <Button onClick={() => toast.success("Notification berhasil!")}>
          Test Success
        </Button>

        <Button
          variant="outline"
          onClick={() => toast.error("Terjadi kesalahan!")}
        >
          Test Error
        </Button>
      </div>
    </main>
  );
}

export default App;
