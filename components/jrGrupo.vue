<script setup>

const props = defineProps(
    {
  grupo: Object
}
)

</script>
<template>

    <h1>Componentes De Los Grupos</h1>

    <template>
        <Card style="width: 25rem; overflow: hidden">
            <template #header>
                <img alt="logo grupos" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
            </template>
            <template #title>Grupo {{ grupo.nombre }}</template>
            <template #content>
                <p v-for="semillero in grupo.semilleros">
                    <p>Semillero {{ semillero.nombre }} </p>
                    <p>Integrantes <Badge :value="semillero.cantIntegrantes"></Badge> </p>
                    <p>Proyectos <Badge :value="semillero.cantProyectos"></Badge> </p>
                    <Divider />
                </p>
            </template>
            <template #footer>
                
            </template>
        </Card>
    </template>

</template>