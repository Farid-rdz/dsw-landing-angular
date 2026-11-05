# dsw-landing-angular

Proyecto de la Participación 4 de Desarrollo de Aplicaciones Web, de la Facultad de Ciencias de la Computación de la BUAP. Consiste en una aplicación Angular con tres pantallas conectadas mediante un menú de navegación.

## Tecnologías

- Angular 20 y TypeScript.
- Bootstrap 5 y Bootstrap Icons.
- Angular Material.
- jQuery y Popper instalados localmente.
- SCSS y fuentes Nexa almacenadas en el proyecto.

## Pantallas

- **Home:** presentación de Desarrollo de Sitios Web y tarjetas de tecnologías generadas con `@for`.
- **Perfil:** tarjeta con datos de ejemplo y referencia a una imagen local.
- **Documentación:** enlace a la documentación oficial de Angular y carrusel de Node.js, TypeScript, Angular y NPM.

Las rutas están definidas en `src/app/app.routes.ts`: `/home`, `/perfil` y `/documentacion`. La ruta inicial y las direcciones desconocidas redirigen a Home.

## Requisitos

La práctica solicita Node.js **24.12.0** y Angular **20.3.14**. Las dependencias declaradas y sus versiones resueltas se encuentran en `package.json` y `package-lock.json`.

## Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Farid-rdz/dsw-landing-angular.git
   cd dsw-landing-angular
   git checkout master
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

4. Abre http://localhost:4200/ en el navegador. Mantén la terminal abierta mientras utilizas la aplicación. Para detener el servidor, presiona **Ctrl + C**.

## Compilación

Para generar la versión de producción:

```bash
npm run build
```

Los archivos generados se guardan en `dist/`.

## Organización del código

| Carpeta o archivo | Función |
| --- | --- |
| `src/app/screens/` | Pantallas Home, Perfil y Documentación |
| `src/app/partials/` | Menú de navegación reutilizable |
| `src/app/modals/` | Carpeta reservada para modales |
| `src/app/services/` | Carpeta reservada para servicios |
| `src/app/shared/` | Carpeta reservada para recursos compartidos |
| `src/assets/fonts/` | Fuentes locales |
| `src/app/app.routes.ts` | Rutas de la aplicación |
| `src/app/app.config.ts` | Configuración y proveedores de Angular |
| `angular.json` | Configuración de estilos, scripts, recursos y compilación |

Los componentes utilizan la nomenclatura sin el sufijo `component` y la organización standalone.

