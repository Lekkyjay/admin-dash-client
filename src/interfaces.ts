export interface IToken {
  grey: { [x:string]: string }
  primary: { [x:string]: string }
  secondary: { [x:string]: string } 
}

export interface IKeys { 
  [x:string]: string
}

export interface IProduct {
  _id: string
  name: string
  description: string
  price: number
  rating: number
  category: string
  supply: number
  stat: {
    yearlySalesTotal: string
    yearlyTotalSoldUnits: string
  }
}


export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  city: string
  state: string | null
  country: string
  occupation: string
  phoneNumber: string
  transactions: string[]
  role: string
}

export interface IGeo {
  id: string
  value: number
}

export interface ISales {
  totalCustomers: number
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  year: number
  monthlyData: {
    month: string
    totalSales: number
    totalUnits: number
    _id: string
  }[],
  dailyData: { 
    date: string
    totalSales: number
    totalUnits: number
  }[]
}

export interface IData {
  x: string
  y: number
}

export interface ITotalSales {
  id: string
  color: string
  data: IData[]
}