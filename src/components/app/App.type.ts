export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

export interface Image {
  id: string;
  alt: string;
  small: string;
  regular: string;
}
