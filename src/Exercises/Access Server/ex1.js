import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import todosUtil from "./todos_util";
import './ex1.css';
import getUserFullData from "./utils";

function Ex1ParentComp() {
    const [userDetails, setuserDetails] = useState(null);
    const [userID, setUserID] = useState(null);
    const [todoTitle, setTodoTitle] = useState(null)

    const [firstPostTitle, setFirstPostTitle] = useState(null)

    const getDetails = async () => {
        let firstLetter;
        let userFullDetails = await getUserFullData(userID);
        setuserDetails({...userDetails,
        name: userFullDetails.name,
        email: userFullDetails.email,
        firstPostTitle: userFullDetails.firstPostTitle,
        userTodos: userFullDetails.userTodos
        })        

        firstLetter = userFullDetails.name[0];
        if(firstLetter ==='E' || firstLetter==='e'){
            let todosTitles = await todosUtil.getAllUserTodos(userID)
            setTodoTitle(todosTitles);
            setFirstPostTitle(null);
        }
        else{
            setTodoTitle(userFullDetails.userTodos)
            setFirstPostTitle(userFullDetails.firstPostTitle)
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
            {todoTitle.length<=5? 
                <h2>First five todos:</h2>: 
                <h2>All todos:</h2>
            }
            {
                todoTitle? <ListGroup className="scroll-window" as={'ol'} numbered>
                {
                    todoTitle.map((item, i)=>{
                        return <ListGroup.Item as={'li'} key={i}>{item}</ListGroup.Item>
                    })
                }
            </ListGroup>:<div className="m-5">🔹 Your Name doesn't start with an E or an e SO NO TODOS FOR YOU!</div>
            }
            {firstPostTitle?
            <Container>
                <h4 className="mt-5">first post title</h4>
                <div className="">🔹 {firstPostTitle}</div>
            </Container>:<Container>
                
            </Container>}
        </div>
        </div>:<div></div>}
    </div> );
}

export default Ex1ParentComp;