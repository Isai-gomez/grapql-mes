// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
  Date: any;
  ObjectID: any;
};

export type Subscription = {
  usersAdded?: Maybe<Array<Maybe<users>>>;
  /** fetch data from the table: "users" */
  users: Array<users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<users>;
};


export type SubscriptionusersArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Subscriptionusers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Subscriptionusers_by_pkArgs = {
  id: Scalars['uuid'];
};

export type Query = {
  /** fetch data from the table: "users" */
  users: Array<users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<users>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  capsule?: Maybe<Capsule>;
  company?: Maybe<Info>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  core?: Maybe<Core>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  dragon?: Maybe<Dragon>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  landpad?: Maybe<Landpad>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  launchpad?: Maybe<Launchpad>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  missionsResult?: Maybe<MissionResult>;
  mission?: Maybe<Mission>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  payload?: Maybe<Payload>;
  roadster?: Maybe<Roadster>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  rocket?: Maybe<Rocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
  ship?: Maybe<Ship>;
};


export type QueryusersArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Queryusers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Queryusers_by_pkArgs = {
  id: Scalars['uuid'];
};


export type QuerycapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycapsuleArgs = {
  id: Scalars['ID'];
};


export type QuerycoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycoreArgs = {
  id: Scalars['ID'];
};


export type QuerydragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerydragonArgs = {
  id: Scalars['ID'];
};


export type QueryhistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryhistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryhistoryArgs = {
  id: Scalars['ID'];
};


export type QuerylandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylandpadArgs = {
  id: Scalars['ID'];
};


export type QuerylaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchArgs = {
  id: Scalars['ID'];
};


export type QuerylaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylaunchpadArgs = {
  id: Scalars['ID'];
};


export type QuerymissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerymissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerymissionArgs = {
  id: Scalars['ID'];
};


export type QuerypayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerypayloadArgs = {
  id: Scalars['ID'];
};


export type QueryrocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryrocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryrocketArgs = {
  id: Scalars['ID'];
};


export type QueryshipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryshipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryshipArgs = {
  id: Scalars['ID'];
};

/** select columns of table "users" */
export type users_select_column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'rocket'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'twitter';

/** ordering options when selecting data from "users" */
export type users_order_by = {
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** column ordering options */
export type order_by =
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type users_bool_exp = {
  _and?: InputMaybe<Array<InputMaybe<users_bool_exp>>>;
  _not?: InputMaybe<users_bool_exp>;
  _or?: InputMaybe<Array<InputMaybe<users_bool_exp>>>;
  id?: InputMaybe<uuid_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  rocket?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<timestamptz_comparison_exp>;
  twitter?: InputMaybe<String_comparison_exp>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type uuid_comparison_exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type users = {
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamptz'];
  twitter?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type users_aggregate = {
  aggregate?: Maybe<users_aggregate_fields>;
  nodes: Array<users>;
};

/** aggregate fields of "users" */
export type users_aggregate_fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<users_max_fields>;
  min?: Maybe<users_min_fields>;
};


/** aggregate fields of "users" */
export type users_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<users_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type users_max_fields = {
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type users_min_fields = {
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']>;
  landings?: InputMaybe<Scalars['Int']>;
  mission?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Capsule = {
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dragon?: Maybe<Dragon>;
};

export type CapsuleMission = {
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Dragon = {
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars['Float']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Distance = {
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
};

export type DragonHeatShield = {
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
};

export type Mass = {
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Volume = {
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
};

export type DragonPressurizedCapsule = {
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
};

export type Force = {
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type DragonTrunk = {
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type Info = {
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars['Int']>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
};

export type Address = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type InfoLinks = {
  elon_twitter?: Maybe<Scalars['String']>;
  flickr?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']>;
  asds_landings?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  missions?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  rtls_attempts?: InputMaybe<Scalars['Int']>;
  rtls_landings?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  water_landing?: InputMaybe<Scalars['Boolean']>;
};

export type Core = {
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']>;
  flight_number?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  start?: InputMaybe<Scalars['Date']>;
};

export type History = {
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Date']>;
  event_date_utc?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  flight?: Maybe<Launch>;
};

export type Link = {
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_year?: Maybe<Scalars['String']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  static_fire_date_unix?: Maybe<Scalars['Date']>;
  static_fire_date_utc?: Maybe<Scalars['Date']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  ships?: Maybe<Array<Maybe<Ship>>>;
};

export type LaunchSite = {
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
};

export type LaunchLinks = {
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch_small?: Maybe<Scalars['String']>;
  mission_patch?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  rocket?: Maybe<Rocket>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  block?: Maybe<Scalars['Int']>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type Rocket = {
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars['Date']>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars['String']>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketEngines = {
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  engine_loss_max?: Maybe<Scalars['String']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
};

export type RocketFirstStage = {
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  number?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
};

export type RocketPayloadWeight = {
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloads = {
  option_1?: Maybe<Scalars['String']>;
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  height?: Maybe<Distance>;
  diameter?: Maybe<Distance>;
};

export type LaunchRocketSecondStage = {
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type Payload = {
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  orbit?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type LaunchTelemetry = {
  flight_club?: Maybe<Scalars['String']>;
};

export type Ship = {
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
};

export type ShipMission = {
  flight?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ShipLocation = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type HistoriesResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<History>>>;
};

export type Result = {
  totalCount?: Maybe<Scalars['Int']>;
};

export type Landpad = {
  attempted_landings?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  block?: InputMaybe<Scalars['Int']>;
  cap_serial?: InputMaybe<Scalars['String']>;
  capsule_reuse?: InputMaybe<Scalars['String']>;
  core_flight?: InputMaybe<Scalars['Int']>;
  core_reuse?: InputMaybe<Scalars['String']>;
  core_serial?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['Date']>;
  epoch?: InputMaybe<Scalars['Date']>;
  fairings_recovered?: InputMaybe<Scalars['String']>;
  fairings_recovery_attempt?: InputMaybe<Scalars['String']>;
  fairings_reuse?: InputMaybe<Scalars['String']>;
  fairings_reused?: InputMaybe<Scalars['String']>;
  fairings_ship?: InputMaybe<Scalars['String']>;
  gridfins?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  land_success?: InputMaybe<Scalars['String']>;
  landing_intent?: InputMaybe<Scalars['String']>;
  landing_type?: InputMaybe<Scalars['String']>;
  landing_vehicle?: InputMaybe<Scalars['String']>;
  launch_date_local?: InputMaybe<Scalars['Date']>;
  launch_date_utc?: InputMaybe<Scalars['Date']>;
  launch_success?: InputMaybe<Scalars['String']>;
  launch_year?: InputMaybe<Scalars['String']>;
  legs?: InputMaybe<Scalars['String']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  mission_id?: InputMaybe<Scalars['String']>;
  mission_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['String']>;
  rocket_id?: InputMaybe<Scalars['String']>;
  rocket_name?: InputMaybe<Scalars['String']>;
  rocket_type?: InputMaybe<Scalars['String']>;
  second_stage_block?: InputMaybe<Scalars['String']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
  ship?: InputMaybe<Scalars['String']>;
  side_core1_reuse?: InputMaybe<Scalars['String']>;
  side_core2_reuse?: InputMaybe<Scalars['String']>;
  site_id?: InputMaybe<Scalars['String']>;
  site_name_long?: InputMaybe<Scalars['String']>;
  site_name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Date']>;
  tbd?: InputMaybe<Scalars['String']>;
  tentative_max_precision?: InputMaybe<Scalars['String']>;
  tentative?: InputMaybe<Scalars['String']>;
};

export type LaunchesPastResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Launch>>>;
};

export type Launchpad = {
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
};

export type Mission = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type MissionResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Mission>>>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  epoch?: InputMaybe<Scalars['Date']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['ID']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['Boolean']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
};

export type Roadster = {
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  periapsis_au?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketsResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Rocket>>>;
};

export type ShipsFind = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  imo?: InputMaybe<Scalars['Int']>;
  mmsi?: InputMaybe<Scalars['Int']>;
  abs?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<Scalars['Int']>;
  weight_lbs?: InputMaybe<Scalars['Int']>;
  weight_kg?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['Int']>;
  home_port?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  speed_kn?: InputMaybe<Scalars['Int']>;
  course_deg?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  successful_landings?: InputMaybe<Scalars['Int']>;
  attempted_landings?: InputMaybe<Scalars['Int']>;
  mission?: InputMaybe<Scalars['String']>;
};

export type ShipsResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Ship>>>;
};

export type Mutation = {
  /** delete data from the table: "users" */
  delete_users?: Maybe<users_mutation_response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<users_mutation_response>;
  /** update data of the table: "users" */
  update_users?: Maybe<users_mutation_response>;
};


export type Mutationdelete_usersArgs = {
  where: users_bool_exp;
};


export type Mutationinsert_usersArgs = {
  objects: Array<users_insert_input>;
  on_conflict?: InputMaybe<users_on_conflict>;
};


export type Mutationupdate_usersArgs = {
  _set?: InputMaybe<users_set_input>;
  where: users_bool_exp;
};

/** response of any mutation on the table "users" */
export type users_mutation_response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<users>;
};

/** input type for inserting data into table "users" */
export type users_insert_input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  twitter?: InputMaybe<Scalars['String']>;
};

/** on conflict condition type for table "users" */
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: Array<users_update_column>;
};

/** unique or primary key constraints on table "users" */
export type users_constraint =
  /** unique or primary key constraint */
  | 'users_pkey';

/** update columns of table "users" */
export type users_update_column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'rocket'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'twitter';

/** input type for updating data in table "users" */
export type users_set_input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  twitter?: InputMaybe<Scalars['String']>;
};

/** conflict action */
export type conflict_action =
  /** ignore the insert on this row */
  | 'ignore'
  /** update the row with the given values */
  | 'update';

/** order by aggregate values of table "users" */
export type users_aggregate_order_by = {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<users_max_order_by>;
  min?: InputMaybe<users_min_order_by>;
};

/** order by max() on columns of table "users" */
export type users_max_order_by = {
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** order by min() on columns of table "users" */
export type users_min_order_by = {
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** input type for inserting array relation for remote table "users" */
export type users_arr_rel_insert_input = {
  data: Array<users_insert_input>;
  on_conflict?: InputMaybe<users_on_conflict>;
};

/** input type for inserting object relation for remote table "users" */
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: InputMaybe<users_on_conflict>;
};

export type CoreMission = {
  name?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Subscription: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  users_select_column: users_select_column;
  users_order_by: users_order_by;
  order_by: order_by;
  users_bool_exp: users_bool_exp;
  uuid_comparison_exp: uuid_comparison_exp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  String_comparison_exp: String_comparison_exp;
  timestamptz_comparison_exp: timestamptz_comparison_exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  users: ResolverTypeWrapper<users>;
  users_aggregate: ResolverTypeWrapper<users_aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<users_aggregate_fields>;
  users_max_fields: ResolverTypeWrapper<users_max_fields>;
  users_min_fields: ResolverTypeWrapper<users_min_fields>;
  CapsulesFind: CapsulesFind;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Capsule: ResolverTypeWrapper<Capsule>;
  CapsuleMission: ResolverTypeWrapper<CapsuleMission>;
  Dragon: ResolverTypeWrapper<Dragon>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Distance: ResolverTypeWrapper<Distance>;
  DragonHeatShield: ResolverTypeWrapper<DragonHeatShield>;
  Mass: ResolverTypeWrapper<Mass>;
  Volume: ResolverTypeWrapper<Volume>;
  DragonPressurizedCapsule: ResolverTypeWrapper<DragonPressurizedCapsule>;
  DragonThrust: ResolverTypeWrapper<DragonThrust>;
  Force: ResolverTypeWrapper<Force>;
  DragonTrunk: ResolverTypeWrapper<DragonTrunk>;
  DragonTrunkCargo: ResolverTypeWrapper<DragonTrunkCargo>;
  Info: ResolverTypeWrapper<Info>;
  Address: ResolverTypeWrapper<Address>;
  InfoLinks: ResolverTypeWrapper<InfoLinks>;
  CoresFind: CoresFind;
  Core: ResolverTypeWrapper<Core>;
  HistoryFind: HistoryFind;
  History: ResolverTypeWrapper<History>;
  Link: ResolverTypeWrapper<Link>;
  Launch: ResolverTypeWrapper<Launch>;
  LaunchSite: ResolverTypeWrapper<LaunchSite>;
  LaunchLinks: ResolverTypeWrapper<LaunchLinks>;
  LaunchRocket: ResolverTypeWrapper<LaunchRocket>;
  LaunchRocketFairings: ResolverTypeWrapper<LaunchRocketFairings>;
  LaunchRocketFirstStage: ResolverTypeWrapper<LaunchRocketFirstStage>;
  LaunchRocketFirstStageCore: ResolverTypeWrapper<LaunchRocketFirstStageCore>;
  Rocket: ResolverTypeWrapper<Rocket>;
  RocketEngines: ResolverTypeWrapper<RocketEngines>;
  RocketFirstStage: ResolverTypeWrapper<RocketFirstStage>;
  RocketLandingLegs: ResolverTypeWrapper<RocketLandingLegs>;
  RocketPayloadWeight: ResolverTypeWrapper<RocketPayloadWeight>;
  RocketSecondStage: ResolverTypeWrapper<RocketSecondStage>;
  RocketSecondStagePayloads: ResolverTypeWrapper<RocketSecondStagePayloads>;
  RocketSecondStagePayloadCompositeFairing: ResolverTypeWrapper<RocketSecondStagePayloadCompositeFairing>;
  LaunchRocketSecondStage: ResolverTypeWrapper<LaunchRocketSecondStage>;
  Payload: ResolverTypeWrapper<Payload>;
  PayloadOrbitParams: ResolverTypeWrapper<PayloadOrbitParams>;
  LaunchTelemetry: ResolverTypeWrapper<LaunchTelemetry>;
  Ship: ResolverTypeWrapper<Ship>;
  ShipMission: ResolverTypeWrapper<ShipMission>;
  ShipLocation: ResolverTypeWrapper<ShipLocation>;
  HistoriesResult: ResolverTypeWrapper<HistoriesResult>;
  Result: ResolverTypeWrapper<Result>;
  Landpad: ResolverTypeWrapper<Landpad>;
  Location: ResolverTypeWrapper<Location>;
  LaunchFind: LaunchFind;
  LaunchesPastResult: ResolverTypeWrapper<LaunchesPastResult>;
  Launchpad: ResolverTypeWrapper<Launchpad>;
  MissionsFind: MissionsFind;
  Mission: ResolverTypeWrapper<Mission>;
  MissionResult: ResolverTypeWrapper<MissionResult>;
  PayloadsFind: PayloadsFind;
  Roadster: ResolverTypeWrapper<Roadster>;
  RocketsResult: ResolverTypeWrapper<RocketsResult>;
  ShipsFind: ShipsFind;
  ShipsResult: ResolverTypeWrapper<ShipsResult>;
  Mutation: ResolverTypeWrapper<{}>;
  users_mutation_response: ResolverTypeWrapper<users_mutation_response>;
  users_insert_input: users_insert_input;
  users_on_conflict: users_on_conflict;
  users_constraint: users_constraint;
  users_update_column: users_update_column;
  users_set_input: users_set_input;
  conflict_action: conflict_action;
  users_aggregate_order_by: users_aggregate_order_by;
  users_max_order_by: users_max_order_by;
  users_min_order_by: users_min_order_by;
  users_arr_rel_insert_input: users_arr_rel_insert_input;
  users_obj_rel_insert_input: users_obj_rel_insert_input;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  CoreMission: ResolverTypeWrapper<CoreMission>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Subscription: {};
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
  ID: Scalars['ID'];
  users_order_by: users_order_by;
  users_bool_exp: users_bool_exp;
  uuid_comparison_exp: uuid_comparison_exp;
  Boolean: Scalars['Boolean'];
  uuid: Scalars['uuid'];
  String_comparison_exp: String_comparison_exp;
  timestamptz_comparison_exp: timestamptz_comparison_exp;
  timestamptz: Scalars['timestamptz'];
  users: users;
  users_aggregate: users_aggregate;
  users_aggregate_fields: users_aggregate_fields;
  users_max_fields: users_max_fields;
  users_min_fields: users_min_fields;
  CapsulesFind: CapsulesFind;
  Date: Scalars['Date'];
  Capsule: Capsule;
  CapsuleMission: CapsuleMission;
  Dragon: Dragon;
  Float: Scalars['Float'];
  Distance: Distance;
  DragonHeatShield: DragonHeatShield;
  Mass: Mass;
  Volume: Volume;
  DragonPressurizedCapsule: DragonPressurizedCapsule;
  DragonThrust: DragonThrust;
  Force: Force;
  DragonTrunk: DragonTrunk;
  DragonTrunkCargo: DragonTrunkCargo;
  Info: Info;
  Address: Address;
  InfoLinks: InfoLinks;
  CoresFind: CoresFind;
  Core: Core;
  HistoryFind: HistoryFind;
  History: History;
  Link: Link;
  Launch: Launch;
  LaunchSite: LaunchSite;
  LaunchLinks: LaunchLinks;
  LaunchRocket: LaunchRocket;
  LaunchRocketFairings: LaunchRocketFairings;
  LaunchRocketFirstStage: LaunchRocketFirstStage;
  LaunchRocketFirstStageCore: LaunchRocketFirstStageCore;
  Rocket: Rocket;
  RocketEngines: RocketEngines;
  RocketFirstStage: RocketFirstStage;
  RocketLandingLegs: RocketLandingLegs;
  RocketPayloadWeight: RocketPayloadWeight;
  RocketSecondStage: RocketSecondStage;
  RocketSecondStagePayloads: RocketSecondStagePayloads;
  RocketSecondStagePayloadCompositeFairing: RocketSecondStagePayloadCompositeFairing;
  LaunchRocketSecondStage: LaunchRocketSecondStage;
  Payload: Payload;
  PayloadOrbitParams: PayloadOrbitParams;
  LaunchTelemetry: LaunchTelemetry;
  Ship: Ship;
  ShipMission: ShipMission;
  ShipLocation: ShipLocation;
  HistoriesResult: HistoriesResult;
  Result: Result;
  Landpad: Landpad;
  Location: Location;
  LaunchFind: LaunchFind;
  LaunchesPastResult: LaunchesPastResult;
  Launchpad: Launchpad;
  MissionsFind: MissionsFind;
  Mission: Mission;
  MissionResult: MissionResult;
  PayloadsFind: PayloadsFind;
  Roadster: Roadster;
  RocketsResult: RocketsResult;
  ShipsFind: ShipsFind;
  ShipsResult: ShipsResult;
  Mutation: {};
  users_mutation_response: users_mutation_response;
  users_insert_input: users_insert_input;
  users_on_conflict: users_on_conflict;
  users_set_input: users_set_input;
  users_aggregate_order_by: users_aggregate_order_by;
  users_max_order_by: users_max_order_by;
  users_min_order_by: users_min_order_by;
  users_arr_rel_insert_input: users_arr_rel_insert_input;
  users_obj_rel_insert_input: users_obj_rel_insert_input;
  ObjectID: Scalars['ObjectID'];
  CoreMission: CoreMission;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  usersAdded?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['users']>>>, "usersAdded", ParentType, ContextType>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, Partial<SubscriptionusersArgs>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, Partial<Subscriptionusers_aggregateArgs>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscriptionusers_by_pkArgs, 'id'>>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, Partial<QueryusersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, Partial<Queryusers_aggregateArgs>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Queryusers_by_pkArgs, 'id'>>;
  capsules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, Partial<QuerycapsulesArgs>>;
  capsulesPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, Partial<QuerycapsulesPastArgs>>;
  capsulesUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, Partial<QuerycapsulesUpcomingArgs>>;
  capsule?: Resolver<Maybe<ResolversTypes['Capsule']>, ParentType, ContextType, RequireFields<QuerycapsuleArgs, 'id'>>;
  company?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  cores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, Partial<QuerycoresArgs>>;
  coresPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, Partial<QuerycoresPastArgs>>;
  coresUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, Partial<QuerycoresUpcomingArgs>>;
  core?: Resolver<Maybe<ResolversTypes['Core']>, ParentType, ContextType, RequireFields<QuerycoreArgs, 'id'>>;
  dragons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dragon']>>>, ParentType, ContextType, Partial<QuerydragonsArgs>>;
  dragon?: Resolver<Maybe<ResolversTypes['Dragon']>, ParentType, ContextType, RequireFields<QuerydragonArgs, 'id'>>;
  histories?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType, Partial<QueryhistoriesArgs>>;
  historiesResult?: Resolver<Maybe<ResolversTypes['HistoriesResult']>, ParentType, ContextType, Partial<QueryhistoriesResultArgs>>;
  history?: Resolver<Maybe<ResolversTypes['History']>, ParentType, ContextType, RequireFields<QueryhistoryArgs, 'id'>>;
  landpads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Landpad']>>>, ParentType, ContextType, Partial<QuerylandpadsArgs>>;
  landpad?: Resolver<Maybe<ResolversTypes['Landpad']>, ParentType, ContextType, RequireFields<QuerylandpadArgs, 'id'>>;
  launches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, Partial<QuerylaunchesArgs>>;
  launchesPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, Partial<QuerylaunchesPastArgs>>;
  launchesPastResult?: Resolver<Maybe<ResolversTypes['LaunchesPastResult']>, ParentType, ContextType, Partial<QuerylaunchesPastResultArgs>>;
  launchesUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, Partial<QuerylaunchesUpcomingArgs>>;
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QuerylaunchArgs, 'id'>>;
  launchLatest?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, Partial<QuerylaunchLatestArgs>>;
  launchNext?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, Partial<QuerylaunchNextArgs>>;
  launchpads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launchpad']>>>, ParentType, ContextType, Partial<QuerylaunchpadsArgs>>;
  launchpad?: Resolver<Maybe<ResolversTypes['Launchpad']>, ParentType, ContextType, RequireFields<QuerylaunchpadArgs, 'id'>>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mission']>>>, ParentType, ContextType, Partial<QuerymissionsArgs>>;
  missionsResult?: Resolver<Maybe<ResolversTypes['MissionResult']>, ParentType, ContextType, Partial<QuerymissionsResultArgs>>;
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType, RequireFields<QuerymissionArgs, 'id'>>;
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType, Partial<QuerypayloadsArgs>>;
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType, RequireFields<QuerypayloadArgs, 'id'>>;
  roadster?: Resolver<Maybe<ResolversTypes['Roadster']>, ParentType, ContextType>;
  rockets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType, Partial<QueryrocketsArgs>>;
  rocketsResult?: Resolver<Maybe<ResolversTypes['RocketsResult']>, ParentType, ContextType, Partial<QueryrocketsResultArgs>>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType, RequireFields<QueryrocketArgs, 'id'>>;
  ships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType, Partial<QueryshipsArgs>>;
  shipsResult?: Resolver<Maybe<ResolversTypes['ShipsResult']>, ParentType, ContextType, Partial<QueryshipsResultArgs>>;
  ship?: Resolver<Maybe<ResolversTypes['Ship']>, ParentType, ContextType, RequireFields<QueryshipArgs, 'id'>>;
}>;

export interface uuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export interface timestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type usersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = ResolversObject<{
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type users_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type users_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<users_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type users_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type users_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type CapsuleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Capsule'] = ResolversParentTypes['Capsule']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CapsuleMission']>>>, ParentType, ContextType>;
  original_launch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reuse_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dragon?: Resolver<Maybe<ResolversTypes['Dragon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CapsuleMissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CapsuleMission'] = ResolversParentTypes['CapsuleMission']> = ResolversObject<{
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Dragon'] = ResolversParentTypes['Dragon']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  crew_capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  dry_mass_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dry_mass_lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  first_flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heat_shield?: Resolver<Maybe<ResolversTypes['DragonHeatShield']>, ParentType, ContextType>;
  height_w_trunk?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  launch_payload_mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>;
  launch_payload_vol?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orbit_duration_yr?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pressurized_capsule?: Resolver<Maybe<ResolversTypes['DragonPressurizedCapsule']>, ParentType, ContextType>;
  return_payload_mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>;
  return_payload_vol?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  sidewall_angle_deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  thrusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['DragonThrust']>>>, ParentType, ContextType>;
  trunk?: Resolver<Maybe<ResolversTypes['DragonTrunk']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DistanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Distance'] = ResolversParentTypes['Distance']> = ResolversObject<{
  feet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonHeatShieldResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DragonHeatShield'] = ResolversParentTypes['DragonHeatShield']> = ResolversObject<{
  dev_partner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size_meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp_degrees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MassResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mass'] = ResolversParentTypes['Mass']> = ResolversObject<{
  kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VolumeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Volume'] = ResolversParentTypes['Volume']> = ResolversObject<{
  cubic_feet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cubic_meters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonPressurizedCapsuleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DragonPressurizedCapsule'] = ResolversParentTypes['DragonPressurizedCapsule']> = ResolversObject<{
  payload_volume?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonThrustResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DragonThrust'] = ResolversParentTypes['DragonThrust']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuel_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fuel_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thrust?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Force'] = ResolversParentTypes['Force']> = ResolversObject<{
  kN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lbf?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonTrunkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DragonTrunk'] = ResolversParentTypes['DragonTrunk']> = ResolversObject<{
  cargo?: Resolver<Maybe<ResolversTypes['DragonTrunkCargo']>, ParentType, ContextType>;
  trunk_volume?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonTrunkCargoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DragonTrunkCargo'] = ResolversParentTypes['DragonTrunkCargo']> = ResolversObject<{
  solar_array?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unpressurized_cargo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = ResolversObject<{
  ceo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cto_propulsion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  founded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  founder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headquarters?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  launch_sites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['InfoLinks']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  test_sites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  valuation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InfoLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InfoLinks'] = ResolversParentTypes['InfoLinks']> = ResolversObject<{
  elon_twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flickr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Core'] = ResolversParentTypes['Core']> = ResolversObject<{
  asds_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  asds_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CapsuleMission']>>>, ParentType, ContextType>;
  original_launch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reuse_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rtls_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rtls_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  water_landing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['History'] = ResolversParentTypes['History']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  event_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flight?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_tentative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  launch_date_local?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_site?: Resolver<Maybe<ResolversTypes['LaunchSite']>, ParentType, ContextType>;
  launch_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  launch_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['LaunchLinks']>, ParentType, ContextType>;
  mission_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  mission_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['LaunchRocket']>, ParentType, ContextType>;
  static_fire_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  static_fire_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  telemetry?: Resolver<Maybe<ResolversTypes['LaunchTelemetry']>, ParentType, ContextType>;
  tentative_max_precision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upcoming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchSiteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchSite'] = ResolversParentTypes['LaunchSite']> = ResolversObject<{
  site_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site_name_long?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchLinks'] = ResolversParentTypes['LaunchLinks']> = ResolversObject<{
  article_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flickr_images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  mission_patch_small?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mission_patch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presskit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_campaign?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_launch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_recovery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchRocket'] = ResolversParentTypes['LaunchRocket']> = ResolversObject<{
  fairings?: Resolver<Maybe<ResolversTypes['LaunchRocketFairings']>, ParentType, ContextType>;
  first_stage?: Resolver<Maybe<ResolversTypes['LaunchRocketFirstStage']>, ParentType, ContextType>;
  rocket_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  second_stage?: Resolver<Maybe<ResolversTypes['LaunchRocketSecondStage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketFairingsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchRocketFairings'] = ResolversParentTypes['LaunchRocketFairings']> = ResolversObject<{
  recovered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_attempt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ship?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketFirstStageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchRocketFirstStage'] = ResolversParentTypes['LaunchRocketFirstStage']> = ResolversObject<{
  cores?: Resolver<Maybe<Array<Maybe<ResolversTypes['LaunchRocketFirstStageCore']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketFirstStageCoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchRocketFirstStageCore'] = ResolversParentTypes['LaunchRocketFirstStageCore']> = ResolversObject<{
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  core?: Resolver<Maybe<ResolversTypes['Core']>, ParentType, ContextType>;
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gridfins?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  land_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  landing_intent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  landing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  landing_vehicle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  legs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  boosters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost_per_launch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  engines?: Resolver<Maybe<ResolversTypes['RocketEngines']>, ParentType, ContextType>;
  first_flight?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  first_stage?: Resolver<Maybe<ResolversTypes['RocketFirstStage']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  landing_legs?: Resolver<Maybe<ResolversTypes['RocketLandingLegs']>, ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload_weights?: Resolver<Maybe<Array<Maybe<ResolversTypes['RocketPayloadWeight']>>>, ParentType, ContextType>;
  second_stage?: Resolver<Maybe<ResolversTypes['RocketSecondStage']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  success_rate_pct?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketEnginesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketEngines'] = ResolversParentTypes['RocketEngines']> = ResolversObject<{
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engine_loss_max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  propellant_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  propellant_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thrust_sea_level?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  thrust_vacuum?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  thrust_to_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketFirstStageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketFirstStage'] = ResolversParentTypes['RocketFirstStage']> = ResolversObject<{
  burn_time_sec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  engines?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuel_amount_tons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reusable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thrust_sea_level?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  thrust_vacuum?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketLandingLegsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketLandingLegs'] = ResolversParentTypes['RocketLandingLegs']> = ResolversObject<{
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketPayloadWeightResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketPayloadWeight'] = ResolversParentTypes['RocketPayloadWeight']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketSecondStageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketSecondStage'] = ResolversParentTypes['RocketSecondStage']> = ResolversObject<{
  burn_time_sec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  engines?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuel_amount_tons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payloads?: Resolver<Maybe<ResolversTypes['RocketSecondStagePayloads']>, ParentType, ContextType>;
  thrust?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketSecondStagePayloadsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketSecondStagePayloads'] = ResolversParentTypes['RocketSecondStagePayloads']> = ResolversObject<{
  option_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  composite_fairing?: Resolver<Maybe<ResolversTypes['RocketSecondStagePayloadCompositeFairing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketSecondStagePayloadCompositeFairingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketSecondStagePayloadCompositeFairing'] = ResolversParentTypes['RocketSecondStagePayloadCompositeFairing']> = ResolversObject<{
  height?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketSecondStageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchRocketSecondStage'] = ResolversParentTypes['LaunchRocketSecondStage']> = ResolversObject<{
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = ResolversObject<{
  customers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  norad_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  orbit_params?: Resolver<Maybe<ResolversTypes['PayloadOrbitParams']>, ParentType, ContextType>;
  orbit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload_mass_kg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payload_mass_lbs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payload_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayloadOrbitParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayloadOrbitParams'] = ResolversParentTypes['PayloadOrbitParams']> = ResolversObject<{
  apoapsis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  arg_of_pericenter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eccentricity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  epoch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  inclination_deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lifespan_years?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mean_anomaly?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mean_motion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  periapsis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period_min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  raan?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  semi_major_axis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchTelemetryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchTelemetry'] = ResolversParentTypes['LaunchTelemetry']> = ResolversObject<{
  flight_club?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Ship'] = ResolversParentTypes['Ship']> = ResolversObject<{
  abs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attempted_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  course_deg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  home_port?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipMission']>>>, ParentType, ContextType>;
  mmsi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['ShipLocation']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  speed_kn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weight_lbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year_built?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipMissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipMission'] = ResolversParentTypes['ShipMission']> = ResolversObject<{
  flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipLocation'] = ResolversParentTypes['ShipLocation']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoriesResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoriesResult'] = ResolversParentTypes['HistoriesResult']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = ResolversObject<{
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LandpadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Landpad'] = ResolversParentTypes['Landpad']> = ResolversObject<{
  attempted_landings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  landing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_landings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchesPastResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LaunchesPastResult'] = ResolversParentTypes['LaunchesPastResult']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchpadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Launchpad'] = ResolversParentTypes['Launchpad']> = ResolversObject<{
  attempted_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles_launched?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MissionResult'] = ResolversParentTypes['MissionResult']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mission']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoadsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Roadster'] = ResolversParentTypes['Roadster']> = ResolversObject<{
  apoapsis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  earth_distance_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  earth_distance_mi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eccentricity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  epoch_jd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inclination?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  launch_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_mass_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  launch_mass_lbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mars_distance_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mars_distance_mi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  norad_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orbit_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  periapsis_arg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  periapsis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period_days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  semi_major_axis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketsResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RocketsResult'] = ResolversParentTypes['RocketsResult']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipsResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipsResult'] = ResolversParentTypes['ShipsResult']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutationdelete_usersArgs, 'where'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutationinsert_usersArgs, 'objects'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutationupdate_usersArgs, 'where'>>;
}>;

export type users_mutation_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ObjectIDScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type CoreMissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CoreMission'] = ResolversParentTypes['CoreMission']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Subscription?: SubscriptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
  users?: usersResolvers<ContextType>;
  users_aggregate?: users_aggregateResolvers<ContextType>;
  users_aggregate_fields?: users_aggregate_fieldsResolvers<ContextType>;
  users_max_fields?: users_max_fieldsResolvers<ContextType>;
  users_min_fields?: users_min_fieldsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Capsule?: CapsuleResolvers<ContextType>;
  CapsuleMission?: CapsuleMissionResolvers<ContextType>;
  Dragon?: DragonResolvers<ContextType>;
  Distance?: DistanceResolvers<ContextType>;
  DragonHeatShield?: DragonHeatShieldResolvers<ContextType>;
  Mass?: MassResolvers<ContextType>;
  Volume?: VolumeResolvers<ContextType>;
  DragonPressurizedCapsule?: DragonPressurizedCapsuleResolvers<ContextType>;
  DragonThrust?: DragonThrustResolvers<ContextType>;
  Force?: ForceResolvers<ContextType>;
  DragonTrunk?: DragonTrunkResolvers<ContextType>;
  DragonTrunkCargo?: DragonTrunkCargoResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  InfoLinks?: InfoLinksResolvers<ContextType>;
  Core?: CoreResolvers<ContextType>;
  History?: HistoryResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Launch?: LaunchResolvers<ContextType>;
  LaunchSite?: LaunchSiteResolvers<ContextType>;
  LaunchLinks?: LaunchLinksResolvers<ContextType>;
  LaunchRocket?: LaunchRocketResolvers<ContextType>;
  LaunchRocketFairings?: LaunchRocketFairingsResolvers<ContextType>;
  LaunchRocketFirstStage?: LaunchRocketFirstStageResolvers<ContextType>;
  LaunchRocketFirstStageCore?: LaunchRocketFirstStageCoreResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  RocketEngines?: RocketEnginesResolvers<ContextType>;
  RocketFirstStage?: RocketFirstStageResolvers<ContextType>;
  RocketLandingLegs?: RocketLandingLegsResolvers<ContextType>;
  RocketPayloadWeight?: RocketPayloadWeightResolvers<ContextType>;
  RocketSecondStage?: RocketSecondStageResolvers<ContextType>;
  RocketSecondStagePayloads?: RocketSecondStagePayloadsResolvers<ContextType>;
  RocketSecondStagePayloadCompositeFairing?: RocketSecondStagePayloadCompositeFairingResolvers<ContextType>;
  LaunchRocketSecondStage?: LaunchRocketSecondStageResolvers<ContextType>;
  Payload?: PayloadResolvers<ContextType>;
  PayloadOrbitParams?: PayloadOrbitParamsResolvers<ContextType>;
  LaunchTelemetry?: LaunchTelemetryResolvers<ContextType>;
  Ship?: ShipResolvers<ContextType>;
  ShipMission?: ShipMissionResolvers<ContextType>;
  ShipLocation?: ShipLocationResolvers<ContextType>;
  HistoriesResult?: HistoriesResultResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Landpad?: LandpadResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LaunchesPastResult?: LaunchesPastResultResolvers<ContextType>;
  Launchpad?: LaunchpadResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  MissionResult?: MissionResultResolvers<ContextType>;
  Roadster?: RoadsterResolvers<ContextType>;
  RocketsResult?: RocketsResultResolvers<ContextType>;
  ShipsResult?: ShipsResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  users_mutation_response?: users_mutation_responseResolvers<ContextType>;
  ObjectID?: GraphQLScalarType;
  CoreMission?: CoreMissionResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace TestTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
  Date: any;
  ObjectID: any;
};

export type Query = {
  /** fetch data from the table: "users" */
  users: Array<users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<users>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  capsule?: Maybe<Capsule>;
  company?: Maybe<Info>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  core?: Maybe<Core>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  dragon?: Maybe<Dragon>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  landpad?: Maybe<Landpad>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  launchpad?: Maybe<Launchpad>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  missionsResult?: Maybe<MissionResult>;
  mission?: Maybe<Mission>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  payload?: Maybe<Payload>;
  roadster?: Maybe<Roadster>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  rocket?: Maybe<Rocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
  ship?: Maybe<Ship>;
};


export type QueryusersArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Queryusers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Queryusers_by_pkArgs = {
  id: Scalars['uuid'];
};


export type QuerycapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycapsuleArgs = {
  id: Scalars['ID'];
};


export type QuerycoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerycoreArgs = {
  id: Scalars['ID'];
};


export type QuerydragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerydragonArgs = {
  id: Scalars['ID'];
};


export type QueryhistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryhistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryhistoryArgs = {
  id: Scalars['ID'];
};


export type QuerylandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylandpadArgs = {
  id: Scalars['ID'];
};


export type QuerylaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerylaunchArgs = {
  id: Scalars['ID'];
};


export type QuerylaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerylaunchpadArgs = {
  id: Scalars['ID'];
};


export type QuerymissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerymissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerymissionArgs = {
  id: Scalars['ID'];
};


export type QuerypayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerypayloadArgs = {
  id: Scalars['ID'];
};


export type QueryrocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryrocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryrocketArgs = {
  id: Scalars['ID'];
};


export type QueryshipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryshipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryshipArgs = {
  id: Scalars['ID'];
};

/** select columns of table "users" */
export type users_select_column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'rocket'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'twitter';

/** ordering options when selecting data from "users" */
export type users_order_by = {
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** column ordering options */
export type order_by =
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type users_bool_exp = {
  _and?: InputMaybe<Array<InputMaybe<users_bool_exp>>>;
  _not?: InputMaybe<users_bool_exp>;
  _or?: InputMaybe<Array<InputMaybe<users_bool_exp>>>;
  id?: InputMaybe<uuid_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  rocket?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<timestamptz_comparison_exp>;
  twitter?: InputMaybe<String_comparison_exp>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type uuid_comparison_exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type users = {
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamptz'];
  twitter?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type users_aggregate = {
  aggregate?: Maybe<users_aggregate_fields>;
  nodes: Array<users>;
};

/** aggregate fields of "users" */
export type users_aggregate_fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<users_max_fields>;
  min?: Maybe<users_min_fields>;
};


/** aggregate fields of "users" */
export type users_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<users_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type users_max_fields = {
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type users_min_fields = {
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']>;
  landings?: InputMaybe<Scalars['Int']>;
  mission?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Capsule = {
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dragon?: Maybe<Dragon>;
};

export type CapsuleMission = {
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Dragon = {
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars['Float']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Distance = {
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
};

export type DragonHeatShield = {
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
};

export type Mass = {
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Volume = {
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
};

export type DragonPressurizedCapsule = {
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
};

export type Force = {
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type DragonTrunk = {
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type Info = {
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars['Int']>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
};

export type Address = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type InfoLinks = {
  elon_twitter?: Maybe<Scalars['String']>;
  flickr?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']>;
  asds_landings?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  missions?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  rtls_attempts?: InputMaybe<Scalars['Int']>;
  rtls_landings?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  water_landing?: InputMaybe<Scalars['Boolean']>;
};

export type Core = {
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']>;
  flight_number?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  start?: InputMaybe<Scalars['Date']>;
};

export type History = {
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Date']>;
  event_date_utc?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  flight?: Maybe<Launch>;
};

export type Link = {
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_year?: Maybe<Scalars['String']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  static_fire_date_unix?: Maybe<Scalars['Date']>;
  static_fire_date_utc?: Maybe<Scalars['Date']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  ships?: Maybe<Array<Maybe<Ship>>>;
};

export type LaunchSite = {
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
};

export type LaunchLinks = {
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch_small?: Maybe<Scalars['String']>;
  mission_patch?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  rocket?: Maybe<Rocket>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  block?: Maybe<Scalars['Int']>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type Rocket = {
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars['Date']>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars['String']>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketEngines = {
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  engine_loss_max?: Maybe<Scalars['String']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
};

export type RocketFirstStage = {
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  number?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
};

export type RocketPayloadWeight = {
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloads = {
  option_1?: Maybe<Scalars['String']>;
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  height?: Maybe<Distance>;
  diameter?: Maybe<Distance>;
};

export type LaunchRocketSecondStage = {
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type Payload = {
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  orbit?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type LaunchTelemetry = {
  flight_club?: Maybe<Scalars['String']>;
};

export type Ship = {
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
};

export type ShipMission = {
  flight?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ShipLocation = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type HistoriesResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<History>>>;
};

export type Result = {
  totalCount?: Maybe<Scalars['Int']>;
};

export type Landpad = {
  attempted_landings?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  block?: InputMaybe<Scalars['Int']>;
  cap_serial?: InputMaybe<Scalars['String']>;
  capsule_reuse?: InputMaybe<Scalars['String']>;
  core_flight?: InputMaybe<Scalars['Int']>;
  core_reuse?: InputMaybe<Scalars['String']>;
  core_serial?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['Date']>;
  epoch?: InputMaybe<Scalars['Date']>;
  fairings_recovered?: InputMaybe<Scalars['String']>;
  fairings_recovery_attempt?: InputMaybe<Scalars['String']>;
  fairings_reuse?: InputMaybe<Scalars['String']>;
  fairings_reused?: InputMaybe<Scalars['String']>;
  fairings_ship?: InputMaybe<Scalars['String']>;
  gridfins?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  land_success?: InputMaybe<Scalars['String']>;
  landing_intent?: InputMaybe<Scalars['String']>;
  landing_type?: InputMaybe<Scalars['String']>;
  landing_vehicle?: InputMaybe<Scalars['String']>;
  launch_date_local?: InputMaybe<Scalars['Date']>;
  launch_date_utc?: InputMaybe<Scalars['Date']>;
  launch_success?: InputMaybe<Scalars['String']>;
  launch_year?: InputMaybe<Scalars['String']>;
  legs?: InputMaybe<Scalars['String']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  mission_id?: InputMaybe<Scalars['String']>;
  mission_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['String']>;
  rocket_id?: InputMaybe<Scalars['String']>;
  rocket_name?: InputMaybe<Scalars['String']>;
  rocket_type?: InputMaybe<Scalars['String']>;
  second_stage_block?: InputMaybe<Scalars['String']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
  ship?: InputMaybe<Scalars['String']>;
  side_core1_reuse?: InputMaybe<Scalars['String']>;
  side_core2_reuse?: InputMaybe<Scalars['String']>;
  site_id?: InputMaybe<Scalars['String']>;
  site_name_long?: InputMaybe<Scalars['String']>;
  site_name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Date']>;
  tbd?: InputMaybe<Scalars['String']>;
  tentative_max_precision?: InputMaybe<Scalars['String']>;
  tentative?: InputMaybe<Scalars['String']>;
};

export type LaunchesPastResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Launch>>>;
};

export type Launchpad = {
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
};

export type Mission = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type MissionResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Mission>>>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  epoch?: InputMaybe<Scalars['Date']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['ID']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['Boolean']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
};

export type Roadster = {
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  periapsis_au?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketsResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Rocket>>>;
};

export type ShipsFind = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  imo?: InputMaybe<Scalars['Int']>;
  mmsi?: InputMaybe<Scalars['Int']>;
  abs?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<Scalars['Int']>;
  weight_lbs?: InputMaybe<Scalars['Int']>;
  weight_kg?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['Int']>;
  home_port?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  speed_kn?: InputMaybe<Scalars['Int']>;
  course_deg?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  successful_landings?: InputMaybe<Scalars['Int']>;
  attempted_landings?: InputMaybe<Scalars['Int']>;
  mission?: InputMaybe<Scalars['String']>;
};

export type ShipsResult = {
  result?: Maybe<Result>;
  data?: Maybe<Array<Maybe<Ship>>>;
};

export type Mutation = {
  /** delete data from the table: "users" */
  delete_users?: Maybe<users_mutation_response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<users_mutation_response>;
  /** update data of the table: "users" */
  update_users?: Maybe<users_mutation_response>;
};


export type Mutationdelete_usersArgs = {
  where: users_bool_exp;
};


export type Mutationinsert_usersArgs = {
  objects: Array<users_insert_input>;
  on_conflict?: InputMaybe<users_on_conflict>;
};


export type Mutationupdate_usersArgs = {
  _set?: InputMaybe<users_set_input>;
  where: users_bool_exp;
};

/** response of any mutation on the table "users" */
export type users_mutation_response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<users>;
};

/** input type for inserting data into table "users" */
export type users_insert_input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  twitter?: InputMaybe<Scalars['String']>;
};

/** on conflict condition type for table "users" */
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: Array<users_update_column>;
};

/** unique or primary key constraints on table "users" */
export type users_constraint =
  /** unique or primary key constraint */
  | 'users_pkey';

/** update columns of table "users" */
export type users_update_column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'rocket'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'twitter';

/** input type for updating data in table "users" */
export type users_set_input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  /** fetch data from the table: "users" */
  users: Array<users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<users>;
};


export type SubscriptionusersArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Subscriptionusers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Subscriptionusers_by_pkArgs = {
  id: Scalars['uuid'];
};

/** conflict action */
export type conflict_action =
  /** ignore the insert on this row */
  | 'ignore'
  /** update the row with the given values */
  | 'update';

/** order by aggregate values of table "users" */
export type users_aggregate_order_by = {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<users_max_order_by>;
  min?: InputMaybe<users_min_order_by>;
};

/** order by max() on columns of table "users" */
export type users_max_order_by = {
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** order by min() on columns of table "users" */
export type users_min_order_by = {
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** input type for inserting array relation for remote table "users" */
export type users_arr_rel_insert_input = {
  data: Array<users_insert_input>;
  on_conflict?: InputMaybe<users_on_conflict>;
};

/** input type for inserting object relation for remote table "users" */
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: InputMaybe<users_on_conflict>;
};

export type CoreMission = {
  name?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
};

    }
    export type QueryTestSdk = {
  /** fetch data from the table: "users" **/
  users: InContextSdkMethod<TestTypes.Query['users'], TestTypes.QueryusersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "users" **/
  users_aggregate: InContextSdkMethod<TestTypes.Query['users_aggregate'], TestTypes.Queryusers_aggregateArgs, MeshContext>,
  /** fetch data from the table: "users" using primary key columns **/
  users_by_pk: InContextSdkMethod<TestTypes.Query['users_by_pk'], TestTypes.Queryusers_by_pkArgs, MeshContext>,
  /**  **/
  capsules: InContextSdkMethod<TestTypes.Query['capsules'], TestTypes.QuerycapsulesArgs, MeshContext>,
  /**  **/
  capsulesPast: InContextSdkMethod<TestTypes.Query['capsulesPast'], TestTypes.QuerycapsulesPastArgs, MeshContext>,
  /**  **/
  capsulesUpcoming: InContextSdkMethod<TestTypes.Query['capsulesUpcoming'], TestTypes.QuerycapsulesUpcomingArgs, MeshContext>,
  /**  **/
  capsule: InContextSdkMethod<TestTypes.Query['capsule'], TestTypes.QuerycapsuleArgs, MeshContext>,
  /**  **/
  company: InContextSdkMethod<TestTypes.Query['company'], {}, MeshContext>,
  /**  **/
  cores: InContextSdkMethod<TestTypes.Query['cores'], TestTypes.QuerycoresArgs, MeshContext>,
  /**  **/
  coresPast: InContextSdkMethod<TestTypes.Query['coresPast'], TestTypes.QuerycoresPastArgs, MeshContext>,
  /**  **/
  coresUpcoming: InContextSdkMethod<TestTypes.Query['coresUpcoming'], TestTypes.QuerycoresUpcomingArgs, MeshContext>,
  /**  **/
  core: InContextSdkMethod<TestTypes.Query['core'], TestTypes.QuerycoreArgs, MeshContext>,
  /**  **/
  dragons: InContextSdkMethod<TestTypes.Query['dragons'], TestTypes.QuerydragonsArgs, MeshContext>,
  /**  **/
  dragon: InContextSdkMethod<TestTypes.Query['dragon'], TestTypes.QuerydragonArgs, MeshContext>,
  /**  **/
  histories: InContextSdkMethod<TestTypes.Query['histories'], TestTypes.QueryhistoriesArgs, MeshContext>,
  /**  **/
  historiesResult: InContextSdkMethod<TestTypes.Query['historiesResult'], TestTypes.QueryhistoriesResultArgs, MeshContext>,
  /**  **/
  history: InContextSdkMethod<TestTypes.Query['history'], TestTypes.QueryhistoryArgs, MeshContext>,
  /**  **/
  landpads: InContextSdkMethod<TestTypes.Query['landpads'], TestTypes.QuerylandpadsArgs, MeshContext>,
  /**  **/
  landpad: InContextSdkMethod<TestTypes.Query['landpad'], TestTypes.QuerylandpadArgs, MeshContext>,
  /**  **/
  launches: InContextSdkMethod<TestTypes.Query['launches'], TestTypes.QuerylaunchesArgs, MeshContext>,
  /**  **/
  launchesPast: InContextSdkMethod<TestTypes.Query['launchesPast'], TestTypes.QuerylaunchesPastArgs, MeshContext>,
  /**  **/
  launchesPastResult: InContextSdkMethod<TestTypes.Query['launchesPastResult'], TestTypes.QuerylaunchesPastResultArgs, MeshContext>,
  /**  **/
  launchesUpcoming: InContextSdkMethod<TestTypes.Query['launchesUpcoming'], TestTypes.QuerylaunchesUpcomingArgs, MeshContext>,
  /**  **/
  launch: InContextSdkMethod<TestTypes.Query['launch'], TestTypes.QuerylaunchArgs, MeshContext>,
  /**  **/
  launchLatest: InContextSdkMethod<TestTypes.Query['launchLatest'], TestTypes.QuerylaunchLatestArgs, MeshContext>,
  /**  **/
  launchNext: InContextSdkMethod<TestTypes.Query['launchNext'], TestTypes.QuerylaunchNextArgs, MeshContext>,
  /**  **/
  launchpads: InContextSdkMethod<TestTypes.Query['launchpads'], TestTypes.QuerylaunchpadsArgs, MeshContext>,
  /**  **/
  launchpad: InContextSdkMethod<TestTypes.Query['launchpad'], TestTypes.QuerylaunchpadArgs, MeshContext>,
  /**  **/
  missions: InContextSdkMethod<TestTypes.Query['missions'], TestTypes.QuerymissionsArgs, MeshContext>,
  /**  **/
  missionsResult: InContextSdkMethod<TestTypes.Query['missionsResult'], TestTypes.QuerymissionsResultArgs, MeshContext>,
  /**  **/
  mission: InContextSdkMethod<TestTypes.Query['mission'], TestTypes.QuerymissionArgs, MeshContext>,
  /**  **/
  payloads: InContextSdkMethod<TestTypes.Query['payloads'], TestTypes.QuerypayloadsArgs, MeshContext>,
  /**  **/
  payload: InContextSdkMethod<TestTypes.Query['payload'], TestTypes.QuerypayloadArgs, MeshContext>,
  /**  **/
  roadster: InContextSdkMethod<TestTypes.Query['roadster'], {}, MeshContext>,
  /**  **/
  rockets: InContextSdkMethod<TestTypes.Query['rockets'], TestTypes.QueryrocketsArgs, MeshContext>,
  /**  **/
  rocketsResult: InContextSdkMethod<TestTypes.Query['rocketsResult'], TestTypes.QueryrocketsResultArgs, MeshContext>,
  /**  **/
  rocket: InContextSdkMethod<TestTypes.Query['rocket'], TestTypes.QueryrocketArgs, MeshContext>,
  /**  **/
  ships: InContextSdkMethod<TestTypes.Query['ships'], TestTypes.QueryshipsArgs, MeshContext>,
  /**  **/
  shipsResult: InContextSdkMethod<TestTypes.Query['shipsResult'], TestTypes.QueryshipsResultArgs, MeshContext>,
  /**  **/
  ship: InContextSdkMethod<TestTypes.Query['ship'], TestTypes.QueryshipArgs, MeshContext>
};

export type MutationTestSdk = {
  /** delete data from the table: "users" **/
  delete_users: InContextSdkMethod<TestTypes.Mutation['delete_users'], TestTypes.Mutationdelete_usersArgs, MeshContext>,
  /** insert data into the table: "users" **/
  insert_users: InContextSdkMethod<TestTypes.Mutation['insert_users'], TestTypes.Mutationinsert_usersArgs, MeshContext>,
  /** update data of the table: "users" **/
  update_users: InContextSdkMethod<TestTypes.Mutation['update_users'], TestTypes.Mutationupdate_usersArgs, MeshContext>
};

export type SubscriptionTestSdk = {
  /** fetch data from the table: "users" **/
  users: InContextSdkMethod<TestTypes.Subscription['users'], TestTypes.SubscriptionusersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "users" **/
  users_aggregate: InContextSdkMethod<TestTypes.Subscription['users_aggregate'], TestTypes.Subscriptionusers_aggregateArgs, MeshContext>,
  /** fetch data from the table: "users" using primary key columns **/
  users_by_pk: InContextSdkMethod<TestTypes.Subscription['users_by_pk'], TestTypes.Subscriptionusers_by_pkArgs, MeshContext>
};

export type TestContext = {
      ["test"]: { Query: QueryTestSdk, Mutation: MutationTestSdk, Subscription: SubscriptionTestSdk },
    };

export type MeshContext = TestContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const { sdkRequesterFactory } = await getBuiltMesh();
  return getSdk<TOperationContext>(sdkRequesterFactory(globalContext));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;