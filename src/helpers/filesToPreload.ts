const filesToPreload = [
  '/videos/skills-inner.mp4',
  '/videos/works-inner.mp4',
  '/videos/contacts-inner.mp4',
  '/images/not-found-inner.jpg',
  '/images/header-contacts.jpg',
  '/images/header-home.jpg',
  '/images/header-skills.jpg',
  '/images/header-works.jpg',
  '/images/me.jpg',
  '/images/skills-base.png',
  '/images/skills-js.png',
  '/images/skills-more.png',
  '/images/skills-ts.png',
  '/images/skills-go.png',
  '/images/skills-vue.png',
  '/images/works-platinum.jpg',
  '/images/works-pp.jpg',
  '/images/works-r52.jpg',
  '/images/works-travelask.jpg',
]

filesToPreload.sort(a => {
  if (a.split('.')[1] === 'mp4') {
    return 1
  }

  return -1
})

export default filesToPreload
