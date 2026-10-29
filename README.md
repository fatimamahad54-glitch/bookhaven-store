# 📚 BOOKHAVEN — Dukaanka Buugaagta Casriga ah ee Online-ka

**BOOKHAVEN** waa madal ganacsi casri ah (E-Commerce Bookstore) oo loogu talagalay iibinta buugaagta Af-Soomaaliga iyo Ingiriisiga ah. Waxaa lagu dhisay tiknoolajiyadaha ugu dambeeya ee casriga ah, iyadoo la adeegsaday midabbada cagaar madow (forest green), caddaan diirran (warm alabaster), beige (parchment) iyo dahabi khafiif ah (soft gold).

---

## ✨ Tilmaamaha & Shaqooyinka Muhiimka ah

1. **🎨 Naqshad & UI/UX Heer Caalami ah:**
   - Midabbada: Deep Forest Green (`#14332d`), Warm White (`#fdfbf7`), Beige Parchment (`#efe6d5`), iyo Soft Gold (`#bf8c39`).
   - Xarfaha: `Playfair Display` (cinwaannada qadiimiga ah) iyo `Plus Jakarta Sans` (qoraalka casriga ah).
   - Saamaynta 3D ee daboolka buugaagta (3D book spine & hover shadow effects).
   - 100% Responsive: Telefoonka, Tablet-ka iyo Shaashadaha waaweyn.

2. **📖 Bogga Hore (Home Page):**
   - Cinwaanka weyn: *“Soo Hel Buuggaaga Xiga ee Aad Jeclaan Doonto.”*
   - Qaybta buugaagta ugu caansan (Popular), iibka ugu badan (Bestsellers), iyo kuwa cusub (New arrivals).
   - Qaybaha kala duwan oo leh astaamo (Icons) iyo tirada buugaagta.
   - Qayb muujinaysa qiimo-dhimisyo iyo koodhadh gaar ah.
   - Faallooyinka macaamiisha Soomaaliyeed ee Muqdisho, Hargeysa, Garoowe, iwm.
   - Wargeyska BOOKHAVEN (Newsletter subscription).

3. **🔍 Raadinta & Shaandhaynta (Search & Filter):**
   - Raadinta magaca buugga, qoraaga ama qaybta waqtiga dhabta ah (Instant Search Modal).
   - Kala shaandhaynta qaybaha buugaagta iyo qiimaha (Price range slider).
   - Kala hormarinta: Qiimaha (Hoos/Sare), Qiimeynta Xiddigaha, Caannimada, iyo Taariikhda.

4. **🛒 Gaariga Wax Iibsiga & Kaydinta (Cart & Wishlist):**
   - Ku darista, ka saarista, iyo beddelidda tirada buugaagta.
   - Xisaabinta tooska ah ee wadarta, qiimo-dhimista, iyo gaarsiinta (Gaarsiin bilaash ah dalabyada ka badan $50).
   - Koodhadhka qiimo-dhimista ee shaqaynaya: `HAVEN15` (15% OFF) iyo `SOOMAALIA` (20% OFF).
   - Kaydinta joogtada ah ee `localStorage` (xogtu ma lumayso xitaa haddii bogga la cusbooneysiiyo).
   - Liiska buugaagta la jecel yahay (Wishlist).

5. **💳 Lacag-Bixinta Tijaabada ah (Demo Checkout & Receipt):**
   - Foom buuxa: Magaca macmiilka, iimaylka, taleefanka, magaalada iyo cinwaanka gaarsiinta.
   - Hababka lacagta maxalliga ah ee tijaabada ah: EVC Plus, Zaad Service, Sahal, iyo Kaadhka Bangiga.
   - Bogga Xaqiijinta Dalabka (Order Confirmation) oo leh lambarka dalabka, faahfaahinta risiidhka, badhanka daabacaadda risiidhka, iyo xaflad hambalyo ah (Confetti animation).

---

## 🛠️ Tiknoolajiyada La Adeegsaday

- **React 18** & **Vite 5**
- **TypeScript** (No-error strict typing)
- **Tailwind CSS 3** (Custom color palette & animations)
- **React Router 6** (SPA client-side routing)
- **Lucide Icons** (Astaamo casri ah)
- **Canvas Confetti** (Dabaaldegga dalabka guuleystay)
- **LocalStorage API** (Kaydinta xogta gaariga iyo jecleysiga)

---

## 🚀 Sida Mashruuca Loogu Bilaabo Kombiyuutarkaaga (Local Development)

### 1. Ku shub dependencies-ka:
```bash
npm install
```

### 2. Fur server-ka horumarinta:
```bash
npm run dev
```
Fur browser-kaaga oo booqo: `http://localhost:5173`

### 3. Tijaabi dhismaha wax-soo-saarka (Production Build):
```bash
npm run build
```

---

## 📤 Sida GitHub Loogu Diro (Push to GitHub)

1. Fur terminal-kaaga galka mashruuca, bilow git:
```bash
git init
git add .
git commit -m "Initial commit: BOOKHAVEN bookstore web application"
```

2. Ka samee kayd cusub (New Repository) barta GitHub (tusaale magac uga dhig `bookhaven-store`).

3. Ku xir kaydkaaga GitHub oo u dir:
```bash
git remote add origin https://github.com/MAGACAAGA_GITHUB/bookhaven-store.git
git branch -M main
git push -u origin main
```

---

## 🌐 Sida Vercel Loogu Daabaco (Deploy to Vercel)

Mashruucani waxa uu horey ugu diyaarsan yahay faylka `vercel.json` si dhammaan boggagu (SPA routes) si fiican ugu shaqeeyaan Vercel.

### Habka 1-aad: Toos GitHub ugala xir Vercel (Habka ugu fudud)
1. Gal mareegta [Vercel.com](https://vercel.com) oo ku gal akoonkaaga GitHub.
2. Guji **"Add New..."** -> **"Project"**.
3. Ka dooro kaydkaaga `bookhaven-store` ee GitHub.
4. **Build and Output Settings** si otomaatig ah ayay u aqoonsan doontaa Vite:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Guji **"Deploy"**. Dhowr ilbiriqsi gudahood website-kaagu wuxuu toos ugu noqon doonaa internetka adduunka oo dhan!

---

## 🏷️ Koodhadhka Qiimo-Dhimista ee Tijaabada ah
- `HAVEN15` — Wuxuu bixinayaa **15%** qiimo-dhimis.
- `SOOMAALIA` — Wuxuu bixinayaa **20%** qiimo-dhimis.

---
© BOOKHAVEN. Xuquuqda oo dhan way dhowran tahay.
