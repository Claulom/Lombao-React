Este es un proyecto educativo, realizado en CoderHouse

Trata de un E-commerce creado en React.
Para su realización se utilizo, React, Css, React Router Dom, Firebase, Reach Ui. 

Para iniciar el proyecto se debe instalar el package node, con npm install, para poder crear las dependencias, 
levantar el servidor en la raiz del proyecto con: 
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Ya en el proyecto, la página va a solicitar un login, creado con Auth de firebase, guardándose en auth de firebase, y lo redirigirá a la página de los productos. 

En la sección de productos, puede visualizar las cards de cada item con Nombre, Precio y un botón que permite ver el detalle. Asi mismo cuenta con un botón Categorias, que filtra por categorias las cards. 

Estando en el detalle del procuto, se puede agregar al carrito, volver a la página Productos, o ir al carrito. 

Dentro del carrito, se ve la cantidad, precio unitario y precio total de la compra deseada, también cuenta con un botón para eliminar el producto, o para vaciar el carrito. 

Al tener los ítems seleccionados para la compra, puede finalizar la compra con el botón Finalizar Compra, que lo redirigirá a un fórmulario para obtener los datos del usuario. 
Al llenar los campos, se puede enviar la compra, y se crea la orden en firebase,  donde queda la página de agradecimiento y un botón para volver a los productos. 



https://user-images.githubusercontent.com/88116140/155811275-89b0f502-acb1-478e-a4f8-c26692244a1d.mp4

