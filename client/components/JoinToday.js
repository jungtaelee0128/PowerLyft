import React from 'react';
import '../styles/styles.css'; 
import { useEffect } from 'react';

const CLIENT_ID = '40204467aaefb63f724d';


const JoinToday = () => {
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParams = urlParams.get('code');
        console.log('hi', codeParams)
    }, []);
    
    function loginWithGitHub () {
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID);
    }
    return (
        <section id="JoinToday" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="bold-heading">
                        <h2> Join Today! </h2>
                    </div>
                    <button onClick = {loginWithGitHub}>
                        Login With Github
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JoinToday;
