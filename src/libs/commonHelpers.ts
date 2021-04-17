export function getStatus(metrics: string, value: number): string {
  if (value == -1) {
    return "loading"
  }

  switch (metrics) {
    case "LCP":
      if (value > 4000) {
        return "error"
      } else if (value > 2500) {
        return "notice"
      }
      return "success"
    case "FID":
      if (value > 300) {
        return "error"
      } else if (value > 100) {
        return "notice"
      }
      return "success"
    case "CLS":
      if (value > 0.25) {
        return "error"
      } else if (value > 0.1) {
        return "notice"
      }
      return "success"
    default:
      return "success"
  }
}
