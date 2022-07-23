
# Consuming ViaCep's API Rest with OpenFeign

This project consumes ViaCep's Rest API, which, based on a person's name and CEP, returns the person's full address.

Note: CEP stands for "Código de Endereçamento Postal", the Brazilian equivalent of US zip code, so it will only work with a brazilian zip code.

## Installation

- Fork this repository to your PC and run it with your preferred IDE.
- Access: localhost:8080/swagger-ui.html in your browser.
- Click "POST", and then "Try it out".
- In "Request body" type:
 ```bash
  {
  "nome": "FIRST NAME HERE",
  "address": {
    "cep": "CEP HERE"
  }
}
 ```
- Click "Execute".
- If you enter a correct CEP, the information will be listed with a id.

## You can also:

- GET /clients: Executing this will return all searches made before.
- GET /clients/${id}: This will return a search by id.
- DELETE /clients/${id}: This will delete a search by id.