# IRAS Admin Portal - Micro-Frontend Architecture with Vue 3 and Nx

This repository contains the **IRAS Admin Portal**, a project structured with **Vue 3** and **Nx** utilizing a **Micro-Frontend Architecture**. It is designed to manage various administrative operations, such as university admissions, student registrations, and other management modules.

## Features

- **Micro-Frontend Architecture**: Decoupled, modular components for easy scalability.
- **Nx Monorepo**: Efficient management of multiple applications and libraries within one repository.
- **Vue 3**: Lightweight and modern frontend framework.
- **Cypress & Cucumber**: End-to-end testing with behavior-driven development (BDD) using Gherkin.

## Project Structure

```
iras-admin-portal/
├── package.json              # Root package.json
├── nx.json                   # Nx workspace configuration
├── tsconfig.base.json        # TypeScript base configuration
├── packages/                 # Micro-frontends and host
│   ├── host/                 # Shell (host) application
│   ├── mfe-admission/        # Admission micro-frontend
│   ├── mfe-registration/     # Registration micro-frontend
└── README.md                 # This file
```

### Micro-Frontends

- **Host Application**: Main shell application that integrates all micro-frontends.
- **mfe-admission**: Micro-frontend for handling university admissions.
- **mfe-registration**: Micro-frontend for managing student registrations.

## Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 16.x or higher
- **Nx CLI**: For managing the workspace (`npm install -g nx`)
- **Vue CLI**: For building Vue applications (`npm install -g @vue/cli`)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sourcecode71/iras-admin.git
   ```

2. **Install dependencies**:

   ```bash
   cd iras-admin-portal
   npm install
   ```

## Running the Applications

You can serve the host application or any micro-frontend individually:

- **Serve the Host Application**:

   ```bash
   nx serve host
   ```

- **Serve the Admission Micro-Frontend**:

   ```bash
   nx serve mfe-admission
   ```

- **Serve the Registration Micro-Frontend**:

   ```bash
   nx serve mfe-registration
   ```

Once the host application is running, visit [http://localhost:4200](http://localhost:4200) to see the integrated micro-frontends.

## Cypress and Cucumber Testing

We use **Cypress** for automated end-to-end testing, with **Cucumber** and **Gherkin** syntax for BDD. Tests are structured for each micro-frontend.

### Running Cypress Tests

- **Host application**:

   ```bash
   nx e2e host
   ```

- **Admission micro-frontend**:

   ```bash
   nx e2e mfe-admission
   ```

- **Registration micro-frontend**:

   ```bash
   nx e2e mfe-registration
   ```

## Common Libraries

For shared functionality (e.g., models, services), we utilize the `libs` directory:

```bash
packages/libs/
```

### Example: Shared Model

```ts
// packages/libs/models/semester.model.ts
export interface SemesterModel {
  semesterId: number;
  name: string;
}
```

## API Integration

Services for API calls can either be placed inside each micro-frontend or in the `libs` directory for shared use:

```bash
packages/libs/services/
```

## Contributing

Contributions are welcome! Please feel free to fork this repository, open issues, or submit pull requests.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

This is a detailed and clean `README.md` file for your **IRAS Admin Portal** using **Vue 3**, **Nx**, and **Micro-Frontend Architecture**.
