# CRM Dashboard

A modern, responsive CRM dashboard application built with React, TypeScript, and Tailwind CSS. This project implements a pixel-perfect design matching the provided Figma specifications with full mobile responsiveness.

## 🚀 Features

- **Dashboard Overview**: Comprehensive metrics cards, sales table, and data visualization
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Navigation**: Sidebar navigation for desktop, bottom navigation for mobile
- **Interactive Components**: Search dropdown, profile dropdown, pagination, and more
- **Routing**: Full routing implementation with "Coming Soon" pages for future features
- **Type Safety**: Built with TypeScript for enhanced code quality and developer experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher) or **pnpm** (v8.0.0 or higher)
- **Git** (for cloning the repository)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohit-9440/uniqus-assignment.git
   cd uniqus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run storybook` - Start Storybook for component documentation
- `npm run build-storybook` - Build Storybook for static hosting

## 🏗️ Project Structure

```
uniqus/
├── src/
│   ├── components/
│   │   ├── atoms/              # Basic UI components (Button, Badge)
│   │   ├── molecules/           # Composite components (Card)
│   │   ├── organisms/           # Complex components (Header, Sidebar)
│   │   ├── dashboard/           # Dashboard-specific components
│   │   └── ComingSoon/          # Coming Soon page component
│   ├── pages/                   # Page components
│   ├── data/                    # Mock data and data services
│   ├── store/                   # Zustand state management
│   ├── utils/                   # Utility functions
│   ├── types/                   # TypeScript type definitions
│   ├── styles/                  # Global styles
│   └── App.tsx                  # Main application component
├── public/                      # Static assets
├── tests/                       # Test files
├── .storybook/                  # Storybook configuration
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Lucide React** - Icon library
- **Recharts** - Chart library (for future use)
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities
- **Storybook** - Component documentation and development

## 🏛️ Architecture Decisions

### Component Organization

The project follows **Atomic Design Principles**:

- **Atoms**: Basic building blocks (Button, Badge)
- **Molecules**: Simple component combinations (Card)
- **Organisms**: Complex UI sections (Header, Sidebar, LatestSalesTable)
- **Pages**: Full page compositions

### State Management

- **Zustand** is used for global state management (sidebar open/close, theme)
- Local component state is used for component-specific UI state
- No prop drilling - state is accessed where needed

### Styling Approach

- **Tailwind CSS** for utility-first styling
- Custom breakpoint at `480px` for mobile/desktop distinction
- Consistent color system defined in `tailwind.config.js`
- Responsive design with mobile-first approach

### Routing Strategy

- **React Router** for client-side routing
- All routes are defined in `App.tsx`
- Active route highlighting in navigation components
- "Coming Soon" pages for unimplemented features

### Responsive Design

- **Mobile (< 480px)**: Bottom navigation, full-width layouts, stacked components
- **Desktop (≥ 480px)**: Sidebar navigation, multi-column layouts, expanded components
- Custom breakpoint ensures clear distinction between mobile and desktop experiences

## 🔧 Configuration

### Tailwind CSS

Custom colors and breakpoints are defined in `tailwind.config.js`:

- Custom colors for sidebar, header, status badges, and metric cards
- Custom breakpoint: `mobile: '480px'` for responsive design

### TypeScript

Strict type checking is enabled. All components and functions are properly typed.

### Vite

Path aliases are configured for cleaner imports:
- `@/components` → `src/components`
- `@/utils` → `src/utils`
- `@/store` → `src/store`
- etc.

## 📱 Responsive Breakpoints

- **Mobile**: `< 480px` - Bottom navigation, single column layouts
- **Desktop**: `≥ 480px` - Sidebar navigation, multi-column layouts
- **Large Desktop**: `≥ 1024px` - Expanded layouts, additional columns

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

Tests are located alongside components or in the `tests/` directory:
- Component tests: `*.test.tsx`
- Utility tests: `*.test.ts`

### Testing Strategy

- **Unit Tests**: Test individual components in isolation
- **Integration Tests**: Test component interactions
- **Accessibility Tests**: Ensure components are accessible

## 📚 Storybook

### Running Storybook

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for static hosting
npm run build-storybook
```

### Viewing Stories

Once Storybook is running, navigate to `http://localhost:6006` to view component documentation.

### Story Structure

Stories are located in component directories:
- `ComponentName.stories.tsx`

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

The application can be deployed to:

- **Vercel**: Automatic deployments from Git
  ```bash
  # Install Vercel CLI
  npm i -g vercel
  # Deploy
  vercel
  ```

- **Netlify**: Drag and drop or Git integration
  - Drag the `dist` folder to Netlify
  - Or connect your Git repository for automatic deployments

- **GitHub Pages**: Static hosting
  - Build the project: `npm run build`
  - Push the `dist` folder to the `gh-pages` branch

- **Any static hosting service**: Upload the `dist/` folder

### Environment Variables

Currently, no environment variables are required. If needed in the future, create a `.env` file:

```env
VITE_API_URL=your_api_url
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using the port or change the port in vite.config.ts
   ```

2. **TypeScript errors**
   ```bash
   npm run type-check
   ```

3. **Build errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📝 Assumptions & Trade-offs

### Assumptions

1. **Design Fidelity**: The Figma design is the single source of truth for UI/UX
2. **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
3. **Data**: Mock data is used for demonstration; real API integration would be implemented later
4. **Responsive Breakpoint**: 480px is chosen as the mobile/desktop breakpoint based on design requirements
5. **Accessibility**: Components follow basic accessibility guidelines; full WCAG compliance can be enhanced
6. **Performance**: Optimized for modern devices; older devices may experience slower performance

### Trade-offs

1. **State Management**: Zustand chosen over Redux for simplicity and less boilerplate
2. **Styling**: Tailwind CSS chosen over CSS Modules for faster development and consistency
3. **Testing**: Vitest chosen over Jest for better Vite integration and faster execution
4. **Routing**: React Router chosen for its simplicity and React ecosystem integration
5. **Icons**: Lucide React chosen for its comprehensive icon set and tree-shaking support
6. **Charts**: Recharts included but not fully utilized; ready for future data visualization needs
7. **Type Safety**: TypeScript strict mode enabled for better code quality, may require more initial setup

## 🎯 Key Features Implemented

### ✅ Completed Features

- [x] Pixel-perfect Figma design implementation
- [x] Responsive design (mobile, tablet, desktop)
- [x] Sidebar navigation with active state indicators
- [x] Bottom navigation for mobile devices
- [x] Search functionality with dropdown
- [x] Profile/New actions dropdown
- [x] Metric cards with icons and values
- [x] Latest sales table with pagination
- [x] Status badges (shipped, processing, cancelled)
- [x] Date filtering (Day, Week, Month)
- [x] Full routing implementation
- [x] "Coming Soon" pages for future features
- [x] Unit tests for key components
- [x] Storybook documentation

### 🔄 Future Enhancements

- [ ] Real API integration
- [ ] Authentication and authorization
- [ ] Data persistence
- [ ] Advanced filtering and search
- [ ] Export functionality (CSV, PDF)
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Performance optimizations (code splitting, lazy loading)
- [ ] E2E testing with Playwright or Cypress
- [ ] PWA support

## 🐛 Known Issues

- None currently reported. Please open an issue if you encounter any problems.

## 📊 Performance

- **Initial Load**: Optimized with Vite's fast HMR
- **Bundle Size**: Tree-shaking enabled for minimal bundle size
- **Lighthouse Score**: (Add your scores here after testing)

## 🌐 Browser Compatibility

Tested and working on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📄 License

This project is proprietary and confidential.

## 👤 Author

**Mohit**
- GitHub: [@Mohit-9440](https://github.com/Mohit-9440)
- Repository: [uniqus-assignment](https://github.com/Mohit-9440/uniqus-assignment)

## 👥 Contributing

This is a private project. Please follow the coding standards and component structure when contributing.

## 📞 Support

For questions or issues, please contact the development team or open an issue on GitHub.

## 🙏 Acknowledgments

- Design inspiration from Figma specifications
- Icons provided by [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
