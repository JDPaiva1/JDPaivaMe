//./plugins/posthog.js
import posthog from 'posthog-js'

export default {
  install(app: any) {
    app.config.globalProperties.$posthog = posthog.init(
      import.meta.env.VITE_POSTHOG_API_KEY,
      {
        api_host: import.meta.env.VITE_POSTHOG_API_HOST,
      }
    )
  },
}
