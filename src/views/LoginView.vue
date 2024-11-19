<template>
    <GuestLayout>
        <div class="login">
            <!--<img src="logo.png" alt="Logo" class="logo" />-->
            <h2>Iniciar Sesión</h2>
            <p>Hola, inicia sesión para continuar</p>
            <form @submit.prevent="login">
                <input type="email" placeholder="EMAIL" v-model="email" required />
                <input type="password" placeholder="Contraseña" v-model="password" required />
                <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
                <button type="submit">Iniciar</button>
            </form>
            <p>
                No tienes cuenta? <a href="/register">Registrarse</a>
            </p>
        </div>
    </GuestLayout>
</template>


<style scoped>
.login {
    text-align: center;
}

.logo {
    width: 150px;
    margin: 0 auto 20px;
    display: block;
}

h2 {
    color: #4630eb;
    font-size: 1.5rem;
    margin-bottom: 5px;
}

p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 15px;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    padding: 10px;
    background-color: #4630eb;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #3520c9;
}

.forgot-password {
    font-size: 0.8rem;
    color: #4630eb;
    text-decoration: none;
    margin-bottom: 20px;
}

.forgot-password:hover {
    text-decoration: underline;
}
</style>