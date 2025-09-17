# El Mahdi ARFAL - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing the professional profile of El Mahdi ARFAL, a Cloud Networking Engineer specializing in 5G networks, AWS cloud infrastructure, and DevOps.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive meta tags, sitemap, and robots.txt for search engine optimization
- **Performance Focused**: Optimized images, lazy loading, and efficient code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Contact Form**: Functional contact form using mailto functionality
- **Project Showcase**: Detailed project presentations with technologies and achievements
- **Skills Visualization**: Interactive skills section with proficiency indicators

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📁 Project Structure
```
📦 portfolio-app
├── 📁 app
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main portfolio page
│   ├── globals.css          # Global styles and design tokens
│   ├── sitemap.ts           # SEO sitemap generation
│   └── robots.ts            # Search engine robots configuration
├── 📁 components
│   ├── header.tsx           # Navigation header with resume download
│   ├── hero.tsx             # Hero section with introduction
│   ├── about.tsx            # About section with personal info
│   ├── education.tsx        # Education background
│   ├── experience.tsx       # Professional experience
│   ├── skills.tsx           # Technical skills showcase
│   ├── projects.tsx         # Featured projects gallery
│   ├── contact.tsx          # Contact form and information
│   ├── footer.tsx           # Site footer
│   └── 📁 ui               # Reusable UI components
├── 📁 public
│   ├── *.jpg               # Project images and profile photo
│   └── El-Mahdi-ARFAL-Resume.pdf  # Downloadable resume
└── 📁 lib
    └── utils.ts            # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan-800 (#164e63) - Technology and trust
- **Secondary**: Amber-600 (#d97706) - Accent and highlights
- **Neutrals**: White, light cyan, dark gray for text and backgrounds

### Typography
- **Headings**: Geist Sans with various weights
- **Body**: Geist Sans Regular for optimal readability
- **Code**: Geist Mono for technical content

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/elmahdi-arfal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📧 Contact Form Configuration

The contact form uses a mailto functionality that opens the user's default email client. No server-side configuration is required. The form data is automatically formatted into an email with:

- Subject line from the form
- Sender's name and email
- Message content
- Pre-addressed to: arfalelmahdi@gmail.com

## 🔧 Customization

### Environment Variables

Create a `.env.local` file for any custom configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

### Content Updates

1. **Personal Information**: Update contact details in `components/contact.tsx`
2. **Projects**: Modify project data in `components/projects.tsx`
3. **Skills**: Update technical skills in `components/skills.tsx`
4. **Experience**: Edit work experience in `components/experience.tsx`
5. **Resume**: Replace `public/El-Mahdi-ARFAL-Resume.pdf` with your resume

### Styling

The design system uses CSS custom properties defined in `app/globals.css`. Update the color tokens to match your brand:

```css
:root {
  --primary: oklch(0.35 0.08 195); /* Your primary color */
  --secondary: oklch(0.65 0.15 65); /* Your accent color */
  /* ... other tokens */
}
```

## 📱 Responsive Design

The portfolio is built mobile-first with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly content
- Focus indicators for all interactive elements

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Optimized images with alt text
- Semantic HTML structure

## 📊 Performance

- Next.js Image optimization
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Vercel Edge Network deployment

## 🧪 Testing

Run the test suite:

```bash
npm run test
# or
yarn test
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/elmahdiarfal/elmahdi-portfolio/issues).

## 📞 Support

For support or questions, please contact:
- **Email**: arfalelmahdi@gmail.com
- **LinkedIn**: [linkedin.com/in/elmahdi-arfal](https://www.linkedin.com/in/el-mahdi-arfal-5a5284294)
- **GitHub**: [github.com/elmahdi-arfal](https://github.com/elmahdiarfal)

---

**Built with ❤️ by El Mahdi ARFAL**

