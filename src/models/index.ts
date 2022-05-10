type ImImage = {
  label: string;
  attributes: {
    height: string;
  };
};

export type Imitem = {
  category: {
    attributes: {
      "im:id": string;
      label: string;
      scheme: string;
      term: string;
    };
  };
  id: {
    label: string;
    attributes?: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
    attributes?: {
      href: string;
    };
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  "im:image": Array<ImImage>;
  "im:itemCount": {
    label: string;
  };
  "im:name": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes?: {
      amount: string;
      currency: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes?: {
      label: string;
    };
  };
  link: {
    attributes?: {
      rel: string;
      href: string;
      type: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
};

export type Tunes = {
  feed: {
    author: Record<string, any>;
    entry: Array<Imitem>;
    icon: {
      label: string;
    };
    id: {
      label: string;
    };
    link: Array<Record<"attributes", Record<"rel" | "type", string>>>;
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    updated: {
      label: string;
    };
  };
};
