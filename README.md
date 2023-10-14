# Maestría en software
## PATRONES_DE_DISEEÑO_API - Modulo de Patrones de Diseño de Apis
Proyecto para clases de patrones de diseñoo de apis

### Gestión del Asincronimso (FrontEnd)
    # Tipos de conectores
    - Sincrono: 
        La respuesta sucede en el presente, una operación síncrona esperará el resultado (Responde en un orden ).
        Bloqueante
        El emisor envia un mensaje al receptor y espera es decir no sigue ejecutando hasta que no recibe el resultado, es tipico en lenguajes orientados a objetos.
    - Asíncrono: 
        La respuesta sucede a futuro, una operación asíncrona no esperará el resultado (Las respuesta no se dan en el orden que se solicito).
        No Bloqueante.
        Un Componente llama a otro, este componente sabe a quien esta llamando y lo llama, pero no espera a que termine esa ejecución  si no que simplemente sigue con su trabajo y en algun momento evaluara cual fue el resultado de esa ejecución.
        Esto es tipico en aplicaciones desconectadas como React, App Movil.
        Esto se puede utilizar atravez de promesas o diferetes estructuras que no spermites realizar un llamado asincronico.

# Ejecutar con Life Server


### Top 6 API Architecture Styles
Las API son la columna vertebral de nuestro mundo digitalinterconectados
Las API actuan como un puente, permitiendo que distintos    componentes de software se comuniquen e interactuen.
Son responsables del intercambio de datos, llamada a funciones y la integracion general entre diferentes sistemas de software.}
Para fcilitar estas operaciones existen varios estilos arquitetonicos, cada uno con su propia filosofia de diseño y casos de uso.
# SOAP - XML-based for enterprise application: 
Es un veternno en el campo, maduro, completo y basado en XML.
Se utiliza en mucho en servicios financieros y pararelas de pagos, donde  la seguridad y la confiabilidad son claves.
Sin embargo si estas trabajando con una aplicacion movil ligera o en un prototipo rapidom SOAP pede resultr excesivo debido a  su complejidad y verbosidad.


# API RESTful - Resource-based for web server: 
Columna vetebral del internet.
Metodos HTTP populares, faciles de implementar y de utilizar.
La mayoria de los servicios web con los que interactuan a diario como Youtube funcionan con API RESTful.
Pero recuerde, si necesita datos en tiempo real u opera con un modelo de datos altamente conectado, es posible que rest no sea la mejor opcion.


# GraphQL - Query Language reduce network load:
No es solo un estilo arquitectonico sino  tambien un lenguaje de consulta que permite a los clientes solicitar datos especificos segun lo necesiten .
Esto significa que no habra mascapturas excesivas o insuficientes de datos.
Pides exactamente lo que necesitas.
Esto conduce a una comunicacion en red mas eficiente y a unan respuestas mas rapidas.
Facebook desarrollo GraphQL para ofrecer datos eficientes y precisos a sus miles de millores de usuarios.
Ahora lo utilizan empresas como GitHub y Shopify.
Su flexibilidad y eficiencia lo convierten en una buena  opcion para aplicaciones con requisitos de datos complejos.
Pero GraphQL biene con una curva de aprendisaje pronunciada y puede ser excesivo para aplicaciones mas simples.
Tambien requiere mas procesamiento en el lado del servidor debido a sus capacidades de consulta flexibles.

# gRPC -   High performance for microservicios:
Es mpderno, de alto rendimiento y utiliza buferes de protocolo.
Es uno de los favoritos para las arquitecturas de microservicios y empresas como Netflix utilizan gRPC para gestionar su imensa comunidad entre servicios.
Sin embargo si trabajas con clientes de navegador, gRPC puede plantear algunos desafios debido a la compatibilidad limitada de navegadores.

# WebSocket - BI-directional for low-latency data exchange:
Tiene que ser con conexiones persistentes, bidireccional y en tiempo real.
Es pecfecto para aplicaciones de chat en vivo y juegos en tiempo real, donde el intercambio de datos de baja latencia es crucial.
Pero si su aplicacion no requiere datos en tiempo real, usar WebSocket puede suponer una sobrecarga inncesesaria.


# Webhook - Asynchronous for event-driven application:
Se trata de una devolución de llamadas HTTP basada en eventos y operaciones asincronas.
Por ejemplo, GitHub utiliza webhooks para modificar a sus otros sistemas cada ves que se envia una nueva confirmacion.
pero recuerde si necesita un acomunicacion asincrona o respuesta inmediata, es posible que el webhoot no sea su mejor opcion.
