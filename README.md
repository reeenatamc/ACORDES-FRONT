# ACORDES-FRONT 🎶💻

Este es el **front-end** para el proyecto **ACORDES**, construido con **Angular**. La aplicación consume una API RESTful desarrollada en **Django** en el back-end. 🎧

## Tecnologías Utilizadas 🛠️

- **Angular 17**: Framework de front-end para construir la interfaz de usuario. 🌍
- **Django**: Framework de back-end para manejar la lógica del servidor y la base de datos. ⚙️
- **Django Rest Framework**: Para crear una API RESTful en Django que el front-end consume. 🔗

## Requisitos 📦

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **Angular CLI** (v17)
- **Python** (11)
- **Django** (v3.2 o superior)

## Instalación 🚀

### 1. Clonar los repositorios 📂

Clona el repositorio de **ACORDES-FRONT** y el repositorio de **ACORDES**:

```bash
git clone https://github.com/reenatamc/acordes.git
git clone https://github.com/reenatamc/acordes-front.git
```

### 2. Configurar el back-end (Django) 🖥️

- Accede al directorio del back-end de **Django**:
  
  ```bash
  cd acordes
  ```

- Crea un entorno virtual:
  
  ```bash
  python -m venv venv
  source venv/bin/activate   # Para Linux/Mac
  venv\Scripts\activate      # Para Windows
  ```

- Instala las dependencias:

  ```bash
  pip install -r requirements.txt
  ```

- Realiza las migraciones de la base de datos:

  ```bash
  python manage.py migrate
  ```

- Crea un superusuario (si es necesario):

  ```bash
  python manage.py createsuperuser
  ```

- Ejecuta el servidor de desarrollo:

  ```bash
  python manage.py runserver
  ```

### 3. Configurar el front-end (Angular) 🖱️

- Accede al directorio del front-end de **Angular**:

  ```bash
  cd acordes-front
  ```

- Instala las dependencias de Angular:

  ```bash
  npm install
  ```

- Ejecuta la aplicación de desarrollo:

  ```bash
  ng serve
  ```

La aplicación de Angular debería estar disponible en `http://localhost:4200/`. 🌐

## API 🔌

La aplicación **ACORDES-FRONT** se conecta al back-end de **ACORDES-BACK** para consumir datos a través de la API RESTful. Algunas de las rutas de la API incluyen:

- `GET /api/songs/` - Lista de canciones 🎶
- `POST /api/songs/` - Crear una nueva canción 🎼
- `GET /api/favorites/` - Listado de canciones favoritas ❤️
- `POST /api/reviews/` - Crear una nueva reseña para una canción 📝

## Contribución 🤝

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agregada nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request en GitHub.

## Licencia 📜

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Espero que disfrutes el proyecto y muchas gracias por contribuir! 

by renata <3! 
```
