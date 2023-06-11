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
                                    <a href="#">Bandeja de Entrada</a>
                                </li>
                                <li>
                                    <img src="../assets/images/email-icon.png" alt="email-icon">
                                    <a href="#">Registro</a>
                                </li>
                                <li>
                                    <img src="../assets/images/user-icon.png" alt="user-icon">
                                    <a href="#">Perfil</a>
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
            <div class="col-lg-9 col-sm-7 ml-auto right-column">
                <div class="form-header">
                    <div class="upload-box">
                        <i class="fas fa-times"></i>
                        <p>Subir imagen</p>
                    </div>
                    <button class="edit-profile-button" @click="$router.push({name:'PayMethodView'})">Opciones de Pago</button>
                </div>
                <form>
                    <div class="form-row">
                        <div class="form-group col">
                            <div class="input-icon">
                                <i class="fas fa-user"></i>
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="form-group col">
                            <div class="input-icon">
                                <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-icon">
                            <i class="fas fa-map-marker-alt"></i>
                            <input type="text" class="form-control short-input" id="direccion" placeholder="Dirección">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col">
                            <div class="input-icon">
                                <i class="fas fa-map-marker-alt"></i>
                                <input type="text" class="form-control" id="departamento" placeholder="Departamento">
                            </div>
                        </div>
                        <div class="form-group col">
                            <div class="input-icon">
                                <input type="text" class="form-control" id="distrito" placeholder="Distrito">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-icon">
                            <i class="fas fa-mobile-alt"></i>
                            <input type="text" class="form-control" id="celular" placeholder="Celular">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-icon">
                            <i class="fas fa-lock"></i>
                            <input type="password" class="form-control" id="contrasena" placeholder="Contraseña">
                        </div>
                    </div>
                    <button class="edit-profile-button">Guardar</button>
                </form>
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
.add {
    height: 700px;
    align-items: center;
    display: flex;
    justify-content: center;
    overflow-y: auto;
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

.upload-box {
    border: 2px dashed #ccc;
    border-radius: 10px;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.col {
    width: 100%;
    padding: 10px;
}

@media only screen and (min-width: 768px) {
    .col {
        width: 50%;
    }
}

.edit-profile-button {
    background-color: #5689C0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.edit-profile-button:hover {
    background-color: #3A6B9E;
}

.input-icon {
    position: relative;
  }

  .input-icon i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #5689C0;
  }

  .form-group {
    flex-basis:50%;
    margin-bottom: 20px;
  }

  .form-control {
    width: 100%;
    padding: 10px 10px 10px 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .fa {
  color: #5689C0;
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.upload-box {
  display: flex;
  align-items: center;
}

.upload-box i {
  margin-right: 10px;
}
.right-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>