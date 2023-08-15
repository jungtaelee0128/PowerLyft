import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem';

const workoutSection = ({feedUrl}) => {
    const [urls, updateUrls] = useState([]);

    const getFeedUrl = () => {
      const fetchData = async () => {
        try {
          const response = await fetch(feedUrl);
          const data = await response.json();
          updateUrls(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    };
    useEffect(getFeedUrl, [feedUrl]);
    return (
        <section id="workout" className="d-flex align-items-center">
            <div className="container" >
                <div className="row">
                    <p>hi</p>
                    <div id="feed" style={styles.container}>
                        {urls.map((url, index) => (
                        <FeedItem key={index} index={index} url={url} /> // Pass index and url
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
      border: '1px black solid',
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
    },
  };

export default workoutSection;
