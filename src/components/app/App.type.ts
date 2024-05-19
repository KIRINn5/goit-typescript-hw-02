export interface UnsplashImage {
  alt_description: string | null;
  id: string;
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
