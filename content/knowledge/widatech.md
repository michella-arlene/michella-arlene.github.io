# Work at WidaTech

## Role: Forward Deployed Engineer at WidaTech

I've been a full-time, on-site Forward Deployed Engineer at WidaTech since July 2026. I work directly with clients across logistics, retail and e-commerce. My job covers the whole delivery: client meetings and requirements, writing technical designs and decision logs when the spec, contract and designs disagree, building full-stack software, setting up CI/CD and staging, running go-live cutovers and data migrations, and writing runbooks and handover documents. I keep client names confidential, so I describe projects by industry.

## Freight operations and alert system (logistics)

For a freight forwarder that imports containers into Indonesia, I built an operations system that replaced their Excel workbooks. It tracks each container from the monthly list through customs, delivery and the deposit refund. It automatically syncs vessel schedules from carriers such as Maersk and Evergreen, raises deadline alerts with urgency levels (critical means a real date has passed), shows why a task is blocked, keeps a full audit log with role-based access, and generates invoice worksheets from packing lists. The stack is TypeScript, Hono, Drizzle ORM and PostgreSQL, deployed with Docker Compose and Nginx through a GitHub Actions pipeline that builds once and deploys behind an approval gate.

## Retail POS and AI sales assistant (retail)

For a consumer-electronics retailer, I built a point-of-sale and inventory system that replaced their legacy POS. Every device is tracked by serial number across its life cycle. It works offline across multiple terminals, has a bilingual English and Indonesian interface, reconciles marketplace fees and payouts, and included a migration from the old system. It also has an AI assistant that answers customers on WhatsApp and Instagram using owner-approved documents and hands stock or pricing questions to staff. The stack is a TypeScript monorepo with React, Ant Design, Express, Prisma, PostgreSQL and the Claude API, self-hosted in the store with automated backups and tag-based deploys.

## Cross-border e-commerce and CMS (e-commerce)

For a cross-border marketplace serving Indonesian customers living in Taiwan, I built the shopping experience and the admin CMS in Indonesian, Chinese and English. It includes a Go API, a React admin dashboard for products, orders and shipping, and a Flutter mobile app. It integrates with a Taiwanese courier for waybills and tracking, with safeguards so test runs can't create billable shipments, and uses single sign-on with the client's existing identity service. I also set up CI, staging deploys and user-acceptance testing.

## Supplier invoice portal (logistics and trade)

For a European logistics and trade group, I worked alongside the client's in-house developers on a supplier portal where suppliers track invoices from receipt through dispute, approval and payment, instead of emailing the finance team. It syncs data on a schedule from the client's logistics system and ERP, runs a rule-based invoice status flow, and sends bilingual email alerts with retry queues. I upgraded it to the latest Symfony and Vue 3 and wrote the delivery documentation: technical design, runbook, operations guide, interface contracts, and test and load-test reports. Stack: PHP, Symfony, Doctrine, Vue 3, MariaDB, Docker.

## AI shipping-document automation (prototype)

I built a prototype for a logistics company that reads shipping-instruction PDFs, extracts the data with an LLM, checks for gaps against the source, and uses Playwright browser automation to fill a shipping line's booking form, stopping before submit so a person can review it. It can also generate standard EDI shipping messages. Stack: Next.js, TypeScript, Playwright, Python and Streamlit.
