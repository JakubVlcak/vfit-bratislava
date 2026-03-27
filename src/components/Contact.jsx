const INFO_ITEMS = [
  {
    icon: 'location_on',
    title: 'Adresa',
    detail: (
      <>
        V-FIT - športovo-relaxačné centrum, o.z.
        <br />
        Gercenova 8/F
        <br />
        851 01 Bratislava 5 / Petržalka-Dvory/
        <br />
        Slovakia (European Union)
      </>
    ),
  },
  {
    icon: 'email',
    title: 'E-mail',
    detail: (
      <a
        href="mailto:vfit.petrzalka@gmail.com"
        className="text-primary hover:underline"
      >
        vfit.petrzalka@gmail.com
      </a>
    ),
  },
  {
    icon: 'phone_iphone',
    title: 'Mobil',
    detail: (
      <>
        <a href="tel:+421903174885" className="text-primary hover:underline">
          +421 903 17 48 85
        </a>
        <span className="block text-sm text-on-surface-variant/60 mt-1">
          (doobeda do 14 h, inak SMS)
        </span>
      </>
    ),
  },
]

export default function Contact() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div>
          <h2 className="font-headline text-5xl font-extrabold mb-8 tracking-tight">
            Kontakt
          </h2>
          <div className="space-y-6">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide text-on-surface-variant/60 mb-1">
                    {item.title}
                  </p>
                  <p className="text-on-surface font-medium">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-2xl h-full">
            <iframe
              title="V-FIT Bratislava - Gercenova 8/F"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.5!2d17.1069!3d48.1219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8b3a1f1b1b1b%3A0x0!2sGercenova%208%2FF%2C%20851%2001%20Bratislava!5e0!3m2!1ssk!2ssk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
