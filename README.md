# Artisan Dashboard

Modern administrative dashboard for product management and authentication. Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## 📋 Description

Artisan Dashboard is a complete web administration application that provides:

- 🔐 **Secure authentication system**
- 📦 **Product management** with intuitive interface
- 🎨 **Responsive design** based on Tailwind CSS
- ⚡ **High performance** with Vite and React 19
- 🔄 **State management** with Zustand
- 📡 **Data management** with TanStack Query

## 🚀 Key Features

### Authentication
- Secure login
- Session management
- Backend API integration

### Product Management
- Product listing
- Create, edit, and delete products
- Search and filtering
- Pagination

### User Interface
- Reusable components
- Consistent theme with Radix UI
- Responsive design
- Radix UI Icons iconography

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.9 |
| **Build Tool** | Vite 7 |
| **Styles** | Tailwind CSS + Radix Themes |
| **State Management** | Zustand |
| **Data Fetching** | Axios + TanStack Query |
| **Routing** | React Router 7 |
| **UI Components** | Radix UI |
| **Linting** | ESLint 9 |

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

```bash
# Clone the repository
git clone <repository-url>
cd artisan-dashboard

# Install dependencies
npm install

# Configure environment variables (if needed)
# cp .env.example .env
```

## 🏃 Running the Application

### Development
```bash
npm run dev
```
The application will run at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── assets/          # Images and static resources
├── core/            # Core logic (API, services)
├── features/        # Features by module
│   ├── auth/        # Authentication
│   ├── products/    # Product management
│   └── shared/      # Shared components
├── helpers/         # Utility functions
├── lib/             # Libraries and configurations
├── main.tsx         # Entry point
└── ArtisanApp.tsx   # Root component
```

## 🔐 Authentication

Authentication is managed through:
- **Zustand** for global state
- **LocalStorage** for persistence
- **Backend API** for validation

## 📡 API Integration

Uses **Axios** + **TanStack Query** for:
- Data fetching
- Automatic caching
- Error handling
- State synchronization

## 🎨 Styling

- **Tailwind CSS** for utilities
- **Radix Themes** for base components
- **CSS Modules** for specific styles

## 📝 Code Conventions

- Components with PascalCase
- Functions/variables with camelCase
- Types/Interfaces with PascalCase (optionally prefixed with `I`)
- Custom hooks with `use` prefix

## 🚦 Version Control

Main branch: `develop`

To contribute:
1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make commits: `git commit -m "feat: description"`
3. Push: `git push origin feature/new-feature`
4. Create a Pull Request

## 🤝 Contributing

Contributions are welcome. Please:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Artisan Development Team**

## 📞 Contact

For questions or support, contact the development team.

---

**Last updated:** November 2025
