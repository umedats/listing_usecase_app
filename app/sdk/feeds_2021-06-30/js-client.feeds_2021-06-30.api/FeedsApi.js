/*
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2021-06-30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

import { ApiClient } from "../ApiClient.js";
import { CreateFeedDocumentResponse } from "../js-client.feeds_2021-06-30.model/CreateFeedDocumentResponse.js";
import { CreateFeedDocumentSpecification } from "../js-client.feeds_2021-06-30.model/CreateFeedDocumentSpecification.js";
import { CreateFeedResponse } from "../js-client.feeds_2021-06-30.model/CreateFeedResponse.js";
import { CreateFeedSpecification } from "../js-client.feeds_2021-06-30.model/CreateFeedSpecification.js";
import { ErrorList } from "../js-client.feeds_2021-06-30.model/ErrorList.js";
import { Feed } from "../js-client.feeds_2021-06-30.model/Feed.js";
import { FeedDocument } from "../js-client.feeds_2021-06-30.model/FeedDocument.js";
import { GetFeedsResponse } from "../js-client.feeds_2021-06-30.model/GetFeedsResponse.js";
import { HEADER_DATA } from "../../constants/global";

/**
 * Feeds service.
 * @module feeds_2021-06-30/js-client.feeds_2021-06-30.api/FeedsApi
 * @version 2021-06-30
 */
export class FeedsApi {
  /**
   * Constructs a new FeedsApi.
   * @alias module:feeds_2021-06-30/js-client.feeds_2021-06-30.api/FeedsApi
   * @class
   * @param {module:feeds_2021-06-30/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:feeds_2021-06-30/ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  cancelFeedWithHttpInfo(feedId) {
    let postBody = null;

    // verify the required parameter 'feedId' is set
    if (feedId === undefined || feedId === null) {
      throw new Error(
        "Missing the required parameter 'feedId' when calling cancelFeed",
      );
    }

    let pathParams = {
      feedId: feedId,
    };
    let queryParams = {};
    let headerParams = HEADER_DATA;
    let formParams = {};

    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = null;

    return this.apiClient.callApi(
      "/feeds/2021-06-30/feeds/{feedId}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
    );
  }

  /**
   * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  cancelFeed(feedId) {
    return this.cancelFeedWithHttpInfo(feedId).then(
      function (response_and_data) {
        return response_and_data.data;
      },
    );
  }

  /**
   * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedSpecification} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedResponse} and HTTP response
   */
  createFeedWithHttpInfo(body) {
    let postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling createFeed",
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = HEADER_DATA;
    let formParams = {};

    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateFeedResponse;

    return this.apiClient.callApi(
      "/feeds/2021-06-30/feeds",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
    );
  }

  /**
   * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedSpecification} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedResponse}
   */
  createFeed(body) {
    return this.createFeedWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedDocumentSpecification} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedDocumentResponse} and HTTP response
   */
  createFeedDocumentWithHttpInfo(body) {
    let postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling createFeedDocument",
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = HEADER_DATA;
    let formParams = {};

    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateFeedDocumentResponse;

    return this.apiClient.callApi(
      "/feeds/2021-06-30/documents",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
    );
  }

  /**
   * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedDocumentSpecification} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/CreateFeedDocumentResponse}
   */
  createFeedDocument(body) {
    return this.createFeedDocumentWithHttpInfo(body).then(
      function (response_and_data) {
        return response_and_data.data;
      },
    );
  }

  /**
   * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/Feed} and HTTP response
   */
  getFeedWithHttpInfo(feedId) {
    let postBody = null;

    // verify the required parameter 'feedId' is set
    if (feedId === undefined || feedId === null) {
      throw new Error(
        "Missing the required parameter 'feedId' when calling getFeed",
      );
    }

    let pathParams = {
      feedId: feedId,
    };
    let queryParams = {};
    let headerParams = HEADER_DATA;
    let formParams = {};

    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = Feed;

    return this.apiClient.callApi(
      "/feeds/2021-06-30/feeds/{feedId}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
    );
  }

  /**
   * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/Feed}
   */
  getFeed(feedId) {
    return this.getFeedWithHttpInfo(feedId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Returns the information required for retrieving a feed document's contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {String} feedDocumentId The identifier of the feed document.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedDocument} and HTTP response
   */
  getFeedDocumentWithHttpInfo(feedDocumentId) {
    let postBody = null;

    // verify the required parameter 'feedDocumentId' is set
    if (feedDocumentId === undefined || feedDocumentId === null) {
      throw new Error(
        "Missing the required parameter 'feedDocumentId' when calling getFeedDocument",
      );
    }

    let pathParams = {
      feedDocumentId: feedDocumentId,
    };
    let queryParams = {};
    let headerParams = HEADER_DATA;
    let formParams = {};

    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = FeedDocument;

    return this.apiClient.callApi(
      "/feeds/2021-06-30/documents/{feedDocumentId}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
    );
  }

  /**
   * Returns the information required for retrieving a feed document's contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {String} feedDocumentId The identifier of the feed document.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedDocument}
   */
  getFeedDocument(feedDocumentId) {
    return this.getFeedDocumentWithHttpInfo(feedDocumentId).then(
      function (response_and_data) {
        return response_and_data.data;
      },
    );
  }

  /**
   * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.feedTypes A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
   * @param {Array.<String>} opts.marketplaceIds A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
   * @param {Number} opts.pageSize The maximum number of feeds to return in a single call. (default to 10)
   * @param {Array.<module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/String>} opts.processingStatuses A list of processing statuses used to filter feeds.
   * @param {Date} opts.createdSince The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
   * @param {Date} opts.createdUntil The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
   * @param {String} opts.nextToken A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/GetFeedsResponse} and HTTP response
   */
  getFeedsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      feedTypes: this.apiClient.buildCollectionParam(opts["feedTypes"], "csv"),
      marketplaceIds: this.apiClient.buildCollectionParam(
        opts["marketplaceIds"],
        "csv",
      ),
      pageSize: opts["pageSize"],
      processingStatuses: this.apiClient.buildCollectionParam(
        opts["processingStatuses"],
        "csv",
      ),
      createdSince: opts["createdSince"],
      createdUntil: opts["createdUntil"],
      nextToken: opts["nextToken"],
    };
    let headerParams = HEADER_DATA;
    let formParams = {};

    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = GetFeedsResponse;

    return this.apiClient.callApi(
      "/feeds/2021-06-30/feeds",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
    );
  }

  /**
   * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.feedTypes A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
   * @param {Array.<String>} opts.marketplaceIds A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
   * @param {Number} opts.pageSize The maximum number of feeds to return in a single call. (default to 10)
   * @param {Array.<module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/String>} opts.processingStatuses A list of processing statuses used to filter feeds.
   * @param {Date} opts.createdSince The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
   * @param {Date} opts.createdUntil The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
   * @param {String} opts.nextToken A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/GetFeedsResponse}
   */
  getFeeds(opts) {
    return this.getFeedsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}