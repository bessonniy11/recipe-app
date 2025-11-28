export interface Recipe {
  id: string;
  name: string;
  image: string;
  images?: string[];
  description: string;
  ingredients: string[];
  instructions: string[];
}
