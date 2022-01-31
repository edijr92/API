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

Registrar desde el endpoint: POST```/signUp```  corriendo en localhost:3000 con los siguientes parametros por body:
```
  {
    "mail": "<mail>",
    "password": "<password>"
  }
```
Acceder y obtener Token de acceso desde endpoint: POST```/logIn``` corriendo en localhost:3000 con los siguientes parametros por body:
```
  {
    "mail": "<mail>",
    "password": "<password>"
  }
```
Con el token obetenido podremos buscar usuarios desde el endpoint:  POST```/usersAll``` corriendo desde loacalhost:3000 con los siguientes parametros:
```
  {
    "token": "<token>"
  }
```
El endpoint de busqueda acepta parametros de query para paginacion desde el endponit POST como: ```/usersAll?limit=2``` y permite busqueda de usuarios registrados por mail siguiendo los siguientes parametros:
```
  {
    "token": "<token>",
    "mail": "<mail>"
  }
  ```
El parametro ```mail``` es opcional al igual que el parametro por query ```limit``` si estos no son definidos ya estan establecidos lo parametros base por default.
  
El servicio Bussiness es un servicio adicional he independiente, la autenticacion es verificada a traves del middleware ```AuthMiddleware``` y solo es accesible a traves del     endpoint ```/usersAll```.
  
