Se necesita modificar la solución actual para permitir comprar productos en
distintas monedas. El producto tendrá un precio principal que corresponde a
una moneda, y luego desde el checkout el usuario comprador tiene la opción de
cambiar el precio a su moneda local. Por lo que el sistema debe poder calcular el
precio en la moneda seleccionada de manera dinámica.

Consideraciones:

- Para obtener las tasas de cambio se debe consultar una API externa.
- La API externa usada tiene un límite de 1000 requests por minuto.
- Las tasas de cambio pueden variar cada 15 minutos (estimado).
- Se espera un alto volumen de usuarios utilizando el checkout.
- La API para consultar las tasas de cambio solo puede consultarse usando
  un access token que no debe exponerse en el SPA.
- La API en cuestión hace uso de una base de datos centralizada.

Solución:

Para realizar esta solución se deberá agregar una tabla que contenga las tasas de cambios: tasa(moneda_actual,moneda_extranjera, porcentaje_cambio, ultima_actualizacion). Entonces cuando un usuario realiza un checkout, la moneda (currency) debera ser ingresada en el cuerpo del body y lo primero que se debera realizar es la busqueda del producto ingresado en la request. Aca pueden haber dos escenarios posibles:

- La moneda ingresada es igual a la moneda del producto: En este caso no se debera consultar ningún servicio y se procede a realizar el checkout con los datos ingresados.
- La moneda ingresada es distinta a la moneda del producto: En este caso se debera buscar el registro de la "tasa" con los datos(moneda_actual = moneda_ingresada, moneda_extranjera = moneda_producto) en el caso de ser encontrado se debe verificar en el campo "ultima_actualizacion":
  Para el caso de que sea menor a 10 minutos se debera obtener el porcentaje_cambio y multiplicar por el precio del producto y la cantidad de productos ingresada en el checkout, liego se almacenaran los datos en la tabla purchases. Para los casos donde no se obtiene el registro de la tabla tasa o la fecha es mayor a 10 minutos se debera consumir a traves de un api gateway un servicio para obtener un token de accesso, una vez obtenido el token de accesso luego se realiza la consulta para obtener la tasa de cambio con la moneda del producto y la moneda ingresada, al obtener la respuesta se debera actualizar/crear el registro en la tabla "tasa" y se multiplcara el porcentaje_cambio por el precio del producto y la cantidad ingresada para almacenar el checkout en la tabla purchases.
