const filesToPreload = [
  '/images/contacts-inner.gif',
  '/images/header-contacts.jpg',
  '/images/header-home.jpg',
  '/images/header-skills.jpg',
  '/images/header-works.jpg',
  '/images/me.jpg',
  '/images/not-found-inner.gif',
  '/images/skills-base.png',
  '/images/skills-inner.gif',
  '/images/skills-js.png',
  '/images/skills-more.png',
  '/images/skills-ts.png',
  '/images/skills-vue.png',
  '/images/works-inner.gif',
  '/images/works-platinum.jpg',
  '/images/works-pp.jpg',
  '/images/works-r52.jpg',
  '/images/works-travelask.jpg',
]

filesToPreload.sort(a => {
  if (a.split('.')[1] === 'gif') {
    return 1
  }

  return -1
})

export default filesToPreload
