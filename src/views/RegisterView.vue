<template>
    <GuestLayout>
        <div class="register">
            <!-- <img src="logo" alt="Logo" class="logo" /> -->
            <h2>Registro</h2>
            <p>Hola, registrate para continuar</p>
            <form @submit.prevent="register">
                <input type="text" placeholder="Usuario" v-model="username" required />
                
                <input type="email" placeholder="Email" v-model="email" required />
                
                <input type="password" placeholder="Contraseña" v-model="password" required />
                
                <button type="submit">Registrarse</button>
                
            </form>
            <br>
            
            <p>
                ¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a>
            </p>
        </div>
    </GuestLayout>
</template>



<style scoped>
.register {
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
</style>