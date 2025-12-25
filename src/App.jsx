import './style.css';
import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { Dev } from "./components/Dev";
import { Skill } from "./components/Skill";
import { Profile } from "./components/Profile";
import { MiniMemo } from "./components/MiniMemo";
import { Tobaccost } from "./components/Tobaccost";
import { Playbass } from "./components/playbass";
import { Footer } from "./components/Footer";
import { Bottom } from "./components/Bottom";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

export const App = () => {

  const location = useLocation();

  return (

      <div className="container">

        <Loading />

        <Header />

        <AnimatePresence>

        <Routes location={location} key={location.pathname}>

          <Route path='/' element={<Dev />} />
          <Route path='/Skill' element={<Skill />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/MiniMemo' element={<MiniMemo />} />
          <Route path='/Tobaccost' element={<Tobaccost />} />
          <Route path='/playbass' element={<Playbass />} />

        </Routes>

        </AnimatePresence>

        <Footer />

        <Bottom />



      </div>

  )

}
