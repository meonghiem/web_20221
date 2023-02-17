import Layout from "../../../layout";
import Button from "../../../components/button";
import Table from "../../../components/table";
import Calendar from 'public/calendar.png'
// import { data } from "../../../Test";
import './index.css'
import {  useEffect, useState } from "react";
import axios from 'axios'
// import {employeeID, type} from '../../../storage'

const employeeID = localStorage.getItem("employeeId");
const type = localStorage.getItem("type");

let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const column = [
    {
      title: 'Request date',
      key: 'requestDate',
    },
    {
      title: 'Type',
      key: 'leaveType',
    },
    {
      title: 'From',
      key: 'leaveFrom',
    },
    {
      title: 'To',
      key: 'leaveTo',
    },
    {
        title: 'Day count',
        key: 'dayCount'
    },
    {
      title: 'Reason',
      key: 'reason',
    },
    {
      title: 'Status',
      key: 'approvalStatus',
    },
    {
      title: 'Detail',
      key: 'button',
    }
]

const Tab = {
    parent: "Request",
    child: undefined
}

const url = `http://localhost/restful_php_api/api/furlough/getDayoff.php?id=${employeeID}`;

export default function LeaveRequest({page_data}) {

    const [data, setData] = useState("none");
    const [count, setCount] = useState(0);
    useEffect(() => {
        // getNow()
        getCount()
        getData({
            day: "All",
            month: 'All',
            year: (new Date()).getFullYear()
        })
        // getData()
    }, [])

    function getData(date) {
        // console.log(url + `/getAttendance.php?id=${employeeID}&day=${date.day}&month=${date.month}&year=${date.year}`);
        // let sendData = {id: employeeID, ...date}
        axios.get(url + `&command=get&day=${date.day}&month=${date.month}&year=${date.year}`)
        .then(res => {
            console.log(res)
            if(res.data.data)
                setData( res.data.data )
            else setData("none")
        })
        .catch(error => console.log(error))
    }

    function getCount() {
        // console.log(url + `/getAttendance.php?id=${employeeID}&day=${date.day}&month=${date.month}&year=${date.year}`);
        // let sendData = {id: employeeID, ...date}
        axios.get(url + `&command=count`)
        .then(res => {
            
            console.log(res)
            if(res.data)
                setCount( res.data )
            else setCount(0)
        })
        .catch(error => console.log(error))
    }

    function showChoose() {
        document.getElementById("dateChoose").hidden = false;
    }

    function hideChoose() {
        document.getElementById("dateChoose").hidden = true
    }

    function printDateChoice(from, to) {
        var list = [];
        list.push(<option selected>All </option>)
        for(let i = from; i <= to; i++)
            list.push(<option selected>{i} </option>)
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
    return (
        <Layout tab={Tab} content={
            <div className="requestContent">
                <div style={{
                    fontSize: "2rem",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    color: "#004b8f",
                }}>

                    <div id="chooseRequest" onClick={showChoose} >
                        <div style={{width: "80%", textAlign: "center",  padding: "1rem"}}>Choose date</div>
                        <div style={{width: "19%", textAlign: "right", padding: "1rem"}}> <img alt="Calendar" src={Calendar} style={{width: "3rem"}}/> </div>
                    </div>

                    <div id="dateChoose" hidden={true}>
                        <div id="choosing">
                            Choose date <br/> <br/>
                            <select name="day" id="day">
                                { printDateChoice(1, 31) }
                            </select> /

                            <select name="month" id="month">
                                {printDateChoice(1, 12)}
                            </select> /

                            <select name="year" id="year">
                                { printDateChoice(1990, 2023) }
                            </select>

                            <br/> <br/>

                            <Button btnStyle={{width: "30%", height: "20%", fontSize: "3rem"}} btnType="light" children="Submit" onClick={checkDate} id="chooseDone"></Button>
                            <Button btnStyle={{width: "30%", height: "20%", fontSize: "3rem"}} btnType="light" children="Cancel" onClick={hideChoose} id="chooseDone"></Button>
                        </div>

                    </div>

                    <div style={{alignItems: "center",  width: "25%", padding: "2rem"}}>
                        <Button btnType="dark" children="New Request" btnStyle={{width: "100%", height: "4.5rem", fontSize: "1.5rem"}}>

                        </Button>
                    </div>

                    <div style={{width: "40%", textAlign: "right"}}>
                        Day left: {count} of 12 | {12 - count} days left
                    </div>
                    
                </div>
                

                <div>
                    <Table tableHead={column} data={data}>

                    </Table>
                </div>
            </div>
            }
        >

        </Layout>
    );
}