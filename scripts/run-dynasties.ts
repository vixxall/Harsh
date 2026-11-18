import { dynasties } from '../lib/content/dynasties'

function main() {
  console.log(`Total dynasties: ${dynasties.length}`)
  console.log('First 5 dynasties:')
  console.log(JSON.stringify(dynasties.slice(0, 5), null, 2))
}

main()

export {}
