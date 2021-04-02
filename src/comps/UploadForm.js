import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
// import { projectFirestore } from "../firebase/Config"
// import firebase from "firebase"
// import Todo from "./Todo"
// import Todo2 from "./Todo2"
// import UserReview from "./UserReview"
const UploadForm = () => {
    // const [todos, setTodos] = useState([])
    // const [todos2, setTodos2] = useState([])
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // const [input, setInput] = useState([]);
    // const [input2, setInput2] = useState([]);
    // const [name, setName] = useState("")
    // const [textArea, setTextArea] = useState("")
    const types = ['image/png', 'image/jpeg', "image/webp", "image/jpg"];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // setTodos([...todos, input])
    //     projectFirestore.collection("todos3").add({
    //         todo3: input,
    //         name: name,
    //         textArea: textArea,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     })
    //     setInput('')
    // }
    // const handleSubmit2 = (e) => {
    //     e.preventDefault()
    //     // setTodos([...todos, input])
    //     projectFirestore.collection("todos4").add({
    //         todo4: input2,

    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     })
    //     setInput('')
    // }
    // useEffect(() => {
    //     projectFirestore.collection("todos3").orderBy("timestamp", "desc").onSnapshot(snapshot => {
    //         // console.log(snapshot.docs.map(doc => doc.data().todo))
    //         setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo3: doc.data().todo3, name: doc.data().name, textArea: doc.data().textArea })))
    //     })
    //     projectFirestore.collection("todos4").orderBy("timestamp", "desc").onSnapshot(snapshot => {
    //         // console.log(snapshot.docs.map(doc => doc.data().todo))
    //         setTodos2(snapshot.docs.map(doc => ({ id: doc.id, todo4: doc.data().todo4 })))
    //     })
    // }, [])
    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
            {/* <div>
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
                <input type="text" placeholder="YOUR NAME" value={name} onChange={(event) => setName(event.target.value)} />
                <textarea type="text" placeholder="Write Something" value={textArea} onChange={(event) => setTextArea(event.target.value)}>

                </textarea>

                <button type="button" onClick={handleSubmit}>Submit</button>
                <input type="text" value={input2} onChange={(event) => setInput2(event.target.value)} />
                <button type="button" onClick={handleSubmit2}>Submit</button>
            </div>
            <ul>
                {todos.map(todo3 => {
                    return <Todo todo3={todo3} />
                })}
                {todos2.map(todo3 => {
                    return <Todo2 todo3={todo3} />
                })}
            </ul>
            <UserReview /> */}
        </div>
    );
}

export default UploadForm;