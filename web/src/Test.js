// import './App.css';
// import Button from './components/button'
// import IconButton from './components/iconButton';
// import Logo192 from 'public/logo192.png'
import Table from './components/table'
import AppTab from './layout/app-tab';
// import Sidebar from './layout/app-sidebar';

const data = [];
for (let i = 0; i < 30; ++i) {
  data.push({
    key: i.toString(),
    day: 'Monday',
    date: '13-02-2023',
    in: '09:54',
    out: '16:54',
    work_time: '5.39',
    status: 'done',
    button: 'Update',
  })
}

const column = [
  {
    title: 'Day',
    key: 'id',
  },
  {
    title: 'Date',
    key: 'location_name',
  },
  {
    title: 'In',
    key: 'description',
  },
  {
    title: 'Out',
    key: 'status',
  },
  {
    title: 'Work Time',
    key: 'work_time',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: '',
    key: 'comment',
  }
]

const tabName = "My Profile";
const childName = "Salary check";

function Testing() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* <Button>
            This is a button
          </Button> */}
        </p>
        <p>
          {/* <IconButton children={"<p>Nothing<\p>"} icon={Logo192}>
          </IconButton> */}
        </p>
      {/* <Table tableHead={column} data={data}></Table> */}
      </header>
      <div className='App-content'>
        <div>
        Hello
        <AppTab tabName={tabName} childName={childName}> </AppTab> <br/>
        </div>
        {/* <Sidebar></Sidebar> */}
        <Table tableHead={column} data={data}></Table>
      </div>
      
    </div>
  );
}



const userInfo = {
  username: "username", // tất nhiên k trùng
  password: "password", // sẽ hash r mới lưu
  userId: "1",          // tự động tăng
  status: "active",     // active / unactive
  employeeId: "001",    // 

  avatarUrl: "url",     // link đến vị trí file ảnh lưu chỗ khác
  name: "name",         // full name
  gender: "male",       // male / female / secret
  dob: "1/1/2001",
  birthplace: "Hanoi",
  email: "email@email.com",
  phone: "012345689",
  address: "Address",

  jobTitle: "Title",    // vị trí
  userType: "User",     // User / Admin
  jobDes: "IT help desk",// mô tả ngắn gọn
  department: "IT",     
  skill: "...",
  hiredDate: "1/1/2022",
  office: "Hanoi",
  education: "BachKhoa University",
  terminationDate: "--------",
  performanceReview: "10",
  language: "Vietnamese, Englist",
}

const attendance = {
  day: "Monday",    // Thứ
  date: "7/2/2023", // Ngày tháng
  in: "8:00",       // Ấn In để Checkin
  out: "17:00",     // sau 17h tự động out, nếu overtime phải ấn In lại, overtime có thể Out bất kì lúc nào
  earlyReason: "",  // lí do nếu out trước 17h
  type: "official/overtime",  // làm chính thức hoặc overtime(max đến 21h)
}

const furlough = {
  employeeId: "001",        
  requestDate: "1/1/2022",
  leaveType: "Paid/Unpaid",   // nghỉ có lương hoặc k lương
  reason: "Real reason",      // lí do nghỉ
  status: "approved/disapproved/pending",
  leaveFrom: "",  // chọn nhiều ngày liên tiếp hoặc chỉ 1 ngày
  leaveTo: ""     // 
};

const CompanyDayoff = {   /// ngày nghỉ của công ty (k lương)
  date: "1/1/2021",
  reason: "Tet duong"
}

/// Hàm getPersonalInfo theo employeeId
// get ra
/*
avatarUrl: 
name:
gender:
dob:
birthplace:
email:
phone: 
address: 
*/

/// Hàm getStaffInfo theo employeeId
// get ra, trả về cả totalWorkDays và furloughDays
let totalWorkDays = "30";     // count từ attendance
let furloughDays = "11";      // count từ furlough
/*
jobTitle:
userType:
jobDes: 
department:
skill:
hiredDate: 
office: 
education:
terminationDate:
performanceReview: 
language:
*/

/// Hàm getAttendance theo ngày/tháng/năm 
// get ra bảng attendance, trả về cả CompanyDayoff theo ngày/tháng/năm đó


/// Hàm getFurlough
// get ra bảng furlough

/// Hàm setPersonalInfo
// nhận vào object personalInfo gồm :
/*
employeeId:
avatarUrl: 
name:
gender:
dob:
birthplace:
email:
phone: 
address: 
*/
// update lên cơ sở dữ liệu


export default Testing;
export {column, data};
