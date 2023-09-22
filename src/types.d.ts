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
  title: string
  image: string
  pointer: string
}

interface Work {
  time: [string, string],
  image: string,
  pointer: string,
}

interface Social {
  title: string,
  link: string
}