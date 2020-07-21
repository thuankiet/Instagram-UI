import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();

  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserProfile(result);
      });
  }, []);

  return (
    <>
      {userProfile ? (
        <div style={{ maxWidth: "550px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                style={{ width: "160px", height: "160px", borderRadius: "50%" }}
                src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="profile"
              />
            </div>

            <div>
              <h4>{userProfile.user.name}</h4>
              <h5>{userProfile.user.email}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "108%",
                }}
              >
                <h6>{userProfile.posts.length} posts</h6>
                <h6>40 followers</h6>
                <h6>40 following</h6>
              </div>
            </div>
          </div>

          <div className="gallary">
            {userProfile.posts.map((item) => {
              return (
                <img
                  key={item._id}
                  className="item"
                  src={item.photo}
                  alt={item.title}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>loading...!</h2>
      )}
    </>
  );
};

export default Profile;
