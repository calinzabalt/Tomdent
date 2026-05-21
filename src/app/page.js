"use client";

import React, { useState, useEffect } from "react";

// Treatment details text fetched directly from original website
const treatmentsData = {
  endodontie: {
    title: "Terapie Endodontică Modernă",
    subtitle: "Salvarea dinților naturali prin precizie microscopică",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: `Terapia endodontică este o ramură a stomatologiei care tratează pulpa dintelui. Pulpa dintelui reprezintă țesutul moale din interiorul dintelui care conține nervi, vase de sânge și vase limfatice. Atunci când pulpa dintelui este infectată nu mai există posibilitatea de vindecare, îmbolnăvirea fiind ireversibilă.

Cea mai frecventă cauză de îmbolnăvire a pulpei dintelui o reprezintă fie o carie foarte profundă, fie o fractură dentară, expunând pulpa la bacteriile din salivă.

Terapia de canal înseamnă de fapt îndepărtarea pulpei bolnave, sterilizarea canalelor radiculare prin tratament mecanic și medicamentos și, la final, sigilarea lor cu o pastă specială, scopul tratamentului fiind îndepărtarea completă a infecției.`,
    whyNeeded: "Un tratament de canal corect efectuat duce la salvarea dintelui bolnav. Fără acest tratament, infecția avansează la osul din jurul dintelui, formând un abces dureros și ducând, în final, la pierderea dintelui.",
    details: "Tratamentul de canal este o manoperă complexă de precizie, ce implică câteva etape minuțioase desfășurate pe parcursul a 2-3 ședințe."
  },
  implantologie: {
    title: "Implantologie Dentară Premium",
    subtitle: "Restaurează funcționalitatea și aspectul dinților naturali",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4M9 9h6M9 15h6" />
      </svg>
    ),
    description: `Implantul dentar reprezintă rădăcina unui dinte artificial ce urmează a înlocui dintele lipsă de pe arcadă. Este realizat din titan, material 100% biocompatibil, integrându-se perfect în structura osoasă a maxilarului sau mandibulei.

Terapia pe implanturi necesită de regulă câteva etape împărțite pe o durată de 3 până la 9 luni, necesare pentru osteointegrare. După această perioadă, implantul este acoperit cu un bont de vindecare și ulterior cu coroana definitivă.

De asemenea, utilizăm tehnica inovatoare a implantului imediat după extracție pentru conservarea osului și reducerea timpului de tratament, oferind pacienților protezare imediată (coroană provizorie în aceeași ședință).`,
    whyNeeded: "Implanturile previn retracția gingiilor și resorbția osului maxilar, evită șlefuirea dinților vecini (spre deosebire de punțile clasice) și reprezintă cea mai durabilă soluție cu o rată de succes de peste 90% pe viață.",
    details: "Contraindicat doar în afecțiuni hepatice, metabolice, renale sau cardiace grave. Igiena impecabilă și controalele periodice sunt esențiale pentru a evita periimplantita."
  },
  chirurgie: {
    title: "Chirurgie Orală și Maxilo-Facială",
    subtitle: "Tratamente chirurgicale sigure realizate complet fără durere",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    description: `Chirurgia orală cuprinde o serie de intervenții chirurgicale minore necesare pentru rezolvarea unor complicații care altfel ar duce la pierderea structurilor dentare sau osoase.

Acestea includ extracția resturilor de rădăcini îngropate, a molarilor de minte incluși sau parțial erupți, precum și rezecții apicale (îndepărtarea infecției de la vârful rădăcinii - granuloame, chisturi) pentru a salva dinții de la extracție.`,
    whyNeeded: "Molarii de minte sunt greu de igienizat și tratați din cauza poziției și morfologiei lor atipice, fiind deseori extrași profilactic pentru a proteja alinierea și sănătatea celorlalți dinți.",
    details: "Toate intervențiile se realizează sub anestezie locală modernă, asigurând confort complet și lipsa totală a durerii în timpul procedurilor."
  },
  restaurativa: {
    title: "Terapie Restaurativă Estetică",
    subtitle: "Reconstrucția estetică a dintelui cu compozite de ultimă generație",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    description: `Terapia restaurativă constă în îndepărtarea cu minuțiozitate a țesutului cariat și reconstrucția anatomică a dintelui folosind materiale compozite estetice fotopolimerizabile.

Cariile dentare reprezintă cea mai frecventă afecțiune a cavității bucale și cauza principală de pierdere a dinților. Placa bacteriană atacă inițial smalțul (stadiu nedureros), evoluând în profunzime spre pulpa dentară (când devine extrem de dureroasă).`,
    whyNeeded: "Tratarea cariilor în faze incipiente este simplă, rapidă și conservatoare. Netratate la timp, cariile distrug vitalitatea dintelui, necesitând tratamente de canal costisitoare sau extracții.",
    details: "Recomandări de prevenție: periaj corect de 2 ori pe zi, utilizarea aței dentare zilnic și vizita la stomatolog la fiecare 6 luni."
  },
  profilaxie: {
    title: "Profilaxie Dentară Avansată",
    subtitle: "Prevenția este secretul unui zâmbet sănătos pe viață",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: `Profilaxia reprezintă baza sănătății orale, constând în prevenirea apariției cariilor și a bolii parodontale, precum și în monitorizarea complicațiilor deja existente.

Serviciile noastre profilactice includ: ghidaj de igienă orală personalizat, detectarea plăcii bacteriene cu substanțe revelatoare, fluorizare locală profesională în gutiere și sigilarea șanțurilor și fosetelor pentru dinții proaspăt erupți.

Detartrajul profesional cu ultrasunete, completat de Air-Flow (prophy jet) și periaj profesional îndepărtează depunerile dure de tartru pe care periajul manual nu le poate disloca.`,
    whyNeeded: "Bolile dentare sunt silențioase în faze incipiente. Pacientul nu își poate da seama singur de apariția lor. Detartrajul nu afectează smalțul, ci din contră, previne inflamația gingivală și parodontoza.",
    details: "Vizitele profilactice periodice la fiecare 6 luni elimină riscul urgențelor stomatologice dureroase și costisitoare."
  },
  parodontologie: {
    title: "Tratamente Parodontale Moderne",
    subtitle: "Combaterea parodontozei și regenerarea gingivală",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: `Boala parodontală (parodontoza) este o infecție bacteriană cronică ce afectează gingia și țesuturile de susținere a dintelui (osul alveolar).

Tratamentul nostru parodontal vizează eliminarea cauzei bacteriene prin manopere minim invazive: detartraj profund, surfasaj radicular (curățarea bacteriilor de pe rădăcini sub gingie) și chiuretajul țesutului de granulație infectat. Completăm tratamentul cu terapie locală cu antiseptice și antiinflamatorii de ultimă generație.`,
    whyNeeded: "Tratamentul precoce oprește retracția gingivală și resorbția osoasă, prevenind mobilitatea dentară și pierderea dinților aparent sănătoși.",
    details: "Se recomandă efectuarea unei profilaxii complete cel puțin o dată pe an, asociată cu o igienă riguroasă acasă."
  },
  pedodontie: {
    title: "Stomatologie Pediatrică (Pedodonție)",
    subtitle: "O experiență prietenoasă și fără frică pentru micul pacient",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: `Copiii reprezintă o categorie specială de pacienți. Dinții de lapte și dinții definitivi tineri au o structură particulară și necesită tehnici adaptate de tratament și o abordare psihologică blândă.

Serviciile noastre pedodontice acoperă tratamente profilactice esențiale: fluorizări profesionale locale cu arome plăcute, sigilări ale molarilor definitivi (protejându-i de carii pe suprafețele active) și obturații fizionomice dedicate.`,
    whyNeeded: "Sănătatea dinților de lapte este critică pentru că aceștia ghidează erupția corectă a dinților definitivi. Infecțiile dinților de lapte pot afecta iremediabil coroana dinților permanenți aflați sub ei.",
    details: "Garantăm o atmosferă calmă și caldă, transformând vizita la stomatolog într-o joacă educativă, eliminând frica din start."
  }
};

// Realistic pricing database for Romanian market (Base estimates)
const pricingItems = [
  { id: "consult", name: "Consultație primară & Plan de tratament", price: 150, category: "Generale" },
  { id: "detartraj", name: "Pachet Profilaxie (Detartraj ultrasunete, Air-Flow, Periaj profesional)", price: 250, category: "Profilaxie" },
  { id: "plomba_mica", name: "Obturație compozit fotopolimerizabil (Carie simplă)", price: 200, category: "Terapie Restaurativă" },
  { id: "plomba_mare", name: "Obturație compozit complexă (Carie profundă/Reconstrucție)", price: 300, category: "Terapie Restaurativă" },
  { id: "canal_mono", name: "Tratament de canal endodontic monoradicular", price: 350, category: "Endodonție" },
  { id: "canal_pluri", name: "Tratament de canal endodontic pluriradicular", price: 550, category: "Endodonție" },
  { id: "implant", name: "Implant dentar din Titan biocompatibil (Faza chirurgicală)", price: 2500, category: "Implantologie" },
  { id: "bont", name: "Bont protetic pe implant", price: 500, category: "Implantologie" },
  { id: "coroana_ceramica", name: "Coroană metalo-ceramică pe implant / dinte", price: 1200, category: "Protetică" },
  { id: "coroana_zirconiu", name: "Coroană din Zirconiu premium (Estetică maximă)", price: 1800, category: "Protetică" },
  { id: "extractie_simpla", name: "Extracție dentară simplă (Monoradicular/Pluriradicular)", price: 200, category: "Chirurgie" },
  { id: "extractie_minte", name: "Extracție molar de minte inclus chirurgical", price: 500, category: "Chirurgie" },
  { id: "chiuretaj_parodontal", name: "Chiuretaj subgingival în câmp închis (per dinte)", price: 100, category: "Parodontologie" },
  { id: "sigilare", name: "Sigilare șanțuri și fosete (per dinte la copii)", price: 150, category: "Pedodonție" }
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [calculatorSelected, setCalculatorSelected] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clinicStatus, setClinicStatus] = useState({ isOpen: false, text: "Închis acum" });

  // Appointment Form State
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", treatment: "consult", date: "", time: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Initialize Theme and Live Status
  useEffect(() => {
    // Check dark mode preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Dynamic Live Status
    const updateClinicStatus = () => {
      // Calculate Romanian time (EET/EEST)
      const now = new Date();
      
      // Get UTC time and adjust to Romanian offset (UTC+2 or UTC+3 depending on DST)
      // Standard way is to use Intl API to extract fields in Europe/Bucharest timezone
      try {
        const roTimeStr = now.toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" });
        const roDate = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Bucharest" }));
        
        const day = roDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const hours = roDate.getHours();
        const minutes = roDate.getMinutes();
        const timeVal = hours + minutes / 60;

        let isOpen = false;
        let text = "Închis acum";

        if (day >= 1 && day <= 4) {
          // Mon - Thu: 13:30 - 21:00
          if (timeVal >= 13.5 && timeVal < 21) {
            isOpen = true;
            text = "Deschis acum (Luni-Joi: 13:30 - 21:00)";
          } else {
            text = "Închis acum. Deschis Luni-Joi: 13:30-21:00";
          }
        } else if (day === 5) {
          // Fri: 13:00 - 17:00
          if (timeVal >= 13 && timeVal < 17) {
            isOpen = true;
            text = "Deschis acum (Vineri: 13:00 - 17:00)";
          } else {
            text = "Închis acum. Deschis Vineri: 13:00-17:00";
          }
        } else {
          // Sat - Sun: Closed
          text = "Închis în weekend. Deschis de Luni la 13:30";
        }

        setClinicStatus({ isOpen, text });
      } catch (e) {
        // Fallback if timezone conversion fails
        const day = now.getDay();
        const hours = now.getHours();
        if (day >= 1 && day <= 4 && hours >= 14 && hours < 21) {
          setClinicStatus({ isOpen: true, text: "Deschis acum" });
        } else {
          setClinicStatus({ isOpen: false, text: "Închis acum" });
        }
      }
    };

    updateClinicStatus();
    const interval = setInterval(updateClinicStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleCalculatorSelect = (id) => {
    if (calculatorSelected.includes(id)) {
      setCalculatorSelected(calculatorSelected.filter((item) => item !== id));
    } else {
      setCalculatorSelected([...calculatorSelected, id]);
    }
  };

  const handleQuickBook = (id) => {
    const item = pricingItems.find((p) => p.id === id);
    let treatmentKey = "consult";
    if (item.category.includes("Endo")) treatmentKey = "endodontie";
    if (item.category.includes("Impl")) treatmentKey = "implantologie";
    if (item.category.includes("Chir")) treatmentKey = "chirurgie";
    if (item.category.includes("Rest")) treatmentKey = "restaurativa";
    if (item.category.includes("Prof")) treatmentKey = "profilaxie";
    if (item.category.includes("Para")) treatmentKey = "parodontologie";
    if (item.category.includes("Pedo")) treatmentKey = "pedodontie";
    
    setFormData({ ...formData, treatment: treatmentKey });
    document.getElementById("programari")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Vă rugăm să introduceți numele și numărul de telefon.");
      return;
    }

    setIsSubmitting(true);
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: "", phone: "", email: "", treatment: "consult", date: "", time: "", notes: "" });
    }, 1500);
  };

  const getCalculatorTotal = () => {
    return calculatorSelected.reduce((sum, id) => {
      const item = pricingItems.find((p) => p.id === id);
      return sum + (item ? item.price : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-lg transition-colors dark:border-gray-800/50 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 md:px-8">
          
          {/* Logo / Siglă */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-emerald-500 shadow-md">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6m0-6L3 9m9 5l9-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary dark:text-white">TOM-DENT</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-accent">Gabriel Toma</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#tratamente" className="text-sm font-semibold hover:text-accent transition">Tratamente</a>
            <a href="#calculator" className="text-sm font-semibold hover:text-accent transition">Calculator Buget</a>
            <a href="#doctor" className="text-sm font-semibold hover:text-accent transition">Despre Medic</a>
            <a href="#programari" className="text-sm font-semibold hover:text-accent transition">Contact</a>
          </nav>

          {/* Right Toolbar */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200/80 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/80 transition"
              aria-label="Schimbă tema"
            >
              {isDark ? (
                // Sun Icon
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Main Fast Book Appointment Button (Desktop) */}
            <a
              href="#programari"
              className="hidden rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-accent/90 hover:shadow-lg transition duration-200 md:block"
            >
              Programează-te
            </a>

            {/* Mobile Hamburger Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white p-4 py-3 shadow-lg dark:border-gray-800 dark:bg-gray-950 md:hidden transition duration-300">
            <nav className="flex flex-col gap-3 font-medium">
              <a href="#tratamente" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-gray-800 transition">Tratamente</a>
              <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-gray-800 transition">Calculator Buget</a>
              <a href="#doctor" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-gray-800 transition">Despre Medic</a>
              <a href="#programari" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-gray-800 transition">Contact & Programări</a>
              <a
                href="#programari"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 block w-full rounded-lg bg-accent py-2.5 text-center font-bold text-white shadow-md"
              >
                Programează-te online
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden hero-glow-bg py-20 px-6 md:py-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Slogan details and actions */}
            <div className="flex flex-col items-start space-y-6 lg:col-span-7">
              
              {/* Dynamic Live Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold shadow-sm transition dark:border-gray-800 dark:bg-gray-900/70">
                <span className={`h-2.5 w-2.5 rounded-full ${clinicStatus.isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
                <span className="text-slate-700 dark:text-gray-300">{clinicStatus.text}</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
                Zâmbetul tău,<br />
                <span className="text-gradient">misiunea noastră.</span>
              </h1>
              
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                Cabinetul stomatologic <strong className="text-primary dark:text-white font-semibold">TOM-DENT</strong>, sub îndrumarea competentă a <strong className="text-accent font-semibold">Dr. Gabriel Toma</strong>, oferă servicii stomatologice premium integrate pentru întreaga familie. Asigurăm tratamente fără durere, utilizând echipamente de ultimă generație într-un mediu steril, relaxant și protector.
              </p>

              {/* Action Buttons */}
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="#programari"
                  className="flex h-14 items-center justify-center rounded-xl bg-accent px-8 font-bold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition duration-200"
                >
                  Programează-te acum
                </a>
                <a
                  href="#tratamente"
                  className="flex h-14 items-center justify-center rounded-xl border border-slate-300 bg-white/60 px-8 font-bold text-slate-800 backdrop-blur shadow-sm hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:bg-gray-800/80 transition"
                >
                  Descoperă tratamentele
                </a>
              </div>

              {/* Key value elements */}
              <div className="grid w-full grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-gray-800/80 max-w-lg">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary dark:text-white">Fără stres</span>
                  <span className="text-xs text-text-muted">Manopere blânde</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary dark:text-white">Premium</span>
                  <span className="text-xs text-text-muted">Biocompatibil (Titan)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary dark:text-white">Garanție</span>
                  <span className="text-xs text-text-muted">1 an la lucrări</span>
                </div>
              </div>

            </div>

            {/* Right side: visual container (mocking high-end UI illustration) */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[420px] rounded-3xl bg-gradient-to-tr from-accent/20 to-emerald-500/10 p-6 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 glass-panel">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 dark:border-gray-800/50">
                    <span className="font-semibold text-primary dark:text-white">De ce pacienții ne aleg?</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold">1</span>
                      <p className="text-sm text-slate-600 dark:text-gray-300"><strong>Precizie Endodontică:</strong> Tratamente de canal sterilizate mecanic, păstrând integritatea dintelui pe viață.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold">2</span>
                      <p className="text-sm text-slate-600 dark:text-gray-300"><strong>Tehnici Biocompatibile:</strong> Implanturi durabile cu osteointegrator din titan steril premium.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold">3</span>
                      <p className="text-sm text-slate-600 dark:text-gray-300"><strong>Protecție Familială:</strong> Experiență pediatrică caldă, clădind o relație fericită cu medicul dentist.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services / Tratamente Section */}
      <section id="tratamente" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl mb-4">
              Serviciile Noastre Medicale
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Oferim tratamente stomatologice integrate la standarde premium, ghidați de grija profundă față de pacient și reducerea completă a fricii și durerii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(treatmentsData).map(([key, item]) => (
              <div
                key={key}
                onClick={() => setSelectedTreatment(key)}
                className="group relative cursor-pointer rounded-2xl p-6 glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition duration-200">{item.title}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{item.subtitle}</p>
                  <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-accent group-hover:gap-3 transition-all duration-200">
                  <span>Află mai multe</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Interactive Price Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/30 transition-colors">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Transparență Totală</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl mb-4 mt-2">
              Calculator Estimativ de Buget
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Vă punem la dispoziție o listă transparentă cu principalele tratamente. Bifați procedurile dorite pentru o estimare rapidă a bugetului de tratament.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Checklist of services */}
            <div className="lg:col-span-8 space-y-4 max-h-[600px] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingItems.map((item) => {
                  const isSelected = calculatorSelected.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleCalculatorSelect(item.id)}
                      className={`flex cursor-pointer items-center justify-between rounded-xl p-4 border transition-all duration-200 ${
                        isSelected
                          ? "border-accent bg-accent/5 dark:border-accent/80 dark:bg-accent/10"
                          : "border-slate-200 bg-white hover:border-slate-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-5 w-5 items-center justify-center rounded border ${
                          isSelected ? "border-accent bg-accent text-white" : "border-slate-300 dark:border-gray-700"
                        }`}>
                          {isSelected && (
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.category}</span>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold shrink-0 ml-4">{item.price} RON</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Budget Calculator Summary */}
            <div className="lg:col-span-4 rounded-3xl p-6 glass-panel border border-slate-200/80 shadow-xl dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 border-b border-slate-200/50 pb-4 dark:border-gray-800/50">Planul Tău Estimativ</h3>
              
              {calculatorSelected.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center text-text-muted text-sm space-y-3">
                  <svg className="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Nu ați selectat nicio procedură. Bifați din lista alăturată pentru a calcula estimarea.</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-[220px] overflow-y-auto space-y-3 pr-1 text-sm border-b border-slate-200/50 pb-4 dark:border-gray-800/50">
                    {calculatorSelected.map((id) => {
                      const item = pricingItems.find((p) => p.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="flex items-center justify-between">
                          <span className="truncate max-w-[200px]">{item.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="font-bold">{item.price} RON</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCalculatorSelect(id);
                              }}
                              className="text-red-500 hover:text-red-600 transition"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-lg font-bold pt-2">
                    <span>Total Estimat:</span>
                    <span className="text-accent text-2xl">{getCalculatorTotal()} RON</span>
                  </div>

                  <div className="rounded-lg bg-amber-500/10 p-3 text-[11px] text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    * Notă: Prețul total este orientativ și se bazează pe tarifele standard de pornire. Planul final de tratament și costul exact vor fi stabilite de medic în urma consultației medicale.
                  </div>

                  <button
                    onClick={() => {
                      setFormData({
                        ...formData,
                        notes: `Estimare calculator: ${calculatorSelected.map(id => pricingItems.find(p => p.id === id)?.name).join(", ")}. Total: ${getCalculatorTotal()} RON.`
                      });
                      document.getElementById("programari")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full rounded-xl bg-accent py-3.5 text-center font-bold text-white shadow-md hover:bg-accent/90 transition"
                  >
                    Programează tratamentul
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 5. Doctor Profile Section */}
      <section id="doctor" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Avatar Mock / Elegant Profile Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group max-w-[300px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent to-emerald-500 blur-xl opacity-30 group-hover:opacity-40 transition duration-300" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 p-2 dark:border-gray-800 dark:bg-gray-900">
                  <div className="relative flex aspect-[3/4] items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white p-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 mb-4 border border-white/20">
                        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold">Dr. Gabriel Toma</h4>
                      <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mt-1">Medic Dentist Coordonator</span>
                      <p className="text-[11px] text-white/70 mt-3 italic">„Fiecare pacient merită un tratament realizat cu demnitate, maximă precizie și zero disconfort.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Qualifications and Bio details */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Medic Dentist Coordonator</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
                Dr. Gabriel Toma
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                Cu o experiență bogată în stomatologia generală și chirurgicală, <strong className="text-primary dark:text-white">Dr. Gabriel Toma</strong> coordonează activitatea cabinetului <strong className="text-accent">TOM-DENT</strong> punând accent pe educația preventivă și pe standardele înalte de etică profesională.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg">✦</span>
                  <p className="text-sm text-slate-600 dark:text-gray-400">Specializare avansată în endodonție microscopică și conservarea dinților compromiși.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg">✦</span>
                  <p className="text-sm text-slate-600 dark:text-gray-400">Practician acreditat în implantologie orală biocompatibilă.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg">✦</span>
                  <p className="text-sm text-slate-600 dark:text-gray-400">Comunicator blând în pedodonție, renumit pentru tratarea cu succes a copiilor reticenți.</p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 dark:border-gray-800/80">
                <p className="text-sm text-text-muted">
                  Cabinet Individual Stomatologic acreditat de Colegiul Medicilor Stomatologi din România. Toate tratamentele se realizează conform normelor europene de biosecuritate.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Form & Map Section */}
      <section id="programari" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/30 transition-colors">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details & Office hours */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Contact</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl mt-2 mb-4">
                  Să luăm legătura!
                </h2>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  Suntem aici pentru a vă răspunde la întrebări sau pentru a programa o consultație rapidă. Apelați direct sau completați formularul de alături.
                </p>
              </div>

              {/* Fast Contacts list */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-text-muted">Adresă</span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-gray-200 mt-1">
                      Strada Liviu Rebreanu, Nr. 13, Bloc N2, parter, Apartament 5, Interfon 005, Sector 2, București
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-text-muted">Telefoane de contact</span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-gray-200 mt-1 flex flex-col">
                      <span>Mobil: 0729 850 070 / 0744 200 095</span>
                      <span>Fix: 021 643 67 03</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-text-muted">Email</span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-gray-200 mt-1">
                      toma.gabriel@tomdent.ro
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-text-muted">Program de lucru</span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-gray-200 mt-1 flex flex-col gap-0.5">
                      <span>Luni - Joi: 13:30 – 21:00</span>
                      <span>Vineri: 13:00 – 17:00</span>
                      <span className="text-red-500 font-medium">Sâmbătă & Duminică: Liber</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Appointment form */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-950 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xl dark:border-gray-800/80">
              <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white">Programează o Consultație</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="form-name" className="text-xs font-bold uppercase text-text-muted">Nume Complet</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Popescu Ion"
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="form-phone" className="text-xs font-bold uppercase text-text-muted">Telefon Mobil</label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: 0729 850 070"
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="form-email" className="text-xs font-bold uppercase text-text-muted">Adresă de Email</label>
                  <input
                    id="form-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: nume@email.com"
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="form-treatment" className="text-xs font-bold uppercase text-text-muted">Serviciu Principal</label>
                    <select
                      id="form-treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                    >
                      <option value="consult">Consultație Stomatologică</option>
                      <option value="endodontie">Terapie Endodontică</option>
                      <option value="implantologie">Implant Dentar</option>
                      <option value="chirurgie">Chirurgie Orală</option>
                      <option value="restaurativa">Terapie Restaurativă</option>
                      <option value="profilaxie">Profilaxie / Detartraj</option>
                      <option value="parodontologie">Parodontologie</option>
                      <option value="pedodontie">Pedodonție (Copii)</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="form-date" className="text-xs font-bold uppercase text-text-muted">Dată Preferată</label>
                    <input
                      id="form-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="form-time" className="text-xs font-bold uppercase text-text-muted">Interval Orar</label>
                    <input
                      id="form-time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="form-notes" className="text-xs font-bold uppercase text-text-muted">Observații / Detalii suplimentare</label>
                  <textarea
                    id="form-notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Menționați pe scurt simptomele sau tratamentele dorite..."
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900"
                  />
                </div>

                <div className="rounded-lg bg-emerald-500/5 p-3 text-xs text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Securitate completă: Datele trimise sunt confidențiale și vor fi procesate exclusiv în vederea programării vizitei stomatologice.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-xl py-4 font-bold text-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-accent/60 cursor-not-allowed"
                      : "bg-accent shadow-accent/20 hover:bg-accent/90 hover:shadow-accent/30"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Se trimite solicitarea...
                    </>
                  ) : (
                    "Trimite Solicitarea"
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800/80 transition-colors">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-bold">
                  T
                </div>
                <span className="text-xl font-bold tracking-tight text-white">TOM-DENT</span>
              </div>
              <p className="text-sm">
                Servicii stomatologice integrate la cele mai înalte standarde de biosecuritate și tehnologie, realizate complet fără stres sau durere.
              </p>
            </div>
            
            <div className="flex flex-col space-y-2 text-sm">
              <h4 className="text-white font-bold mb-2">Tratamente Principale</h4>
              <a href="#tratamente" onClick={() => setSelectedTreatment("endodontie")} className="hover:text-white transition">Terapie Endodontică</a>
              <a href="#tratamente" onClick={() => setSelectedTreatment("implantologie")} className="hover:text-white transition">Implantologie Dentară</a>
              <a href="#tratamente" onClick={() => setSelectedTreatment("chirurgie")} className="hover:text-white transition">Chirurgie Orală</a>
              <a href="#tratamente" onClick={() => setSelectedTreatment("restaurativa")} className="hover:text-white transition">Terapie Restaurativă</a>
            </div>

            <div className="flex flex-col space-y-2 text-sm">
              <h4 className="text-white font-bold mb-2">Contact & Program</h4>
              <span>Telefon: 0729 850 070 / 021 643 67 03</span>
              <span>Email: toma.gabriel@tomdent.ro</span>
              <span>Luni - Joi: 13:30 - 21:00</span>
              <span>Vineri: 13:00 - 17:00</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs space-y-4 sm:space-y-0">
            <span>© 2026 TOM-DENT. Toate drepturile rezervate. C.I.S. Dr. Gabriel Toma.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">Termeni și Condiții</a>
              <a href="#" className="hover:text-white transition">Politica Cookies</a>
              <a href="#" className="hover:text-white transition">A.N.P.C.</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 8. Treatment Details Modal (Animated) */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-all animate-fade-in">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-2xl dark:border-gray-800/80 max-h-[90vh] overflow-y-auto"
          >
            
            <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mb-6 dark:border-gray-800/50">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  {treatmentsData[selectedTreatment].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white">{treatmentsData[selectedTreatment].title}</h3>
                  <span className="text-sm text-accent font-medium">{treatmentsData[selectedTreatment].subtitle}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTreatment(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-slate-700 dark:text-gray-300">
              <div className="whitespace-pre-line leading-relaxed">
                {treatmentsData[selectedTreatment].description}
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/50 p-4 border border-slate-100 dark:border-gray-800/80 space-y-2">
                <h4 className="font-bold text-primary dark:text-white text-sm uppercase tracking-wider">De ce este necesar?</h4>
                <p className="text-sm leading-relaxed">{treatmentsData[selectedTreatment].whyNeeded}</p>
              </div>

              <div className="rounded-2xl bg-accent/5 p-4 border border-accent/10 space-y-2">
                <h4 className="font-bold text-accent text-sm uppercase tracking-wider">Detalii manoperă</h4>
                <p className="text-sm leading-relaxed">{treatmentsData[selectedTreatment].details}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setSelectedTreatment(null)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition"
              >
                Închide
              </button>
              <button
                onClick={() => {
                  const treatmentKey = selectedTreatment;
                  setSelectedTreatment(null);
                  setFormData({ ...formData, treatment: treatmentKey });
                  document.getElementById("programari")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-xl bg-accent px-6 py-3 font-bold text-white shadow-md hover:bg-accent/90 transition"
              >
                Solicită Programare
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 9. Booking Success Feedback Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-8 border border-slate-200/80 shadow-2xl text-center space-y-6 dark:border-gray-800">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 pulse-active">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary dark:text-white">Programare Înregistrată!</h3>
              <p className="text-slate-600 dark:text-gray-400">
                Vă mulțumim pentru încredere. Solicitarea dumneavoastră a fost recepționată cu succes de cabinetul <strong className="text-accent">TOM-DENT</strong>.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 dark:bg-slate-950/50 p-4 text-sm text-slate-700 dark:text-gray-300 border border-slate-100 dark:border-gray-800">
              Dr. Gabriel Toma sau asistentul de serviciu vă va contacta telefonic în cel mai scurt timp pentru confirmarea datei și orei exacte.
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-xl bg-accent py-3.5 text-center font-bold text-white shadow-md hover:bg-accent/90 transition"
            >
              Am înțeles
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
