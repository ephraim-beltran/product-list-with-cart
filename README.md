# Product List with Cart

A modern React-based application that allows users to browse a product list and manage items in a shopping cart. Built with React, Redux Toolkit, and React Router.

## Features

- Browse a list of products
- Add products to cart
- View cart contents
- Remove items from cart
- Responsive design that works on all devices
- Modern UI with clean and intuitive interface

## Tech Stack

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Vite for build tooling
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ephraim-beltran/product-list-with-cart.git
```

2. Install dependencies:
```bash
cd product-list-with-cart
npm install
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To create a production build:
```bash
npm run build
```

The build files will be generated in the `dist` directory.

## Project Structure

```
src/
├── components/       # Reusable React components
├── features/         # Redux features and slices
├── pages/           # Page components
├── assets/          # Static assets (images, fonts)
├── styles/          # Global styles and CSS modules
└── App.jsx          # Main application component
```

## Development

### Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Creates a production build
- `npm run preview`: Previews the production build

### Code Style

The project uses ESLint for code linting. Please ensure your code follows the configured style rules.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Frontend Mentor for providing the design challenge
- React and Redux communities for their excellent documentation and support
