import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LeadProvider } from "./components/LeadForm"
import { Shell } from "./wedge/Shell"
import Home from "./pages/Home"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

const base = import.meta.env.BASE_URL
const basename = !base || base === "/" || base === "./" ? undefined : base.replace(/\/$/, "")

export default function App() {
  return (
    <LeadProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LeadProvider>
  )
}
