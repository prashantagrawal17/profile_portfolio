# Download CV button

To enable the **Download CV** button on your portfolio:

1. **Add your CV file** to this folder (`web/src/assets/`):
   - Name the file: **`cv.pdf`** (recommended), or
   - Use another name and set `cvUrl` in `assets/data/site.json` to match (e.g. `"assets/YourCV.pdf"`).

2. **Optional:** In `site.json` you can set:
   - **`cvUrl`** – path to the file, e.g. `"assets/cv.pdf"` or a full URL (e.g. Google Drive link). If empty, the button will open an email to you instead.
   - **`cvDownloadName`** – filename when the user downloads (e.g. `"Prashant_Kumar_Agrawal_CV.pdf"`). Only used when the file is served from this app (not for external URLs).

3. **External URL:** If your CV is hosted elsewhere (e.g. Google Drive, Dropbox), set `cvUrl` to that URL. The button will open it in a new tab. The `download` attribute does not work for cross-origin links, so the user will view or download from that site.

After adding `cv.pdf` here, the header and hero **Download CV** buttons will trigger a download with the name from `cvDownloadName` (or `CV.pdf` by default).
