export interface Registry {
  data: string;
  parameters: [];
  metadata: object;
  constructor(data: string): void;
  getParameter(parameter: string): any;
  getMetadata(): object;
  getParameters(): [];
  getName(): string;
}
