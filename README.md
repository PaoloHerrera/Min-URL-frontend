# Min-URL Frontend

¡Bienvenido a Min-URL! Este proyecto es una aplicación web diseñada para acortar URLs de manera eficiente y rápida. La web está disponible en [https://min-url.com/](https://min-url.com/).

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Un entorno de desarrollo rápido para proyectos de frontend.
- **Motion**: Una biblioteca para animaciones en React.
- **Tailwindcss**: Un framework de CSS para un diseño rápido y eficiente.
- **React-qr-code**: Un generador de códigos QR para React.
- **Validator**: Una biblioteca para validación de datos.
- **HeroUI**: Un conjunto de componentes de interfaz de usuario para React.
- **Google ReCaptcha V3**: Un servicio de protección contra bots que ayuda a prevenir el abuso en la aplicación mediante la verificación de usuarios reales.

## Características

- **Acortamiento de URLs**: Convierte URLs largas en enlaces cortos y fáciles de compartir.
- **Generador de código QR**: Genera códigos QR para las URLs acortadas.
- **Descarga de código QR**: Permite descargar los códigos QR generados.

## Funcionalidades Futuras

- **Registro de usuarios**: Permite a los usuarios crear cuentas y gestionar sus URLs acortadas.
- **ShortURLs personalizadas**: Ofrece la opción de personalizar los enlaces cortos según las preferencias del usuario.
- **Estadísticas de clicks**: Proporciona datos detallados sobre el número de clicks y el tráfico de cada URL acortada.
- **Caducidad de enlaces**: Permite establecer una fecha de caducidad para los enlaces, después de la cual dejarán de funcionar.
- **Protección con contraseña**: Permite proteger los enlaces acortados con una contraseña para mayor seguridad.

## Requisitos Fundamentales

Para asegurar el correcto funcionamiento de la aplicación, es indispensable tener el [backend de Min-URL](https://github.com/PaoloHerrera/Min-URL-backend) en ejecución. Este componente es crucial ya que maneja la lógica de acortamiento de URLs. Asegúrate de seguir las instrucciones de instalación y configuración del repositorio del backend antes de iniciar el frontend.

Además, se deben cambiar las constantes DEV_CONSTANTS y PROD_CONSTANTS en el archivo constants.js. 
Ambas constantes contienen la URL hacia donde se realizan las solicitudes de la API para generar shorturl y las keys de Google ReCaptcha V3.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
  ```bash
  git clone https://github.com/PaoloHerrera/Min-URL-frontend.git
  ```
2. Navega al directorio del proyecto:
  ```bash
  cd min-url-frontend
  ```
3. Instala las dependencias:
  ```bash
  npm install
  ```
4. Inicia la aplicación:
  ```bash
  npm run dev
  ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

¡Gracias por visitar Min-URL! Esperamos que disfrutes usando la aplicación.
