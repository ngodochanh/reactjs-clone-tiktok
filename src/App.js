import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Lặp qua mảng publicRoutes để trả về Route */}
          {publicRoutes.map((route) => {
            // Mặc định layout là DefaultLayout
            let Layout = DefaultLayout;

            // route có layout là null (không có layout)
            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              // route có layout
              Layout = route.layout;
            }

            // Lấy component
            let Page = route.component;

            // Nếu route có các route con
            if (route.children) {
              return (
                <Route
                  key={route.component}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                >
                  {/* Lặp qua mảng route con */}
                  {route.children.map((childRoute) => {
                    let Comp = childRoute.component;
                    return <Route key={childRoute.component} path={childRoute.path} element={<Comp />} />;
                  })}
                </Route>
              );
            }

            // Trả vể Route
            return (
              <Route
                key={route.component}
                path={route.path}
                element={
                  // Layout wrapper page (là content)
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
