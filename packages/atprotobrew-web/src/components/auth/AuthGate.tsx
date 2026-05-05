import { AuthForm } from "@atprotobrew/common/auth/components/AuthForm";

interface AuthGateProps {
  onRequestLogin: (handle: string) => Promise<void>;
}

export function AuthGate({ onRequestLogin }: AuthGateProps) {
  const handleSubmit = async (handle: string) => {
    const trimmed = handle.trim();

    if (!trimmed) {
      return;
    }

    try {
      await onRequestLogin(trimmed);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full">
        <AuthForm
          onSubmit={async (inputs) => await handleSubmit(inputs.handle)}
        />
      </div>
    </div>
  );
}
