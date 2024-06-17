<template>
    <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">        <template #person="slotProps">
            <div class="flex flex-column">
                <div class="flex flex-column align-items-center">
                    <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                    <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                    <span>{{ slotProps.node.data.title }}</span>
                </div>
            </div>
        </template>
        <template #default="slotProps">
            <span>{{ slotProps.node.label }}</span>
        </template>
    </OrganizationChart>
</template>

<script setup>
const integrantes = [
    {
        asesor: "andres franco",
        nivelacademico: "doctorado"
    },
    {
        coordinador: "jose carlos",
        nivelacademico: "magister"
    }
];
const data = ref({
    key: '0',
    type: 'person',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Organización',
        title: 'Principal'
    },
    children: integrantes.map((integrante, index) => {
        const isAsesor = integrante.hasOwnProperty('asesor');
        return {
            key: `0_${index}`,
            type: 'person',
            data: {
                image: isAsesor 
                    ? 'https://static.vecteezy.com/system/resources/thumbnails/000/495/460/small/22_Profile.jpg' 
                    : 'https://static.vecteezy.com/system/resources/thumbnails/000/495/460/small/22_Profile.jpg',
                name: isAsesor ? integrante.asesor : integrante.coordinador,
                title: integrante.nivelacademico
            }
        };
    })
});

const selection = ref({});
</script>

<style>
</style>
