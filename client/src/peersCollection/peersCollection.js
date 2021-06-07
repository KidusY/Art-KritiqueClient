import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import Peers from '../peers/peers';
import api from '../axios/axios';
import axios from '../axios/axios';
function PeersCollection(props) {
    const [peersInfo, setPeersInfo] = useState(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: props.peers.length < 3 ? props.peers.length + 1 : 3,
        slidesToScroll: props.peers.length < 3 ? props.peers.length + 1 : 3,

    };
        
    useEffect(() => {
        const peerData = {
            peerList: props.peers
        }
        //gets
        api.post('/users/allpeers/info', peerData ).then(res => setPeersInfo(res.data)).catch(err => console.log(err));

    }, [props.peers])

    return (
        <div>
            {peersInfo &&
                <Slider {...settings}>
                    {
                        peersInfo.map((peerInfo,i) => <Peers key={i} img={peerInfo.profileImage} />)
                    }
                    <div className="peers addPeersFromTimelineBtn"><i className="fas fa-user-plus text-center"></i></div>
                </Slider>
            }
        </div>
    )
}

export default PeersCollection
