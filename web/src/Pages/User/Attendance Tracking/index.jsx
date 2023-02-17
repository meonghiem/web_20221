import Layout from "../../../layout";
import Table from '../../../components/table';
import Button from "../../../components/button";
import Calendar from 'public/calendar.png'
import './index.css'
import axios from 'axios'

import {  useEffect, useState } from "react";

let username = localStorage.getItem('username')

let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// const api = axios.create({baseURL: 'http://localhost:8080'});
const employeeID = localStorage.getItem("employeeId")
const url = `http://localhost/restful_php_api/api/attendance/getAttendance.php?id=${employeeID}`;

const Tab = {
    parent: "Attendance",
    child: undefined
}

const column = [
    // {
    //     title: "ID",
    //     key: "attendanceId"
    // },
    {
      title: 'Date',
      key: 'date',
    },
    {
      title: 'In',
      key: 'inTime',
    },
    {
      title: 'Out',
      key: 'outTime',
    },
    {
      title: 'Our early reason',
      key: 'outEarlyReason',
    },
    {
      title: 'Work Time',
      key: 'workTime',
    },
    {
      title: 'Status',
      key: 'status',
    },
    {
      title: 'Edit',
      key: 'button',
    }
]

// let date = {
//     day: "All",
//     month: 'All',
//     year: (new Date()).getFullYear()
// };


export default function AttendanceTracking() {

    const [data, setData] = useState("none");
    const [now, setNow] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    useEffect(() => {
        getNow()
        getData({
            day: "All",
            month: 'All',
            year: (new Date()).getFullYear()
        })
    }, [])


    function getData(date) {
        // console.log(url + `/getAttendance.php?id=${employeeID}&day=${date.day}&month=${date.month}&year=${date.year}`);
        // let sendData = {id: employeeID, ...date}
        axios.get(url + `&command=search&day=${date.day}&month=${date.month}&year=${date.year}`)
        .then(res => {
            // console.log(res)
            if(res.data.data)
                setData( res.data.data )
            else setData("none")
        })
        .catch(error => console.log(error))
    }

    function getNow() {
        // console.log(url + `/getAttendance.php?id=${employeeID}&day=${date.day}&month=${date.month}&year=${date.year}&command=now`);
        axios.get(url + `&command=now`)
        .then(res => {
            // console.log(res)
            setNow({
                today: res.data['today'],
                thisMonth : res.data['thisMonth']
            })
        })
        .catch(error => console.log(error))
    }

    function getWorkTime(Time) {
        let time = parseInt(Time);
        let hour = Math.round(time / 60);
        let minute = time % 60;

        return `${hour}:${minute > 10 ? minute: '0' + minute}`;
    }

    function showChoose() {
        document.getElementById("dateChoose").hidden = false;
    }

    function hideChoose() {
        document.getElementById("dateChoose").hidden = true
    }

    function printDateChoice(from, to, type) {
        var list = [];
        for(let i = from; i <= to; i++) {
            if(     ( i == (new Date()).getFullYear() && type === "year" )
                ||  ( i == (new Date()).getMonth() && type === "month" )
                ||  ( i == (new Date()).getDay() && type === "day" )
            )
                list.push(<option selected>{i} </option>)
            else list.push(<option>{i} </option>)
        }
        if(type !== "year")
            list.push(<option>All </option>)
        return list;
    }
    function checkLeepYear(year) {
        let leepYear = 0;
        if(year % 4 === 0) {
            if(year % 100 === 0) {
                if(year % 400 === 0)
                    leepYear = 1;
            }
            else
                leepYear = 1;
        }
        return leepYear;
    }


    function checkDate() {
        var D = document.getElementById("day");
        var day = D.options[D.selectedIndex].value;
    
        var Y = document.getElementById("year");
        var year = Y.options[Y.selectedIndex].value;
    
        var M = document.getElementById("month");
        var month = M.options[M.selectedIndex].value;
    
        var thisMonth = dayOfMonths[month];
        if(checkLeepYear(year) === 1 && month === 2) thisMonth = 29;
        if(day > thisMonth) {
            alert("Invalid date");
            return false
        }
        hideChoose();
    
        let date =  {
            day: day,
            month: month,
            year: year
        };
        getData(date);

    }

    // console.log(data);
    return (
        <Layout tab={Tab} content={
            <div style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                padding: "1rem",
                color: "#004b8f",
                // fontSize: "2rem"
            }}>
                <div style={{
                    fontSize: "2rem",
                    display: "flex"
                }}>
                    
                    <div id="choose" onClick={showChoose}>
                        <div style={{width: "80%", textAlign: "center",  padding: "1rem"}}>Choose date</div>
                        <div style={{width: "19%", textAlign: "right", padding: "1rem"}}> <img alt="Calendar" src={Calendar} style={{width: "2rem"}}/> </div>
                    </div>

                    <div style={{
                        width: "25vw",
                        textAlign: "right"
                    }}>
                        Today:<br/>
                        This month:
                    </div>

                    <div style={{
                        width: "8vw",
                        textAlign: "right"
                    }}>
                        {getWorkTime(now['today'])} <br/>
                        {getWorkTime(now['thisMonth'])}
                    </div>

                    <div id="dateChoose" hidden={true}>
                        <div id="choosing">
                            <h3>Choose date </h3>
                            <select name="day" id="day">
                                { printDateChoice(1, 31, "day") }
                            </select> /

                            <select name="month" id="month">
                                {printDateChoice(1, 12, "month")}
                            </select> /

                            <select name="year" id="year">
                                { printDateChoice(2019, (new Date()).getFullYear() + 1, "year") }
                            </select>

                            <br/> <br/>

                            <Button btnStyle={{width: "30%", height: "20%", fontSize: "3rem"}} btnType="light" children="Submit" onClick={checkDate} id="chooseDone"></Button>
                            <Button btnStyle={{width: "30%", height: "20%", fontSize: "3rem"}} btnType="light" children="Cancel" onClick={hideChoose} id="chooseDone"></Button>
                        </div>

                    </div>
                </div>
                <div>
                    <Table tableHead={column} data={data}></Table>
                </div>
            </div>
            }
        >
        </Layout>
    );
}