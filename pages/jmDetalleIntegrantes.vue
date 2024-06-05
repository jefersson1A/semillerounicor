<script setup>
import semillerosJson from "../data/Semillero_LosNadie.json";

const semillero = semillerosJson[0];


</script>
<template>
    <div class="m-4">
    <h1>Detalles Integrantes</h1>
     <jmDetalleIntegrantes :semillero="semillero"/> 
</div>
</template>

