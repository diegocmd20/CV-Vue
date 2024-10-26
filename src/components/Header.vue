<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/diego-moran" class="nav-link">Diego Moran</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">javier Rojas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Diego Palma</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Emariana Cohen</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Samuel Bustamante</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {

        };
    }
};
</script>

<style scoped></style>