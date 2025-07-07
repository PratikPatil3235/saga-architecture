# 🧩 NestJS Microservices To-Do App – CQRS + Saga Architecture

This project is a complete demonstration of building a distributed microservices-based application using **NestJS**, **CQRS**, and the **Saga pattern**. It simulates a scalable and maintainable To-Do app using event-driven architecture, monorepo structure, and PostgreSQL for persistence.

---

## 🚀 Technologies Used

- **NestJS** – Progressive Node.js framework
- **Microservices** – Communication via **TCP transport**
- **CQRS (Command Query Responsibility Segregation)** – Separation of write and read logic
- **Saga Architecture** – Managing distributed transactions with events and side effects
- **MonoRepo** – Clean and maintainable code structure (`apps/`, `libs/`)
- **PostgreSQL** – Relational database integration using **TypeORM**
- **JavaScript / TypeScript** – Core language support

---

## ✨ Features

- Create, update, fetch, and manage to-do tasks using **commands and queries**
- Handle **side-effects** and notifications using **Saga orchestration**
- Use **@MessagePattern** and **ClientProxy.send()** to connect services via TCP
- Validate incoming data using DTOs and `class-validator`
- Emit and handle custom events like `TodoCreatedEvent`, `TodoUpdatedEvent`

---

## 📦 Setup & Run

### 1. Clone the repo

```bash
git clone [https://github.com/your-username/nestjs-todo-saga-cqrs.git](https://github.com/PratikPatil3235/saga-architecture.git)
cd nestjs-todo-saga-cqrs
npm install

```

# In one terminal - run the API Gateway
npm run start:dev api-gateway

# In another terminal - run the To-Do microservice
npm run start:dev todo-app
