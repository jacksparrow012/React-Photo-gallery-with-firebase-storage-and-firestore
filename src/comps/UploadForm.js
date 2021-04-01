import React, { useState, useEffect } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ["image/png", "image/jpeg", "image/webp", "image/jpg"]
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        //console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError("")

        } else {
            setFile(null)
            setError("please select an image file (png/ jpeg/jpg/jpg ")
        }
    }
    useEffect(() => {
        console.log(file)
    })
    return (
        <div>
            <form>
                <input type="file" onChange={changeHandler} />
                <div className="output">
                    {error && <div className="error"> {error}</div>}
                    {file && <div className="error">{file.name}</div>}
                </div>
            </form>
        </div>
    );
};

export default UploadForm;