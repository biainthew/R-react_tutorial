import React from 'react';

const Userlist = ({users}) => {
    return (
        <div className='container'>
            {users.map((user)=>{
                return(
                    <div className="card" key={user.id}>
                        <div className="card-body">
                            {user.name}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Userlist;