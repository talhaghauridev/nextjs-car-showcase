interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

interface HomeProps {
  searchParams: FilterProps;
}

interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

interface OptionProps {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export type {
  FilterProps,
  HomeProps,
  CarProps,
  CarCardProps,
  CustomFilterProps,
};
