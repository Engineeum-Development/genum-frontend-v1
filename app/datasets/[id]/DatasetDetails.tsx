import AboutDataset from "./AboutDataset";
import ActivityOverview from "./ActivityOverview";
import Metadata from "./Metadata";
import RelatedDatasets from "./RelatedDatasets";
import ReviewTags from "./ReviewTags";

function DatasetDetails({ data }: any) {
  return (
    <div className="">
      <AboutDataset data={data} />
      <ReviewTags data={data} />
      <Metadata data={data} />
      <ActivityOverview data={data} />
      <RelatedDatasets />
    </div>
  );
}

export default DatasetDetails;
