import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <main className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <Navbar />
        
        <AnimatedRoutes />

        <Footer />
        <FloatingWhatsApp />
      </main>
    </BrowserRouter>
  );
}
