<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-5">
                <div class="menu sidebar">
                    <div class="logo">
                        <router-link to="/add/publication">
                            <a href="">
                                <img src="../assets/images/logo1.png" style="max-width: 200px; height: auto;">
                            </a>
                        </router-link>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <img src="../assets/images/house-icon.png" alt="house-icon">

                                    <router-link to="/add/publication">
                                        <a>Página Principal</a>

                                    </router-link>
                                </li>
                                <li>
                                    <img src="../assets/images/list-icon.png" alt="list-icon">
                                   <router-link to="/inbox">
                                       <a href="#">Bandeja de Entrada</a>
                                   </router-link>
                                </li>
                                <li>
                                    <img src="../assets/images/email-icon.png" alt="email-icon">
                                    <a href="#">Registro</a>
                                </li>
                                <li>
                                    <img src="../assets/images/user-icon.png" alt="user-icon">
                                    <router-link to="/profile">
                                    <a href="#">Perfil</a>
                                    </router-link>
                                </li>
                                <li>
                                    <img src="../assets/images/close-sesion-icon.png" alt="close-sesion-icon">
                                    <router-link to="/login">
                                        <a href="#">Cerrar Sesión</a>

                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 col-sm-7 ml-auto">
                <div class="users-list">
                    <div class="user">
                        <img src="../assets/images/user1.jpg" alt="Foto de Usuario">
                        <p>Armando Casas</p>
                    </div>
                    <div class="user">
                        <img src="../assets/images/user2.jpeg" alt="Foto de Usuario">
                        <p>Pedro Perez</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 col-sm-7 ml-auto">
                <div class="container-box">
                <div class="profile-details">
                    <div class="top-box">
                        <p2>Armando Casas</p2>
                    </div>
                    <div v-if="!showChat" class="profile-info">
                        <div class="specialist-box">
                        <h2>Especialidad</h2>
                        </div>
                        <div class="sub-info">
                            <div class="electrician-box">
                                <p>Electricista</p>
                            </div>
                        </div>
                        <div class="sub-info">
                            <div class="price-box">
                                <p>S/250.00</p>
                            </div>
                        </div>
                        <div class="sub-info">
                            <div class="rating-box">
                                <p>Calificación</p>
                                <div class="rating">
                                    <img src="../assets/images/starb.png" alt="estrellita" class="star-image">
                                    <img src="../assets/images/starb.png" alt="estrellita" class="star-image">
                                    <img src="../assets/images/starb.png" alt="estrellita" class="star-image">
                                    <img src="../assets/images/starb.png" alt="estrellita" class="star-image">
                                    <img src="../assets/images/starg.png" alt="estrellita" class="star-image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="request-box" v-if="!showChat">
                        <h2>¿Deseas aceptar la solicitud de servicio técnico?</h2>
                        <div class="buttons">
                            <button class="blue-button">Posponer</button>
                            <button class="blue-button" @click="showChat = true">Aceptar</button>
                            <button class="blue-button">Rechazar</button>
                        </div>
                    </div>

                    <div v-if="showChat" class="chat-box">
                        <div class="chat-content">
                        <div class="chat-header">
                            <h2>Chat de servicio técnico</h2>
                        </div>
                        <div class="chat-messages">
                            <div class="message outgoing">
                                <p>Hola, ¿en qué puedo ayudarte?</p>
                            </div>
                            <div class="message incoming">
                                <p>Me gustaría programar una visita.</p>
                            </div>
                            <div class="message outgoing">
                                <p>Claro, ¿cuál es tu dirección?</p>
                            </div>
                            <div class="message incoming">
                                <p>Mi dirección es Avenida Principal 123.</p>
                            </div>
                            <div class="message outgoing">
                                <p>Esta bien, ire al lugar indicado.</p>
                            </div>
                            <div class="message incoming">
                                <p>Muchas gracias, lo espero..</p>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>


        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            showChat: false
        };
    }
};
</script>


<style scoped>

ul {
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
}
li {
    display: flex;
    align-items: center;
    padding: 10px;
}
li:hover {
    background-color: skyblue;
}
a {
    text-decoration: none;
    margin: 5%;
    color: #ffffff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}



.row {
    background-color: #ffffff;
    align-items: center; /* Para centrar verticalmente */
    position: relative; /* Para que el .p-inputgroup tenga posición absoluta relativa a este elemento */
}
.menu {
    background-color:#5689C0;
}
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #5689C0;
    overflow-y: auto; /* Permite desplazamiento vertical si el contenido es demasiado grande */
}
.logo{
    text-align: center;
}

.container {
    display: flex;
    flex-wrap: wrap;
}

.row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

/*mio*/

.users-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Alinea los elementos hacia abajo */
    align-items: flex-end; /* Alinea los elementos hacia la derecha */
    margin-right:654px;
    margin-top: 100px;
}

.user {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    background-color: #70aefc;
    width: 170px;
}

.user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.user p {
    margin: 0;
}

.container-box {
    border: 2px solid black; /* Añade bordes negros de 2px */
    border-radius: 5px; /* Agrega esquinas redondeadas */
    padding: 20px; /* Añade un espacio interno de 20px */
    width: 700px; /* Ajusta el ancho del recuadro */
    height: 600px; /* Ajusta la altura del recuadro */
    position: fixed;
    top: 100px; /* Ajusta la posición vertical (eje Y) */
    right: 100px; /* Ajusta la posición horizontal (eje X) */
    z-index: 9999; /* Ajusta el valor del índice de apilamiento */
}

.profile-details {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-left: 10px; /* Ajusta el margen izquierdo */
    position: relative; /* Agrega posición relativa para ajustar elementos hijos */
    display: flex; /* Utiliza flexbox para centrar elementos */
    flex-direction: column; /* Alinea los elementos en columna */
    align-items: center; /* Centra los elementos horizontalmente */
    justify-content: center; /* Centra los elementos verticalmente */
}

.profile-info {
    margin-bottom: 20px;
}

.profile-info h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

.sub-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.rating {
    color: #000000;
    font-size: 20px;
    margin-right: 5px;
}

.request-box {
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 5px;
    width: 400px; /* Ajusta el ancho deseado */
    height: 130px; /* Ajusta la altura deseada */
    position: absolute; /* Agrega posición absoluta para ajustar el recuadro */
    top: 400px; /* Ajusta la posición vertical (eje Y) */
}

.request-box h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.blue-button {
    background-color: #5689C0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.blue-button:hover {
    background-color: #3A6B9E;
}

.specialist-box {
    position: absolute;
    top: 87px; /* Ajusta la posición vertical (eje Y) */
    left: 262px; /* Ajusta la posición horizontal (eje X) */
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}

.electrician-box {
    position: absolute;
    top: 150px; /* Ajusta la posición vertical (eje Y) */
    left: 277px; /* Ajusta la posición horizontal (eje X) */
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}

.price-box {
    position: absolute;
    top: 220px; /* Ajusta la posición vertical (eje Y) */
    left: 285px; /* Ajusta la posición horizontal (eje X) */
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}

.rating-box {
    position: absolute;
    top: 290px; /* Ajusta la posición vertical (eje Y) */
    left: 260px; /* Ajusta la posición horizontal (eje X) */
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}
.top-box {
    background-color: #70aefc;
    padding: 20px;
    border-radius: 5px;
    margin-right: 10px;
    width: 697px; /* Ajusta el ancho deseado */
    height: 70px; /* Ajusta la altura deseada */
    position: absolute; /* Agrega posición absoluta para ajustar el recuadro */
    top: -20px; /* Ajusta la posición vertical (eje Y) */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.star-image {
    width: 20px; /* Ajusta el tamaño deseado */
    margin-top: -15px; /* Ajusta el valor de margen superior según tu necesidad */
}

.chat-box {
    width: 600px; /* Ajusta el ancho deseado */
    height: 500px; /* Ajusta la altura deseada */
    position: absolute;
    right: 30px; /* Ajusta la posición horizontal */
    bottom: -524px; /* Ajusta la posición vertical */
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}
.chat-content {
    flex-grow: 1;
    overflow-y: auto;
}

.chat-header {
    margin-bottom: 20px;
}

.chat-header h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

.chat-messages {
    margin-bottom: 20px;
}

.message {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}

</style>