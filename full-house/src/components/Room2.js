import {useState, useEffect} from 'react'
import VideoComponent from './Video'
import './Room.css'
import CountShow from './CountShow'
import LimitPopup from './LimitPopup'

const Room2 = () => {
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const vidpath = require('../videos/Video.mp4')

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 1000)
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/room2');
          const json = await response.json();
          setData(json)
          console.log(json)
        } catch (error) {
          console.error(error);
        }
    };
    
    const text = "Room 2 limit exceeded"
    return(
        <div className='rooms'>
           
            <VideoComponent src={vidpath}/>
            <div className='countdiv'><CountShow count={data.currentCount}/></div>
            
        </div>
    )
    
}

export default Room2;

