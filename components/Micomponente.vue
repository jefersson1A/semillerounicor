<template>
    <div class="card">
      <DataTable :value="props.semillero" tableStyle="min-width: 50rem">
        <Column field="facultad" header="Facultad"></Column>
        <Column field="programa" header="Programa"></Column>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="grupo" header="Grupo"></Column>
      </DataTable>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(
    {
      semillero: Object
    }
  )
  </script>