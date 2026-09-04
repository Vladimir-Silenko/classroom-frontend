import {
  Refine,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import routerProvider, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { dataProvider } from "./providers/data";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "@components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import Dashboard from "@pages/dashboard";
import { BookIcon, HomeIcon } from "lucide-react";
import "./App.css";
import { Layout } from "@components/refine-ui/layout/layout";
import SubjectsList from "@pages/subjects/subjectsList";
import SubjectsCreate from "@pages/subjects/subjectsCreate";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "yNPMvt-96cLYV-PR1cgk",
              }}
              resources={[
                {
                  name: "dashboard",
                  list: '/',
                  meta: {label: 'Home', icon: <HomeIcon />}
                },
                {
                  name: "subjects",
                  list: '/subjects',
                  create: '/subjects/create',
                  meta: {label: 'Subjects', icon: <BookIcon />}
                },
              ]}
            >
              <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                
                <Route index element={<Dashboard />} />
                  <Route path="subjects">
                    <Route index element={<SubjectsList />} />
                    <Route path="create" element={<SubjectsCreate />} />
                  </ Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
