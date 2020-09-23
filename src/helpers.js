export const getDifYear = year => new Date().getFullYear() - year

export function calBranch(branch) {
  switch (branch) {
    case 'europeo':
      return 1.3
    case 'americacno':
      return 1.15
    case 'asiatico':
      return 1.05
    default:
      return 1.15
  }
}
