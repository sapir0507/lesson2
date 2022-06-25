import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import getUserDetailsByUserId from "./users_utils";
import getUserTodos from "./todos_util";
import './ex1.css';

function Ex1ParentComp() {
    const [userDetails, setuserDetails] = useState(null);
    const [userID, setUserID] = useState(null);
    const [todoTitle, setTodoTitle] = useState(null)

    const getDetails = async () => {
        let details = await  getUserDetailsByUserId(userID)
        setuserDetails({...userDetails,
        name:details.name,
        email: details.email
        })
        if(details.name[0]==='E' || details.name[0]==='e'){
            let todosTitles = await getUserTodos(userID)
            setTodoTitle(todosTitles);
        }
        else{
            setTodoTitle(null)
        }

    }

    return ( <div>
        <div className="mt-4">
            UserId: <input type="text" name="userId" id="userId" onChange={(e) => { setUserID(e.target.value) }}/>
        </div>
        <hr />
        <input type="button" value="get email and username by userid" onClick={() => { getDetails() }}/>
        
        <hr />
        <h2>User:</h2>
        {userDetails? 
            <div className="m-2">
                <div>Name: {userDetails.name} </div>
                <div>Email: {userDetails.email}</div> 
            </div>: <div>Please enter a user's ID</div>
        }
        {userDetails?<div>
            <div>
            <h2>todos:</h2>

            {
                todoTitle? <ListGroup className="scroll-window" as={'ol'} numbered>
                {
                    todoTitle.map((item, i)=>{
                        return <ListGroup.Item as={'li'} key={i}>{item}</ListGroup.Item>
                    })
                }
            </ListGroup>:<div className="m-5">🔹 Your Name doesn't start with an E or an e SO NO TODOS FOR YOU!</div>
            }
        </div>
        </div>:<div></div>}
    </div> );
}

export default Ex1ParentComp;