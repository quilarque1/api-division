# api-division
Api encargada de dividir valores dado un parámetro de entrada.

## Como Usar:

#instalar dependencias
npm install

#correr api
node src/app.js

##Docker
docker-compse up -build

#apis de las que depende:
- https://github.com/quilarque1/api-suma
- https://github.com/quilarque1/api-resta
- https://github.com/quilarque1/api-division
- https://github.com/quilarque1/api-multiplicacion

#Url local
<span>

*http://localhost:3000*

</span>

#Verificar si la api esta arriba

**GET:**
***``
{url}/health
``***
##

## Como usra


**GET:** 
***``{url}/division?operacion=3/3/3
``***

**Where:**

| Parameter    |Descripction   |Example   |
| ------------| ------------ | ---------- |
|  operacion=3/3/3  |  es la cadena de operaciones a realizar  | **3/3/3** |

**Ejemplo respuesta:**

```json
{
    "division": {
        "operacion": "3/3/3",
        "resultado": 0.3333333333333333
    }
}
```

**Donde:**

| Parameter         |Descripction         |Example        |
| ------------      | ------------        | ------------  |
|  multiplicacion            |  arreglo de operaciones  |  **operacion, resultado**  |
|  operacion        |  cadena de opraciones a realizar | **3/3/3**|
|  resultado        |  resultado de la operacion | **0.3333333333333333**|

## Si necesitas otra informacion

Escribirme a:

**quilarque1@gmail.com**
