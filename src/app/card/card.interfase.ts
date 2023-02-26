export interface Card {
  id: number,
  icon: string,
  car: {
    name?: string,
    number?: string,
    milage?: string,
    model?: string,
    numberModel?: string,
    year?: string
  },
  button?: string[],
  knot?: number,
  sample?: number,
  detailed?: string,
  description?: string
}
