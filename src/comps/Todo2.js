import React, { useState } from 'react';
import { projectFirestore } from "../firebase/Config"
import firebase from "firebase"
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Modal, Button, Input } from '@material-ui/core'
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

const Todo2 = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [input2, setInput2] = useState("")

    const updateTodos = () => {
        projectFirestore.collection('todos4').doc(props.todo3.id).set({
            todo4: input2
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
                    <Input placeholder={props.todo3.todo4} value={input2} onChange={(event) => setInput2(event.target.value)} /> *
                    <Button disabled={!input2} variant="contained" color="Primary" onClick={updateTodos}>Update Todo</Button>
                </div>
            </Modal>


            <List>
                <ListItem>
                    <ListItemText primary="Todo" secondary={props.todo3.todo4} />
                    <Button color='secondary' variant="contained" onClick={e => setOpen(true)}>Edit</Button>

                    <Button onClick={event => {
                        projectFirestore.collection("todos4").doc(props.todo3.id).delete()
                    }} variant="contained" color="secondary">Delete</Button>

                </ListItem>

            </List>
        </>

    );
};

export default Todo2;