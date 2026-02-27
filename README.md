# MohamadReza's Portfolio

This repository contains the source code for a **bilingual personal portfolio website** built with Next.js. It showcases projects, skills, experience, and contact information in both Persian (فارسی) and English. The design emphasizes clean visuals, smooth interactions, and a professional yet creative 3D hero background.

## 🚀 Key Features

- **Dual language support** (English & Persian) with automatic RTL adjustments.
- **Responsive layout** optimized for mobile, tablet, and desktop.
- **Light/Dark theme toggle** powered by `next-themes`.
- **Animated 3D background** on the hero section using React Three Fiber & Three.js.
- **Custom modular CSS**—each section has its own stylesheet, avoiding Tailwind utility clutter.
- **Animated scroll and element reveals** via Framer Motion.
- **Project showcase** with detail pages generated from a constant file.
- **Contact form** wired to a MongoDB backend (schema ready, implementation skeleton included).

## 🧩 Tech Stack

- **Next.js 16.1.6** (App Router + Turbopack)
- **React 18** & **JSX**
- **React Three Fiber** & **three.js** for 3D visuals
- **Framer Motion** for animation
- **next-intl** for internationalization
- **next-themes** for theme management
- **MongoDB** & **Mongoose** (for contact API)
- **Lucide React** icons

## 🗂️ Project Structure

```text
app/                # Pages and layout for the Next.js App Router
components/         # Reusable UI components and section-specific widgets
styles/             # Pure CSS files organized by feature/section
lib/                # Constants, MongoDB client, models, utilities
public/             # Static assets (images, icons, project demos)
messages/           # Localization JSON files (en.json, fa.json)
```

Each major section (hero, about, projects, contact, etc.) has a dedicated CSS file under `styles/` for easier maintenance and modularity.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, yarn, or pnpm

### Installation

```bash
git clone <repository-url>
cd mohamadreza-portfolio
npm install
# or yarn install
```

### Development

```bash
npm run dev
# or yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate to `/en` or `/fa` to switch languages.

### Production Build

```bash
npm run build
npm run start
```

Deployable to any platform that supports Next.js (Vercel, Netlify, etc.).

## ✍️ Customization

- **Content & translations**: modify `messages/en.json` and `messages/fa.json`.
- **Projects list**: edit `lib/constants/projects.js`; the UI updates automatically.
- **Styling**: adjust CSS files in `styles/` or add new ones for additional sections.
- **Contact backend**: see `app/api/contact/route.js` and `lib/mongodb/models/Message.js` for MongoDB integration.

It’s easy to drop in new projects, change text, or swap assets.

## 💡 Styling Notes

The project avoids Tailwind `@apply` rules and instead uses hand-crafted CSS with:

- CSS custom properties for theme colors and spacing
- Keyframe animations (bounce, slide-shine, fade-in, etc.)
- Glassmorphism and neon/glow effects for visual polish
- `[dir="rtl"]` selectors for right-to-left support in Persian

Global styles are defined in `styles/globals.css` and imported by the root layout.

## 📦 Dependencies

Refer to `package.json` for the exact versions. Key dependencies include:

```json
"framer-motion": "^<version>",
"lucide-react": "^<version>",
"next": "16.1.6",
"next-intl": "^<version>",
"next-themes": "^<version>",
"react-three-fiber": "^<version>",
"three": "^<version>",
"mongodb": "^<version>",
"mongoose": "^<version>"
```

## 📄 License

This project is released under the [MIT License](LICENSE).

## 🙌 Contributions & Contact

Feel free to fork, improve, or open issues. For direct feedback, use the site's contact form or email Me (address contained in the constants file).

---

Thanks for exploring the portfolio! 🧑‍💻🚀
