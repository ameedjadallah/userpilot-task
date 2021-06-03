import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { format } from "date-fns";

import TableComponent from "./TableComponent";
import UserListItem from "./UserListItem";

function UsersList({ gender, nat }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const tableHeadItems = [
    "user",
    "Contact Information",
    "Registration Date",
    "Country/Post Code",
  ];

  const handleChangePage = (event, newPage) => {
    getUsers(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const getUsers = useCallback(
    (page) => {
      let apiUrl = `https://randomuser.me/api?results=${rowsPerPage}&page=${
        page + 1
      }&gender=${gender}&nat=${nat}`;

      axios.get(apiUrl).then((res) => {
        setUsers(res.data.results);
      });
    },
    [gender, nat,rowsPerPage]
  );

  useEffect(() => {
    getUsers(0);
  }, [getUsers, gender, nat]);

  return (
    <TableComponent
      tableHead={tableHeadItems}
      count={users.length}
      rowsPerPage={rowsPerPage}
      colSpan={4}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
    >
      {users.map((user, index) => {
        return (
          <UserListItem
            key={index}
            id={user.id.value}
            name={`${user.name.first} ${user.name.last}`}
            thumbnail={user.picture.thumbnail}
            location={`${user.location.state}. ${user.location.city},${user.location.street.name} ${user.location.street.number}`}
            email={user.email}
            phone={user.phone}
            registeredDate={format(
              new Date(user.registered.date),
              "MMMM dd, yyyy"
            )}
            registeredTime={format(new Date(user.registered.date), "hh:mm a")}
            country={user.location.country}
            postcode={user.location.postcode}
          />
        );
      })}
    </TableComponent>
  );
}

UsersList.defaultProps = {
  gender: "",
  nat: "",
};

UsersList.propTypes = {
  gender: PropTypes.string,
  nat: PropTypes.string,
};

export default UsersList;
