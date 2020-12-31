const svgs = require.context("@svgr/webpack!~/assets/icons", true, /\.svg$/)

const icons = svgs.keys().map(path => ({
  name: path.split("/")[1].slice(0, -4),
  file: svgs(path).default,
}))

const Icon = ({ name, ...rest }) => {
  const Icon = icons.find(icon => icon.name === name).file
  return <Icon {...rest} />
}

export default Icon
