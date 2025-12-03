import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3954vecf',
    dataset: 'production'
  },
  studioHost: 'bbstudio',
  autoUpdates: true,
})
