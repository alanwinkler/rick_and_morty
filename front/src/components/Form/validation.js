


const validation = ({username, password}) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = new RegExp("[0-9]");
    const errors = {};
    if (!regexEmail.test(username)){
        errors.username = 'El nombre de usuario tiene que ser un email';
    }
    if (!username){
        errors.username = 'Se requiere un nombre de usuario';
    }
    if (username.length > 35){
        errors.username = 'El usuario no puede tener más de 35 caracteres';
    }
    if (!regexPass.test(password)){
        errors.password = 'La contraseña debe tener al menos un número';
    }
    if (password.length < 6 || password.length > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    return errors;
}

export default validation;