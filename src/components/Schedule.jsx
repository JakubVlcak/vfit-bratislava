const CLASSES = [
  {
    time: '08:00 - 09:00',
    name: 'Body Work',
    dotColor: 'bg-primary',
    instructor: 'Elena M.',
    category: 'Strength',
    categoryStyle: 'bg-primary-container/20 text-on-primary-container',
  },
  {
    time: '10:30 - 11:30',
    name: 'SM System',
    dotColor: 'bg-tertiary',
    instructor: 'Peter K.',
    category: 'Mobility',
    categoryStyle: 'bg-secondary-container text-on-secondary-container',
  },
  {
    time: '17:00 - 18:00',
    name: 'Yoga Flow',
    dotColor: 'bg-primary-fixed-dim',
    instructor: 'Zuzana R.',
    category: 'Recovery',
    categoryStyle: 'bg-tertiary-fixed text-on-tertiary-fixed',
  },
  {
    time: '19:15 - 20:15',
    name: 'Pilates',
    dotColor: 'bg-primary-container',
    instructor: 'Lucia S.',
    category: 'Posture',
    categoryStyle: 'bg-secondary-container text-on-secondary-container',
  },
]

export default function Schedule() {
  return (
    <section className="bg-surface-container-low py-32 rounded-t-xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline text-5xl font-extrabold tracking-tight mb-4">
              Class Schedule
            </h2>
            <p className="text-on-surface-variant font-medium">
              Weekly rhythm of kinetic energy and mindful recovery.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-surface-container-lowest px-6 py-2 rounded-full font-bold text-sm shadow-sm">
              All Levels
            </button>
            <button className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-sm">
              Core Focus
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-surface-container-lowest">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-surface-container text-xs font-bold uppercase tracking-widest text-outline p-6">
            <div>Time</div>
            <div>Class Name</div>
            <div>Instructor</div>
            <div>Category</div>
          </div>

          {CLASSES.map((cls, i) => (
            <div
              key={cls.name}
              className={`grid grid-cols-1 md:grid-cols-4 items-center p-6 hover:bg-surface-container-low transition-colors${
                i < CLASSES.length - 1 ? ' border-b border-surface-container' : ''
              }`}
            >
              <div className="font-headline font-bold text-lg">{cls.time}</div>
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${cls.dotColor}`} />
                <span className="font-bold">{cls.name}</span>
              </div>
              <div className="text-on-surface-variant">{cls.instructor}</div>
              <div>
                <span
                  className={`${cls.categoryStyle} px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {cls.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
