import { Link, useParams } from "react-router-dom"
import { CtaBand, useTitle } from "../wedge/Shell"
import { postBySlug } from "../wedge/content"
import NotFound from "./NotFound"

export default function Post() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  useTitle(post ? `${post.title} · Restrosights` : "Not found · Restrosights")
  if (!post) return <NotFound />

  return (
    <>
      <article className="mx-auto w-[min(720px,calc(100%-2rem))] py-16">
        <Link to="/blog" className="text-sm font-medium text-[#5346d4]">
          ← All notes
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#5346d4]">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-[#5c6478]">{post.excerpt}</p>
        <div className="mt-8 h-52 rounded-[28px] bg-gradient-to-br from-[#f4ebff] via-[#cfc6ff] to-[#8d82f3]" />
        <div className="mt-8 grid gap-4 text-base leading-relaxed text-[#2c3348]">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <CtaBand />
    </>
  )
}
