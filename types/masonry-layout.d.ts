declare module "masonry-layout" {
  interface MasonryOptions {
    itemSelector?: string;
    columnWidth?: number | string | Element;
    percentPosition?: boolean;
    gutter?: number | string;
    [key: string]: unknown;
  }

  export default class Masonry {
    constructor(element: Element | string, options?: MasonryOptions);
    layout(): void;
    destroy(): void;
    reloadItems(): void;
  }
}
