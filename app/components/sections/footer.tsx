'use client'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Couple */}
          <div className="text-center">
            <h3 className="font-serif text-xl font-light mb-2">With Love</h3>
            <p className="text-primary-foreground/80">Arvie & Regina</p>
          </div>

          {/* Date */}
          <div className="text-center">
            <h3 className="font-serif text-xl font-light mb-2">Our Day</h3>
            <p className="text-primary-foreground/80">December 1, 2026</p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-serif text-xl font-light mb-2">Questions?</h3>
            <p className="text-primary-foreground/80 text-sm">
              [Contact Email]
              <br />
              [Phone Number]
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 mb-8" />

        {/* Bottom message */}
        <div className="text-center space-y-4">
          <p className="font-serif text-lg text-accent">
            "A successful marriage requires falling in love many times, always with the same person."
          </p>
          <p className="text-xs text-primary-foreground/70">
            Thank you for celebrating with us • December 1, 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
