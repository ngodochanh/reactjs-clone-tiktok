import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        {/* Lặp qua mảng publicRoutes để tạo các Route */}
        {publicRoutes.map((route) => {
          // Nếu route.layout là null thì sử dụng Fragment, nếu không có thì mặc định là DefaultLayout
          let Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;

          // Lấy component của trang
          let Page = route.component;

          // Trả về Route
          return (
            <Route
              key={route.component} // Sử dụng route.path làm key để đảm bảo tính duy nhất
              path={route.path}
              element={
                // Layout bọc xung quanh trang (Page là content)
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {/* Lặp qua mảng các route con nếu có */}
              {route.children &&
                route.children.map((childRoute) => {
                  let Comp = childRoute.component;
                  return <Route key={childRoute.component} path={childRoute.path} element={<Comp />} />;
                })}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
