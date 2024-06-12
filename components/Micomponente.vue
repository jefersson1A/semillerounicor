<template>
    <div class="card">
      <DataTable :value="dataSemilleros" tableStyle="min-width: 50rem">
        <Column field="facultad" header="Facultad"></Column>
        <Column field="programa" header="Programa"></Column>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="grupo" header="Grupo"></Column>
      </DataTable>
    </div>
  </template>
  
  <script setup>
  import dataSemilleros from '../data/dataSemilleros'
  </script>