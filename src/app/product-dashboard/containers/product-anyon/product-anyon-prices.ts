export interface Price {
  name: string,
  target: string,
  price: string,
  numberOfUsers: number | 'Unlimited',
  numberOfProjects: number | 'Unlimited',
  numberOfRepositories: number | 'Unlimited',
  diskSpace: number,
  technicalSupport: boolean,
}

export const PRICES: Price[] = [
  {
    name: "Basic",
    target: "Freelancer-Friendly",
    price: "100 ($/month)",
    numberOfUsers: 1,
    numberOfProjects: 1,
    numberOfRepositories: 1,
    diskSpace: 5,
    technicalSupport: false,
  },
  {
    name: "Business",
    target: "Small Teams",
    price: "200 ($/month)",
    numberOfUsers: 5,
    numberOfProjects: 10,
    numberOfRepositories: 15,
    diskSpace: 25,
    technicalSupport: true,
  },
  {
    name: "Pro",
    target: "Our Corporate Solution",
    price: "500 ($/month)",
    numberOfUsers: 'Unlimited',
    numberOfProjects: 'Unlimited',
    numberOfRepositories: 'Unlimited',
    diskSpace: 250,
    technicalSupport: true,
  },
];