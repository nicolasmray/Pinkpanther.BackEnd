# Pinkpanther.BackEnd
Breve descripción del proyecto.

# Requisitos Previos
Node.js instalado (versión >=12.18.3)
Gestor de bases de datos PostgreSQL instalado y configurado

# Configuración del Servidor
Clona este repositorio en tu máquina local:
bash
git clone https://github.com/nicolasmray/Pinkpanther.BackEnd.git

Navega al directorio del proyecto:
bash
cd nombre-del-proyecto

Instala las dependencias del servidor:
bash
npm install

Una vez configurada la base de datos inicia el servidor:
bash
npm start
El servidor estará disponible en http://localhost:3001

# Configuración de la Base de Datos Local
Abre tu terminal y ejecuta el siguiente comando para crear la base de datos pinkpantherdb:
sql
CREATE DATABASE pinkpantherdb;
Conéctate a la base de datos pinkpantherdb:
sql
\c pinkpantherdb
Crea un nuevo usuario postgres y una contraseña:
sql
CREATE USER tu_postgres_user WITH PASSWORD 'tu_password';
Otorga permisos de conexión a la base de datos pinkpantherdb al usuario postgres:
sql
GRANT CONNECT ON DATABASE pinkpantherdb TO tu_postgres_user;

Dentro de la carpeta server creá un archivo .env que contenga lo siguiente:

DB_USER = tu_postgres_user
DB_PASSWORD = tu_password
DB_HOST = localhost
DB_NAME = pinkpantherdb
PORT = 3001

# Uso
Agrega aquí instrucciones sobre cómo usar o interactuar con el proyecto una vez que el servidor esté en funcionamiento y la base de datos esté configurada.

# Contribuir
Si quieres contribuir a este proyecto, sigue estos pasos:
Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios.
Haz commit de tus cambios (git commit -am 'Agrega nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Crea un nuevo Pull Request.



