import React, { useState } from 'react';
import Avatar from './Avatar';
import ProfileStatus from './ProfileStatus';
import { useNavigate } from 'react-router-dom';

const Profile = ({ info, followers }) => {
  const [repo,setRepo] = useState([]);
  const navigate=useNavigate();
  const handleNavigate = async (login) => {
    navigate(`/${login}`);
  };
  
  

  return (
    <div className='flex flex-col justify-center items-center gap-11 mt-5'>
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
        Github Profile Checker
      </h1>
      <Avatar url={info?.avatar_url} username={info?.login} />
      <ProfileStatus followers={info?.followers} following={info?.following} />
      <div className='flex items-center justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-4 w-full px-4 py-2">
        {followers && followers.map((follower) => (
          <div
            key={follower.id}
            className="flex px-4 py-2 flex-col shadow-md items-start justify-between bg-gray-800 h-[9rem] w-[20rem] rounded-md"
          >
            {/* upper */}
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="border-4 rounded-full border-green-500">
                <img
                  src={follower.avatar_url}
                  alt="avatar"
                  className="w-14 h-14 rounded-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <h1 className="text-base font-bold text-white">{follower.login}</h1>
                <div className="flex flex-row space-x-5">
                  <p className="text-sm font-semibold text-gray-400">
                    Followers: <span className="text-yellow-500">20</span>
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    Following: <span className="text-yellow-500">10</span>
                  </p>
                </div>
              </div>
            </div>

            {/* lower button */}
            <button
              className="self-center mb-3 bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold text-base"
              onClick={() => handleNavigate(follower.login)}
              
            >
              View Repository
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Profile;
