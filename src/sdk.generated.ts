import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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
};

export enum PopulatedPlaceType {
  Adm2 = 'ADM2',
  City = 'CITY'
}

export type WftError = {
  __typename?: 'WftError';
  code?: Maybe<WftErrorCode>;
  message?: Maybe<Scalars['String']>;
};

export enum WftErrorCode {
  AccessDenied = 'ACCESS_DENIED',
  EntityNotFound = 'ENTITY_NOT_FOUND',
  Incompatible = 'INCOMPATIBLE',
  ParamInvalid = 'PARAM_INVALID',
  ParamsMutuallyExclusive = 'PARAMS_MUTUALLY_EXCLUSIVE',
  RequestUnprocessable = 'REQUEST_UNPROCESSABLE'
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
  Undefined = 'undefined',
  Aa = 'aa',
  Ab = 'ab',
  Ae = 'ae',
  Af = 'af',
  Ak = 'ak',
  Am = 'am',
  An = 'an',
  Ar = 'ar',
  As = 'as',
  Av = 'av',
  Ay = 'ay',
  Az = 'az',
  Ba = 'ba',
  Be = 'be',
  Bg = 'bg',
  Bh = 'bh',
  Bi = 'bi',
  Bm = 'bm',
  Bn = 'bn',
  Bo = 'bo',
  Br = 'br',
  Bs = 'bs',
  Ca = 'ca',
  Ce = 'ce',
  Ch = 'ch',
  Co = 'co',
  Cr = 'cr',
  Cs = 'cs',
  Cu = 'cu',
  Cv = 'cv',
  Cy = 'cy',
  Da = 'da',
  De = 'de',
  Dv = 'dv',
  Dz = 'dz',
  Ee = 'ee',
  El = 'el',
  En = 'en',
  Eo = 'eo',
  Es = 'es',
  Et = 'et',
  Eu = 'eu',
  Fa = 'fa',
  Ff = 'ff',
  Fi = 'fi',
  Fj = 'fj',
  Fo = 'fo',
  Fr = 'fr',
  Fy = 'fy',
  Ga = 'ga',
  Gd = 'gd',
  Gl = 'gl',
  Gn = 'gn',
  Gu = 'gu',
  Gv = 'gv',
  Ha = 'ha',
  He = 'he',
  Hi = 'hi',
  Ho = 'ho',
  Hr = 'hr',
  Ht = 'ht',
  Hu = 'hu',
  Hy = 'hy',
  Hz = 'hz',
  Ia = 'ia',
  Id = 'id',
  Ie = 'ie',
  Ig = 'ig',
  Ii = 'ii',
  Ik = 'ik',
  Io = 'io',
  Is = 'is',
  It = 'it',
  Iu = 'iu',
  Ja = 'ja',
  Jv = 'jv',
  Ka = 'ka',
  Kg = 'kg',
  Ki = 'ki',
  Kj = 'kj',
  Kk = 'kk',
  Kl = 'kl',
  Km = 'km',
  Kn = 'kn',
  Ko = 'ko',
  Kr = 'kr',
  Ks = 'ks',
  Ku = 'ku',
  Kv = 'kv',
  Kw = 'kw',
  Ky = 'ky',
  La = 'la',
  Lb = 'lb',
  Lg = 'lg',
  Li = 'li',
  Ln = 'ln',
  Lo = 'lo',
  Lt = 'lt',
  Lu = 'lu',
  Lv = 'lv',
  Mg = 'mg',
  Mh = 'mh',
  Mi = 'mi',
  Mk = 'mk',
  Ml = 'ml',
  Mn = 'mn',
  Mr = 'mr',
  Ms = 'ms',
  Mt = 'mt',
  My = 'my',
  Na = 'na',
  Nb = 'nb',
  Nd = 'nd',
  Ne = 'ne',
  Ng = 'ng',
  Nl = 'nl',
  Nn = 'nn',
  No = 'no',
  Nr = 'nr',
  Nv = 'nv',
  Ny = 'ny',
  Oc = 'oc',
  Oj = 'oj',
  Om = 'om',
  Or = 'or',
  Os = 'os',
  Pa = 'pa',
  Pi = 'pi',
  Pl = 'pl',
  Ps = 'ps',
  Pt = 'pt',
  Qu = 'qu',
  Rm = 'rm',
  Rn = 'rn',
  Ro = 'ro',
  Ru = 'ru',
  Rw = 'rw',
  Sa = 'sa',
  Sc = 'sc',
  Sd = 'sd',
  Se = 'se',
  Sg = 'sg',
  Si = 'si',
  Sk = 'sk',
  Sl = 'sl',
  Sm = 'sm',
  Sn = 'sn',
  So = 'so',
  Sq = 'sq',
  Sr = 'sr',
  Ss = 'ss',
  St = 'st',
  Su = 'su',
  Sv = 'sv',
  Sw = 'sw',
  Ta = 'ta',
  Te = 'te',
  Tg = 'tg',
  Th = 'th',
  Ti = 'ti',
  Tk = 'tk',
  Tl = 'tl',
  Tn = 'tn',
  To = 'to',
  Tr = 'tr',
  Ts = 'ts',
  Tt = 'tt',
  Tw = 'tw',
  Ty = 'ty',
  Ug = 'ug',
  Uk = 'uk',
  Ur = 'ur',
  Uz = 'uz',
  Ve = 've',
  Vi = 'vi',
  Vo = 'vo',
  Wa = 'wa',
  Wo = 'wo',
  Xh = 'xh',
  Yi = 'yi',
  Yo = 'yo',
  Za = 'za',
  Zh = 'zh',
  Zu = 'zu'
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

export type BreweriesQueryQueryVariables = {
  input?: Maybe<BreweriesInputSampleJsonRequest>;
};


export type BreweriesQueryQuery = (
  { __typename?: 'Query' }
  & { breweries?: Maybe<Array<Maybe<(
    { __typename?: 'BreweriesSampleJsonResponse' }
    & Pick<BreweriesSampleJsonResponse, 'id' | 'name' | 'brewery_type' | 'street' | 'city' | 'state' | 'postal_code' | 'country' | 'longitude' | 'latitude' | 'phone' | 'website_url' | 'updated_at' | 'tag_list'>
  )>>> }
);

export type FindAdminDivisionsUsingGetQueryQueryVariables = {
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


export type FindAdminDivisionsUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findAdminDivisionsUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesNearAdminDivisionUsingGetQueryQueryVariables = {
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


export type FindCitiesNearAdminDivisionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesNearAdminDivisionUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesNearCityUsingGetQueryQueryVariables = {
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


export type FindCitiesNearCityUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesNearCityUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesNearLocationUsingGetQueryQueryVariables = {
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


export type FindCitiesNearLocationUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesNearLocationUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindCitiesUsingGetQueryQueryVariables = {
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


export type FindCitiesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findCitiesUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindDivisionsNearAdminDivisionUsingGetQueryQueryVariables = {
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


export type FindDivisionsNearAdminDivisionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findDivisionsNearAdminDivisionUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindDivisionsNearLocationUsingGetQueryQueryVariables = {
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


export type FindDivisionsNearLocationUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findDivisionsNearLocationUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindRegionCitiesUsingGetQueryQueryVariables = {
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


export type FindRegionCitiesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findRegionCitiesUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type FindRegionDivisionsUsingGetQueryQueryVariables = {
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


export type FindRegionDivisionsUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { findRegionDivisionsUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlacesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'PopulatedPlaceSummary' }
      & Pick<PopulatedPlaceSummary, 'city' | 'country' | 'countryCode' | 'distance' | 'id' | 'latitude' | 'longitude' | 'name' | 'region' | 'regionCode' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetAdminDivisionUsingGetQueryQueryVariables = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  divisionId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type GetAdminDivisionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getAdminDivisionUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlaceResponse' }
    & { data?: Maybe<(
      { __typename?: 'PopulatedPlaceDetails' }
      & Pick<PopulatedPlaceDetails, 'city' | 'country' | 'countryCode' | 'deleted' | 'elevationMeters' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'timezone' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetCityDateTimeUsingGetQueryQueryVariables = {
  cityId: Scalars['String'];
};


export type GetCityDateTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityDateTimeUsingGET?: Maybe<(
    { __typename?: 'DateTimeResponse' }
    & Pick<DateTimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetCityDistanceUsingGetQueryQueryVariables = {
  cityId: Scalars['String'];
  distanceUnit?: Maybe<Scalars['String']>;
  fromCityId: Scalars['String'];
};


export type GetCityDistanceUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityDistanceUsingGET?: Maybe<(
    { __typename?: 'DistanceResponse' }
    & Pick<DistanceResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetCityTimeUsingGetQueryQueryVariables = {
  cityId: Scalars['String'];
};


export type GetCityTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityTimeUsingGET?: Maybe<(
    { __typename?: 'TimeResponse' }
    & Pick<TimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetCityUsingGetQueryQueryVariables = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  cityId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type GetCityUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCityUsingGET?: Maybe<(
    { __typename?: 'PopulatedPlaceResponse' }
    & { data?: Maybe<(
      { __typename?: 'PopulatedPlaceDetails' }
      & Pick<PopulatedPlaceDetails, 'city' | 'country' | 'countryCode' | 'deleted' | 'elevationMeters' | 'id' | 'latitude' | 'longitude' | 'name' | 'population' | 'region' | 'regionCode' | 'timezone' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetCountriesUsingGetQueryQueryVariables = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  currencyCode?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type GetCountriesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCountriesUsingGET?: Maybe<(
    { __typename?: 'CountriesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'CountrySummary' }
      & Pick<CountrySummary, 'code' | 'currencyCodes' | 'name' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetCountryUsingGetQueryQueryVariables = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};


export type GetCountryUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCountryUsingGET?: Maybe<(
    { __typename?: 'CountryResponse' }
    & { data?: Maybe<(
      { __typename?: 'CountryDetails' }
      & Pick<CountryDetails, 'code' | 'currencyCodes' | 'flagImageUri' | 'name' | 'numRegions' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetCurrenciesUsingGetQueryQueryVariables = {
  countryId?: Maybe<Scalars['String']>;
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type GetCurrenciesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getCurrenciesUsingGET?: Maybe<(
    { __typename?: 'CurrenciesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'CurrencyDescriptor' }
      & Pick<CurrencyDescriptor, 'code' | 'countryCodes'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetLanguagesUsingGetQueryQueryVariables = {
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type GetLanguagesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getLanguagesUsingGET?: Maybe<(
    { __typename?: 'LanguagesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'LanguageDescriptor' }
      & Pick<LanguageDescriptor, 'name'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetLocalesUsingGetQueryQueryVariables = {
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type GetLocalesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getLocalesUsingGET?: Maybe<(
    { __typename?: 'LocalesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'LocaleDescriptor' }
      & Pick<LocaleDescriptor, 'code'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetRegionUsingGetQueryQueryVariables = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
  regionCode: Scalars['String'];
};


export type GetRegionUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getRegionUsingGET?: Maybe<(
    { __typename?: 'RegionResponse' }
    & { data?: Maybe<(
      { __typename?: 'RegionDetails' }
      & Pick<RegionDetails, 'capital' | 'countryCode' | 'fipsCode' | 'isoCode' | 'name' | 'numCities' | 'wikiDataId'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetRegionsUsingGetQueryQueryVariables = {
  asciiMode?: Maybe<Scalars['Boolean']>;
  countryId: Scalars['String'];
  hateoasMode?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  namePrefix?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type GetRegionsUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getRegionsUsingGET?: Maybe<(
    { __typename?: 'RegionsResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'RegionSummary' }
      & Pick<RegionSummary, 'countryCode' | 'fipsCode' | 'isoCode' | 'name' | 'wikiDataId'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);

export type GetTimeZoneDateTimeUsingGetQueryQueryVariables = {
  zoneId: Scalars['String'];
};


export type GetTimeZoneDateTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getTimeZoneDateTimeUsingGET?: Maybe<(
    { __typename?: 'DateTimeResponse' }
    & Pick<DateTimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetTimeZoneTimeUsingGetQueryQueryVariables = {
  zoneId: Scalars['String'];
};


export type GetTimeZoneTimeUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getTimeZoneTimeUsingGET?: Maybe<(
    { __typename?: 'TimeResponse' }
    & Pick<TimeResponse, 'data'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>> }
  )> }
);

export type GetTimezonesUsingGetQueryQueryVariables = {
  hateoasMode?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type GetTimezonesUsingGetQueryQuery = (
  { __typename?: 'Query' }
  & { getTimezonesUsingGET?: Maybe<(
    { __typename?: 'TimeZonesResponse' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'TimeZoneDescriptor' }
      & Pick<TimeZoneDescriptor, 'id' | 'name' | 'rawUtcOffsetHours'>
    )>>>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'WftError' }
      & Pick<WftError, 'message'>
    )>>>, links?: Maybe<Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'href' | 'rel'>
    )>>>, metadata?: Maybe<(
      { __typename?: 'Metadata' }
      & Pick<Metadata, 'currentOffset' | 'totalCount'>
    )> }
  )> }
);


export const BreweriesQueryDocument = gql`
    query breweriesQuery($input: BreweriesInputSampleJsonRequest) {
  breweries(input: $input) {
    id
    name
    brewery_type
    street
    city
    state
    postal_code
    country
    longitude
    latitude
    phone
    website_url
    updated_at
    tag_list
  }
}
    `;
export const FindAdminDivisionsUsingGetQueryDocument = gql`
    query findAdminDivisionsUsingGetQuery($asciiMode: Boolean, $countryIds: String, $distanceUnit: String, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $location: String, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String) {
  findAdminDivisionsUsingGET(asciiMode: $asciiMode, countryIds: $countryIds, distanceUnit: $distanceUnit, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, location: $location, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindCitiesNearAdminDivisionUsingGetQueryDocument = gql`
    query findCitiesNearAdminDivisionUsingGetQuery($asciiMode: Boolean, $countryIds: String, $distanceUnit: String, $divisionId: String!, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String, $types: String) {
  findCitiesNearAdminDivisionUsingGET(asciiMode: $asciiMode, countryIds: $countryIds, distanceUnit: $distanceUnit, divisionId: $divisionId, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds, types: $types) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindCitiesNearCityUsingGetQueryDocument = gql`
    query findCitiesNearCityUsingGetQuery($asciiMode: Boolean, $cityId: String!, $countryIds: String, $distanceUnit: String, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String, $types: String) {
  findCitiesNearCityUsingGET(asciiMode: $asciiMode, cityId: $cityId, countryIds: $countryIds, distanceUnit: $distanceUnit, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds, types: $types) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindCitiesNearLocationUsingGetQueryDocument = gql`
    query findCitiesNearLocationUsingGetQuery($asciiMode: Boolean, $countryIds: String, $distanceUnit: String, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $locationId: String!, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String, $types: String) {
  findCitiesNearLocationUsingGET(asciiMode: $asciiMode, countryIds: $countryIds, distanceUnit: $distanceUnit, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, locationId: $locationId, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds, types: $types) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindCitiesUsingGetQueryDocument = gql`
    query findCitiesUsingGetQuery($asciiMode: Boolean, $countryIds: String, $distanceUnit: String, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $location: String, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String, $types: String) {
  findCitiesUsingGET(asciiMode: $asciiMode, countryIds: $countryIds, distanceUnit: $distanceUnit, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, location: $location, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds, types: $types) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindDivisionsNearAdminDivisionUsingGetQueryDocument = gql`
    query findDivisionsNearAdminDivisionUsingGetQuery($asciiMode: Boolean, $countryIds: String, $distanceUnit: String, $divisionId: String!, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String) {
  findDivisionsNearAdminDivisionUsingGET(asciiMode: $asciiMode, countryIds: $countryIds, distanceUnit: $distanceUnit, divisionId: $divisionId, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindDivisionsNearLocationUsingGetQueryDocument = gql`
    query findDivisionsNearLocationUsingGetQuery($asciiMode: Boolean, $countryIds: String, $distanceUnit: String, $excludedCountryIds: String, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $locationId: String!, $minPopulation: Int, $namePrefix: String, $offset: Int, $radius: Int, $sort: String, $timeZoneIds: String) {
  findDivisionsNearLocationUsingGET(asciiMode: $asciiMode, countryIds: $countryIds, distanceUnit: $distanceUnit, excludedCountryIds: $excludedCountryIds, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, locationId: $locationId, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, radius: $radius, sort: $sort, timeZoneIds: $timeZoneIds) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindRegionCitiesUsingGetQueryDocument = gql`
    query findRegionCitiesUsingGetQuery($asciiMode: Boolean, $countryId: String!, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $minPopulation: Int, $namePrefix: String, $offset: Int, $regionCode: String!, $sort: String, $timeZoneIds: String, $types: String) {
  findRegionCitiesUsingGET(asciiMode: $asciiMode, countryId: $countryId, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, regionCode: $regionCode, sort: $sort, timeZoneIds: $timeZoneIds, types: $types) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const FindRegionDivisionsUsingGetQueryDocument = gql`
    query findRegionDivisionsUsingGetQuery($asciiMode: Boolean, $countryId: String!, $hateoasMode: Boolean, $includeDeleted: String, $languageCode: String, $limit: Int, $minPopulation: Int, $namePrefix: String, $offset: Int, $regionCode: String!, $sort: String, $timeZoneIds: String) {
  findRegionDivisionsUsingGET(asciiMode: $asciiMode, countryId: $countryId, hateoasMode: $hateoasMode, includeDeleted: $includeDeleted, languageCode: $languageCode, limit: $limit, minPopulation: $minPopulation, namePrefix: $namePrefix, offset: $offset, regionCode: $regionCode, sort: $sort, timeZoneIds: $timeZoneIds) {
    data {
      city
      country
      countryCode
      distance
      id
      latitude
      longitude
      name
      region
      regionCode
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const GetAdminDivisionUsingGetQueryDocument = gql`
    query getAdminDivisionUsingGetQuery($asciiMode: Boolean, $divisionId: String!, $languageCode: String) {
  getAdminDivisionUsingGET(asciiMode: $asciiMode, divisionId: $divisionId, languageCode: $languageCode) {
    data {
      city
      country
      countryCode
      deleted
      elevationMeters
      id
      latitude
      longitude
      name
      population
      region
      regionCode
      timezone
      wikiDataId
    }
    errors {
      message
    }
  }
}
    `;
export const GetCityDateTimeUsingGetQueryDocument = gql`
    query getCityDateTimeUsingGetQuery($cityId: String!) {
  getCityDateTimeUsingGET(cityId: $cityId) {
    data
    errors {
      message
    }
  }
}
    `;
export const GetCityDistanceUsingGetQueryDocument = gql`
    query getCityDistanceUsingGetQuery($cityId: String!, $distanceUnit: String, $fromCityId: String!) {
  getCityDistanceUsingGET(cityId: $cityId, distanceUnit: $distanceUnit, fromCityId: $fromCityId) {
    data
    errors {
      message
    }
  }
}
    `;
export const GetCityTimeUsingGetQueryDocument = gql`
    query getCityTimeUsingGetQuery($cityId: String!) {
  getCityTimeUsingGET(cityId: $cityId) {
    data
    errors {
      message
    }
  }
}
    `;
export const GetCityUsingGetQueryDocument = gql`
    query getCityUsingGetQuery($asciiMode: Boolean, $cityId: String!, $languageCode: String) {
  getCityUsingGET(asciiMode: $asciiMode, cityId: $cityId, languageCode: $languageCode) {
    data {
      city
      country
      countryCode
      deleted
      elevationMeters
      id
      latitude
      longitude
      name
      population
      region
      regionCode
      timezone
      wikiDataId
    }
    errors {
      message
    }
  }
}
    `;
export const GetCountriesUsingGetQueryDocument = gql`
    query getCountriesUsingGetQuery($asciiMode: Boolean, $currencyCode: String, $hateoasMode: Boolean, $languageCode: String, $limit: Int, $namePrefix: String, $offset: Int) {
  getCountriesUsingGET(asciiMode: $asciiMode, currencyCode: $currencyCode, hateoasMode: $hateoasMode, languageCode: $languageCode, limit: $limit, namePrefix: $namePrefix, offset: $offset) {
    data {
      code
      currencyCodes
      name
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const GetCountryUsingGetQueryDocument = gql`
    query getCountryUsingGetQuery($asciiMode: Boolean, $countryId: String!, $languageCode: String) {
  getCountryUsingGET(asciiMode: $asciiMode, countryId: $countryId, languageCode: $languageCode) {
    data {
      code
      currencyCodes
      flagImageUri
      name
      numRegions
      wikiDataId
    }
    errors {
      message
    }
  }
}
    `;
export const GetCurrenciesUsingGetQueryDocument = gql`
    query getCurrenciesUsingGetQuery($countryId: String, $hateoasMode: Boolean, $limit: Int, $offset: Int) {
  getCurrenciesUsingGET(countryId: $countryId, hateoasMode: $hateoasMode, limit: $limit, offset: $offset) {
    data {
      code
      countryCodes
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const GetLanguagesUsingGetQueryDocument = gql`
    query getLanguagesUsingGetQuery($hateoasMode: Boolean, $limit: Int, $offset: Int) {
  getLanguagesUsingGET(hateoasMode: $hateoasMode, limit: $limit, offset: $offset) {
    data {
      name
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const GetLocalesUsingGetQueryDocument = gql`
    query getLocalesUsingGetQuery($hateoasMode: Boolean, $limit: Int, $offset: Int) {
  getLocalesUsingGET(hateoasMode: $hateoasMode, limit: $limit, offset: $offset) {
    data {
      code
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const GetRegionUsingGetQueryDocument = gql`
    query getRegionUsingGetQuery($asciiMode: Boolean, $countryId: String!, $languageCode: String, $regionCode: String!) {
  getRegionUsingGET(asciiMode: $asciiMode, countryId: $countryId, languageCode: $languageCode, regionCode: $regionCode) {
    data {
      capital
      countryCode
      fipsCode
      isoCode
      name
      numCities
      wikiDataId
    }
    errors {
      message
    }
  }
}
    `;
export const GetRegionsUsingGetQueryDocument = gql`
    query getRegionsUsingGetQuery($asciiMode: Boolean, $countryId: String!, $hateoasMode: Boolean, $languageCode: String, $limit: Int, $namePrefix: String, $offset: Int) {
  getRegionsUsingGET(asciiMode: $asciiMode, countryId: $countryId, hateoasMode: $hateoasMode, languageCode: $languageCode, limit: $limit, namePrefix: $namePrefix, offset: $offset) {
    data {
      countryCode
      fipsCode
      isoCode
      name
      wikiDataId
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
export const GetTimeZoneDateTimeUsingGetQueryDocument = gql`
    query getTimeZoneDateTimeUsingGetQuery($zoneId: String!) {
  getTimeZoneDateTimeUsingGET(zoneId: $zoneId) {
    data
    errors {
      message
    }
  }
}
    `;
export const GetTimeZoneTimeUsingGetQueryDocument = gql`
    query getTimeZoneTimeUsingGetQuery($zoneId: String!) {
  getTimeZoneTimeUsingGET(zoneId: $zoneId) {
    data
    errors {
      message
    }
  }
}
    `;
export const GetTimezonesUsingGetQueryDocument = gql`
    query getTimezonesUsingGetQuery($hateoasMode: Boolean, $limit: Int, $offset: Int) {
  getTimezonesUsingGET(hateoasMode: $hateoasMode, limit: $limit, offset: $offset) {
    data {
      id
      name
      rawUtcOffsetHours
    }
    errors {
      message
    }
    links {
      href
      rel
    }
    metadata {
      currentOffset
      totalCount
    }
  }
}
    `;
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
    getCurrenciesUsingGetQuery(variables?: GetCurrenciesUsingGetQueryQueryVariables, options?: C): Promise<GetCurrenciesUsingGetQueryQuery> {
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