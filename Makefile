up:
	docker-compose up -d --build

stop-dev:
	docker-compose stop

prod:
	docker-compose -f docker-compose-prod.yml up -d --build

stop-prod:
	docker-compose -f docker-compose-prod.yml stop

