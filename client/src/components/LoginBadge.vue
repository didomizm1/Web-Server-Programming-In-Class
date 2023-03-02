<script setup lang="ts">
import { useSession, login } from '@/model/session';
import { ref } from 'vue';

const session = useSession();

</script>

<template>
    <div class="navbar-item" v-if="session.user">
        Welcome, {{ session.user.name }}
        (<a @click="$event => session.user = null">Logout</a>)
    </div>
    <div class="navbar-item" v-else>
        <a class="button is-primary" @click="login">
            <span class="icon">
                <i class="fas fa-user"></i>
            </span>
            <strong>Login</strong>
        </a>
        <a class="button is-info">
            <span class="icon">
                <i class="fas fa-user-plus"></i>
            </span>
            <strong>Sign up</strong>
        </a>
    </div>

</template>

<style scoped>

</style>