const tagParser = (content: string) => {
  return content.replaceAll('<GSI>', '<span style="color:#f3f3f3; padding:0.17rem; background-color:#b757aa;">').replaceAll('</GSI>', '</span>')
    .replaceAll('<GOI>', '<span style="color:#f3f3f3; padding:0.17rem; background-color:#b75e57;">').replaceAll('</GOI>', '</span>')
    .replaceAll('<AQ>', '<span style="color:#f3f3f3; padding:0.17rem; background-color:#b7ae57;">').replaceAll('</AQ>', '</span>')
    .replaceAll('<GF>', '<span style="color:#f3f3f3; padding:0.17rem; background-color:#62b757;">').replaceAll('</GF>', '</span>')
    .replaceAll('<GP>', '<span style="color:#f3f3f3; padding:0.17rem; background-color:#57b2b7;">').replaceAll('</GP>', '</span>')
    .replaceAll('<GA>', '<span style="color:#f3f3f3; padding:0.17rem; background-color:#5766b7;">').replaceAll('</GA>', '</span>')
}
export default tagParser