# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This website showcases the profile, skills, projects, and contact information of an undergraduate software engineer.

## Features

- **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggle between dark and light themes.
- **Modern UI**: Clean and professional interface with smooth animations.
- **SEO Optimized**: Built with best practices for search engine optimization.
- **Fast Performance**: Optimized for speed and performance.

## Sections

- **Hero**: A brief introduction with a profile picture.
- **About**: Detailed information about the person, skills, and education.
- **Projects**: Showcase of portfolio projects with filtering capabilities.
- **Contact**: A contact form and social media links.

## Technologies Used

- **Next.js**: React framework for building the application.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For styling and responsive design.
- **Framer Motion**: For smooth animations and transitions.
- **React Icons**: For including popular icon sets.
- **Next-themes**: For dark/light mode toggle.

## Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KusalAdithya/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update your personal information in the respective component files:

- Personal details: `src/components/sections/HeroSection.tsx`
- About information: `src/components/sections/AboutSection.tsx`
- Project details: `src/components/sections/ProjectsSection.tsx`
- Contact information: `src/components/sections/ContactSection.tsx`

### Images

Replace the placeholder images with your own:

- Profile picture: `public/profile-placeholder.jpg`
- Project images: `public/projects/project1.jpg`, etc.

### Colors and Theme

You can customize the colors and theme by modifying:

- `tailwind.config.js`: For changing the color scheme
- `src/app/globals.css`: For adjusting CSS variables

## Deployment

You can deploy this website to various platforms:

- **Vercel** (recommended for Next.js projects):
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**:
  ```bash
  npm install -g netlify-cli
  netlify deploy
  ```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
