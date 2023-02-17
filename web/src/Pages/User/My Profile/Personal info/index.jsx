import Button from "../../../../components/button";
import Layout from "../../../../layout";
import './index.css'
import axios from 'axios'
import {  useEffect, useState } from "react";
// import {employeeID} from "../../../../storage";

const employeeID = localStorage.getItem("employeeId")

const url = "http://localhost/restful_php_api/api/personal_info";
const Tab = {
    parent: "My Profile",
    child: "Personal info"
}

export default function PersonalInfo (){

    const [data, setData] = useState({name: "###none###"});
    
    const [noti, setNoti] = useState({});
    useEffect(() => {getData()}, [])

    function getData() {
        axios.get(url + `/show.php?employeeId=${employeeID}`)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(error => console.log(error))
    }
    
    function sendData() {
        axios.post(url + `/update.php`, data)
        .then(res => {
            // console.log(res.data);
            // setData(res.data );
            setNoti(res.data);
        })
        .catch(error => console.log(error))
    }

    function edit(e) {
        alert("edit");
        let array = document.getElementsByClassName("inputBox");
        for(let i = 0; i < array.length; i++) {
            var a = array[i];
            a.disabled = false;
            a.style.border = "1px solid";
        }
    
        let saveBtn = document.getElementById("save");
        saveBtn.hidden = false;
        e.currentTarget.hidden = true;
    }
    
    function save(e) {
        alert("save");
        let array = document.getElementsByClassName("inputBox");
        for(let i = 0; i < array.length; i++) {
            var a = array[i];
            a.disabled = true;
            a.style.border = "0";
        }
        data.employeeId = employeeID
        for(let key in data) {
            console.log(key + " " + document.getElementById(key));
            if(key !== "employeeId" && key !== "imageUrl")
                data[key] = document.getElementById(key).value;
        }
        
        let editBtn = document.getElementById("edit");
        editBtn.hidden = false;
        e.currentTarget.hidden = true;
    
        sendData();
    }

    console.log(data)
    return ( data.name !== "###none###" ? 
        <Layout tab={Tab} content= {
            <div className="p_outside">
                
                <div className="profilePic">
                    <div> <b>Profile Picture </b></div>
                    <div><img id="imageUrl" src={process.env.PUBLIC_URL + data.imageUrl} alt="Some profile pic"></img></div>
                </div>
                <div className="personalInfo">
                    <table className="infoTable" rules="none">
                        <tbody>

                        <tr className="infoRow">
                            <td className="rowStart"> <b>Basic info</b> </td>
                            <td className="infoCell">
                                <Button children="Edit" btnType="light" onClick={edit} id="edit" value="Edit"></Button>
                                <Button children="Save" btnType="light" onClick={save} id="save" value="Save" hidden={true}></Button>
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Name</b> <br /> 
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.name} id="name"/>
                            
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> 
                                <b>Gender </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.gender} id="gender"/>
                            </td>
                            <td className="infoCell"> 
                                <b>Date of birth </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.dateOfBirth} id="dateOfBirth"/>
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> 
                                <b>Birthplace </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.birthplace} id="birthplace"/>
                            </td>
                            <td className="infoCell"> <b>Martital status </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.maritalStatus} id="maritalStatus"/> 
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Email </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.email} id="email"/>
                                </td>
                        </tr>

                        <tr className="infoRow rowLast">
                            <td className="rowStart"> <b>Contact info </b> </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Phone </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.phone} id="phone"/>
                            </td>
                            <td className="infoCell"> <b>Emergency Phone </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.emergencyPhone} id="emergencyPhone"/>
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Address </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.address} id="address"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    

                </div>
            </div>
            }
        >
        </Layout> : <button onClick={getData}>Refresh</button>
    );
    
}