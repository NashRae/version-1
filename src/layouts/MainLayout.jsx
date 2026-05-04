import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function MainLayout({ children }) {
  useScrollReveal()
  useScrollToTop()

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
