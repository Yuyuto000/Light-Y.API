import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Section from "@/components/Section/page";

export default function HomePage() {
  return <div className="flex flex-wrap gap-4 items-center">
    <Header />
    <Section id="about" />
    <Section id="features" />
    <Section id="contact" />
    <Section id="vote" />
    <Footer />
  </div>
}
