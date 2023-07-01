
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
                                    <img src="../assets/images/rute-icon.png" alt="rute-icon">

                                    <router-link to="/route">
                                        <a>Mi Ruta</a>

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
                                    <router-link to="/notifications">
                                        <a href="#">Notificaciones</a>
                                    </router-link>
                                </li>
                                <li>
                                    <img src="../assets/images/user-icon.png" alt="user-icon">
                                    <router-link to="/view/profile">
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
                <div style="margin-top: 30px;">
                    <div class="row2">
                        <div class="profile-pic">
                            <img src="../assets/images/user1.jpg" alt="Profile Picture">
                        </div>
                        <div class="details">
                            <h3>Armando Casas</h3>
                            <p>Es un técnico especializado en reparación de electrodomésticos, como lavadoras, refrigeradores y hornos, brindando servicios de mantenimiento y solución de problemas.</p>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="profile-pic">
                            <img src="../assets/images/user2.jpeg" alt="Profile Picture">
                        </div>
                        <div class="details">
                            <h3>Pedro Perez</h3>
                            <p>Es un técnico en climatización y aire acondicionado, capacitado en la instalación, mantenimiento y reparación de equipos de climatización y sistemas de aire acondicionado.</p>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="profile-pic">
                            <img src="../assets/images/user3.jpeg" alt="Profile Picture">
                        </div>
                        <div class="details">
                            <h3>Carlos Gómez</h3>
                            <p>Es un técnico en carpintería y ebanistería, especializado en la reparación de muebles, restauración de superficies y trabajos de acabado en el hogar.</p>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="profile-pic">
                            <img src="../assets/images/user4.jpg" alt="Profile Picture">
                        </div>
                        <div class="details">
                            <h3>Laura López</h3>
                            <p>Es una técnica en fontanería con experiencia en reparación de fugas de agua, instalación de tuberías y solución de problemas relacionados con sistemas de plomería en el hogar.</p>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="profile-pic">
                            <img src="../assets/images/user5.jpeg" alt="Profile Picture">
                        </div>
                        <div class="details">
                            <h3>Alejandro Rodríguez</h3>
                            <p>Es un técnico en cerrajería con amplia experiencia en la reparación y sustitución de cerraduras, apertura de puertas y brindar servicios de seguridad para el hogar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

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

h1 {
    margin: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
}

.upload-box i {
    font-size: 50px;
    margin-bottom: 10px;
}

.upload-box p {
    font-size: 18px;
    color: #666;
    text-align: center;
    margin: 0;
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

.row2 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.profile-pic img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
}

.details h3 {
    margin: 0;
    font-size: 18px;
}

.details p {
    margin: 5px 0;
    font-size: 14px;
}


</style>