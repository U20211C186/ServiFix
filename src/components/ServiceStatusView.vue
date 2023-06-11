<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-5">
                <div class="menu sidebar">
                    <div class="logo">
                        <router-link to="/">
                            <a href="">
                                <img src="../assets/images/logo1.png" style="max-width: 200px; height: auto;">
                            </a>
                        </router-link>
                    </div>
                    <div>
                        <nav>
                            <ul class="options">
                                <li>
                                    <img src="../assets/images/house-icon.png" alt="house-icon">
                                    <a href="#">Página Principal</a>
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
                                    <router-link to="/profile"><a>Perfil</a></router-link>
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
            <div class="col-lg-9 col-sm-7 ml-auto mt-7">
                <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Técnico</th>
                            <th>Fecha y Hora</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tubería de agua rota</td>
                            <td>Gasfitero</td>
                            <td>17-4-2023 18:00</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
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
    .square-button {
        display: flex;
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

    .reprogram-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5689C0;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.reprogram-button:hover {
  background-color: skyblue;
}

.material-icons {
  font-size: 24px;
  margin-left: 5px;
}
.ml-auto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.table-container {
    overflow-x: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    margin-top: 20px;
  }

  .data-table th,
  .data-table td {
    padding: 10px;
    border: 1px solid #dddddd;
  }

  .data-table th {
    background-color: #5689C0;
    color: #ffffff;
  }

  /* Estilos adicionales para hacerla responsive */
  @media (max-width: 768px) {
    .data-table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    .data-table thead,
    .data-table tbody,
    .data-table tr,
    .data-table th,
    .data-table td {
      display: block;
    }

    .data-table thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    .data-table tr {
      border: 1px solid #dddddd;
    }

    .data-table td {
      border: none;
      border-bottom: 1px solid #dddddd;
      position: relative;
      padding-left: 50%;
    }

    .data-table td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /* Ajustar estilos de cada columna */
    .data-table td:nth-of-type(1):before {
      content: 'Nombre';
    }

    .data-table td:nth-of-type(2):before {
      content: 'Técnico';
    }

    .data-table td:nth-of-type(3):before {
      content: 'Fecha y Hora';
    }

    .data-table td:nth-of-type(4):before {
      content: 'Estado';
    }
  }
    </style>