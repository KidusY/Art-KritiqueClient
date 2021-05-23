import React from 'react';
import axios from '../axios/axios';
import './fileUpload.css';
// import {google} from 'googleapis';
// import { gapi} from 'gapi-script';
import GooglePicker from 'react-google-picker';

// const CLIENT_ID ='349294232179-q6i7330a6m60eu3t42kcdivnj21aldij.apps.googleusercontent.com';
// const CLIENT_SECRET ='Rli79vH5-dKM33wf5R7p7y9d';
// const REDIRECT_URL ='https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN ='1//04Q3Y1qku5FoxCgYIARAAGAQSNwF-L9Ir9TW99N6wNYb9mgiDVy7u50L1FCzedbTbD-lRgZd8-tyLZlh81ryjY7qBKtjX5xYSy-g';

// const REACT_APP_GOOGLE_DRIVE_API_KEY = 'AIzaSyCUf3l9D1I-aVzu1PlqLB2SalfxTRsJrCQ';
// const REACT_APP_GOOGLE_DRIVE_CLIENT_ID = '349294232179-q6i7330a6m60eu3t42kcdivnj21aldij.apps.googleusercontent.com';

// // Array of API discovery doc URLs for APIs
// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';


// const oauthClient = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URL
// )

// oauthClient.setCredentials({ refresh_token: REFRESH_TOKEN});

// const drive = google.drive({
//     version:'v3',
//     auth:oauthClient

// })

function FileUpload(props) {
    return (
        

            
             
        <GooglePicker clientId={'349294232179-q6i7330a6m60eu3t42kcdivnj21aldij.apps.googleusercontent.com'}
                    developerKey={'349294232179-q6i7330a6m60eu3t42kcdivnj21aldij.apps.googleusercontent.com'}
                    scope={['https://www.googleapis.com/auth/drive.readonly']}
                    onChange={data => console.log('on change:', data)}
                    onAuthFailed={data => console.log('on auth failed:', data)}
                    multiselect={true}
                    navHidden={true}
                    authImmediate={false}
                    viewId={'DOCS'}
                    mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                    createPicker={(google, oauthToken) => {
                        const googleViewId = google.picker.ViewId.DOCS;
                        const uploadView = new google.picker.DocsUploadView();
                        const docsView = new google.picker.DocsView(googleViewId)
                            .setIncludeFolders(true)
                            .setSelectFolderEnabled(true);

                        const picker = new window.google.picker.PickerBuilder()
                            .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                            .addView(docsView)
                            .addView(uploadView)/*DocsUploadView added*/
                            .setOAuthToken(oauthToken)
                            .setDeveloperKey('AIzaSyCUf3l9D1I-aVzu1PlqLB2SalfxTRsJrCQ')
                            .setCallback((data) => {
                                if (data.action === google.picker.Action.PICKED) {
                                    var fileId = data.docs[0].id;
                                    alert('The user selected: ' + fileId);
                                    picker();
                                }
                            });
                        picker.build().setVisible(true);
                    }}>
                    <span>Click here</span>
                    <div className="google"></div>
                </GooglePicker>
               
           

      
    )
}

export default FileUpload

