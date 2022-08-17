import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import "./Profile.css";
import NavBar from "../../components/navbar/NavBar";
import axios from axios

export default function Profile({ Profile }) {

    return (
        <>
            <NavBar />
            <div className="profile">

                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={require('../../assets/fondo.jpg')}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={require('../../assets/person.jpeg')}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Fiorella Carmagnoli</h4>
                            <span className="profileInfoDesc">Bienvenidos a mi perfil!</span>
                        </div>
                    </div>
                    <div className="profileEditButton">

                    </div>
                    <div className='profileDeleteButton'>

                    </div>
                </div>
            </div>
        </>
    );
}

const handleDelete = () => {
    const userId = JSON.parse(window.localStorage.getItem('user'))._id
    axios.delete('http://localhost:8080/auth/:id/${userId}', {
        headers: {
            Authorization: 'Bearer ${window.localStorage.getItem("token") }'
        }
    }).then((res) => {
                if (res.status === 'deleted') {
                    alert('usuario eliminado')
                }
            }).catch((err) => {
                console.log(err)
            })
return (
    <div>
        <button onClick={handleDelete}> Eliminar</button>
    </div>
)
}


const handleEdit = () => {
    const userId = JSON.parse(window.localStorage.getItem('user'))._id
    axios.edit('http://localhost:8080/auth/:id/${userId}', newUserData, {
        headers: {
            Authorization: 'Bearer ${window.localStorage.getItem("token") }'
        }
    }).then((res) => {
                if (res.status === 'edited') {
                    alert('datos editados')
                }
            }).catch((err) => {
                console.log(err)
            })
return (
    <div>
        <button onClick={handleEdit}> Editar </button>
    </div>
)
}
//const Profile = (User) => {

//return (

//<div>
// <img src={User.picture} alt={User.name} />
//<h2> {User.name}</h2>
//<p>Email {User.email}</p>
//</div>
//)
//}






