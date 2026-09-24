import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import routerProvider, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { dataProvider } from "@/providers/data.ts";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "@components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import Dashboard from "@pages/dashboard";
import { BookIcon, GraduationCap, HomeIcon } from "lucide-react";
import "./App.css";
import { Layout } from "@components/refine-ui/layout/layout";
import SubjectsList from "@pages/subjects/subjectsList";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <Refine
            dataProvider={dataProvider}
            notificationProvider={useNotificationProvider()}
            routerProvider={routerProvider}
            options={{
              title: {
                text: "Classroom",
                icon: <BookIcon className="size-5" />,
              },
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "yNPMvt-96cLYV-PR1cgk",
            }}
            resources={[
              {
                name: "dashboard",
                list: "/",
                meta: { label: "Dashboard", icon: <HomeIcon /> },
              },
              {
                name: "subjects",
                list: "/subjects",
                create: "/subjects/create",
                meta: { label: "Subjects", icon: <BookIcon /> },
              },
              {
                name: "classes",
                list: "/classes",
                create: "/classes/create",
                meta: { label: "Classes", icon: <GraduationCap /> },
              },
            ]}
          >
            <Routes>
              <Route
                element={
                  <Layout>
                    <Outlet />
                  </Layout>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="subjects">
                  <Route index element={<SubjectsList />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
            <Toaster />
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
