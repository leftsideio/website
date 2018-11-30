export const generateUniqueFrag = (inner = "test", hyphen = false) => {
  const possible = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let frag = []
  for (let i = 0; i <= 3; i++)
    frag.push(possible.charAt(Math.floor(Math.random() * possible.length)))
  frag.splice(2, 0, inner)
  if (hyphen) return "-" + frag.join("")
  return frag.join("")
}

export const validateEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}
