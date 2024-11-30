import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { userName } from "../api/userData";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../store/slices/UserSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const handleAddUser = (payload) => {
    dispatch(adduser(payload));
  };

  const data = useSelector((state) =>{
    return state.users;
  })
  console.log(data);
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={() => handleAddUser(userName()) }>Add New Users</button>
        </div>
        <ul>
         {data.map((user,index) =>{
           return <li key={index} style={{margin:'2px',border:'2px solid green'}}>{user}</li>
         })}
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
