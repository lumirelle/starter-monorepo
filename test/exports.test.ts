import { describePackagesApiSnapshots } from 'tsnapi/vitest'

describePackagesApiSnapshots({
  filter({ packageName }) {
    if (packageName.includes('node_modules')) {
      return false
    }
    return true
  },
})
