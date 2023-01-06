export type MenuItem = {
  label: string;
  url: string;
  icon?: DefineComponent;
};

export type Article = {
  id: string;
  parentSection?: string;
  parentSectionPath?: string;
  title?: string;
  description: any;
  path?: string;
};
