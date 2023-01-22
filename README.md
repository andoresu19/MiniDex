# Mini-dex

_A small web version of the pokemon pokedex._

## Dependencias

- Docker
- docker-compose

## Puertos

Es necesatio comprobar que los siquientes puertos se encuentran disponibles:

- **Cliente:** Puerto 8000.
- **API:** Puerto 3000.
- **MySQL:** Puerto 23306.

## Despliegue de la aplicación

El despliegue de la aplicación está automatizado mediante docker-compuse. Para montar la aplicación ejecutar en la raíz del proyecto el comando:

```
docker-compose up -d

```

## Desmontar

Para desmontar la aplicación y eliminar las imagenes y contenedores ejecutar en la raíz del proyecto el comando:

```
docker-compuse down --rmi all
```

## Tasks

- Como usuario de la App deseo poder consultar un pesronaje de la serie, ya sea por nombre o id. _(Historia de usuario)_

  - **Formulario**
    - Crear mockup de los inputs (ID, Name).
    - Definir tipos de entrada.
    - Realizar pruebas de entradas en los inputs.
    - Definir función "limpiar" para los inputs.
    - Definir función placeholder para inputs.
    - Implementar inputs en el código.
    - Crear mockup del botón "Consultar"
    - Definir endpoint del botón.
    - Implementar botón.
    - Realizar prueba de resultados de la query.
  - **Componente imagen del Pokémon.**
    - Realizar mockup.
    - Establecer estado inicial previo a una consulta.
    - Definir props de entrar para imagen de la query.
    - Implementar componente imagen.
  - **Detalles adicionales del Pokemón.**
    - Realizar mockup.
    - Establecer estado inicial previo a una consulta.

- Como usuario de la app deseo poder ingresar desde mi teléfono móvil. _(Historia de usuario)_

  - Incorporar dependencia react-div-100vh.
  - Definir media queries.

- Como usuario de la app quiero que la interfáz sea intuitiva. _(Historia de usuario)_

  - Implementar vista de "Cargando" mientras se realiza la consulta.
  - Permitir vista del último Pokémon buscado.
  - Incorporar dependencia framer-motion para mejor experiencia.
  - Implementar pop ups para información general.

- Guardar la información de la query dentro de la base de datos externa. _(Parte práctica)_

  - Construir db
  - Definir endpoints de la api
  - Construir CRUD
  - Incorporar query al cliente

- Empaquetar proyecto en contenedor Docker.
  - Definir Dockerfile del cliente.
  - Definir Dockerfile de la API.
  - Definir docker-compose.
