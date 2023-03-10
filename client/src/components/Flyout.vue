<script setup lang="ts">
</script>

<template>
    <div class="flyout">
        <slot />
    </div>
</template>


<style scoped>
    .flyout {
        position: fixed;
        top: 52px;
        right: -18rem;
        width: 20rem;
        height: calc(100vh - 52px);
        background-color: white;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
        transition: right 0.5s ease-in-out;
        overflow-y: scroll;
    }
    .flyout.is-active {
        right: 0;
    }
    .flyout:hover {
        right: 0;
    }
</style>