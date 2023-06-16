# Proyecto de Vue con integración de API de Laravel

Este proyecto de Vue.js es un complemento de las API de Laravel y está diseñado para funcionar en conjunto con el contenedor de Docker de Laravel Sail. Proporciona una interfaz de usuario para mostrar y aplicar a plazas laborales. Al enviar una aplicación, se envía un correo electrónico a las personas asociadas a la plaza.

## Pasos de instalación

Clona el repositorio del proyecto de Vue:
git clone https://github.com/Majo97/Headless-Frontend.git

Navega hasta la carpeta del proyecto:
cd proyecto-vue

Instala las dependencias de npm:
npm install

Inicia el servidor de desarrollo de Vue:
npm run serve

Accede a la aplicación en tu navegador web:
http://localhost:8080

**Nota:** Para que las API funcionen correctamente, es necesario tener clonado el repositorio del backend de Laravel y haber iniciado el servidor Docker correspondiente (por ejemplo, Laravel Sail). Asegúrate de seguir los pasos de instalación del backend antes de ejecutar el proyecto de Vue.

## Descripción de vistas

El proyecto de Vue consta de las siguientes vistas:

- Listado de plazas laborales: En esta vista se muestra un listado paginado de las plazas laborales disponibles. Cada elemento del listado muestra información básica sobre la plaza, como el título y la ubicación.
  ![image](https://github.com/Majo97/Headless-Frontend/assets/88950572/49b74943-5382-47c0-9736-aae762f98c99)
  ![image](https://github.com/Majo97/Headless-Frontend/assets/88950572/037f74c2-7d87-4f60-b49e-250744d59cc4)
- Detalle de la plaza: Al hacer clic en una plaza del listado, se muestra la vista de detalle de la plaza. Esta vista muestra información más detallada sobre la plaza, como la descripción, los requisitos y las responsabilidades.
![image](https://github.com/Majo97/Headless-Frontend/assets/88950572/ae01d2ce-10c2-45c4-bbd3-400d1fddc444)
- Formulario de aplicación: En la vista de detalle de la plaza, se encuentra un formulario que permite a los usuarios aplicar a la plaza. El formulario solicita información como el nombre, el apellido, el correo electrónico y el currículum del solicitante.
![image](https://github.com/Majo97/Headless-Frontend/assets/88950572/6104f808-fa96-4769-97d4-fc7cf23eac27)
correo enviado a todos los miembros de la empresa al momento que se guarda la aplicacion
![image](https://github.com/Majo97/Headless-Frontend/assets/88950572/981c63a1-76f9-4500-8b4e-873342c94edd)

## API consumidas

El proyecto de Vue consume las siguientes API proporcionadas por el backend de Laravel:

- GET /api/index/{perPage}: Esta API devuelve la lista de plazas laborales. La respuesta incluye detalles básicos de cada plaza, como el ID, el título y la ubicación.

- GET /api/job-positions/{id}: Esta API devuelve los detalles completos de una plaza específica, identificada por su ID.

- POST /api/aplication: Al enviar el formulario de aplicación, esta API almacena la solicitud y envía un correo electrónico a las personas asociadas a la plaza.
