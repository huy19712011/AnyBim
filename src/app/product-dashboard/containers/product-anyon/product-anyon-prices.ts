export interface Price {
  name: string,
  target: string,
  price: string,
  numberOfUsers: number,
  numberOfProjects: number,
  numberOfRepository: number | 'Unlimited',
  technicalSupport: boolean,
}

export const PRICES: Price[] = [
  {
    name: "Basic",
    target: "Freelancer-Friendly",
    price: "100$/month",
    numberOfUsers: 1,
    numberOfProjects: 1,
    numberOfRepository: 1,
    technicalSupport: false,
  },
  {
    name: "Business",
    target: "Small Teams",
    price: "500$/month",
    numberOfUsers: 5,
    numberOfProjects: 10,
    numberOfRepository: 15,
    technicalSupport: true,
  },
  {
    name: "Pro",
    target: "Our Corporate Solution",
    price: "500$/month",
    numberOfUsers: 5,
    numberOfProjects: 10,
    numberOfRepository: 15,
    technicalSupport: true,
  },
];