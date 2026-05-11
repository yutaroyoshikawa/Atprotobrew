import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
          <Router />
        </AppQueryProvider>
      </UIProvider>
    </AppI18nProvider>
  );
}

function Router() {
  const { authState, logout, login } = useOAuth();

  if (authState.status === "loading") {
    return (
      <div className="min-h-screen bg-sky-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (authState.status === "unauthenticated") {
    return <AuthGate onRequestLogin={login} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen bg-sky-50 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Launcher
                client={authState.client}
                identifier={authState.identifier}
                onLogout={logout}
              />
            </Suspense>
          }
        />
        <Route
          path="/store"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen bg-sky-50 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Store
                client={authState.client}
                identifier={authState.identifier}
              />
            </Suspense>
          }
        />
        <Route path="/store/:id" element={<StoreItemDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
