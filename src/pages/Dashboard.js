import React from "react";
import { FaUsers } from "react-icons/fa";
import D1 from "../components/assets/Images/doctor/D1.png";
import DoctorCard from "../components/cards/DoctorCard";
import TimeDateChart from "../components/charts/TimeDateChart";

function Dashboard() {
  const doctors = [
    {
      name: "Dr. John Doe",
      qul: "MBBS",
      image: D1,
      isAvailable: true,
    },
    {
      name: "Dr. Jane Smith",
      qul: "MBBS",
      image: D1,
      isAvailable: false,
    },
    {
      name: "Dr. Jane Smith",
      qul: "MBBS",
      image: D1,
      isAvailable: false,
    },
    {
      name: "Dr. Jane Smith",
      qul: "MBBS",
      image: D1,
      isAvailable: false,
    },
    {
      name: "Dr. Jane Smith",
      qul: "MBBS",
      image: D1,
      isAvailable: false,
    },
  ];

  return (
    <div className="dashboard_page">
      <div className="white_bg_area">
        <div className="row ">
          <div className="section_title">
            <h2>Appointments Summery</h2>
          </div>
          <div className="col-lg-3">
            <div className="card card_1">
              <div className="text">
                <h1>20</h1>
                <p>Total Appointments</p>
              </div>
              <span className="card_icons">
                <FaUsers className="icons" />
              </span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card_2">
              <div className="text">
                <h1>20</h1>
                <p>Booked Appointments</p>
              </div>
              <span className="card_icons">
                <FaUsers className="icons" />
              </span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card_3">
              <div className="text">
                <h1>20</h1>
                <p>Canceled Appointments</p>
              </div>
              <span className="card_icons">
                <FaUsers className="icons" />
              </span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card_4">
              <div className="text">
                <h1>20</h1>
                <p>Completed Appointments</p>
              </div>
              <span className="card_icons">
                <FaUsers className="icons" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8">
          <div className="white_bg_area">
            <TimeDateChart />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="top_doctor_list">
            <div className="header">
              <h2>Top Doctor List</h2>
            </div>
            <div className="doctor_list">
              {doctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;