'use client'

export function Footer() {
  return (
    <footer className="bg-[#1f1a18] px-4 py-12 text-[#f8f1ee]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-2 font-serif text-xl font-light">With Love</h3>
            <p className="text-[#f8f1ee]/75">Arvie & Regina</p>
          </div>

          <div className="text-center">
            <h3 className="mb-2 font-serif text-xl font-light">Our Day</h3>
            <p className="text-[#f8f1ee]/75">December 1, 2026</p>
          </div>

          <div className="text-center">
            <h3 className="mb-2 font-serif text-xl font-light">Questions?</h3>
            <p className="text-sm text-[#f8f1ee]/75">
              [Contact Email]
              <br />
              [Phone Number]
            </p>
          </div>
        </div>

        <div className="mb-8 h-px bg-white/10" />

        <div className="space-y-4 text-center">
          <p className="font-serif text-lg text-[#f0c9a7]">
            "A successful marriage requires falling in love many times, always with the same person."
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#f8f1ee]/60">
            Thank you for celebrating with us • December 1, 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
