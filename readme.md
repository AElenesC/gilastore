# GilaStore

**Author:** Adrian Elenes

GilaStore is a full-stack, containerized e-commerce and point-of-sale (POS) application built with a modern technology stack. It is fully orchestrated using Docker Compose for seamless deployment, scalability, and local development.

---

## System Description

**GilaStore** is designed to provide a comprehensive, decoupled e-commerce and point-of-sale workflow, split into a robust backend API and a reactive single-page frontend interface.

---

## Architecture & Design Decisions

### 1. Client-Server Architecture & RESTful API
The project adopts a decoupled client-server architecture communicating via a robust **RESTful API** built with **Laravel (PHP)**.
* **Power & Versatility:** Laravel offers a mature ecosystem, robust security tools, and exceptional capabilities for managing complex business logic and database transactions.
* **Parallel Development & Flexibility:** Decoupling the frontend from the backend enables concurrent development workflows. Specialized technologies can be chosen for each layer—such as **ClojureScript with Reagent** on the client side—allowing services to be hosted on separate servers or infrastructure (e.g., serving static frontend assets via a CDN while running the backend on a dedicated application server).

### 2. Relational Database Design & Normalization
Data persistence relies on **MariaDB**, structured under strict relational design principles:
* **Normalization:** Database schemas adhere up to the Third Normal Form (3FN) to eliminate data redundancy, optimize storage efficiency, and guarantee referential integrity across catalogs, inventories, and sales records.
* **Transactional Integrity:** Foreign keys and database-level constraints ensure strict consistency during critical point-of-sale (POS) and e-commerce transactions.

---

## Alternatives Considered

During the design and architectural planning phases of GilaStore, several alternative technology stacks and approaches were evaluated:

1. **Backend Alternatives (Node.js / Express vs. Laravel):**
   * *Considered:* Node.js with Express and TypeScript for a unified JavaScript/TypeScript ecosystem across both frontend and backend.
   * *Decision:* **Laravel (PHP)** was chosen for its out-of-the-box robust ecosystem, powerful Eloquent ORM, built-in authentication scaffolding, and rapid development capabilities for structured REST APIs and database migrations.
2. **Frontend Alternatives (React / Vue.js vs. ClojureScript & Reagent):**
   * *Considered:* React or Vue.js as mainstream, industry-standard component frameworks.
   * *Decision:* **ClojureScript** with **Reagent** was selected to leverage functional programming paradigms, immutable data structures, and highly efficient reactive DOM updates through Clojure's ecosystem.
3. **Database Alternatives (PostgreSQL / MongoDB vs. MariaDB):**
   * *Considered:* PostgreSQL for advanced object-relational features, or MongoDB for schema-less document flexibility.
   * *Decision:* **MariaDB** was chosen for its exceptional performance, reliability in relational data structuring, and seamless integration with containerized environments and PHP frameworks.

---

## Security & Authentication
Security is integrated into the core layers of the application to protect against common web vulnerabilities and unauthorized access:
* **Session & Token Management:** Secure user authentication handled via **JWT (JSON Web Tokens)** for stateless, secure API communication.
* **API Header Protection:** Integration of custom headers (such as `x-api-key` validation) to ensure that incoming requests originate strictly from trusted clients.
* **Input Sanitization & Validation:** Strict backend validation and sanitization across all entry points to effectively prevent **Cross-Site Scripting (XSS)** and **SQL Injection** attacks.

---

## Key Functional Capabilities
* **Product & Inventory Management:** Structured management of catalog items, categories, pricing, and stock status backed by relational integrity.
* **Sales & Point of Sale (POS) Logic:** Handles transaction flows, order processing, and administrative tracking tailored for retail environments.
* **RESTful API Architecture:** Secure endpoints managed via Laravel handling authentication, business logic validation, and data serialization.
* **Reactive User Interface:** Fast, component-based user interactions powered by ClojureScript and Reagent, delivering a seamless single-page experience.

---

## Project Structure & Tech Stack

The project is structured as a monorepo managed through Docker containers:

```text
gilastore/
├── docker-compose.yml       # Master Docker orchestration file
├── gilastore-api/           # Laravel backend service & Dockerfile
├── gilastore-ui/            # ClojureScript frontend service & Dockerfile
└── postman/                 # Postman API testing collection
    └── GilaStore.postman_collection.json
```

* **Backend API (`gilastore-api`)**: Built with **Laravel (PHP)** for RESTful endpoints, security, and business logic.
* **Database (`gilastore-db`)**: Powered by **MariaDB** for reliable relational data persistence.
* **Frontend UI (`gilastore-ui`)**: Built with **ClojureScript** (Shadow-CLJS and Reagent), served via a lightweight web server container.

---

## Environment Configuration (.env)

Pre-configured environment files (such as `.env` inside the API service) are included in the repository for immediate local setup.

> **Security Note:** Credentials and configurations provided in these files are strictly for local development and testing purposes and do not expose production secrets.

---

## Dataset & CSV Notice

> **Note:** The provided example CSV file used for data initialization or testing was downloaded on **Monday, October 19, 2026**.

---

## Prerequisites

To run this project locally, you only need:
* **Docker** installed on your machine.
* **Docker Compose** (typically bundled with Docker Desktop).

---

## Quick Start & Installation

To clone and run the entire stack on any machine (Windows, Linux, or macOS):

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AElenesC/gilastore.git
   cd gilastore
   ```

2. **Build and start the containers:**
   From the root directory containing `docker-compose.yml`, run:
   ```bash
   docker compose up -d --build
   ```

3. **Run database migrations and seeders:**
   Once the containers are up and running, execute the database migrations and seeders via artisan inside the API container:
   ```bash
   docker compose exec gilastore-api php artisan migrate --seed
   ```

4. **Access the application:**
   * **API / Backend:** Accessible via your configured ports in `docker-compose.yml`.
   * **Frontend UI:** Accessible via your local browser setup.

---
## Accessing the Application & Testing via Postman

### 1. Frontend Access
* Open your browser and navigate to the frontend user interface via port **4200**:
  ```text
  http://localhost:4200
  ```
  
  There are two users preloaded: 
  
		email: admin@gilastore.com			password: pass123
		
		email: shopper@gilastore.com		password: pass123

### 2. Testing the API with Postman
To interact with the backend API securely using Postman, ensure you configure the following request parameters:

* **Required Headers:**
  * `Accept`: `application/json`
  * `x-api-key`: `[Your configured API key]` *(Required to pass API header validation)*

* **Authentication Flow (JWT):**
  1. Send a `POST` request to the login endpoint with valid user credentials.
  2. Extract the **JWT token** returned in the login response payload.
  3. For all subsequent protected requests, go to the **Authorization** tab in Postman, select **Bearer Token**, and paste your JWT token.


### API Testing (Postman Collection)

To simplify testing the REST API endpoints, a pre-configured Postman collection is included in the repository under the `postman/` folder:
- **File:** `postman/GilaStore.postman_collection.json`

### Import & Usage Instructions:
1. Open Postman and click **Import**.
2. Drag and drop the `GilaStore.postman_collection.json` file.
3. Ensure your environment variables or request headers are set with:
   - `Accept: application/json`
   - `x-api-key: your-api-key`
4. Run the `/api/login` endpoint first to retrieve your JWT, then paste it into the **Bearer Token** authorization tab for protected routes.
	**Note**: The bearer token is going to be updated into the Authorization/Bearer Token section aumatically due to automatization script located in `/api/login` post request.
---

## License

This project is developed for educational and portfolio purposes.