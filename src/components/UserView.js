import { useEffect, useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    background: "#fff",
    width: "40vw",
    height: "100vh",
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 9999,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      background: "rgba(82, 140, 252, 1)",
      height: 158,
    },
  },
  content: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    marginTop: 90,
  },
  userImage: {
    width: 132,
    height: 132,
    borderRadius: "50%",
  },
  username: {
    fontSize: 18,
  },
  location: {
    color: "#87888C",
    fontSize: 14,
  },
});

function UserView() {
  const classes = useStyles();
  const [user, setUser] = useState();

  const getUser = () => {
    let apiUrl = `https://randomuser.me/api`;

    axios.get(apiUrl).then((res) => {
      setUser(res.data.results[0]);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={classes.container}>
      {user && (
        <div className={classes.content}>
          <img
            src={user.picture.large}
            className={classes.userImage}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h3 className={classes.username}>
            {user.name.first} {user.name.last}
          </h3>
          <div className={classes.location}>
            {user.location.state}. {user.location.city},
            {user.location.street.name} {user.location.street.number}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserView;
