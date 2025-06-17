import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Testimonials from '@/components/home/Testimonials'
import Stats from '@/components/home/Stats'

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Stats />
      <Testimonials />
    </main>
  )
}
