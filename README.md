# SwapX ⚡ 

SwapX is an innovative **Battery-as-a-Service (BaaS)** platform tailored specifically for the e-rickshaw ecosystem in Bhubaneswar, India. We aim to revolutionize urban micro-mobility by entirely eliminating battery charging downtime, reducing the total cost of ownership for drivers, and ensuring sustainable, reliable energy distribution.

---

## 🚀 The Business: Transforming Urban Mobility

### The Core Problem
The current e-rickshaw infrastructure relies heavily on stationary charging and outdated battery tech. This ecosystem is broken for the drivers at the bottom of the pyramid:
1. **Massive Downtime:** Drivers spend 4 to 6 hours every day charging their heavy lead-acid or lithium-ion batteries. 
2. **Lost Income:** Every hour spent charging represents lost fares. This downtime costs the average driver between ₹500 and ₹800 daily.
3. **High Maintenance Costs:** Lead-acid batteries degrade quickly (lasting only 6-8 months) and require constant water top-ups and maintenance. Replacing them introduces a sudden, massive financial burden on the driver.
4. **Range Anxiety:** Fear of the battery dying mid-trip limits the areas a driver is willing to serve.

### The SwapX Solution (BaaS Model)
Instead of forcing drivers to buy, maintain, and slowly charge their own batteries, **SwapX owns the smart batteries**. We provide them to drivers as a subscription service. 

- **Sub-5-Minute Swaps:** A driver pulls up to a SwapX station with a depleted battery. Our operators swap it for a 100% charged one in under 5 minutes. 
- **Zero Downtime, Maximum Earnings:** By getting those 4-6 charging hours back, drivers can complete 30-40% more trips daily, dramatically raising their take-home income.
- **Affordable Subscription:** Plans starting from ₹4,500/month turn a massive unpredictable capital expense (buying a new battery) into a predictable, affordable operating expense.
- **No Maintenance Headaches:** SwapX takes care of battery degradation, safe charging, and end-of-life recycling.

---

## 💻 About the Website MVP

This repository houses the **Minimum Viable Product (MVP)** website for SwapX. It serves primarily as a high-conversion marketing landing page and a lead-generation tool to onboard early-adopter drivers and fleet owners.

### UI/UX & Design Philosophy
The design language is engineered to instill trust, professionalism, and speed:
- **Premium Industrial Aesthetic:** A dark-mode first design using deep carbon blacks, contrasted heavily by vibrant neon green and electrical purple accents. This visually communicates "modern," "charged," and "electric."
- **Interactive Micro-animations:** The site features custom CSS keyframe animations, most notably the hero section's **Battery Charging Animation**, which visually demonstrates the speed and efficiency of the swap process without needing a heavy video file.
- **Glassmorphism & Gradients:** Subtle blurred backgrounds and transparent panes (`backdrop-blur`) are used to create depth, ensuring text remains highly legible against complex backgrounds.
- **Mobile-Optimized:** As the target demographic (drivers) exclusively accesses the internet via mobile phones, the entire layout is strictly responsive, using Tailwind's mobile-first breakpoints.

### Core Website Features
1. **Dynamic Landing Page:** Features a hero section, live stats counter via `IntersectionObserver`, problem vs. solution breakdown, and a step-by-step "How it Works" guide.
2. **Driver Onboarding Flow:** Dedicated routes (`/signup`, `/book-swap`) featuring optimized web forms for drivers to register their interest or book their first swap session.
3. **Testimonial Engine:** A swipeable carousel component showcasing early success stories to build social proof.
4. **WhatsApp Integration:** Floating and inline CTA buttons that redirect directly to a customized WhatsApp chat, reducing friction for drivers who aren't comfortable filling out web forms.
5. **Local JSON Backend (Mock):** Currently, to test the UI flow quickly, form data is handled gracefully on the client side. The architecture is built cleanly so that replacing the static handlers with real API calls (like Supabase) takes only minutes.

---

## 🛠️ Technical Architecture & Stack

The application is built using modern web standards for edge performance and SEO optimization.

- **Framework:** [Next.js 14](https://nextjs.org/) using the **App Router** (`/src/app`) for optimal server-side rendering (SSR) and file-based routing.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling. We utilize custom `tailwind.config.ts` variables mapped to native CSS custom properties in `globals.css` to maintain a strict design system.
- **Icons & Assets:** `react-icons` for highly optimized, scalable vector graphics (SVGs).
- **Language:** Strictly typed **TypeScript** to ensure component reliability and prop safety.

---

## 📂 Codebase Structure

```text
SWAP-X/
├── src/
│   ├── app/                    # Next.js App Router Hub
│   │   ├── layout.tsx          # Global HTML shell, meta tags, and Navbar/Footer wrapping
│   │   ├── page.tsx            # Main Landing Page
│   │   ├── signup/             # Driver registration route
│   │   └── book-swap/          # Swap booking route
│   ├── components/             # Reusable React components
│   │   ├── Navbar.tsx          # Sticky navigation with mobile hamburger menu
│   │   ├── Footer.tsx          # Global footer
│   │   ├── BatteryAnimation.tsx# Custom SVG/CSS battery charging visual
│   │   ├── StatsCounter.tsx    # Animated numbers that count up on scroll
│   │   ├── ScrollReveal.tsx    # Wrapper component for fade-in scroll animations
│   │   ├── TestimonialCarousel.tsx 
│   │   └── WhatsAppButton.tsx  # Floating sticky WhatsApp CTA
│   └── styles/
│       └── globals.css         # Core design system tokens (CSS Variables)
├── public/                     # Static images, favicons
├── package.json                
├── tailwind.config.ts          # Tailwind theme configuration (colors, animations)
└── tsconfig.json               # TypeScript strict configuration
```

---

## ⚙️ Getting Started (Local Development)

To run the application locally on your machine for development or testing:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Samal-Biswajit/SWAP-X.git
   cd SWAP-X
   ```

2. **Install Node.js Dependencies:**
   Ensure you have Node.js (v18+) installed, then run:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The site will compile and instantly be available at [http://localhost:3000](http://localhost:3000). Hot Page Reload is enabled by default.

4. **Production Build (Optional):**
   To test the compiled, minified production version of the site:
   ```bash
   npm run build
   npm start
   ```

---

## 🗺️ Future Product Roadmap

While the current repository serves as the MVP marketing front, SwapX is actively evolving into a full-scale operational platform. Upcoming technical milestones include:

- [ ] **Supabase Backend Integration:** Replacing local state management with a robust PostgreSQL database to securely store driver profiles, KYC documents, and swap logs.
- [ ] **Station Operator Dashboard:** A separate protected route (`/admin`) for SwapX station managers to log daily battery swaps, monitor inventory levels, and check driver subscription statuses in real-time.
- [ ] **WhatsApp Business API:** Automating booking confirmations, subscription renewal reminders, and OTP verification directly through WhatsApp.
- [ ] **Payment Gateway Integration:** Integrating Razorpay or Cashfree for automated monthly BaaS subscription billing.

---
*Built with ❤️ for a greener, more efficient mobility ecosystem in Bhubaneswar.*
