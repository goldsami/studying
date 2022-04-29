run:
	docker run -d -p 80:8080 --rm --name docker_1_container docker_1_image
run-dev:
	docker run -d -p 80:8080 -v "/Users/max/Desktop/Projects/studying/tools/docker/docker_1:/app" -v /app/node_modules --rm --name docker_1_container docker_1_image
stop:
	docker stop docker_1_container