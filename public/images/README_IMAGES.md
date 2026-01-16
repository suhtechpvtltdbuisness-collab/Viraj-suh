# Required Images for SEO

## Critical OpenGraph Images Needed:

### 1. cash-for-gold-lajpat-nagar-og.jpg
- **Size:** 1200x630px
- **Format:** JPG
- **Content:** Professional banner with "Cash for Gold Lajpat Nagar" text, gold jewelry imagery, Viraj Jewellers branding
- **Usage:** Facebook, LinkedIn OpenGraph sharing
- **Location:** `/public/images/`

### 2. cash-for-gold-lajpat-nagar-twitter.jpg  
- **Size:** 1200x675px (Twitter preferred)
- **Format:** JPG
- **Content:** Similar to OG image but optimized for Twitter card
- **Usage:** Twitter card sharing
- **Location:** `/public/images/`

### 3. viraj-jewellers-logo.png
- **Size:** 512x512px
- **Format:** PNG with transparent background
- **Content:** Company logo
- **Usage:** Schema.org organization logo, favicon
- **Location:** `/public/images/`

### 4. viraj-jewellers-lajpat-nagar.jpg
- **Size:** 1200x800px
- **Format:** JPG
- **Content:** Store front photo or interior of Lajpat Nagar location
- **Usage:** LocalBusiness schema image
- **Location:** `/public/images/`

## Temporary Placeholder Solution:
Until professional images are created, you can:
1. Use existing images from `/public/images/` folder
2. Rename virajLogo.jpg → viraj-jewellers-logo.png (convert to PNG)
3. Create simple branded graphics using Canva or similar tools

## Quick Fix:
Copy existing images with proper names:
```bash
# From your existing images folder
cp virajLogo.jpg viraj-jewellers-logo.jpg
cp virajGold.jpg cash-for-gold-lajpat-nagar-og.jpg
cp virajGold.jpg cash-for-gold-lajpat-nagar-twitter.jpg
cp imageViraj.jpg viraj-jewellers-lajpat-nagar.jpg
```

Then optimize them for web using ImageOptim or similar tools.
