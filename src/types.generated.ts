import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** GET breweries */
  breweries?: Maybe<Array<Maybe<BreweriesSampleJsonResponse>>>;
  /**
   * Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all known divisions.
   * 
   * Equivalent to GET /v1/geo/adminDivisions
   */
  findAdminDivisionsUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   * 
   * Equivalent to GET /v1/geo/adminDivisions/{divisionId}/nearbyCities
   */
  findCitiesNearAdminDivisionUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   * 
   * Equivalent to GET /v1/geo/cities/{cityId}/nearbyCities
   */
  findCitiesNearCityUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   * 
   * Equivalent to GET /v1/geo/locations/{locationId}/nearbyCities
   */
  findCitiesNearLocationUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   * 
   * Equivalent to GET /v1/geo/cities
   */
  findCitiesUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find administrative divisions near the given origin division, filtering by optional criteria. If no criteria are set, you will get back all known divisions.
   * 
   * Equivalent to GET /v1/geo/adminDivisions/{divisionId}/nearbyDivisions
   */
  findDivisionsNearAdminDivisionUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set, you will get back all known divisions.
   * 
   * Equivalent to GET /v1/geo/locations/{locationId}/nearbyDivisions
   */
  findDivisionsNearLocationUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Get the cities in a specific country region. The country and region info is omitted in the response.
   * 
   * Equivalent to GET /v1/geo/countries/{countryId}/regions/{regionCode}/cities
   */
  findRegionCitiesUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Get the administrative divisions in a specific country region. The country and region info is omitted in the response.
   * 
   * Equivalent to GET /v1/geo/countries/{countryId}/regions/{regionCode}/adminDivisions
   */
  findRegionDivisionsUsingGET?: Maybe<PopulatedPlacesResponse>;
  /**
   * Get the details for a specific administrative division, including location coordinates, population, and elevation above sea-level (if available).
   * 
   * Equivalent to GET /v1/geo/adminDivisions/{divisionId}
   */
  getAdminDivisionUsingGET?: Maybe<PopulatedPlaceResponse>;
  /**
   * Get city date-time
   * 
   * Equivalent to GET /v1/geo/cities/{cityId}/dateTime
   */
  getCityDateTimeUsingGET?: Maybe<DateTimeResponse>;
  /**
   * Get distance to the given city
   * 
   * Equivalent to GET /v1/geo/cities/{cityId}/distance
   */
  getCityDistanceUsingGET?: Maybe<DistanceResponse>;
  /**
   * Get city time
   * 
   * Equivalent to GET /v1/geo/cities/{cityId}/time
   */
  getCityTimeUsingGET?: Maybe<TimeResponse>;
  /**
   * Get the details for a specific city, including location coordinates, population, and elevation above sea-level (if available).
   * 
   * Equivalent to GET /v1/geo/cities/{cityId}
   */
  getCityUsingGET?: Maybe<PopulatedPlaceResponse>;
  /**
   * Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
   * 
   * Equivalent to GET /v1/geo/countries
   */
  getCountriesUsingGET?: Maybe<CountriesResponse>;
  /**
   * Get the details for a specific country, including number of regions.
   * 
   * Equivalent to GET /v1/geo/countries/{countryId}
   */
  getCountryUsingGET?: Maybe<CountryResponse>;
  /**
   * Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies.
   * 
   * Equivalent to GET /v1/locale/currencies
   */
  getCurrenciesUsingGET?: Maybe<CurrenciesResponse>;
  /**
   * Get all supported languages
   * 
   * Equivalent to GET /v1/locale/languages
   */
  getLanguagesUsingGET?: Maybe<LanguagesResponse>;
  /**
   * Get all known locales
   * 
   * Equivalent to GET /v1/locale/locales
   */
  getLocalesUsingGET?: Maybe<LocalesResponse>;
  /**
   * Get the details of a specific country region, including number of cities.
   * 
   * Equivalent to GET /v1/geo/countries/{countryId}/regions/{regionCode}
   */
  getRegionUsingGET?: Maybe<RegionResponse>;
  /**
   * Get all regions in a specific country. These could be states, provinces, districts, or otherwise major political divisions.
   * 
   * Equivalent to GET /v1/geo/countries/{countryId}/regions
   */
  getRegionsUsingGET?: Maybe<RegionsResponse>;
  /**
   * Get time-zone date-time
   * 
   * Equivalent to GET /v1/locale/timezones/{zoneId}/dateTime
   */
  getTimeZoneDateTimeUsingGET?: Maybe<DateTimeResponse>;
  /**
   * Get time-zone time
   * 
   * Equivalent to GET /v1/locale/timezones/{zoneId}/time
   */
  getTimeZoneTimeUsingGET?: Maybe<TimeResponse>;
  /**
   * Get all known time-zones
   * 
   * Equivalent to GET /v1/locale/timezones
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
  fromCityId: Scalars['String'];
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
  countryId?: Maybe<Scalars['String']>;
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
  website_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
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

export type PopulatedPlacesResponse = {
  __typename?: 'PopulatedPlacesResponse';
  /** A list of PopulatedPlaceSummaries */
  data?: Maybe<Array<Maybe<PopulatedPlaceSummary>>>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
  /** A list of Links */
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

export type PopulatedPlaceSummary = {
  __typename?: 'PopulatedPlaceSummary';
  /** The city name (varies by languageCode) */
  city?: Maybe<Scalars['String']>;
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
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
  breweries?: Maybe<Array<Maybe<BreweriesSampleJsonResponse>>>;
};

export enum PopulatedPlaceType {
  ADM2 = 'ADM2',
  CITY = 'CITY'
}

export type WftError = {
  __typename?: 'WftError';
  code?: Maybe<WftErrorCode>;
  message?: Maybe<Scalars['String']>;
};

export enum WftErrorCode {
  ACCESS_DENIED = 'ACCESS_DENIED',
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  INCOMPATIBLE = 'INCOMPATIBLE',
  PARAM_INVALID = 'PARAM_INVALID',
  PARAMS_MUTUALLY_EXCLUSIVE = 'PARAMS_MUTUALLY_EXCLUSIVE',
  REQUEST_UNPROCESSABLE = 'REQUEST_UNPROCESSABLE'
}

export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  /** The zero-ary offset into the results (0 is the first result) */
  currentOffset?: Maybe<Scalars['Float']>;
  /** The total number of results across pages */
  totalCount?: Maybe<Scalars['Float']>;
};

export type PopulatedPlaceResponse = {
  __typename?: 'PopulatedPlaceResponse';
  data?: Maybe<PopulatedPlaceDetails>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
};

export type PopulatedPlaceDetails = {
  __typename?: 'PopulatedPlaceDetails';
  /** The city name (varies by languageCode) */
  city?: Maybe<Scalars['String']>;
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
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']>;
};

export type DateTimeResponse = {
  __typename?: 'DateTimeResponse';
  /** The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ */
  data?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<WftError>>>;
};

export type DistanceResponse = {
  __typename?: 'DistanceResponse';
  /** The distance in units as set by the distanceUnit param (defaults to miles) */
  data?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<Maybe<WftError>>>;
};

export type TimeResponse = {
  __typename?: 'TimeResponse';
  /** The time in ISO-8601 format: HHmmss.SSSZ */
  data?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<WftError>>>;
};

export type CountriesResponse = {
  __typename?: 'CountriesResponse';
  /** A list of CountrySummarys */
  data?: Maybe<Array<Maybe<CountrySummary>>>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
  /** A list of Links */
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

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

export type CountryResponse = {
  __typename?: 'CountryResponse';
  data?: Maybe<CountryDetails>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
};

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

export type CurrenciesResponse = {
  __typename?: 'CurrenciesResponse';
  /** A list of CurrencyDescriptors */
  data?: Maybe<Array<Maybe<CurrencyDescriptor>>>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
  /** A list of Links */
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

export type CurrencyDescriptor = {
  __typename?: 'CurrencyDescriptor';
  /** A ISO-4217 currency code */
  code?: Maybe<Scalars['String']>;
  /** A list of ISO-3166 country codes */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  data?: Maybe<Array<Maybe<LanguageDescriptor>>>;
  errors?: Maybe<Array<Maybe<WftError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

export type LanguageDescriptor = {
  __typename?: 'LanguageDescriptor';
  code?: Maybe<Code>;
  name?: Maybe<Scalars['String']>;
};

export enum Code {
  UNDEFINED = 'undefined',
  AA = 'aa',
  AB = 'ab',
  AE = 'ae',
  AF = 'af',
  AK = 'ak',
  AM = 'am',
  AN = 'an',
  AR = 'ar',
  AS = 'as',
  AV = 'av',
  AY = 'ay',
  AZ = 'az',
  BA = 'ba',
  BE = 'be',
  BG = 'bg',
  BH = 'bh',
  BI = 'bi',
  BM = 'bm',
  BN = 'bn',
  BO = 'bo',
  BR = 'br',
  BS = 'bs',
  CA = 'ca',
  CE = 'ce',
  CH = 'ch',
  CO = 'co',
  CR = 'cr',
  CS = 'cs',
  CU = 'cu',
  CV = 'cv',
  CY = 'cy',
  DA = 'da',
  DE = 'de',
  DV = 'dv',
  DZ = 'dz',
  EE = 'ee',
  EL = 'el',
  EN = 'en',
  EO = 'eo',
  ES = 'es',
  ET = 'et',
  EU = 'eu',
  FA = 'fa',
  FF = 'ff',
  FI = 'fi',
  FJ = 'fj',
  FO = 'fo',
  FR = 'fr',
  FY = 'fy',
  GA = 'ga',
  GD = 'gd',
  GL = 'gl',
  GN = 'gn',
  GU = 'gu',
  GV = 'gv',
  HA = 'ha',
  HE = 'he',
  HI = 'hi',
  HO = 'ho',
  HR = 'hr',
  HT = 'ht',
  HU = 'hu',
  HY = 'hy',
  HZ = 'hz',
  IA = 'ia',
  ID = 'id',
  IE = 'ie',
  IG = 'ig',
  II = 'ii',
  IK = 'ik',
  IO = 'io',
  IS = 'is',
  IT = 'it',
  IU = 'iu',
  JA = 'ja',
  JV = 'jv',
  KA = 'ka',
  KG = 'kg',
  KI = 'ki',
  KJ = 'kj',
  KK = 'kk',
  KL = 'kl',
  KM = 'km',
  KN = 'kn',
  KO = 'ko',
  KR = 'kr',
  KS = 'ks',
  KU = 'ku',
  KV = 'kv',
  KW = 'kw',
  KY = 'ky',
  LA = 'la',
  LB = 'lb',
  LG = 'lg',
  LI = 'li',
  LN = 'ln',
  LO = 'lo',
  LT = 'lt',
  LU = 'lu',
  LV = 'lv',
  MG = 'mg',
  MH = 'mh',
  MI = 'mi',
  MK = 'mk',
  ML = 'ml',
  MN = 'mn',
  MR = 'mr',
  MS = 'ms',
  MT = 'mt',
  MY = 'my',
  NA = 'na',
  NB = 'nb',
  ND = 'nd',
  NE = 'ne',
  NG = 'ng',
  NL = 'nl',
  NN = 'nn',
  NO = 'no',
  NR = 'nr',
  NV = 'nv',
  NY = 'ny',
  OC = 'oc',
  OJ = 'oj',
  OM = 'om',
  OR = 'or',
  OS = 'os',
  PA = 'pa',
  PI = 'pi',
  PL = 'pl',
  PS = 'ps',
  PT = 'pt',
  QU = 'qu',
  RM = 'rm',
  RN = 'rn',
  RO = 'ro',
  RU = 'ru',
  RW = 'rw',
  SA = 'sa',
  SC = 'sc',
  SD = 'sd',
  SE = 'se',
  SG = 'sg',
  SI = 'si',
  SK = 'sk',
  SL = 'sl',
  SM = 'sm',
  SN = 'sn',
  SO = 'so',
  SQ = 'sq',
  SR = 'sr',
  SS = 'ss',
  ST = 'st',
  SU = 'su',
  SV = 'sv',
  SW = 'sw',
  TA = 'ta',
  TE = 'te',
  TG = 'tg',
  TH = 'th',
  TI = 'ti',
  TK = 'tk',
  TL = 'tl',
  TN = 'tn',
  TO = 'to',
  TR = 'tr',
  TS = 'ts',
  TT = 'tt',
  TW = 'tw',
  TY = 'ty',
  UG = 'ug',
  UK = 'uk',
  UR = 'ur',
  UZ = 'uz',
  VE = 've',
  VI = 'vi',
  VO = 'vo',
  WA = 'wa',
  WO = 'wo',
  XH = 'xh',
  YI = 'yi',
  YO = 'yo',
  ZA = 'za',
  ZH = 'zh',
  ZU = 'zu'
}

export type LocalesResponse = {
  __typename?: 'LocalesResponse';
  /** A list of LocalDescriptors */
  data?: Maybe<Array<Maybe<LocaleDescriptor>>>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
  /** A list of Links */
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

export type LocaleDescriptor = {
  __typename?: 'LocaleDescriptor';
  /** The locale code */
  code?: Maybe<Scalars['String']>;
};

export type RegionResponse = {
  __typename?: 'RegionResponse';
  data?: Maybe<RegionDetails>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
};

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

export type RegionsResponse = {
  __typename?: 'RegionsResponse';
  /** A list of RegionSummaries */
  data?: Maybe<Array<Maybe<RegionSummary>>>;
  /** A list of WftErrors */
  errors?: Maybe<Array<Maybe<WftError>>>;
  /** A list of Links */
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

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

export type TimeZonesResponse = {
  __typename?: 'TimeZonesResponse';
  data?: Maybe<Array<Maybe<TimeZoneDescriptor>>>;
  errors?: Maybe<Array<Maybe<WftError>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
};

export type TimeZoneDescriptor = {
  __typename?: 'TimeZoneDescriptor';
  /** The time-zone id */
  id?: Maybe<Scalars['String']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  BreweriesSampleJsonResponse: ResolverTypeWrapper<BreweriesSampleJsonResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  BreweriesInputSampleJsonRequest: BreweriesInputSampleJsonRequest;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PopulatedPlacesResponse: ResolverTypeWrapper<PopulatedPlacesResponse>;
  PopulatedPlaceSummary: ResolverTypeWrapper<PopulatedPlaceSummary>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  PopulatedPlaceType: PopulatedPlaceType;
  WftError: ResolverTypeWrapper<WftError>;
  WftErrorCode: WftErrorCode;
  Link: ResolverTypeWrapper<Link>;
  Metadata: ResolverTypeWrapper<Metadata>;
  PopulatedPlaceResponse: ResolverTypeWrapper<PopulatedPlaceResponse>;
  PopulatedPlaceDetails: ResolverTypeWrapper<PopulatedPlaceDetails>;
  DateTimeResponse: ResolverTypeWrapper<DateTimeResponse>;
  DistanceResponse: ResolverTypeWrapper<DistanceResponse>;
  TimeResponse: ResolverTypeWrapper<TimeResponse>;
  CountriesResponse: ResolverTypeWrapper<CountriesResponse>;
  CountrySummary: ResolverTypeWrapper<CountrySummary>;
  CountryResponse: ResolverTypeWrapper<CountryResponse>;
  CountryDetails: ResolverTypeWrapper<CountryDetails>;
  CurrenciesResponse: ResolverTypeWrapper<CurrenciesResponse>;
  CurrencyDescriptor: ResolverTypeWrapper<CurrencyDescriptor>;
  LanguagesResponse: ResolverTypeWrapper<LanguagesResponse>;
  LanguageDescriptor: ResolverTypeWrapper<LanguageDescriptor>;
  Code: Code;
  LocalesResponse: ResolverTypeWrapper<LocalesResponse>;
  LocaleDescriptor: ResolverTypeWrapper<LocaleDescriptor>;
  RegionResponse: ResolverTypeWrapper<RegionResponse>;
  RegionDetails: ResolverTypeWrapper<RegionDetails>;
  RegionsResponse: ResolverTypeWrapper<RegionsResponse>;
  RegionSummary: ResolverTypeWrapper<RegionSummary>;
  TimeZonesResponse: ResolverTypeWrapper<TimeZonesResponse>;
  TimeZoneDescriptor: ResolverTypeWrapper<TimeZoneDescriptor>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  BreweriesSampleJsonResponse: BreweriesSampleJsonResponse;
  Int: Scalars['Int'];
  String: Scalars['String'];
  BreweriesInputSampleJsonRequest: BreweriesInputSampleJsonRequest;
  Boolean: Scalars['Boolean'];
  PopulatedPlacesResponse: PopulatedPlacesResponse;
  PopulatedPlaceSummary: PopulatedPlaceSummary;
  Float: Scalars['Float'];
  PopulatedPlaceType: PopulatedPlaceType;
  WftError: WftError;
  WftErrorCode: WftErrorCode;
  Link: Link;
  Metadata: Metadata;
  PopulatedPlaceResponse: PopulatedPlaceResponse;
  PopulatedPlaceDetails: PopulatedPlaceDetails;
  DateTimeResponse: DateTimeResponse;
  DistanceResponse: DistanceResponse;
  TimeResponse: TimeResponse;
  CountriesResponse: CountriesResponse;
  CountrySummary: CountrySummary;
  CountryResponse: CountryResponse;
  CountryDetails: CountryDetails;
  CurrenciesResponse: CurrenciesResponse;
  CurrencyDescriptor: CurrencyDescriptor;
  LanguagesResponse: LanguagesResponse;
  LanguageDescriptor: LanguageDescriptor;
  Code: Code;
  LocalesResponse: LocalesResponse;
  LocaleDescriptor: LocaleDescriptor;
  RegionResponse: RegionResponse;
  RegionDetails: RegionDetails;
  RegionsResponse: RegionsResponse;
  RegionSummary: RegionSummary;
  TimeZonesResponse: TimeZonesResponse;
  TimeZoneDescriptor: TimeZoneDescriptor;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  breweries?: Resolver<Maybe<Array<Maybe<ResolversTypes['BreweriesSampleJsonResponse']>>>, ParentType, ContextType, RequireFields<QueryBreweriesArgs, never>>;
  findAdminDivisionsUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindAdminDivisionsUsingGetArgs, never>>;
  findCitiesNearAdminDivisionUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindCitiesNearAdminDivisionUsingGetArgs, 'divisionId'>>;
  findCitiesNearCityUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindCitiesNearCityUsingGetArgs, 'cityId'>>;
  findCitiesNearLocationUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindCitiesNearLocationUsingGetArgs, 'locationId'>>;
  findCitiesUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindCitiesUsingGetArgs, never>>;
  findDivisionsNearAdminDivisionUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindDivisionsNearAdminDivisionUsingGetArgs, 'divisionId'>>;
  findDivisionsNearLocationUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindDivisionsNearLocationUsingGetArgs, 'locationId'>>;
  findRegionCitiesUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindRegionCitiesUsingGetArgs, 'countryId' | 'regionCode'>>;
  findRegionDivisionsUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlacesResponse']>, ParentType, ContextType, RequireFields<QueryFindRegionDivisionsUsingGetArgs, 'countryId' | 'regionCode'>>;
  getAdminDivisionUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlaceResponse']>, ParentType, ContextType, RequireFields<QueryGetAdminDivisionUsingGetArgs, 'divisionId'>>;
  getCityDateTimeUsingGET?: Resolver<Maybe<ResolversTypes['DateTimeResponse']>, ParentType, ContextType, RequireFields<QueryGetCityDateTimeUsingGetArgs, 'cityId'>>;
  getCityDistanceUsingGET?: Resolver<Maybe<ResolversTypes['DistanceResponse']>, ParentType, ContextType, RequireFields<QueryGetCityDistanceUsingGetArgs, 'cityId' | 'fromCityId'>>;
  getCityTimeUsingGET?: Resolver<Maybe<ResolversTypes['TimeResponse']>, ParentType, ContextType, RequireFields<QueryGetCityTimeUsingGetArgs, 'cityId'>>;
  getCityUsingGET?: Resolver<Maybe<ResolversTypes['PopulatedPlaceResponse']>, ParentType, ContextType, RequireFields<QueryGetCityUsingGetArgs, 'cityId'>>;
  getCountriesUsingGET?: Resolver<Maybe<ResolversTypes['CountriesResponse']>, ParentType, ContextType, RequireFields<QueryGetCountriesUsingGetArgs, never>>;
  getCountryUsingGET?: Resolver<Maybe<ResolversTypes['CountryResponse']>, ParentType, ContextType, RequireFields<QueryGetCountryUsingGetArgs, 'countryId'>>;
  getCurrenciesUsingGET?: Resolver<Maybe<ResolversTypes['CurrenciesResponse']>, ParentType, ContextType, RequireFields<QueryGetCurrenciesUsingGetArgs, never>>;
  getLanguagesUsingGET?: Resolver<Maybe<ResolversTypes['LanguagesResponse']>, ParentType, ContextType, RequireFields<QueryGetLanguagesUsingGetArgs, never>>;
  getLocalesUsingGET?: Resolver<Maybe<ResolversTypes['LocalesResponse']>, ParentType, ContextType, RequireFields<QueryGetLocalesUsingGetArgs, never>>;
  getRegionUsingGET?: Resolver<Maybe<ResolversTypes['RegionResponse']>, ParentType, ContextType, RequireFields<QueryGetRegionUsingGetArgs, 'countryId' | 'regionCode'>>;
  getRegionsUsingGET?: Resolver<Maybe<ResolversTypes['RegionsResponse']>, ParentType, ContextType, RequireFields<QueryGetRegionsUsingGetArgs, 'countryId'>>;
  getTimeZoneDateTimeUsingGET?: Resolver<Maybe<ResolversTypes['DateTimeResponse']>, ParentType, ContextType, RequireFields<QueryGetTimeZoneDateTimeUsingGetArgs, 'zoneId'>>;
  getTimeZoneTimeUsingGET?: Resolver<Maybe<ResolversTypes['TimeResponse']>, ParentType, ContextType, RequireFields<QueryGetTimeZoneTimeUsingGetArgs, 'zoneId'>>;
  getTimezonesUsingGET?: Resolver<Maybe<ResolversTypes['TimeZonesResponse']>, ParentType, ContextType, RequireFields<QueryGetTimezonesUsingGetArgs, never>>;
}>;

export type BreweriesSampleJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BreweriesSampleJsonResponse'] = ResolversParentTypes['BreweriesSampleJsonResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brewery_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postal_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_list?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PopulatedPlacesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlacesResponse'] = ResolversParentTypes['PopulatedPlacesResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['PopulatedPlaceSummary']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PopulatedPlaceSummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlaceSummary'] = ResolversParentTypes['PopulatedPlaceSummary']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breweries?: Resolver<Maybe<Array<Maybe<ResolversTypes['BreweriesSampleJsonResponse']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type WftErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WftError'] = ResolversParentTypes['WftError']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['WftErrorCode']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type LinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type MetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = ResolversObject<{
  currentOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PopulatedPlaceResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlaceResponse'] = ResolversParentTypes['PopulatedPlaceResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['PopulatedPlaceDetails']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PopulatedPlaceDetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlaceDetails'] = ResolversParentTypes['PopulatedPlaceDetails']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  elevationMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type DateTimeResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DateTimeResponse'] = ResolversParentTypes['DateTimeResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type DistanceResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DistanceResponse'] = ResolversParentTypes['DistanceResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type TimeResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeResponse'] = ResolversParentTypes['TimeResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CountriesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CountriesResponse'] = ResolversParentTypes['CountriesResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['CountrySummary']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CountrySummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CountrySummary'] = ResolversParentTypes['CountrySummary']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CountryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CountryResponse'] = ResolversParentTypes['CountryResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['CountryDetails']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CountryDetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CountryDetails'] = ResolversParentTypes['CountryDetails']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  flagImageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numRegions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CurrenciesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrenciesResponse'] = ResolversParentTypes['CurrenciesResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['CurrencyDescriptor']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CurrencyDescriptorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrencyDescriptor'] = ResolversParentTypes['CurrencyDescriptor']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type LanguagesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LanguagesResponse'] = ResolversParentTypes['LanguagesResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['LanguageDescriptor']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type LanguageDescriptorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LanguageDescriptor'] = ResolversParentTypes['LanguageDescriptor']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Code']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type LocalesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LocalesResponse'] = ResolversParentTypes['LocalesResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocaleDescriptor']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type LocaleDescriptorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LocaleDescriptor'] = ResolversParentTypes['LocaleDescriptor']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RegionResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegionResponse'] = ResolversParentTypes['RegionResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['RegionDetails']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RegionDetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegionDetails'] = ResolversParentTypes['RegionDetails']> = ResolversObject<{
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numCities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RegionsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegionsResponse'] = ResolversParentTypes['RegionsResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['RegionSummary']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RegionSummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegionSummary'] = ResolversParentTypes['RegionSummary']> = ResolversObject<{
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type TimeZonesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeZonesResponse'] = ResolversParentTypes['TimeZonesResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeZoneDescriptor']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['WftError']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type TimeZoneDescriptorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeZoneDescriptor'] = ResolversParentTypes['TimeZoneDescriptor']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  BreweriesSampleJsonResponse?: BreweriesSampleJsonResponseResolvers<ContextType>;
  PopulatedPlacesResponse?: PopulatedPlacesResponseResolvers<ContextType>;
  PopulatedPlaceSummary?: PopulatedPlaceSummaryResolvers<ContextType>;
  WftError?: WftErrorResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  PopulatedPlaceResponse?: PopulatedPlaceResponseResolvers<ContextType>;
  PopulatedPlaceDetails?: PopulatedPlaceDetailsResolvers<ContextType>;
  DateTimeResponse?: DateTimeResponseResolvers<ContextType>;
  DistanceResponse?: DistanceResponseResolvers<ContextType>;
  TimeResponse?: TimeResponseResolvers<ContextType>;
  CountriesResponse?: CountriesResponseResolvers<ContextType>;
  CountrySummary?: CountrySummaryResolvers<ContextType>;
  CountryResponse?: CountryResponseResolvers<ContextType>;
  CountryDetails?: CountryDetailsResolvers<ContextType>;
  CurrenciesResponse?: CurrenciesResponseResolvers<ContextType>;
  CurrencyDescriptor?: CurrencyDescriptorResolvers<ContextType>;
  LanguagesResponse?: LanguagesResponseResolvers<ContextType>;
  LanguageDescriptor?: LanguageDescriptorResolvers<ContextType>;
  LocalesResponse?: LocalesResponseResolvers<ContextType>;
  LocaleDescriptor?: LocaleDescriptorResolvers<ContextType>;
  RegionResponse?: RegionResponseResolvers<ContextType>;
  RegionDetails?: RegionDetailsResolvers<ContextType>;
  RegionsResponse?: RegionsResponseResolvers<ContextType>;
  RegionSummary?: RegionSummaryResolvers<ContextType>;
  TimeZonesResponse?: TimeZonesResponseResolvers<ContextType>;
  TimeZoneDescriptor?: TimeZoneDescriptorResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

export type SelectedFields = {
  [fieldName: string]: SelectedFields;
} | true;
export type ProjectionOptions = {
  /**
  * If you don't provide custom selection, this is the depth of generated selection set by GraphQL Mesh
  * default: 2
  */
  depth?: number;
  /**
  * Provide selection set in form of object similar to MongoDB's projection
  * example: { foo: { bar: true }, baz: true }
  */
  fields?: SelectedFields;
  /**
  * Provide selection set in form of GraphQL SDL
  * example: { foo bar baz }
  */
  selectionSet?: string;
}

export type OpenBrewerySdk = {
  breweries: (args: QueryBreweriesArgs, projectionOptions?: ProjectionOptions) => Promise<BreweriesSampleJsonResponse[]>
};

export type GeoDBSdk = {
  findAdminDivisionsUsingGET: (args: QueryFindAdminDivisionsUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findCitiesNearAdminDivisionUsingGET: (args: QueryFindCitiesNearAdminDivisionUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findCitiesNearCityUsingGET: (args: QueryFindCitiesNearCityUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findCitiesNearLocationUsingGET: (args: QueryFindCitiesNearLocationUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findCitiesUsingGET: (args: QueryFindCitiesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findDivisionsNearAdminDivisionUsingGET: (args: QueryFindDivisionsNearAdminDivisionUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findDivisionsNearLocationUsingGET: (args: QueryFindDivisionsNearLocationUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findRegionCitiesUsingGET: (args: QueryFindRegionCitiesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  findRegionDivisionsUsingGET: (args: QueryFindRegionDivisionsUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlacesResponse>,
  getAdminDivisionUsingGET: (args: QueryGetAdminDivisionUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlaceResponse>,
  getCityDateTimeUsingGET: (args: QueryGetCityDateTimeUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<DateTimeResponse>,
  getCityDistanceUsingGET: (args: QueryGetCityDistanceUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<DistanceResponse>,
  getCityTimeUsingGET: (args: QueryGetCityTimeUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<TimeResponse>,
  getCityUsingGET: (args: QueryGetCityUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<PopulatedPlaceResponse>,
  getCountriesUsingGET: (args: QueryGetCountriesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<CountriesResponse>,
  getCountryUsingGET: (args: QueryGetCountryUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<CountryResponse>,
  getCurrenciesUsingGET: (args: QueryGetCurrenciesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<CurrenciesResponse>,
  getLanguagesUsingGET: (args: QueryGetLanguagesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<LanguagesResponse>,
  getLocalesUsingGET: (args: QueryGetLocalesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<LocalesResponse>,
  getRegionUsingGET: (args: QueryGetRegionUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<RegionResponse>,
  getRegionsUsingGET: (args: QueryGetRegionsUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<RegionsResponse>,
  getTimeZoneDateTimeUsingGET: (args: QueryGetTimeZoneDateTimeUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<DateTimeResponse>,
  getTimeZoneTimeUsingGET: (args: QueryGetTimeZoneTimeUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<TimeResponse>,
  getTimezonesUsingGET: (args: QueryGetTimezonesUsingGetArgs, projectionOptions?: ProjectionOptions) => Promise<TimeZonesResponse>
};

export type OpenBreweryAdditionalContext = { 
      
    };

export type GeoDBAdditionalContext = { 
      
    };

export type OpenBreweryContext = { 
      OpenBrewery: { api: OpenBrewerySdk }, 
    } & OpenBreweryAdditionalContext;

export type GeoDBContext = { 
      GeoDB: { api: GeoDBSdk }, 
    } & GeoDBAdditionalContext;

export type MeshContext = OpenBreweryContext & GeoDBContext;