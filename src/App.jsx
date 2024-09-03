import React, { useEffect, useState } from 'react';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRepos from './Components/UserRepos';


const App = () => {
  const [data, setData] = useState({});
  const[followers,setFollowers]=useState([]);

  const fetchUser=async()=>{
    const userInfo = await fetch("https://api.github.com/users/hiteshchoudhary");
    const userInfoJson = await userInfo.json();
    setData(userInfoJson);

    console.log(userInfoJson);
  }
  const fetchFollowers = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary/followers')
    const responseJson= await response.json();
    setFollowers(responseJson);
    console.log(responseJson);
  }

  useEffect(() => {
    fetchUser(); // Fetch user data when the component mounts
    fetchFollowers();
  }, []);
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Profile info={data} followers={followers} />} />
      <Route path="/:login" element={<UserRepos />} />  
    </Routes>
  </Router>
  )
}

export default App;
