export default {
  htmlToString: function (value) {
    if (!value) return ''
    const regex = /(<([^>]+)>)/ig
    value = value.replace(regex, '')
    return value
  }
}
