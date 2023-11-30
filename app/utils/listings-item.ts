import {
  PUT_LISTINGS_ITEM_API_NAME,
  USE_CASES_PUT_LISTINGS_ITEM,
} from "@/app/constants/global";

/**
 * A common decision logic for both Json Listings Feed and listingsitem API
 * which determines whether given use case and submission mode should be
 * treated as full update.
 * @param useCase create listing, create offer or update listing use case.
 * @param submissionMode whether to use the PutListingsItem or PatchListingsItem
 * submission mode.
 */
export function isFullUpdate(useCase: string, submissionMode?: string) {
  return (
    USE_CASES_PUT_LISTINGS_ITEM.includes(useCase) ||
    PUT_LISTINGS_ITEM_API_NAME === submissionMode
  );
}
