import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Last Updated: July 3, 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the EV charging network, website, mobile application, and turnkey charging hardware offered by Reach All under the BREVOLT brand (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use our Services.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Account Registration & Safety</h2>
              <p className="mb-4">
                To access certain features of the Services, including initiating charging sessions and processing digital payments, you must create a verified account.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for keeping your account login details secure.</li>
                <li>You agree to provide accurate, current, and complete details about your vehicle and payment information.</li>
                <li>BREVOLT reserves the right to suspend accounts that display suspicious or malicious activities.</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Charging Services & Uptime</h2>
              <p className="mb-4">
                We strive to maintain a 99.9% charging network uptime. However, charging speeds and station availability depend on several factors, including grid capacity, vehicle battery limitations, local temperatures, and maintenance schedules.
              </p>
              <p>
                Users must follow safety guidelines at the charging bays, including properly inserting and removing the charging connector. Vandalism, misuse, or leaving vehicles parked in charging spots after charging is completed (idle fees may apply) is strictly prohibited.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">4. Payment & Tariff Structure</h2>
              <p className="mb-4">
                Charging fees (tariffs) are calculated based on electricity units consumed (kWh) or charging time, varying by station location, time of day, and charger speed (AC/DC).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All charges are billed immediately upon session completion.</li>
                <li>Payments must be made through our integration with UPI, net banking, debit/credit cards, or mobile wallets.</li>
                <li>Refunds for interrupted sessions will be evaluated case-by-case and processed within 5-7 business days.</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">5. Franchise & Station Partners</h2>
              <p>
                Franchise applications submitted via our platform do not guarantee a partnership agreement. Any official station partnership is subject to location viability, grid clearance, and a signed, legally-binding franchise agreement detailing the ₹60 Lakh investment scope and local revenue split.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>
                Reach All (operator of BREVOLT) is not liable for any indirect, incidental, or consequential damages resulting from station electrical fluctuations, battery incompatibility, or temporary network outages.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice by updating the "Last Updated" date at the top of this page.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">8. Contact Information</h2>
              <p>
                Questions or comments regarding these Terms of Service should be directed to:
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
