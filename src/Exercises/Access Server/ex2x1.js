/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import todosUtil from "./todos_util";
import getUserFullData from "./utils";
import ListGroup from 'react-bootstrap/ListGroup';

function Ex2x1Comp({userId}) {
    const [userDetails, setuserDetails] = useState(null);
    const [todoTitle, setTodoTitle] = useState(null);
    const [toggleTasks, setToggleTasks] = useState(false);

    useEffect(() => {
        getDetails();
    })
    
    const getDetails = async () => {
        let firstLetter;
        let userFullDetails = await getUserFullData(userId);
        setuserDetails({...userDetails,
        name: userFullDetails.name,
        email: userFullDetails.email,
        firstPostTitle: userFullDetails.firstPostTitle,
        userTodos: userFullDetails.userTodos
        });   

        firstLetter = userFullDetails.name[0];
        if(firstLetter ==='E' || firstLetter==='e'){
            let todosTitles = await todosUtil.getAllUserTodos(userId);
            setTodoTitle(todosTitles);
        }
        else{
            setTodoTitle(userFullDetails.userTodos);
        }

    }

    return ( <div>
               
        {userDetails? 
            <div className="">        
            <h2>⚜User: {userDetails.name}</h2>
               <div className="mt-3 mx-3">
                    <div><i>Email: {userDetails.email}</i></div> 
               </div>
               <div className="mt-3 mx-3">
                    <button onClick = {()=>{
                        setToggleTasks(!toggleTasks)
                    }}>Tasks</button>
               </div>
            </div>: <div>Please enter a user's ID</div>
        }
        {userDetails && toggleTasks && <div className="mt-3 mx-4">
            <div>

            {todoTitle && todoTitle.length<=5? 
                <h2>First five todos:</h2>: 
                <h2>All todos:</h2>
            }

            {
                todoTitle && 
                <ListGroup className={`${todoTitle && todoTitle.length > 5 ? 'scroll-window': ''}`} as={'ol'} numbered>
                    {
                        todoTitle.map((item, i)=>{
                            return <ListGroup.Item className="" as={'li'} key={i}>{item}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            }
        </div>
        </div>}
    </div> );
}

export default Ex2x1Comp;