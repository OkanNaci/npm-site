import getPackage from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/PackageDetails";
import type { Params } from "react-router-dom";
interface LoaderArgs {
  params: Params;
}
export interface DetailsLoaderResult {
  details: PackageDetails;
}
export async function detailsLoader({ params }: LoaderArgs) {
  const { name } = params;
  if (!name) {
    throw new Error("Name must be provided.");
  }
  const details = await getPackage(name);
  return {
    details,
  };
}
