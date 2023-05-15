import Layout from "./components/Layout"
import Start from "./components/mainpage/Start";
import { Routes,Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";
import ProfileLayout from "./components/profile/ProfileLayout";
import Survey from "./components/Survey";
function App() {
  return(
    
  <Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Start/>}/>
  <Route path="profile" element={<ProfileLayout/>}>
  <Route index element={<Profile/>}/>
  <Route path="edit" element={<EditProfile/>}/>
  <Route path="survey" element={<Survey/>}/>
    </Route>
  </Route>
  </Routes>

  )
}

export default App;
