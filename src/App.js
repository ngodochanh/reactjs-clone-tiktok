import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Lặp qua mảng publicRoutes để trả về Route */}
          {publicRoutes.map((route, index) => {
            // Lấy component
            let Page = route.component;
            // Trả vể Route
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
