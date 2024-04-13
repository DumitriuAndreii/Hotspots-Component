
export type IProduct = {
    img: string; 
    name: string; 
    price: string; 
    description: string;
    addToCartLink: string; 
    detailsLink: string; 
  };
  
  export type IHotspot = {
    top: string; 
    left: string;
    product: IProduct;
  };
  
  export type IHotspotImageProps = {
    id: string; 
    src: string; 
    hotspots: IHotspot[]; 
  };