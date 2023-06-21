import React, { useEffect, useState } from 'react';
import '../src/Components/UserTable.css'
const UserTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  const renderTableHeader = () => {
    return (
      <tr>
        <th style={{color:'crimson'}}><marquee behavior="slide" direction="right to left" width= 60>Serial No</marquee></th>
        <th>Full Name</th>
        <th>Email Address</th>
        <th>Phone Number</th>
        <th style={{color:'crimson'}}><marquee behavior="slide" direction="left to right" width= 60>Street</th>
      </tr>
    );
  };
  const renderTableRows = () => {
    return users.map((user, index) => (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone.slice(0,13)}</td>
        <td>{user.address.street}</td>
      </tr>
    ));
  };
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};
export default UserTable;
