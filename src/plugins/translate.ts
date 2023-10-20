import translation from "../translation.ts"

export default {
  install: (app: any) => {
    app.config.globalProperties.$translate = (path: string) => {
      const targetString: any = path.split('.').reduce((prev, current) => {
        // @ts-ignore
        return prev[current]
      }, translation)


      return targetString
    }
  }
}

export { }

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (path: string) => string
  }
}
