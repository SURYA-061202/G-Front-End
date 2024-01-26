import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useState } from "react"
import { useEffect } from "react"

function Home(){
    const [userName, setUserName] = useState('');

  // Assume you have a user object stored in localStorage after successful login
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name) {
      setUserName(storedUser.name);
    }
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Welcome {userName}!</h2>
        {/* Other content for the home page */}
      </div>
    </div>
  );
}
export default Home;