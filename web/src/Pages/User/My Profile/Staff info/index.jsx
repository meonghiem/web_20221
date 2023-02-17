import Layout from '../../../../layout'
import './index.css'
import axios from 'axios'
import {  useEffect, useState } from "react";
// import {type, employeeID} from "../../../../storage";
// import Button from '../../../../components/button';
const url = "http://localhost/restful_php_api/api/staff_info";

const employeeID = localStorage.getItem("employeeId");
const type = localStorage.getItem("type");


let Data = {
    jobTitle: "CEO",
    userType: "User",
    jobDes: "IT help desk",
    employeeId: "001",
    department: "IT",
    skill: "...",
    hiredDate: "...",
    office: "...",
    education: "...",
    terminationDate: "...",
    performanceReview: "...",
    language: "...",
    date: "...",
    detail: "...",
    history: "...",
    action: "...",
}

export default function StaffInfo() {

    const [data, setData] = useState({});
    useEffect(() => {getData()}, [])
    const Tab = {
        parent: "My Profile",
        child: "Staff info"
    }
    
    function getData() {
        axios.get(url + `/show.php?employeeId=${employeeID}`)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(error => console.log(error))
    }

    return ( data ?
        <Layout tab={Tab} content={
            <div className='sInfo_outside'>
                <table className='staffInfoTable' rules='none'>
                    <tr className="infoRow ">
                        <td className="sRowStart"> <b>Work summary</b> </td>
                    </tr>

                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Job Title</b> <br /> {data.jobTitle} </td>
                        <td className="staffInfoCell"> <b>User Type</b> <br /> {type} </td>
                        <td className="staffInfoCell"> <b>Job Description</b> <br /> {data.jobDescription} </td>
                    </tr>
                    
                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Employee ID</b> <br /> {data.employeeId} </td>
                        <td className="staffInfoCell"> <b>Department</b> <br /> {data.department} </td>
                        <td className="staffInfoCell"> <b>Skill</b> <br /> {data.skill} </td>
                    </tr>

                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Hired Date</b> <br /> {data.hiredDate} </td>
                        <td className="staffInfoCell"> <b>Office</b> <br /> {data.office} </td>
                        <td className="staffInfoCell"> <b>Education</b> <br /> {data.education} </td>
                    </tr>

                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Termination Date</b> <br /> ---------- </td>
                        <td className="staffInfoCell"> <b>Performance Review</b> <br /> {data.perfomanceReview} </td>
                        <td className="staffInfoCell"> <b>Language</b> <br /> {data.language} </td>
                    </tr>

                    <tr className="infoRow sRowLast">
                        <td className="sRowStart"> <b>Work summary 2</b> </td>
                    </tr>

                    <tr className='infoRow'>
                        <td className="staffInfoCell"> <b>Worked date</b> <br /> {data.date} </td>
                        <td className="staffInfoCell"> <b>Detail</b> <br /> {data.detail} </td>
                    
                    </tr>

                    <tr>
                        <td className="staffInfoCell"> <b>History</b> <br /> {data.history} </td>
                        <td className="staffInfoCell"> <b>Action</b> <br /> {data.action} </td>
                    </tr>


                </table>
            </div>
            }
        >

        </Layout> : <button onClick={getData}>Refresh</button>
    );
}