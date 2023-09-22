interface Form {
  from: {
    value: string,
    valid: boolean
  },
  email: {
    value: string,
    valid: boolean
  },
  message: {
    value: string,
    valid: boolean
  }
}

interface Link {
  to: string
  title: 'home' | 'skills' | 'projects' | 'contacts'
  image: string
}

interface Tech {
  title: 'TypeScript' | 'Javascript ES6+' | 'Vue 3.0' | 'HTML & CSS' | '_more'
  description: string
  image: string
}

interface Work {
  time: [string, string],
  title: 'Program Product' | 'Platinum LTD' | 'Travelask' | 'R52.ru' | 'Freelance',
  image: string,
}

interface Social {
  title: string,
  link: string
}