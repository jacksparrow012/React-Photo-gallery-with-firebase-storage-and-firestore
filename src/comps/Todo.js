import React, { useState } from 'react';
import { projectFirestore } from "../firebase/Config"
import firebase from "firebase"
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Modal, Button, Input } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    paper: {
        // position: 'absolute',
        width: 400,
        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        boxShadow: "2px 2px #888888",
        padding: theme.spacing(2, 4, 3),
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: " translate(-50%, -50%)",
        maxWidth: "100%",
        maxHeight: "100%"
    },
}))

const Todo = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")

    const updateTodos = () => {
        projectFirestore.collection('todos3').doc(props.todo3.id).set({
            todo3: input
        }, { merge: true })
        setOpen(false)
    }
    return (

        <>
            <Modal
                open={open}
            // onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Hi i am modal</h1>
                    <Input placeholder={props.todo3.todo3} value={input} onChange={(event) => setInput(event.target.value)} /> *
                    <Button disabled={!input} variant="contained" color="Primary" onClick={updateTodos}>Update Todo</Button>
                </div>
            </Modal>


            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemText primary="Todo" secondary={props.todo3.todo3} />
                            <Button color='secondary' variant="contained" onClick={e => setOpen(true)}>Edit</Button>

                            <Button onClick={event => {
                                projectFirestore.collection("todos3").doc(props.todo3.id).delete()
                            }} variant="contained" color="secondary">Delete</Button>

                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Name" secondary={props.todo3.name} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primarty="Your comment" secondary={props.todo3.textArea} />
                        </ListItem>
                    </List>
                </CardContent>

            </Card>
        </>

    );
};

export default Todo;