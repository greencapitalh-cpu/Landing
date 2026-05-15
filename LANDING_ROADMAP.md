# UDoChain Landing Roadmap

## Goal

Build one complete institutional landing and three focused campaign landings for UDoChain.

The site should feel like a serious legaltech and enterprise SaaS company, while keeping a subtle AI/blockchain/digital-assets layer. The objective is conversion without losing trust.

## Pages

### 1. Main Landing

Route:

- `/en`
- `/es`
- `/pt`

Purpose:

- Present UDoChain as an integral platform for verifiable trust.
- Explain the three core modules: Validate, Smart Contracts, and Digital Assets/NFT.
- Show real-world applicability across legal evidence, industrial traceability, agriculture/livestock, carbon credits, real estate, and administrative automation.

Primary CTA:

- Start with UDoChain

Module CTAs:

- Validate evidence
- Automate contracts
- Tokenize real-world assets

### 2. Validate Campaign Landing

Routes:

- `/en/validate`
- `/es/validate`
- `/pt/validate`

Audience:

- Lawyers
- Law firms
- Compliance teams
- Auditors
- Insurance/legal claims
- Judicial or evidentiary workflows

CTA:

- Start with 50 free credits
- Continue with Google
- Continue with Facebook

Core promise:

- Validate digital evidence in minutes.
- Metadata-only validation costs 1 credit.
- Aereware binary custody costs more only when binary files are attached.

### 3. Smart Contracts Campaign Landing

Routes:

- `/en/smart-contracts`
- `/es/smart-contracts`
- `/pt/smart-contracts`

Audience:

- Companies
- Legal operations
- Administration teams
- Procurement
- Logistics
- Contract-heavy operations

CTA:

- Start workspace
- Request demo

Core promise:

- Automate contractual and administrative workflows with verifiable execution.

### 4. Digital Assets / NFT Campaign Landing

Routes:

- `/en/digital-assets`
- `/es/digital-assets`
- `/pt/digital-assets`

Audience:

- Carbon credit projects
- Real estate projects
- Agriculture and livestock certification
- Industrial traceability
- Asset-backed digital certificates

CTA:

- Request asset demo
- Start workspace

Core promise:

- Turn real-world assets into verifiable digital certificates.
- NFT is presented as a serious legal/digital asset certificate, not as collectibles or crypto speculation.

## Language Strategy

English is the base language.

Each page has content for:

- English
- Spanish
- Portuguese

Campaign URLs determine the language and campaign context.

Example:

- `/en/validate`
- `/es/validate`
- `/pt/validate`

CTA links should pass campaign context to the app/API:

```txt
trial=campaign50
source=ads
lang=en|es|pt
campaign=validate|smart-contracts|digital-assets
```

## Visual Direction

Base style:

- Enterprise legaltech
- Premium SaaS
- Clean, trustworthy, serious
- Attractive CTAs without a gaming or crypto-casino look

Palette:

- Off-white background
- Deep charcoal text
- Slate secondary text
- Muted teal brand base
- Vibrant teal CTA
- Light electric-blue accents
- Cyan/emerald accents only for Digital Assets/NFT

Cards:

- 8px radius
- Crisp borders
- Minimal shadow
- No decorative blobs
- No heavy gradients

## Required Assets

### Main Landing

- Hero image: real-world evidence/assets/processes with subtle proof UI overlay
- Platform preview: Validate + Smart Contracts + Digital Assets
- Real-world use case images:
  - Legal evidence
  - Industrial traceability
  - Agriculture/livestock traceability
  - Carbon credits
  - Real estate assets

### Validate Landing

- Legal evidence image
- Validation workflow preview
- Metadata-only vs Aereware custody visual
- Social ad/open graph image

### Smart Contracts Landing

- Contract automation image
- Administrative approval flow preview
- Milestones/conditions/timeline visual
- Social ad/open graph image

### Digital Assets Landing

- Carbon credit digital certificate image
- Real estate digital certificate image
- Agro/industrial certificate image
- NFT/legal asset preview
- Social ad/open graph image

### Icons

Create a consistent icon system for:

- Evidence upload
- Metadata
- Blockchain anchor
- Verification QR
- Aereware custody
- Credits
- Smart contracts
- NFT certificate
- Audit trail
- Legal shield
- AI review
- Document hash
- Wallet
- Team access
- Compliance
- Certificate download

## How We Review Progress

### Local Preview

Use local preview first for fast visual iteration.

Expected local URLs:

```txt
http://localhost:3000/en
http://localhost:3000/en/validate
http://localhost:3000/en/smart-contracts
http://localhost:3000/en/digital-assets
```

Also test:

```txt
http://localhost:3000/es/validate
http://localhost:3000/pt/digital-assets
```

### Browser Review

Review each page in:

- Desktop
- Mobile

Check:

- CTA visibility
- First-screen clarity
- Scroll rhythm
- Image realism
- Trust signals
- Whether the page clearly sells the specific module

### Vercel Preview

After the local version looks good:

1. Push a branch to GitHub.
2. Let Vercel create a preview.
3. Review the public preview URL.
4. Merge only when approved.

## Needed Access

Already enough:

- GitHub access for code changes
- Browser access for local review
- Image generation for assets and mockups

Helpful but not strictly required:

- Vercel dashboard access if we want to inspect preview/deploy logs directly
- Google/Facebook ad accounts later, only when connecting final campaign URLs and tracking

