# Toon JSON Formatter

A single-page React experience that converts JSON payloads into the [Toon format](https://github.com/toon-format/toon) using the official `toon-format` package. The interface is designed for both English and Bangla speakers and is ready to deploy on Vercel.

## Features

- ✨ Elegant gradient UI with responsive layout
- 🌐 Multilingual copy (English & Bangla)
- 🧩 Integrates with `toon-format` to transform JSON into Toon output
- 📋 One-click copy of the generated Toon data
- 🚀 Built with Vite + React for rapid Vercel deployments

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

   > The project depends on the `toon-format` package hosted on GitHub. Ensure your environment can access GitHub from the command line for the installation to succeed.

2. **Run locally**

   ```bash
   npm run dev
   ```

   Open the printed URL (defaults to `http://localhost:5173`) to use the formatter.

3. **Build for production**

   ```bash
   npm run build
   ```

   The production-ready assets will be available inside `dist/`, ready to upload to Vercel.

4. **Preview the production bundle (optional)**

   ```bash
   npm run preview
   ```

## Usage

1. Paste JSON text into the **Input JSON** area.
2. Choose **Format to Toon** to convert it using `toon-format`.
3. Copy the formatted output using the **Copy output** button.
4. Toggle between **English** and **বাংলা** for localized labels and helper text.

If the input is not valid JSON, the formatter falls back to sending the raw string to `toon-format`. Any error messages returned by the package are surfaced in the UI.

## Deploying to Vercel

1. Push this repository to GitHub (or another Git provider supported by Vercel).
2. Create a new Vercel project and import the repository.
3. When prompted, set the **Build Command** to `npm run build` and the **Output Directory** to `dist`.
4. Deploy—Vercel will run the build and host the generated static assets.

## Customization

- Update the copy inside `src/utils/translations.js` to adjust the multilingual strings.
- Adjust styling within `src/styles/App.css` for layout and theming tweaks.
- Enhance error handling or telemetry by editing the helper in `src/utils/formatToon.js`.

## License

This project is provided without a specific license. Refer to the [toon-format repository](https://github.com/toon-format/toon) for its licensing details when redistributing the formatter logic.
