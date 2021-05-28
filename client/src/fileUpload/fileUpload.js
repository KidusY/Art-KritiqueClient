import React, { useState } from 'react';
import axios from '../axios/axios';
import './fileUpload.css';
import { storage } from '../firebase/firebase';

function FileUpload(props) {
    const [file, setFile] = useState(null);
    const [fileUploading, setFileUploading] = useState('')
    const fileSelectHandler = (e) => {
        setFile(e.target.files[0]);
    }
    const uploadFile = (e) => {
        e.preventDefault();
        const { title, } = e.target;
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on("state_changed", snapshot => { }, error => console.log(error),
            () => {
                storage.ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then(imgLink => {
                        const postData = {
                            title: title.value,
                            postedBy: JSON.parse(sessionStorage.getItem('userInfo')).userId,
                            imgLink,
                        }
                        axios.post('/posts', postData).then(res => {

                            if (res.data) {
                                setFileUploading('Done');
                                props.setShowUploadFileModal(false);
                            }
                        }).catch(err => console.log(err))
                    })
            }

        )
    }
    return (
        <div onSubmit={uploadFile} className="fileUploadContainer">
            <form className="fileUpload">
                <input type="text" name="title" placeholder="title" />
                <input type="file" onChange={fileSelectHandler} />
                <button className='btn' type="submit">Click</button>
                <p> {fileUploading}</p>
            </form>

        </div>
    )
}

export default FileUpload

