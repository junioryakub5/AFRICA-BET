# Africa Tips — Premium Football Predictions

> Expert football prediction tips for smart bettors in Ghana and Nigeria.
> Pay once. Unlock instantly. Win consistently.

---

## What Is Africa Tips?

Africa Tips is a premium football prediction platform serving bettors in **Ghana** and **Nigeria**. Users browse locked prediction slips, pay securely via Paystack, and receive full access to their bet slip instantly — no waiting, no WhatsApp back-and-forth.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| **Backend** | Express.js (Node 20), REST API |
| **Database** | Supabase (PostgreSQL 15+) |
| **Storage** | Supabase Storage (`africa-tips` bucket) |
| **Payments** | Paystack (Ghana GHS + Nigeria NGN) |
| **Frontend Hosting** | Vercel |
| **Backend Hosting** | VPS (Nginx + PM2) |

---

## Project Structure

```
africa-tips/
├── frontend/          # Next.js 14 app
│   ├── app/           # Pages (App Router)
│   ├── components/    # Navbar, Footer, PredictionCard, PaystackButton
│   ├── lib/           # API client + TypeScript types
│   └── public/        # Logo, favicon
├── backend/
│   ├── server.js      # Express API (single file)
│   └── supabase-schema.sql  # Database schema
├── nginx.conf         # Nginx reverse proxy config
├── start.sh           # One-command local development
└── deploy.exp         # Expect script for VPS deployment
```

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/africa-tips.git
cd africa-tips

# 2. Set up backend .env
cp backend/.env.example backend/.env
# Fill in: SUPABASE_URL, SUPABASE_SERVICE_KEY, SUPABASE_BUCKET,
#          PAYSTACK_SECRET_KEY, ADMIN_TOKEN, CLIENT_URL

# 3. Set up frontend .env.local
cp frontend/.env.local.example frontend/.env.local
# Fill in: NEXT_PUBLIC_API_URL, NEXT_PUBLIC_PAYSTACK_KEY

# 4. Install deps
cd backend && npm install && cd ../frontend && npm install && cd ..

# 5. Start everything (backend + frontend + Cloudflare tunnels)
./start.sh
```

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Backend port (default: 5004) |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Supabase service role key |
| `SUPABASE_BUCKET` | Storage bucket name (`africa-tips`) |
| `PAYSTACK_SECRET_KEY` | Paystack live secret key (`sk_live_...`) |
| `ADMIN_TOKEN` | Admin dashboard password (use a strong random token) |
| `CLIENT_URL` | Comma-separated allowed frontend origins |

### Frontend (`frontend/.env.local`)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend base URL (e.g. `https://your-vps-ip:8081`) |
| `NEXT_PUBLIC_PAYSTACK_KEY` | Paystack live public key (`pk_live_...`) |

---

## VPS Deployment

```bash
# After provisioning your VPS:
./deploy.exp

# Or manually:
ssh root@YOUR_VPS_IP

# On VPS:
git clone https://github.com/YOUR_USERNAME/africa-tips.git /var/www/africa-tips
cd /var/www/africa-tips/backend
npm install --production
pm2 start ecosystem.config.js && pm2 save && pm2 startup
```

Nginx config proxies port `8081` → Node `5004`. Copy `nginx.conf` to `/etc/nginx/sites-available/africa-tips` and enable it.

---

## Admin Dashboard

Navigate to `/portal` → enters the hidden admin dashboard at `/admin`.

Admin features:
- **Overview**: live stats (active predictions, total revenue, total payments)
- **Slips**: create, edit, delete prediction slips with image uploads
- **Payments**: paginated payment log

Admin is gated by bearer token (`ADMIN_TOKEN`).

---

## Support

- **Telegram**: [@mr_kinghh](https://t.me/mr_kinghh)
- **Email**: boadufelix086@icloud.com

---

## License

Proprietary. All rights reserved by Africa Tips.
