import React, { useEffect, useState } from "react";
import { getContent } from "./contentful"; // Assume you have a contentful.js file

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from Contentful
    const fetchData = async () => {
      const userContent = await getContent("user"); // Assume 'user' is the content model ID in Contentful
      setUserData(userContent);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          {/* Render other user information */}
        </div>
      )}
    </div>
  );
};

export default UserPage;
