import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login } from "../pages";

export function Render () {
  return (
    <Routes >
      <Route path="/login" element={<Login />}/>
      <Route path="/cadaster" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<Navigate to="/login" replace />}/>
    </Routes>
  )
}
