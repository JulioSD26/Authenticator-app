# Proyecto de Autenticación con Firebase y React 🚀
Este proyecto es una aplicación web construida con React que implementa un sistema de autenticación utilizando Firebase, manejo de alertas con Toastify y rutas protegidas para una mejor experiencia de usuario.

![image](https://github.com/user-attachments/assets/0a229059-b5a7-4310-aa47-1b7eb9724c8c)

## Características ✨
- **Autenticación con Firebase** mediante correo y contraseña.
- Alertas interactivas y amigables con react-toastify.
- Rutas protegidas para asegurar que solo usuarios autenticados puedan acceder a ciertas secciones.
- Interfaz moderna y responsiva usando TailwindCSS.

## Instalación 🛠️

Clona este repositorio y accede a la carpeta del proyecto:

`git clone https://github.com/JulioSD26/Authenticator-app.git`

`cd Authenticator-app`

Instala las dependencias:

`npm install`

Configura Firebase en el archivo firebaseConfig.js:
```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
Inicia la aplicación:
`npm run dev`

## Capturas de pantalla 🖼️

1. Página de Login
   
![image](https://github.com/user-attachments/assets/c2ab551c-62f9-4dd5-8cef-dff489c538bf)



2. Página de Registro

![image](https://github.com/user-attachments/assets/45d535f3-b4f0-45f5-9fed-03538f931175)


3. Página de Inicio (Home)

![image](https://github.com/user-attachments/assets/97bf83fd-3ff2-4052-8e1d-82c4508174b4)


4. Alerta con Toastify

![image](https://github.com/user-attachments/assets/cb684e5a-8d15-4240-adab-6345d8590b34)

![image](https://github.com/user-attachments/assets/80f2ce33-9abc-4d40-9608-a9170efefed5)


## Uso 🧑‍💻

- **Login**: Los usuarios pueden iniciar sesión con su correo y contraseña.

- **Registro**: Permite crear una nueva cuenta vinculada a Firebase.

- **Home**: Página protegida que solo es accesible si el usuario está autenticado.

- **Logout**: Cierra la sesión de usuario y redirige al login.

- **Alertas**: Muestra notificaciones dinámicas con Toastify para mensajes de éxito o error.

## Tecnologías usadas 🛠️

React

Firebase (Auth)

React Router DOM

React Toastify

TailwindCSS
