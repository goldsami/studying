To build image use:

```
docker build -t name .
```

To run container use: 

```
docker run -p 5000:8080
```

Where 5000 is outside port and 8080 is inside port which is declared in Dockerfile

To run docker compose use:

```
docker-compose up
```