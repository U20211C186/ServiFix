
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
                <div class="containerb">
                    <div class="row2">
                        <div class="profile-pic">
                            <img src="../assets/images/user1.jpg" alt="Profile Picture">
                        </div>
                        <div class="details">
                            <h3>Armando Casas</h3>
                            <p>Es un técnico especializado en reparación de electrodomésticos, como lavadoras, refrigeradores y hornos, brindando servicios de mantenimiento y solución de problemas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row3">
            <div class="col-lg-6 col-sm-12">
                <div class="rectangle-content text-center">
                    <img src="../assets/images/batidora.jpg" alt="Imagen" class="medium-image">
                    <h5>Item 1</h5>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="rectangle">
                    <div class="rectangle-content">
                        <p class="line-item">Artefacto:</p>
                        <p class="line-item">Descripcion del Problema:</p>
                        <p class="line-item">Marca:</p>
                        <p class="line-item">Modelo:</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="divider">


        <div class="row4">
            <div class="col-lg-6 col-sm-12">
                <div class="rectangle">
                    <div class="rectangle-content" style="width: 130%; margin-top:-29px;">
                        <p class="line-item2">Nombre:</p>
                        <p class="line-item2">Direccion:</p>
                        <p class="line-item2">Distrito:</p>
                        <p class="line-item2">Numero de Telefono:</p>
                        <p class="line-item2">Email:</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="rectangle-content text-center">
                    <img src="../assets/images/user1.jpg" alt="Imagen" style="width: 300px; height: auto;  margin-left: 200px;">
                    <h6>Armando</h6>
                </div>
            </div>
        </div>
        <div class="call-section">
            <button class="call-button call-button-wide"><i class="fas fa-phone"></i></button>
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

.containerb {
    background-color: #70aefc;
    padding: 20px;
    border: 2px solid black;
    margin-top: 20px;
}

.row2 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
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

.rectangle {
    border: 2px;
    margin-bottom: 20px;
}


.rectangle-header h4 {
    margin: 0;
    font-size: 16px;
}

.rectangle-content {
    padding: 10px;

}

.rectangle-content p {
    margin: 5px 0;
    font-size: 14px;
    background-color: lightblue;
    padding: 5px;
}

.rectangle-content img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.rectangle-content h4 {
    margin: 0;
    font-size: 16px;
}

.rectangle-content h5 {
    margin: 0;
    font-size: 16px;
}

.row3 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 200px;
    margin-top: 20px;
}

.medium-image {
    max-width: 50%;
    height: auto;
}

.line-item {
    margin-bottom: 10px;
}

.rectangle-content p {
    margin: 35px;
}

.divider {
    border: 2px solid black;
    margin-top: 10px;
    width: 90%;
    margin-left: 300px;
}

.row4 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 300px;
    margin-top: 20px;
}

.rectangle-content h6 {
    margin-left: 320px;
    font-size: 16px;
}

.line-item2 {
    margin-bottom: 10px;
    padding: 100px;
}

.call-section {
    text-align: center;
    margin-top: -53px;
    margin-left: 455px;
}

.call-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50; /* Cambiar a color verde */
    color: #fff;
    border: none;
    border-radius: 4px;
}

.call-button-wide {
    width: 200px; /* Ajusta el ancho según tus necesidades */
}

</style>