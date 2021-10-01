# Prueba Técnica para Hiberus

## Secciones

- Login
- Logout
- SignUp
- Users

## Creación y organización del proyecto

Terminar el proyecto me ha llevado más o menos 12h.

He intentado realizar una arquitectura lo más intuitiva posible, para facilitar futuros desarrollos o requerimientos.

También se han configurado el linter eslint y prettier, para una mejor calidad del código siguiendo la guia de JSStandard. Para los commits se ha incluido husky, para así controlar la subida de código que no cumple con los linters.

### Decisiones

Para el manejo de las peticiones a backend he creado una pequeña api usando axios, esta librería es muy configurable y ofrece muchas posibilidades.

Para tener accesible desde todos los componentes el estado del usuario, he creado un AuthProvider y su hook useAuthContext, de esta manera me ha sido más fácil gestionar los apartados privados de la aplicación.

Para poder almacenar y trabajar con la información del usuario he utilizado las herramientas que ofrece react, useReducer y createContext. Las he creido convenientes para una aplicación de este tamaño. Me parecía excesivo usar redux.

### Organización

#### components

Para componentes que se puedan utilizar en otras partes de la aplicación o que tienen una funcionalidad muy concreta

#### core

Configuraciones del proyecto, contextos necesarios, apis, declaración de rutas...

#### hooks

Hooks reutilizables

#### pages

Vistas de las secciones, cada sección engloba los componentes que necesita

#### styles

Estilos scss generales

#### utils

Diferentes utilidades para tenerlas disponibles en toda la aplicación, separadas por funcionalidad

## Problemas y soluciones

1. Manejo del token, para solventarla he creado una instancia de axios para la aplicación, con la cual una vez obtenido el token lo añado a su configuración de la aplicación. Para mantener la sesión activa guardo este token, junto con la información del usuario en el localStorage.

2. Interceptar las responses, para poder mostrar notificaciones, he creado un componente (ResponseInterceptor) para mantener la lógica abstraida y no tener que gestionar en cada componente los errores producidos por las peticiones.

3. Aprender el manejo de la librería Ant Design, no había trabajado con esta librería y he tenido que ir aprendiendola ha medida que iba desarrollando.
