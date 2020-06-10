import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
};

export type Query = {
  __typename?: 'Query';
  /** GET breweries */
  breweries?: Maybe<Array<Maybe<BreweriesSampleJsonResponse>>>;
  /**
   * Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
   * known divisions.
   *
   *
   * Equivalent to GET /geo/adminDivisions
   */
  findAdminDivisionsUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known cities.
   *
   *
   * Equivalent to GET /geo/adminDivisions/{divisionId}/nearbyCities
   */
  findCitiesNearAdminDivisionUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get
   * back all known cities.
   *
   *
   * Equivalent to GET /geo/cities/{cityId}/nearbyCities
   */
  findCitiesNearCityUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all known cities.
   *
   *
   * Equivalent to GET /geo/locations/{locationId}/nearbyCities
   */
  findCitiesNearLocationUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   *
   *
   * Equivalent to GET /geo/cities
   */
  findCitiesUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find administrative divisions near the given origin division, filtering by optional criteria. If no criteria
   * are set, you will get back all known divisions.
   *
   *
   * Equivalent to GET /geo/adminDivisions/{divisionId}/nearbyDivisions
   */
  findDivisionsNearAdminDivisionUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
   * you will get back all known divisions.
   *
   *
   * Equivalent to GET /geo/locations/{locationId}/nearbyDivisions
   */
  findDivisionsNearLocationUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Get the cities in a specific country region. The country and region info is omitted in the response.
   *
   *
   * Equivalent to GET /geo/countries/{countryId}/regions/{regionCode}/cities
   */
  findRegionCitiesUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Get the administrative divisions in a specific country region. The country and region info is omitted in the
   * response.
   *
   *
   * Equivalent to GET /geo/countries/{countryId}/regions/{regionCode}/adminDivisions
   */
  findRegionDivisionsUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Get the details for a specific administrative division, including location coordinates, population, and
   * elevation above sea-level (if available).
   *
   *
   * Equivalent to GET /geo/adminDivisions/{divisionId}
   */
  getAdminDivisionUsingGET?: Maybe<PopulatedPlaceResponse>;
  /**
   * Get city date-time
   *
   * Equivalent to GET /geo/cities/{cityId}/dateTime
   */
  getCityDateTimeUsingGET?: Maybe<DateTimeResponse>;
  /**
   * Get distance from the given city
   *
   * Equivalent to GET /geo/cities/{cityId}/distance
   */
  getCityDistanceUsingGET?: Maybe<DistanceResponse>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   *
   * Equivalent to GET /geo/cities/{cityId}/locatedIn
   */
  getCityLocatedInUsingGET?: Maybe<PopulatedPlaceResponse>;
  /**
   * Get city time
   *
   * Equivalent to GET /geo/cities/{cityId}/time
   */
  getCityTimeUsingGET?: Maybe<TimeResponse>;
  /**
   * Get the details for a specific city, including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   *
   * Equivalent to GET /geo/cities/{cityId}
   */
  getCityUsingGET?: Maybe<PopulatedPlaceResponse>;
  /**
   * Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
   *
   *
   * Equivalent to GET /geo/countries
   */
  getCountriesUsingGET?: Maybe<CountriesResponse>;
  /**
   * Get the details for a specific country, including number of regions.
   *
   * Equivalent to GET /geo/countries/{countryId}
   */
  getCountryUsingGET?: Maybe<CountryResponse>;
  /**
   * Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies.
   *
   * Equivalent to GET /locale/currencies
   */
  getCurrenciesUsingGET?: Maybe<CurrenciesResponse>;
  /**
   * Get all supported languages
   *
   * Equivalent to GET /locale/languages
   */
  getLanguagesUsingGET?: Maybe<LanguagesResponse>;
  /**
   * Get all known locales
   *
   * Equivalent to GET /locale/locales
   */
  getLocalesUsingGET?: Maybe<LocalesResponse>;
  /**
   * Get the details of a specific country region, including number of cities.
   *
   * Equivalent to GET /geo/countries/{countryId}/regions/{regionCode}
   */
  getRegionUsingGET?: Maybe<RegionResponse>;
  /**
   * Get all regions in a specific country. These could be states, provinces, districts, or otherwise major
   * political divisions.
   *
   *
   * Equivalent to GET /geo/countries/{countryId}/regions
   */
  getRegionsUsingGET?: Maybe<RegionsResponse>;
  /**
   * Get time-zone date-time
   *
   * Equivalent to GET /locale/timezones/{zoneId}/dateTime
   */
  getTimeZoneDateTimeUsingGET?: Maybe<DateTimeResponse>;
  /**
   * Get time-zone time
   *
   * Equivalent to GET /locale/timezones/{zoneId}/time
   */
  getTimeZoneTimeUsingGET?: Maybe<TimeResponse>;
  /**
   * Get all known time-zones
   *
   * Equivalent to GET /locale/timezones
   */
  getTimezonesUsingGET?: Maybe<TimeZonesResponse>;
};


export type QueryBreweriesArgs = {
  input?: Maybe<BreweriesInputSampleJsonRequest>;
};


export type QueryFindAdminDivisionsUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
};


export type QueryFindCitiesNearAdminDivisionUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  divisionId: Scalars['String'];
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};


export type QueryFindCitiesNearCityUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};


export type QueryFindCitiesNearLocationUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  locationId: Scalars['String'];
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};


export type QueryFindCitiesUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};


export type QueryFindDivisionsNearAdminDivisionUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  divisionId: Scalars['String'];
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
};


export type QueryFindDivisionsNearLocationUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  locationId: Scalars['String'];
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
};


export type QueryFindRegionCitiesUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  regionCode: Scalars['String'];
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};


export type QueryFindRegionDivisionsUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  regionCode: Scalars['String'];
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
};


export type QueryGetAdminDivisionUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  divisionId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type QueryGetCityDateTimeUsingGetArgs = {
  cityId: Scalars['String'];
};


export type QueryGetCityDistanceUsingGetArgs = {
  cityId: Scalars['String'];
  distanceUnit?: Maybe<Scalars['String']>;
  toCityId: Scalars['String'];
};


export type QueryGetCityLocatedInUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type QueryGetCityTimeUsingGetArgs = {
  cityId: Scalars['String'];
};


export type QueryGetCityUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type QueryGetCountriesUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  currencyCode?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetCountryUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type QueryGetCurrenciesUsingGetArgs = {
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetLanguagesUsingGetArgs = {
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetLocalesUsingGetArgs = {
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetRegionUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
  regionCode: Scalars['String'];
};


export type QueryGetRegionsUsingGetArgs = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetTimeZoneDateTimeUsingGetArgs = {
  zoneId: Scalars['String'];
};


export type QueryGetTimeZoneTimeUsingGetArgs = {
  zoneId: Scalars['String'];
};


export type QueryGetTimezonesUsingGetArgs = {
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type BreweriesSampleJsonResponse = {
  __typename?: 'BreweriesSampleJsonResponse';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  brewery_type?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['URL']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};



export type BreweriesInputSampleJsonRequest = {
  by_city?: Maybe<Scalars['String']>;
  by_name?: Maybe<Scalars['String']>;
  by_state?: Maybe<Scalars['String']>;
  by_postal?: Maybe<Scalars['String']>;
  by_type?: Maybe<Scalars['String']>;
  by_tag?: Maybe<Scalars['String']>;
  by_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};

/** A list of populated places */
export type PopulatedPlacesResponse = {
  __typename?: 'PopulatedPlacesResponse';
  data?: Maybe<Array<Maybe<PopulatedPlaceSummary>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** Minimal populated-place info */
export type PopulatedPlaceSummary = {
  __typename?: 'PopulatedPlaceSummary';
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']>;
  /** Included if this is the result of a distance query */
  distance?: Maybe<Scalars['Float']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']>;
  /** The place population */
  population?: Maybe<Scalars['Int']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']>;
  /**
   * One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and
   * cities)
   */
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

export enum PopulatedPlaceType {
  ADM2 = 'ADM2',
  CITY = 'CITY'
}

/** An error that occurred processing the request */
export type Error = {
  __typename?: 'Error';
  /**
   * One of a set of enumerated error codes representing the types of errors that can occur processing a
   * request
   */
  code?: Maybe<ErrorCode>;
  message?: Maybe<Scalars['String']>;
};

export enum ErrorCode {
  ACCESS_DENIED = 'ACCESS_DENIED',
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  INCOMPATIBLE = 'INCOMPATIBLE',
  PARAM_INVALID = 'PARAM_INVALID',
  PARAMS_MUTUALLY_EXCLUSIVE = 'PARAMS_MUTUALLY_EXCLUSIVE',
  REQUEST_UNPROCESSABLE = 'REQUEST_UNPROCESSABLE'
}

/** A HATEAOS link */
export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
};

/** Result metadata (currently only associated with collection results) */
export type Metadata = {
  __typename?: 'Metadata';
  /** The zero-ary offset into the results (0 is the first result) */
  currentOffset?: Maybe<Scalars['Float']>;
  /** The total number of results across pages */
  totalCount?: Maybe<Scalars['Float']>;
};

/** Populated-place details response */
export type PopulatedPlaceResponse = {
  __typename?: 'PopulatedPlaceResponse';
  /** Full populated-place details */
  data?: Maybe<PopulatedPlaceDetails>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** Full populated-place details */
export type PopulatedPlaceDetails = {
  __typename?: 'PopulatedPlaceDetails';
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']>;
  /** If this place has been soft-deleted */
  deleted?: Maybe<Scalars['Boolean']>;
  /** The place elevation (meters) above sea level */
  elevationMeters?: Maybe<Scalars['Int']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']>;
  /** The place population */
  population?: Maybe<Scalars['Int']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']>;
  /** The place timezone id */
  timezone?: Maybe<Scalars['String']>;
  /**
   * One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and
   * cities)
   */
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

/** An ISO-6801 date-time response */
export type DateTimeResponse = {
  __typename?: 'DateTimeResponse';
  /** The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ */
  data?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** A decimal distance (in miles or kilometers) */
export type DistanceResponse = {
  __typename?: 'DistanceResponse';
  /** The distance in units as set by the distanceUnit param (defaults to miles) */
  data?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** An ISO-8601 time response */
export type TimeResponse = {
  __typename?: 'TimeResponse';
  /** The time in ISO-8601 format: HHmmss.SSSZ */
  data?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** A list of countries */
export type CountriesResponse = {
  __typename?: 'CountriesResponse';
  data?: Maybe<Array<Maybe<CountrySummary>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** Minimal country info */
export type CountrySummary = {
  __typename?: 'CountrySummary';
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

/** Country details response */
export type CountryResponse = {
  __typename?: 'CountryResponse';
  /** Full country details */
  data?: Maybe<CountryDetails>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** Full country details */
export type CountryDetails = {
  __typename?: 'CountryDetails';
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The country flag image */
  flagImageUri?: Maybe<Scalars['String']>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']>;
  /** The number of regions in this country */
  numRegions?: Maybe<Scalars['Int']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

/** A list of currencies */
export type CurrenciesResponse = {
  __typename?: 'CurrenciesResponse';
  data?: Maybe<Array<Maybe<Currency>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** Currency info */
export type Currency = {
  __typename?: 'Currency';
  /** The ISO-4217 currency code */
  code?: Maybe<Scalars['String']>;
  /** A list of ISO-3166 country codes of countries supporting this currency */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The currency symbol */
  symbol?: Maybe<Scalars['String']>;
};

/** A list of languages supported by the system */
export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  data?: Maybe<Array<Maybe<LanguageDescriptor>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** A language supported by the service */
export type LanguageDescriptor = {
  __typename?: 'LanguageDescriptor';
  code?: Maybe<Code4>;
  name?: Maybe<Scalars['String']>;
};

export enum Code4 {
  UNDEFINED = 'UNDEFINED',
  AA = 'AA',
  AB = 'AB',
  AE = 'AE',
  AF = 'AF',
  AK = 'AK',
  AM = 'AM',
  AN = 'AN',
  AR = 'AR',
  AS = 'AS',
  AV = 'AV',
  AY = 'AY',
  AZ = 'AZ',
  BA = 'BA',
  BE = 'BE',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BR = 'BR',
  BS = 'BS',
  CA = 'CA',
  CE = 'CE',
  CH = 'CH',
  CO = 'CO',
  CR = 'CR',
  CS = 'CS',
  CU = 'CU',
  CV = 'CV',
  CY = 'CY',
  DA = 'DA',
  DE = 'DE',
  DV = 'DV',
  DZ = 'DZ',
  EE = 'EE',
  EL = 'EL',
  EN = 'EN',
  EO = 'EO',
  ES = 'ES',
  ET = 'ET',
  EU = 'EU',
  FA = 'FA',
  FF = 'FF',
  FI = 'FI',
  FJ = 'FJ',
  FO = 'FO',
  FR = 'FR',
  FY = 'FY',
  GA = 'GA',
  GD = 'GD',
  GL = 'GL',
  GN = 'GN',
  GU = 'GU',
  GV = 'GV',
  HA = 'HA',
  HE = 'HE',
  HI = 'HI',
  HO = 'HO',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  HY = 'HY',
  HZ = 'HZ',
  IA = 'IA',
  ID = 'ID',
  IE = 'IE',
  IG = 'IG',
  II = 'II',
  IK = 'IK',
  IO = 'IO',
  IS = 'IS',
  IT = 'IT',
  IU = 'IU',
  JA = 'JA',
  JV = 'JV',
  KA = 'KA',
  KG = 'KG',
  KI = 'KI',
  KJ = 'KJ',
  KK = 'KK',
  KL = 'KL',
  KM = 'KM',
  KN = 'KN',
  KO = 'KO',
  KR = 'KR',
  KS = 'KS',
  KU = 'KU',
  KV = 'KV',
  KW = 'KW',
  KY = 'KY',
  LA = 'LA',
  LB = 'LB',
  LG = 'LG',
  LI = 'LI',
  LN = 'LN',
  LO = 'LO',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  MG = 'MG',
  MH = 'MH',
  MI = 'MI',
  MK = 'MK',
  ML = 'ML',
  MN = 'MN',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MY = 'MY',
  NA = 'NA',
  NB = 'NB',
  ND = 'ND',
  NE = 'NE',
  NG = 'NG',
  NL = 'NL',
  NN = 'NN',
  NO = 'NO',
  NR = 'NR',
  NV = 'NV',
  NY = 'NY',
  OC = 'OC',
  OJ = 'OJ',
  OM = 'OM',
  OR = 'OR',
  OS = 'OS',
  PA = 'PA',
  PI = 'PI',
  PL = 'PL',
  PS = 'PS',
  PT = 'PT',
  QU = 'QU',
  RM = 'RM',
  RN = 'RN',
  RO = 'RO',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SI = 'SI',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SQ = 'SQ',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SU = 'SU',
  SV = 'SV',
  SW = 'SW',
  TA = 'TA',
  TE = 'TE',
  TG = 'TG',
  TH = 'TH',
  TI = 'TI',
  TK = 'TK',
  TL = 'TL',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TS = 'TS',
  TT = 'TT',
  TW = 'TW',
  TY = 'TY',
  UG = 'UG',
  UK = 'UK',
  UR = 'UR',
  UZ = 'UZ',
  VE = 'VE',
  VI = 'VI',
  VO = 'VO',
  WA = 'WA',
  WO = 'WO',
  XH = 'XH',
  YI = 'YI',
  YO = 'YO',
  ZA = 'ZA',
  ZH = 'ZH',
  ZU = 'ZU'
}

/** A list of locales */
export type LocalesResponse = {
  __typename?: 'LocalesResponse';
  data?: Maybe<Array<Maybe<Locale>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** A locale representing a language/region combination */
export type Locale = {
  __typename?: 'Locale';
  /** The locale code */
  code?: Maybe<Scalars['String']>;
};

/** Country region details response */
export type RegionResponse = {
  __typename?: 'RegionResponse';
  /** Full country region details */
  data?: Maybe<RegionDetails>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** Full country region details */
export type RegionDetails = {
  __typename?: 'RegionDetails';
  /** The region's capital city (varies by languageCode) */
  capital?: Maybe<Scalars['String']>;
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']>;
  /** The number of cities in this region */
  numCities?: Maybe<Scalars['Int']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

/** A list of country regions */
export type RegionsResponse = {
  __typename?: 'RegionsResponse';
  /** A list of RegionSummaries */
  data?: Maybe<Array<Maybe<RegionSummary>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** Minimal country region info */
export type RegionSummary = {
  __typename?: 'RegionSummary';
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

/** A list of time-zones */
export type TimeZonesResponse = {
  __typename?: 'TimeZonesResponse';
  data?: Maybe<Array<Maybe<TimeZoneDescriptor>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  /** Result metadata (currently only associated with collection results) */
  metadata?: Maybe<Metadata>;
};

/** A time-zone */
export type TimeZoneDescriptor = {
  __typename?: 'TimeZoneDescriptor';
  /** The time-zone id */
  id?: Maybe<Scalars['String']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']>;
};

export type BreweriesQueryQueryVariables = Exact<{
  input?: Maybe<BreweriesInputSampleJsonRequest>;
}>;


export type BreweriesQueryQuery = (
  { __typename?: 'Query' }
  & { breweries?: Maybe<Array<Maybe<(
    { __typename?: 'BreweriesSampleJsonResponse' }
    & Pick<BreweriesSampleJsonResponse, 'id' | 'name' | 'brewery_type' | 'street' | 'city' | 'state' | 'postal_code' | 'country' | 'longitude' | 'latitude' | 'phone' | 'website_url' | 'updated_at' | 'tag_list'>
  )>>> }
);

export type FindAdminDivisionsUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
}>;


export type FindAdminDivisionsUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findAdminDivisionsUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesNearAdminDivisionUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  divisionId: Scalars['String'];
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
}>;


export type FindCitiesNearAdminDivisionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesNearAdminDivisionUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesNearCityUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
}>;


export type FindCitiesNearCityUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesNearCityUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesNearLocationUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  locationId: Scalars['String'];
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
}>;


export type FindCitiesNearLocationUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesNearLocationUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
}>;


export type FindCitiesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindDivisionsNearAdminDivisionUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  divisionId: Scalars['String'];
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
}>;


export type FindDivisionsNearAdminDivisionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findDivisionsNearAdminDivisionUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindDivisionsNearLocationUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryIds?: Maybe<Scalars['String']>;
  distanceUnit?: Maybe<Scalars['String']>;
  excludedCountryIds?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  locationId: Scalars['String'];
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
}>;


export type FindDivisionsNearLocationUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findDivisionsNearLocationUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindRegionCitiesUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  regionCode: Scalars['String'];
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
}>;


export type FindRegionCitiesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findRegionCitiesUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindRegionDivisionsUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  includeDeleted?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxPopulation?: Maybe<Scalars['Int']>;
  minPopulation?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  regionCode: Scalars['String'];
  sort?: Maybe<Scalars['String']>;
  timeZoneIds?: Maybe<Scalars['String']>;
}>;


export type FindRegionDivisionsUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findRegionDivisionsUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'type' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetAdminDivisionUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  divisionId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
}>;


export type GetAdminDivisionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getAdminDivisionUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlaceResponse' }
    & { data?: Maybe<(
      { __typename?: 'PopulatedPlaceDetails' }
      & Pick<PopulatedPlaceDetails, 'country' | 'countryCode' | 'deleted' | 'elevationMeters' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'timezone' | 'type' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCityDateTimeUsingGetQueryQueryVariables = Exact<{
  cityId: Scalars['String'];
}>;


export type GetCityDateTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityDateTimeUsingGET?: Maybe<(
    { __typename?: 'DateTimeResponse' }
    & Pick<DateTimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCityDistanceUsingGetQueryQueryVariables = Exact<{
  cityId: Scalars['String'];
  distanceUnit?: Maybe<Scalars['String']>;
  toCityId: Scalars['String'];
}>;


export type GetCityDistanceUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityDistanceUsingGET?: Maybe<(
    { __typename?: 'DistanceResponse' }
    & Pick<DistanceResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCityLocatedInUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
}>;


export type GetCityLocatedInUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityLocatedInUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlaceResponse' }
    & { data?: Maybe<(
      { __typename?: 'PopulatedPlaceDetails' }
      & Pick<PopulatedPlaceDetails, 'country' | 'countryCode' | 'deleted' | 'elevationMeters' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'timezone' | 'type' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCityTimeUsingGetQueryQueryVariables = Exact<{
  cityId: Scalars['String'];
}>;


export type GetCityTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityTimeUsingGET?: Maybe<(
    { __typename?: 'TimeResponse' }
    & Pick<TimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCityUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
}>;


export type GetCityUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlaceResponse' }
    & { data?: Maybe<(
      { __typename?: 'PopulatedPlaceDetails' }
      & Pick<PopulatedPlaceDetails, 'country' | 'countryCode' | 'deleted' | 'elevationMeters' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'timezone' | 'type' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCountriesUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  currencyCode?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetCountriesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCountriesUsingGET?: Maybe<(
    { __typename?: 'CountriesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'CountrySummary' }
      & Pick<CountrySummary, 'code' | 'currencyCodes' | 'name' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetCountryUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
}>;


export type GetCountryUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCountryUsingGET?: Maybe<(
    { __typename?: 'CountryResponse' }
    & { data?: Maybe<(
      { __typename?: 'CountryDetails' }
      & Pick<CountryDetails, 'code' | 'currencyCodes' | 'flagImageUri' | 'name' | 'numRegions' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetCurrenciesUsingGetQueryQueryVariables = Exact<{
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetCurrenciesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCurrenciesUsingGET?: Maybe<(
    { __typename?: 'CurrenciesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'Currency' }
      & Pick<Currency, 'code' | 'countryCodes' | 'symbol'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetLanguagesUsingGetQueryQueryVariables = Exact<{
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetLanguagesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getLanguagesUsingGET?: Maybe<(
    { __typename?: 'LanguagesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'LanguageDescriptor' }
      & Pick<LanguageDescriptor, 'code' | 'name'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetLocalesUsingGetQueryQueryVariables = Exact<{
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetLocalesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getLocalesUsingGET?: Maybe<(
    { __typename?: 'LocalesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'Locale' }
      & Pick<Locale, 'code'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetRegionUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
  regionCode: Scalars['String'];
}>;


export type GetRegionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getRegionUsingGET?: Maybe<(
    { __typename?: 'RegionResponse' }
    & { data?: Maybe<(
      { __typename?: 'RegionDetails' }
      & Pick<RegionDetails, 'capital' | 'countryCode' | 'fipsCode' | 'isoCode' | 'name' | 'numCities' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetRegionsUsingGetQueryQueryVariables = Exact<{
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetRegionsUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getRegionsUsingGET?: Maybe<(
    { __typename?: 'RegionsResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'RegionSummary' }
      & Pick<RegionSummary, 'countryCode' | 'fipsCode' | 'isoCode' | 'name' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetTimeZoneDateTimeUsingGetQueryQueryVariables = Exact<{
  zoneId: Scalars['String'];
}>;


export type GetTimeZoneDateTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getTimeZoneDateTimeUsingGET?: Maybe<(
    { __typename?: 'DateTimeResponse' }
    & Pick<DateTimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetTimeZoneTimeUsingGetQueryQueryVariables = Exact<{
  zoneId: Scalars['String'];
}>;


export type GetTimeZoneTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getTimeZoneTimeUsingGET?: Maybe<(
    { __typename?: 'TimeResponse' }
    & Pick<TimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>> }
  )> }
);

export type GetTimezonesUsingGetQueryQueryVariables = Exact<{
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetTimezonesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getTimezonesUsingGET?: Maybe<(
    { __typename?: 'TimeZonesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'TimeZoneDescriptor' }
      & Pick<TimeZoneDescriptor, 'id' | 'name' | 'rawUtcOffsetHours'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'code' | 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);


export const BreweriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"breweriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BreweriesInputSampleJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breweries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brewery_type"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postal_code"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"tag_list"}}]}}]}}]} as unknown as DocumentNode;
export const FindAdminDivisionsUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAdminDivisionsUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAdminDivisionsUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindCitiesNearAdminDivisionUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findCitiesNearAdminDivisionUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"divisionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCitiesNearAdminDivisionUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"divisionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"divisionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindCitiesNearCityUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findCitiesNearCityUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCitiesNearCityUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindCitiesNearLocationUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findCitiesNearLocationUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCitiesNearLocationUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindCitiesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findCitiesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCitiesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindDivisionsNearAdminDivisionUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDivisionsNearAdminDivisionUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"divisionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDivisionsNearAdminDivisionUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"divisionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"divisionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindDivisionsNearLocationUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDivisionsNearLocationUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"radius"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDivisionsNearLocationUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludedCountryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedCountryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"Variable","name":{"kind":"Name","value":"radius"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindRegionCitiesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findRegionCitiesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"regionCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegionCitiesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"regionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"regionCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const FindRegionDivisionsUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findRegionDivisionsUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"regionCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegionDivisionsUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeDeleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPopulation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPopulation"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"regionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"regionCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeZoneIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeZoneIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetAdminDivisionUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAdminDivisionUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"divisionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAdminDivisionUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"divisionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"divisionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"elevationMeters"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCityDateTimeUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityDateTimeUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCityDateTimeUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCityDistanceUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityDistanceUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toCityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCityDistanceUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"toCityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toCityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCityLocatedInUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityLocatedInUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCityLocatedInUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"elevationMeters"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCityTimeUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityTimeUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCityTimeUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCityUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCityUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"elevationMeters"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCountriesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCountriesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCountriesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"currencyCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCodes"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCountryUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCountryUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCountryUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCodes"}},{"kind":"Field","name":{"kind":"Name","value":"flagImageUri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"numRegions"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCurrenciesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrenciesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrenciesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"countryCodes"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetLanguagesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLanguagesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLanguagesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetLocalesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocalesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLocalesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetRegionUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRegionUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"regionCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRegionUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"regionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"regionCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"fipsCode"}},{"kind":"Field","name":{"kind":"Name","value":"isoCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"numCities"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetRegionsUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRegionsUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRegionsUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asciiMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asciiMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"namePrefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"namePrefix"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"fipsCode"}},{"kind":"Field","name":{"kind":"Name","value":"isoCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wikiDataId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetTimeZoneDateTimeUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTimeZoneDateTimeUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimeZoneDateTimeUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"zoneId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetTimeZoneTimeUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTimeZoneTimeUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimeZoneTimeUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"zoneId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zoneId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetTimezonesUsingGetQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTimezonesUsingGetQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimezonesUsingGET"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hateoasMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hateoasMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rawUtcOffsetHours"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"rel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    breweriesQuery(variables?: BreweriesQueryQueryVariables, options?: C): Promise<BreweriesQueryQuery> {
      return requester<BreweriesQueryQuery, BreweriesQueryQueryVariables>(BreweriesQueryDocument, variables, options);
    },
    findAdminDivisionsUsingGetQuery(variables?: FindAdminDivisionsUsingGetQueryQueryVariables, options?: C): Promise<FindAdminDivisionsUsingGetQueryQuery> {
      return requester<FindAdminDivisionsUsingGetQueryQuery, FindAdminDivisionsUsingGetQueryQueryVariables>(FindAdminDivisionsUsingGetQueryDocument, variables, options);
    },
    findCitiesNearAdminDivisionUsingGetQuery(variables: FindCitiesNearAdminDivisionUsingGetQueryQueryVariables, options?: C): Promise<FindCitiesNearAdminDivisionUsingGetQueryQuery> {
      return requester<FindCitiesNearAdminDivisionUsingGetQueryQuery, FindCitiesNearAdminDivisionUsingGetQueryQueryVariables>(FindCitiesNearAdminDivisionUsingGetQueryDocument, variables, options);
    },
    findCitiesNearCityUsingGetQuery(variables: FindCitiesNearCityUsingGetQueryQueryVariables, options?: C): Promise<FindCitiesNearCityUsingGetQueryQuery> {
      return requester<FindCitiesNearCityUsingGetQueryQuery, FindCitiesNearCityUsingGetQueryQueryVariables>(FindCitiesNearCityUsingGetQueryDocument, variables, options);
    },
    findCitiesNearLocationUsingGetQuery(variables: FindCitiesNearLocationUsingGetQueryQueryVariables, options?: C): Promise<FindCitiesNearLocationUsingGetQueryQuery> {
      return requester<FindCitiesNearLocationUsingGetQueryQuery, FindCitiesNearLocationUsingGetQueryQueryVariables>(FindCitiesNearLocationUsingGetQueryDocument, variables, options);
    },
    findCitiesUsingGetQuery(variables?: FindCitiesUsingGetQueryQueryVariables, options?: C): Promise<FindCitiesUsingGetQueryQuery> {
      return requester<FindCitiesUsingGetQueryQuery, FindCitiesUsingGetQueryQueryVariables>(FindCitiesUsingGetQueryDocument, variables, options);
    },
    findDivisionsNearAdminDivisionUsingGetQuery(variables: FindDivisionsNearAdminDivisionUsingGetQueryQueryVariables, options?: C): Promise<FindDivisionsNearAdminDivisionUsingGetQueryQuery> {
      return requester<FindDivisionsNearAdminDivisionUsingGetQueryQuery, FindDivisionsNearAdminDivisionUsingGetQueryQueryVariables>(FindDivisionsNearAdminDivisionUsingGetQueryDocument, variables, options);
    },
    findDivisionsNearLocationUsingGetQuery(variables: FindDivisionsNearLocationUsingGetQueryQueryVariables, options?: C): Promise<FindDivisionsNearLocationUsingGetQueryQuery> {
      return requester<FindDivisionsNearLocationUsingGetQueryQuery, FindDivisionsNearLocationUsingGetQueryQueryVariables>(FindDivisionsNearLocationUsingGetQueryDocument, variables, options);
    },
    findRegionCitiesUsingGetQuery(variables: FindRegionCitiesUsingGetQueryQueryVariables, options?: C): Promise<FindRegionCitiesUsingGetQueryQuery> {
      return requester<FindRegionCitiesUsingGetQueryQuery, FindRegionCitiesUsingGetQueryQueryVariables>(FindRegionCitiesUsingGetQueryDocument, variables, options);
    },
    findRegionDivisionsUsingGetQuery(variables: FindRegionDivisionsUsingGetQueryQueryVariables, options?: C): Promise<FindRegionDivisionsUsingGetQueryQuery> {
      return requester<FindRegionDivisionsUsingGetQueryQuery, FindRegionDivisionsUsingGetQueryQueryVariables>(FindRegionDivisionsUsingGetQueryDocument, variables, options);
    },
    getAdminDivisionUsingGetQuery(variables: GetAdminDivisionUsingGetQueryQueryVariables, options?: C): Promise<GetAdminDivisionUsingGetQueryQuery> {
      return requester<GetAdminDivisionUsingGetQueryQuery, GetAdminDivisionUsingGetQueryQueryVariables>(GetAdminDivisionUsingGetQueryDocument, variables, options);
    },
    getCityDateTimeUsingGetQuery(variables: GetCityDateTimeUsingGetQueryQueryVariables, options?: C): Promise<GetCityDateTimeUsingGetQueryQuery> {
      return requester<GetCityDateTimeUsingGetQueryQuery, GetCityDateTimeUsingGetQueryQueryVariables>(GetCityDateTimeUsingGetQueryDocument, variables, options);
    },
    getCityDistanceUsingGetQuery(variables: GetCityDistanceUsingGetQueryQueryVariables, options?: C): Promise<GetCityDistanceUsingGetQueryQuery> {
      return requester<GetCityDistanceUsingGetQueryQuery, GetCityDistanceUsingGetQueryQueryVariables>(GetCityDistanceUsingGetQueryDocument, variables, options);
    },
    getCityLocatedInUsingGetQuery(variables: GetCityLocatedInUsingGetQueryQueryVariables, options?: C): Promise<GetCityLocatedInUsingGetQueryQuery> {
      return requester<GetCityLocatedInUsingGetQueryQuery, GetCityLocatedInUsingGetQueryQueryVariables>(GetCityLocatedInUsingGetQueryDocument, variables, options);
    },
    getCityTimeUsingGetQuery(variables: GetCityTimeUsingGetQueryQueryVariables, options?: C): Promise<GetCityTimeUsingGetQueryQuery> {
      return requester<GetCityTimeUsingGetQueryQuery, GetCityTimeUsingGetQueryQueryVariables>(GetCityTimeUsingGetQueryDocument, variables, options);
    },
    getCityUsingGetQuery(variables: GetCityUsingGetQueryQueryVariables, options?: C): Promise<GetCityUsingGetQueryQuery> {
      return requester<GetCityUsingGetQueryQuery, GetCityUsingGetQueryQueryVariables>(GetCityUsingGetQueryDocument, variables, options);
    },
    getCountriesUsingGetQuery(variables?: GetCountriesUsingGetQueryQueryVariables, options?: C): Promise<GetCountriesUsingGetQueryQuery> {
      return requester<GetCountriesUsingGetQueryQuery, GetCountriesUsingGetQueryQueryVariables>(GetCountriesUsingGetQueryDocument, variables, options);
    },
    getCountryUsingGetQuery(variables: GetCountryUsingGetQueryQueryVariables, options?: C): Promise<GetCountryUsingGetQueryQuery> {
      return requester<GetCountryUsingGetQueryQuery, GetCountryUsingGetQueryQueryVariables>(GetCountryUsingGetQueryDocument, variables, options);
    },
    getCurrenciesUsingGetQuery(variables: GetCurrenciesUsingGetQueryQueryVariables, options?: C): Promise<GetCurrenciesUsingGetQueryQuery> {
      return requester<GetCurrenciesUsingGetQueryQuery, GetCurrenciesUsingGetQueryQueryVariables>(GetCurrenciesUsingGetQueryDocument, variables, options);
    },
    getLanguagesUsingGetQuery(variables?: GetLanguagesUsingGetQueryQueryVariables, options?: C): Promise<GetLanguagesUsingGetQueryQuery> {
      return requester<GetLanguagesUsingGetQueryQuery, GetLanguagesUsingGetQueryQueryVariables>(GetLanguagesUsingGetQueryDocument, variables, options);
    },
    getLocalesUsingGetQuery(variables?: GetLocalesUsingGetQueryQueryVariables, options?: C): Promise<GetLocalesUsingGetQueryQuery> {
      return requester<GetLocalesUsingGetQueryQuery, GetLocalesUsingGetQueryQueryVariables>(GetLocalesUsingGetQueryDocument, variables, options);
    },
    getRegionUsingGetQuery(variables: GetRegionUsingGetQueryQueryVariables, options?: C): Promise<GetRegionUsingGetQueryQuery> {
      return requester<GetRegionUsingGetQueryQuery, GetRegionUsingGetQueryQueryVariables>(GetRegionUsingGetQueryDocument, variables, options);
    },
    getRegionsUsingGetQuery(variables: GetRegionsUsingGetQueryQueryVariables, options?: C): Promise<GetRegionsUsingGetQueryQuery> {
      return requester<GetRegionsUsingGetQueryQuery, GetRegionsUsingGetQueryQueryVariables>(GetRegionsUsingGetQueryDocument, variables, options);
    },
    getTimeZoneDateTimeUsingGetQuery(variables: GetTimeZoneDateTimeUsingGetQueryQueryVariables, options?: C): Promise<GetTimeZoneDateTimeUsingGetQueryQuery> {
      return requester<GetTimeZoneDateTimeUsingGetQueryQuery, GetTimeZoneDateTimeUsingGetQueryQueryVariables>(GetTimeZoneDateTimeUsingGetQueryDocument, variables, options);
    },
    getTimeZoneTimeUsingGetQuery(variables: GetTimeZoneTimeUsingGetQueryQueryVariables, options?: C): Promise<GetTimeZoneTimeUsingGetQueryQuery> {
      return requester<GetTimeZoneTimeUsingGetQueryQuery, GetTimeZoneTimeUsingGetQueryQueryVariables>(GetTimeZoneTimeUsingGetQueryDocument, variables, options);
    },
    getTimezonesUsingGetQuery(variables?: GetTimezonesUsingGetQueryQueryVariables, options?: C): Promise<GetTimezonesUsingGetQueryQuery> {
      return requester<GetTimezonesUsingGetQueryQuery, GetTimezonesUsingGetQueryQueryVariables>(GetTimezonesUsingGetQueryDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;