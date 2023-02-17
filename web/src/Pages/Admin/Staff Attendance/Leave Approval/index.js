import React from "react";
import Table from "../../../../components/table";
import AppLayout from "../../../../layout";
import { useEffect } from "react";
import axios from "axios";

const LeaveApproval = () => {
  const Tab = {
    parent: "Staff Attendance",
    child: "Leave Approval",
  };
  const data1 = [
    {
      key: "1",
      no: "1",
      // requestType: "Hour Adjustment",
      leaveDateFrom: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "REST",
      time: "01:23",
      reason: "Quên rest",
    },
    {
      key: "2",
      no: "2",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "BACK",
      time: "02:45",
      reason: "Quên back",
    },
    {
      key: "3",
      no: "3",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "4",
      no: "4",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "5",
      no: "5",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "6",
      no: "6",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "7",
      no: "7",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "8",
      no: "8",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "9",
      no: "9",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
    {
      key: "10",
      no: "10",
      requestType: "Hour Adjustment",
      requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
      adjustType: "OUT",
      time: "01:59",
      reason: "Quên out",
    },
  ];

  const column1 = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Request Type",
      dataIndex: "requesType",
      key: "requestType",
    },
    {
      title: "Request Date",
      dataIndex: "requesDate",
      key: "requestDate",
    },
    {
      title: "Adjust Type",
      dataIndex: "adjustType",
      key: "adjustType",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
  ];
  return (
    <AppLayout
      tab={Tab}
      isAdmin={true}
      content={
        <div>
          <div className="table1">
            <div style={{ color: "#004B8F", fontWeight: "500" }}>
              Pending Request
            </div>
            <Table
              tableHead={column1}
              data={data1}
              tableStyle={{ height: "30vh", marginTop: "10px" }}
            />
          </div>
          <div style={{ marginTop: "1.5rem" }} className="table2">
            <div style={{ color: "#004B8F", fontWeight: "500" }}>
              Completed Request
            </div>
            <Table
              tableHead={column1}
              data={data1}
              tableStyle={{ height: "30vh", marginTop: "10px" }}
            />
          </div>
        </div>
      }
    />
  );
};

export default LeaveApproval;
