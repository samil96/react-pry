# React-Pry
Para obteneder las librerias de React.js se debe instalar **node.js**
Por medio de un terminal, dirigirse a la diección local:
1. Paso: Cuando ya tengas node.js, instalar el npm
npm install -g create-react-app
2. Paso: create-react-app <nombre_de_tu_proyecto>
luego, npm start para visualizar en el navegador el aplicativo.
Después, tienes los siguientes directorios:
* node-modules: En esta carpeta están todas las librerías que utiliza tu proyecto para funcionar, y que están previamente definidas por create-react-app. 
* public: Aquí vive el archivo index.html de tu aplicación, donde va a ser insertada toda tu aplicación de React.
* src: Aquí trabajarás todo tu proyecto, y contiene los archivos iniciales para trabajar con react.
---------------------------------------------------------------------------------------------------------------------------------
### Aquí colocare los pasos para ubicarlo con PAGES ⚙️
# React-Todolist
### Pasos para publicar pages con react.js
a) En el terminal, instalar gh-pages con el comando:
```
npm install --save-dev gh-pages
```
b) En el archivo *package.json* que se encuentra en nuestro proyecto y colocar la propiedad **homepage** de esta manera:
```
"homepage":"https://usuario.github.io/nombre-repositorio"
```
c) en ese mismo archivo en las sección script colocar **predeploy** y **deploy**, así:
```
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
```
d) Luego, en el terminal ejecutar el comando:
```
npm run deploy
```
*NOTA:*
Después de finalizar tu proyecto y subirlo a tu repositorio.Y realizar todos los pasos anteriores. Al finalizar ya no es necesario hacer otro commit, se enlaza por si sola. Y puedo dejarlo normal.

Esta información lo saque del siguiente enlace: (https://platzi.com/tutoriales/1548-react/4065-guia-para-usar-github-pages-en-tus-proyectos-de-reactjs/)
---------------------------------------------------------------------------------------------------------------------------------
Nota Personal: tuve algunas vulnerabilidades con **npm** y lo arregle de esta manera:
1) En el terminal dentro de proyecto puse el siguiente comando para ver los detalles de las vulnerabilidades:
```
npm audit
```
2) Con el comando anterior me indicaron como actualizar mis vunerabilidades:
```
npm update eslint-utils --depth 3
```
```
npm update handlebars --depth 7
```
