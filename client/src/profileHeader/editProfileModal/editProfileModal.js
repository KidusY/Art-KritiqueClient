import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { storage } from '../../firebase/firebase';
import axios from '../../axios/axios';
function EditProfileModal(props) {
    const [file, setFile] = React.useState();
    const [displayName, setDisplayName] = React.useState(props.userInfo.displayName ||'');
    const [bio, setBio] = React.useState(props.userInfo.bio  || '');
    const onFileSelect = (e) => {
        setFile(e.target.files[0])
    }
    const updateProfile = (e) => {
        e.preventDefault();
        console.log("sdfsdf")
        const { displayName, bio } = e.target;
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on("state_changed", snapshot => { }, error => console.log(error),
            () => {
                storage.ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then(imgLink => {
                        console.log(imgLink);

                        const postData = {
                            displayName: displayName.value,
                            bio: bio.value,
                            imgLink,
                        }
                        axios.put(`/users/profile/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`, postData)
                            .then(res => console.log(res.data))
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
                    <Form.Control type="text" name="displayName" value={displayName} onChange={(e)=>setDisplayName(e.target.value)} />
                    <Form.Label column sm="2">
                        Bio
                     </Form.Label>
                    <Form.Control type="text" name="bio" value={bio} onChange={(e)=>setBio(e.target.value)} />
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