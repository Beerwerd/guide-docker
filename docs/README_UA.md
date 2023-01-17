## Docker Гід
Запускай свій код у віртуальних контейнерах за допомогою Docker

### Встановити Docker
- зкачате Docker Desktop додаток відповідно до вашої операційної системи. [Зкачати можна тут](https://www.docker.com/get-started/)
  ![downloadpage](./img_1.png)


- Встановіть та запустіть docker desktop
  ![downloadpage](./img_2.png)


### Білд та запуск докер-контейнерів 

у корньовій папці проекту запустіть команди:
````shell
docker-compose build
docker-compose up -d
````

в docker desktop (вкладинка "Containers / Apps") повинен зʼявитися запис як на зображенні
![downloadpage](./img_3.png)

щоб перевірити, що сервер працює, виконайте GET запит на адресу `http://localhost:3000/` (наприклад з командного рядка)
```shell
curl http://localhost:3000/
```

ви повинні отримати список користувачів у відповідь:
![downloadpage](./img_4.png)