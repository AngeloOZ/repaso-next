import { useRouter } from "next/router";

import { Footer, Navbar } from "../../components";

const Pagejajauj = () => {
  const { query } = useRouter();
  return (
    <div>
      <Navbar />
      <h1>El id del personaje es: {query.id_personaje}</h1>
    </div>
  );
};

export default Pagejajauj;
