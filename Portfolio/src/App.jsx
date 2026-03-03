import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Loader from "./Loader";
import Hero from "./Hero";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const heroAnimation = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? "translateY(-100px)" : "translateY(0px)",
    config: { tension: 170, friction: 26 },
  });

  return (
    <>
      {loading && <Loader />}
      {!loading && <animated.div style={heroAnimation}> <Home/></animated.div>}
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </>
  );
}