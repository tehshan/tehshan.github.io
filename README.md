# Tuan Ehshan Pallie — Official Portfolio & Services Website

A high-performance, modern, and fully responsive personal portfolio and services showcase website for **Tuan Ehshan Pallie** — Software & IoT Engineer, Textile & Apparel Engineering undergraduate at the University of Moratuwa, and Certified National Chess Trainer (CFSL).

---

## 🌟 Key Highlights & Features

- **Triple-Threat Persona Presentation**:
  - **Software & IoT Engineer**: Embedded systems, ESP32, PPG & biosensing, C#, C++, Java, Python, JavaScript.
  - **Textile & Apparel Engineer**: B.Sc. (Hons) at University of Moratuwa, smart e-textiles, parametric 3D CAD (Fusion / Inventor), sustainable wastewater research (ICEH 2026).
  - **National Chess Trainer & International Medalist**: Certified by CFSL Trainers Commission, Asian Youth Silver Medalist, World Schools Top 10, coach of 300+ students.
- **Dedicated Services Showcase**:
  - 1-on-1 Personalized Chess Coaching
  - School & Institutional Chess Training
  - Wearable IoT & Biosensing Prototyping
  - Full-Stack Software & Web Development
  - Parametric CAD & Textile Engineering Consulting
  - Strategic Decision-Making Masterclasses
- **Interactive Service Booking / Inquiry Modal**:
  - Visitors can click any service card to open a pre-filled booking modal.
  - Instant direct communication via **WhatsApp** (`+94 75 443 0476`) or **Email** (`palliete.24@uom.lk`).
- **Interactive Category Filtering**:
  - Easily filter between Chess, Software/IoT, and Textile Engineering services.
- **Dark Mode & Light Mode**:
  - Defaults to a sleek obsidian dark theme with emerald and cyan accents; remembers theme preference using `localStorage`.
- **Downloadable CV**:
  - Embedded official CV ready for 1-click download (`assets/docs/Tuan_Ehshan_Pallie_CV.pdf`).
- **Zero Build Friction**:
  - Pure HTML5, modern CSS3 variables, and vanilla JavaScript. No node_modules, no build step, 100% compatible with GitHub Pages out of the box.

---

## 📁 Project Structure

```text
Personal_Website/
│
├── index.html                   # Main semantic HTML5 single-page application
├── README.md                    # Project documentation & GitHub Pages guide
├── .gitignore                   # Standard git ignore file
│
└── assets/
    ├── css/
    │   └── style.css            # Modern CSS3 design system, responsive grid & animations
    ├── js/
    │   └── main.js              # Theme switcher, service filtering, modal & contact logic
    ├── images/
    │   └── profile.jpg          # High-resolution professional profile photo
    └── docs/
        └── Tuan_Ehshan_Pallie_CV.pdf  # Downloadable official resume / CV
```

---

## 🚀 How to Add & Deploy to GitHub (Step-by-Step)

### Step 1: Initialize Git & Commit Locally (Already done!)
If you ever want to commit changes in PowerShell:
```powershell
git add .
git commit -m "Update portfolio content"
```

### Step 2: Create a New Repository on GitHub
1. Go to [GitHub.com/new](https://github.com/new) and log in.
2. Enter a repository name, for example: `personal-portfolio` (or `username.github.io` if you want it as your primary user site).
3. Leave it **Public** and **do not** check "Initialize with a README" (we already created one).
4. Click **Create repository**.

### Step 3: Link & Push Your Local Files
Copy the commands shown on GitHub, or run the following in your terminal:

```powershell
# Link to your new GitHub repository (replace with your actual GitHub username and repo name)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/personal-portfolio.git

# Set default branch to main
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### Step 4: Enable Free Hosting with GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top right).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
6. Within 1–2 minutes, your website will be live at:
   ```text
   https://<YOUR_GITHUB_USERNAME>.github.io/personal-portfolio/
   ```

---

## 🛠️ How to Preview Locally

Simply double-click `index.html` in your file explorer to open it in any browser (Chrome, Edge, Firefox, Safari).

Or run a quick local HTTP server using Python:
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 📞 Contact Information

- **Name:** Tuan Ehshan Pallie
- **Phone / WhatsApp:** [+94 75 443 0476](https://wa.me/94754430476)
- **Email:** [palliete.24@uom.lk](mailto:palliete.24@uom.lk)
- **Location:** Colombo, Sri Lanka
