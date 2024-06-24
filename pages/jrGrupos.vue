<script setup>
const grupo = {
    nombre: "EduTLan",
    facultad: "Educación y Ciencias Humanas",
    semilleros: [
        {
            nombre: "AVI",
            cantIntegrantes: 15,
            cantProyectos: 10
        },
        {
            nombre: "Lab. de IA",
            cantIntegrantes: 8,
            cantProyectos: 5
        }
    ]
}

 </script>
<template>
    <h1>Grupos</h1>
    <jrGrupo :grupo="grupo" />
</template>