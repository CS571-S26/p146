import { Routes, Route } from 'react-router-dom';
import Chordle from "../pages/Chordle";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";
import Learn from "../pages/Learn";
import Layout from "./Layout";

export default function AppRouting() {

  return <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<Chordle />}/>
        <Route path="help" element={<Help/>}/>
        <Route path="learn" element={<Learn/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </div>
}