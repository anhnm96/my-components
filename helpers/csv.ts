type PastedItems = Array<Array<string>>
export function getCsvFromClipboardData(
  clipboardData: DataTransfer
): PastedItems {
  let pastedText
  let isHTML = true
  let pastedItems = []

  try {
    pastedText = clipboardData.getData('text/html')
    if (!pastedText) {
      pastedText = clipboardData.getData('text/plain')
      isHTML = false
    }
  } catch (e) {
    pastedText = clipboardData.getData('text')
    isHTML = false
  }
  pastedText = pastedText.trim()

  if (isHTML) {
    const parser = new DOMParser()
    const trList = parser
      .parseFromString(pastedText, 'text/html')
      .querySelectorAll('tr')
    pastedItems = Array.from(trList).map(function (tr) {
      return Array.from(tr.querySelectorAll('td')).map(function (td) {
        return td.innerText
      })
    })
  } else {
    pastedItems = pastedText.split('\n').map(function (row) {
      return row.split('\t')
    })
  }

  return pastedItems
}
