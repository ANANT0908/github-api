import React, { useEffect, useState } from 'react';

const UseEffectAPI = () =>{
    
    const[users,setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json()); 
    }

    useEffect(() => {
        getUsers();
    },[]);

    return(
        <>
           <h2>List of Github Users</h2>
           <div className="container">
               <div className=" text-center">
               
                        {
                        users.map((currEl) => {
                                    return(
                            <div>
                                <div className=" mt-5">
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"> <img src={currEl.avatar_url} className="rounded" width="155"/></div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{currEl.login}</h4><span className="textLeft">Web Developer</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"> <span className="articles">ID</span> <span className="number1">{currEl.id}</span></div>
                                                    <div className="d-flex flex-column"> <span className="followers">Node ID</span> <span className="number2">{currEl.node_id}</span></div>
                                                    <div className="d-flex flex-column"> <span className="rating">Type</span> <span className="number3">{currEl.type}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                            })
                        }
               </div>
           </div>
        </>
    );
}

export default UseEffectAPI;