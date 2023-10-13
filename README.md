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