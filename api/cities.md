# POST /cities
```sh
curl -X POST http://localhost:3000/cities --header 'Content-Type: application/json' --data '{ "name":"Tromsø", "country":"Norway" }'
```

# DELETE /cities/:id

```sh
curl -X DELETE http://localhost:3000/cities/3
```
