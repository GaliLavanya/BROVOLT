import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Last Updated: July 3, 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                Welcome to Reach All ("we," "our," or "us"), operators of the BREVOLT EV charging platform. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us at <a href="mailto:hello@brevolt.in" className="text-accent hover:underline font-semibold">hello@brevolt.in</a>.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when registering on the Website or mobile application, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, phone number, email address, mailing address, billing details, and preferred locations.</li>
                <li><strong>Vehicle Data:</strong> EV make, model, battery capacity, connector type, and charging history.</li>
                <li><strong>Location Data:</strong> Geolocation information to find nearby charging stations when using our app/services.</li>
                <li><strong>Payment Data:</strong> Payment card numbers, UPI IDs, or digital wallet links to process charging transactions.</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use personal information collected via our Services for a variety of business purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon processes.</li>
                <li>To enable, monitor, and optimize EV charging sessions.</li>
                <li>To process and settle payments for charging services.</li>
                <li>To deliver support, technical maintenance, and resolve station queries.</li>
                <li>To evaluate applications for franchise opportunities and manage station partnerships.</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or lease your personal information to third-party advertisers.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">5. Data Security & Uptime</h2>
              <p>
                We use appropriate administrative, technical, and physical security measures to protect the personal information we process. However, please remember that no transmission over the Internet is 100% secure. Our AI-powered cloud systems monitor and protect your billing information using industry-standard SSL encryption.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, you may contact our Grievance Officer at:
              </p>
              <p className="mt-4 font-semibold text-foreground">
                Reach All Private Limited<br />
                Email: hello@brevolt.in<br />
                Address: 3rd Floor, Newmark House, Unit No: 303 B, Plot No: 56, Patrika Nagar, Madhapur, Serilingampalle (M), Hyderabad, Telangana 500081
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
