import DatasetDetails from "./DatasetDetails";
import DatasetHero from "./DatasetHero";

function page() {
  return (
    <div className="md:px-16 py-10 sm:px-10 px-7">
      <DatasetHero />
      <DatasetDetails />
    </div>
  );
}

export default page;
