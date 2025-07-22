export type IrandomUser = {
  email: string;
  name: { title: string; first: string; last: string };
  picture: { large: string };
};

const convertRandomUser = (result: unknown) => {
  const { email, name, picture } = result as IrandomUser;
  return {
    email,
    name,
    picture,
  };
};

export const fetchRandomUser = (): Promise<IrandomUser> =>
  new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data: unknown) => {
        console.log(data);
        const { results } = data as { results: IrandomUser[] };
        resolve(convertRandomUser(results[0]));
      })
      .catch(reject);
  });
