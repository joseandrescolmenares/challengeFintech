import React, { useEffect } from "react";
import { useRouter } from "next/router";

const DetailsMovies = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.query) return;
     
  }, [router.query]);

  return <div>df</div>;
};
export default DetailsMovies;
