export const handleErrors = (error: string) => {
  if (error === 'ERR_BAD_RESPONSE') {
    return 'City not found'
  }

  if (error === 'ERR_NETWORK') {
    return 'Check your internet connection'
  }

  return ''
}
