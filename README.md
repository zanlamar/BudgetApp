# Welcome to BudgetApp

This project was built as part of **Sprint 6 at the IT Academy**, showcasing my progress in front-end development. It applies core concepts like **HTML, SASS, and Bootstrap 5**, along with **component-service interaction, reactive forms with custom validation, Signals, and parent-child communication.** The result is a **responsive, interactive web app** where users can select services, get an automatic budget estimate, submit validated requests, and view or sort them using dynamic filters.


## 🍏 Features

- **Dynamic budget calculator** — always visible in a sticky container for quick reference.
- **Interactive service panels** — three main services displayed, each with expandable options (web version).
- **Adjustable quantities** — intuitive increase/decrease buttons for service customization.
- **Informative modal window** — accessible through a dedicated button for additional details.
- **Smart contact form** — includes example text, helpful hints, and real-time validation. The submit button activates only when all fields are correctly completed.
- **Automatic reset** — form fields and selected services are cleared upon submission.
- **Confirmation summary** — visually displays submitted information, chosen services, and the total price.
- **Flexible filtering** — reorder service cards by category, price (ascending/descending), or alphabetical order (A–Z/Z–A).
- **Responsive design** — fully optimized for desktop, tablet, and mobile devices.
- **Dark mode interface** — a sleek, modern look focused on readability and comfort.

## 🚀 Live Demo
[Feeling curious? See the live demo](https://budget-app-mu-inky.vercel.app/)


## 📂 Project Structure
This project uses a **feature-based Angular folder structure**, separating UI components, business logic, and configuration files for clean code organization and easy maintenance as the application grows.

```
src/
 ├── app/
 │    ├── components/            # Feature-based UI components
 │    │    ├── contact-form/     # User input and validation
 │    │    ├── final-card/       # Confirmation and summary card
 │    │    ├── final-price/      # Real-time budget display
 │    │    ├── home/             # Landing view
 │    │    ├── inputs/           # Shared form input fields with Angular components
 │    │    ├── order-list/       # Service list and ordering logic
 │    │    ├── panel/            # Service configuration panel
 │    │    └── service-card/     # Individual service display
 │    │
 │    ├── model/                 # Data models and constants
 │    │    └── pricing.constants.ts
 │    │
 │    ├── services/              # Business logic and state management
 │    │    ├── calculateBudget-service.ts
 │    │    ├── createOrder.ts
 │    │    ├── serviceState-service.ts
 │    │    └── *.spec.ts         # Unit tests for each service
 │    │
 │    ├── app.config.ts          # Global configuration
 │    ├── app.routes.ts          # Application routing
 │    ├── app.ts                 # Root module and bootstrap logic
 │    ├── app.html               # Root application template
 │    └── app.scss               # Root styles
 │
 ├── types/                      # Shared TypeScript interfaces and types
 ├── index.html                  # Entry point HTML
 ├── main.ts                     # Application bootstrap file
 └── styles.scss                 # Global styles
```


## ⛑️ Testing
Inspired by the MoSCoW methodology, key services were tested using Karma and Jasmine:
- **BudgetCalculatorService** — unit tests for core calculation logic.
- **ServiceState** — UI behavior and state management tested.
- **ConfirmedSubmission** — validated the creation of a proper submission with correct data.


## 👾 Technologies Used

- Angular 20.3.3
- TypeScript
- Angular Material
- SCSS & Bootstrap for styling
- Angular Signals for state management
- ESLint
- Karma / Jasmine


---


## 👩‍💻 Prerequisites

Before running this project, make sure you have installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI (20.3.3)

## ⚙️ Installation

1. Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

2. Clone the repository:

```bash
git clone https://github.com/zanlamar/BudgetApp.git
```

3. Navigate to project directory:
```bash
cd BudgetApp
```

4. Install dependencies:
```bash
npm install
```

5. Run the project: 
```bash
npx ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## 👟 Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```


---


## 🔮 Future Improvements
- **Shareable budget URLs** — generate unique links for each budget that can be shared with clients or downloaded for offline access.
- **Code optimization** — refactor existing logic for even cleaner, more maintainable code following best practices.
- **Comprehensive testing** — expand test coverage to include happy path scenarios, edge cases, and end-to-end testing.





