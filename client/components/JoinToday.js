import React from 'react';
import '../styles/styles.css'; 
import { useEffect , useState} from 'react';
import WorkoutSection from './WorkingOutSection';

const CLIENT_ID = '40204467aaefb63f724d';


const JoinToday = () => {
    const [rerender, setRerender] = useState(false);
    const [userData, setUserData] = useState({});
    async function getUserData() {
        await fetch('http://localhost:3000/getUserData', {
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then((response) => {
            return response.json();
        }).then ((data) => {
            console.log('name',data);
            setUserData(data);
        })
    }
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParams = urlParams.get("code");
        console.log('hi', codeParams)

        //local storage
        if(codeParams && (localStorage.getItem("accessToken") === null)) {
            async function getAccessToken() {
                await fetch('http://localhost:3000/getAccessToken?code=' + codeParams, {
                    method: "GET"
                }).then((response) => {
                    return response.json();
                }).then ((data) => {
                    console.log(data);
                    if(data.access_token) {
                        localStorage.setItem('accessToken', data.access_token)
                        setRerender(!rerender);
                        getUserData();
                    }
                })
            }
            getAccessToken();
        }
    }, []);

    function loginWithGitHub () {
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID);
    }
    return (
        <section id="JoinToday" className="d-flex align-items-center">
            <div className="container">
            {localStorage.getItem('accessToken') ? 
            <>
            <WorkoutSection />
            </>
            :
            <>
            </>
            }
                <div className="row">
                    {localStorage.getItem('accessToken') ? 
                    <>
                        {/* <WorkoutSection /> */}
                        <div className="bold-heading">
                            <h2> You are now logged in </h2> 
                        </div>
                        <div className="bold-heading">
                            <h2>  </h2> 
                        </div>
                        {/* <h4>Hey there {userData.login}</h4> */}
                        <button onClick={() => { localStorage.removeItem('accessToken'); setRerender(!rerender); }}>
                            Log out
                        </button>
                        {/* <h3>Get User Data from GITHUB API</h3>
                        <button onClick= {getUserData}>
                            Get User Data
                        </button>
                        {Object.keys(userData).length !==0 ? 
                            <> 
                                <h4>Hey there {userData.login}</h4>
                            </>
                            :
                            <>
                            </>
                        } */}
                    </>
                    :
                    <>
                        <div className="bold-heading">
                            <h2> Join Today! {'\n'}</h2> 
                        </div>
                        <div className="bold-heading">
                            <h3> Create an account with Github to access more!</h3>
                        </div>
                        <div style={styles.buttonContainers}>
                            <button onClick = {loginWithGitHub} styles={styles.signupButton}>
                                Signup With Github
                            </button>
                        </div>
                    </>
                    } 
                </div>
            </div>
        </section>
    );
};

const styles = {
    signupButton: {
        fontFamily: "Jost, sans-serif",
        fontWeight: '500px',
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '8px', // Adjusted padding for shorter width
        width: '200px', // Set a fixed width
        borderRadius: '50px',
        transition: 'background-color 0.5s',
        backgroundColor: '#47b2e4',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    },
    buttonContainers: {
        display: 'flex',
        justifyContent: 'center', // Center the button horizontally
        marginTop: '10px', // Adjust spacing as needed
    },
};

export default JoinToday;
