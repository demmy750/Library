import SignIn from "./signIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword } from "./forgotpassword";
import { Dashboard } from "./dashboard";
import { BookSection } from "./books";
import { Mainvestidetails } from "./mainvestidetails";
import { Members } from "./Members";
import MainMemberCard from "./components/members/mainmembercard";
import { Mainmemberrequest } from "./mainmemberrequest";
import MemberDetails from "./components/members/memberdetails";
import { MemberAccount } from "./MemberAccount";
import { MemberSettings } from "./MemberSettings";
import { Resetpassword } from "./resetpassword";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Filtermodal1 } from "./components/buttons/filtermodal1";
import FilterPanel from "./components/buttons/filterPanel";
// import { Resetpassword } from './resetpassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books/" element={<BookSection />} />
        <Route path="/vesti/:id" element={<Mainvestidetails />} />
        <Route path="/members" element={<Members />} />
        <Route path="/info" element={<MainMemberCard />} />
        <Route path="/request" element={<Mainmemberrequest />} />
        <Route path="/membersetting" element={<MemberSettings />} />
        {/* <Route path='/memberaccount' element={<MemberAccount/>}/> */}
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/filtermodalbutton1" element={<FilterPanel />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
