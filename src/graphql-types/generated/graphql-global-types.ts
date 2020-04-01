/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "city"
 */
export enum city_constraint {
  city_pkey = "city_pkey",
}

/**
 * unique or primary key constraints on table "city_translation"
 */
export enum city_translation_constraint {
  city_translation_pkey = "city_translation_pkey",
}

/**
 * update columns of table "city_translation"
 */
export enum city_translation_update_column {
  cityId = "cityId",
  language = "language",
  text = "text",
}

/**
 * update columns of table "city"
 */
export enum city_update_column {
  districtId = "districtId",
  id = "id",
  location = "location",
  name = "name",
  postcode = "postcode",
  sourceId = "sourceId",
}

/**
 * unique or primary key constraints on table "country"
 */
export enum country_constraint {
  country_name_key = "country_name_key",
  country_pkey = "country_pkey",
}

/**
 * update columns of table "country"
 */
export enum country_update_column {
  code = "code",
  id = "id",
  name = "name",
}

/**
 * unique or primary key constraints on table "distributor_city"
 */
export enum distributor_city_constraint {
  distributor_city_pkey = "distributor_city_pkey",
}

/**
 * update columns of table "distributor_city"
 */
export enum distributor_city_update_column {
  cityId = "cityId",
  distributorId = "distributorId",
  id = "id",
}

/**
 * unique or primary key constraints on table "distributor"
 */
export enum distributor_constraint {
  distributor_pkey = "distributor_pkey",
}

/**
 * unique or primary key constraints on table "distributor_item_city"
 */
export enum distributor_item_city_constraint {
  distributor_item_city_pkey = "distributor_item_city_pkey",
}

/**
 * update columns of table "distributor_item_city"
 */
export enum distributor_item_city_update_column {
  cityId = "cityId",
  distributorItemId = "distributorItemId",
}

/**
 * unique or primary key constraints on table "distributor_item"
 */
export enum distributor_item_constraint {
  distributor_item_pkey = "distributor_item_pkey",
}

/**
 * update columns of table "distributor_item"
 */
export enum distributor_item_update_column {
  created_at = "created_at",
  deliveryFee = "deliveryFee",
  distributorId = "distributorId",
  id = "id",
  itemCategoryId = "itemCategoryId",
  name = "name",
  price = "price",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "distributor_pack_city"
 */
export enum distributor_pack_city_constraint {
  distributor_pack_city_pkey = "distributor_pack_city_pkey",
}

/**
 * update columns of table "distributor_pack_city"
 */
export enum distributor_pack_city_update_column {
  cityId = "cityId",
  distributorPackId = "distributorPackId",
}

/**
 * unique or primary key constraints on table "distributor_pack"
 */
export enum distributor_pack_constraint {
  distributor_pack_pkey = "distributor_pack_pkey",
}

/**
 * update columns of table "distributor_pack"
 */
export enum distributor_pack_update_column {
  content = "content",
  created_at = "created_at",
  deliveryFee = "deliveryFee",
  distributorId = "distributorId",
  id = "id",
  name = "name",
  price = "price",
  updated_at = "updated_at",
}

/**
 * update columns of table "distributor"
 */
export enum distributor_update_column {
  active = "active",
  countryId = "countryId",
  created_at = "created_at",
  email = "email",
  id = "id",
  name = "name",
  phoneNumber = "phoneNumber",
  updated_at = "updated_at",
  website = "website",
}

/**
 * unique or primary key constraints on table "district"
 */
export enum district_constraint {
  district_pkey = "district_pkey",
}

/**
 * unique or primary key constraints on table "district_translation"
 */
export enum district_translation_constraint {
  district_translation_pkey = "district_translation_pkey",
}

/**
 * update columns of table "district_translation"
 */
export enum district_translation_update_column {
  districtId = "districtId",
  language = "language",
  text = "text",
}

/**
 * update columns of table "district"
 */
export enum district_update_column {
  countryId = "countryId",
  id = "id",
  name = "name",
  sourceId = "sourceId",
}

/**
 * unique or primary key constraints on table "item_category"
 */
export enum item_category_constraint {
  item_category_name_key = "item_category_name_key",
  item_category_pkey = "item_category_pkey",
}

/**
 * unique or primary key constraints on table "item_category_need"
 */
export enum item_category_need_constraint {
  item_category_need_pkey = "item_category_need_pkey",
}

/**
 * update columns of table "item_category_need"
 */
export enum item_category_need_update_column {
  itemCategoryId = "itemCategoryId",
  needId = "needId",
}

/**
 * update columns of table "item_category"
 */
export enum item_category_update_column {
  id = "id",
  name = "name",
}

/**
 * unique or primary key constraints on table "need"
 */
export enum need_constraint {
  need_pkey = "need_pkey",
}

/**
 * update columns of table "need"
 */
export enum need_update_column {
  active = "active",
  cityId = "cityId",
  contactNumber = "contactNumber",
  contactPersonName = "contactPersonName",
  countryId = "countryId",
  created_at = "created_at",
  id = "id",
  numberOfPeople = "numberOfPeople",
  updated_at = "updated_at",
}

/**
 * column ordering options
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last",
}

/**
 * expression to compare columns of type Boolean. All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * expression to compare columns of type Int. All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * expression to compare columns of type bpchar. All fields are combined with logical 'AND'.
 */
export interface bpchar_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * order by aggregate values of table "city"
 */
export interface city_aggregate_order_by {
  avg?: city_avg_order_by | null;
  count?: order_by | null;
  max?: city_max_order_by | null;
  min?: city_min_order_by | null;
  stddev?: city_stddev_order_by | null;
  stddev_pop?: city_stddev_pop_order_by | null;
  stddev_samp?: city_stddev_samp_order_by | null;
  sum?: city_sum_order_by | null;
  var_pop?: city_var_pop_order_by | null;
  var_samp?: city_var_samp_order_by | null;
  variance?: city_variance_order_by | null;
}

/**
 * input type for inserting array relation for remote table "city"
 */
export interface city_arr_rel_insert_input {
  data: city_insert_input[];
  on_conflict?: city_on_conflict | null;
}

/**
 * order by avg() on columns of table "city"
 */
export interface city_avg_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "city". All fields are combined with a logical 'AND'.
 */
export interface city_bool_exp {
  _and?: (city_bool_exp | null)[] | null;
  _not?: city_bool_exp | null;
  _or?: (city_bool_exp | null)[] | null;
  city_translations?: city_translation_bool_exp | null;
  distributor_cities?: distributor_city_bool_exp | null;
  distributor_item_cities?: distributor_item_city_bool_exp | null;
  distributor_pack_cities?: distributor_pack_city_bool_exp | null;
  district?: district_bool_exp | null;
  districtId?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  location?: geography_comparison_exp | null;
  name?: String_comparison_exp | null;
  needs?: need_bool_exp | null;
  postcode?: Int_comparison_exp | null;
  sourceId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "city"
 */
export interface city_insert_input {
  city_translations?: city_translation_arr_rel_insert_input | null;
  distributor_cities?: distributor_city_arr_rel_insert_input | null;
  distributor_item_cities?: distributor_item_city_arr_rel_insert_input | null;
  distributor_pack_cities?: distributor_pack_city_arr_rel_insert_input | null;
  district?: district_obj_rel_insert_input | null;
  districtId?: any | null;
  id?: any | null;
  location?: any | null;
  name?: string | null;
  needs?: need_arr_rel_insert_input | null;
  postcode?: number | null;
  sourceId?: number | null;
}

/**
 * order by max() on columns of table "city"
 */
export interface city_max_order_by {
  name?: order_by | null;
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by min() on columns of table "city"
 */
export interface city_min_order_by {
  name?: order_by | null;
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * input type for inserting object relation for remote table "city"
 */
export interface city_obj_rel_insert_input {
  data: city_insert_input;
  on_conflict?: city_on_conflict | null;
}

/**
 * on conflict condition type for table "city"
 */
export interface city_on_conflict {
  constraint: city_constraint;
  update_columns: city_update_column[];
  where?: city_bool_exp | null;
}

/**
 * ordering options when selecting data from "city"
 */
export interface city_order_by {
  city_translations_aggregate?: city_translation_aggregate_order_by | null;
  distributor_cities_aggregate?: distributor_city_aggregate_order_by | null;
  distributor_item_cities_aggregate?: distributor_item_city_aggregate_order_by | null;
  distributor_pack_cities_aggregate?: distributor_pack_city_aggregate_order_by | null;
  district?: district_order_by | null;
  districtId?: order_by | null;
  id?: order_by | null;
  location?: order_by | null;
  name?: order_by | null;
  needs_aggregate?: need_aggregate_order_by | null;
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by stddev() on columns of table "city"
 */
export interface city_stddev_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "city"
 */
export interface city_stddev_pop_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "city"
 */
export interface city_stddev_samp_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by sum() on columns of table "city"
 */
export interface city_sum_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by aggregate values of table "city_translation"
 */
export interface city_translation_aggregate_order_by {
  count?: order_by | null;
  max?: city_translation_max_order_by | null;
  min?: city_translation_min_order_by | null;
}

/**
 * input type for inserting array relation for remote table "city_translation"
 */
export interface city_translation_arr_rel_insert_input {
  data: city_translation_insert_input[];
  on_conflict?: city_translation_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "city_translation". All fields are combined with a logical 'AND'.
 */
export interface city_translation_bool_exp {
  _and?: (city_translation_bool_exp | null)[] | null;
  _not?: city_translation_bool_exp | null;
  _or?: (city_translation_bool_exp | null)[] | null;
  city?: city_bool_exp | null;
  cityId?: uuid_comparison_exp | null;
  language?: bpchar_comparison_exp | null;
  text?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "city_translation"
 */
export interface city_translation_insert_input {
  city?: city_obj_rel_insert_input | null;
  cityId?: any | null;
  language?: any | null;
  text?: string | null;
}

/**
 * order by max() on columns of table "city_translation"
 */
export interface city_translation_max_order_by {
  text?: order_by | null;
}

/**
 * order by min() on columns of table "city_translation"
 */
export interface city_translation_min_order_by {
  text?: order_by | null;
}

/**
 * on conflict condition type for table "city_translation"
 */
export interface city_translation_on_conflict {
  constraint: city_translation_constraint;
  update_columns: city_translation_update_column[];
  where?: city_translation_bool_exp | null;
}

/**
 * order by var_pop() on columns of table "city"
 */
export interface city_var_pop_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by var_samp() on columns of table "city"
 */
export interface city_var_samp_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by variance() on columns of table "city"
 */
export interface city_variance_order_by {
  postcode?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "country". All fields are combined with a logical 'AND'.
 */
export interface country_bool_exp {
  _and?: (country_bool_exp | null)[] | null;
  _not?: country_bool_exp | null;
  _or?: (country_bool_exp | null)[] | null;
  code?: bpchar_comparison_exp | null;
  distributors?: distributor_bool_exp | null;
  districts?: district_bool_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  needs?: need_bool_exp | null;
}

/**
 * input type for inserting data into table "country"
 */
export interface country_insert_input {
  code?: any | null;
  distributors?: distributor_arr_rel_insert_input | null;
  districts?: district_arr_rel_insert_input | null;
  id?: any | null;
  name?: string | null;
  needs?: need_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "country"
 */
export interface country_obj_rel_insert_input {
  data: country_insert_input;
  on_conflict?: country_on_conflict | null;
}

/**
 * on conflict condition type for table "country"
 */
export interface country_on_conflict {
  constraint: country_constraint;
  update_columns: country_update_column[];
  where?: country_bool_exp | null;
}

/**
 * ordering options when selecting data from "country"
 */
export interface country_order_by {
  code?: order_by | null;
  distributors_aggregate?: distributor_aggregate_order_by | null;
  districts_aggregate?: district_aggregate_order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  needs_aggregate?: need_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "distributor"
 */
export interface distributor_aggregate_order_by {
  count?: order_by | null;
  max?: distributor_max_order_by | null;
  min?: distributor_min_order_by | null;
}

/**
 * input type for inserting array relation for remote table "distributor"
 */
export interface distributor_arr_rel_insert_input {
  data: distributor_insert_input[];
  on_conflict?: distributor_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "distributor". All fields are combined with a logical 'AND'.
 */
export interface distributor_bool_exp {
  _and?: (distributor_bool_exp | null)[] | null;
  _not?: distributor_bool_exp | null;
  _or?: (distributor_bool_exp | null)[] | null;
  active?: Boolean_comparison_exp | null;
  country?: country_bool_exp | null;
  countryId?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  distributor_cities?: distributor_city_bool_exp | null;
  distributor_items?: distributor_item_bool_exp | null;
  distributor_packs?: distributor_pack_bool_exp | null;
  email?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  phoneNumber?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  website?: String_comparison_exp | null;
}

/**
 * order by aggregate values of table "distributor_city"
 */
export interface distributor_city_aggregate_order_by {
  count?: order_by | null;
}

/**
 * input type for inserting array relation for remote table "distributor_city"
 */
export interface distributor_city_arr_rel_insert_input {
  data: distributor_city_insert_input[];
  on_conflict?: distributor_city_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "distributor_city". All fields are combined with a logical 'AND'.
 */
export interface distributor_city_bool_exp {
  _and?: (distributor_city_bool_exp | null)[] | null;
  _not?: distributor_city_bool_exp | null;
  _or?: (distributor_city_bool_exp | null)[] | null;
  city?: city_bool_exp | null;
  cityId?: uuid_comparison_exp | null;
  distributor?: distributor_bool_exp | null;
  distributorId?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "distributor_city"
 */
export interface distributor_city_insert_input {
  city?: city_obj_rel_insert_input | null;
  cityId?: any | null;
  distributor?: distributor_obj_rel_insert_input | null;
  distributorId?: any | null;
  id?: any | null;
}

/**
 * on conflict condition type for table "distributor_city"
 */
export interface distributor_city_on_conflict {
  constraint: distributor_city_constraint;
  update_columns: distributor_city_update_column[];
  where?: distributor_city_bool_exp | null;
}

/**
 * input type for inserting data into table "distributor"
 */
export interface distributor_insert_input {
  active?: boolean | null;
  country?: country_obj_rel_insert_input | null;
  countryId?: any | null;
  created_at?: any | null;
  distributor_cities?: distributor_city_arr_rel_insert_input | null;
  distributor_items?: distributor_item_arr_rel_insert_input | null;
  distributor_packs?: distributor_pack_arr_rel_insert_input | null;
  email?: string | null;
  id?: any | null;
  name?: string | null;
  phoneNumber?: string | null;
  updated_at?: any | null;
  website?: string | null;
}

/**
 * order by aggregate values of table "distributor_item"
 */
export interface distributor_item_aggregate_order_by {
  avg?: distributor_item_avg_order_by | null;
  count?: order_by | null;
  max?: distributor_item_max_order_by | null;
  min?: distributor_item_min_order_by | null;
  stddev?: distributor_item_stddev_order_by | null;
  stddev_pop?: distributor_item_stddev_pop_order_by | null;
  stddev_samp?: distributor_item_stddev_samp_order_by | null;
  sum?: distributor_item_sum_order_by | null;
  var_pop?: distributor_item_var_pop_order_by | null;
  var_samp?: distributor_item_var_samp_order_by | null;
  variance?: distributor_item_variance_order_by | null;
}

/**
 * input type for inserting array relation for remote table "distributor_item"
 */
export interface distributor_item_arr_rel_insert_input {
  data: distributor_item_insert_input[];
  on_conflict?: distributor_item_on_conflict | null;
}

/**
 * order by avg() on columns of table "distributor_item"
 */
export interface distributor_item_avg_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "distributor_item". All fields are combined with a logical 'AND'.
 */
export interface distributor_item_bool_exp {
  _and?: (distributor_item_bool_exp | null)[] | null;
  _not?: distributor_item_bool_exp | null;
  _or?: (distributor_item_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  deliveryFee?: Int_comparison_exp | null;
  distributor?: distributor_bool_exp | null;
  distributorId?: uuid_comparison_exp | null;
  distributor_item_cities?: distributor_item_city_bool_exp | null;
  id?: uuid_comparison_exp | null;
  itemCategoryId?: uuid_comparison_exp | null;
  item_category?: item_category_bool_exp | null;
  name?: String_comparison_exp | null;
  price?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * order by aggregate values of table "distributor_item_city"
 */
export interface distributor_item_city_aggregate_order_by {
  count?: order_by | null;
}

/**
 * input type for inserting array relation for remote table "distributor_item_city"
 */
export interface distributor_item_city_arr_rel_insert_input {
  data: distributor_item_city_insert_input[];
  on_conflict?: distributor_item_city_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "distributor_item_city". All fields are combined with a logical 'AND'.
 */
export interface distributor_item_city_bool_exp {
  _and?: (distributor_item_city_bool_exp | null)[] | null;
  _not?: distributor_item_city_bool_exp | null;
  _or?: (distributor_item_city_bool_exp | null)[] | null;
  city?: city_bool_exp | null;
  cityId?: uuid_comparison_exp | null;
  distributorItemId?: uuid_comparison_exp | null;
  distributor_item?: distributor_item_bool_exp | null;
}

/**
 * input type for inserting data into table "distributor_item_city"
 */
export interface distributor_item_city_insert_input {
  city?: city_obj_rel_insert_input | null;
  cityId?: any | null;
  distributorItemId?: any | null;
  distributor_item?: distributor_item_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "distributor_item_city"
 */
export interface distributor_item_city_on_conflict {
  constraint: distributor_item_city_constraint;
  update_columns: distributor_item_city_update_column[];
  where?: distributor_item_city_bool_exp | null;
}

/**
 * input type for inserting data into table "distributor_item"
 */
export interface distributor_item_insert_input {
  created_at?: any | null;
  deliveryFee?: number | null;
  distributor?: distributor_obj_rel_insert_input | null;
  distributorId?: any | null;
  distributor_item_cities?: distributor_item_city_arr_rel_insert_input | null;
  id?: any | null;
  itemCategoryId?: any | null;
  item_category?: item_category_obj_rel_insert_input | null;
  name?: string | null;
  price?: number | null;
  updated_at?: any | null;
}

/**
 * order by max() on columns of table "distributor_item"
 */
export interface distributor_item_max_order_by {
  created_at?: order_by | null;
  deliveryFee?: order_by | null;
  name?: order_by | null;
  price?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * order by min() on columns of table "distributor_item"
 */
export interface distributor_item_min_order_by {
  created_at?: order_by | null;
  deliveryFee?: order_by | null;
  name?: order_by | null;
  price?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * input type for inserting object relation for remote table "distributor_item"
 */
export interface distributor_item_obj_rel_insert_input {
  data: distributor_item_insert_input;
  on_conflict?: distributor_item_on_conflict | null;
}

/**
 * on conflict condition type for table "distributor_item"
 */
export interface distributor_item_on_conflict {
  constraint: distributor_item_constraint;
  update_columns: distributor_item_update_column[];
  where?: distributor_item_bool_exp | null;
}

/**
 * order by stddev() on columns of table "distributor_item"
 */
export interface distributor_item_stddev_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "distributor_item"
 */
export interface distributor_item_stddev_pop_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "distributor_item"
 */
export interface distributor_item_stddev_samp_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by sum() on columns of table "distributor_item"
 */
export interface distributor_item_sum_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by var_pop() on columns of table "distributor_item"
 */
export interface distributor_item_var_pop_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by var_samp() on columns of table "distributor_item"
 */
export interface distributor_item_var_samp_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by variance() on columns of table "distributor_item"
 */
export interface distributor_item_variance_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by max() on columns of table "distributor"
 */
export interface distributor_max_order_by {
  created_at?: order_by | null;
  email?: order_by | null;
  name?: order_by | null;
  phoneNumber?: order_by | null;
  updated_at?: order_by | null;
  website?: order_by | null;
}

/**
 * order by min() on columns of table "distributor"
 */
export interface distributor_min_order_by {
  created_at?: order_by | null;
  email?: order_by | null;
  name?: order_by | null;
  phoneNumber?: order_by | null;
  updated_at?: order_by | null;
  website?: order_by | null;
}

/**
 * input type for inserting object relation for remote table "distributor"
 */
export interface distributor_obj_rel_insert_input {
  data: distributor_insert_input;
  on_conflict?: distributor_on_conflict | null;
}

/**
 * on conflict condition type for table "distributor"
 */
export interface distributor_on_conflict {
  constraint: distributor_constraint;
  update_columns: distributor_update_column[];
  where?: distributor_bool_exp | null;
}

/**
 * ordering options when selecting data from "distributor"
 */
export interface distributor_order_by {
  active?: order_by | null;
  country?: country_order_by | null;
  countryId?: order_by | null;
  created_at?: order_by | null;
  distributor_cities_aggregate?: distributor_city_aggregate_order_by | null;
  distributor_items_aggregate?: distributor_item_aggregate_order_by | null;
  distributor_packs_aggregate?: distributor_pack_aggregate_order_by | null;
  email?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  phoneNumber?: order_by | null;
  updated_at?: order_by | null;
  website?: order_by | null;
}

/**
 * order by aggregate values of table "distributor_pack"
 */
export interface distributor_pack_aggregate_order_by {
  avg?: distributor_pack_avg_order_by | null;
  count?: order_by | null;
  max?: distributor_pack_max_order_by | null;
  min?: distributor_pack_min_order_by | null;
  stddev?: distributor_pack_stddev_order_by | null;
  stddev_pop?: distributor_pack_stddev_pop_order_by | null;
  stddev_samp?: distributor_pack_stddev_samp_order_by | null;
  sum?: distributor_pack_sum_order_by | null;
  var_pop?: distributor_pack_var_pop_order_by | null;
  var_samp?: distributor_pack_var_samp_order_by | null;
  variance?: distributor_pack_variance_order_by | null;
}

/**
 * input type for inserting array relation for remote table "distributor_pack"
 */
export interface distributor_pack_arr_rel_insert_input {
  data: distributor_pack_insert_input[];
  on_conflict?: distributor_pack_on_conflict | null;
}

/**
 * order by avg() on columns of table "distributor_pack"
 */
export interface distributor_pack_avg_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "distributor_pack". All fields are combined with a logical 'AND'.
 */
export interface distributor_pack_bool_exp {
  _and?: (distributor_pack_bool_exp | null)[] | null;
  _not?: distributor_pack_bool_exp | null;
  _or?: (distributor_pack_bool_exp | null)[] | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  deliveryFee?: Int_comparison_exp | null;
  distributor?: distributor_bool_exp | null;
  distributorId?: uuid_comparison_exp | null;
  distributor_pack_cities?: distributor_pack_city_bool_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  price?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * order by aggregate values of table "distributor_pack_city"
 */
export interface distributor_pack_city_aggregate_order_by {
  count?: order_by | null;
}

/**
 * input type for inserting array relation for remote table "distributor_pack_city"
 */
export interface distributor_pack_city_arr_rel_insert_input {
  data: distributor_pack_city_insert_input[];
  on_conflict?: distributor_pack_city_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "distributor_pack_city". All fields are combined with a logical 'AND'.
 */
export interface distributor_pack_city_bool_exp {
  _and?: (distributor_pack_city_bool_exp | null)[] | null;
  _not?: distributor_pack_city_bool_exp | null;
  _or?: (distributor_pack_city_bool_exp | null)[] | null;
  city?: city_bool_exp | null;
  cityId?: uuid_comparison_exp | null;
  distributorPackId?: uuid_comparison_exp | null;
  distributor_pack?: distributor_pack_bool_exp | null;
}

/**
 * input type for inserting data into table "distributor_pack_city"
 */
export interface distributor_pack_city_insert_input {
  city?: city_obj_rel_insert_input | null;
  cityId?: any | null;
  distributorPackId?: any | null;
  distributor_pack?: distributor_pack_obj_rel_insert_input | null;
}

/**
 * on conflict condition type for table "distributor_pack_city"
 */
export interface distributor_pack_city_on_conflict {
  constraint: distributor_pack_city_constraint;
  update_columns: distributor_pack_city_update_column[];
  where?: distributor_pack_city_bool_exp | null;
}

/**
 * input type for inserting data into table "distributor_pack"
 */
export interface distributor_pack_insert_input {
  content?: string | null;
  created_at?: any | null;
  deliveryFee?: number | null;
  distributor?: distributor_obj_rel_insert_input | null;
  distributorId?: any | null;
  distributor_pack_cities?: distributor_pack_city_arr_rel_insert_input | null;
  id?: any | null;
  name?: string | null;
  price?: number | null;
  updated_at?: any | null;
}

/**
 * order by max() on columns of table "distributor_pack"
 */
export interface distributor_pack_max_order_by {
  content?: order_by | null;
  created_at?: order_by | null;
  deliveryFee?: order_by | null;
  name?: order_by | null;
  price?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * order by min() on columns of table "distributor_pack"
 */
export interface distributor_pack_min_order_by {
  content?: order_by | null;
  created_at?: order_by | null;
  deliveryFee?: order_by | null;
  name?: order_by | null;
  price?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * input type for inserting object relation for remote table "distributor_pack"
 */
export interface distributor_pack_obj_rel_insert_input {
  data: distributor_pack_insert_input;
  on_conflict?: distributor_pack_on_conflict | null;
}

/**
 * on conflict condition type for table "distributor_pack"
 */
export interface distributor_pack_on_conflict {
  constraint: distributor_pack_constraint;
  update_columns: distributor_pack_update_column[];
  where?: distributor_pack_bool_exp | null;
}

/**
 * order by stddev() on columns of table "distributor_pack"
 */
export interface distributor_pack_stddev_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "distributor_pack"
 */
export interface distributor_pack_stddev_pop_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "distributor_pack"
 */
export interface distributor_pack_stddev_samp_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by sum() on columns of table "distributor_pack"
 */
export interface distributor_pack_sum_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by var_pop() on columns of table "distributor_pack"
 */
export interface distributor_pack_var_pop_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by var_samp() on columns of table "distributor_pack"
 */
export interface distributor_pack_var_samp_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by variance() on columns of table "distributor_pack"
 */
export interface distributor_pack_variance_order_by {
  deliveryFee?: order_by | null;
  price?: order_by | null;
}

/**
 * order by aggregate values of table "district"
 */
export interface district_aggregate_order_by {
  avg?: district_avg_order_by | null;
  count?: order_by | null;
  max?: district_max_order_by | null;
  min?: district_min_order_by | null;
  stddev?: district_stddev_order_by | null;
  stddev_pop?: district_stddev_pop_order_by | null;
  stddev_samp?: district_stddev_samp_order_by | null;
  sum?: district_sum_order_by | null;
  var_pop?: district_var_pop_order_by | null;
  var_samp?: district_var_samp_order_by | null;
  variance?: district_variance_order_by | null;
}

/**
 * input type for inserting array relation for remote table "district"
 */
export interface district_arr_rel_insert_input {
  data: district_insert_input[];
  on_conflict?: district_on_conflict | null;
}

/**
 * order by avg() on columns of table "district"
 */
export interface district_avg_order_by {
  sourceId?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "district". All fields are combined with a logical 'AND'.
 */
export interface district_bool_exp {
  _and?: (district_bool_exp | null)[] | null;
  _not?: district_bool_exp | null;
  _or?: (district_bool_exp | null)[] | null;
  cities?: city_bool_exp | null;
  country?: country_bool_exp | null;
  countryId?: uuid_comparison_exp | null;
  district_translations?: district_translation_bool_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  sourceId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "district"
 */
export interface district_insert_input {
  cities?: city_arr_rel_insert_input | null;
  country?: country_obj_rel_insert_input | null;
  countryId?: any | null;
  district_translations?: district_translation_arr_rel_insert_input | null;
  id?: any | null;
  name?: string | null;
  sourceId?: number | null;
}

/**
 * order by max() on columns of table "district"
 */
export interface district_max_order_by {
  name?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by min() on columns of table "district"
 */
export interface district_min_order_by {
  name?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * input type for inserting object relation for remote table "district"
 */
export interface district_obj_rel_insert_input {
  data: district_insert_input;
  on_conflict?: district_on_conflict | null;
}

/**
 * on conflict condition type for table "district"
 */
export interface district_on_conflict {
  constraint: district_constraint;
  update_columns: district_update_column[];
  where?: district_bool_exp | null;
}

/**
 * ordering options when selecting data from "district"
 */
export interface district_order_by {
  cities_aggregate?: city_aggregate_order_by | null;
  country?: country_order_by | null;
  countryId?: order_by | null;
  district_translations_aggregate?: district_translation_aggregate_order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  sourceId?: order_by | null;
}

/**
 * order by stddev() on columns of table "district"
 */
export interface district_stddev_order_by {
  sourceId?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "district"
 */
export interface district_stddev_pop_order_by {
  sourceId?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "district"
 */
export interface district_stddev_samp_order_by {
  sourceId?: order_by | null;
}

/**
 * order by sum() on columns of table "district"
 */
export interface district_sum_order_by {
  sourceId?: order_by | null;
}

/**
 * order by aggregate values of table "district_translation"
 */
export interface district_translation_aggregate_order_by {
  count?: order_by | null;
  max?: district_translation_max_order_by | null;
  min?: district_translation_min_order_by | null;
}

/**
 * input type for inserting array relation for remote table "district_translation"
 */
export interface district_translation_arr_rel_insert_input {
  data: district_translation_insert_input[];
  on_conflict?: district_translation_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "district_translation". All fields are combined with a logical 'AND'.
 */
export interface district_translation_bool_exp {
  _and?: (district_translation_bool_exp | null)[] | null;
  _not?: district_translation_bool_exp | null;
  _or?: (district_translation_bool_exp | null)[] | null;
  district?: district_bool_exp | null;
  districtId?: uuid_comparison_exp | null;
  language?: bpchar_comparison_exp | null;
  text?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "district_translation"
 */
export interface district_translation_insert_input {
  district?: district_obj_rel_insert_input | null;
  districtId?: any | null;
  language?: any | null;
  text?: string | null;
}

/**
 * order by max() on columns of table "district_translation"
 */
export interface district_translation_max_order_by {
  text?: order_by | null;
}

/**
 * order by min() on columns of table "district_translation"
 */
export interface district_translation_min_order_by {
  text?: order_by | null;
}

/**
 * on conflict condition type for table "district_translation"
 */
export interface district_translation_on_conflict {
  constraint: district_translation_constraint;
  update_columns: district_translation_update_column[];
  where?: district_translation_bool_exp | null;
}

/**
 * order by var_pop() on columns of table "district"
 */
export interface district_var_pop_order_by {
  sourceId?: order_by | null;
}

/**
 * order by var_samp() on columns of table "district"
 */
export interface district_var_samp_order_by {
  sourceId?: order_by | null;
}

/**
 * order by variance() on columns of table "district"
 */
export interface district_variance_order_by {
  sourceId?: order_by | null;
}

/**
 * Expression to compare the result of casting a column of type geography. Multiple
 * cast targets are combined with logical 'AND'.
 */
export interface geography_cast_exp {
  geometry?: geometry_comparison_exp | null;
}

/**
 * expression to compare columns of type geography. All fields are combined with logical 'AND'.
 */
export interface geography_comparison_exp {
  _cast?: geography_cast_exp | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
  _st_d_within?: st_d_within_geography_input | null;
  _st_intersects?: any | null;
}

/**
 * Expression to compare the result of casting a column of type geometry. Multiple
 * cast targets are combined with logical 'AND'.
 */
export interface geometry_cast_exp {
  geography?: geography_comparison_exp | null;
}

/**
 * expression to compare columns of type geometry. All fields are combined with logical 'AND'.
 */
export interface geometry_comparison_exp {
  _cast?: geometry_cast_exp | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
  _st_contains?: any | null;
  _st_crosses?: any | null;
  _st_d_within?: st_d_within_input | null;
  _st_equals?: any | null;
  _st_intersects?: any | null;
  _st_overlaps?: any | null;
  _st_touches?: any | null;
  _st_within?: any | null;
}

/**
 * Boolean expression to filter rows from the table "item_category". All fields are combined with a logical 'AND'.
 */
export interface item_category_bool_exp {
  _and?: (item_category_bool_exp | null)[] | null;
  _not?: item_category_bool_exp | null;
  _or?: (item_category_bool_exp | null)[] | null;
  distributor_items?: distributor_item_bool_exp | null;
  id?: uuid_comparison_exp | null;
  item_category_needs?: item_category_need_bool_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "item_category"
 */
export interface item_category_insert_input {
  distributor_items?: distributor_item_arr_rel_insert_input | null;
  id?: any | null;
  item_category_needs?: item_category_need_arr_rel_insert_input | null;
  name?: string | null;
}

/**
 * order by aggregate values of table "item_category_need"
 */
export interface item_category_need_aggregate_order_by {
  count?: order_by | null;
}

/**
 * input type for inserting array relation for remote table "item_category_need"
 */
export interface item_category_need_arr_rel_insert_input {
  data: item_category_need_insert_input[];
  on_conflict?: item_category_need_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "item_category_need". All fields are combined with a logical 'AND'.
 */
export interface item_category_need_bool_exp {
  _and?: (item_category_need_bool_exp | null)[] | null;
  _not?: item_category_need_bool_exp | null;
  _or?: (item_category_need_bool_exp | null)[] | null;
  itemCategoryId?: uuid_comparison_exp | null;
  item_category?: item_category_bool_exp | null;
  need?: need_bool_exp | null;
  needId?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "item_category_need"
 */
export interface item_category_need_insert_input {
  itemCategoryId?: any | null;
  item_category?: item_category_obj_rel_insert_input | null;
  need?: need_obj_rel_insert_input | null;
  needId?: any | null;
}

/**
 * on conflict condition type for table "item_category_need"
 */
export interface item_category_need_on_conflict {
  constraint: item_category_need_constraint;
  update_columns: item_category_need_update_column[];
  where?: item_category_need_bool_exp | null;
}

/**
 * input type for inserting object relation for remote table "item_category"
 */
export interface item_category_obj_rel_insert_input {
  data: item_category_insert_input;
  on_conflict?: item_category_on_conflict | null;
}

/**
 * on conflict condition type for table "item_category"
 */
export interface item_category_on_conflict {
  constraint: item_category_constraint;
  update_columns: item_category_update_column[];
  where?: item_category_bool_exp | null;
}

/**
 * order by aggregate values of table "need"
 */
export interface need_aggregate_order_by {
  avg?: need_avg_order_by | null;
  count?: order_by | null;
  max?: need_max_order_by | null;
  min?: need_min_order_by | null;
  stddev?: need_stddev_order_by | null;
  stddev_pop?: need_stddev_pop_order_by | null;
  stddev_samp?: need_stddev_samp_order_by | null;
  sum?: need_sum_order_by | null;
  var_pop?: need_var_pop_order_by | null;
  var_samp?: need_var_samp_order_by | null;
  variance?: need_variance_order_by | null;
}

/**
 * input type for inserting array relation for remote table "need"
 */
export interface need_arr_rel_insert_input {
  data: need_insert_input[];
  on_conflict?: need_on_conflict | null;
}

/**
 * order by avg() on columns of table "need"
 */
export interface need_avg_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "need". All fields are combined with a logical 'AND'.
 */
export interface need_bool_exp {
  _and?: (need_bool_exp | null)[] | null;
  _not?: need_bool_exp | null;
  _or?: (need_bool_exp | null)[] | null;
  active?: Boolean_comparison_exp | null;
  city?: city_bool_exp | null;
  cityId?: uuid_comparison_exp | null;
  contactNumber?: String_comparison_exp | null;
  contactPersonName?: String_comparison_exp | null;
  country?: country_bool_exp | null;
  countryId?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  item_category_needs?: item_category_need_bool_exp | null;
  numberOfPeople?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "need"
 */
export interface need_insert_input {
  active?: boolean | null;
  city?: city_obj_rel_insert_input | null;
  cityId?: any | null;
  contactNumber?: string | null;
  contactPersonName?: string | null;
  country?: country_obj_rel_insert_input | null;
  countryId?: any | null;
  created_at?: any | null;
  id?: any | null;
  item_category_needs?: item_category_need_arr_rel_insert_input | null;
  numberOfPeople?: number | null;
  updated_at?: any | null;
}

/**
 * order by max() on columns of table "need"
 */
export interface need_max_order_by {
  contactNumber?: order_by | null;
  contactPersonName?: order_by | null;
  created_at?: order_by | null;
  numberOfPeople?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * order by min() on columns of table "need"
 */
export interface need_min_order_by {
  contactNumber?: order_by | null;
  contactPersonName?: order_by | null;
  created_at?: order_by | null;
  numberOfPeople?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * input type for inserting object relation for remote table "need"
 */
export interface need_obj_rel_insert_input {
  data: need_insert_input;
  on_conflict?: need_on_conflict | null;
}

/**
 * on conflict condition type for table "need"
 */
export interface need_on_conflict {
  constraint: need_constraint;
  update_columns: need_update_column[];
  where?: need_bool_exp | null;
}

/**
 * ordering options when selecting data from "need"
 */
export interface need_order_by {
  active?: order_by | null;
  city?: city_order_by | null;
  cityId?: order_by | null;
  contactNumber?: order_by | null;
  contactPersonName?: order_by | null;
  country?: country_order_by | null;
  countryId?: order_by | null;
  created_at?: order_by | null;
  id?: order_by | null;
  item_category_needs_aggregate?: item_category_need_aggregate_order_by | null;
  numberOfPeople?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * order by stddev() on columns of table "need"
 */
export interface need_stddev_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "need"
 */
export interface need_stddev_pop_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "need"
 */
export interface need_stddev_samp_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * order by sum() on columns of table "need"
 */
export interface need_sum_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * order by var_pop() on columns of table "need"
 */
export interface need_var_pop_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * order by var_samp() on columns of table "need"
 */
export interface need_var_samp_order_by {
  numberOfPeople?: order_by | null;
}

/**
 * order by variance() on columns of table "need"
 */
export interface need_variance_order_by {
  numberOfPeople?: order_by | null;
}

export interface st_d_within_geography_input {
  distance: number;
  from: any;
  use_spheroid?: boolean | null;
}

export interface st_d_within_input {
  distance: number;
  from: any;
}

/**
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type uuid. All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
