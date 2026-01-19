# React Learning Journey

A comprehensive collection of React projects demonstrating core concepts, from foundational UI components to advanced state management and routing patterns.

## 📚 Projects Overview

### 1. **01-basic-ui-with-react**
Introduction to React fundamentals with basic UI components.
- **Topics**: Component basics, JSX syntax, component structure
- **Components**: Navbar, SectionOne
- **Tech Stack**: React, Vite, ESLint

### 2. **02-Props-Mini-Project**
Learn how to pass data between components using props.
- **Topics**: Props, data flow, reusable components
- **Components**: Card (reusable card component with props)
- **Key Learning**: Unidirectional data flow

### 3. **03-Conditional-Rendering-In-React**
Master conditional rendering patterns in React.
- **Topics**: Conditional rendering, ternary operators, logical operators
- **Components**: DashBoard (displays content conditionally)
- **Key Learning**: Different methods to conditionally render UI

### 4. **04-UI-Project**
Complex UI project with multiple sections and organized component structure.
- **Topics**: Component composition, layout patterns, complex state management
- **Components**: 
  - Section 1: Navbar, PageOneContent, Center, LeftSideContent, RightSideContent
  - Section 2: PageTwoContent
- **Key Learning**: Organizing large component hierarchies

### 5. **05-UseState-Mini-Project**
Introduction to React hooks, specifically the `useState` hook.
- **Topics**: State management, hooks, re-rendering
- **Components**: Card (with state management)
- **Key Learning**: Managing component-level state with hooks

### 6. **06-Two-Way-Binding-Mini-Project**
Implement two-way data binding patterns in React.
- **Topics**: Form handling, controlled components, event handling
- **Components**: Card, PageOne
- **Key Learning**: Binding form inputs to state and vice versa

### 7. **07-Axios-Mini-Project**
Learn HTTP requests and API integration in React.
- **Topics**: Axios library, API calls, async operations, data fetching
- **Key Learning**: Making HTTP requests to external APIs

### 8. **08-React-Router-DOM**
Navigation and routing in single-page applications.
- **Topics**: React Router, page navigation, dynamic routes
- **Pages**: Home, About, Contact
- **Components**: Navbar (for navigation)
- **Key Learning**: Building multi-page SPAs without full page reloads

### 9. **09-Context-API**
Advanced state management using Context API.
- **Topics**: Context API, global state, prop drilling prevention
- **Key Learning**: Sharing state across components without prop drilling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Running a Project

1. Navigate to the project directory:
   ```bash
   cd 01-basic-ui-with-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port)

## 📁 Project Structure

Each project follows a standard Vite + React setup:
```
project-folder/
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # Linting rules
```

## 💡 Learning Path

Follow this recommended order to master React:

1. **Start**: 01-basic-ui-with-react → Learn React basics
2. **Data Flow**: 02-Props-Mini-Project → Understand props
3. **Rendering**: 03-Conditional-Rendering-In-React → Learn conditional rendering
4. **Complex UI**: 04-UI-Project → Apply concepts to larger projects
5. **State**: 05-UseState-Mini-Project → Master hooks and state
6. **Forms**: 06-Two-Way-Binding-Mini-Project → Handle form inputs
7. **APIs**: 07-Axios-Mini-Project → Fetch external data
8. **Routing**: 08-React-Router-DOM → Build multi-page apps
9. **Advanced**: 09-Context-API → Global state management

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality and linting
- **Axios** - HTTP client (used in 07-Axios-Mini-Project)
- **React Router DOM** - Routing (used in 08-React-Router-DOM)

## 📝 Key Concepts Covered

- ✅ Components and JSX
- ✅ Props and data flow
- ✅ State and Hooks (useState)
- ✅ Conditional rendering
- ✅ Event handling and forms
- ✅ HTTP requests and APIs
- ✅ Client-side routing
- ✅ Global state management (Context API)

## 📄 License

This is a learning project repository.

---

**Happy Learning!** 🎓 Feel free to modify and experiment with these projects to deepen your React knowledge.