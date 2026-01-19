# Fit Map - Fitness Aplikacija

Frontend aplikacija za fitness sa prijavom, registracijom i blogom.

## Funkcionalnosti

- 🏠 **Početna stranica** - Prezentacija aplikacije
- 🔐 **Prijava** - Login funkcionalnost
- 📝 **Registracija** - Kreiranje novog naloga
- 📚 **Blog** - Fitness blog sa člancima

## Tehnologije

- React 18.2.0
- React Router DOM 6.20.0
- HTML5, CSS3, JavaScript

## Instalacija

1. Instalirajte zavisnosti:
```bash
npm install
```

2. Pokrenite aplikaciju:
```bash
npm start
```

Aplikacija će biti dostupna na `http://localhost:3000`

## Struktura Projekta

```
src/
├── components/
│   ├── Home.js          # Početna stranica
│   ├── Home.css
│   ├── Login.js         # Login komponenta
│   ├── Register.js      # Registracija komponenta
│   ├── Auth.css         # Stilovi za Login/Register
│   ├── Blog.js          # Blog komponenta
│   └── Blog.css         # Stilovi za Blog
├── App.js               # Glavna aplikacija sa routing-om
├── App.css              # Glavni stilovi
├── index.js             # Entry point
└── index.css            # Globalni stilovi
```

## Napomena

Ovo je frontend aplikacija. Login i registracija su simulirane - u produkciji bi trebalo povezati sa backend API-jem.

