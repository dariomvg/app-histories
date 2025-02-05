# Subir historias estilo red social

> puedes subir historias(imágenes máximo 5 mb), con todas las funcionalidades para avanzar y retorceder cada historia, registrarse con un nombre de usuario, poder borrar la cuenta(eliminaria todas las historias).  

### Notas 
- Uso de cloudinary para la subida de imágenes
- Uso de localStorage para registro de usuario simple(solo nombre de usuario)
- Uso de pages/api(backend simple en nextjs) para manejar las solicitudes en los diferentes endpoints
- UI intuitiva, simple y fácil de usar(como red social)

### Uso 

1- Configuración de cloudinary

- Debes agregar las variables de entorno en .env.local de tu cuenta de cloudinary, si no tienes una, puedes crear una [aquí](https://cloudinary.com/)  
- En el archivo option.ts en la carpeta utils están las variables exportadas

2- Instalación

- Clonar repositorio: 
  
```js
  git clone https://github.com/dariomvg/app-histories.git
```

- Instalar las dependencias del proyecto:
  
```js
  npm i 
```

- ejecutar el proyecto:  
  
```js
  npm run dev
```
