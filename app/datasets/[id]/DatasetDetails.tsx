import AboutDataset from "./AboutDataset";
import ActivityOverview from "./ActivityOverview";
import Metadata from "./Metadata";
import RelatedDatasets from "./RelatedDatasets";
import ReviewTags from "./ReviewTags";

function DatasetDetails() {
  return (
    <div className="">
      <AboutDataset />
      <ReviewTags />
      <Metadata />
      <ActivityOverview />
      <RelatedDatasets />
    </div>
  );
}

export default DatasetDetails;
