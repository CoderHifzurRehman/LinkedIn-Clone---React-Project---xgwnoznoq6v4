import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../CSS/ConnectionsComponent.css";

export default function ConnectionsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return users.length > 1 ? (
    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.id ? (
          <></>
        ) : (
          <ConnectedUsers
            currentUser={currentUser}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        );
      })}
      <a href="/connections"><button className="show-more-btn">Show more</button></a>
    </div>
  ) : (
    <div className="connections-main">No Connections to Add!</div>
  );
}
