import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Userlist from '../component/Userlist';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response => {
            setUsers(Response.data);
        })
    },[]);

    return (
        <>
            <h1>Users</h1>
            <Userlist users={users}/>
        </>
    );
};

export default Users;