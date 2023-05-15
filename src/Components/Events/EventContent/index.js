import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PIC from "../../../assets/images/image 3.png"
import { Col, Row } from 'react-bootstrap';


const EventContent = () => {
    const [userData , setUserData] = useState([]);
  const[ind, setIndex ] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
   useEffect(() => {
    fetchRecords(1);
  }, []);

  console.log(ind, totalPages, loading, pages, setPages)

    const url = "https://admin.uiss.patrickmamsery.works";

  const fetchRecords = async (pages) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    await axios
      .get(`${url}/api/events?page=${pages}`, {
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
  

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const suffix = getNumberSuffix(day);
  
  return `${day}${suffix} ${monthName} ${year}`;
}

const getNumberSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}
  return (
    <div className='event_container' style={{background: "#FABD18"}}>
        <div>
            <h2 style={{textAlign: "center"}}>Upcoming Events</h2>
        </div>
        <div>
        <Row style={{padding: "10px"}}>
        {userData.map((card) => (
          <Col  md={4} key={card.id} style={{marginLeft: "10px", width: "315px", height: "500px", color: "#fff"}}>
            <div className='card' style={{height: "450px", background: "#000"}}>
                    <div style={{width: "100%", height: "200px"}}>
                        <img src={card.image === null? PIC: card.image} style={{height: "200px", width: "100%"}} alt=''/>
                    </div>
              <div>
                <span>{formatDate(card.startDate)}</span>
                <span  style={{position: "relative", float: "right"}}>
                  <img src={Location} alt=''/>
                  {card.venue}
                </span>
              </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button style={{position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "#FABD18", border: "none", borderRadius: "2px"}}>Register</button>
            </div>
             
            </Col>
        ))}
      </Row>
      </div>
    </div>
  )
}

export default EventContent