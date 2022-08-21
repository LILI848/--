import { createContext, useState, useContext } from "react";

const UserContext = createContext([
  {
    firstName: "Bob",
    lastName: "Bobberson",
    suffix: 1,
    email: "bobbobberson@example.com",
  },
  (obj) => obj,
]);

const Level5 = () => {
  const [user, setUser] = useContext(UserContext);

  const increment = () => {
    setUser((user) => {
      return Object.assign({}, user, { suffix: user.suffix + 1 });
    });
  };
  return (
    <div>
      <h5>{`level 5: 
        ${user.firstName} ${user.lastName} 
        suffix: ${user.suffix}
        from level 1`}</h5>
      <button onClick={increment}>increment suffix</button>
    </div>
  );
};

const Level4 = () => {
  return (
    <div>
      <h4>level 4 </h4>
      <Level5 />
    </div>
  );
};

const Level3 = () => {
  return (
    <div>
      <h3>level 3 </h3>
      <Level4 />
    </div>
  );
};

const Level2 = () => {
  return (
    <div>
      <h2>level 2 </h2>
      <Level3 />
    </div>
  );
};

const Level1 = () => {
  const userState = useState({
    firstName: "lily",
    lastName: "bond",
    suffix: 2,
    email: "lilybond@mail.com",
  });

  return (
    <UserContext.Provider value={userState}>
      <div>
        <h1>level 1</h1>
        <Level2 />
      </div>
    </UserContext.Provider>
  );
};

export default Level1;
