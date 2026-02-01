# Lawyer Website Template

A modern, stylish one-page React website for a Personal Injury Law Firm built with React, TypeScript, and Express.

## Features

- 🎨 Modern UI with Tailwind CSS and Radix UI components
- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 📝 Contact form with validation (React Hook Form + Zod)
- 🔄 Full-stack TypeScript
- 📱 Responsive design

## Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching
- **Wouter** - Routing

### Backend

- **Express** - Web server
- **Node.js** - Runtime

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd lawyer-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000` (or the port specified by your environment).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type-check the project

## Project Structure

```
lawyer-template/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and helpers
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main App component
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── static.ts         # Static file serving
│   └── vite.ts           # Vite integration
├── shared/               # Shared code between client and server
│   ├── schema.ts         # Validation schemas and types
│   └── routes.ts         # Shared route definitions
├── script/               # Build scripts
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment to Vercel

### Prerequisites

- [Vercel account](https://vercel.com/signup)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for CLI deployment)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub, GitLab, or Bitbucket**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Configure the project settings

3. **Configure Build Settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

```bash
npm install -g vercel
```

2. **Login to Vercel:**

```bash
vercel login
```

3. **Deploy:**

```bash
vercel
```

Follow the prompts to configure your project.

4. **Deploy to Production:**

```bash
vercel --prod
```

### Post-Deployment

After deploying to Vercel:

1. **Verify the deployment:**
   - Visit your Vercel URL
   - Test the contact form
   - Check the Vercel logs for any errors

### Important Notes for Vercel Deployment

1. **Serverless Functions:** This is a full-stack application with an Express server. Vercel will run it as a serverless function.

2. **Build Configuration:** The project uses a custom build script (`script/build.ts`) that bundles both the client and server code.

3. **Static Assets:** The client is built into `dist/public` which Vercel will serve automatically.

4. **API Routes:** The Express server handles API routes (e.g., `/api/contact`).

5. **Contact Form:** The contact form validates data and shows a success message. No data is stored (this is a demo project).

### Troubleshooting

**Build Fails:**

- Check that all dependencies are in `dependencies` (not `devDependencies`) if they're needed at runtime
- Verify the build logs in Vercel dashboard for specific errors

**404 Errors:**

- Ensure the build output directory is set to `dist/public`
- Check that the build command completed successfully

## Contributing

Feel free to submit issues and pull requests.

## License

MIT
