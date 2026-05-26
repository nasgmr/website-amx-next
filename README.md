# AMX UAV Technologies — Company Website

Official website for **AMX UAV Technologies**, built with Next.js. The site serves as the company's main digital presence, showcasing drone products, services, use cases, portfolio, and company information.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** JavaScript (React 19)
- **Styling:** CSS Modules + Global CSS
- **Icons:** Font Awesome 6

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                  # Homepage
│   ├── layout.js                # Root layout (Navbar + Footer)
│   ├── products/
│   │   ├── mapping/             # Mapping drone products
│   │   ├── education/           # Education drone products
│   │   │   └── qubit/
│   │   └── dronepedia/          # Dronepedia section
│   ├── services/                # Services page
│   ├── use-case/
│   │   ├── agri-plant/          # Agriculture - Plantation
│   │   ├── agri-forest/         # Agriculture - Forestry
│   │   ├── infrastructure/      # Infrastructure inspection
│   │   └── tourism/             # Tourism & mapping
│   └── about-us/
│       ├── articles/            # News & articles
│       ├── portfolio/           # Project portfolio (2018–2025)
│       ├── partners-clients/    # Partners & clients
│       └── business-scale/     # Business scale info
└── components/
    ├── Navbar.jsx
    ├── Footer.jsx
    ├── PortfolioSubNav.jsx
    ├── UseCaseSubNav.jsx
    ├── DronepediaSubNav.jsx
    └── ProductsSubNav.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm

### Installation

```bash
git clone https://github.com/nasgmr/website-amx-next.git
cd website-amx-next
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔗 Links

- **Live Site:** [amx-uav.vercel.app](https://amx-uav.vercel.app)
- **Instagram:** [@amx.uav](https://www.instagram.com/amx.uav)
- **LinkedIn:** [AMX UAV](https://linkedin.com/company/amxuav)
- **YouTube:** [AMX UAV](https://www.youtube.com/@amxuav2935)

---

## 📄 License

Private project — © 2026 AMX UAV Technologies. All rights reserved.