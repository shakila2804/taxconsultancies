import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  Handshake,
  Camera,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import logo from "./assets/logo.png";
import "./App.css";

const phone = "+917358009987";
const enquiryEmail = "synergyaudit9@gmail.com";
const whatsappLink = `https://wa.me/${phone}?text=Hi%20Tax%20Care%20Consultancy%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20and%20GST%20services.`;

const faqItems = [
  [
    "How long does GST registration take?",
    "GST registration applications are usually filed within 2 hours of receiving the required documents.",
  ],
  [
    "What documents are needed for GST registration?",
    "We send you an exact checklist after a free consultation and help you prepare everything correctly.",
  ],
  [
    "Do you work with businesses outside Chennai?",
    "Yes. We work remotely with clients across India. Your location does not change the service or price.",
  ],
  [
    "What happens if I have missed filing for several months?",
    "Message us with your details. We review the pending periods, explain the next steps and handle the filings or queries.",
  ],
  [
    "Is ₹499 per month the final price for GST filing?",
    "₹499 is the starting professional fee for a typical small business. We confirm the exact quote before work starts.",
  ],
  [
    "Who will actually handle my work?",
    "Your work is led by Sowmiya Sekar, CM Completed, with one dedicated point of contact on WhatsApp or phone.",
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${enquiryEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email || "Not provided",
          mobile: form.mobile,
          service: form.service,
          message: form.message || "Not provided",
          _subject: `New enquiry: ${form.service}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Unable to send enquiry");
      setSubmitStatus("success");
      setForm({ name: "", mobile: "", email: "", service: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* <div className="topbar"><span>Chennai, Tamil Nadu · GST · Income Tax · Accounting</span><span>Trusted by 20+ businesses <Check size={13} /></span></div> */}
      <nav className="nav shell">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <img src={logo} alt="Tax Care Consultancy logo" />
          </span>
          <span>
            Tax Care <small>CONSULTANCY</small>
          </span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>
            Why Us
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a className="nav-phone" href={`tel:${phone}`}>
            <Phone size={14} /> +91 73580 09987
          </a>
          <a
            className="nav-cta"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Free Consultation
          </a>
        </div>
        <button
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            A trusted tax and GST consultant near you in Chennai
          </p>
          <h1>
            Stop <span className="hero-emphasis">worrying<svg className="hero-underline" height="14" viewBox="0 0 220 14" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10.5C48 5.2 128 2.4 217 4.6" stroke="var(--green)" strokeWidth="4" strokeLinecap="round" /></svg></span> about <em>tax deadlines.</em>
          </h1>
          <p className="hero-lede">
            We handle GST, income tax, TDS and accounting for small businesses
            and professionals. Accurately, on time, and at a price you know
            upfront.
          </p>
          <div className="hero-actions">
            <a
              className="button button-green"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Get a free consultation <ArrowUpRight size={17} />
            </a>
            <a
              className="button button-outline"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
          </div>
          <div className="hero-proof">
            <span className="stars">★★★★★</span>
            <strong>Trusted by 20+ businesses in Chennai</strong>
            <i></i>
            <span>
              Led by <b>Sowmiya Sekar</b>, CM Completed
            </span>
          </div>
        </div>
        <div className="status-window">
          <div className="window-bar">
            <span>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <small>COMPLIANCE STATUS</small>
          </div>
          <div className="status-list">
            <div>
              <b>GSTR-1 · September</b>
              <small>Due 10 Oct</small>
              <em>
                <Check size={12} /> Filed
              </em>
            </div>
            <div>
              <b>GSTR-3B · September</b>
              <small>Due 18 Oct</small>
              <em>
                <Check size={12} /> Filed
              </em>
            </div>
            <div>
              <b>TDS Q2 Return</b>
              <small>Due 28 Oct</small>
              <em>
                <Check size={12} /> Filed
              </em>
            </div>
            <div>
              <b>ITR · AY 2026-27</b>
              <small>Due 12 Jul</small>
              <em>
                <Check size={12} /> Filed
              </em>
            </div>
          </div>
          <div className="penalty">
            <span>Penalties this year</span>
            <strong>₹0</strong>
          </div>
        </div>
      </section>
      <div className="trust-strip">
        <span>
          <Check size={15} /> GST registration filed in 2 hours
        </span>
        <span>
          <Check size={15} /> Monthly filing from ₹499
        </span>
        <span>
          <Check size={15} /> One dedicated point of contact
        </span>
      </div>

      <section className="section services-section shell" id="services">
        <div className="section-heading">
          <p className="eyebrow">Our services</p>
          <h2>
            Every tax and compliance service, <em>under one roof.</em>
          </h2>
          <p>
            From your first GST registration to annual returns and audit-ready
            books, for businesses across Chennai. You never need to coordinate
            between different consultants.
          </p>
        </div>
        <ServiceGroup
          title="Registrations"
          intro="Get your business legally set up, correctly, and without the runaround."
          cards={[
            [
              "GST Registration",
              "New GSTIN with full documentation support. Most applications are filed within 2 hours of receiving your documents.",
              ShieldCheck,
            ],
            [
              "MSME / Udyam Registration",
              "Unlock government schemes, subsidies and easier access to business credit with a proper Udyam certificate.",
              Building2,
            ],
            [
              "PAN & TAN Registration",
              "Quick assistance in obtaining or correcting PAN and TAN for individuals, firms and companies.",
              FileText,
            ],
            [
              "Company & Firm Incorporation",
              "Private Limited, LLP and partnership firm registration handled end to end, from name approval to certificate.",
              Landmark,
            ],
            [
              "Trade License",
              "Support in obtaining and renewing trade licenses so your operations stay uninterrupted.",
              Handshake,
            ],
          ]}
        />
        <ServiceGroup
          title="Filings & Compliance"
          intro="Every due date tracked and met, so penalties and notices never reach you."
          cards={[
            [
              "GST Return Filing",
              "GSTR-1, GSTR-3B and annual returns filed monthly or quarterly. Reconciled, reviewed and filed on time.",
              FileCheck2,
            ],
            [
              "Income Tax Filing",
              "ITR for salaried individuals, professionals, firms and companies, claiming every deduction you are entitled to.",
              Calculator,
            ],
            [
              "TDS & TCS Filing",
              "Quarterly TDS and TCS returns, challan reconciliation and Form 16 / 16A generation without errors.",
              ClipboardCheck,
            ],
            [
              "ROC & Annual Returns",
              "Annual filings for companies, LLPs and firms, kept complete and on schedule with the registrar.",
              FileText,
            ],
            [
              "Amendments & Corrections",
              "Changes to GST, PAN, TAN or registration details: address, partners, business activity and more.",
              Sparkles,
            ],
          ]}
        />
        <ServiceGroup
          title="Accounting & Advisory"
          intro="Clear books and clear numbers, so you always know where your business stands."
          cards={[
            [
              "Accounting & Bookkeeping",
              "Monthly bookkeeping in Tally or your preferred software, kept audit-ready throughout the year.",
              Calculator,
            ],
            [
              "Financial Statements",
              "Balance sheet, P&L and cash flow prepared properly, showing the real financial picture of your business.",
              FileText,
            ],
            [
              "Projected & Provisional Statements",
              "Bank-ready projections and provisional financials to support loan, CC limit and funding applications.",
              Landmark,
            ],
            [
              "Stock Audit",
              "Accurate physical stock verification and reporting for businesses and lending institutions.",
              ShieldCheck,
            ],
          ]}
        />
        <p className="service-note">
          We handle most tax and compliance work for businesses in Chennai. If
          you need something not listed here,{" "}
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            just ask us.
          </a>
        </p>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Pricing</p>
            <h2>
              Clear prices, quoted <em>before we start.</em>
            </h2>
            <p>
              These are our starting prices for a typical small business. If
              your volume or structure means it should be different, we will
              tell you that upfront, never after the work is done.
            </p>
          </div>
          <div className="pricing-grid">
            <PriceCard
              title="GST Registration"
              badge="Filed in 2 hours"
              price="₹1,499"
              suffix="one-time"
              description="Everything needed to get your GSTIN, start to finish."
              items={[
                "Document check & preparation",
                "Application filed within 2 hours",
                "Clarification / query handling",
                "GST certificate delivered to you",
                "Free first-month filing guidance",
              ]}
            />
            <PriceCard
              title="GST Monthly Filing"
              badge="Most popular"
              price="₹499"
              suffix="per month"
              description="Stay compliant every month without thinking about it."
              items={[
                "GSTR-1 & GSTR-3B filing",
                "Purchase & sales reconciliation",
                "Input tax credit review",
                "Due-date reminders",
                "Dedicated point of contact",
              ]}
              featured
            />
            <PriceCard
              title="Accounting & ITR"
              badge="Year-round support"
              price="₹2,999"
              suffix="starting at"
              description="Books, statements and income tax handled together."
              items={[
                "Monthly bookkeeping",
                "Financial statement preparation",
                "Income tax return filing",
                "TDS return filing",
                "Tax planning advice",
              ]}
            />
          </div>
          <p className="price-note">
            All prices are professional fees only. Government fees, if any, are
            charged at actuals and shown to you separately.
          </p>
        </div>
      </section>

      <section className="section why-section shell" id="why-us">
        <div className="why-copy">
          <p className="eyebrow">Why us</p>
          <h2>
            Compliance work you can actually <em>stop thinking about.</em>
          </h2>
          <p>
            Most business owners lose money not to tax, but to missed deadlines,
            wrong filings and consultants who go quiet. We built Tax Care
            Consultancy to remove exactly that.
          </p>
          <a
            className="button button-green"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Talk to us, it&apos;s free <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="why-grid">
          <WhyCard icon={Clock3} title="Fast turnaround">
            GST registration applications filed within 2 hours. Returns filed
            well before the due date, never at the last minute.
          </WhyCard>
          <WhyCard icon={FileCheck2} title="Transparent pricing">
            You get a clear quote before any work starts. No hidden charges, no
            surprise invoices at the end.
          </WhyCard>
          <WhyCard icon={BadgeCheck} title="Qualified guidance">
            Led by Sowmiya Sekar, CM Completed, with hands-on experience in
            taxation, compliance and cost accounting.
          </WhyCard>
          <WhyCard icon={Building2} title="Everything under one roof">
            Registration, filing, accounting, ROC and advisory. You never need
            to coordinate between multiple consultants.
          </WhyCard>
          <WhyCard icon={Handshake} title="One point of contact">
            You reach the same person every time, on WhatsApp or phone, and get
            a straight answer in plain language.
          </WhyCard>
        </div>
      </section>

      <section className="section about-section shell" id="about">
        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h2>
            A practice built on doing the <em>basics properly.</em>
          </h2>
          <p>
            Tax Care Consultancy is a Chennai-based tax and business advisory
            practice led by Sowmiya Sekar, CM Completed.
          </p>
          <p>
            We work with the businesses that usually get the least attention:
            proprietors, small traders, service providers, freelancers and
            early-stage firms. The kind of client who is told a price on the
            phone and a different one on the invoice, or who finds out about a
            notice six months too late.
          </p>
          <p>
            Our approach is simple: quote clearly, file early, explain things in
            plain language, and stay reachable. That is why 20+ businesses now
            run their compliance through us.
          </p>
          <div className="check-grid">
            <span>
              <Check size={15} /> Qualified, hands-on guidance
            </span>
            <span>
              <Check size={15} /> Reachable on WhatsApp
            </span>
            <span>
              <Check size={15} /> No hidden charges, ever
            </span>
            <span>
              <Check size={15} /> Work done remotely, across India
            </span>
          </div>
        </div>
        <div className="founder-card">
          <div className="founder-heading">
            <span className="founder-avatar">BM</span>
            <span>
              <strong>Sowmiya Sekar</strong>
              <small>CMA Completed · Founder</small>
            </span>
          </div>
          <blockquote>
            “Most of my clients came to me after a bad experience elsewhere. So
            I keep it simple. I tell you the price first, I file before the
            deadline, and I pick up the phone.”
          </blockquote>
          <div className="founder-stats">
            <span>
              <small>CLIENTS SERVED</small>
              <strong>20+</strong>
            </span>
            <span>
              <small>BASED IN</small>
              <strong>Chennai</strong>
            </span>
          </div>
          <div className="founder-links">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/_tax_care_consultant_"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={14} /> Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="shell">
          <p className="eyebrow">How it works</p>
          <h2>
            Three steps, and it&apos;s <em>off your plate.</em>
          </h2>
          <div className="steps">
            <Step number="01" title="Tell us what you need">
              Message us on WhatsApp or fill the enquiry form. We will have a
              free consultation to understand your business and requirement.
            </Step>
            <Step number="02" title="Share your documents">
              We send you an exact checklist and a clear quote. You share the
              documents over WhatsApp or email, with no office visits needed.
            </Step>
            <Step number="03" title="We file and confirm">
              We complete the work, handle any department queries, and send you
              the certificate or acknowledgement with a confirmation.
            </Step>
          </div>
        </div>
      </section>

      <section className="section faq-section shell" id="faq">
        <div className="faq-intro">
          <p className="eyebrow">FAQ</p>
          <h2>
            Questions we get asked <em>most.</em>
          </h2>
          <p>
            Still unsure about something? Message us. We answer even if you
            don&apos;t end up becoming a client.
          </p>
        </div>
        <div className="faq-list">
          {faqItems.map(([question, answer], index) => (
            <div
              className={`faq-item ${openFaq === index ? "open" : ""}`}
              key={question}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span>{question}</span>
                <ChevronDown size={18} />
              </button>
              {openFaq === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-layout">
          <div className="contact-info">
            <p className="eyebrow">Contact</p>
            <h2>
              Let&apos;s sort out <em>your compliance.</em>
            </h2>
            <p>
              Send us an enquiry, or reach us directly, whichever is easier. The
              first consultation is free and there&apos;s no obligation.
            </p>
            <div className="contact-cards">
              <ContactCard
                icon={Phone}
                label="Call us"
                value="+91 73580 09987"
                note="Mon – Sat, 10:00 AM – 7:00 PM"
                href={`tel:${phone}`}
              />
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value="Message us directly"
                note="Usually replies within an hour"
                href={whatsappLink}
              />
              <ContactCard
                icon={Mail}
                label="Email"
                value={enquiryEmail}
                note="For documents and detailed queries"
                href={`mailto:${enquiryEmail}`}
              />
              <ContactCard
                icon={Camera}
                label="Instagram"
                value="@_tax_care_consultant_"
                note="Tax tips and updates"
                href="https://www.instagram.com/_tax_care_consultant_"
              />
              <ContactCard
                icon={MapPin}
                label="Service area"
                value="Chennai, Tamil Nadu"
                note="Working remotely with clients across India"
              />
            </div>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <h3>Send us an enquiry</h3>
            <p>Tell us what you need. No cost, no obligation.</p>
            <label>
              Your name *
              <input
                required
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                placeholder="e.g. Ramesh Kumar"
              />
            </label>
            <div className="form-row">
              <label>
                Mobile number *
                <input
                  required
                  value={form.mobile}
                  onChange={(event) =>
                    setForm({ ...form, mobile: event.target.value })
                  }
                  placeholder="10-digit mobile"
                />
              </label>
              <label>
                Email <span>(optional)</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label>
              Service required *
              <select
                required
                value={form.service}
                onChange={(event) =>
                  setForm({ ...form, service: event.target.value })
                }
              >
                <option value="">Choose a service...</option>
                <option>GST Registration</option>
                <option>GST Monthly Filing</option>
                <option>Income Tax Filing</option>
                <option>Accounting & Bookkeeping</option>
                <option>Company & Firm Incorporation</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Message <span>(optional)</span>
              <textarea
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                placeholder="Briefly, what do you need help with?"
              />
            </label>
            <button className="button button-green" type="submit" disabled={isSubmitting}>
              <Send size={15} /> {isSubmitting ? "Sending..." : "Send enquiry"}
            </button>
            {submitStatus === "success" && <p className="form-status success">Your enquiry was sent successfully.</p>}
            {submitStatus === "error" && <p className="form-status error">Unable to send right now. Please email us directly at {enquiryEmail}.</p>}
            <small>
              We use your details only to respond to this enquiry. We never
              share them.
            </small>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">
                <img src={logo} alt="Tax Care Consultancy logo" />
              </span>
              <span>
                Tax Care <small>CONSULTANCY</small>
              </span>
            </a>
            <p>
              Trust · Solution · Growth. GST, income tax, TDS, accounting and
              compliance for small businesses and professionals in Chennai.
            </p>
            <div className="socials">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle size={15} />
              </a>
              <a
                href="https://www.instagram.com/_tax_care_consultant_"
                target="_blank"
                rel="noreferrer"
              >
                <Camera size={15} />
              </a>
              <a href="mailto:synergyaudit9@gmail.com">
                <Mail size={15} />
              </a>
            </div>
          </div>
          <div>
            <h4>Navigate</h4>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#why-us">Why Us</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Popular services</h4>
            <a href="#services">GST Registration in Chennai</a>
            <a href="#services">MSME / Udyam Registration</a>
            <a href="#services">PAN & TAN Registration</a>
            <a href="#services">Company & Firm Incorporation</a>
            <a href="#services">GST Return Filing</a>
            <a href="#services">Income Tax Filing</a>
          </div>
          <div className="footer-area">
            <h4>Serving businesses across Chennai</h4>
            <p>
              T. Nagar · Anna Nagar · Adyar · Velachery · Guindy · Mylapore ·
              Nungambakkam · Kodambakkam · Porur · Ambattur · Avadi · Tambaram ·
              Chromepet · Pallikaranai · Perungudi · Sholinganallur · OMR ·
              Egmore · Purasaiwakkam · Madipakkam and everywhere else in
              Chennai.
            </p>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Tax Care Consultancy. All rights reserved.</span>
            <span>
              <a href={`tel:${phone}`}>+91 7358009987</a> ·{" "}
              <a href="mailto:synergyaudit9@gmail.com">
                synergyaudit9@gmail.com
              </a>
            </span>
          </div>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Tax Care Consultancy on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </main>
  );
}

function ServiceGroup({
  title,
  intro,
  cards,
}: {
  title: string;
  intro: string;
  cards: [string, string, typeof ShieldCheck][];
}) {
  return (
    <div className="service-group">
      <div className="group-heading">
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>
      <div className="service-cards">
        {cards.map(([name, description, Icon]) => (
          <article className="service-card" key={name}>
            <span className="service-icon">
              <Icon size={17} />
            </span>
            <h4>{name}</h4>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
function PriceCard({
  title,
  badge,
  price,
  suffix,
  description,
  items,
  featured = false,
}: {
  title: string;
  badge: string;
  price: string;
  suffix: string;
  description: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <article className={`price-card ${featured ? "featured" : ""}`}>
      <div className="price-title">
        <h3>{title}</h3>
        <span>{badge}</span>
      </div>
      <p>{description}</p>
      <div className="price">
        <strong>{price}</strong>
        <small>{suffix}</small>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={14} /> {item}
          </li>
        ))}
      </ul>
      <a
        className={`button ${featured ? "button-green" : "button-outline"}`}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        Enquire about this <ArrowUpRight size={15} />
      </a>
    </article>
  );
}
function WhyCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Clock3;
  title: string;
  children: string;
}) {
  return (
    <article className="why-card">
      <span>
        <Icon size={17} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: string;
}) {
  return (
    <article className="step">
      <strong>{number}</strong>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
function ContactCard({
  icon: Icon,
  label,
  value,
  note,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  note: string;
  href?: string;
}) {
  return (
    <a
      className="contact-card"
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      <span>
        <Icon size={16} />
      </span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
        <em>{note}</em>
      </div>
    </a>
  );
}

export default App;
