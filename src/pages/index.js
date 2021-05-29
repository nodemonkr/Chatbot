import React from 'react'
import "../css/index.css"

const Home = () => {
    return (
        <div 
            style={{
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center',
                height: '90vh'
            }}
        >
            <button>Hover me !</button>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
