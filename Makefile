dev-build:
	docker build \
	-t yf-client-nginx-dev:1.1 \
	-f Dockerfile.dev .

staging-build:
	docker build \
	-t yf-client-nginx:1.1 \
	--build-arg BASE_URL=http://localhost:5000 \
	.
