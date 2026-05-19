import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";
import { AtPassportCallback } from "./components/auth/AtPassportCallback";
import { AuthGate } from "./components/auth/AuthGate";
import { ChannelDetail } from "./components/launcher/ChannelDetail";
import { Launcher } from "./components/launcher/Launcher";
import { Store } from "./components/store/Store";
import { StoreItemDetail } from "./components/store/StoreItemDetail";
import { useOAuth } from "./hooks/useOAuth";
import { UIProvider } from "@atprotobrew/common/core/components/UIProvider";
import { AppQueryProvider } from "@atprotobrew/common/core/components/AppQueryProvider";
import { getAppQueryClient } from "@atprotobrew/common/core/modules/appQuery";
import { AppI18nProvider } from "@atprotobrew/common/core/components/AppI18nProvider";
import type { CatalogLoader } from "@atprotobrew/common/core/types/i18n";

const appQueryClient = getAppQueryClient();

const webCatalogLoader: CatalogLoader = async (lang) => {
  switch (lang) {
    case "ja":
      return (await import("../locales/ja/messages")).messages;
    case "en":
      return (await import("../locales/en/messages")).messages;
  }
};

export default function App() {
  return (
    <AppI18nProvider extraLoaders={[webCatalogLoader]}>
      <UIProvider>
        <AppQueryProvider client={appQueryClient}>
          <BrowserRouter>
            <Suspense
              fallback={
                <div className="min-h-screen bg-sky-50 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Router />
            </Suspense>
          </BrowserRouter>
        </AppQueryProvider>
      </UIProvider>
    </AppI18nProvider>
  );
}

function Router() {
  const oauthValues = useOAuth();

  return (
    <Routes>
      <Route
        path="/atpassport/callback"
        element={<AtPassportCallbackRoute authCtx={oauthValues} />}
      />

      <Route element={<ProtectedLayout authCtx={oauthValues} />}>
        <Route path="/" element={<LauncerRoute />} />
        <Route path="/store" element={<StoreRoute />} />
        <Route path="/store/:id" element={<StoreItemDetail />} />
        <Route path="/channel/:id" element={<ChannelDetailRoute />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

type AuthContext = ReturnType<typeof useOAuth>;

function ProtectedLayout({ authCtx }: { authCtx: AuthContext }) {
  if (authCtx.authState.status === "loading") {
    return (
      <div className="min-h-screen bg-sky-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (authCtx.authState.status === "unauthenticated") {
    return <AuthGate onRequestLogin={authCtx.login} />;
  }

  return <Outlet context={authCtx} />;
}

function AtPassportCallbackRoute({ authCtx }: { authCtx: AuthContext }) {
  return <AtPassportCallback login={authCtx.login} />;
}

function LauncerRoute() {
  const { authState, logout } = useOutletContext<AuthContext>();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <Launcher
      client={authState.client}
      identifier={authState.identifier}
      onLogout={logout}
    />
  );
}

function StoreRoute() {
  const { authState } = useOutletContext<AuthContext>();

  if (authState.status !== "authenticated") {
    return null;
  }

  return <Store client={authState.client} identifier={authState.identifier} />;
}

function ChannelDetailRoute() {
  const { authState } = useOutletContext<AuthContext>();

  if (authState.status !== "authenticated") {
    return null;
  }

  return <ChannelDetail client={authState.client} />;
}
