import type { ReactElement } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const navigation = [
  "Home",
  "Furniture",
  "Kitchen",
  "Collections",
  "About Us",
  "Projects",
  "Contact",
];

const features = [
  {
    title: "Premium Materials",
    description: "Finest materials crafted to last.",
    icon: "material",
  },
  {
    title: "Custom Design",
    description: "Personalized solutions tailored to your space.",
    icon: "design",
  },
  {
    title: "On-Time Delivery",
    description: "Reliable delivery with care and precision.",
    icon: "delivery",
  },
  {
    title: "Dedicated Support",
    description: "Our team is here to help you at every step.",
    icon: "support",
  },
];

const spaces = [
  {
    title: "Living Room",
    subtitle: "Sofas, tables & more",
    image: "/living-room-sofa.png",
  },
  {
    title: "Kitchens",
    subtitle: "Modern, functional, timeless",
    image: "/kitchen-showcase.png",
  },
  {
    title: "Bedroom",
    subtitle: "Beds, wardrobes & more",
    image: "/bedroom-warm.png",
  },
  {
    title: "Dining Room",
    subtitle: "Tables, chairs & more",
    image: "/dining-room.png",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We understand your needs, style, budget and space.",
    image: "/icons/consultation-v2.png",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Custom concepts and detailed plans shaped around your home.",
    image: "/icons/planning-v2.png",
  },
  {
    step: "03",
    title: "Material Selection",
    description: "We choose premium finishes, fixtures and textures together.",
    image: "/icons/selection-v2.png",
  },
  {
    step: "04",
    title: "Crafting",
    description: "Skilled artisans build every piece with accuracy and care.",
    image: "/icons/crafting-v2.png",
  },
  {
    step: "05",
    title: "Delivery & Installation",
    description: "Our team installs everything cleanly and precisely.",
    image: "/icons/delivery-v2.png",
  },
  {
    step: "06",
    title: "Aftercare Support",
    description: "We stay with you after handover for guidance and support.",
    image: "/icons/support-v2.png",
  },
];

const projects = [
  {
    title: "Modern Walnut Kitchen",
    city: "Bangalore",
    image: "/kitchen-project.png",
  },
  {
    title: "Luxury Living Room",
    city: "Mumbai",
    image: "/living-room-large.png",
  },
  {
    title: "Minimalist Bedroom",
    city: "Pune",
    image: "/bedroom-bright.png",
  },
  {
    title: "Custom Dining Space",
    city: "Delhi",
    image: "/dining-project.png",
  },
];

const qualities = [
  {
    title: "Premium Wood & Finishes",
    description: "Carefully selected for strength and beauty.",
    image: "/icons/2-removebg-preview.png",
  },
  {
    title: "High Quality Hardware",
    description: "Durable and reliable, sourced from trusted brands.",
    image: "/icons/3-removebg-preview.png",
  },
  {
    title: "Expert Craftsmanship",
    description: "Every detail is crafted by skilled hands with precision.",
    image: "/icons/4-removebg-preview.png",
  },
  {
    title: "Sustainable Practices",
    description: "Responsibly sourced materials for a better tomorrow.",
    image: "/icons/sustainable-practices.png",
  },
];

const quickLinks = ["About Us", "Collections", "Kitchens", "Furniture", "Projects", "Contact Us"];
const supportLinks = ["FAQ", "Delivery & Returns", "Warranty", "Care Guide", "Support"];

function Icon({ type }: { type: string }) {
  const icons: Record<string, ReactElement> = {
    material: (
      <>
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.2 2.2M7.5 16.5l-2.2 2.2M18.7 18.7l-2.2-2.2M7.5 7.5 5.3 5.3" />
      </>
    ),
    design: (
      <>
        <path d="M5 18.5 18.5 5" />
        <path d="m7.2 5 11.8 11.8" />
        <path d="M4 20h4.5L20 8.5V4h-4.5L4 15.5Z" />
      </>
    ),
    delivery: (
      <>
        <path d="M3 7.5h11v8H3z" />
        <path d="M14 10.5h3.2l2.3 2.5V15H14z" />
        <circle cx="8" cy="17.5" r="1.6" />
        <circle cx="17.5" cy="17.5" r="1.6" />
      </>
    ),
    support: (
      <>
        <path d="M7.5 19.5v-2.8A3.7 3.7 0 0 1 11.2 13h1.6a3.7 3.7 0 0 1 3.7 3.7v2.8" />
        <circle cx="12" cy="8" r="3.2" />
        <path d="M4 12a8 8 0 0 1 16 0" />
      </>
    ),
    consultation: (
      <>
        <path d="M5 6.5h14v8H9l-4 3z" />
        <circle cx="9" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    planning: (
      <>
        <path d="M5 5h14v14H5z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <path d="m13.5 6.5 3 3" />
      </>
    ),
    selection: (
      <>
        <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" />
      </>
    ),
    crafting: (
      <>
        <path d="m6 7 11 11M17 7 6 18" />
        <path d="m14 4 2.5 2.5M7.5 17.5 5 20" />
      </>
    ),
    installation: (
      <>
        <path d="M3 8h11v7H3z" />
        <path d="M14 10.5h3l2 2.5V15H14z" />
        <circle cx="8" cy="17.5" r="1.6" />
        <circle cx="17.5" cy="17.5" r="1.6" />
      </>
    ),
    aftercare: (
      <>
        <path d="M6 8.5a6 6 0 0 1 12 0v4a2.5 2.5 0 0 1-2.5 2.5h-1.7" />
        <rect x="4" y="10" width="3" height="6" rx="1.2" />
        <rect x="17" y="10" width="3" height="6" rx="1.2" />
        <path d="M12 17.5h2.8a1.7 1.7 0 1 1 0 3.5H12" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      {icons[type]}
    </svg>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <header className={styles.topbar}>
          <div className={styles.brand}>PALLADA</div>
          <nav className={styles.nav}>
            {navigation.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={index === 0 ? styles.activeNavItem : undefined}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className={styles.topbarActions}>
            <button className={styles.iconButton} aria-label="Search" />
            <button className={styles.iconButton} aria-label="Profile" />
            <button className={styles.consultButton}>Book a Consultation</button>
          </div>
        </header>

        <div className={styles.heroStage}>
          <div className={styles.heroVisual} aria-hidden="true">
            <Image
              src="/hero-kitchen.png"
              alt="Premium walnut kitchen interior"
              fill
              priority
              className={styles.coverImage}
              sizes="100vw"
            />
            <div className={styles.heroVisualOverlay} />
          </div>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Timeless design. Exceptional living.</p>
            <h1>
              Furniture & Kitchens
              <br />
              Crafted for Life
            </h1>
            <p className={styles.heroText}>
              We design and build elegant furniture and premium kitchens that
              elevate every space with comfort, style and lasting quality.
            </p>
            <div className={styles.heroActions}>
              <a href="#collections" className={styles.primaryButton}>
                Explore Collections
              </a>
              <a href="#kitchen" className={styles.secondaryButton}>
                View Kitchens
              </a>
            </div>
          </div>
        </div>

        <div className={styles.featureBar}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <div className={styles.iconWrap}>
                <Icon type={feature.icon} />
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className={styles.sectionLight}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Explore by space</p>
          <h2>Designed for Every Part of Your Home</h2>
          <p>
            From modern kitchens to timeless furniture, explore our complete
            range of refined interior solutions.
          </p>
        </div>

        <div className={styles.spaceGrid}>
          {spaces.map((space) => (
            <article key={space.title} className={styles.spaceCard}>
              <div className={styles.spaceImage}>
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className={styles.coverImage}
                  sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 25vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <div>
                  <h3>{space.title}</h3>
                  <p>{space.subtitle}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Our process</p>
          <h2>How We Work</h2>
          <p>A seamless journey from concept to completion.</p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <article key={step.step} className={styles.processCard}>
              <div className={styles.processIcon}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className={styles.processIconImage}
                  sizes="96px"
                />
              </div>
              <span className={styles.stepNumber}>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.projectsIntro}>
          <p className={styles.kicker}>Our projects</p>
          <h2>Spaces We&apos;re Proud Of</h2>
          <p>
            Every project tells a story of creativity, craftsmanship and client
            trust.
          </p>
          <a href="#contact" className={styles.primaryButton}>
            View All Projects
          </a>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.coverImage}
                  sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 25vw"
                />
              </div>
              <div className={styles.projectMeta}>
                <h3>{project.title}</h3>
                <p>{project.city}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.materialsSection}>
        <div className={styles.materialPanel}>
          <div className={styles.materialImage} aria-hidden="true">
            <Image
              src="/material-detail.png"
              alt="Material palette with wood, marble and stone finishes"
              fill
              className={styles.coverImage}
              sizes="(max-width: 1180px) 100vw, 33vw"
            />
          </div>
          <div className={styles.materialCopy}>
            <p className={styles.kicker}>Quality that lasts</p>
            <h2>Materials. Craftsmanship. Perfection.</h2>
            <p>
              We use the finest materials and the latest craftsmanship
              techniques to create furniture and kitchens that are beautiful,
              functional and made to last for generations.
            </p>
          </div>
          <div className={styles.qualityList}>
            {qualities.map((item) => (
              <div key={item.title} className={styles.qualityItem}>
                <div className={styles.qualityIconWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.qualityIconImage}
                    sizes="32px"
                  />
                </div>
                <div className={styles.qualityCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.testimonialColumn}>
          <p className={styles.kicker}>What our clients say</p>
          <h2>Trusted by Hundreds of Happy Clients</h2>
          <div className={styles.testimonialCard}>
            <div className={styles.rating}>★★★★★</div>
            <p>
              “Pallada transformed our home completely. The kitchen is not only
              beautiful but also extremely functional. The team was
              professional, creative and delivered beyond our expectations.”
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>A</div>
              <div>
                <strong>Aanya & Rohan</strong>
                <span>Bangalore</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialVisual}>
          <div className={styles.livingShowcase}>
            <Image
              src="/living-room-curved.png"
              alt="Curved luxury sofa in a warm living room"
              fill
              className={styles.coverImage}
              sizes="(max-width: 1180px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerBrand}>
          <div className={styles.brand}>PALLADA</div>
          <p>Elegant furniture and kitchens crafted for beautiful, functional living.</p>
          <div className={styles.socialRow}>
            <span>in</span>
            <span>p</span>
            <span>f</span>
            <span>ig</span>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          {quickLinks.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </div>

        <div className={styles.footerLinks}>
          <h3>Help & Support</h3>
          {supportLinks.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </div>

        <div className={styles.footerLinks}>
          <h3>Contact Us</h3>
          <p>+91 91345 67890</p>
          <p>hello@pallada.com</p>
          <p>123, Design Street, Bangalore, India - 560001</p>
        </div>

        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on new collections and exclusive offers.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="button">→</button>
          </form>
        </div>
      </footer>
    </main>
  );
}
