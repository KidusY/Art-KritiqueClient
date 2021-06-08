import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { storage } from '../../firebase/firebase';
import axios from '../../axios/axios';

function EditProfileModal(props) {
    const [file, setFile] = React.useState();
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const [displayName, setDisplayName] = React.useState(state.LoginReducer.displayName || JSON.parse(sessionStorage.getItem('userInfo')).displayName);
    const [bio, setBio] = React.useState(state.LoginReducer || JSON.parse(sessionStorage.getItem('userInfo')).bio);
    const onFileSelect = (e) => {
        setFile(e.target.files[0])
    }
    const updateProfile = (e) => {
        e.preventDefault();
        const { displayName, bio } = e.target;
        if (!file) {
            const postData = {
                displayName: displayName.value,
                bio: bio.value,
            }
            axios.put(`/users/profile/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`, postData)
                .then(() => {
                    dispatch({
                        type: 'UpdateInfo',
                        payload: {
                            displayName: displayName.value,
                            bio: bio.value
                        }
                    })
                    //const userInfo = { ...JSON.parse(sessionStorage.getItem('userInfo')), bio, displayName }

                    sessionStorage.setItem('userInfo', JSON.stringify(state.LoginReducer));
                })
                .catch(err => console.log(err))

            return
        }
        const uploadTask = storage.ref(`images/${state.LoginReducer.displayName}`).put(file);
        uploadTask.on("state_changed", snapshot => { }, error => console.log(error),
            () => {
                storage.ref('images')
                    .child(state.LoginReducer.displayName)
                    .getDownloadURL()
                    .then(imgLink => {
                        const postData = {
                            displayName: displayName.value,
                            bio: bio.value,
                            profileImage:imgLink,
                        }
                        axios.put(`/users/profile/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`, postData)
                            .then(() => {
                                dispatch({
                                    type: 'UpdateInfo',
                                    payload: postData
                                })
                                sessionStorage.setItem('userInfo', JSON.stringify(state.LoginReducer));
                            })
                            .catch(err => console.log(err))
                    })
            }

        )

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Profile Info
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={updateProfile}>
                    <Form.Label column sm="2">
                        Display Name
                     </Form.Label>
                    <Form.Control type="text" name="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                    <Form.Label column sm="2">
                        Bio
                     </Form.Label>
                    <Form.Control type="text" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                    <Form.Label column sm="2">
                        Profile Image
                     </Form.Label>
                    <Form.Control type="file" onChange={onFileSelect} />
                    <br />
                    <Button className="mt-3" type="submit">Update</Button>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditProfileModal;