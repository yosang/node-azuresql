# POST /cities
```sh
curl -X POST http://localhost:3000/cities --header 'Content-Type: application/json' --data '{ "name":"Tromsø", "country":"Norway" }'
```

# DELETE /cities/:name

```sh
curl -X DELETE http://localhost:3000/cities/3
```
