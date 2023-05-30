import React from "react";
import styled from "styled-components";
import logo from '../../../assets/favicon.gif'
import myImage from '../../../assets/supervisor.jpeg'
import dhairya from '../../../assets/dhairya.jpg'
import rohan from '../../../assets/rohan.jpg'
import hritik from '../../../assets/hritik.jpg'
import gaurav from '../../../assets/gaurav.jpg'

const Students = [
  {
    name: "Rohan Bhardwaj",
    rollNo: "LIT2020003",
    desc: "Currently an undergraduate student at Indian Institute of Information Technology, Lucknow (IIITL) pursuing Information Technology.",
    src: rohan
  },
  {
    name: "Gaurav Singh",
    rollNo: "LIT2020018",
    desc: "Currently an undergraduate student at Indian Institute of Information Technology, Lucknow (IIITL) pursuing Information Technology.",
    src: gaurav
  },
  {
    name: "Hritik Singh",
    rollNo: "LIT2020076",
    desc: "Currently an undergraduate student at Indian Institute of Information Technology, Lucknow (IIITL) pursuing Information Technology.",
    src: hritik,
  },
  {
    name: "Dhairya Joshi",
    rollNo: "LCS2020011",
    desc: "Currently an undergraduate student at Indian Institute of Information Technology, Lucknow (IIITL) pursuing Computer Science.",
    src: dhairya,
  },
];
// alt: Photo of student 1
const Aboutpage = () => {
  return (
    <>
        <div style={{display: "flex",
          flexDirection: "row",
          justifyContent: "center",marginBottom:"50px"}}>
            <img src={logo} style={{maxHeight:"300px"}}/>
        </div>
        <div style={{display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",marginLeft:"10%",marginRight:"10%"}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1>Supervisor</h1>
                <h2>Dr Niharika Anand</h2>
            </div>
            <div>
                <img style={{width:"200px"}} src={myImage} alt="Image of Supervisor"/>
            </div>
        </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Heading>About Us</Heading>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {Students.map((student) => {
          return (
            <div>
              <img
                style={{ width: "200px" }}
                src={student.src}
                alt={`Photo of ${student.name}`}
              />
              <h1>{student.name}</h1>
              <h2>{student.rollNo}</h2>
              {/* <p>{student.desc}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Aboutpage;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
