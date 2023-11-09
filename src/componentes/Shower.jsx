import React from 'react'
import '../hojasDeEstilo/shower.css';


const Shower = (props) => {

return(
    <div className='shower'>
        <div>
            <h4>IP ADDRESS</h4>
            { '192.212.174.101' }
        </div>
        <div>
            <h4>LOCATION</h4>
            { 'Brooklyn, NY 10001' }
        </div>
        <div>
            <h4>TIMEZONE</h4>
            { 'UTC-05:00' }
        </div>
        <div>
            <h4>ISP</h4>
            { 'SpaceX Starlink' }
        
        </div>

    </div>
);

}

export default Shower;