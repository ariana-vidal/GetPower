import { Route, Routes } from 'react-router-dom';
import Courselist from '../screens/CourseList';
import Login from '../screens/Login';
import Register from '../screens/Register';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/courselist" element={ <Courselist /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}
