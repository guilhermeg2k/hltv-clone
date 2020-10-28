import React from 'react';
import TopBar from './components/topBar';
import './style.css';
    
function Home(){
    return (
        <div>
            <TopBar/>
            <div id="body">
                <div id="left-ad">
                    left
                </div>
                <main id="main">
                    main
                </main>
                <div id="right-ad">
                    right
                </div>
            </div>
        </div>
    )
}

export default Home;