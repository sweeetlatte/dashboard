export interface IProduct {
  id: number;
  img: string;
  name: string;
  ingres: string[];
  sold: number;
  earned: number;
}

export type ProductsData = {
  products: Array<IProduct>;
};
