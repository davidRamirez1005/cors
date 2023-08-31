# cors

##### Conjunto de directivas que permite a los navegadores web acceder a recursos de origen cruzado

- las directivas CORS son un conjunto de reglas que definen como los navegadores pueden acceder a recursos
-  Los recursos de origen cruzado son recursos que se encuentran en un dominio diferente al dominio de la página que los solicita.

Por ejemplo, si una página web se encuentra en el dominio `example.com`, no podrá acceder a un recurso que se encuentra en el dominio `example.org` sin el permiso del servidor que aloja el recurso.

Las directivas CORS permiten a los desarrolladores establecer las reglas para el acceso a recursos de origen cruzado. Estas reglas pueden ser utilizadas para mejorar la seguridad de las aplicaciones web, así como para permitir que las aplicaciones web se comuniquen entre sí sin problemas.

En Node.js, los CORS se implementan mediante el middleware CORS. El middleware CORS se puede utilizar para permitir que los navegadores web accedan a recursos de origen cruzado, o para restringir el acceso a determinados dominios o orígenes.

1. Para habilitar el middleware CORS en Node.js, se puede instalar el módulo `cors` de NPM. Una vez instalado
2. `npm install cors`

- **Permitir que un navegador web solicite métodos específicos:** Los navegadores web generalmente solo pueden solicitar métodos HTTP específicos, como GET y POST, a recursos de origen cruzado. Para permitir que un navegador web solicite métodos adicionales, el servidor que aloja el recurso puede enviar el encabezado `Access-Control-Allow-Methods` con una lista de métodos permitidos.
- **Permitir que un navegador web envíe encabezados específicos:** Los navegadores web generalmente solo pueden enviar encabezados específicos, como `Content-Type` y `Accept`, a recursos de origen cruzado. Para permitir que un navegador web envíe encabezados adicionales, el servidor que aloja el recurso puede enviar el encabezado `Access-Control-Allow-Headers` con una lista de encabezados permitidos.

```javascript
const corsOptions = {
  origin: 'https://example.com', // Replace with your allowed origin
  methods: 'GET,PUT,POST,DELETE',
  optionsSuccessStatus: 204 // No Content
};


app.use(cors(corsOptions));
```

