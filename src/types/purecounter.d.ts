declare module '@srexi/purecounterjs' {
  interface PureCounterOptions {
    selector?: string;
    start?: number;
    end?: number;
    duration?: number;
    delay?: number;
    once?: boolean;
    decimals?: number;
    legacy?: boolean;
    filesizing?: boolean;
    currency?: boolean;
    separator?: boolean;
  }

  class PureCounter {
    constructor(options?: PureCounterOptions);
  }

  export default PureCounter;
} 