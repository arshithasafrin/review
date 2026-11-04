import { Link } from "react-router-dom"
import { CtaBand, PageIntro, useTitle } from "../wedge/Shell"
import { POSTS } from "../wedge/content"

export default function Blog() {
  useTitle("Blog · Restrosights")
  return (
    <>
      <PageIntro title="Notes from the Restrosights team">
        How the stand works, what a low rating does, and what the monthly report includes. These are product explainers, not customer results.
      </PageIntro>
      <section className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-6 py-10 md:grid-cols-3">
        {POSTS.map((post) => (
          <article key={post.slug} className="wedge-card overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#f4ebff] via-[#cfc6ff] to-[#8d82f3]" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5346d4]">{post.category}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                <Link to={`/blog/${post.slug}`} className="hover:text-[#5346d4]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5c6478]">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  )
}
