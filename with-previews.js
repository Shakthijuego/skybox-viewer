const enhanceWithPreview = files =>
  files.map(file =>
    Object.assign({}, file, {
      preview: URL.createObjectURL(file),
    })
  )

export const withPreviews = dropHandler => (accepted, rejected) =>
  dropHandler(enhanceWithPreview(accepted), rejected)

export const clearPreviews = files =>
  files.forEach(file => URL.revokeObjectURL(file.preview))
