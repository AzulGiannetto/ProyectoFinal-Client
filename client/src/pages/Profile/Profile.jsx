import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {

    return (
        
        <div>
            <img src={User.picture} alt={User.name} />
            <h2> {User.name}</h2>
            <p>Email {User.email}</p>
        </div>
    )
}
const handleClickDelete = () =>{

}

const handleClickSend = () => {

}

const handleClickEdit = () => {

}



const IconLabelButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={handleClickDelete} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button onClick={handleClickSend} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <Button onClick={handleClickEdit} variant="contained" endIcon={<EditIcon />}>
                Edit
            </Button>
        </Stack>
    );
}

export default (Profile, IconLabelButtons);





