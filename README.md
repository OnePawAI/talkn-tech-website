
# Talkn.tech Starter Website

## Purpose

Landing page + subdomain structure for Talkn.tech AI Chat & Call Assistant.

## Structure

- `index.html` → Main landing page (talkn.tech)
- `businessId` param used for chat (same as your current onepaw-chat system)
- No need to create static folders per business for scaling

## Deployment

### 1️⃣ GitHub Pages

- Create GitHub repo → e.g. `talkn-tech-website`
- Push this folder
- Enable GitHub Pages → root folder or `/docs`
- Add `CNAME` → GitHub Pages settings → `talkn.tech`

### 2️⃣ Cloudflare DNS

- talkn.tech → CNAME → yourusername.github.io
- business.talkn.tech → CNAME or Page Rule → same

### 3️⃣ Chat page

- Example button already links to `https://onepawai.github.io/onepaw-chat/?businessId=Demo` → works with your current system

## Scaling Plan

### MVP (Now)

- Use your current onepaw-chat frontend → pass `businessId` param
- Use n8n per business backend → scalable for 20–50 businesses

### Later

- Migrate to dynamic server (Next.js / Node.js) if you want full automation
- Single app serves 1000+ businesses dynamically

## Rebrand to Talkn.tech in 1 Week Plan

| Day | Action |
|-----|--------|
| Day 1–2 | Deploy `www.talkn.tech` via GitHub Pages |
| Day 3 | Configure Cloudflare DNS |
| Day 4 | Change business links → use `business.talkn.tech` |
| Day 5 | Improve chatbot UI (your existing onepaw-chat frontend) |
| Day 6 | Update marketing materials |
| Day 7 | Demo to first restaurant owner |

**Good luck! You are on the right path.** 🚀
