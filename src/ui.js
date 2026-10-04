// Shared Tailwind class strings.
// Tailwind's advice: when the same classes repeat, put them in a variable
// (or a component) instead of copy-pasting them everywhere.

export const container = 'mx-auto w-full max-w-[1120px] px-5'

// Buttons
export const btn =
  'inline-block cursor-pointer rounded-full border-2 border-transparent px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 motion-reduce:transition-none'
export const btnPrimary = `${btn} bg-blue text-white hover:bg-blue-dark`
export const btnOutline = `${btn} border-ink bg-transparent text-ink hover:bg-ink hover:text-white`
export const btnSmall = 'self-start px-4 py-2 text-sm'

// Cards
export const card =
  'flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transition-none'

// Section titles
export const sectionTitle = 'mb-1.5 text-3xl font-extrabold sm:text-4xl'
