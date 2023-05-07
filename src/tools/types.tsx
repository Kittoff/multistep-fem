export type AddOns = {
  title: string;
  subtitle: string;
  prices: {
    monthly?: string;
    yearly?: string;
  }[];
};

export type Plans = {
  title: string;
  icon: string;
  prices: (
    | { monthly: string; yearly?: undefined }
    | { yearly: string; monthly?: undefined }
  )[];
};

export type Data = {
  name: string;
  email: string;
  phone: string;
};
