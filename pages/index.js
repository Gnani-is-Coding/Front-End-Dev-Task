import Image from "next/image";

import Header from "@/components/Header"
import Dashboard from "./dashboard";
import ProtectedRoute from '../components/ProtectedRoute'


export default function Home() {
  return (
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
  );