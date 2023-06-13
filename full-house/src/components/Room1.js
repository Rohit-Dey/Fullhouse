import {useState, useEffect} from 'react'
import VideoComponent from './Video'
import './Room.css'
import CountShow from './CountShow'

const Room1 = () => {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetchData();
    //     }, 1000)
    //     fetchData();
    // }, [])

    // const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://localhost:5000/room1');
    //       const json = await response.json();
    //       setData(json)
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };

    return(
        <div className='rooms'>
            <VideoComponent />
            <div className='countdiv'><CountShow count={306}/></div>
            
        </div>
    )
}

export default Room1;

