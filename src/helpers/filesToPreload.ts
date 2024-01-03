const filesToPreload = [
  '/images/skills-inner.webp',
  '/images/works-inner.webp',
  '/images/contacts-inner.webp',
  '/images/not-found-inner.webp',
  '/images/header-contacts.webp',
  '/images/header-home.webp',
  '/images/header-skills.webp',
  '/images/header-works.webp',
  '/images/me.webp',
  '/images/works-platinum.webp',
  '/images/works-pp.webp',
  '/images/works-r52.webp',
  '/images/works-travelask.webp',
  '/images/works-sms.webp',
  '/images/skills-base.webp',
  '/images/skills-js.webp',
  '/images/skills-more.webp',
  '/images/skills-ts.webp',
  '/images/skills-go.webp',
  '/images/skills-vue.webp',
]

filesToPreload.sort(a => a.split('.')[1] === 'mp4' ? 1 : -1)

export default filesToPreload
