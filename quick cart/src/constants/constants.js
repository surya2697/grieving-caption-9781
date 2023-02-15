import axios from "axios";

export const THIS_IS_SIMPLE_CONSTANTS = "this is simple constant";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const PRODUCTS = BASE_URL + process.env.REACT_APP_PRODUCTS;
export const USERS = BASE_URL + process.env.REACT_APP_USERS;

export const RUPEES_SYMBOL = "₹";
export const PERCENT_SYMBOL = "% off";
export const LOADER_URL =
  "https://media1.giphy.com/media/xTk9ZvMnbIiIew7IpW/200w.webp?cid=ecf05e479wb8ejqfvh8k79gff45qfuirk6lhswq7ez8x5e3y&rid=200w.webp&ct=g";
export const ERROR_URL =
  "https://media2.giphy.com/media/aYpmlCXgX9dc09dbpl/200w.webp?cid=ecf05e47czoq3xbuwdc2zesqdwgqhkg7vrtvb9g0vym6c2l2&rid=200w.webp&ct=g";
export const LTH = "lth";
export const HTL = "htl";
export const POPULARITY = "popularity";

//Filter names
export const SIZE = "Size";
export const FEATURES = "Features";
export const COLOUR = "Colour";
export const RATINGS = "Ratings";
export const BRAND = "Brand";
export const PRICE = "Price";
export const DISCOUNT = "Discount";
export const FIT = "Fit";
export const TYPE = "Type";
export const PATTERN = "Pattern";
export const FABRIC_FAMILY = "Fabric Family";
export const COLLAR = "Collar";
export const OCCASION = "Occasion";
export const ALL_DISCOUNT = "All Discount";
export const AVAILABILITY = "Availability";

//Sizes
export const SIZES_TYPES = [
  "UK/IND-6",
  "UK/IND-7",
  "UK/IND-8",
  "UK/IND-9",
  "S",
  "M",
  "XL",
  "L",
];
export const COLORS_TYPES = ["grey", "black", "blue", "white"];
export const RATINGS_TYPES = [1, 2, 3, 4, 5];
export const FEATURES_TYPES = ["wireless", "wired", "bluetooth", "HD Sound"];
