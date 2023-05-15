import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PIC from "../../../assets/images/image 3.png"
import { Col, Row } from 'react-bootstrap';
import { Button } from 'antd';

const ProjectContent = () => {
 const [userData , setUserData] = useState([]);
  const[ind, setIndex ] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
   useEffect(() => {
    fetchRecords(1);
  }, []);
  console.log(totalPages, ind, loading)

    const url = "https://admin.uiss.patrickmamsery.works";

  const fetchRecords = async (pages) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    await axios
      .get(`${url}/api/projects?page=${pages}`, {
        headers: {
          Authorization: `Bearer ${token}`
      }})
      .then((res) => {
        console.log(res.data)
        setUserData(res.data.data);
        if(res.data.meta){
          setTotalPages(res.data.meta.total);
          setIndex(res.data.meta.from);
        }
        setLoading(false);
      });
  };
  console.log(userData)
  const handleMoreClick = () => {
    setPages(pages + 1);
  };
  return (
    <div className='event_container' style={{background: "#FABD18"}}>
        <div>
            <h2 style={{textAlign: "center"}}>Our Projects</h2>
        </div>
        <div>
        <Row style={{padding: "10px"}}>
        {userData.map((card) => (
          <Col  md={4} key={card.id} style={{marginLeft: "10px", width: "315px", height: "500px", color: "#fff"}}>
            <div className='card' style={{height: "450px", background: "#000"}}>
                    <div style={{width: "100%", height: "200px"}}>
                        <img src={card.image === null? PIC: card.image} style={{height: "200px", width: "100%"}} alt=''/>
                    </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button style={{position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "#FABD18", border: "none", borderRadius: "2px"}}>View Project</button>
            </div>
             
            </Col>
        ))}
      </Row>
      <Button onClick={handleMoreClick} style={{background: "#FABD18", position: "relative" ,marginLeft: "10px", bottom: "10px", color: "#000"}}> More projects</Button>
      </div>
    </div>
  )
}

export default ProjectContent