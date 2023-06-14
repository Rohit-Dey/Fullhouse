import {useState, useEffect} from 'react'
import VideoComponent from './Video'
import './Room.css'
import CountShow from './CountShow'
import LimitPopup from './LimitPopup.js'

const Room1 = () => {
    const [data, setData] = useState({});
    const [previousData, setPrevData] = useState({});
    const [show, setShow] = useState(false);
    const vidpath = require('../videos/puppy.mp4')

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 1000)
        fetchData();
    }, [])

    useEffect(()=>{
        setShow(data.currentCount >= data.maxCount);
    },[previousData])
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/room1');
          const json = await response.json();
          
          if(previousData && previousData.currentCount !== json.currentCount || previousData.maxCount !== json.maxCount){
            setData(json);
            setPrevData(json);
          }
        } catch (error) {
          console.error(error);
        }
    };
    const text = "Room 1 limit exceeded"
    return(
        <div className='rooms'>
            {show && <LimitPopup text={text}/>}
            <VideoComponent src={vidpath}/>
            <div className='countdiv'><CountShow count={data.currentCount}/></div>
            
        </div>
    )
}

export default Room1;

