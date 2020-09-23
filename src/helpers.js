export const getDifYear = year => new Date().getFullYear() - year

// Valor nacionalidad
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

// Calcular tipo de seguro
export const getPlan = plan => (plan == 'basico' ? 1.2 : 1.5)
