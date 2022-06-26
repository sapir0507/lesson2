/* eslint-disable no-unused-vars */
import { useState } from "react";
import Ex2x1Comp from "./ex2x1";
import usersUtil from "./users_utils";
import './ex1.css';


function Ex2Comp() {
    const [userId, setUserId] = useState(null)

    const getallUserIds = async()=>{
        let ids = await usersUtil.getAllUsersIds();
        setUserId(ids);
    }

    const showAllUsersDetails = async ()=>{
        getallUserIds();
    }

    return ( <div>
        <div className="mt-4">
             <input type="button" value="get email and username by userid" onClick={() => {showAllUsersDetails() }}/>
        </div>
        <hr className="mb-0"/>
        <div className="full-scroll-window">
        {
            userId && userId.length && userId.map((user) => {
                return(
                <div className="border p-4 my-4">
                    <Ex2x1Comp key={user} userId={user}></Ex2x1Comp>
                </div>)

            })
        }
        </div>
    </div> );
}

export default Ex2Comp;