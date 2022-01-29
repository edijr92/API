# API
API-rest  

Servicios creados: Log In & Bussiness

Requisitos para correr API: Yarn, Node.js 14 o superior.

Run ```yarn``` desde ```/API```

Crear archivo ```.env``` y añadir las siguientes variables:

```
USER=user1
KEY=123456ab
ACCESS_TOKEN=ATOKEN
```
en ```/API```

Correr : ```yarn start```

Registrar desde el endpoint ```/signUp```  corriendo en localhost:3000 con los siguientes parametros por body:
```
  {
    "mail": "<mail>",
    "password": "<password>"
  }
```
Acceder y obtener Token de acceso desde endpoint ```/logIn``` corriendo en localhost:3000 con los siguientes parametros por body:
```
  {
    "mail": "<mail>",
    "password": "<password>"
  }
```
Con el token obetenido podremos buscar usuarios desde el endpoint ```/usersAll``` corriendo desde loacalhost:3000 con los siguientes parametros:
```
  {
    "token": "<token>"
  }
```
El endpoint de busqueda acepta parametros de query para paginacion desde el endponit como: ```/usersAll?limit=2``` y permite busqueda de usuarios registrados por mail siguiendo los siguientes parametros:
```
  {
    "token": "<token>",
    "mail": "<mail>"
  }
  ```
  
