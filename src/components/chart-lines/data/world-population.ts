import { ChartLinesData } from '..'

const factor = Math.pow(10, 9)

const data: ChartLinesData = [
  {
    name: 'África',
    data: [
      { dimension: 2020, fact: 1360671810 / factor },
      { dimension: 2010, fact: 1055228072 / factor },
      { dimension: 2000, fact: 818946032 / factor },
      { dimension: 1990, fact: 638150629 / factor },
      { dimension: 1980, fact: 481536377 / factor },
      { dimension: 1970, fact: 365444348 / factor }
    ]
  },
  {
    name: 'América',
    data: [
      { dimension: 2020, fact: 1025766636 / factor },
      { dimension: 2010, fact: 935798901 / factor },
      { dimension: 2000, fact: 835703866 / factor },
      { dimension: 1990, fact: 718412840 / factor },
      { dimension: 1980, fact: 610082367 / factor },
      { dimension: 1970, fact: 508381762 / factor }
    ]
  },
  {
    name: 'Ásia',
    data: [
      { dimension: 2020, fact: 4663086535 / factor },
      { dimension: 2010, fact: 4220041327 / factor },
      { dimension: 2000, fact: 3735089604 / factor },
      { dimension: 1990, fact: 3210563577 / factor },
      { dimension: 1980, fact: 2635334228 / factor },
      { dimension: 1970, fact: 2144906290 / factor }
    ]
  },
  {
    name: 'Europa',
    data: [
      { dimension: 2020, fact: 745792196 / factor },
      { dimension: 2010, fact: 735613934 / factor },
      { dimension: 2000, fact: 726093423 / factor },
      { dimension: 1990, fact: 720320797 / factor },
      { dimension: 1980, fact: 692527159 / factor },
      { dimension: 1970, fact: 655923991 / factor }
    ]
  },
  {
    name: 'Oceânia',
    data: [
      { dimension: 2020, fact: 43933426 / factor },
      { dimension: 2010, fact: 37102764 / factor },
      { dimension: 2000, fact: 31222778 / factor },
      { dimension: 1990, fact: 26743822 / factor },
      { dimension: 1980, fact: 22920240 / factor },
      { dimension: 1970, fact: 19480270 / factor }
    ]
  }
]

export default data
