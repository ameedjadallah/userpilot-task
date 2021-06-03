import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  firstVal: {
    color: "#252733",
    fontSize: 14,
  },
  secondVal: {
    color: "#C5C7CD",
    fontSize: 12,
    marginTop: 5,
  },
  userThumbnail: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    marginRight: 24,
  },
  tableRow: {
    "&:hover": {
      background: "rgba(55, 81, 255,0.04)",
      cursor: "pointer",
    },
  },
});

function UserListItem({
  id,
  name,
  thumbnail,
  location,
  email,
  phone,
  registeredDate,
  registeredTime,
  country,
  postcode,
}) {
  const classes = useStyles();
  const history = useHistory();
  const goToUser = (id) => {
    history.push(`/user/${id}`);
  };

  return (
    <TableRow className={classes.tableRow} onClick={() => goToUser(id)}>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <div className="flex">
          <img
            src={thumbnail}
            width={30}
            className={classes.userThumbnail}
            alt={name}
          />
          <div className="">
            <div className={classes.firstVal}>{name}</div>
            <div className={classes.secondVal}>{location}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <div className={classes.firstVal}>{email}</div>
        <div className={classes.secondVal}>{phone}</div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <div className={classes.firstVal}>{registeredDate}</div>
        <div className={classes.secondVal}>{registeredTime}</div>
      </TableCell>
      <TableCell className={classes.tableCell} style={{ width: 160 }}>
        <div className={classes.firstVal}>{country}</div>
        <div className={classes.secondVal}>{postcode}</div>
      </TableCell>
    </TableRow>
  );
}

UserListItem.defaultProps = {
  id:"",
  name: "",
  thumbnail: "",
  location: "",
  email: "",
  phone: "",
  registeredDate: "",
  registeredTime: "",
  country: "",
  postcode: "",
};

UserListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  registeredDate: PropTypes.string,
  registeredTime: PropTypes.string,
  country: PropTypes.string,
  postcode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default UserListItem;
