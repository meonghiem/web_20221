import { Routes, Route, Navigate } from 'react-router-dom'
import AttendanceTracking from '../Pages/User/Attendance Tracking'
import PersonalInfo from '../Pages/User/My Profile/Personal info'
import StaffInfo from '../Pages/User/My Profile/Staff info'
import LeaveRequest from '../Pages/User/Leave Request'
import Notfound from '../Pages/Error'

const User = () =>{
    return (
        <Routes>
        <Route path="/" element={ <Navigate to={'/attendance'} />} />
        <Route path="/login" element={ <Navigate to={'/attendance'} />} />
        <Route path='/attendance/*' element={<AttendanceTracking />} />
        <Route path='/myProfile' element={<PersonalInfo />} />
        <Route path='/myProfile/staffInfo' element={<StaffInfo />} />
        <Route path='/request/*' element={<LeaveRequest />} />
        <Route path="*" element={<Notfound></Notfound>}/>

        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register_user_info" element={<RegisterUserInfo />} />
        <Route path="password_forgot" element={<PasswordForgot />} />
        <Route path="notes_14" element={<Note1_4 />} />
        <Route path="notes_pre" element={<NotesPre />} />
        <Route path="menu_pre" element={<MainMenuPre />} />
        <Route path="menu_post" element={<MainMenuPost />} />
        <Route path="setting" element={<Setting />} />
        <Route path="question/:page" element={<Question />} />
        <Route path="twitter_share" element={<TwitterShare />} />
        <Route path="message_history" element={<MessageHistory />} />
        <Route path="character" element={<Character />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/user/404" replace />} /> */}
      </Routes>
    )
}

export default User