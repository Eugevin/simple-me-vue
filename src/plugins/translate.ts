import translation from "../translation.ts"

export default {
  install: (app: any) => {
    app.config.globalProperties.$translate = (path: string, query?: any) => {
      const targetString: any = path.split('.').reduce((prev, current) => {
        // @ts-ignore
        return prev[current]
      }, translation)

      if (typeof targetString !== 'function') return targetString

      return targetString(query)
    }
  }
}

export { }

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (path: string, query?: any) => string
  }
}
