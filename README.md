
# Sidhik Thorat - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- Modern React with TypeScript
- Responsive design with Tailwind CSS
- Beautiful UI components with shadcn/ui
- Smooth animations with Framer Motion
- Contact form with EmailJS integration
- GitHub calendar integration
- Dark/Light theme support
- Mobile-first design

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form, Zod validation
- **Email:** EmailJS
- **Routing:** React Router DOM

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SidhikThorat/Portfolio.git

# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install

# Copy environment variables (optional)
cp env.example .env.local

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# GitHub API Token (Optional)
# Get your token from: https://github.com/settings/tokens
# Required scopes: public_repo (for public repositories)
VITE_GITHUB_TOKEN=your_github_token_here
```

**Note**: The GitHub token is optional. If not provided, the app will use a fallback method to estimate GitHub activity from public repository data.

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

This project is deployed on Vercel and can be accessed at: [https://portfolio-drab-xi-30.vercel.app](https://portfolio-drab-xi-30.vercel.app)

### Deploying to Vercel

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard:**
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add `VITE_GITHUB_TOKEN` with your GitHub token value
   - Redeploy your project

3. **GitHub Token Setup:**
   - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Generate a new token with `public_repo` scope
   - Copy the token and add it to Vercel environment variables

**Note**: Without the GitHub token, the calendar will show estimated activity based on public repository data.

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
└── ui/            # shadcn/ui components
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

Sidhik Thorat - sidhikthoratjob08@gmail.com
Phone - 8855995319

Project Link: [https://github.com/SidhikThorat/Portfolio](https://github.com/SidhikThorat/Portfolio)
