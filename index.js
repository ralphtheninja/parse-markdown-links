const Remarkable = require('remarkable')
const md = new Remarkable()

module.exports = text => {
  const links = []
  const tokens = md.parse(text, {})

  tokens.forEach(token => {
    if (token.type !== 'inline') return
    if (!Array.isArray(token.children)) return
    token.children.forEach(child => {
      if (child.type === 'image' && typeof child.src === 'string') {
        links.push(child.src)
      } else if (child.type === 'link_open' && typeof child.href === 'string') {
        links.push(child.href)
      }
    })
  })

  return links
}
