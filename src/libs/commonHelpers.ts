//https://googlechrome.github.io/lighthouse/scorecalc/#FCP=1000&SI=19624&LCP=8000&TTI=10000&TBT=9624&CLS=0.2&FMP=19814&FCI=19814&device=desktop&version=6&version=5
const THRESHOLD = {
  LCP: {
    LOW: 2500,
    HIGH: 4000,
  },
  FID: {
    LOW: 100,
    HIGH: 300,
  },
  CLS: {
    LOW: 0.1,
    HIGH: 0.25,
  },
}

export function getStatus(metrics: string, value: number): string {
  if (value == -1) {
    return "loading"
  }

  switch (metrics) {
    case "LCP":
    case "FID":
    case "CLS":
      if (value > THRESHOLD[metrics]["HIGH"]) {
        return "error"
      } else if (value > THRESHOLD[metrics]["LOW"]) {
        return "notice"
      }
      return "success"
    default:
      return "success"
  }
}

export function getPercentage(metrics: string, value: number): number {
  switch (metrics) {
    case "LCP":
      return value / 10000
    case "FID":
      return value / 1000
    case "CLS":
    default:
      return value
  }
}

export function getLength(metrics: string): number[] {
  switch (metrics) {
    case "LCP":
    case "FID":
    case "CLS":
      return [
        getPercentage(metrics, THRESHOLD[metrics]["LOW"]),
        getPercentage(metrics, THRESHOLD[metrics]["HIGH"]) -
          getPercentage(metrics, THRESHOLD[metrics]["LOW"]),
        1 - getPercentage(metrics, THRESHOLD[metrics]["HIGH"]),
      ]
    default:
      return [0.3, 0.5, 0.2]
  }
}
