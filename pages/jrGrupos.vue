<script setup>
const grupo = {
    nombre: "EduTLan",
    facultad: "Educación y Ciencias Humanas",
    semilleros: [
        {
            nombre: "AVI"
        }
    ]
}

 </script>
<template>
    <h1>grupos</h1>
    <jrGrupo :grupo="grupo" />
</template>