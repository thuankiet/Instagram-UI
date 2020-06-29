import React from "react";

const Profile = () => {
  return (
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
          <h4>Thuan Kiet</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>

      <div className="gallary">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1557037559-bedd47b49aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Profile;
