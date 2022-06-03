const getRandCode = (length: any) => {
  let output = ''
  while (output.length < length) {
    output += String(Math.random()).replace(/^0\.0*/, '')
  }
  return output.substring(0, length)
}

export default getRandCode
