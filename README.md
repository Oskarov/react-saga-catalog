# React Saga catalog 

### Interface for interacting with rest api on redux saga 
### Интерфейс взаимодействия с rest на redux saga

---

Personal project of [Dmitriy Oskarov](http://frontendfrontier.com/)

---

Technology stack:

* React
* Redux
* Redux-Saga

---

### Attention

This project is not a demonstration of optimal solutions and is aimed at studying specific things.

Этот проект не является демонстрацией оптимальных решений и направлен на изучение конкретных технологий и подходов.

---

### Description

This is a personal project to study architecture based on the Rest api interaction logic
and the system at the center of the business logic of which is redux saga.

Это персональный проект для изучения архитектуры, основанной на логике взаимодействия Rest api 
и системы в центре бизнес логики которой redux saga.

---

### What's interesting

* Loading information through sagas when initializing the application (simulating the data that the entire application needs).
* Loading information through sagas on router events. Removing the business logic for loading data from the view. Events are triggered by a special routeSaga.
* planets - selection of planets with parallel operation of the reducer and interception by the saga.
* starships is an asynchronous saga on the refresh button that cancels duplicate requests in the Axios instance.
* vehicles - a saga on the refresh button that executes heavy requests exclusively in turn (action channel).
* people - a saga with search and pagination, as well as the transition to detailing tied to routing.


* Загрузка информации через саги при инициализации приложения (имитация данных которые нужны всему приложению).
* Загрузка информации через саги на событиях роутера. Вынесение бизнес логики загрузки данных из view. События тригерятся специальной routeSaga.
* planets - выбор планет с параллельной работой редюсера и перехватом сагой.
* starships - асинхронная сага на кнопке обновления, которая отменяет повторяющиеся запросы в инстансе Axios.
* vehicles - сага на кнопке обновления которая исполняет тяжелые запросы исключительно по очереди (action channel).
* people - сага с поиском и пагинацией, а так же переходом к детализации завязанной на маршрутизации.

---

### Installing

1. clone
2. yarn install
3. yarn start

---

thanks [wise.js](https://www.patreon.com/wisejs) for lessons and inspiration