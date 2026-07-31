# Hashing PII Before Upload

Before you upload or connect any file to a Collaboration Room, hash or remove its personally identifiable columns locally, using PryvX's PII-sanitizer tool. This is currently the only guide published in PryvX's in-app Docs section, because it's the step every party must complete correctly for a room's privacy guarantees to hold.

## What you will need

- Python 3.9+
- Your raw CSV data file
- The PryvX PII-sanitizer tool
- The secret key emailed to you when the Collaboration Room was created

## Steps

1. **Clone the tool**
   ```bash
   git clone https://github.com/PryvX/pryvx.git
   cd pryvx/tools/pii-sanitizer
   ```
2. **Install dependencies**
   ```bash
   pip install streamlit pandas
   ```
3. **Run the app locally**
   ```bash
   streamlit run app.py
   ```
4. **Use the interface**
   1. Upload your CSV file.
   2. Select which columns to **hash** (for example, email, phone — anything used as a join key across parties).
   3. Select which columns to **remove** (for example, name, address).
   4. Enter the **shared secret key** from your invitation email (used for HMAC-SHA256 hashing).
   5. Click **Submit & Encrypt** to generate a sanitized version.
   6. Download the sanitized CSV — this file is now safe to upload or connect to the room.

## Privacy best practices

- PryvX uses **HMAC-SHA256** hashing with a shared secret key to anonymize fields for cross-party matching.
- Keep the secret key consistent across every file you sanitize for the same room, so the same raw values hash identically and can still be joined on.
- Remove highly sensitive fields (names, addresses) outright unless a task genuinely needs them.
- All processing happens **locally on your machine** — no data is sent to PryvX during sanitization.

Once your file is sanitized, continue to [Adding a Dataset](/how-to-guide/adding-a-dataset).
