
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
                        <nav class="menu-options">
                            <ul class="options">
                                <li>
                                    <img src="../assets/images/house-icon.png" alt="house-icon">
                                    <a href="#">Página Principal</a>
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
                                        <a >Perfil</a>
                                    </router-link>
                                </li>
                                <li>
                                    <img src="../assets/images/close-sesion-icon.png" alt="close-sesion-icon">
                                    <router-link to="/login">
                                        <a href="#">Cerrar Sesión</a>

                                    </router-link>                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


            <div class="box-cards">
                <div class="card-container">
                    <pv-card v-for="(publication, index) in publications" :key="index" class="card">
                        <template #title>
                            {{ publication.nombre }}
                        </template>
                        <template #content>
                            <p><strong>Departamento:</strong> {{ publication.departamento }}</p>
                            <p><strong>Descripción:</strong> {{ publication.descripcion }}</p>
                            <p><strong>Distrito:</strong> {{ publication.distrito }}</p>
                            <p><strong>Fecha y Hora:</strong> {{ publication.fechayhora }}</p>
                            <p><strong>Precio:</strong> {{ publication.precio }}</p>
                        </template>
                    </pv-card>
                    <div class="card2">
                        <div class="center">
                            <router-link to="/add/publicationform">
                                <button class="square-button">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                            </router-link>
                            <h1>Solicitar servicio técnico</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import {PublicationApiService} from "@/core/services/publication-api.service";

export default {
    data() {
        return {
            publications: []
        };
    },
    mounted() {
        this.fetchPublications();
    },
    methods: {
        fetchPublications() {
            const publicationApiService = new PublicationApiService();
            publicationApiService.getAll()
                .then(response => {
                    this.publications = response.data;
                })
                .catch(error => {
                    console.error('Error retrieving publications:', error);
                });
        }
    }
};
</script>



<style scoped>

.box-cards{
    position: relative;
    text-align: center;
}

.card-container {
    margin-left: 250px;
    display: flex;
    flex-wrap: wrap;

}

.card {
    flex: 0 0 calc(33.33% - 20px);
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 16px;
    background-color: #fff;

}
.card2  {
    flex: 0 0 calc(33.33% - 20px);
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
    border-radius: 4px;
    padding: 16px;
    background-color: #fff;

}

.card p {
    margin-bottom: 8px;
}

.card strong {
    font-weight: bold;
}

@media (max-width: 768px) {
    .card {
        flex: 0 0 calc(50% - 20px);
    }
}
@media (max-width: 480px) {
    .card {
        flex: 0 0 100%;
    }
}

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

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
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
.options li:last-child {
    position: absolute;
    bottom: 0;
    left: 0;
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
.square-button {


    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: #5689C0;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    transition: background-color 0.3s;
}
.square-button:hover {
    background-color: skyblue;
}
.square-button i {
    line-height: 1;
}

.material-symbols-outlined {
    font-size: 200px;
}
.center {
    text-align: center;
}

</style>