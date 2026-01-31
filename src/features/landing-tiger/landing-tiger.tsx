import { LandingProvider } from "@/providers/landing"
import { Footer, ImportantInfo, WelcomeBonus, WhyChose } from "./components"
import { BackgroundPattern } from "./components/background-pattern"
import { Header } from "./components/header"
import { CTASection } from "./components/cta-section"
import { FloatingCTA } from "./components/floating-cta"
import { RegistrationDrawer } from "./components/registration-drawer"

export const LandingTigerFortuna = () =>
  <LandingProvider>
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <BackgroundPattern />
      <Header />
      <WelcomeBonus />
      <WhyChose />
      <ImportantInfo />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
    <RegistrationDrawer />
  </LandingProvider>