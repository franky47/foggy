export const fetchJSON = <T = any>(apiPath: string) =>
  fetch(`/api/${apiPath}`).then((res) => res.json() as Promise<T>)
