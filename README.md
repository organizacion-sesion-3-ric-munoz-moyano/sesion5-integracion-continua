# Test esPar

## Documentación
El test definido en `testPar.js` llama a la función esPar del archivo operations.js con diversos valores para verificar que funciona correctamente. 

- [Mocha](https://mochajs.org/#getting-started)
- [Should](https://shouldjs.github.io/)
 
## Instalación
```
npm install
```

## Ejecución de tests
```
npm test
```

## Añadir más tests
Se pueden añadir más ficheros de test en la carpeta `test`. Los nuevos archivos que se añadan a dicha carpeta se ejecutarán al llamar a `npm test`.

La metodología de [Desarrollo Guiado por Pruebas](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) consiste en los siguientes pasos:

1. Elegir un requisito
2. Escribir un test
3. Comprobar que el test falla
3. Crear el código para que pase el test
4. Comprobar que se pasan __todos los tests__
5. Refactorizar el código (eliminar duplicidades, etc.)
6. Volver a comprobar que se pasan todos los tests

