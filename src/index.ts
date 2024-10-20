import { name, version } from '../package.json'

import '~/assets/index.css'

const link = document.createElement('link')

link.rel = 'stylesheet'
link.crossOrigin = ''
link.href = `https://registry.npmmirror.com/${name}/${version}/files/dist/index.css`

document.head.appendChild(link)
