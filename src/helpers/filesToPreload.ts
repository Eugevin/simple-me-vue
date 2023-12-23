const filesToPreload = [
  '/videos/skills-inner.mp4',
  '/videos/works-inner.mp4',
  '/videos/contacts-inner.mp4',
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

filesToPreload.sort(a => {
  if (a.split('.')[1] === 'mp4') {
    return 1
  }

  return -1
})

export default filesToPreload
