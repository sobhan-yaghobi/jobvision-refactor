
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model category_collection
 * 
 */
export type category_collection = $Result.DefaultSelection<Prisma.$category_collectionPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model province
 * 
 */
export type province = $Result.DefaultSelection<Prisma.$provincePayload>
/**
 * Model city
 * 
 */
export type city = $Result.DefaultSelection<Prisma.$cityPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model followers
 * 
 */
export type followers = $Result.DefaultSelection<Prisma.$followersPayload>
/**
 * Model location
 * 
 */
export type location = $Result.DefaultSelection<Prisma.$locationPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model userCompanyFollow
 * 
 */
export type userCompanyFollow = $Result.DefaultSelection<Prisma.$userCompanyFollowPayload>
/**
 * Model advantage
 * 
 */
export type advantage = $Result.DefaultSelection<Prisma.$advantagePayload>
/**
 * Model ad
 * 
 */
export type ad = $Result.DefaultSelection<Prisma.$adPayload>
/**
 * Model adsCategory_collection
 * 
 */
export type adsCategory_collection = $Result.DefaultSelection<Prisma.$adsCategory_collectionPayload>
/**
 * Model facilitiesAdvantage
 * 
 */
export type facilitiesAdvantage = $Result.DefaultSelection<Prisma.$facilitiesAdvantagePayload>
/**
 * Model cv
 * 
 */
export type cv = $Result.DefaultSelection<Prisma.$cvPayload>
/**
 * Model cvAd
 * 
 */
export type cvAd = $Result.DefaultSelection<Prisma.$cvAdPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender: {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  NOT_IMPORTANT: 'NOT_IMPORTANT'
};

export type gender = (typeof gender)[keyof typeof gender]


export const seniority_level: {
  WORKER: 'WORKER',
  EMPLOYEE: 'EMPLOYEE',
  EXPERT: 'EXPERT',
  MA: 'MA',
  ASSISTANCE: 'ASSISTANCE',
  CHIEF: 'CHIEF'
};

export type seniority_level = (typeof seniority_level)[keyof typeof seniority_level]


export const cooperation_type: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT'
};

export type cooperation_type = (typeof cooperation_type)[keyof typeof cooperation_type]


export const status: {
  accept: 'accept',
  reject: 'reject',
  waiting: 'waiting'
};

export type status = (typeof status)[keyof typeof status]

}

export type gender = $Enums.gender

export const gender: typeof $Enums.gender

export type seniority_level = $Enums.seniority_level

export const seniority_level: typeof $Enums.seniority_level

export type cooperation_type = $Enums.cooperation_type

export const cooperation_type: typeof $Enums.cooperation_type

export type status = $Enums.status

export const status: typeof $Enums.status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Category_collections
 * const category_collections = await prisma.category_collection.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Category_collections
   * const category_collections = await prisma.category_collection.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.category_collection`: Exposes CRUD operations for the **category_collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_collections
    * const category_collections = await prisma.category_collection.findMany()
    * ```
    */
  get category_collection(): Prisma.category_collectionDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.provinceDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **city** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.cityDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.followers`: Exposes CRUD operations for the **followers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.followers.findMany()
    * ```
    */
  get followers(): Prisma.followersDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.locationDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.userCompanyFollow`: Exposes CRUD operations for the **userCompanyFollow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCompanyFollows
    * const userCompanyFollows = await prisma.userCompanyFollow.findMany()
    * ```
    */
  get userCompanyFollow(): Prisma.userCompanyFollowDelegate<ExtArgs>;

  /**
   * `prisma.advantage`: Exposes CRUD operations for the **advantage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advantages
    * const advantages = await prisma.advantage.findMany()
    * ```
    */
  get advantage(): Prisma.advantageDelegate<ExtArgs>;

  /**
   * `prisma.ad`: Exposes CRUD operations for the **ad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ads
    * const ads = await prisma.ad.findMany()
    * ```
    */
  get ad(): Prisma.adDelegate<ExtArgs>;

  /**
   * `prisma.adsCategory_collection`: Exposes CRUD operations for the **adsCategory_collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdsCategory_collections
    * const adsCategory_collections = await prisma.adsCategory_collection.findMany()
    * ```
    */
  get adsCategory_collection(): Prisma.adsCategory_collectionDelegate<ExtArgs>;

  /**
   * `prisma.facilitiesAdvantage`: Exposes CRUD operations for the **facilitiesAdvantage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilitiesAdvantages
    * const facilitiesAdvantages = await prisma.facilitiesAdvantage.findMany()
    * ```
    */
  get facilitiesAdvantage(): Prisma.facilitiesAdvantageDelegate<ExtArgs>;

  /**
   * `prisma.cv`: Exposes CRUD operations for the **cv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cvs
    * const cvs = await prisma.cv.findMany()
    * ```
    */
  get cv(): Prisma.cvDelegate<ExtArgs>;

  /**
   * `prisma.cvAd`: Exposes CRUD operations for the **cvAd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CvAds
    * const cvAds = await prisma.cvAd.findMany()
    * ```
    */
  get cvAd(): Prisma.cvAdDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    category_collection: 'category_collection',
    category: 'category',
    province: 'province',
    city: 'city',
    user: 'user',
    followers: 'followers',
    location: 'location',
    company: 'company',
    userCompanyFollow: 'userCompanyFollow',
    advantage: 'advantage',
    ad: 'ad',
    adsCategory_collection: 'adsCategory_collection',
    facilitiesAdvantage: 'facilitiesAdvantage',
    cv: 'cv',
    cvAd: 'cvAd'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'category_collection' | 'category' | 'province' | 'city' | 'user' | 'followers' | 'location' | 'company' | 'userCompanyFollow' | 'advantage' | 'ad' | 'adsCategory_collection' | 'facilitiesAdvantage' | 'cv' | 'cvAd'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      category_collection: {
        payload: Prisma.$category_collectionPayload<ExtArgs>
        fields: Prisma.category_collectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.category_collectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.category_collectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>
          }
          findFirst: {
            args: Prisma.category_collectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.category_collectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>
          }
          findMany: {
            args: Prisma.category_collectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>[]
          }
          create: {
            args: Prisma.category_collectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>
          }
          createMany: {
            args: Prisma.category_collectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.category_collectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>
          }
          update: {
            args: Prisma.category_collectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>
          }
          deleteMany: {
            args: Prisma.category_collectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.category_collectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.category_collectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$category_collectionPayload>
          }
          aggregate: {
            args: Prisma.Category_collectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory_collection>
          }
          groupBy: {
            args: Prisma.category_collectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Category_collectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.category_collectionCountArgs<ExtArgs>,
            result: $Utils.Optional<Category_collectionCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      province: {
        payload: Prisma.$provincePayload<ExtArgs>
        fields: Prisma.provinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.provinceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.provinceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          findFirst: {
            args: Prisma.provinceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.provinceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          findMany: {
            args: Prisma.provinceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>[]
          }
          create: {
            args: Prisma.provinceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          createMany: {
            args: Prisma.provinceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.provinceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          update: {
            args: Prisma.provinceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          deleteMany: {
            args: Prisma.provinceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.provinceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.provinceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.provinceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.provinceCountArgs<ExtArgs>,
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      city: {
        payload: Prisma.$cityPayload<ExtArgs>
        fields: Prisma.cityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          findFirst: {
            args: Prisma.cityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          findMany: {
            args: Prisma.cityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>[]
          }
          create: {
            args: Prisma.cityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          createMany: {
            args: Prisma.cityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          update: {
            args: Prisma.cityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          deleteMany: {
            args: Prisma.cityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.cityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.cityCountArgs<ExtArgs>,
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      followers: {
        payload: Prisma.$followersPayload<ExtArgs>
        fields: Prisma.followersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          findFirst: {
            args: Prisma.followersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          findMany: {
            args: Prisma.followersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>[]
          }
          create: {
            args: Prisma.followersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          createMany: {
            args: Prisma.followersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.followersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          update: {
            args: Prisma.followersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          deleteMany: {
            args: Prisma.followersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.followersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.followersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          aggregate: {
            args: Prisma.FollowersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowers>
          }
          groupBy: {
            args: Prisma.followersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.followersCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowersCountAggregateOutputType> | number
          }
        }
      }
      location: {
        payload: Prisma.$locationPayload<ExtArgs>
        fields: Prisma.locationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findFirst: {
            args: Prisma.locationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findMany: {
            args: Prisma.locationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[]
          }
          create: {
            args: Prisma.locationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          createMany: {
            args: Prisma.locationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.locationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          update: {
            args: Prisma.locationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          deleteMany: {
            args: Prisma.locationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.locationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.locationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.locationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      userCompanyFollow: {
        payload: Prisma.$userCompanyFollowPayload<ExtArgs>
        fields: Prisma.userCompanyFollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userCompanyFollowFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userCompanyFollowFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>
          }
          findFirst: {
            args: Prisma.userCompanyFollowFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userCompanyFollowFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>
          }
          findMany: {
            args: Prisma.userCompanyFollowFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>[]
          }
          create: {
            args: Prisma.userCompanyFollowCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>
          }
          createMany: {
            args: Prisma.userCompanyFollowCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userCompanyFollowDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>
          }
          update: {
            args: Prisma.userCompanyFollowUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>
          }
          deleteMany: {
            args: Prisma.userCompanyFollowDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userCompanyFollowUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userCompanyFollowUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userCompanyFollowPayload>
          }
          aggregate: {
            args: Prisma.UserCompanyFollowAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserCompanyFollow>
          }
          groupBy: {
            args: Prisma.userCompanyFollowGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserCompanyFollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCompanyFollowCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCompanyFollowCountAggregateOutputType> | number
          }
        }
      }
      advantage: {
        payload: Prisma.$advantagePayload<ExtArgs>
        fields: Prisma.advantageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.advantageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.advantageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>
          }
          findFirst: {
            args: Prisma.advantageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.advantageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>
          }
          findMany: {
            args: Prisma.advantageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>[]
          }
          create: {
            args: Prisma.advantageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>
          }
          createMany: {
            args: Prisma.advantageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.advantageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>
          }
          update: {
            args: Prisma.advantageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>
          }
          deleteMany: {
            args: Prisma.advantageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.advantageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.advantageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$advantagePayload>
          }
          aggregate: {
            args: Prisma.AdvantageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdvantage>
          }
          groupBy: {
            args: Prisma.advantageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdvantageGroupByOutputType>[]
          }
          count: {
            args: Prisma.advantageCountArgs<ExtArgs>,
            result: $Utils.Optional<AdvantageCountAggregateOutputType> | number
          }
        }
      }
      ad: {
        payload: Prisma.$adPayload<ExtArgs>
        fields: Prisma.adFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>
          }
          findFirst: {
            args: Prisma.adFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>
          }
          findMany: {
            args: Prisma.adFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>[]
          }
          create: {
            args: Prisma.adCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>
          }
          createMany: {
            args: Prisma.adCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>
          }
          update: {
            args: Prisma.adUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>
          }
          deleteMany: {
            args: Prisma.adDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adPayload>
          }
          aggregate: {
            args: Prisma.AdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAd>
          }
          groupBy: {
            args: Prisma.adGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdGroupByOutputType>[]
          }
          count: {
            args: Prisma.adCountArgs<ExtArgs>,
            result: $Utils.Optional<AdCountAggregateOutputType> | number
          }
        }
      }
      adsCategory_collection: {
        payload: Prisma.$adsCategory_collectionPayload<ExtArgs>
        fields: Prisma.adsCategory_collectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adsCategory_collectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adsCategory_collectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>
          }
          findFirst: {
            args: Prisma.adsCategory_collectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adsCategory_collectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>
          }
          findMany: {
            args: Prisma.adsCategory_collectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>[]
          }
          create: {
            args: Prisma.adsCategory_collectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>
          }
          createMany: {
            args: Prisma.adsCategory_collectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adsCategory_collectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>
          }
          update: {
            args: Prisma.adsCategory_collectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>
          }
          deleteMany: {
            args: Prisma.adsCategory_collectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adsCategory_collectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adsCategory_collectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adsCategory_collectionPayload>
          }
          aggregate: {
            args: Prisma.AdsCategory_collectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdsCategory_collection>
          }
          groupBy: {
            args: Prisma.adsCategory_collectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdsCategory_collectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.adsCategory_collectionCountArgs<ExtArgs>,
            result: $Utils.Optional<AdsCategory_collectionCountAggregateOutputType> | number
          }
        }
      }
      facilitiesAdvantage: {
        payload: Prisma.$facilitiesAdvantagePayload<ExtArgs>
        fields: Prisma.facilitiesAdvantageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facilitiesAdvantageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facilitiesAdvantageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>
          }
          findFirst: {
            args: Prisma.facilitiesAdvantageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facilitiesAdvantageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>
          }
          findMany: {
            args: Prisma.facilitiesAdvantageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>[]
          }
          create: {
            args: Prisma.facilitiesAdvantageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>
          }
          createMany: {
            args: Prisma.facilitiesAdvantageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.facilitiesAdvantageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>
          }
          update: {
            args: Prisma.facilitiesAdvantageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>
          }
          deleteMany: {
            args: Prisma.facilitiesAdvantageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.facilitiesAdvantageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.facilitiesAdvantageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilitiesAdvantagePayload>
          }
          aggregate: {
            args: Prisma.FacilitiesAdvantageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacilitiesAdvantage>
          }
          groupBy: {
            args: Prisma.facilitiesAdvantageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FacilitiesAdvantageGroupByOutputType>[]
          }
          count: {
            args: Prisma.facilitiesAdvantageCountArgs<ExtArgs>,
            result: $Utils.Optional<FacilitiesAdvantageCountAggregateOutputType> | number
          }
        }
      }
      cv: {
        payload: Prisma.$cvPayload<ExtArgs>
        fields: Prisma.cvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cvFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cvFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>
          }
          findFirst: {
            args: Prisma.cvFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cvFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>
          }
          findMany: {
            args: Prisma.cvFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>[]
          }
          create: {
            args: Prisma.cvCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>
          }
          createMany: {
            args: Prisma.cvCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cvDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>
          }
          update: {
            args: Prisma.cvUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>
          }
          deleteMany: {
            args: Prisma.cvDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cvUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cvUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvPayload>
          }
          aggregate: {
            args: Prisma.CvAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCv>
          }
          groupBy: {
            args: Prisma.cvGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CvGroupByOutputType>[]
          }
          count: {
            args: Prisma.cvCountArgs<ExtArgs>,
            result: $Utils.Optional<CvCountAggregateOutputType> | number
          }
        }
      }
      cvAd: {
        payload: Prisma.$cvAdPayload<ExtArgs>
        fields: Prisma.cvAdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cvAdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cvAdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>
          }
          findFirst: {
            args: Prisma.cvAdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cvAdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>
          }
          findMany: {
            args: Prisma.cvAdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>[]
          }
          create: {
            args: Prisma.cvAdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>
          }
          createMany: {
            args: Prisma.cvAdCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cvAdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>
          }
          update: {
            args: Prisma.cvAdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>
          }
          deleteMany: {
            args: Prisma.cvAdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cvAdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cvAdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cvAdPayload>
          }
          aggregate: {
            args: Prisma.CvAdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCvAd>
          }
          groupBy: {
            args: Prisma.cvAdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CvAdGroupByOutputType>[]
          }
          count: {
            args: Prisma.cvAdCountArgs<ExtArgs>,
            result: $Utils.Optional<CvAdCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Category_collectionCountOutputType
   */

  export type Category_collectionCountOutputType = {
    adsCategory_collections: number
  }

  export type Category_collectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adsCategory_collections?: boolean | Category_collectionCountOutputTypeCountAdsCategory_collectionsArgs
  }

  // Custom InputTypes

  /**
   * Category_collectionCountOutputType without action
   */
  export type Category_collectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_collectionCountOutputType
     */
    select?: Category_collectionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Category_collectionCountOutputType without action
   */
  export type Category_collectionCountOutputTypeCountAdsCategory_collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adsCategory_collectionWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    category_collections: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category_collections?: boolean | CategoryCountOutputTypeCountCategory_collectionsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategory_collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: category_collectionWhereInput
  }



  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    cities: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | ProvinceCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cityWhereInput
  }



  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    locations: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | CityCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cv: number
    companies: number
    followers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | UserCountOutputTypeCountCvArgs
    companies?: boolean | UserCountOutputTypeCountCompaniesArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userCompanyFollowWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followersWhereInput
  }



  /**
   * Count Type FollowersCountOutputType
   */

  export type FollowersCountOutputType = {
    userCompanyFollow: number
  }

  export type FollowersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCompanyFollow?: boolean | FollowersCountOutputTypeCountUserCompanyFollowArgs
  }

  // Custom InputTypes

  /**
   * FollowersCountOutputType without action
   */
  export type FollowersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersCountOutputType
     */
    select?: FollowersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FollowersCountOutputType without action
   */
  export type FollowersCountOutputTypeCountUserCompanyFollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userCompanyFollowWhereInput
  }



  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    companies: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | LocationCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number
    ads: number
    cv: number
    followers: number
    userCompanyFollow: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs
    ads?: boolean | CompanyCountOutputTypeCountAdsArgs
    cv?: boolean | CompanyCountOutputTypeCountCvArgs
    followers?: boolean | CompanyCountOutputTypeCountFollowersArgs
    userCompanyFollow?: boolean | CompanyCountOutputTypeCountUserCompanyFollowArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followersWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserCompanyFollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userCompanyFollowWhereInput
  }



  /**
   * Count Type AdvantageCountOutputType
   */

  export type AdvantageCountOutputType = {
    facilitiesAdvantage: number
  }

  export type AdvantageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facilitiesAdvantage?: boolean | AdvantageCountOutputTypeCountFacilitiesAdvantageArgs
  }

  // Custom InputTypes

  /**
   * AdvantageCountOutputType without action
   */
  export type AdvantageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvantageCountOutputType
     */
    select?: AdvantageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AdvantageCountOutputType without action
   */
  export type AdvantageCountOutputTypeCountFacilitiesAdvantageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilitiesAdvantageWhereInput
  }



  /**
   * Count Type AdCountOutputType
   */

  export type AdCountOutputType = {
    adsCategory_collections: number
    facilitiesAdvantage: number
    cvAd: number
    cv: number
  }

  export type AdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adsCategory_collections?: boolean | AdCountOutputTypeCountAdsCategory_collectionsArgs
    facilitiesAdvantage?: boolean | AdCountOutputTypeCountFacilitiesAdvantageArgs
    cvAd?: boolean | AdCountOutputTypeCountCvAdArgs
    cv?: boolean | AdCountOutputTypeCountCvArgs
  }

  // Custom InputTypes

  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCountOutputType
     */
    select?: AdCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountAdsCategory_collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adsCategory_collectionWhereInput
  }


  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountFacilitiesAdvantageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilitiesAdvantageWhereInput
  }


  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountCvAdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvAdWhereInput
  }


  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountCvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvWhereInput
  }



  /**
   * Count Type CvCountOutputType
   */

  export type CvCountOutputType = {
    cvAd: number
  }

  export type CvCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvAd?: boolean | CvCountOutputTypeCountCvAdArgs
  }

  // Custom InputTypes

  /**
   * CvCountOutputType without action
   */
  export type CvCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CvCountOutputType
     */
    select?: CvCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CvCountOutputType without action
   */
  export type CvCountOutputTypeCountCvAdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvAdWhereInput
  }



  /**
   * Models
   */

  /**
   * Model category_collection
   */

  export type AggregateCategory_collection = {
    _count: Category_collectionCountAggregateOutputType | null
    _min: Category_collectionMinAggregateOutputType | null
    _max: Category_collectionMaxAggregateOutputType | null
  }

  export type Category_collectionMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    name: string | null
    link: string | null
  }

  export type Category_collectionMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    name: string | null
    link: string | null
  }

  export type Category_collectionCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    link: number
    _all: number
  }


  export type Category_collectionMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    link?: true
  }

  export type Category_collectionMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    link?: true
  }

  export type Category_collectionCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    link?: true
    _all?: true
  }

  export type Category_collectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category_collection to aggregate.
     */
    where?: category_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_collections to fetch.
     */
    orderBy?: category_collectionOrderByWithRelationInput | category_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: category_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned category_collections
    **/
    _count?: true | Category_collectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_collectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_collectionMaxAggregateInputType
  }

  export type GetCategory_collectionAggregateType<T extends Category_collectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_collection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_collection[P]>
      : GetScalarType<T[P], AggregateCategory_collection[P]>
  }




  export type category_collectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: category_collectionWhereInput
    orderBy?: category_collectionOrderByWithAggregationInput | category_collectionOrderByWithAggregationInput[]
    by: Category_collectionScalarFieldEnum[] | Category_collectionScalarFieldEnum
    having?: category_collectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_collectionCountAggregateInputType | true
    _min?: Category_collectionMinAggregateInputType
    _max?: Category_collectionMaxAggregateInputType
  }

  export type Category_collectionGroupByOutputType = {
    id: string
    category_id: string | null
    name: string | null
    link: string | null
    _count: Category_collectionCountAggregateOutputType | null
    _min: Category_collectionMinAggregateOutputType | null
    _max: Category_collectionMaxAggregateOutputType | null
  }

  type GetCategory_collectionGroupByPayload<T extends category_collectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_collectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_collectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_collectionGroupByOutputType[P]>
            : GetScalarType<T[P], Category_collectionGroupByOutputType[P]>
        }
      >
    >


  export type category_collectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    link?: boolean
    categories?: boolean | category_collection$categoriesArgs<ExtArgs>
    adsCategory_collections?: boolean | category_collection$adsCategory_collectionsArgs<ExtArgs>
    _count?: boolean | Category_collectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_collection"]>

  export type category_collectionSelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
    link?: boolean
  }

  export type category_collectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | category_collection$categoriesArgs<ExtArgs>
    adsCategory_collections?: boolean | category_collection$adsCategory_collectionsArgs<ExtArgs>
    _count?: boolean | Category_collectionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $category_collectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category_collection"
    objects: {
      categories: Prisma.$categoryPayload<ExtArgs> | null
      adsCategory_collections: Prisma.$adsCategory_collectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: string | null
      name: string | null
      link: string | null
    }, ExtArgs["result"]["category_collection"]>
    composites: {}
  }


  type category_collectionGetPayload<S extends boolean | null | undefined | category_collectionDefaultArgs> = $Result.GetResult<Prisma.$category_collectionPayload, S>

  type category_collectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<category_collectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Category_collectionCountAggregateInputType | true
    }

  export interface category_collectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category_collection'], meta: { name: 'category_collection' } }
    /**
     * Find zero or one Category_collection that matches the filter.
     * @param {category_collectionFindUniqueArgs} args - Arguments to find a Category_collection
     * @example
     * // Get one Category_collection
     * const category_collection = await prisma.category_collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends category_collectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, category_collectionFindUniqueArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category_collection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {category_collectionFindUniqueOrThrowArgs} args - Arguments to find a Category_collection
     * @example
     * // Get one Category_collection
     * const category_collection = await prisma.category_collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends category_collectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, category_collectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category_collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_collectionFindFirstArgs} args - Arguments to find a Category_collection
     * @example
     * // Get one Category_collection
     * const category_collection = await prisma.category_collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends category_collectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, category_collectionFindFirstArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category_collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_collectionFindFirstOrThrowArgs} args - Arguments to find a Category_collection
     * @example
     * // Get one Category_collection
     * const category_collection = await prisma.category_collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends category_collectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, category_collectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Category_collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_collectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_collections
     * const category_collections = await prisma.category_collection.findMany()
     * 
     * // Get first 10 Category_collections
     * const category_collections = await prisma.category_collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const category_collectionWithIdOnly = await prisma.category_collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends category_collectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, category_collectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category_collection.
     * @param {category_collectionCreateArgs} args - Arguments to create a Category_collection.
     * @example
     * // Create one Category_collection
     * const Category_collection = await prisma.category_collection.create({
     *   data: {
     *     // ... data to create a Category_collection
     *   }
     * })
     * 
    **/
    create<T extends category_collectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, category_collectionCreateArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Category_collections.
     *     @param {category_collectionCreateManyArgs} args - Arguments to create many Category_collections.
     *     @example
     *     // Create many Category_collections
     *     const category_collection = await prisma.category_collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends category_collectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, category_collectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category_collection.
     * @param {category_collectionDeleteArgs} args - Arguments to delete one Category_collection.
     * @example
     * // Delete one Category_collection
     * const Category_collection = await prisma.category_collection.delete({
     *   where: {
     *     // ... filter to delete one Category_collection
     *   }
     * })
     * 
    **/
    delete<T extends category_collectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, category_collectionDeleteArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category_collection.
     * @param {category_collectionUpdateArgs} args - Arguments to update one Category_collection.
     * @example
     * // Update one Category_collection
     * const category_collection = await prisma.category_collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends category_collectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, category_collectionUpdateArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Category_collections.
     * @param {category_collectionDeleteManyArgs} args - Arguments to filter Category_collections to delete.
     * @example
     * // Delete a few Category_collections
     * const { count } = await prisma.category_collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends category_collectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, category_collectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_collectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_collections
     * const category_collection = await prisma.category_collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends category_collectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, category_collectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category_collection.
     * @param {category_collectionUpsertArgs} args - Arguments to update or create a Category_collection.
     * @example
     * // Update or create a Category_collection
     * const category_collection = await prisma.category_collection.upsert({
     *   create: {
     *     // ... data to create a Category_collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_collection we want to update
     *   }
     * })
    **/
    upsert<T extends category_collectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, category_collectionUpsertArgs<ExtArgs>>
    ): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Category_collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_collectionCountArgs} args - Arguments to filter Category_collections to count.
     * @example
     * // Count the number of Category_collections
     * const count = await prisma.category_collection.count({
     *   where: {
     *     // ... the filter for the Category_collections we want to count
     *   }
     * })
    **/
    count<T extends category_collectionCountArgs>(
      args?: Subset<T, category_collectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_collectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_collectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Category_collectionAggregateArgs>(args: Subset<T, Category_collectionAggregateArgs>): Prisma.PrismaPromise<GetCategory_collectionAggregateType<T>>

    /**
     * Group by Category_collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_collectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends category_collectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: category_collectionGroupByArgs['orderBy'] }
        : { orderBy?: category_collectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, category_collectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_collectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category_collection model
   */
  readonly fields: category_collectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category_collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__category_collectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categories<T extends category_collection$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, category_collection$categoriesArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    adsCategory_collections<T extends category_collection$adsCategory_collectionsArgs<ExtArgs> = {}>(args?: Subset<T, category_collection$adsCategory_collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the category_collection model
   */ 
  interface category_collectionFieldRefs {
    readonly id: FieldRef<"category_collection", 'String'>
    readonly category_id: FieldRef<"category_collection", 'String'>
    readonly name: FieldRef<"category_collection", 'String'>
    readonly link: FieldRef<"category_collection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * category_collection findUnique
   */
  export type category_collectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * Filter, which category_collection to fetch.
     */
    where: category_collectionWhereUniqueInput
  }


  /**
   * category_collection findUniqueOrThrow
   */
  export type category_collectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * Filter, which category_collection to fetch.
     */
    where: category_collectionWhereUniqueInput
  }


  /**
   * category_collection findFirst
   */
  export type category_collectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * Filter, which category_collection to fetch.
     */
    where?: category_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_collections to fetch.
     */
    orderBy?: category_collectionOrderByWithRelationInput | category_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for category_collections.
     */
    cursor?: category_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of category_collections.
     */
    distinct?: Category_collectionScalarFieldEnum | Category_collectionScalarFieldEnum[]
  }


  /**
   * category_collection findFirstOrThrow
   */
  export type category_collectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * Filter, which category_collection to fetch.
     */
    where?: category_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_collections to fetch.
     */
    orderBy?: category_collectionOrderByWithRelationInput | category_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for category_collections.
     */
    cursor?: category_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of category_collections.
     */
    distinct?: Category_collectionScalarFieldEnum | Category_collectionScalarFieldEnum[]
  }


  /**
   * category_collection findMany
   */
  export type category_collectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * Filter, which category_collections to fetch.
     */
    where?: category_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_collections to fetch.
     */
    orderBy?: category_collectionOrderByWithRelationInput | category_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing category_collections.
     */
    cursor?: category_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_collections.
     */
    skip?: number
    distinct?: Category_collectionScalarFieldEnum | Category_collectionScalarFieldEnum[]
  }


  /**
   * category_collection create
   */
  export type category_collectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * The data needed to create a category_collection.
     */
    data?: XOR<category_collectionCreateInput, category_collectionUncheckedCreateInput>
  }


  /**
   * category_collection createMany
   */
  export type category_collectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many category_collections.
     */
    data: category_collectionCreateManyInput | category_collectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * category_collection update
   */
  export type category_collectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * The data needed to update a category_collection.
     */
    data: XOR<category_collectionUpdateInput, category_collectionUncheckedUpdateInput>
    /**
     * Choose, which category_collection to update.
     */
    where: category_collectionWhereUniqueInput
  }


  /**
   * category_collection updateMany
   */
  export type category_collectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update category_collections.
     */
    data: XOR<category_collectionUpdateManyMutationInput, category_collectionUncheckedUpdateManyInput>
    /**
     * Filter which category_collections to update
     */
    where?: category_collectionWhereInput
  }


  /**
   * category_collection upsert
   */
  export type category_collectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * The filter to search for the category_collection to update in case it exists.
     */
    where: category_collectionWhereUniqueInput
    /**
     * In case the category_collection found by the `where` argument doesn't exist, create a new category_collection with this data.
     */
    create: XOR<category_collectionCreateInput, category_collectionUncheckedCreateInput>
    /**
     * In case the category_collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<category_collectionUpdateInput, category_collectionUncheckedUpdateInput>
  }


  /**
   * category_collection delete
   */
  export type category_collectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    /**
     * Filter which category_collection to delete.
     */
    where: category_collectionWhereUniqueInput
  }


  /**
   * category_collection deleteMany
   */
  export type category_collectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category_collections to delete
     */
    where?: category_collectionWhereInput
  }


  /**
   * category_collection.categories
   */
  export type category_collection$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }


  /**
   * category_collection.adsCategory_collections
   */
  export type category_collection$adsCategory_collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    where?: adsCategory_collectionWhereInput
    orderBy?: adsCategory_collectionOrderByWithRelationInput | adsCategory_collectionOrderByWithRelationInput[]
    cursor?: adsCategory_collectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdsCategory_collectionScalarFieldEnum | AdsCategory_collectionScalarFieldEnum[]
  }


  /**
   * category_collection without action
   */
  export type category_collectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
  }



  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    link: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    link: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    link: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    link: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    category_collections?: boolean | category$category_collectionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
  }

  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category_collections?: boolean | category$category_collectionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      category_collections: Prisma.$category_collectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      link: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category_collections<T extends category$category_collectionsArgs<ExtArgs> = {}>(args?: Subset<T, category$category_collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the category model
   */ 
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'String'>
    readonly name: FieldRef<"category", 'String'>
    readonly link: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }


  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }


  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }


  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }


  /**
   * category.category_collections
   */
  export type category$category_collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_collection
     */
    select?: category_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: category_collectionInclude<ExtArgs> | null
    where?: category_collectionWhereInput
    orderBy?: category_collectionOrderByWithRelationInput | category_collectionOrderByWithRelationInput[]
    cursor?: category_collectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_collectionScalarFieldEnum | Category_collectionScalarFieldEnum[]
  }


  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
  }



  /**
   * Model province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which province to aggregate.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type provinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provinceWhereInput
    orderBy?: provinceOrderByWithAggregationInput | provinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: provinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: string
    name: string
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends provinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type provinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cities?: boolean | province$citiesArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type provinceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type provinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | province$citiesArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $provincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "province"
    objects: {
      cities: Prisma.$cityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }


  type provinceGetPayload<S extends boolean | null | undefined | provinceDefaultArgs> = $Result.GetResult<Prisma.$provincePayload, S>

  type provinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<provinceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface provinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['province'], meta: { name: 'province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {provinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends provinceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, provinceFindUniqueArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Province that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {provinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends provinceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, provinceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends provinceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, provinceFindFirstArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends provinceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, provinceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends provinceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, provinceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Province.
     * @param {provinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
    **/
    create<T extends provinceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, provinceCreateArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Provinces.
     *     @param {provinceCreateManyArgs} args - Arguments to create many Provinces.
     *     @example
     *     // Create many Provinces
     *     const province = await prisma.province.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends provinceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, provinceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Province.
     * @param {provinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
    **/
    delete<T extends provinceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, provinceDeleteArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Province.
     * @param {provinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends provinceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, provinceUpdateArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Provinces.
     * @param {provinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends provinceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, provinceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends provinceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, provinceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {provinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
    **/
    upsert<T extends provinceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, provinceUpsertArgs<ExtArgs>>
    ): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends provinceCountArgs>(
      args?: Subset<T, provinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends provinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: provinceGroupByArgs['orderBy'] }
        : { orderBy?: provinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, provinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the province model
   */
  readonly fields: provinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__provinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cities<T extends province$citiesArgs<ExtArgs> = {}>(args?: Subset<T, province$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the province model
   */ 
  interface provinceFieldRefs {
    readonly id: FieldRef<"province", 'String'>
    readonly name: FieldRef<"province", 'String'>
  }
    

  // Custom InputTypes

  /**
   * province findUnique
   */
  export type provinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where: provinceWhereUniqueInput
  }


  /**
   * province findUniqueOrThrow
   */
  export type provinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where: provinceWhereUniqueInput
  }


  /**
   * province findFirst
   */
  export type provinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }


  /**
   * province findFirstOrThrow
   */
  export type provinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }


  /**
   * province findMany
   */
  export type provinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }


  /**
   * province create
   */
  export type provinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The data needed to create a province.
     */
    data: XOR<provinceCreateInput, provinceUncheckedCreateInput>
  }


  /**
   * province createMany
   */
  export type provinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many provinces.
     */
    data: provinceCreateManyInput | provinceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * province update
   */
  export type provinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The data needed to update a province.
     */
    data: XOR<provinceUpdateInput, provinceUncheckedUpdateInput>
    /**
     * Choose, which province to update.
     */
    where: provinceWhereUniqueInput
  }


  /**
   * province updateMany
   */
  export type provinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update provinces.
     */
    data: XOR<provinceUpdateManyMutationInput, provinceUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provinceWhereInput
  }


  /**
   * province upsert
   */
  export type provinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The filter to search for the province to update in case it exists.
     */
    where: provinceWhereUniqueInput
    /**
     * In case the province found by the `where` argument doesn't exist, create a new province with this data.
     */
    create: XOR<provinceCreateInput, provinceUncheckedCreateInput>
    /**
     * In case the province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provinceUpdateInput, provinceUncheckedUpdateInput>
  }


  /**
   * province delete
   */
  export type provinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter which province to delete.
     */
    where: provinceWhereUniqueInput
  }


  /**
   * province deleteMany
   */
  export type provinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to delete
     */
    where?: provinceWhereInput
  }


  /**
   * province.cities
   */
  export type province$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    where?: cityWhereInput
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    cursor?: cityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * province without action
   */
  export type provinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
  }



  /**
   * Model city
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    province_id: string | null
    name: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    province_id: string | null
    name: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    province_id: number
    name: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    province_id?: true
    name?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    province_id?: true
    name?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    province_id?: true
    name?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which city to aggregate.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type cityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cityWhereInput
    orderBy?: cityOrderByWithAggregationInput | cityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: cityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    province_id: string | null
    name: string | null
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends cityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type citySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    province_id?: boolean
    name?: boolean
    province?: boolean | city$provinceArgs<ExtArgs>
    locations?: boolean | city$locationsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type citySelectScalar = {
    id?: boolean
    province_id?: boolean
    name?: boolean
  }

  export type cityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | city$provinceArgs<ExtArgs>
    locations?: boolean | city$locationsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $cityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "city"
    objects: {
      province: Prisma.$provincePayload<ExtArgs> | null
      locations: Prisma.$locationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      province_id: string | null
      name: string | null
    }, ExtArgs["result"]["city"]>
    composites: {}
  }


  type cityGetPayload<S extends boolean | null | undefined | cityDefaultArgs> = $Result.GetResult<Prisma.$cityPayload, S>

  type cityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface cityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['city'], meta: { name: 'city' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {cityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cityFindUniqueArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindFirstArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a City.
     * @param {cityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends cityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cityCreateArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cities.
     *     @param {cityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {cityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends cityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cityDeleteArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one City.
     * @param {cityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cityUpdateArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {cityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {cityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends cityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cityUpsertArgs<ExtArgs>>
    ): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends cityCountArgs>(
      args?: Subset<T, cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cityGroupByArgs['orderBy'] }
        : { orderBy?: cityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the city model
   */
  readonly fields: cityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    province<T extends city$provinceArgs<ExtArgs> = {}>(args?: Subset<T, city$provinceArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    locations<T extends city$locationsArgs<ExtArgs> = {}>(args?: Subset<T, city$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the city model
   */ 
  interface cityFieldRefs {
    readonly id: FieldRef<"city", 'String'>
    readonly province_id: FieldRef<"city", 'String'>
    readonly name: FieldRef<"city", 'String'>
  }
    

  // Custom InputTypes

  /**
   * city findUnique
   */
  export type cityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city findUniqueOrThrow
   */
  export type cityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city findFirst
   */
  export type cityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * city findFirstOrThrow
   */
  export type cityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * city findMany
   */
  export type cityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * city create
   */
  export type cityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * The data needed to create a city.
     */
    data?: XOR<cityCreateInput, cityUncheckedCreateInput>
  }


  /**
   * city createMany
   */
  export type cityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: cityCreateManyInput | cityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * city update
   */
  export type cityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * The data needed to update a city.
     */
    data: XOR<cityUpdateInput, cityUncheckedUpdateInput>
    /**
     * Choose, which city to update.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city updateMany
   */
  export type cityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput
  }


  /**
   * city upsert
   */
  export type cityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * The filter to search for the city to update in case it exists.
     */
    where: cityWhereUniqueInput
    /**
     * In case the city found by the `where` argument doesn't exist, create a new city with this data.
     */
    create: XOR<cityCreateInput, cityUncheckedCreateInput>
    /**
     * In case the city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cityUpdateInput, cityUncheckedUpdateInput>
  }


  /**
   * city delete
   */
  export type cityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter which city to delete.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city deleteMany
   */
  export type cityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: cityWhereInput
  }


  /**
   * city.province
   */
  export type city$provinceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: provinceInclude<ExtArgs> | null
    where?: provinceWhereInput
  }


  /**
   * city.locations
   */
  export type city$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    where?: locationWhereInput
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    cursor?: locationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * city without action
   */
  export type cityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    company_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    company_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    created_at: number
    company_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    company_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    company_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    company_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    created_at: Date
    company_id: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    company_id?: boolean
    company?: boolean | user$companyArgs<ExtArgs>
    cv?: boolean | user$cvArgs<ExtArgs>
    companies?: boolean | user$companiesArgs<ExtArgs>
    followers?: boolean | user$followersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    company_id?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>
    cv?: boolean | user$cvArgs<ExtArgs>
    companies?: boolean | user$companiesArgs<ExtArgs>
    followers?: boolean | user$followersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
      cv: Prisma.$cvPayload<ExtArgs>[]
      companies: Prisma.$userCompanyFollowPayload<ExtArgs>[]
      followers: Prisma.$followersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      created_at: Date
      company_id: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(args?: Subset<T, user$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    cv<T extends user$cvArgs<ExtArgs> = {}>(args?: Subset<T, user$cvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findMany'> | Null>;

    companies<T extends user$companiesArgs<ExtArgs> = {}>(args?: Subset<T, user$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findMany'> | Null>;

    followers<T extends user$followersArgs<ExtArgs> = {}>(args?: Subset<T, user$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly company_id: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }


  /**
   * user.cv
   */
  export type user$cvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    where?: cvWhereInput
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    cursor?: cvWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CvScalarFieldEnum | CvScalarFieldEnum[]
  }


  /**
   * user.companies
   */
  export type user$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    where?: userCompanyFollowWhereInput
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    cursor?: userCompanyFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCompanyFollowScalarFieldEnum | UserCompanyFollowScalarFieldEnum[]
  }


  /**
   * user.followers
   */
  export type user$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    where?: followersWhereInput
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    cursor?: followersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Model followers
   */

  export type AggregateFollowers = {
    _count: FollowersCountAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  export type FollowersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    company_id: string | null
  }

  export type FollowersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    company_id: string | null
  }

  export type FollowersCountAggregateOutputType = {
    id: number
    user_id: number
    company_id: number
    _all: number
  }


  export type FollowersMinAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
  }

  export type FollowersMaxAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
  }

  export type FollowersCountAggregateInputType = {
    id?: true
    user_id?: true
    company_id?: true
    _all?: true
  }

  export type FollowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followers to aggregate.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned followers
    **/
    _count?: true | FollowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowersMaxAggregateInputType
  }

  export type GetFollowersAggregateType<T extends FollowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowers[P]>
      : GetScalarType<T[P], AggregateFollowers[P]>
  }




  export type followersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followersWhereInput
    orderBy?: followersOrderByWithAggregationInput | followersOrderByWithAggregationInput[]
    by: FollowersScalarFieldEnum[] | FollowersScalarFieldEnum
    having?: followersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowersCountAggregateInputType | true
    _min?: FollowersMinAggregateInputType
    _max?: FollowersMaxAggregateInputType
  }

  export type FollowersGroupByOutputType = {
    id: string
    user_id: string
    company_id: string
    _count: FollowersCountAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  type GetFollowersGroupByPayload<T extends followersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowersGroupByOutputType[P]>
            : GetScalarType<T[P], FollowersGroupByOutputType[P]>
        }
      >
    >


  export type followersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    company_id?: boolean
    user?: boolean | followers$userArgs<ExtArgs>
    company?: boolean | followers$companyArgs<ExtArgs>
    userCompanyFollow?: boolean | followers$userCompanyFollowArgs<ExtArgs>
    _count?: boolean | FollowersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followers"]>

  export type followersSelectScalar = {
    id?: boolean
    user_id?: boolean
    company_id?: boolean
  }

  export type followersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | followers$userArgs<ExtArgs>
    company?: boolean | followers$companyArgs<ExtArgs>
    userCompanyFollow?: boolean | followers$userCompanyFollowArgs<ExtArgs>
    _count?: boolean | FollowersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $followersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "followers"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      company: Prisma.$companyPayload<ExtArgs> | null
      userCompanyFollow: Prisma.$userCompanyFollowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      company_id: string
    }, ExtArgs["result"]["followers"]>
    composites: {}
  }


  type followersGetPayload<S extends boolean | null | undefined | followersDefaultArgs> = $Result.GetResult<Prisma.$followersPayload, S>

  type followersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<followersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowersCountAggregateInputType | true
    }

  export interface followersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['followers'], meta: { name: 'followers' } }
    /**
     * Find zero or one Followers that matches the filter.
     * @param {followersFindUniqueArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends followersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, followersFindUniqueArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Followers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {followersFindUniqueOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends followersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, followersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersFindFirstArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends followersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, followersFindFirstArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Followers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersFindFirstOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends followersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, followersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.followers.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.followers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followersWithIdOnly = await prisma.followers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends followersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, followersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Followers.
     * @param {followersCreateArgs} args - Arguments to create a Followers.
     * @example
     * // Create one Followers
     * const Followers = await prisma.followers.create({
     *   data: {
     *     // ... data to create a Followers
     *   }
     * })
     * 
    **/
    create<T extends followersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, followersCreateArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Followers.
     *     @param {followersCreateManyArgs} args - Arguments to create many Followers.
     *     @example
     *     // Create many Followers
     *     const followers = await prisma.followers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends followersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, followersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Followers.
     * @param {followersDeleteArgs} args - Arguments to delete one Followers.
     * @example
     * // Delete one Followers
     * const Followers = await prisma.followers.delete({
     *   where: {
     *     // ... filter to delete one Followers
     *   }
     * })
     * 
    **/
    delete<T extends followersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, followersDeleteArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Followers.
     * @param {followersUpdateArgs} args - Arguments to update one Followers.
     * @example
     * // Update one Followers
     * const followers = await prisma.followers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends followersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, followersUpdateArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Followers.
     * @param {followersDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.followers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends followersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, followersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const followers = await prisma.followers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends followersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, followersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Followers.
     * @param {followersUpsertArgs} args - Arguments to update or create a Followers.
     * @example
     * // Update or create a Followers
     * const followers = await prisma.followers.upsert({
     *   create: {
     *     // ... data to create a Followers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Followers we want to update
     *   }
     * })
    **/
    upsert<T extends followersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, followersUpsertArgs<ExtArgs>>
    ): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.followers.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends followersCountArgs>(
      args?: Subset<T, followersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowersAggregateArgs>(args: Subset<T, FollowersAggregateArgs>): Prisma.PrismaPromise<GetFollowersAggregateType<T>>

    /**
     * Group by Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends followersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followersGroupByArgs['orderBy'] }
        : { orderBy?: followersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, followersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the followers model
   */
  readonly fields: followersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for followers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends followers$userArgs<ExtArgs> = {}>(args?: Subset<T, followers$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    company<T extends followers$companyArgs<ExtArgs> = {}>(args?: Subset<T, followers$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    userCompanyFollow<T extends followers$userCompanyFollowArgs<ExtArgs> = {}>(args?: Subset<T, followers$userCompanyFollowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the followers model
   */ 
  interface followersFieldRefs {
    readonly id: FieldRef<"followers", 'String'>
    readonly user_id: FieldRef<"followers", 'String'>
    readonly company_id: FieldRef<"followers", 'String'>
  }
    

  // Custom InputTypes

  /**
   * followers findUnique
   */
  export type followersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where: followersWhereUniqueInput
  }


  /**
   * followers findUniqueOrThrow
   */
  export type followersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where: followersWhereUniqueInput
  }


  /**
   * followers findFirst
   */
  export type followersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followers.
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * followers findFirstOrThrow
   */
  export type followersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followers.
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * followers findMany
   */
  export type followersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing followers.
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * followers create
   */
  export type followersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * The data needed to create a followers.
     */
    data: XOR<followersCreateInput, followersUncheckedCreateInput>
  }


  /**
   * followers createMany
   */
  export type followersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many followers.
     */
    data: followersCreateManyInput | followersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * followers update
   */
  export type followersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * The data needed to update a followers.
     */
    data: XOR<followersUpdateInput, followersUncheckedUpdateInput>
    /**
     * Choose, which followers to update.
     */
    where: followersWhereUniqueInput
  }


  /**
   * followers updateMany
   */
  export type followersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update followers.
     */
    data: XOR<followersUpdateManyMutationInput, followersUncheckedUpdateManyInput>
    /**
     * Filter which followers to update
     */
    where?: followersWhereInput
  }


  /**
   * followers upsert
   */
  export type followersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * The filter to search for the followers to update in case it exists.
     */
    where: followersWhereUniqueInput
    /**
     * In case the followers found by the `where` argument doesn't exist, create a new followers with this data.
     */
    create: XOR<followersCreateInput, followersUncheckedCreateInput>
    /**
     * In case the followers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followersUpdateInput, followersUncheckedUpdateInput>
  }


  /**
   * followers delete
   */
  export type followersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    /**
     * Filter which followers to delete.
     */
    where: followersWhereUniqueInput
  }


  /**
   * followers deleteMany
   */
  export type followersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followers to delete
     */
    where?: followersWhereInput
  }


  /**
   * followers.user
   */
  export type followers$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }


  /**
   * followers.company
   */
  export type followers$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }


  /**
   * followers.userCompanyFollow
   */
  export type followers$userCompanyFollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    where?: userCompanyFollowWhereInput
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    cursor?: userCompanyFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCompanyFollowScalarFieldEnum | UserCompanyFollowScalarFieldEnum[]
  }


  /**
   * followers without action
   */
  export type followersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
  }



  /**
   * Model location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    city_id: string | null
    address: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    city_id: string | null
    address: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    city_id: number
    address: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    city_id?: true
    address?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    city_id?: true
    address?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    city_id?: true
    address?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location to aggregate.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type locationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationWhereInput
    orderBy?: locationOrderByWithAggregationInput | locationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: locationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    city_id: string
    address: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends locationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type locationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city_id?: boolean
    address?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
    companies?: boolean | location$companiesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type locationSelectScalar = {
    id?: boolean
    city_id?: boolean
    address?: boolean
  }

  export type locationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
    companies?: boolean | location$companiesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $locationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "location"
    objects: {
      city: Prisma.$cityPayload<ExtArgs>
      companies: Prisma.$companyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city_id: string
      address: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }


  type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = $Result.GetResult<Prisma.$locationPayload, S>

  type locationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<locationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface locationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['location'], meta: { name: 'location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {locationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends locationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, locationFindUniqueArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {locationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends locationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends locationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindFirstArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends locationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends locationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Location.
     * @param {locationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends locationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, locationCreateArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Locations.
     *     @param {locationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends locationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {locationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends locationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, locationDeleteArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Location.
     * @param {locationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends locationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpdateArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {locationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends locationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends locationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {locationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends locationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpsertArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationCountArgs>(
      args?: Subset<T, locationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends locationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationGroupByArgs['orderBy'] }
        : { orderBy?: locationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, locationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the location model
   */
  readonly fields: locationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    city<T extends cityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cityDefaultArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    companies<T extends location$companiesArgs<ExtArgs> = {}>(args?: Subset<T, location$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the location model
   */ 
  interface locationFieldRefs {
    readonly id: FieldRef<"location", 'String'>
    readonly city_id: FieldRef<"location", 'String'>
    readonly address: FieldRef<"location", 'String'>
  }
    

  // Custom InputTypes

  /**
   * location findUnique
   */
  export type locationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }


  /**
   * location findUniqueOrThrow
   */
  export type locationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }


  /**
   * location findFirst
   */
  export type locationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * location findFirstOrThrow
   */
  export type locationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * location findMany
   */
  export type locationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * location create
   */
  export type locationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to create a location.
     */
    data: XOR<locationCreateInput, locationUncheckedCreateInput>
  }


  /**
   * location createMany
   */
  export type locationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * location update
   */
  export type locationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to update a location.
     */
    data: XOR<locationUpdateInput, locationUncheckedUpdateInput>
    /**
     * Choose, which location to update.
     */
    where: locationWhereUniqueInput
  }


  /**
   * location updateMany
   */
  export type locationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationWhereInput
  }


  /**
   * location upsert
   */
  export type locationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The filter to search for the location to update in case it exists.
     */
    where: locationWhereUniqueInput
    /**
     * In case the location found by the `where` argument doesn't exist, create a new location with this data.
     */
    create: XOR<locationCreateInput, locationUncheckedCreateInput>
    /**
     * In case the location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationUpdateInput, locationUncheckedUpdateInput>
  }


  /**
   * location delete
   */
  export type locationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter which location to delete.
     */
    where: locationWhereUniqueInput
  }


  /**
   * location deleteMany
   */
  export type locationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationWhereInput
  }


  /**
   * location.companies
   */
  export type location$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    cursor?: companyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * location without action
   */
  export type locationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null
  }



  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    score_company: number | null
    score_popularity: number | null
    score_experience_of_job_seekers: number | null
    score_responsiveness: number | null
    organization_employ: number | null
  }

  export type CompanySumAggregateOutputType = {
    score_company: number | null
    score_popularity: number | null
    score_experience_of_job_seekers: number | null
    score_responsiveness: number | null
    organization_employ: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    logo: string | null
    score_company: number | null
    score_popularity: number | null
    score_experience_of_job_seekers: number | null
    score_responsiveness: number | null
    website: string | null
    description: string | null
    slogan: string | null
    organization_employ: number | null
    type_of_activity: string | null
    industry: string | null
    established_year: Date | null
    location_id: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    logo: string | null
    score_company: number | null
    score_popularity: number | null
    score_experience_of_job_seekers: number | null
    score_responsiveness: number | null
    website: string | null
    description: string | null
    slogan: string | null
    organization_employ: number | null
    type_of_activity: string | null
    industry: string | null
    established_year: Date | null
    location_id: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    logo: number
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: number
    description: number
    slogan: number
    organization_employ: number
    type_of_activity: number
    industry: number
    established_year: number
    location_id: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    score_company?: true
    score_popularity?: true
    score_experience_of_job_seekers?: true
    score_responsiveness?: true
    organization_employ?: true
  }

  export type CompanySumAggregateInputType = {
    score_company?: true
    score_popularity?: true
    score_experience_of_job_seekers?: true
    score_responsiveness?: true
    organization_employ?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    logo?: true
    score_company?: true
    score_popularity?: true
    score_experience_of_job_seekers?: true
    score_responsiveness?: true
    website?: true
    description?: true
    slogan?: true
    organization_employ?: true
    type_of_activity?: true
    industry?: true
    established_year?: true
    location_id?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    logo?: true
    score_company?: true
    score_popularity?: true
    score_experience_of_job_seekers?: true
    score_responsiveness?: true
    website?: true
    description?: true
    slogan?: true
    organization_employ?: true
    type_of_activity?: true
    industry?: true
    established_year?: true
    location_id?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    logo?: true
    score_company?: true
    score_popularity?: true
    score_experience_of_job_seekers?: true
    score_responsiveness?: true
    website?: true
    description?: true
    slogan?: true
    organization_employ?: true
    type_of_activity?: true
    industry?: true
    established_year?: true
    location_id?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date
    location_id: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    logo?: boolean
    score_company?: boolean
    score_popularity?: boolean
    score_experience_of_job_seekers?: boolean
    score_responsiveness?: boolean
    website?: boolean
    description?: boolean
    slogan?: boolean
    organization_employ?: boolean
    type_of_activity?: boolean
    industry?: boolean
    established_year?: boolean
    location_id?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
    user?: boolean | company$userArgs<ExtArgs>
    ads?: boolean | company$adsArgs<ExtArgs>
    cv?: boolean | company$cvArgs<ExtArgs>
    followers?: boolean | company$followersArgs<ExtArgs>
    userCompanyFollow?: boolean | company$userCompanyFollowArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    logo?: boolean
    score_company?: boolean
    score_popularity?: boolean
    score_experience_of_job_seekers?: boolean
    score_responsiveness?: boolean
    website?: boolean
    description?: boolean
    slogan?: boolean
    organization_employ?: boolean
    type_of_activity?: boolean
    industry?: boolean
    established_year?: boolean
    location_id?: boolean
  }

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>
    user?: boolean | company$userArgs<ExtArgs>
    ads?: boolean | company$adsArgs<ExtArgs>
    cv?: boolean | company$cvArgs<ExtArgs>
    followers?: boolean | company$followersArgs<ExtArgs>
    userCompanyFollow?: boolean | company$userCompanyFollowArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      location: Prisma.$locationPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>[]
      ads: Prisma.$adPayload<ExtArgs>[]
      cv: Prisma.$cvPayload<ExtArgs>[]
      followers: Prisma.$followersPayload<ExtArgs>[]
      userCompanyFollow: Prisma.$userCompanyFollowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
      logo: string
      score_company: number
      score_popularity: number
      score_experience_of_job_seekers: number
      score_responsiveness: number
      website: string
      description: string
      slogan: string
      organization_employ: number
      type_of_activity: string
      industry: string
      established_year: Date
      location_id: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends locationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, locationDefaultArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends company$userArgs<ExtArgs> = {}>(args?: Subset<T, company$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    ads<T extends company$adsArgs<ExtArgs> = {}>(args?: Subset<T, company$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findMany'> | Null>;

    cv<T extends company$cvArgs<ExtArgs> = {}>(args?: Subset<T, company$cvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findMany'> | Null>;

    followers<T extends company$followersArgs<ExtArgs> = {}>(args?: Subset<T, company$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findMany'> | Null>;

    userCompanyFollow<T extends company$userCompanyFollowArgs<ExtArgs> = {}>(args?: Subset<T, company$userCompanyFollowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the company model
   */ 
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly created_at: FieldRef<"company", 'DateTime'>
    readonly name: FieldRef<"company", 'String'>
    readonly logo: FieldRef<"company", 'String'>
    readonly score_company: FieldRef<"company", 'Float'>
    readonly score_popularity: FieldRef<"company", 'Float'>
    readonly score_experience_of_job_seekers: FieldRef<"company", 'Float'>
    readonly score_responsiveness: FieldRef<"company", 'Float'>
    readonly website: FieldRef<"company", 'String'>
    readonly description: FieldRef<"company", 'String'>
    readonly slogan: FieldRef<"company", 'String'>
    readonly organization_employ: FieldRef<"company", 'Int'>
    readonly type_of_activity: FieldRef<"company", 'String'>
    readonly industry: FieldRef<"company", 'String'>
    readonly established_year: FieldRef<"company", 'DateTime'>
    readonly location_id: FieldRef<"company", 'String'>
  }
    

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }


  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }


  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }


  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }


  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
  }


  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }


  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }


  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
  }


  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * company.ads
   */
  export type company$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    where?: adWhereInput
    orderBy?: adOrderByWithRelationInput | adOrderByWithRelationInput[]
    cursor?: adWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * company.cv
   */
  export type company$cvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    where?: cvWhereInput
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    cursor?: cvWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CvScalarFieldEnum | CvScalarFieldEnum[]
  }


  /**
   * company.followers
   */
  export type company$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    where?: followersWhereInput
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    cursor?: followersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * company.userCompanyFollow
   */
  export type company$userCompanyFollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    where?: userCompanyFollowWhereInput
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    cursor?: userCompanyFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCompanyFollowScalarFieldEnum | UserCompanyFollowScalarFieldEnum[]
  }


  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
  }



  /**
   * Model userCompanyFollow
   */

  export type AggregateUserCompanyFollow = {
    _count: UserCompanyFollowCountAggregateOutputType | null
    _min: UserCompanyFollowMinAggregateOutputType | null
    _max: UserCompanyFollowMaxAggregateOutputType | null
  }

  export type UserCompanyFollowMinAggregateOutputType = {
    user_id: string | null
    company_id: string | null
    followersId: string | null
  }

  export type UserCompanyFollowMaxAggregateOutputType = {
    user_id: string | null
    company_id: string | null
    followersId: string | null
  }

  export type UserCompanyFollowCountAggregateOutputType = {
    user_id: number
    company_id: number
    followersId: number
    _all: number
  }


  export type UserCompanyFollowMinAggregateInputType = {
    user_id?: true
    company_id?: true
    followersId?: true
  }

  export type UserCompanyFollowMaxAggregateInputType = {
    user_id?: true
    company_id?: true
    followersId?: true
  }

  export type UserCompanyFollowCountAggregateInputType = {
    user_id?: true
    company_id?: true
    followersId?: true
    _all?: true
  }

  export type UserCompanyFollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userCompanyFollow to aggregate.
     */
    where?: userCompanyFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userCompanyFollows to fetch.
     */
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userCompanyFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userCompanyFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userCompanyFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userCompanyFollows
    **/
    _count?: true | UserCompanyFollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCompanyFollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCompanyFollowMaxAggregateInputType
  }

  export type GetUserCompanyFollowAggregateType<T extends UserCompanyFollowAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCompanyFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCompanyFollow[P]>
      : GetScalarType<T[P], AggregateUserCompanyFollow[P]>
  }




  export type userCompanyFollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userCompanyFollowWhereInput
    orderBy?: userCompanyFollowOrderByWithAggregationInput | userCompanyFollowOrderByWithAggregationInput[]
    by: UserCompanyFollowScalarFieldEnum[] | UserCompanyFollowScalarFieldEnum
    having?: userCompanyFollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCompanyFollowCountAggregateInputType | true
    _min?: UserCompanyFollowMinAggregateInputType
    _max?: UserCompanyFollowMaxAggregateInputType
  }

  export type UserCompanyFollowGroupByOutputType = {
    user_id: string
    company_id: string
    followersId: string | null
    _count: UserCompanyFollowCountAggregateOutputType | null
    _min: UserCompanyFollowMinAggregateOutputType | null
    _max: UserCompanyFollowMaxAggregateOutputType | null
  }

  type GetUserCompanyFollowGroupByPayload<T extends userCompanyFollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCompanyFollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCompanyFollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCompanyFollowGroupByOutputType[P]>
            : GetScalarType<T[P], UserCompanyFollowGroupByOutputType[P]>
        }
      >
    >


  export type userCompanyFollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    followersId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    followers?: boolean | userCompanyFollow$followersArgs<ExtArgs>
  }, ExtArgs["result"]["userCompanyFollow"]>

  export type userCompanyFollowSelectScalar = {
    user_id?: boolean
    company_id?: boolean
    followersId?: boolean
  }

  export type userCompanyFollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    followers?: boolean | userCompanyFollow$followersArgs<ExtArgs>
  }


  export type $userCompanyFollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userCompanyFollow"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      company: Prisma.$companyPayload<ExtArgs>
      followers: Prisma.$followersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      company_id: string
      followersId: string | null
    }, ExtArgs["result"]["userCompanyFollow"]>
    composites: {}
  }


  type userCompanyFollowGetPayload<S extends boolean | null | undefined | userCompanyFollowDefaultArgs> = $Result.GetResult<Prisma.$userCompanyFollowPayload, S>

  type userCompanyFollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userCompanyFollowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCompanyFollowCountAggregateInputType | true
    }

  export interface userCompanyFollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userCompanyFollow'], meta: { name: 'userCompanyFollow' } }
    /**
     * Find zero or one UserCompanyFollow that matches the filter.
     * @param {userCompanyFollowFindUniqueArgs} args - Arguments to find a UserCompanyFollow
     * @example
     * // Get one UserCompanyFollow
     * const userCompanyFollow = await prisma.userCompanyFollow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userCompanyFollowFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userCompanyFollowFindUniqueArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserCompanyFollow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userCompanyFollowFindUniqueOrThrowArgs} args - Arguments to find a UserCompanyFollow
     * @example
     * // Get one UserCompanyFollow
     * const userCompanyFollow = await prisma.userCompanyFollow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userCompanyFollowFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userCompanyFollowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserCompanyFollow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCompanyFollowFindFirstArgs} args - Arguments to find a UserCompanyFollow
     * @example
     * // Get one UserCompanyFollow
     * const userCompanyFollow = await prisma.userCompanyFollow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userCompanyFollowFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userCompanyFollowFindFirstArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserCompanyFollow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCompanyFollowFindFirstOrThrowArgs} args - Arguments to find a UserCompanyFollow
     * @example
     * // Get one UserCompanyFollow
     * const userCompanyFollow = await prisma.userCompanyFollow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userCompanyFollowFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userCompanyFollowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserCompanyFollows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCompanyFollowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCompanyFollows
     * const userCompanyFollows = await prisma.userCompanyFollow.findMany()
     * 
     * // Get first 10 UserCompanyFollows
     * const userCompanyFollows = await prisma.userCompanyFollow.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userCompanyFollowWithUser_idOnly = await prisma.userCompanyFollow.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends userCompanyFollowFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCompanyFollowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserCompanyFollow.
     * @param {userCompanyFollowCreateArgs} args - Arguments to create a UserCompanyFollow.
     * @example
     * // Create one UserCompanyFollow
     * const UserCompanyFollow = await prisma.userCompanyFollow.create({
     *   data: {
     *     // ... data to create a UserCompanyFollow
     *   }
     * })
     * 
    **/
    create<T extends userCompanyFollowCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCompanyFollowCreateArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserCompanyFollows.
     *     @param {userCompanyFollowCreateManyArgs} args - Arguments to create many UserCompanyFollows.
     *     @example
     *     // Create many UserCompanyFollows
     *     const userCompanyFollow = await prisma.userCompanyFollow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCompanyFollowCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCompanyFollowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCompanyFollow.
     * @param {userCompanyFollowDeleteArgs} args - Arguments to delete one UserCompanyFollow.
     * @example
     * // Delete one UserCompanyFollow
     * const UserCompanyFollow = await prisma.userCompanyFollow.delete({
     *   where: {
     *     // ... filter to delete one UserCompanyFollow
     *   }
     * })
     * 
    **/
    delete<T extends userCompanyFollowDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userCompanyFollowDeleteArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserCompanyFollow.
     * @param {userCompanyFollowUpdateArgs} args - Arguments to update one UserCompanyFollow.
     * @example
     * // Update one UserCompanyFollow
     * const userCompanyFollow = await prisma.userCompanyFollow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userCompanyFollowUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userCompanyFollowUpdateArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserCompanyFollows.
     * @param {userCompanyFollowDeleteManyArgs} args - Arguments to filter UserCompanyFollows to delete.
     * @example
     * // Delete a few UserCompanyFollows
     * const { count } = await prisma.userCompanyFollow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userCompanyFollowDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCompanyFollowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCompanyFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCompanyFollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCompanyFollows
     * const userCompanyFollow = await prisma.userCompanyFollow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userCompanyFollowUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userCompanyFollowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCompanyFollow.
     * @param {userCompanyFollowUpsertArgs} args - Arguments to update or create a UserCompanyFollow.
     * @example
     * // Update or create a UserCompanyFollow
     * const userCompanyFollow = await prisma.userCompanyFollow.upsert({
     *   create: {
     *     // ... data to create a UserCompanyFollow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCompanyFollow we want to update
     *   }
     * })
    **/
    upsert<T extends userCompanyFollowUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userCompanyFollowUpsertArgs<ExtArgs>>
    ): Prisma__userCompanyFollowClient<$Result.GetResult<Prisma.$userCompanyFollowPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserCompanyFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCompanyFollowCountArgs} args - Arguments to filter UserCompanyFollows to count.
     * @example
     * // Count the number of UserCompanyFollows
     * const count = await prisma.userCompanyFollow.count({
     *   where: {
     *     // ... the filter for the UserCompanyFollows we want to count
     *   }
     * })
    **/
    count<T extends userCompanyFollowCountArgs>(
      args?: Subset<T, userCompanyFollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCompanyFollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCompanyFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyFollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCompanyFollowAggregateArgs>(args: Subset<T, UserCompanyFollowAggregateArgs>): Prisma.PrismaPromise<GetUserCompanyFollowAggregateType<T>>

    /**
     * Group by UserCompanyFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCompanyFollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userCompanyFollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userCompanyFollowGroupByArgs['orderBy'] }
        : { orderBy?: userCompanyFollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userCompanyFollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCompanyFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userCompanyFollow model
   */
  readonly fields: userCompanyFollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userCompanyFollow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userCompanyFollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followers<T extends userCompanyFollow$followersArgs<ExtArgs> = {}>(args?: Subset<T, userCompanyFollow$followersArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the userCompanyFollow model
   */ 
  interface userCompanyFollowFieldRefs {
    readonly user_id: FieldRef<"userCompanyFollow", 'String'>
    readonly company_id: FieldRef<"userCompanyFollow", 'String'>
    readonly followersId: FieldRef<"userCompanyFollow", 'String'>
  }
    

  // Custom InputTypes

  /**
   * userCompanyFollow findUnique
   */
  export type userCompanyFollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * Filter, which userCompanyFollow to fetch.
     */
    where: userCompanyFollowWhereUniqueInput
  }


  /**
   * userCompanyFollow findUniqueOrThrow
   */
  export type userCompanyFollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * Filter, which userCompanyFollow to fetch.
     */
    where: userCompanyFollowWhereUniqueInput
  }


  /**
   * userCompanyFollow findFirst
   */
  export type userCompanyFollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * Filter, which userCompanyFollow to fetch.
     */
    where?: userCompanyFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userCompanyFollows to fetch.
     */
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userCompanyFollows.
     */
    cursor?: userCompanyFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userCompanyFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userCompanyFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userCompanyFollows.
     */
    distinct?: UserCompanyFollowScalarFieldEnum | UserCompanyFollowScalarFieldEnum[]
  }


  /**
   * userCompanyFollow findFirstOrThrow
   */
  export type userCompanyFollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * Filter, which userCompanyFollow to fetch.
     */
    where?: userCompanyFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userCompanyFollows to fetch.
     */
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userCompanyFollows.
     */
    cursor?: userCompanyFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userCompanyFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userCompanyFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userCompanyFollows.
     */
    distinct?: UserCompanyFollowScalarFieldEnum | UserCompanyFollowScalarFieldEnum[]
  }


  /**
   * userCompanyFollow findMany
   */
  export type userCompanyFollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * Filter, which userCompanyFollows to fetch.
     */
    where?: userCompanyFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userCompanyFollows to fetch.
     */
    orderBy?: userCompanyFollowOrderByWithRelationInput | userCompanyFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userCompanyFollows.
     */
    cursor?: userCompanyFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userCompanyFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userCompanyFollows.
     */
    skip?: number
    distinct?: UserCompanyFollowScalarFieldEnum | UserCompanyFollowScalarFieldEnum[]
  }


  /**
   * userCompanyFollow create
   */
  export type userCompanyFollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * The data needed to create a userCompanyFollow.
     */
    data: XOR<userCompanyFollowCreateInput, userCompanyFollowUncheckedCreateInput>
  }


  /**
   * userCompanyFollow createMany
   */
  export type userCompanyFollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userCompanyFollows.
     */
    data: userCompanyFollowCreateManyInput | userCompanyFollowCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * userCompanyFollow update
   */
  export type userCompanyFollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * The data needed to update a userCompanyFollow.
     */
    data: XOR<userCompanyFollowUpdateInput, userCompanyFollowUncheckedUpdateInput>
    /**
     * Choose, which userCompanyFollow to update.
     */
    where: userCompanyFollowWhereUniqueInput
  }


  /**
   * userCompanyFollow updateMany
   */
  export type userCompanyFollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userCompanyFollows.
     */
    data: XOR<userCompanyFollowUpdateManyMutationInput, userCompanyFollowUncheckedUpdateManyInput>
    /**
     * Filter which userCompanyFollows to update
     */
    where?: userCompanyFollowWhereInput
  }


  /**
   * userCompanyFollow upsert
   */
  export type userCompanyFollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * The filter to search for the userCompanyFollow to update in case it exists.
     */
    where: userCompanyFollowWhereUniqueInput
    /**
     * In case the userCompanyFollow found by the `where` argument doesn't exist, create a new userCompanyFollow with this data.
     */
    create: XOR<userCompanyFollowCreateInput, userCompanyFollowUncheckedCreateInput>
    /**
     * In case the userCompanyFollow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userCompanyFollowUpdateInput, userCompanyFollowUncheckedUpdateInput>
  }


  /**
   * userCompanyFollow delete
   */
  export type userCompanyFollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
    /**
     * Filter which userCompanyFollow to delete.
     */
    where: userCompanyFollowWhereUniqueInput
  }


  /**
   * userCompanyFollow deleteMany
   */
  export type userCompanyFollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userCompanyFollows to delete
     */
    where?: userCompanyFollowWhereInput
  }


  /**
   * userCompanyFollow.followers
   */
  export type userCompanyFollow$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followersInclude<ExtArgs> | null
    where?: followersWhereInput
  }


  /**
   * userCompanyFollow without action
   */
  export type userCompanyFollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userCompanyFollow
     */
    select?: userCompanyFollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userCompanyFollowInclude<ExtArgs> | null
  }



  /**
   * Model advantage
   */

  export type AggregateAdvantage = {
    _count: AdvantageCountAggregateOutputType | null
    _min: AdvantageMinAggregateOutputType | null
    _max: AdvantageMaxAggregateOutputType | null
  }

  export type AdvantageMinAggregateOutputType = {
    id: string | null
    type: string | null
  }

  export type AdvantageMaxAggregateOutputType = {
    id: string | null
    type: string | null
  }

  export type AdvantageCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type AdvantageMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type AdvantageMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type AdvantageCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type AdvantageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which advantage to aggregate.
     */
    where?: advantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of advantages to fetch.
     */
    orderBy?: advantageOrderByWithRelationInput | advantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: advantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` advantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` advantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned advantages
    **/
    _count?: true | AdvantageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvantageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvantageMaxAggregateInputType
  }

  export type GetAdvantageAggregateType<T extends AdvantageAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvantage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvantage[P]>
      : GetScalarType<T[P], AggregateAdvantage[P]>
  }




  export type advantageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: advantageWhereInput
    orderBy?: advantageOrderByWithAggregationInput | advantageOrderByWithAggregationInput[]
    by: AdvantageScalarFieldEnum[] | AdvantageScalarFieldEnum
    having?: advantageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvantageCountAggregateInputType | true
    _min?: AdvantageMinAggregateInputType
    _max?: AdvantageMaxAggregateInputType
  }

  export type AdvantageGroupByOutputType = {
    id: string
    type: string
    _count: AdvantageCountAggregateOutputType | null
    _min: AdvantageMinAggregateOutputType | null
    _max: AdvantageMaxAggregateOutputType | null
  }

  type GetAdvantageGroupByPayload<T extends advantageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvantageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvantageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvantageGroupByOutputType[P]>
            : GetScalarType<T[P], AdvantageGroupByOutputType[P]>
        }
      >
    >


  export type advantageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    facilitiesAdvantage?: boolean | advantage$facilitiesAdvantageArgs<ExtArgs>
    _count?: boolean | AdvantageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advantage"]>

  export type advantageSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type advantageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facilitiesAdvantage?: boolean | advantage$facilitiesAdvantageArgs<ExtArgs>
    _count?: boolean | AdvantageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $advantagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "advantage"
    objects: {
      facilitiesAdvantage: Prisma.$facilitiesAdvantagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
    }, ExtArgs["result"]["advantage"]>
    composites: {}
  }


  type advantageGetPayload<S extends boolean | null | undefined | advantageDefaultArgs> = $Result.GetResult<Prisma.$advantagePayload, S>

  type advantageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<advantageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdvantageCountAggregateInputType | true
    }

  export interface advantageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['advantage'], meta: { name: 'advantage' } }
    /**
     * Find zero or one Advantage that matches the filter.
     * @param {advantageFindUniqueArgs} args - Arguments to find a Advantage
     * @example
     * // Get one Advantage
     * const advantage = await prisma.advantage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends advantageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, advantageFindUniqueArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Advantage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {advantageFindUniqueOrThrowArgs} args - Arguments to find a Advantage
     * @example
     * // Get one Advantage
     * const advantage = await prisma.advantage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends advantageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, advantageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Advantage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advantageFindFirstArgs} args - Arguments to find a Advantage
     * @example
     * // Get one Advantage
     * const advantage = await prisma.advantage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends advantageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, advantageFindFirstArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Advantage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advantageFindFirstOrThrowArgs} args - Arguments to find a Advantage
     * @example
     * // Get one Advantage
     * const advantage = await prisma.advantage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends advantageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, advantageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Advantages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advantageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advantages
     * const advantages = await prisma.advantage.findMany()
     * 
     * // Get first 10 Advantages
     * const advantages = await prisma.advantage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advantageWithIdOnly = await prisma.advantage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends advantageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, advantageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Advantage.
     * @param {advantageCreateArgs} args - Arguments to create a Advantage.
     * @example
     * // Create one Advantage
     * const Advantage = await prisma.advantage.create({
     *   data: {
     *     // ... data to create a Advantage
     *   }
     * })
     * 
    **/
    create<T extends advantageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, advantageCreateArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Advantages.
     *     @param {advantageCreateManyArgs} args - Arguments to create many Advantages.
     *     @example
     *     // Create many Advantages
     *     const advantage = await prisma.advantage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends advantageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, advantageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Advantage.
     * @param {advantageDeleteArgs} args - Arguments to delete one Advantage.
     * @example
     * // Delete one Advantage
     * const Advantage = await prisma.advantage.delete({
     *   where: {
     *     // ... filter to delete one Advantage
     *   }
     * })
     * 
    **/
    delete<T extends advantageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, advantageDeleteArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Advantage.
     * @param {advantageUpdateArgs} args - Arguments to update one Advantage.
     * @example
     * // Update one Advantage
     * const advantage = await prisma.advantage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends advantageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, advantageUpdateArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Advantages.
     * @param {advantageDeleteManyArgs} args - Arguments to filter Advantages to delete.
     * @example
     * // Delete a few Advantages
     * const { count } = await prisma.advantage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends advantageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, advantageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advantages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advantageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advantages
     * const advantage = await prisma.advantage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends advantageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, advantageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Advantage.
     * @param {advantageUpsertArgs} args - Arguments to update or create a Advantage.
     * @example
     * // Update or create a Advantage
     * const advantage = await prisma.advantage.upsert({
     *   create: {
     *     // ... data to create a Advantage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advantage we want to update
     *   }
     * })
    **/
    upsert<T extends advantageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, advantageUpsertArgs<ExtArgs>>
    ): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Advantages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advantageCountArgs} args - Arguments to filter Advantages to count.
     * @example
     * // Count the number of Advantages
     * const count = await prisma.advantage.count({
     *   where: {
     *     // ... the filter for the Advantages we want to count
     *   }
     * })
    **/
    count<T extends advantageCountArgs>(
      args?: Subset<T, advantageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvantageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advantage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvantageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvantageAggregateArgs>(args: Subset<T, AdvantageAggregateArgs>): Prisma.PrismaPromise<GetAdvantageAggregateType<T>>

    /**
     * Group by Advantage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advantageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends advantageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: advantageGroupByArgs['orderBy'] }
        : { orderBy?: advantageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, advantageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvantageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the advantage model
   */
  readonly fields: advantageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for advantage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__advantageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facilitiesAdvantage<T extends advantage$facilitiesAdvantageArgs<ExtArgs> = {}>(args?: Subset<T, advantage$facilitiesAdvantageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the advantage model
   */ 
  interface advantageFieldRefs {
    readonly id: FieldRef<"advantage", 'String'>
    readonly type: FieldRef<"advantage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * advantage findUnique
   */
  export type advantageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * Filter, which advantage to fetch.
     */
    where: advantageWhereUniqueInput
  }


  /**
   * advantage findUniqueOrThrow
   */
  export type advantageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * Filter, which advantage to fetch.
     */
    where: advantageWhereUniqueInput
  }


  /**
   * advantage findFirst
   */
  export type advantageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * Filter, which advantage to fetch.
     */
    where?: advantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of advantages to fetch.
     */
    orderBy?: advantageOrderByWithRelationInput | advantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for advantages.
     */
    cursor?: advantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` advantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` advantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of advantages.
     */
    distinct?: AdvantageScalarFieldEnum | AdvantageScalarFieldEnum[]
  }


  /**
   * advantage findFirstOrThrow
   */
  export type advantageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * Filter, which advantage to fetch.
     */
    where?: advantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of advantages to fetch.
     */
    orderBy?: advantageOrderByWithRelationInput | advantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for advantages.
     */
    cursor?: advantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` advantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` advantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of advantages.
     */
    distinct?: AdvantageScalarFieldEnum | AdvantageScalarFieldEnum[]
  }


  /**
   * advantage findMany
   */
  export type advantageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * Filter, which advantages to fetch.
     */
    where?: advantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of advantages to fetch.
     */
    orderBy?: advantageOrderByWithRelationInput | advantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing advantages.
     */
    cursor?: advantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` advantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` advantages.
     */
    skip?: number
    distinct?: AdvantageScalarFieldEnum | AdvantageScalarFieldEnum[]
  }


  /**
   * advantage create
   */
  export type advantageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * The data needed to create a advantage.
     */
    data: XOR<advantageCreateInput, advantageUncheckedCreateInput>
  }


  /**
   * advantage createMany
   */
  export type advantageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many advantages.
     */
    data: advantageCreateManyInput | advantageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * advantage update
   */
  export type advantageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * The data needed to update a advantage.
     */
    data: XOR<advantageUpdateInput, advantageUncheckedUpdateInput>
    /**
     * Choose, which advantage to update.
     */
    where: advantageWhereUniqueInput
  }


  /**
   * advantage updateMany
   */
  export type advantageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update advantages.
     */
    data: XOR<advantageUpdateManyMutationInput, advantageUncheckedUpdateManyInput>
    /**
     * Filter which advantages to update
     */
    where?: advantageWhereInput
  }


  /**
   * advantage upsert
   */
  export type advantageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * The filter to search for the advantage to update in case it exists.
     */
    where: advantageWhereUniqueInput
    /**
     * In case the advantage found by the `where` argument doesn't exist, create a new advantage with this data.
     */
    create: XOR<advantageCreateInput, advantageUncheckedCreateInput>
    /**
     * In case the advantage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<advantageUpdateInput, advantageUncheckedUpdateInput>
  }


  /**
   * advantage delete
   */
  export type advantageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
    /**
     * Filter which advantage to delete.
     */
    where: advantageWhereUniqueInput
  }


  /**
   * advantage deleteMany
   */
  export type advantageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which advantages to delete
     */
    where?: advantageWhereInput
  }


  /**
   * advantage.facilitiesAdvantage
   */
  export type advantage$facilitiesAdvantageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    where?: facilitiesAdvantageWhereInput
    orderBy?: facilitiesAdvantageOrderByWithRelationInput | facilitiesAdvantageOrderByWithRelationInput[]
    cursor?: facilitiesAdvantageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilitiesAdvantageScalarFieldEnum | FacilitiesAdvantageScalarFieldEnum[]
  }


  /**
   * advantage without action
   */
  export type advantageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advantage
     */
    select?: advantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advantageInclude<ExtArgs> | null
  }



  /**
   * Model ad
   */

  export type AggregateAd = {
    _count: AdCountAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  export type AdMinAggregateOutputType = {
    company_id: string | null
    id: string | null
    name: string | null
    work_time: string | null
    travel_benefits: string | null
    gender: $Enums.gender | null
    seniority_level: $Enums.seniority_level | null
    cooperation_type: $Enums.cooperation_type | null
    important: boolean | null
    response: boolean | null
    itern: boolean | null
    telecommuting: boolean | null
    disabledPeople: boolean | null
    militaryOrder: boolean | null
    created_at: Date | null
  }

  export type AdMaxAggregateOutputType = {
    company_id: string | null
    id: string | null
    name: string | null
    work_time: string | null
    travel_benefits: string | null
    gender: $Enums.gender | null
    seniority_level: $Enums.seniority_level | null
    cooperation_type: $Enums.cooperation_type | null
    important: boolean | null
    response: boolean | null
    itern: boolean | null
    telecommuting: boolean | null
    disabledPeople: boolean | null
    militaryOrder: boolean | null
    created_at: Date | null
  }

  export type AdCountAggregateOutputType = {
    company_id: number
    id: number
    name: number
    price: number
    work_time: number
    travel_benefits: number
    age: number
    edicational_level: number
    key_indicator: number
    software_skills: number
    tags: number
    facilities: number
    gender: number
    seniority_level: number
    cooperation_type: number
    important: number
    response: number
    itern: number
    telecommuting: number
    disabledPeople: number
    militaryOrder: number
    created_at: number
    _all: number
  }


  export type AdMinAggregateInputType = {
    company_id?: true
    id?: true
    name?: true
    work_time?: true
    travel_benefits?: true
    gender?: true
    seniority_level?: true
    cooperation_type?: true
    important?: true
    response?: true
    itern?: true
    telecommuting?: true
    disabledPeople?: true
    militaryOrder?: true
    created_at?: true
  }

  export type AdMaxAggregateInputType = {
    company_id?: true
    id?: true
    name?: true
    work_time?: true
    travel_benefits?: true
    gender?: true
    seniority_level?: true
    cooperation_type?: true
    important?: true
    response?: true
    itern?: true
    telecommuting?: true
    disabledPeople?: true
    militaryOrder?: true
    created_at?: true
  }

  export type AdCountAggregateInputType = {
    company_id?: true
    id?: true
    name?: true
    price?: true
    work_time?: true
    travel_benefits?: true
    age?: true
    edicational_level?: true
    key_indicator?: true
    software_skills?: true
    tags?: true
    facilities?: true
    gender?: true
    seniority_level?: true
    cooperation_type?: true
    important?: true
    response?: true
    itern?: true
    telecommuting?: true
    disabledPeople?: true
    militaryOrder?: true
    created_at?: true
    _all?: true
  }

  export type AdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ad to aggregate.
     */
    where?: adWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ads to fetch.
     */
    orderBy?: adOrderByWithRelationInput | adOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ads
    **/
    _count?: true | AdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdMaxAggregateInputType
  }

  export type GetAdAggregateType<T extends AdAggregateArgs> = {
        [P in keyof T & keyof AggregateAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd[P]>
      : GetScalarType<T[P], AggregateAd[P]>
  }




  export type adGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adWhereInput
    orderBy?: adOrderByWithAggregationInput | adOrderByWithAggregationInput[]
    by: AdScalarFieldEnum[] | AdScalarFieldEnum
    having?: adScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdCountAggregateInputType | true
    _min?: AdMinAggregateInputType
    _max?: AdMaxAggregateInputType
  }

  export type AdGroupByOutputType = {
    company_id: string
    id: string
    name: string
    price: JsonValue
    work_time: string
    travel_benefits: string
    age: JsonValue
    edicational_level: JsonValue
    key_indicator: JsonValue
    software_skills: JsonValue
    tags: JsonValue
    facilities: JsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important: boolean
    response: boolean
    itern: boolean
    telecommuting: boolean
    disabledPeople: boolean
    militaryOrder: boolean
    created_at: Date
    _count: AdCountAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  type GetAdGroupByPayload<T extends adGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupByOutputType[P]>
        }
      >
    >


  export type adSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    id?: boolean
    name?: boolean
    price?: boolean
    work_time?: boolean
    travel_benefits?: boolean
    age?: boolean
    edicational_level?: boolean
    key_indicator?: boolean
    software_skills?: boolean
    tags?: boolean
    facilities?: boolean
    gender?: boolean
    seniority_level?: boolean
    cooperation_type?: boolean
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: boolean
    adsCategory_collections?: boolean | ad$adsCategory_collectionsArgs<ExtArgs>
    facilitiesAdvantage?: boolean | ad$facilitiesAdvantageArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    cvAd?: boolean | ad$cvAdArgs<ExtArgs>
    cv?: boolean | ad$cvArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type adSelectScalar = {
    company_id?: boolean
    id?: boolean
    name?: boolean
    price?: boolean
    work_time?: boolean
    travel_benefits?: boolean
    age?: boolean
    edicational_level?: boolean
    key_indicator?: boolean
    software_skills?: boolean
    tags?: boolean
    facilities?: boolean
    gender?: boolean
    seniority_level?: boolean
    cooperation_type?: boolean
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: boolean
  }

  export type adInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adsCategory_collections?: boolean | ad$adsCategory_collectionsArgs<ExtArgs>
    facilitiesAdvantage?: boolean | ad$facilitiesAdvantageArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    cvAd?: boolean | ad$cvAdArgs<ExtArgs>
    cv?: boolean | ad$cvArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $adPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ad"
    objects: {
      adsCategory_collections: Prisma.$adsCategory_collectionPayload<ExtArgs>[]
      facilitiesAdvantage: Prisma.$facilitiesAdvantagePayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs>
      cvAd: Prisma.$cvAdPayload<ExtArgs>[]
      cv: Prisma.$cvPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: string
      id: string
      name: string
      price: Prisma.JsonValue
      work_time: string
      travel_benefits: string
      age: Prisma.JsonValue
      edicational_level: Prisma.JsonValue
      key_indicator: Prisma.JsonValue
      software_skills: Prisma.JsonValue
      tags: Prisma.JsonValue
      facilities: Prisma.JsonValue
      gender: $Enums.gender
      seniority_level: $Enums.seniority_level
      cooperation_type: $Enums.cooperation_type
      important: boolean
      response: boolean
      itern: boolean
      telecommuting: boolean
      disabledPeople: boolean
      militaryOrder: boolean
      created_at: Date
    }, ExtArgs["result"]["ad"]>
    composites: {}
  }


  type adGetPayload<S extends boolean | null | undefined | adDefaultArgs> = $Result.GetResult<Prisma.$adPayload, S>

  type adCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdCountAggregateInputType | true
    }

  export interface adDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ad'], meta: { name: 'ad' } }
    /**
     * Find zero or one Ad that matches the filter.
     * @param {adFindUniqueArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adFindUniqueArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ad that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adFindUniqueOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adFindFirstArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adFindFirstArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adFindFirstOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ad.findMany()
     * 
     * // Get first 10 Ads
     * const ads = await prisma.ad.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const adWithCompany_idOnly = await prisma.ad.findMany({ select: { company_id: true } })
     * 
    **/
    findMany<T extends adFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ad.
     * @param {adCreateArgs} args - Arguments to create a Ad.
     * @example
     * // Create one Ad
     * const Ad = await prisma.ad.create({
     *   data: {
     *     // ... data to create a Ad
     *   }
     * })
     * 
    **/
    create<T extends adCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adCreateArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ads.
     *     @param {adCreateManyArgs} args - Arguments to create many Ads.
     *     @example
     *     // Create many Ads
     *     const ad = await prisma.ad.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ad.
     * @param {adDeleteArgs} args - Arguments to delete one Ad.
     * @example
     * // Delete one Ad
     * const Ad = await prisma.ad.delete({
     *   where: {
     *     // ... filter to delete one Ad
     *   }
     * })
     * 
    **/
    delete<T extends adDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adDeleteArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ad.
     * @param {adUpdateArgs} args - Arguments to update one Ad.
     * @example
     * // Update one Ad
     * const ad = await prisma.ad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adUpdateArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ads.
     * @param {adDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ad.
     * @param {adUpsertArgs} args - Arguments to update or create a Ad.
     * @example
     * // Update or create a Ad
     * const ad = await prisma.ad.upsert({
     *   create: {
     *     // ... data to create a Ad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad we want to update
     *   }
     * })
    **/
    upsert<T extends adUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adUpsertArgs<ExtArgs>>
    ): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ad.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
    **/
    count<T extends adCountArgs>(
      args?: Subset<T, adCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdAggregateArgs>(args: Subset<T, AdAggregateArgs>): Prisma.PrismaPromise<GetAdAggregateType<T>>

    /**
     * Group by Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adGroupByArgs['orderBy'] }
        : { orderBy?: adGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ad model
   */
  readonly fields: adFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    adsCategory_collections<T extends ad$adsCategory_collectionsArgs<ExtArgs> = {}>(args?: Subset<T, ad$adsCategory_collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    facilitiesAdvantage<T extends ad$facilitiesAdvantageArgs<ExtArgs> = {}>(args?: Subset<T, ad$facilitiesAdvantageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cvAd<T extends ad$cvAdArgs<ExtArgs> = {}>(args?: Subset<T, ad$cvAdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findMany'> | Null>;

    cv<T extends ad$cvArgs<ExtArgs> = {}>(args?: Subset<T, ad$cvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ad model
   */ 
  interface adFieldRefs {
    readonly company_id: FieldRef<"ad", 'String'>
    readonly id: FieldRef<"ad", 'String'>
    readonly name: FieldRef<"ad", 'String'>
    readonly price: FieldRef<"ad", 'Json'>
    readonly work_time: FieldRef<"ad", 'String'>
    readonly travel_benefits: FieldRef<"ad", 'String'>
    readonly age: FieldRef<"ad", 'Json'>
    readonly edicational_level: FieldRef<"ad", 'Json'>
    readonly key_indicator: FieldRef<"ad", 'Json'>
    readonly software_skills: FieldRef<"ad", 'Json'>
    readonly tags: FieldRef<"ad", 'Json'>
    readonly facilities: FieldRef<"ad", 'Json'>
    readonly gender: FieldRef<"ad", 'gender'>
    readonly seniority_level: FieldRef<"ad", 'seniority_level'>
    readonly cooperation_type: FieldRef<"ad", 'cooperation_type'>
    readonly important: FieldRef<"ad", 'Boolean'>
    readonly response: FieldRef<"ad", 'Boolean'>
    readonly itern: FieldRef<"ad", 'Boolean'>
    readonly telecommuting: FieldRef<"ad", 'Boolean'>
    readonly disabledPeople: FieldRef<"ad", 'Boolean'>
    readonly militaryOrder: FieldRef<"ad", 'Boolean'>
    readonly created_at: FieldRef<"ad", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ad findUnique
   */
  export type adFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * Filter, which ad to fetch.
     */
    where: adWhereUniqueInput
  }


  /**
   * ad findUniqueOrThrow
   */
  export type adFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * Filter, which ad to fetch.
     */
    where: adWhereUniqueInput
  }


  /**
   * ad findFirst
   */
  export type adFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * Filter, which ad to fetch.
     */
    where?: adWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ads to fetch.
     */
    orderBy?: adOrderByWithRelationInput | adOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ads.
     */
    cursor?: adWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * ad findFirstOrThrow
   */
  export type adFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * Filter, which ad to fetch.
     */
    where?: adWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ads to fetch.
     */
    orderBy?: adOrderByWithRelationInput | adOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ads.
     */
    cursor?: adWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * ad findMany
   */
  export type adFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * Filter, which ads to fetch.
     */
    where?: adWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ads to fetch.
     */
    orderBy?: adOrderByWithRelationInput | adOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ads.
     */
    cursor?: adWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ads.
     */
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }


  /**
   * ad create
   */
  export type adCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * The data needed to create a ad.
     */
    data: XOR<adCreateInput, adUncheckedCreateInput>
  }


  /**
   * ad createMany
   */
  export type adCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ads.
     */
    data: adCreateManyInput | adCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ad update
   */
  export type adUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * The data needed to update a ad.
     */
    data: XOR<adUpdateInput, adUncheckedUpdateInput>
    /**
     * Choose, which ad to update.
     */
    where: adWhereUniqueInput
  }


  /**
   * ad updateMany
   */
  export type adUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ads.
     */
    data: XOR<adUpdateManyMutationInput, adUncheckedUpdateManyInput>
    /**
     * Filter which ads to update
     */
    where?: adWhereInput
  }


  /**
   * ad upsert
   */
  export type adUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * The filter to search for the ad to update in case it exists.
     */
    where: adWhereUniqueInput
    /**
     * In case the ad found by the `where` argument doesn't exist, create a new ad with this data.
     */
    create: XOR<adCreateInput, adUncheckedCreateInput>
    /**
     * In case the ad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adUpdateInput, adUncheckedUpdateInput>
  }


  /**
   * ad delete
   */
  export type adDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    /**
     * Filter which ad to delete.
     */
    where: adWhereUniqueInput
  }


  /**
   * ad deleteMany
   */
  export type adDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ads to delete
     */
    where?: adWhereInput
  }


  /**
   * ad.adsCategory_collections
   */
  export type ad$adsCategory_collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    where?: adsCategory_collectionWhereInput
    orderBy?: adsCategory_collectionOrderByWithRelationInput | adsCategory_collectionOrderByWithRelationInput[]
    cursor?: adsCategory_collectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdsCategory_collectionScalarFieldEnum | AdsCategory_collectionScalarFieldEnum[]
  }


  /**
   * ad.facilitiesAdvantage
   */
  export type ad$facilitiesAdvantageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    where?: facilitiesAdvantageWhereInput
    orderBy?: facilitiesAdvantageOrderByWithRelationInput | facilitiesAdvantageOrderByWithRelationInput[]
    cursor?: facilitiesAdvantageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilitiesAdvantageScalarFieldEnum | FacilitiesAdvantageScalarFieldEnum[]
  }


  /**
   * ad.cvAd
   */
  export type ad$cvAdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    where?: cvAdWhereInput
    orderBy?: cvAdOrderByWithRelationInput | cvAdOrderByWithRelationInput[]
    cursor?: cvAdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CvAdScalarFieldEnum | CvAdScalarFieldEnum[]
  }


  /**
   * ad.cv
   */
  export type ad$cvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    where?: cvWhereInput
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    cursor?: cvWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CvScalarFieldEnum | CvScalarFieldEnum[]
  }


  /**
   * ad without action
   */
  export type adDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
  }



  /**
   * Model adsCategory_collection
   */

  export type AggregateAdsCategory_collection = {
    _count: AdsCategory_collectionCountAggregateOutputType | null
    _min: AdsCategory_collectionMinAggregateOutputType | null
    _max: AdsCategory_collectionMaxAggregateOutputType | null
  }

  export type AdsCategory_collectionMinAggregateOutputType = {
    ad_id: string | null
    category_collection_id: string | null
  }

  export type AdsCategory_collectionMaxAggregateOutputType = {
    ad_id: string | null
    category_collection_id: string | null
  }

  export type AdsCategory_collectionCountAggregateOutputType = {
    ad_id: number
    category_collection_id: number
    _all: number
  }


  export type AdsCategory_collectionMinAggregateInputType = {
    ad_id?: true
    category_collection_id?: true
  }

  export type AdsCategory_collectionMaxAggregateInputType = {
    ad_id?: true
    category_collection_id?: true
  }

  export type AdsCategory_collectionCountAggregateInputType = {
    ad_id?: true
    category_collection_id?: true
    _all?: true
  }

  export type AdsCategory_collectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adsCategory_collection to aggregate.
     */
    where?: adsCategory_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adsCategory_collections to fetch.
     */
    orderBy?: adsCategory_collectionOrderByWithRelationInput | adsCategory_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adsCategory_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adsCategory_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adsCategory_collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adsCategory_collections
    **/
    _count?: true | AdsCategory_collectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdsCategory_collectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdsCategory_collectionMaxAggregateInputType
  }

  export type GetAdsCategory_collectionAggregateType<T extends AdsCategory_collectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdsCategory_collection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdsCategory_collection[P]>
      : GetScalarType<T[P], AggregateAdsCategory_collection[P]>
  }




  export type adsCategory_collectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adsCategory_collectionWhereInput
    orderBy?: adsCategory_collectionOrderByWithAggregationInput | adsCategory_collectionOrderByWithAggregationInput[]
    by: AdsCategory_collectionScalarFieldEnum[] | AdsCategory_collectionScalarFieldEnum
    having?: adsCategory_collectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdsCategory_collectionCountAggregateInputType | true
    _min?: AdsCategory_collectionMinAggregateInputType
    _max?: AdsCategory_collectionMaxAggregateInputType
  }

  export type AdsCategory_collectionGroupByOutputType = {
    ad_id: string
    category_collection_id: string
    _count: AdsCategory_collectionCountAggregateOutputType | null
    _min: AdsCategory_collectionMinAggregateOutputType | null
    _max: AdsCategory_collectionMaxAggregateOutputType | null
  }

  type GetAdsCategory_collectionGroupByPayload<T extends adsCategory_collectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdsCategory_collectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdsCategory_collectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdsCategory_collectionGroupByOutputType[P]>
            : GetScalarType<T[P], AdsCategory_collectionGroupByOutputType[P]>
        }
      >
    >


  export type adsCategory_collectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ad_id?: boolean
    category_collection_id?: boolean
    ad?: boolean | adDefaultArgs<ExtArgs>
    category_collections?: boolean | category_collectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adsCategory_collection"]>

  export type adsCategory_collectionSelectScalar = {
    ad_id?: boolean
    category_collection_id?: boolean
  }

  export type adsCategory_collectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | adDefaultArgs<ExtArgs>
    category_collections?: boolean | category_collectionDefaultArgs<ExtArgs>
  }


  export type $adsCategory_collectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adsCategory_collection"
    objects: {
      ad: Prisma.$adPayload<ExtArgs>
      category_collections: Prisma.$category_collectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ad_id: string
      category_collection_id: string
    }, ExtArgs["result"]["adsCategory_collection"]>
    composites: {}
  }


  type adsCategory_collectionGetPayload<S extends boolean | null | undefined | adsCategory_collectionDefaultArgs> = $Result.GetResult<Prisma.$adsCategory_collectionPayload, S>

  type adsCategory_collectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adsCategory_collectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdsCategory_collectionCountAggregateInputType | true
    }

  export interface adsCategory_collectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adsCategory_collection'], meta: { name: 'adsCategory_collection' } }
    /**
     * Find zero or one AdsCategory_collection that matches the filter.
     * @param {adsCategory_collectionFindUniqueArgs} args - Arguments to find a AdsCategory_collection
     * @example
     * // Get one AdsCategory_collection
     * const adsCategory_collection = await prisma.adsCategory_collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adsCategory_collectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adsCategory_collectionFindUniqueArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AdsCategory_collection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adsCategory_collectionFindUniqueOrThrowArgs} args - Arguments to find a AdsCategory_collection
     * @example
     * // Get one AdsCategory_collection
     * const adsCategory_collection = await prisma.adsCategory_collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adsCategory_collectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adsCategory_collectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AdsCategory_collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adsCategory_collectionFindFirstArgs} args - Arguments to find a AdsCategory_collection
     * @example
     * // Get one AdsCategory_collection
     * const adsCategory_collection = await prisma.adsCategory_collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adsCategory_collectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adsCategory_collectionFindFirstArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AdsCategory_collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adsCategory_collectionFindFirstOrThrowArgs} args - Arguments to find a AdsCategory_collection
     * @example
     * // Get one AdsCategory_collection
     * const adsCategory_collection = await prisma.adsCategory_collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adsCategory_collectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adsCategory_collectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AdsCategory_collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adsCategory_collectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdsCategory_collections
     * const adsCategory_collections = await prisma.adsCategory_collection.findMany()
     * 
     * // Get first 10 AdsCategory_collections
     * const adsCategory_collections = await prisma.adsCategory_collection.findMany({ take: 10 })
     * 
     * // Only select the `ad_id`
     * const adsCategory_collectionWithAd_idOnly = await prisma.adsCategory_collection.findMany({ select: { ad_id: true } })
     * 
    **/
    findMany<T extends adsCategory_collectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adsCategory_collectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AdsCategory_collection.
     * @param {adsCategory_collectionCreateArgs} args - Arguments to create a AdsCategory_collection.
     * @example
     * // Create one AdsCategory_collection
     * const AdsCategory_collection = await prisma.adsCategory_collection.create({
     *   data: {
     *     // ... data to create a AdsCategory_collection
     *   }
     * })
     * 
    **/
    create<T extends adsCategory_collectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adsCategory_collectionCreateArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AdsCategory_collections.
     *     @param {adsCategory_collectionCreateManyArgs} args - Arguments to create many AdsCategory_collections.
     *     @example
     *     // Create many AdsCategory_collections
     *     const adsCategory_collection = await prisma.adsCategory_collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adsCategory_collectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adsCategory_collectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdsCategory_collection.
     * @param {adsCategory_collectionDeleteArgs} args - Arguments to delete one AdsCategory_collection.
     * @example
     * // Delete one AdsCategory_collection
     * const AdsCategory_collection = await prisma.adsCategory_collection.delete({
     *   where: {
     *     // ... filter to delete one AdsCategory_collection
     *   }
     * })
     * 
    **/
    delete<T extends adsCategory_collectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adsCategory_collectionDeleteArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AdsCategory_collection.
     * @param {adsCategory_collectionUpdateArgs} args - Arguments to update one AdsCategory_collection.
     * @example
     * // Update one AdsCategory_collection
     * const adsCategory_collection = await prisma.adsCategory_collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adsCategory_collectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adsCategory_collectionUpdateArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AdsCategory_collections.
     * @param {adsCategory_collectionDeleteManyArgs} args - Arguments to filter AdsCategory_collections to delete.
     * @example
     * // Delete a few AdsCategory_collections
     * const { count } = await prisma.adsCategory_collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adsCategory_collectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adsCategory_collectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdsCategory_collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adsCategory_collectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdsCategory_collections
     * const adsCategory_collection = await prisma.adsCategory_collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adsCategory_collectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adsCategory_collectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdsCategory_collection.
     * @param {adsCategory_collectionUpsertArgs} args - Arguments to update or create a AdsCategory_collection.
     * @example
     * // Update or create a AdsCategory_collection
     * const adsCategory_collection = await prisma.adsCategory_collection.upsert({
     *   create: {
     *     // ... data to create a AdsCategory_collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdsCategory_collection we want to update
     *   }
     * })
    **/
    upsert<T extends adsCategory_collectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adsCategory_collectionUpsertArgs<ExtArgs>>
    ): Prisma__adsCategory_collectionClient<$Result.GetResult<Prisma.$adsCategory_collectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AdsCategory_collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adsCategory_collectionCountArgs} args - Arguments to filter AdsCategory_collections to count.
     * @example
     * // Count the number of AdsCategory_collections
     * const count = await prisma.adsCategory_collection.count({
     *   where: {
     *     // ... the filter for the AdsCategory_collections we want to count
     *   }
     * })
    **/
    count<T extends adsCategory_collectionCountArgs>(
      args?: Subset<T, adsCategory_collectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdsCategory_collectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdsCategory_collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsCategory_collectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdsCategory_collectionAggregateArgs>(args: Subset<T, AdsCategory_collectionAggregateArgs>): Prisma.PrismaPromise<GetAdsCategory_collectionAggregateType<T>>

    /**
     * Group by AdsCategory_collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adsCategory_collectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adsCategory_collectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adsCategory_collectionGroupByArgs['orderBy'] }
        : { orderBy?: adsCategory_collectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adsCategory_collectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdsCategory_collectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adsCategory_collection model
   */
  readonly fields: adsCategory_collectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adsCategory_collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adsCategory_collectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ad<T extends adDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adDefaultArgs<ExtArgs>>): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category_collections<T extends category_collectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, category_collectionDefaultArgs<ExtArgs>>): Prisma__category_collectionClient<$Result.GetResult<Prisma.$category_collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the adsCategory_collection model
   */ 
  interface adsCategory_collectionFieldRefs {
    readonly ad_id: FieldRef<"adsCategory_collection", 'String'>
    readonly category_collection_id: FieldRef<"adsCategory_collection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * adsCategory_collection findUnique
   */
  export type adsCategory_collectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * Filter, which adsCategory_collection to fetch.
     */
    where: adsCategory_collectionWhereUniqueInput
  }


  /**
   * adsCategory_collection findUniqueOrThrow
   */
  export type adsCategory_collectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * Filter, which adsCategory_collection to fetch.
     */
    where: adsCategory_collectionWhereUniqueInput
  }


  /**
   * adsCategory_collection findFirst
   */
  export type adsCategory_collectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * Filter, which adsCategory_collection to fetch.
     */
    where?: adsCategory_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adsCategory_collections to fetch.
     */
    orderBy?: adsCategory_collectionOrderByWithRelationInput | adsCategory_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adsCategory_collections.
     */
    cursor?: adsCategory_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adsCategory_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adsCategory_collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adsCategory_collections.
     */
    distinct?: AdsCategory_collectionScalarFieldEnum | AdsCategory_collectionScalarFieldEnum[]
  }


  /**
   * adsCategory_collection findFirstOrThrow
   */
  export type adsCategory_collectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * Filter, which adsCategory_collection to fetch.
     */
    where?: adsCategory_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adsCategory_collections to fetch.
     */
    orderBy?: adsCategory_collectionOrderByWithRelationInput | adsCategory_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adsCategory_collections.
     */
    cursor?: adsCategory_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adsCategory_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adsCategory_collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adsCategory_collections.
     */
    distinct?: AdsCategory_collectionScalarFieldEnum | AdsCategory_collectionScalarFieldEnum[]
  }


  /**
   * adsCategory_collection findMany
   */
  export type adsCategory_collectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * Filter, which adsCategory_collections to fetch.
     */
    where?: adsCategory_collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adsCategory_collections to fetch.
     */
    orderBy?: adsCategory_collectionOrderByWithRelationInput | adsCategory_collectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adsCategory_collections.
     */
    cursor?: adsCategory_collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adsCategory_collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adsCategory_collections.
     */
    skip?: number
    distinct?: AdsCategory_collectionScalarFieldEnum | AdsCategory_collectionScalarFieldEnum[]
  }


  /**
   * adsCategory_collection create
   */
  export type adsCategory_collectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * The data needed to create a adsCategory_collection.
     */
    data: XOR<adsCategory_collectionCreateInput, adsCategory_collectionUncheckedCreateInput>
  }


  /**
   * adsCategory_collection createMany
   */
  export type adsCategory_collectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adsCategory_collections.
     */
    data: adsCategory_collectionCreateManyInput | adsCategory_collectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * adsCategory_collection update
   */
  export type adsCategory_collectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * The data needed to update a adsCategory_collection.
     */
    data: XOR<adsCategory_collectionUpdateInput, adsCategory_collectionUncheckedUpdateInput>
    /**
     * Choose, which adsCategory_collection to update.
     */
    where: adsCategory_collectionWhereUniqueInput
  }


  /**
   * adsCategory_collection updateMany
   */
  export type adsCategory_collectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adsCategory_collections.
     */
    data: XOR<adsCategory_collectionUpdateManyMutationInput, adsCategory_collectionUncheckedUpdateManyInput>
    /**
     * Filter which adsCategory_collections to update
     */
    where?: adsCategory_collectionWhereInput
  }


  /**
   * adsCategory_collection upsert
   */
  export type adsCategory_collectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * The filter to search for the adsCategory_collection to update in case it exists.
     */
    where: adsCategory_collectionWhereUniqueInput
    /**
     * In case the adsCategory_collection found by the `where` argument doesn't exist, create a new adsCategory_collection with this data.
     */
    create: XOR<adsCategory_collectionCreateInput, adsCategory_collectionUncheckedCreateInput>
    /**
     * In case the adsCategory_collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adsCategory_collectionUpdateInput, adsCategory_collectionUncheckedUpdateInput>
  }


  /**
   * adsCategory_collection delete
   */
  export type adsCategory_collectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
    /**
     * Filter which adsCategory_collection to delete.
     */
    where: adsCategory_collectionWhereUniqueInput
  }


  /**
   * adsCategory_collection deleteMany
   */
  export type adsCategory_collectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adsCategory_collections to delete
     */
    where?: adsCategory_collectionWhereInput
  }


  /**
   * adsCategory_collection without action
   */
  export type adsCategory_collectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adsCategory_collection
     */
    select?: adsCategory_collectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adsCategory_collectionInclude<ExtArgs> | null
  }



  /**
   * Model facilitiesAdvantage
   */

  export type AggregateFacilitiesAdvantage = {
    _count: FacilitiesAdvantageCountAggregateOutputType | null
    _min: FacilitiesAdvantageMinAggregateOutputType | null
    _max: FacilitiesAdvantageMaxAggregateOutputType | null
  }

  export type FacilitiesAdvantageMinAggregateOutputType = {
    ad_id: string | null
    advantage_id: string | null
  }

  export type FacilitiesAdvantageMaxAggregateOutputType = {
    ad_id: string | null
    advantage_id: string | null
  }

  export type FacilitiesAdvantageCountAggregateOutputType = {
    ad_id: number
    advantage_id: number
    _all: number
  }


  export type FacilitiesAdvantageMinAggregateInputType = {
    ad_id?: true
    advantage_id?: true
  }

  export type FacilitiesAdvantageMaxAggregateInputType = {
    ad_id?: true
    advantage_id?: true
  }

  export type FacilitiesAdvantageCountAggregateInputType = {
    ad_id?: true
    advantage_id?: true
    _all?: true
  }

  export type FacilitiesAdvantageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facilitiesAdvantage to aggregate.
     */
    where?: facilitiesAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilitiesAdvantages to fetch.
     */
    orderBy?: facilitiesAdvantageOrderByWithRelationInput | facilitiesAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facilitiesAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilitiesAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilitiesAdvantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facilitiesAdvantages
    **/
    _count?: true | FacilitiesAdvantageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilitiesAdvantageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilitiesAdvantageMaxAggregateInputType
  }

  export type GetFacilitiesAdvantageAggregateType<T extends FacilitiesAdvantageAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilitiesAdvantage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilitiesAdvantage[P]>
      : GetScalarType<T[P], AggregateFacilitiesAdvantage[P]>
  }




  export type facilitiesAdvantageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilitiesAdvantageWhereInput
    orderBy?: facilitiesAdvantageOrderByWithAggregationInput | facilitiesAdvantageOrderByWithAggregationInput[]
    by: FacilitiesAdvantageScalarFieldEnum[] | FacilitiesAdvantageScalarFieldEnum
    having?: facilitiesAdvantageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilitiesAdvantageCountAggregateInputType | true
    _min?: FacilitiesAdvantageMinAggregateInputType
    _max?: FacilitiesAdvantageMaxAggregateInputType
  }

  export type FacilitiesAdvantageGroupByOutputType = {
    ad_id: string
    advantage_id: string
    _count: FacilitiesAdvantageCountAggregateOutputType | null
    _min: FacilitiesAdvantageMinAggregateOutputType | null
    _max: FacilitiesAdvantageMaxAggregateOutputType | null
  }

  type GetFacilitiesAdvantageGroupByPayload<T extends facilitiesAdvantageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilitiesAdvantageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilitiesAdvantageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilitiesAdvantageGroupByOutputType[P]>
            : GetScalarType<T[P], FacilitiesAdvantageGroupByOutputType[P]>
        }
      >
    >


  export type facilitiesAdvantageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ad_id?: boolean
    advantage_id?: boolean
    ad?: boolean | adDefaultArgs<ExtArgs>
    advantage?: boolean | advantageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilitiesAdvantage"]>

  export type facilitiesAdvantageSelectScalar = {
    ad_id?: boolean
    advantage_id?: boolean
  }

  export type facilitiesAdvantageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | adDefaultArgs<ExtArgs>
    advantage?: boolean | advantageDefaultArgs<ExtArgs>
  }


  export type $facilitiesAdvantagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facilitiesAdvantage"
    objects: {
      ad: Prisma.$adPayload<ExtArgs>
      advantage: Prisma.$advantagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ad_id: string
      advantage_id: string
    }, ExtArgs["result"]["facilitiesAdvantage"]>
    composites: {}
  }


  type facilitiesAdvantageGetPayload<S extends boolean | null | undefined | facilitiesAdvantageDefaultArgs> = $Result.GetResult<Prisma.$facilitiesAdvantagePayload, S>

  type facilitiesAdvantageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facilitiesAdvantageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacilitiesAdvantageCountAggregateInputType | true
    }

  export interface facilitiesAdvantageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facilitiesAdvantage'], meta: { name: 'facilitiesAdvantage' } }
    /**
     * Find zero or one FacilitiesAdvantage that matches the filter.
     * @param {facilitiesAdvantageFindUniqueArgs} args - Arguments to find a FacilitiesAdvantage
     * @example
     * // Get one FacilitiesAdvantage
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends facilitiesAdvantageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, facilitiesAdvantageFindUniqueArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FacilitiesAdvantage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {facilitiesAdvantageFindUniqueOrThrowArgs} args - Arguments to find a FacilitiesAdvantage
     * @example
     * // Get one FacilitiesAdvantage
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends facilitiesAdvantageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facilitiesAdvantageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FacilitiesAdvantage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilitiesAdvantageFindFirstArgs} args - Arguments to find a FacilitiesAdvantage
     * @example
     * // Get one FacilitiesAdvantage
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends facilitiesAdvantageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, facilitiesAdvantageFindFirstArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FacilitiesAdvantage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilitiesAdvantageFindFirstOrThrowArgs} args - Arguments to find a FacilitiesAdvantage
     * @example
     * // Get one FacilitiesAdvantage
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends facilitiesAdvantageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facilitiesAdvantageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FacilitiesAdvantages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilitiesAdvantageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilitiesAdvantages
     * const facilitiesAdvantages = await prisma.facilitiesAdvantage.findMany()
     * 
     * // Get first 10 FacilitiesAdvantages
     * const facilitiesAdvantages = await prisma.facilitiesAdvantage.findMany({ take: 10 })
     * 
     * // Only select the `ad_id`
     * const facilitiesAdvantageWithAd_idOnly = await prisma.facilitiesAdvantage.findMany({ select: { ad_id: true } })
     * 
    **/
    findMany<T extends facilitiesAdvantageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facilitiesAdvantageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FacilitiesAdvantage.
     * @param {facilitiesAdvantageCreateArgs} args - Arguments to create a FacilitiesAdvantage.
     * @example
     * // Create one FacilitiesAdvantage
     * const FacilitiesAdvantage = await prisma.facilitiesAdvantage.create({
     *   data: {
     *     // ... data to create a FacilitiesAdvantage
     *   }
     * })
     * 
    **/
    create<T extends facilitiesAdvantageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, facilitiesAdvantageCreateArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FacilitiesAdvantages.
     *     @param {facilitiesAdvantageCreateManyArgs} args - Arguments to create many FacilitiesAdvantages.
     *     @example
     *     // Create many FacilitiesAdvantages
     *     const facilitiesAdvantage = await prisma.facilitiesAdvantage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends facilitiesAdvantageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facilitiesAdvantageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacilitiesAdvantage.
     * @param {facilitiesAdvantageDeleteArgs} args - Arguments to delete one FacilitiesAdvantage.
     * @example
     * // Delete one FacilitiesAdvantage
     * const FacilitiesAdvantage = await prisma.facilitiesAdvantage.delete({
     *   where: {
     *     // ... filter to delete one FacilitiesAdvantage
     *   }
     * })
     * 
    **/
    delete<T extends facilitiesAdvantageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, facilitiesAdvantageDeleteArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FacilitiesAdvantage.
     * @param {facilitiesAdvantageUpdateArgs} args - Arguments to update one FacilitiesAdvantage.
     * @example
     * // Update one FacilitiesAdvantage
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends facilitiesAdvantageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, facilitiesAdvantageUpdateArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FacilitiesAdvantages.
     * @param {facilitiesAdvantageDeleteManyArgs} args - Arguments to filter FacilitiesAdvantages to delete.
     * @example
     * // Delete a few FacilitiesAdvantages
     * const { count } = await prisma.facilitiesAdvantage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends facilitiesAdvantageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facilitiesAdvantageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilitiesAdvantages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilitiesAdvantageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilitiesAdvantages
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends facilitiesAdvantageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, facilitiesAdvantageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacilitiesAdvantage.
     * @param {facilitiesAdvantageUpsertArgs} args - Arguments to update or create a FacilitiesAdvantage.
     * @example
     * // Update or create a FacilitiesAdvantage
     * const facilitiesAdvantage = await prisma.facilitiesAdvantage.upsert({
     *   create: {
     *     // ... data to create a FacilitiesAdvantage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilitiesAdvantage we want to update
     *   }
     * })
    **/
    upsert<T extends facilitiesAdvantageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, facilitiesAdvantageUpsertArgs<ExtArgs>>
    ): Prisma__facilitiesAdvantageClient<$Result.GetResult<Prisma.$facilitiesAdvantagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FacilitiesAdvantages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilitiesAdvantageCountArgs} args - Arguments to filter FacilitiesAdvantages to count.
     * @example
     * // Count the number of FacilitiesAdvantages
     * const count = await prisma.facilitiesAdvantage.count({
     *   where: {
     *     // ... the filter for the FacilitiesAdvantages we want to count
     *   }
     * })
    **/
    count<T extends facilitiesAdvantageCountArgs>(
      args?: Subset<T, facilitiesAdvantageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilitiesAdvantageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilitiesAdvantage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilitiesAdvantageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilitiesAdvantageAggregateArgs>(args: Subset<T, FacilitiesAdvantageAggregateArgs>): Prisma.PrismaPromise<GetFacilitiesAdvantageAggregateType<T>>

    /**
     * Group by FacilitiesAdvantage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilitiesAdvantageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facilitiesAdvantageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facilitiesAdvantageGroupByArgs['orderBy'] }
        : { orderBy?: facilitiesAdvantageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facilitiesAdvantageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilitiesAdvantageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facilitiesAdvantage model
   */
  readonly fields: facilitiesAdvantageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facilitiesAdvantage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facilitiesAdvantageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ad<T extends adDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adDefaultArgs<ExtArgs>>): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    advantage<T extends advantageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, advantageDefaultArgs<ExtArgs>>): Prisma__advantageClient<$Result.GetResult<Prisma.$advantagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the facilitiesAdvantage model
   */ 
  interface facilitiesAdvantageFieldRefs {
    readonly ad_id: FieldRef<"facilitiesAdvantage", 'String'>
    readonly advantage_id: FieldRef<"facilitiesAdvantage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * facilitiesAdvantage findUnique
   */
  export type facilitiesAdvantageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * Filter, which facilitiesAdvantage to fetch.
     */
    where: facilitiesAdvantageWhereUniqueInput
  }


  /**
   * facilitiesAdvantage findUniqueOrThrow
   */
  export type facilitiesAdvantageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * Filter, which facilitiesAdvantage to fetch.
     */
    where: facilitiesAdvantageWhereUniqueInput
  }


  /**
   * facilitiesAdvantage findFirst
   */
  export type facilitiesAdvantageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * Filter, which facilitiesAdvantage to fetch.
     */
    where?: facilitiesAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilitiesAdvantages to fetch.
     */
    orderBy?: facilitiesAdvantageOrderByWithRelationInput | facilitiesAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilitiesAdvantages.
     */
    cursor?: facilitiesAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilitiesAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilitiesAdvantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilitiesAdvantages.
     */
    distinct?: FacilitiesAdvantageScalarFieldEnum | FacilitiesAdvantageScalarFieldEnum[]
  }


  /**
   * facilitiesAdvantage findFirstOrThrow
   */
  export type facilitiesAdvantageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * Filter, which facilitiesAdvantage to fetch.
     */
    where?: facilitiesAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilitiesAdvantages to fetch.
     */
    orderBy?: facilitiesAdvantageOrderByWithRelationInput | facilitiesAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilitiesAdvantages.
     */
    cursor?: facilitiesAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilitiesAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilitiesAdvantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilitiesAdvantages.
     */
    distinct?: FacilitiesAdvantageScalarFieldEnum | FacilitiesAdvantageScalarFieldEnum[]
  }


  /**
   * facilitiesAdvantage findMany
   */
  export type facilitiesAdvantageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * Filter, which facilitiesAdvantages to fetch.
     */
    where?: facilitiesAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilitiesAdvantages to fetch.
     */
    orderBy?: facilitiesAdvantageOrderByWithRelationInput | facilitiesAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facilitiesAdvantages.
     */
    cursor?: facilitiesAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilitiesAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilitiesAdvantages.
     */
    skip?: number
    distinct?: FacilitiesAdvantageScalarFieldEnum | FacilitiesAdvantageScalarFieldEnum[]
  }


  /**
   * facilitiesAdvantage create
   */
  export type facilitiesAdvantageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * The data needed to create a facilitiesAdvantage.
     */
    data: XOR<facilitiesAdvantageCreateInput, facilitiesAdvantageUncheckedCreateInput>
  }


  /**
   * facilitiesAdvantage createMany
   */
  export type facilitiesAdvantageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facilitiesAdvantages.
     */
    data: facilitiesAdvantageCreateManyInput | facilitiesAdvantageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * facilitiesAdvantage update
   */
  export type facilitiesAdvantageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * The data needed to update a facilitiesAdvantage.
     */
    data: XOR<facilitiesAdvantageUpdateInput, facilitiesAdvantageUncheckedUpdateInput>
    /**
     * Choose, which facilitiesAdvantage to update.
     */
    where: facilitiesAdvantageWhereUniqueInput
  }


  /**
   * facilitiesAdvantage updateMany
   */
  export type facilitiesAdvantageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facilitiesAdvantages.
     */
    data: XOR<facilitiesAdvantageUpdateManyMutationInput, facilitiesAdvantageUncheckedUpdateManyInput>
    /**
     * Filter which facilitiesAdvantages to update
     */
    where?: facilitiesAdvantageWhereInput
  }


  /**
   * facilitiesAdvantage upsert
   */
  export type facilitiesAdvantageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * The filter to search for the facilitiesAdvantage to update in case it exists.
     */
    where: facilitiesAdvantageWhereUniqueInput
    /**
     * In case the facilitiesAdvantage found by the `where` argument doesn't exist, create a new facilitiesAdvantage with this data.
     */
    create: XOR<facilitiesAdvantageCreateInput, facilitiesAdvantageUncheckedCreateInput>
    /**
     * In case the facilitiesAdvantage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facilitiesAdvantageUpdateInput, facilitiesAdvantageUncheckedUpdateInput>
  }


  /**
   * facilitiesAdvantage delete
   */
  export type facilitiesAdvantageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
    /**
     * Filter which facilitiesAdvantage to delete.
     */
    where: facilitiesAdvantageWhereUniqueInput
  }


  /**
   * facilitiesAdvantage deleteMany
   */
  export type facilitiesAdvantageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facilitiesAdvantages to delete
     */
    where?: facilitiesAdvantageWhereInput
  }


  /**
   * facilitiesAdvantage without action
   */
  export type facilitiesAdvantageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facilitiesAdvantage
     */
    select?: facilitiesAdvantageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: facilitiesAdvantageInclude<ExtArgs> | null
  }



  /**
   * Model cv
   */

  export type AggregateCv = {
    _count: CvCountAggregateOutputType | null
    _min: CvMinAggregateOutputType | null
    _max: CvMaxAggregateOutputType | null
  }

  export type CvMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    ad_id: string | null
    company_id: string | null
    status: $Enums.status | null
    created_at: Date | null
  }

  export type CvMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    ad_id: string | null
    company_id: string | null
    status: $Enums.status | null
    created_at: Date | null
  }

  export type CvCountAggregateOutputType = {
    id: number
    user_id: number
    ad_id: number
    company_id: number
    status: number
    created_at: number
    _all: number
  }


  export type CvMinAggregateInputType = {
    id?: true
    user_id?: true
    ad_id?: true
    company_id?: true
    status?: true
    created_at?: true
  }

  export type CvMaxAggregateInputType = {
    id?: true
    user_id?: true
    ad_id?: true
    company_id?: true
    status?: true
    created_at?: true
  }

  export type CvCountAggregateInputType = {
    id?: true
    user_id?: true
    ad_id?: true
    company_id?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type CvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cv to aggregate.
     */
    where?: cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvs to fetch.
     */
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cvs
    **/
    _count?: true | CvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CvMaxAggregateInputType
  }

  export type GetCvAggregateType<T extends CvAggregateArgs> = {
        [P in keyof T & keyof AggregateCv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCv[P]>
      : GetScalarType<T[P], AggregateCv[P]>
  }




  export type cvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvWhereInput
    orderBy?: cvOrderByWithAggregationInput | cvOrderByWithAggregationInput[]
    by: CvScalarFieldEnum[] | CvScalarFieldEnum
    having?: cvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CvCountAggregateInputType | true
    _min?: CvMinAggregateInputType
    _max?: CvMaxAggregateInputType
  }

  export type CvGroupByOutputType = {
    id: string
    user_id: string
    ad_id: string
    company_id: string
    status: $Enums.status
    created_at: Date
    _count: CvCountAggregateOutputType | null
    _min: CvMinAggregateOutputType | null
    _max: CvMaxAggregateOutputType | null
  }

  type GetCvGroupByPayload<T extends cvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CvGroupByOutputType[P]>
            : GetScalarType<T[P], CvGroupByOutputType[P]>
        }
      >
    >


  export type cvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ad_id?: boolean
    company_id?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | cv$userArgs<ExtArgs>
    ad?: boolean | cv$adArgs<ExtArgs>
    company?: boolean | cv$companyArgs<ExtArgs>
    cvAd?: boolean | cv$cvAdArgs<ExtArgs>
    _count?: boolean | CvCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cv"]>

  export type cvSelectScalar = {
    id?: boolean
    user_id?: boolean
    ad_id?: boolean
    company_id?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type cvInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | cv$userArgs<ExtArgs>
    ad?: boolean | cv$adArgs<ExtArgs>
    company?: boolean | cv$companyArgs<ExtArgs>
    cvAd?: boolean | cv$cvAdArgs<ExtArgs>
    _count?: boolean | CvCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $cvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cv"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      ad: Prisma.$adPayload<ExtArgs> | null
      company: Prisma.$companyPayload<ExtArgs> | null
      cvAd: Prisma.$cvAdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      ad_id: string
      company_id: string
      status: $Enums.status
      created_at: Date
    }, ExtArgs["result"]["cv"]>
    composites: {}
  }


  type cvGetPayload<S extends boolean | null | undefined | cvDefaultArgs> = $Result.GetResult<Prisma.$cvPayload, S>

  type cvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cvFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CvCountAggregateInputType | true
    }

  export interface cvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cv'], meta: { name: 'cv' } }
    /**
     * Find zero or one Cv that matches the filter.
     * @param {cvFindUniqueArgs} args - Arguments to find a Cv
     * @example
     * // Get one Cv
     * const cv = await prisma.cv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cvFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cvFindUniqueArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cv that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cvFindUniqueOrThrowArgs} args - Arguments to find a Cv
     * @example
     * // Get one Cv
     * const cv = await prisma.cv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cvFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cvFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvFindFirstArgs} args - Arguments to find a Cv
     * @example
     * // Get one Cv
     * const cv = await prisma.cv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cvFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cvFindFirstArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvFindFirstOrThrowArgs} args - Arguments to find a Cv
     * @example
     * // Get one Cv
     * const cv = await prisma.cv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cvFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cvFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cvs
     * const cvs = await prisma.cv.findMany()
     * 
     * // Get first 10 Cvs
     * const cvs = await prisma.cv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cvWithIdOnly = await prisma.cv.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cvFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cvFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cv.
     * @param {cvCreateArgs} args - Arguments to create a Cv.
     * @example
     * // Create one Cv
     * const Cv = await prisma.cv.create({
     *   data: {
     *     // ... data to create a Cv
     *   }
     * })
     * 
    **/
    create<T extends cvCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cvCreateArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cvs.
     *     @param {cvCreateManyArgs} args - Arguments to create many Cvs.
     *     @example
     *     // Create many Cvs
     *     const cv = await prisma.cv.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cvCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cvCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cv.
     * @param {cvDeleteArgs} args - Arguments to delete one Cv.
     * @example
     * // Delete one Cv
     * const Cv = await prisma.cv.delete({
     *   where: {
     *     // ... filter to delete one Cv
     *   }
     * })
     * 
    **/
    delete<T extends cvDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cvDeleteArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cv.
     * @param {cvUpdateArgs} args - Arguments to update one Cv.
     * @example
     * // Update one Cv
     * const cv = await prisma.cv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cvUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cvUpdateArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cvs.
     * @param {cvDeleteManyArgs} args - Arguments to filter Cvs to delete.
     * @example
     * // Delete a few Cvs
     * const { count } = await prisma.cv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cvDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cvDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cvs
     * const cv = await prisma.cv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cvUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cvUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cv.
     * @param {cvUpsertArgs} args - Arguments to update or create a Cv.
     * @example
     * // Update or create a Cv
     * const cv = await prisma.cv.upsert({
     *   create: {
     *     // ... data to create a Cv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cv we want to update
     *   }
     * })
    **/
    upsert<T extends cvUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cvUpsertArgs<ExtArgs>>
    ): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvCountArgs} args - Arguments to filter Cvs to count.
     * @example
     * // Count the number of Cvs
     * const count = await prisma.cv.count({
     *   where: {
     *     // ... the filter for the Cvs we want to count
     *   }
     * })
    **/
    count<T extends cvCountArgs>(
      args?: Subset<T, cvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CvAggregateArgs>(args: Subset<T, CvAggregateArgs>): Prisma.PrismaPromise<GetCvAggregateType<T>>

    /**
     * Group by Cv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cvGroupByArgs['orderBy'] }
        : { orderBy?: cvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cv model
   */
  readonly fields: cvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends cv$userArgs<ExtArgs> = {}>(args?: Subset<T, cv$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ad<T extends cv$adArgs<ExtArgs> = {}>(args?: Subset<T, cv$adArgs<ExtArgs>>): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    company<T extends cv$companyArgs<ExtArgs> = {}>(args?: Subset<T, cv$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    cvAd<T extends cv$cvAdArgs<ExtArgs> = {}>(args?: Subset<T, cv$cvAdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cv model
   */ 
  interface cvFieldRefs {
    readonly id: FieldRef<"cv", 'String'>
    readonly user_id: FieldRef<"cv", 'String'>
    readonly ad_id: FieldRef<"cv", 'String'>
    readonly company_id: FieldRef<"cv", 'String'>
    readonly status: FieldRef<"cv", 'status'>
    readonly created_at: FieldRef<"cv", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * cv findUnique
   */
  export type cvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * Filter, which cv to fetch.
     */
    where: cvWhereUniqueInput
  }


  /**
   * cv findUniqueOrThrow
   */
  export type cvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * Filter, which cv to fetch.
     */
    where: cvWhereUniqueInput
  }


  /**
   * cv findFirst
   */
  export type cvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * Filter, which cv to fetch.
     */
    where?: cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvs to fetch.
     */
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cvs.
     */
    cursor?: cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cvs.
     */
    distinct?: CvScalarFieldEnum | CvScalarFieldEnum[]
  }


  /**
   * cv findFirstOrThrow
   */
  export type cvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * Filter, which cv to fetch.
     */
    where?: cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvs to fetch.
     */
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cvs.
     */
    cursor?: cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cvs.
     */
    distinct?: CvScalarFieldEnum | CvScalarFieldEnum[]
  }


  /**
   * cv findMany
   */
  export type cvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * Filter, which cvs to fetch.
     */
    where?: cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvs to fetch.
     */
    orderBy?: cvOrderByWithRelationInput | cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cvs.
     */
    cursor?: cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvs.
     */
    skip?: number
    distinct?: CvScalarFieldEnum | CvScalarFieldEnum[]
  }


  /**
   * cv create
   */
  export type cvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * The data needed to create a cv.
     */
    data: XOR<cvCreateInput, cvUncheckedCreateInput>
  }


  /**
   * cv createMany
   */
  export type cvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cvs.
     */
    data: cvCreateManyInput | cvCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cv update
   */
  export type cvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * The data needed to update a cv.
     */
    data: XOR<cvUpdateInput, cvUncheckedUpdateInput>
    /**
     * Choose, which cv to update.
     */
    where: cvWhereUniqueInput
  }


  /**
   * cv updateMany
   */
  export type cvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cvs.
     */
    data: XOR<cvUpdateManyMutationInput, cvUncheckedUpdateManyInput>
    /**
     * Filter which cvs to update
     */
    where?: cvWhereInput
  }


  /**
   * cv upsert
   */
  export type cvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * The filter to search for the cv to update in case it exists.
     */
    where: cvWhereUniqueInput
    /**
     * In case the cv found by the `where` argument doesn't exist, create a new cv with this data.
     */
    create: XOR<cvCreateInput, cvUncheckedCreateInput>
    /**
     * In case the cv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cvUpdateInput, cvUncheckedUpdateInput>
  }


  /**
   * cv delete
   */
  export type cvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
    /**
     * Filter which cv to delete.
     */
    where: cvWhereUniqueInput
  }


  /**
   * cv deleteMany
   */
  export type cvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cvs to delete
     */
    where?: cvWhereInput
  }


  /**
   * cv.user
   */
  export type cv$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }


  /**
   * cv.ad
   */
  export type cv$adArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad
     */
    select?: adSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adInclude<ExtArgs> | null
    where?: adWhereInput
  }


  /**
   * cv.company
   */
  export type cv$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }


  /**
   * cv.cvAd
   */
  export type cv$cvAdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    where?: cvAdWhereInput
    orderBy?: cvAdOrderByWithRelationInput | cvAdOrderByWithRelationInput[]
    cursor?: cvAdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CvAdScalarFieldEnum | CvAdScalarFieldEnum[]
  }


  /**
   * cv without action
   */
  export type cvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cv
     */
    select?: cvSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvInclude<ExtArgs> | null
  }



  /**
   * Model cvAd
   */

  export type AggregateCvAd = {
    _count: CvAdCountAggregateOutputType | null
    _min: CvAdMinAggregateOutputType | null
    _max: CvAdMaxAggregateOutputType | null
  }

  export type CvAdMinAggregateOutputType = {
    cv_id: string | null
    ad_id: string | null
  }

  export type CvAdMaxAggregateOutputType = {
    cv_id: string | null
    ad_id: string | null
  }

  export type CvAdCountAggregateOutputType = {
    cv_id: number
    ad_id: number
    _all: number
  }


  export type CvAdMinAggregateInputType = {
    cv_id?: true
    ad_id?: true
  }

  export type CvAdMaxAggregateInputType = {
    cv_id?: true
    ad_id?: true
  }

  export type CvAdCountAggregateInputType = {
    cv_id?: true
    ad_id?: true
    _all?: true
  }

  export type CvAdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cvAd to aggregate.
     */
    where?: cvAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvAds to fetch.
     */
    orderBy?: cvAdOrderByWithRelationInput | cvAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cvAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cvAds
    **/
    _count?: true | CvAdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CvAdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CvAdMaxAggregateInputType
  }

  export type GetCvAdAggregateType<T extends CvAdAggregateArgs> = {
        [P in keyof T & keyof AggregateCvAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCvAd[P]>
      : GetScalarType<T[P], AggregateCvAd[P]>
  }




  export type cvAdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cvAdWhereInput
    orderBy?: cvAdOrderByWithAggregationInput | cvAdOrderByWithAggregationInput[]
    by: CvAdScalarFieldEnum[] | CvAdScalarFieldEnum
    having?: cvAdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CvAdCountAggregateInputType | true
    _min?: CvAdMinAggregateInputType
    _max?: CvAdMaxAggregateInputType
  }

  export type CvAdGroupByOutputType = {
    cv_id: string
    ad_id: string
    _count: CvAdCountAggregateOutputType | null
    _min: CvAdMinAggregateOutputType | null
    _max: CvAdMaxAggregateOutputType | null
  }

  type GetCvAdGroupByPayload<T extends cvAdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CvAdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CvAdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CvAdGroupByOutputType[P]>
            : GetScalarType<T[P], CvAdGroupByOutputType[P]>
        }
      >
    >


  export type cvAdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cv_id?: boolean
    ad_id?: boolean
    cv?: boolean | cvDefaultArgs<ExtArgs>
    ad?: boolean | adDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cvAd"]>

  export type cvAdSelectScalar = {
    cv_id?: boolean
    ad_id?: boolean
  }

  export type cvAdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | cvDefaultArgs<ExtArgs>
    ad?: boolean | adDefaultArgs<ExtArgs>
  }


  export type $cvAdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cvAd"
    objects: {
      cv: Prisma.$cvPayload<ExtArgs>
      ad: Prisma.$adPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cv_id: string
      ad_id: string
    }, ExtArgs["result"]["cvAd"]>
    composites: {}
  }


  type cvAdGetPayload<S extends boolean | null | undefined | cvAdDefaultArgs> = $Result.GetResult<Prisma.$cvAdPayload, S>

  type cvAdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cvAdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CvAdCountAggregateInputType | true
    }

  export interface cvAdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cvAd'], meta: { name: 'cvAd' } }
    /**
     * Find zero or one CvAd that matches the filter.
     * @param {cvAdFindUniqueArgs} args - Arguments to find a CvAd
     * @example
     * // Get one CvAd
     * const cvAd = await prisma.cvAd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cvAdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cvAdFindUniqueArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CvAd that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cvAdFindUniqueOrThrowArgs} args - Arguments to find a CvAd
     * @example
     * // Get one CvAd
     * const cvAd = await prisma.cvAd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cvAdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cvAdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CvAd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvAdFindFirstArgs} args - Arguments to find a CvAd
     * @example
     * // Get one CvAd
     * const cvAd = await prisma.cvAd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cvAdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cvAdFindFirstArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CvAd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvAdFindFirstOrThrowArgs} args - Arguments to find a CvAd
     * @example
     * // Get one CvAd
     * const cvAd = await prisma.cvAd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cvAdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cvAdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CvAds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvAdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CvAds
     * const cvAds = await prisma.cvAd.findMany()
     * 
     * // Get first 10 CvAds
     * const cvAds = await prisma.cvAd.findMany({ take: 10 })
     * 
     * // Only select the `cv_id`
     * const cvAdWithCv_idOnly = await prisma.cvAd.findMany({ select: { cv_id: true } })
     * 
    **/
    findMany<T extends cvAdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cvAdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CvAd.
     * @param {cvAdCreateArgs} args - Arguments to create a CvAd.
     * @example
     * // Create one CvAd
     * const CvAd = await prisma.cvAd.create({
     *   data: {
     *     // ... data to create a CvAd
     *   }
     * })
     * 
    **/
    create<T extends cvAdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cvAdCreateArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CvAds.
     *     @param {cvAdCreateManyArgs} args - Arguments to create many CvAds.
     *     @example
     *     // Create many CvAds
     *     const cvAd = await prisma.cvAd.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cvAdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cvAdCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CvAd.
     * @param {cvAdDeleteArgs} args - Arguments to delete one CvAd.
     * @example
     * // Delete one CvAd
     * const CvAd = await prisma.cvAd.delete({
     *   where: {
     *     // ... filter to delete one CvAd
     *   }
     * })
     * 
    **/
    delete<T extends cvAdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cvAdDeleteArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CvAd.
     * @param {cvAdUpdateArgs} args - Arguments to update one CvAd.
     * @example
     * // Update one CvAd
     * const cvAd = await prisma.cvAd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cvAdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cvAdUpdateArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CvAds.
     * @param {cvAdDeleteManyArgs} args - Arguments to filter CvAds to delete.
     * @example
     * // Delete a few CvAds
     * const { count } = await prisma.cvAd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cvAdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cvAdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CvAds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvAdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CvAds
     * const cvAd = await prisma.cvAd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cvAdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cvAdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CvAd.
     * @param {cvAdUpsertArgs} args - Arguments to update or create a CvAd.
     * @example
     * // Update or create a CvAd
     * const cvAd = await prisma.cvAd.upsert({
     *   create: {
     *     // ... data to create a CvAd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CvAd we want to update
     *   }
     * })
    **/
    upsert<T extends cvAdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cvAdUpsertArgs<ExtArgs>>
    ): Prisma__cvAdClient<$Result.GetResult<Prisma.$cvAdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CvAds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvAdCountArgs} args - Arguments to filter CvAds to count.
     * @example
     * // Count the number of CvAds
     * const count = await prisma.cvAd.count({
     *   where: {
     *     // ... the filter for the CvAds we want to count
     *   }
     * })
    **/
    count<T extends cvAdCountArgs>(
      args?: Subset<T, cvAdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CvAdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CvAd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CvAdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CvAdAggregateArgs>(args: Subset<T, CvAdAggregateArgs>): Prisma.PrismaPromise<GetCvAdAggregateType<T>>

    /**
     * Group by CvAd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cvAdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cvAdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cvAdGroupByArgs['orderBy'] }
        : { orderBy?: cvAdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cvAdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCvAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cvAd model
   */
  readonly fields: cvAdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cvAd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cvAdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cv<T extends cvDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cvDefaultArgs<ExtArgs>>): Prisma__cvClient<$Result.GetResult<Prisma.$cvPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ad<T extends adDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adDefaultArgs<ExtArgs>>): Prisma__adClient<$Result.GetResult<Prisma.$adPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cvAd model
   */ 
  interface cvAdFieldRefs {
    readonly cv_id: FieldRef<"cvAd", 'String'>
    readonly ad_id: FieldRef<"cvAd", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cvAd findUnique
   */
  export type cvAdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * Filter, which cvAd to fetch.
     */
    where: cvAdWhereUniqueInput
  }


  /**
   * cvAd findUniqueOrThrow
   */
  export type cvAdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * Filter, which cvAd to fetch.
     */
    where: cvAdWhereUniqueInput
  }


  /**
   * cvAd findFirst
   */
  export type cvAdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * Filter, which cvAd to fetch.
     */
    where?: cvAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvAds to fetch.
     */
    orderBy?: cvAdOrderByWithRelationInput | cvAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cvAds.
     */
    cursor?: cvAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cvAds.
     */
    distinct?: CvAdScalarFieldEnum | CvAdScalarFieldEnum[]
  }


  /**
   * cvAd findFirstOrThrow
   */
  export type cvAdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * Filter, which cvAd to fetch.
     */
    where?: cvAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvAds to fetch.
     */
    orderBy?: cvAdOrderByWithRelationInput | cvAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cvAds.
     */
    cursor?: cvAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cvAds.
     */
    distinct?: CvAdScalarFieldEnum | CvAdScalarFieldEnum[]
  }


  /**
   * cvAd findMany
   */
  export type cvAdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * Filter, which cvAds to fetch.
     */
    where?: cvAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cvAds to fetch.
     */
    orderBy?: cvAdOrderByWithRelationInput | cvAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cvAds.
     */
    cursor?: cvAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cvAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cvAds.
     */
    skip?: number
    distinct?: CvAdScalarFieldEnum | CvAdScalarFieldEnum[]
  }


  /**
   * cvAd create
   */
  export type cvAdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * The data needed to create a cvAd.
     */
    data: XOR<cvAdCreateInput, cvAdUncheckedCreateInput>
  }


  /**
   * cvAd createMany
   */
  export type cvAdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cvAds.
     */
    data: cvAdCreateManyInput | cvAdCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cvAd update
   */
  export type cvAdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * The data needed to update a cvAd.
     */
    data: XOR<cvAdUpdateInput, cvAdUncheckedUpdateInput>
    /**
     * Choose, which cvAd to update.
     */
    where: cvAdWhereUniqueInput
  }


  /**
   * cvAd updateMany
   */
  export type cvAdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cvAds.
     */
    data: XOR<cvAdUpdateManyMutationInput, cvAdUncheckedUpdateManyInput>
    /**
     * Filter which cvAds to update
     */
    where?: cvAdWhereInput
  }


  /**
   * cvAd upsert
   */
  export type cvAdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * The filter to search for the cvAd to update in case it exists.
     */
    where: cvAdWhereUniqueInput
    /**
     * In case the cvAd found by the `where` argument doesn't exist, create a new cvAd with this data.
     */
    create: XOR<cvAdCreateInput, cvAdUncheckedCreateInput>
    /**
     * In case the cvAd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cvAdUpdateInput, cvAdUncheckedUpdateInput>
  }


  /**
   * cvAd delete
   */
  export type cvAdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
    /**
     * Filter which cvAd to delete.
     */
    where: cvAdWhereUniqueInput
  }


  /**
   * cvAd deleteMany
   */
  export type cvAdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cvAds to delete
     */
    where?: cvAdWhereInput
  }


  /**
   * cvAd without action
   */
  export type cvAdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cvAd
     */
    select?: cvAdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cvAdInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Category_collectionScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    link: 'link'
  };

  export type Category_collectionScalarFieldEnum = (typeof Category_collectionScalarFieldEnum)[keyof typeof Category_collectionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    province_id: 'province_id',
    name: 'name'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    company_id: 'company_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FollowersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    company_id: 'company_id'
  };

  export type FollowersScalarFieldEnum = (typeof FollowersScalarFieldEnum)[keyof typeof FollowersScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    city_id: 'city_id',
    address: 'address'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    logo: 'logo',
    score_company: 'score_company',
    score_popularity: 'score_popularity',
    score_experience_of_job_seekers: 'score_experience_of_job_seekers',
    score_responsiveness: 'score_responsiveness',
    website: 'website',
    description: 'description',
    slogan: 'slogan',
    organization_employ: 'organization_employ',
    type_of_activity: 'type_of_activity',
    industry: 'industry',
    established_year: 'established_year',
    location_id: 'location_id'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserCompanyFollowScalarFieldEnum: {
    user_id: 'user_id',
    company_id: 'company_id',
    followersId: 'followersId'
  };

  export type UserCompanyFollowScalarFieldEnum = (typeof UserCompanyFollowScalarFieldEnum)[keyof typeof UserCompanyFollowScalarFieldEnum]


  export const AdvantageScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type AdvantageScalarFieldEnum = (typeof AdvantageScalarFieldEnum)[keyof typeof AdvantageScalarFieldEnum]


  export const AdScalarFieldEnum: {
    company_id: 'company_id',
    id: 'id',
    name: 'name',
    price: 'price',
    work_time: 'work_time',
    travel_benefits: 'travel_benefits',
    age: 'age',
    edicational_level: 'edicational_level',
    key_indicator: 'key_indicator',
    software_skills: 'software_skills',
    tags: 'tags',
    facilities: 'facilities',
    gender: 'gender',
    seniority_level: 'seniority_level',
    cooperation_type: 'cooperation_type',
    important: 'important',
    response: 'response',
    itern: 'itern',
    telecommuting: 'telecommuting',
    disabledPeople: 'disabledPeople',
    militaryOrder: 'militaryOrder',
    created_at: 'created_at'
  };

  export type AdScalarFieldEnum = (typeof AdScalarFieldEnum)[keyof typeof AdScalarFieldEnum]


  export const AdsCategory_collectionScalarFieldEnum: {
    ad_id: 'ad_id',
    category_collection_id: 'category_collection_id'
  };

  export type AdsCategory_collectionScalarFieldEnum = (typeof AdsCategory_collectionScalarFieldEnum)[keyof typeof AdsCategory_collectionScalarFieldEnum]


  export const FacilitiesAdvantageScalarFieldEnum: {
    ad_id: 'ad_id',
    advantage_id: 'advantage_id'
  };

  export type FacilitiesAdvantageScalarFieldEnum = (typeof FacilitiesAdvantageScalarFieldEnum)[keyof typeof FacilitiesAdvantageScalarFieldEnum]


  export const CvScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ad_id: 'ad_id',
    company_id: 'company_id',
    status: 'status',
    created_at: 'created_at'
  };

  export type CvScalarFieldEnum = (typeof CvScalarFieldEnum)[keyof typeof CvScalarFieldEnum]


  export const CvAdScalarFieldEnum: {
    cv_id: 'cv_id',
    ad_id: 'ad_id'
  };

  export type CvAdScalarFieldEnum = (typeof CvAdScalarFieldEnum)[keyof typeof CvAdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'gender'
   */
  export type EnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender'>
    


  /**
   * Reference to a field of type 'seniority_level'
   */
  export type Enumseniority_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'seniority_level'>
    


  /**
   * Reference to a field of type 'cooperation_type'
   */
  export type Enumcooperation_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cooperation_type'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    
  /**
   * Deep Input Types
   */


  export type category_collectionWhereInput = {
    AND?: category_collectionWhereInput | category_collectionWhereInput[]
    OR?: category_collectionWhereInput[]
    NOT?: category_collectionWhereInput | category_collectionWhereInput[]
    id?: StringFilter<"category_collection"> | string
    category_id?: StringNullableFilter<"category_collection"> | string | null
    name?: StringNullableFilter<"category_collection"> | string | null
    link?: StringNullableFilter<"category_collection"> | string | null
    categories?: XOR<CategoryNullableRelationFilter, categoryWhereInput> | null
    adsCategory_collections?: AdsCategory_collectionListRelationFilter
  }

  export type category_collectionOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    categories?: categoryOrderByWithRelationInput
    adsCategory_collections?: adsCategory_collectionOrderByRelationAggregateInput
  }

  export type category_collectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: category_collectionWhereInput | category_collectionWhereInput[]
    OR?: category_collectionWhereInput[]
    NOT?: category_collectionWhereInput | category_collectionWhereInput[]
    category_id?: StringNullableFilter<"category_collection"> | string | null
    name?: StringNullableFilter<"category_collection"> | string | null
    link?: StringNullableFilter<"category_collection"> | string | null
    categories?: XOR<CategoryNullableRelationFilter, categoryWhereInput> | null
    adsCategory_collections?: AdsCategory_collectionListRelationFilter
  }, "id">

  export type category_collectionOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    _count?: category_collectionCountOrderByAggregateInput
    _max?: category_collectionMaxOrderByAggregateInput
    _min?: category_collectionMinOrderByAggregateInput
  }

  export type category_collectionScalarWhereWithAggregatesInput = {
    AND?: category_collectionScalarWhereWithAggregatesInput | category_collectionScalarWhereWithAggregatesInput[]
    OR?: category_collectionScalarWhereWithAggregatesInput[]
    NOT?: category_collectionScalarWhereWithAggregatesInput | category_collectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category_collection"> | string
    category_id?: StringNullableWithAggregatesFilter<"category_collection"> | string | null
    name?: StringNullableWithAggregatesFilter<"category_collection"> | string | null
    link?: StringNullableWithAggregatesFilter<"category_collection"> | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: StringFilter<"category"> | string
    name?: StringFilter<"category"> | string
    link?: StringFilter<"category"> | string
    category_collections?: Category_collectionListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    category_collections?: category_collectionOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    link?: StringFilter<"category"> | string
    category_collections?: Category_collectionListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category"> | string
    name?: StringWithAggregatesFilter<"category"> | string
    link?: StringWithAggregatesFilter<"category"> | string
  }

  export type provinceWhereInput = {
    AND?: provinceWhereInput | provinceWhereInput[]
    OR?: provinceWhereInput[]
    NOT?: provinceWhereInput | provinceWhereInput[]
    id?: StringFilter<"province"> | string
    name?: StringFilter<"province"> | string
    cities?: CityListRelationFilter
  }

  export type provinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cities?: cityOrderByRelationAggregateInput
  }

  export type provinceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: provinceWhereInput | provinceWhereInput[]
    OR?: provinceWhereInput[]
    NOT?: provinceWhereInput | provinceWhereInput[]
    name?: StringFilter<"province"> | string
    cities?: CityListRelationFilter
  }, "id">

  export type provinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: provinceCountOrderByAggregateInput
    _max?: provinceMaxOrderByAggregateInput
    _min?: provinceMinOrderByAggregateInput
  }

  export type provinceScalarWhereWithAggregatesInput = {
    AND?: provinceScalarWhereWithAggregatesInput | provinceScalarWhereWithAggregatesInput[]
    OR?: provinceScalarWhereWithAggregatesInput[]
    NOT?: provinceScalarWhereWithAggregatesInput | provinceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"province"> | string
    name?: StringWithAggregatesFilter<"province"> | string
  }

  export type cityWhereInput = {
    AND?: cityWhereInput | cityWhereInput[]
    OR?: cityWhereInput[]
    NOT?: cityWhereInput | cityWhereInput[]
    id?: StringFilter<"city"> | string
    province_id?: StringNullableFilter<"city"> | string | null
    name?: StringNullableFilter<"city"> | string | null
    province?: XOR<ProvinceNullableRelationFilter, provinceWhereInput> | null
    locations?: LocationListRelationFilter
  }

  export type cityOrderByWithRelationInput = {
    id?: SortOrder
    province_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    province?: provinceOrderByWithRelationInput
    locations?: locationOrderByRelationAggregateInput
  }

  export type cityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cityWhereInput | cityWhereInput[]
    OR?: cityWhereInput[]
    NOT?: cityWhereInput | cityWhereInput[]
    province_id?: StringNullableFilter<"city"> | string | null
    name?: StringNullableFilter<"city"> | string | null
    province?: XOR<ProvinceNullableRelationFilter, provinceWhereInput> | null
    locations?: LocationListRelationFilter
  }, "id">

  export type cityOrderByWithAggregationInput = {
    id?: SortOrder
    province_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: cityCountOrderByAggregateInput
    _max?: cityMaxOrderByAggregateInput
    _min?: cityMinOrderByAggregateInput
  }

  export type cityScalarWhereWithAggregatesInput = {
    AND?: cityScalarWhereWithAggregatesInput | cityScalarWhereWithAggregatesInput[]
    OR?: cityScalarWhereWithAggregatesInput[]
    NOT?: cityScalarWhereWithAggregatesInput | cityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"city"> | string
    province_id?: StringNullableWithAggregatesFilter<"city"> | string | null
    name?: StringNullableWithAggregatesFilter<"city"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    company_id?: StringNullableFilter<"user"> | string | null
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null
    cv?: CvListRelationFilter
    companies?: UserCompanyFollowListRelationFilter
    followers?: FollowersListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    company_id?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
    cv?: cvOrderByRelationAggregateInput
    companies?: userCompanyFollowOrderByRelationAggregateInput
    followers?: followersOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    company_id?: StringNullableFilter<"user"> | string | null
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null
    cv?: CvListRelationFilter
    companies?: UserCompanyFollowListRelationFilter
    followers?: FollowersListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    company_id?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    company_id?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type followersWhereInput = {
    AND?: followersWhereInput | followersWhereInput[]
    OR?: followersWhereInput[]
    NOT?: followersWhereInput | followersWhereInput[]
    id?: StringFilter<"followers"> | string
    user_id?: StringFilter<"followers"> | string
    company_id?: StringFilter<"followers"> | string
    user?: XOR<UserNullableRelationFilter, userWhereInput> | null
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null
    userCompanyFollow?: UserCompanyFollowListRelationFilter
  }

  export type followersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    user?: userOrderByWithRelationInput
    company?: companyOrderByWithRelationInput
    userCompanyFollow?: userCompanyFollowOrderByRelationAggregateInput
  }

  export type followersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: followersWhereInput | followersWhereInput[]
    OR?: followersWhereInput[]
    NOT?: followersWhereInput | followersWhereInput[]
    user_id?: StringFilter<"followers"> | string
    company_id?: StringFilter<"followers"> | string
    user?: XOR<UserNullableRelationFilter, userWhereInput> | null
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null
    userCompanyFollow?: UserCompanyFollowListRelationFilter
  }, "id">

  export type followersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    _count?: followersCountOrderByAggregateInput
    _max?: followersMaxOrderByAggregateInput
    _min?: followersMinOrderByAggregateInput
  }

  export type followersScalarWhereWithAggregatesInput = {
    AND?: followersScalarWhereWithAggregatesInput | followersScalarWhereWithAggregatesInput[]
    OR?: followersScalarWhereWithAggregatesInput[]
    NOT?: followersScalarWhereWithAggregatesInput | followersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"followers"> | string
    user_id?: StringWithAggregatesFilter<"followers"> | string
    company_id?: StringWithAggregatesFilter<"followers"> | string
  }

  export type locationWhereInput = {
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    id?: StringFilter<"location"> | string
    city_id?: StringFilter<"location"> | string
    address?: StringFilter<"location"> | string
    city?: XOR<CityRelationFilter, cityWhereInput>
    companies?: CompanyListRelationFilter
  }

  export type locationOrderByWithRelationInput = {
    id?: SortOrder
    city_id?: SortOrder
    address?: SortOrder
    city?: cityOrderByWithRelationInput
    companies?: companyOrderByRelationAggregateInput
  }

  export type locationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    city_id?: StringFilter<"location"> | string
    address?: StringFilter<"location"> | string
    city?: XOR<CityRelationFilter, cityWhereInput>
    companies?: CompanyListRelationFilter
  }, "id">

  export type locationOrderByWithAggregationInput = {
    id?: SortOrder
    city_id?: SortOrder
    address?: SortOrder
    _count?: locationCountOrderByAggregateInput
    _max?: locationMaxOrderByAggregateInput
    _min?: locationMinOrderByAggregateInput
  }

  export type locationScalarWhereWithAggregatesInput = {
    AND?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    OR?: locationScalarWhereWithAggregatesInput[]
    NOT?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"location"> | string
    city_id?: StringWithAggregatesFilter<"location"> | string
    address?: StringWithAggregatesFilter<"location"> | string
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: StringFilter<"company"> | string
    created_at?: DateTimeFilter<"company"> | Date | string
    name?: StringFilter<"company"> | string
    logo?: StringFilter<"company"> | string
    score_company?: FloatFilter<"company"> | number
    score_popularity?: FloatFilter<"company"> | number
    score_experience_of_job_seekers?: FloatFilter<"company"> | number
    score_responsiveness?: FloatFilter<"company"> | number
    website?: StringFilter<"company"> | string
    description?: StringFilter<"company"> | string
    slogan?: StringFilter<"company"> | string
    organization_employ?: IntFilter<"company"> | number
    type_of_activity?: StringFilter<"company"> | string
    industry?: StringFilter<"company"> | string
    established_year?: DateTimeFilter<"company"> | Date | string
    location_id?: StringFilter<"company"> | string
    location?: XOR<LocationRelationFilter, locationWhereInput>
    user?: UserListRelationFilter
    ads?: AdListRelationFilter
    cv?: CvListRelationFilter
    followers?: FollowersListRelationFilter
    userCompanyFollow?: UserCompanyFollowListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    website?: SortOrder
    description?: SortOrder
    slogan?: SortOrder
    organization_employ?: SortOrder
    type_of_activity?: SortOrder
    industry?: SortOrder
    established_year?: SortOrder
    location_id?: SortOrder
    location?: locationOrderByWithRelationInput
    user?: userOrderByRelationAggregateInput
    ads?: adOrderByRelationAggregateInput
    cv?: cvOrderByRelationAggregateInput
    followers?: followersOrderByRelationAggregateInput
    userCompanyFollow?: userCompanyFollowOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    created_at?: DateTimeFilter<"company"> | Date | string
    logo?: StringFilter<"company"> | string
    score_company?: FloatFilter<"company"> | number
    score_popularity?: FloatFilter<"company"> | number
    score_experience_of_job_seekers?: FloatFilter<"company"> | number
    score_responsiveness?: FloatFilter<"company"> | number
    website?: StringFilter<"company"> | string
    description?: StringFilter<"company"> | string
    slogan?: StringFilter<"company"> | string
    organization_employ?: IntFilter<"company"> | number
    type_of_activity?: StringFilter<"company"> | string
    industry?: StringFilter<"company"> | string
    established_year?: DateTimeFilter<"company"> | Date | string
    location_id?: StringFilter<"company"> | string
    location?: XOR<LocationRelationFilter, locationWhereInput>
    user?: UserListRelationFilter
    ads?: AdListRelationFilter
    cv?: CvListRelationFilter
    followers?: FollowersListRelationFilter
    userCompanyFollow?: UserCompanyFollowListRelationFilter
  }, "id" | "name">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    website?: SortOrder
    description?: SortOrder
    slogan?: SortOrder
    organization_employ?: SortOrder
    type_of_activity?: SortOrder
    industry?: SortOrder
    established_year?: SortOrder
    location_id?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"company"> | string
    created_at?: DateTimeWithAggregatesFilter<"company"> | Date | string
    name?: StringWithAggregatesFilter<"company"> | string
    logo?: StringWithAggregatesFilter<"company"> | string
    score_company?: FloatWithAggregatesFilter<"company"> | number
    score_popularity?: FloatWithAggregatesFilter<"company"> | number
    score_experience_of_job_seekers?: FloatWithAggregatesFilter<"company"> | number
    score_responsiveness?: FloatWithAggregatesFilter<"company"> | number
    website?: StringWithAggregatesFilter<"company"> | string
    description?: StringWithAggregatesFilter<"company"> | string
    slogan?: StringWithAggregatesFilter<"company"> | string
    organization_employ?: IntWithAggregatesFilter<"company"> | number
    type_of_activity?: StringWithAggregatesFilter<"company"> | string
    industry?: StringWithAggregatesFilter<"company"> | string
    established_year?: DateTimeWithAggregatesFilter<"company"> | Date | string
    location_id?: StringWithAggregatesFilter<"company"> | string
  }

  export type userCompanyFollowWhereInput = {
    AND?: userCompanyFollowWhereInput | userCompanyFollowWhereInput[]
    OR?: userCompanyFollowWhereInput[]
    NOT?: userCompanyFollowWhereInput | userCompanyFollowWhereInput[]
    user_id?: StringFilter<"userCompanyFollow"> | string
    company_id?: StringFilter<"userCompanyFollow"> | string
    followersId?: StringNullableFilter<"userCompanyFollow"> | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    company?: XOR<CompanyRelationFilter, companyWhereInput>
    followers?: XOR<FollowersNullableRelationFilter, followersWhereInput> | null
  }

  export type userCompanyFollowOrderByWithRelationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    followersId?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    company?: companyOrderByWithRelationInput
    followers?: followersOrderByWithRelationInput
  }

  export type userCompanyFollowWhereUniqueInput = Prisma.AtLeast<{
    user_id_company_id?: userCompanyFollowUser_idCompany_idCompoundUniqueInput
    AND?: userCompanyFollowWhereInput | userCompanyFollowWhereInput[]
    OR?: userCompanyFollowWhereInput[]
    NOT?: userCompanyFollowWhereInput | userCompanyFollowWhereInput[]
    user_id?: StringFilter<"userCompanyFollow"> | string
    company_id?: StringFilter<"userCompanyFollow"> | string
    followersId?: StringNullableFilter<"userCompanyFollow"> | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    company?: XOR<CompanyRelationFilter, companyWhereInput>
    followers?: XOR<FollowersNullableRelationFilter, followersWhereInput> | null
  }, "user_id_company_id">

  export type userCompanyFollowOrderByWithAggregationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    followersId?: SortOrderInput | SortOrder
    _count?: userCompanyFollowCountOrderByAggregateInput
    _max?: userCompanyFollowMaxOrderByAggregateInput
    _min?: userCompanyFollowMinOrderByAggregateInput
  }

  export type userCompanyFollowScalarWhereWithAggregatesInput = {
    AND?: userCompanyFollowScalarWhereWithAggregatesInput | userCompanyFollowScalarWhereWithAggregatesInput[]
    OR?: userCompanyFollowScalarWhereWithAggregatesInput[]
    NOT?: userCompanyFollowScalarWhereWithAggregatesInput | userCompanyFollowScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"userCompanyFollow"> | string
    company_id?: StringWithAggregatesFilter<"userCompanyFollow"> | string
    followersId?: StringNullableWithAggregatesFilter<"userCompanyFollow"> | string | null
  }

  export type advantageWhereInput = {
    AND?: advantageWhereInput | advantageWhereInput[]
    OR?: advantageWhereInput[]
    NOT?: advantageWhereInput | advantageWhereInput[]
    id?: StringFilter<"advantage"> | string
    type?: StringFilter<"advantage"> | string
    facilitiesAdvantage?: FacilitiesAdvantageListRelationFilter
  }

  export type advantageOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    facilitiesAdvantage?: facilitiesAdvantageOrderByRelationAggregateInput
  }

  export type advantageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: advantageWhereInput | advantageWhereInput[]
    OR?: advantageWhereInput[]
    NOT?: advantageWhereInput | advantageWhereInput[]
    type?: StringFilter<"advantage"> | string
    facilitiesAdvantage?: FacilitiesAdvantageListRelationFilter
  }, "id">

  export type advantageOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: advantageCountOrderByAggregateInput
    _max?: advantageMaxOrderByAggregateInput
    _min?: advantageMinOrderByAggregateInput
  }

  export type advantageScalarWhereWithAggregatesInput = {
    AND?: advantageScalarWhereWithAggregatesInput | advantageScalarWhereWithAggregatesInput[]
    OR?: advantageScalarWhereWithAggregatesInput[]
    NOT?: advantageScalarWhereWithAggregatesInput | advantageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"advantage"> | string
    type?: StringWithAggregatesFilter<"advantage"> | string
  }

  export type adWhereInput = {
    AND?: adWhereInput | adWhereInput[]
    OR?: adWhereInput[]
    NOT?: adWhereInput | adWhereInput[]
    company_id?: StringFilter<"ad"> | string
    id?: StringFilter<"ad"> | string
    name?: StringFilter<"ad"> | string
    price?: JsonFilter<"ad">
    work_time?: StringFilter<"ad"> | string
    travel_benefits?: StringFilter<"ad"> | string
    age?: JsonFilter<"ad">
    edicational_level?: JsonFilter<"ad">
    key_indicator?: JsonFilter<"ad">
    software_skills?: JsonFilter<"ad">
    tags?: JsonFilter<"ad">
    facilities?: JsonFilter<"ad">
    gender?: EnumgenderFilter<"ad"> | $Enums.gender
    seniority_level?: Enumseniority_levelFilter<"ad"> | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFilter<"ad"> | $Enums.cooperation_type
    important?: BoolFilter<"ad"> | boolean
    response?: BoolFilter<"ad"> | boolean
    itern?: BoolFilter<"ad"> | boolean
    telecommuting?: BoolFilter<"ad"> | boolean
    disabledPeople?: BoolFilter<"ad"> | boolean
    militaryOrder?: BoolFilter<"ad"> | boolean
    created_at?: DateTimeFilter<"ad"> | Date | string
    adsCategory_collections?: AdsCategory_collectionListRelationFilter
    facilitiesAdvantage?: FacilitiesAdvantageListRelationFilter
    company?: XOR<CompanyRelationFilter, companyWhereInput>
    cvAd?: CvAdListRelationFilter
    cv?: CvListRelationFilter
  }

  export type adOrderByWithRelationInput = {
    company_id?: SortOrder
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    work_time?: SortOrder
    travel_benefits?: SortOrder
    age?: SortOrder
    edicational_level?: SortOrder
    key_indicator?: SortOrder
    software_skills?: SortOrder
    tags?: SortOrder
    facilities?: SortOrder
    gender?: SortOrder
    seniority_level?: SortOrder
    cooperation_type?: SortOrder
    important?: SortOrder
    response?: SortOrder
    itern?: SortOrder
    telecommuting?: SortOrder
    disabledPeople?: SortOrder
    militaryOrder?: SortOrder
    created_at?: SortOrder
    adsCategory_collections?: adsCategory_collectionOrderByRelationAggregateInput
    facilitiesAdvantage?: facilitiesAdvantageOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
    cvAd?: cvAdOrderByRelationAggregateInput
    cv?: cvOrderByRelationAggregateInput
  }

  export type adWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: adWhereInput | adWhereInput[]
    OR?: adWhereInput[]
    NOT?: adWhereInput | adWhereInput[]
    company_id?: StringFilter<"ad"> | string
    name?: StringFilter<"ad"> | string
    price?: JsonFilter<"ad">
    work_time?: StringFilter<"ad"> | string
    travel_benefits?: StringFilter<"ad"> | string
    age?: JsonFilter<"ad">
    edicational_level?: JsonFilter<"ad">
    key_indicator?: JsonFilter<"ad">
    software_skills?: JsonFilter<"ad">
    tags?: JsonFilter<"ad">
    facilities?: JsonFilter<"ad">
    gender?: EnumgenderFilter<"ad"> | $Enums.gender
    seniority_level?: Enumseniority_levelFilter<"ad"> | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFilter<"ad"> | $Enums.cooperation_type
    important?: BoolFilter<"ad"> | boolean
    response?: BoolFilter<"ad"> | boolean
    itern?: BoolFilter<"ad"> | boolean
    telecommuting?: BoolFilter<"ad"> | boolean
    disabledPeople?: BoolFilter<"ad"> | boolean
    militaryOrder?: BoolFilter<"ad"> | boolean
    created_at?: DateTimeFilter<"ad"> | Date | string
    adsCategory_collections?: AdsCategory_collectionListRelationFilter
    facilitiesAdvantage?: FacilitiesAdvantageListRelationFilter
    company?: XOR<CompanyRelationFilter, companyWhereInput>
    cvAd?: CvAdListRelationFilter
    cv?: CvListRelationFilter
  }, "id">

  export type adOrderByWithAggregationInput = {
    company_id?: SortOrder
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    work_time?: SortOrder
    travel_benefits?: SortOrder
    age?: SortOrder
    edicational_level?: SortOrder
    key_indicator?: SortOrder
    software_skills?: SortOrder
    tags?: SortOrder
    facilities?: SortOrder
    gender?: SortOrder
    seniority_level?: SortOrder
    cooperation_type?: SortOrder
    important?: SortOrder
    response?: SortOrder
    itern?: SortOrder
    telecommuting?: SortOrder
    disabledPeople?: SortOrder
    militaryOrder?: SortOrder
    created_at?: SortOrder
    _count?: adCountOrderByAggregateInput
    _max?: adMaxOrderByAggregateInput
    _min?: adMinOrderByAggregateInput
  }

  export type adScalarWhereWithAggregatesInput = {
    AND?: adScalarWhereWithAggregatesInput | adScalarWhereWithAggregatesInput[]
    OR?: adScalarWhereWithAggregatesInput[]
    NOT?: adScalarWhereWithAggregatesInput | adScalarWhereWithAggregatesInput[]
    company_id?: StringWithAggregatesFilter<"ad"> | string
    id?: StringWithAggregatesFilter<"ad"> | string
    name?: StringWithAggregatesFilter<"ad"> | string
    price?: JsonWithAggregatesFilter<"ad">
    work_time?: StringWithAggregatesFilter<"ad"> | string
    travel_benefits?: StringWithAggregatesFilter<"ad"> | string
    age?: JsonWithAggregatesFilter<"ad">
    edicational_level?: JsonWithAggregatesFilter<"ad">
    key_indicator?: JsonWithAggregatesFilter<"ad">
    software_skills?: JsonWithAggregatesFilter<"ad">
    tags?: JsonWithAggregatesFilter<"ad">
    facilities?: JsonWithAggregatesFilter<"ad">
    gender?: EnumgenderWithAggregatesFilter<"ad"> | $Enums.gender
    seniority_level?: Enumseniority_levelWithAggregatesFilter<"ad"> | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeWithAggregatesFilter<"ad"> | $Enums.cooperation_type
    important?: BoolWithAggregatesFilter<"ad"> | boolean
    response?: BoolWithAggregatesFilter<"ad"> | boolean
    itern?: BoolWithAggregatesFilter<"ad"> | boolean
    telecommuting?: BoolWithAggregatesFilter<"ad"> | boolean
    disabledPeople?: BoolWithAggregatesFilter<"ad"> | boolean
    militaryOrder?: BoolWithAggregatesFilter<"ad"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ad"> | Date | string
  }

  export type adsCategory_collectionWhereInput = {
    AND?: adsCategory_collectionWhereInput | adsCategory_collectionWhereInput[]
    OR?: adsCategory_collectionWhereInput[]
    NOT?: adsCategory_collectionWhereInput | adsCategory_collectionWhereInput[]
    ad_id?: StringFilter<"adsCategory_collection"> | string
    category_collection_id?: StringFilter<"adsCategory_collection"> | string
    ad?: XOR<AdRelationFilter, adWhereInput>
    category_collections?: XOR<Category_collectionRelationFilter, category_collectionWhereInput>
  }

  export type adsCategory_collectionOrderByWithRelationInput = {
    ad_id?: SortOrder
    category_collection_id?: SortOrder
    ad?: adOrderByWithRelationInput
    category_collections?: category_collectionOrderByWithRelationInput
  }

  export type adsCategory_collectionWhereUniqueInput = Prisma.AtLeast<{
    ad_id_category_collection_id?: adsCategory_collectionAd_idCategory_collection_idCompoundUniqueInput
    AND?: adsCategory_collectionWhereInput | adsCategory_collectionWhereInput[]
    OR?: adsCategory_collectionWhereInput[]
    NOT?: adsCategory_collectionWhereInput | adsCategory_collectionWhereInput[]
    ad_id?: StringFilter<"adsCategory_collection"> | string
    category_collection_id?: StringFilter<"adsCategory_collection"> | string
    ad?: XOR<AdRelationFilter, adWhereInput>
    category_collections?: XOR<Category_collectionRelationFilter, category_collectionWhereInput>
  }, "ad_id_category_collection_id">

  export type adsCategory_collectionOrderByWithAggregationInput = {
    ad_id?: SortOrder
    category_collection_id?: SortOrder
    _count?: adsCategory_collectionCountOrderByAggregateInput
    _max?: adsCategory_collectionMaxOrderByAggregateInput
    _min?: adsCategory_collectionMinOrderByAggregateInput
  }

  export type adsCategory_collectionScalarWhereWithAggregatesInput = {
    AND?: adsCategory_collectionScalarWhereWithAggregatesInput | adsCategory_collectionScalarWhereWithAggregatesInput[]
    OR?: adsCategory_collectionScalarWhereWithAggregatesInput[]
    NOT?: adsCategory_collectionScalarWhereWithAggregatesInput | adsCategory_collectionScalarWhereWithAggregatesInput[]
    ad_id?: StringWithAggregatesFilter<"adsCategory_collection"> | string
    category_collection_id?: StringWithAggregatesFilter<"adsCategory_collection"> | string
  }

  export type facilitiesAdvantageWhereInput = {
    AND?: facilitiesAdvantageWhereInput | facilitiesAdvantageWhereInput[]
    OR?: facilitiesAdvantageWhereInput[]
    NOT?: facilitiesAdvantageWhereInput | facilitiesAdvantageWhereInput[]
    ad_id?: StringFilter<"facilitiesAdvantage"> | string
    advantage_id?: StringFilter<"facilitiesAdvantage"> | string
    ad?: XOR<AdRelationFilter, adWhereInput>
    advantage?: XOR<AdvantageRelationFilter, advantageWhereInput>
  }

  export type facilitiesAdvantageOrderByWithRelationInput = {
    ad_id?: SortOrder
    advantage_id?: SortOrder
    ad?: adOrderByWithRelationInput
    advantage?: advantageOrderByWithRelationInput
  }

  export type facilitiesAdvantageWhereUniqueInput = Prisma.AtLeast<{
    ad_id_advantage_id?: facilitiesAdvantageAd_idAdvantage_idCompoundUniqueInput
    AND?: facilitiesAdvantageWhereInput | facilitiesAdvantageWhereInput[]
    OR?: facilitiesAdvantageWhereInput[]
    NOT?: facilitiesAdvantageWhereInput | facilitiesAdvantageWhereInput[]
    ad_id?: StringFilter<"facilitiesAdvantage"> | string
    advantage_id?: StringFilter<"facilitiesAdvantage"> | string
    ad?: XOR<AdRelationFilter, adWhereInput>
    advantage?: XOR<AdvantageRelationFilter, advantageWhereInput>
  }, "ad_id_advantage_id">

  export type facilitiesAdvantageOrderByWithAggregationInput = {
    ad_id?: SortOrder
    advantage_id?: SortOrder
    _count?: facilitiesAdvantageCountOrderByAggregateInput
    _max?: facilitiesAdvantageMaxOrderByAggregateInput
    _min?: facilitiesAdvantageMinOrderByAggregateInput
  }

  export type facilitiesAdvantageScalarWhereWithAggregatesInput = {
    AND?: facilitiesAdvantageScalarWhereWithAggregatesInput | facilitiesAdvantageScalarWhereWithAggregatesInput[]
    OR?: facilitiesAdvantageScalarWhereWithAggregatesInput[]
    NOT?: facilitiesAdvantageScalarWhereWithAggregatesInput | facilitiesAdvantageScalarWhereWithAggregatesInput[]
    ad_id?: StringWithAggregatesFilter<"facilitiesAdvantage"> | string
    advantage_id?: StringWithAggregatesFilter<"facilitiesAdvantage"> | string
  }

  export type cvWhereInput = {
    AND?: cvWhereInput | cvWhereInput[]
    OR?: cvWhereInput[]
    NOT?: cvWhereInput | cvWhereInput[]
    id?: StringFilter<"cv"> | string
    user_id?: StringFilter<"cv"> | string
    ad_id?: StringFilter<"cv"> | string
    company_id?: StringFilter<"cv"> | string
    status?: EnumstatusFilter<"cv"> | $Enums.status
    created_at?: DateTimeFilter<"cv"> | Date | string
    user?: XOR<UserNullableRelationFilter, userWhereInput> | null
    ad?: XOR<AdNullableRelationFilter, adWhereInput> | null
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null
    cvAd?: CvAdListRelationFilter
  }

  export type cvOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    ad_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    user?: userOrderByWithRelationInput
    ad?: adOrderByWithRelationInput
    company?: companyOrderByWithRelationInput
    cvAd?: cvAdOrderByRelationAggregateInput
  }

  export type cvWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cvWhereInput | cvWhereInput[]
    OR?: cvWhereInput[]
    NOT?: cvWhereInput | cvWhereInput[]
    user_id?: StringFilter<"cv"> | string
    ad_id?: StringFilter<"cv"> | string
    company_id?: StringFilter<"cv"> | string
    status?: EnumstatusFilter<"cv"> | $Enums.status
    created_at?: DateTimeFilter<"cv"> | Date | string
    user?: XOR<UserNullableRelationFilter, userWhereInput> | null
    ad?: XOR<AdNullableRelationFilter, adWhereInput> | null
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null
    cvAd?: CvAdListRelationFilter
  }, "id">

  export type cvOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    ad_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: cvCountOrderByAggregateInput
    _max?: cvMaxOrderByAggregateInput
    _min?: cvMinOrderByAggregateInput
  }

  export type cvScalarWhereWithAggregatesInput = {
    AND?: cvScalarWhereWithAggregatesInput | cvScalarWhereWithAggregatesInput[]
    OR?: cvScalarWhereWithAggregatesInput[]
    NOT?: cvScalarWhereWithAggregatesInput | cvScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cv"> | string
    user_id?: StringWithAggregatesFilter<"cv"> | string
    ad_id?: StringWithAggregatesFilter<"cv"> | string
    company_id?: StringWithAggregatesFilter<"cv"> | string
    status?: EnumstatusWithAggregatesFilter<"cv"> | $Enums.status
    created_at?: DateTimeWithAggregatesFilter<"cv"> | Date | string
  }

  export type cvAdWhereInput = {
    AND?: cvAdWhereInput | cvAdWhereInput[]
    OR?: cvAdWhereInput[]
    NOT?: cvAdWhereInput | cvAdWhereInput[]
    cv_id?: StringFilter<"cvAd"> | string
    ad_id?: StringFilter<"cvAd"> | string
    cv?: XOR<CvRelationFilter, cvWhereInput>
    ad?: XOR<AdRelationFilter, adWhereInput>
  }

  export type cvAdOrderByWithRelationInput = {
    cv_id?: SortOrder
    ad_id?: SortOrder
    cv?: cvOrderByWithRelationInput
    ad?: adOrderByWithRelationInput
  }

  export type cvAdWhereUniqueInput = Prisma.AtLeast<{
    cv_id_ad_id?: cvAdCv_idAd_idCompoundUniqueInput
    AND?: cvAdWhereInput | cvAdWhereInput[]
    OR?: cvAdWhereInput[]
    NOT?: cvAdWhereInput | cvAdWhereInput[]
    cv_id?: StringFilter<"cvAd"> | string
    ad_id?: StringFilter<"cvAd"> | string
    cv?: XOR<CvRelationFilter, cvWhereInput>
    ad?: XOR<AdRelationFilter, adWhereInput>
  }, "cv_id_ad_id">

  export type cvAdOrderByWithAggregationInput = {
    cv_id?: SortOrder
    ad_id?: SortOrder
    _count?: cvAdCountOrderByAggregateInput
    _max?: cvAdMaxOrderByAggregateInput
    _min?: cvAdMinOrderByAggregateInput
  }

  export type cvAdScalarWhereWithAggregatesInput = {
    AND?: cvAdScalarWhereWithAggregatesInput | cvAdScalarWhereWithAggregatesInput[]
    OR?: cvAdScalarWhereWithAggregatesInput[]
    NOT?: cvAdScalarWhereWithAggregatesInput | cvAdScalarWhereWithAggregatesInput[]
    cv_id?: StringWithAggregatesFilter<"cvAd"> | string
    ad_id?: StringWithAggregatesFilter<"cvAd"> | string
  }

  export type category_collectionCreateInput = {
    id?: string
    name?: string | null
    link?: string | null
    categories?: categoryCreateNestedOneWithoutCategory_collectionsInput
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutCategory_collectionsInput
  }

  export type category_collectionUncheckedCreateInput = {
    id?: string
    category_id?: string | null
    name?: string | null
    link?: string | null
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutCategory_collectionsInput
  }

  export type category_collectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: categoryUpdateOneWithoutCategory_collectionsNestedInput
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutCategory_collectionsNestedInput
  }

  export type category_collectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutCategory_collectionsNestedInput
  }

  export type category_collectionCreateManyInput = {
    id?: string
    category_id?: string | null
    name?: string | null
    link?: string | null
  }

  export type category_collectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type category_collectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateInput = {
    id?: string
    name: string
    link: string
    category_collections?: category_collectionCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUncheckedCreateInput = {
    id?: string
    name: string
    link: string
    category_collections?: category_collectionUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    category_collections?: category_collectionUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    category_collections?: category_collectionUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryCreateManyInput = {
    id?: string
    name: string
    link: string
  }

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type provinceCreateInput = {
    id?: string
    name: string
    cities?: cityCreateNestedManyWithoutProvinceInput
  }

  export type provinceUncheckedCreateInput = {
    id?: string
    name: string
    cities?: cityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type provinceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cities?: cityUpdateManyWithoutProvinceNestedInput
  }

  export type provinceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cities?: cityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type provinceCreateManyInput = {
    id?: string
    name: string
  }

  export type provinceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type provinceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type cityCreateInput = {
    id?: string
    name?: string | null
    province?: provinceCreateNestedOneWithoutCitiesInput
    locations?: locationCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateInput = {
    id?: string
    province_id?: string | null
    name?: string | null
    locations?: locationUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province?: provinceUpdateOneWithoutCitiesNestedInput
    locations?: locationUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    province_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: locationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type cityCreateManyInput = {
    id?: string
    province_id?: string | null
    name?: string | null
  }

  export type cityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    province_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company?: companyCreateNestedOneWithoutUserInput
    cv?: cvCreateNestedManyWithoutUserInput
    companies?: userCompanyFollowCreateNestedManyWithoutUserInput
    followers?: followersCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company_id?: string | null
    cv?: cvUncheckedCreateNestedManyWithoutUserInput
    companies?: userCompanyFollowUncheckedCreateNestedManyWithoutUserInput
    followers?: followersUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutUserNestedInput
    cv?: cvUpdateManyWithoutUserNestedInput
    companies?: userCompanyFollowUpdateManyWithoutUserNestedInput
    followers?: followersUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: cvUncheckedUpdateManyWithoutUserNestedInput
    companies?: userCompanyFollowUncheckedUpdateManyWithoutUserNestedInput
    followers?: followersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company_id?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type followersCreateInput = {
    id?: string
    user?: userCreateNestedOneWithoutFollowersInput
    company?: companyCreateNestedOneWithoutFollowersInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutFollowersInput
  }

  export type followersUncheckedCreateInput = {
    id?: string
    user_id: string
    company_id: string
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type followersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneWithoutFollowersNestedInput
    company?: companyUpdateOneWithoutFollowersNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutFollowersNestedInput
  }

  export type followersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type followersCreateManyInput = {
    id?: string
    user_id: string
    company_id: string
  }

  export type followersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type followersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type locationCreateInput = {
    id?: string
    address: string
    city: cityCreateNestedOneWithoutLocationsInput
    companies?: companyCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateInput = {
    id?: string
    city_id: string
    address: string
    companies?: companyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: cityUpdateOneRequiredWithoutLocationsNestedInput
    companies?: companyUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    companies?: companyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationCreateManyInput = {
    id?: string
    city_id: string
    address: string
  }

  export type locationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type locationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type companyCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location: locationCreateNestedOneWithoutCompaniesInput
    user?: userCreateNestedManyWithoutCompanyInput
    ads?: adCreateNestedManyWithoutCompanyInput
    cv?: cvCreateNestedManyWithoutCompanyInput
    followers?: followersCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
    user?: userUncheckedCreateNestedManyWithoutCompanyInput
    ads?: adUncheckedCreateNestedManyWithoutCompanyInput
    cv?: cvUncheckedCreateNestedManyWithoutCompanyInput
    followers?: followersUncheckedCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCompaniesNestedInput
    user?: userUpdateManyWithoutCompanyNestedInput
    ads?: adUpdateManyWithoutCompanyNestedInput
    cv?: cvUpdateManyWithoutCompanyNestedInput
    followers?: followersUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput
    ads?: adUncheckedUpdateManyWithoutCompanyNestedInput
    cv?: cvUncheckedUpdateManyWithoutCompanyNestedInput
    followers?: followersUncheckedUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
  }

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
  }

  export type userCompanyFollowCreateInput = {
    user: userCreateNestedOneWithoutCompaniesInput
    company: companyCreateNestedOneWithoutUserCompanyFollowInput
    followers?: followersCreateNestedOneWithoutUserCompanyFollowInput
  }

  export type userCompanyFollowUncheckedCreateInput = {
    user_id: string
    company_id: string
    followersId?: string | null
  }

  export type userCompanyFollowUpdateInput = {
    user?: userUpdateOneRequiredWithoutCompaniesNestedInput
    company?: companyUpdateOneRequiredWithoutUserCompanyFollowNestedInput
    followers?: followersUpdateOneWithoutUserCompanyFollowNestedInput
  }

  export type userCompanyFollowUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    followersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCompanyFollowCreateManyInput = {
    user_id: string
    company_id: string
    followersId?: string | null
  }

  export type userCompanyFollowUpdateManyMutationInput = {

  }

  export type userCompanyFollowUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    followersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type advantageCreateInput = {
    id?: string
    type: string
    facilitiesAdvantage?: facilitiesAdvantageCreateNestedManyWithoutAdvantageInput
  }

  export type advantageUncheckedCreateInput = {
    id?: string
    type: string
    facilitiesAdvantage?: facilitiesAdvantageUncheckedCreateNestedManyWithoutAdvantageInput
  }

  export type advantageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    facilitiesAdvantage?: facilitiesAdvantageUpdateManyWithoutAdvantageNestedInput
  }

  export type advantageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    facilitiesAdvantage?: facilitiesAdvantageUncheckedUpdateManyWithoutAdvantageNestedInput
  }

  export type advantageCreateManyInput = {
    id?: string
    type: string
  }

  export type advantageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type advantageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type adCreateInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageCreateNestedManyWithoutAdInput
    company: companyCreateNestedOneWithoutAdsInput
    cvAd?: cvAdCreateNestedManyWithoutAdInput
    cv?: cvCreateNestedManyWithoutAdInput
  }

  export type adUncheckedCreateInput = {
    company_id: string
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedCreateNestedManyWithoutAdInput
    cvAd?: cvAdUncheckedCreateNestedManyWithoutAdInput
    cv?: cvUncheckedCreateNestedManyWithoutAdInput
  }

  export type adUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUpdateManyWithoutAdNestedInput
    company?: companyUpdateOneRequiredWithoutAdsNestedInput
    cvAd?: cvAdUpdateManyWithoutAdNestedInput
    cv?: cvUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedUpdateManyWithoutAdNestedInput
    cvAd?: cvAdUncheckedUpdateManyWithoutAdNestedInput
    cv?: cvUncheckedUpdateManyWithoutAdNestedInput
  }

  export type adCreateManyInput = {
    company_id: string
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
  }

  export type adUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adsCategory_collectionCreateInput = {
    ad: adCreateNestedOneWithoutAdsCategory_collectionsInput
    category_collections: category_collectionCreateNestedOneWithoutAdsCategory_collectionsInput
  }

  export type adsCategory_collectionUncheckedCreateInput = {
    ad_id: string
    category_collection_id: string
  }

  export type adsCategory_collectionUpdateInput = {
    ad?: adUpdateOneRequiredWithoutAdsCategory_collectionsNestedInput
    category_collections?: category_collectionUpdateOneRequiredWithoutAdsCategory_collectionsNestedInput
  }

  export type adsCategory_collectionUncheckedUpdateInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    category_collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type adsCategory_collectionCreateManyInput = {
    ad_id: string
    category_collection_id: string
  }

  export type adsCategory_collectionUpdateManyMutationInput = {

  }

  export type adsCategory_collectionUncheckedUpdateManyInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    category_collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type facilitiesAdvantageCreateInput = {
    ad: adCreateNestedOneWithoutFacilitiesAdvantageInput
    advantage: advantageCreateNestedOneWithoutFacilitiesAdvantageInput
  }

  export type facilitiesAdvantageUncheckedCreateInput = {
    ad_id: string
    advantage_id: string
  }

  export type facilitiesAdvantageUpdateInput = {
    ad?: adUpdateOneRequiredWithoutFacilitiesAdvantageNestedInput
    advantage?: advantageUpdateOneRequiredWithoutFacilitiesAdvantageNestedInput
  }

  export type facilitiesAdvantageUncheckedUpdateInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    advantage_id?: StringFieldUpdateOperationsInput | string
  }

  export type facilitiesAdvantageCreateManyInput = {
    ad_id: string
    advantage_id: string
  }

  export type facilitiesAdvantageUpdateManyMutationInput = {

  }

  export type facilitiesAdvantageUncheckedUpdateManyInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    advantage_id?: StringFieldUpdateOperationsInput | string
  }

  export type cvCreateInput = {
    id?: string
    status: $Enums.status
    created_at?: Date | string
    user?: userCreateNestedOneWithoutCvInput
    ad?: adCreateNestedOneWithoutCvInput
    company?: companyCreateNestedOneWithoutCvInput
    cvAd?: cvAdCreateNestedManyWithoutCvInput
  }

  export type cvUncheckedCreateInput = {
    id?: string
    user_id: string
    ad_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
    cvAd?: cvAdUncheckedCreateNestedManyWithoutCvInput
  }

  export type cvUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutCvNestedInput
    ad?: adUpdateOneWithoutCvNestedInput
    company?: companyUpdateOneWithoutCvNestedInput
    cvAd?: cvAdUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvAd?: cvAdUncheckedUpdateManyWithoutCvNestedInput
  }

  export type cvCreateManyInput = {
    id?: string
    user_id: string
    ad_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
  }

  export type cvUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cvUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cvAdCreateInput = {
    cv: cvCreateNestedOneWithoutCvAdInput
    ad: adCreateNestedOneWithoutCvAdInput
  }

  export type cvAdUncheckedCreateInput = {
    cv_id: string
    ad_id: string
  }

  export type cvAdUpdateInput = {
    cv?: cvUpdateOneRequiredWithoutCvAdNestedInput
    ad?: adUpdateOneRequiredWithoutCvAdNestedInput
  }

  export type cvAdUncheckedUpdateInput = {
    cv_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type cvAdCreateManyInput = {
    cv_id: string
    ad_id: string
  }

  export type cvAdUpdateManyMutationInput = {

  }

  export type cvAdUncheckedUpdateManyInput = {
    cv_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryNullableRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type AdsCategory_collectionListRelationFilter = {
    every?: adsCategory_collectionWhereInput
    some?: adsCategory_collectionWhereInput
    none?: adsCategory_collectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adsCategory_collectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type category_collectionCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type category_collectionMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type category_collectionMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Category_collectionListRelationFilter = {
    every?: category_collectionWhereInput
    some?: category_collectionWhereInput
    none?: category_collectionWhereInput
  }

  export type category_collectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: cityWhereInput
    some?: cityWhereInput
    none?: cityWhereInput
  }

  export type cityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type provinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type provinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type provinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceNullableRelationFilter = {
    is?: provinceWhereInput | null
    isNot?: provinceWhereInput | null
  }

  export type LocationListRelationFilter = {
    every?: locationWhereInput
    some?: locationWhereInput
    none?: locationWhereInput
  }

  export type locationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cityCountOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
    name?: SortOrder
  }

  export type cityMaxOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
    name?: SortOrder
  }

  export type cityMinOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
    name?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null
    isNot?: companyWhereInput | null
  }

  export type CvListRelationFilter = {
    every?: cvWhereInput
    some?: cvWhereInput
    none?: cvWhereInput
  }

  export type UserCompanyFollowListRelationFilter = {
    every?: userCompanyFollowWhereInput
    some?: userCompanyFollowWhereInput
    none?: userCompanyFollowWhereInput
  }

  export type FollowersListRelationFilter = {
    every?: followersWhereInput
    some?: followersWhereInput
    none?: followersWhereInput
  }

  export type cvOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCompanyFollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type followersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    company_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    company_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    company_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type followersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type followersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type followersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type CityRelationFilter = {
    is?: cityWhereInput
    isNot?: cityWhereInput
  }

  export type CompanyListRelationFilter = {
    every?: companyWhereInput
    some?: companyWhereInput
    none?: companyWhereInput
  }

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type locationCountOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    address?: SortOrder
  }

  export type locationMaxOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    address?: SortOrder
  }

  export type locationMinOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    address?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LocationRelationFilter = {
    is?: locationWhereInput
    isNot?: locationWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type AdListRelationFilter = {
    every?: adWhereInput
    some?: adWhereInput
    none?: adWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    website?: SortOrder
    description?: SortOrder
    slogan?: SortOrder
    organization_employ?: SortOrder
    type_of_activity?: SortOrder
    industry?: SortOrder
    established_year?: SortOrder
    location_id?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    organization_employ?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    website?: SortOrder
    description?: SortOrder
    slogan?: SortOrder
    organization_employ?: SortOrder
    type_of_activity?: SortOrder
    industry?: SortOrder
    established_year?: SortOrder
    location_id?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    website?: SortOrder
    description?: SortOrder
    slogan?: SortOrder
    organization_employ?: SortOrder
    type_of_activity?: SortOrder
    industry?: SortOrder
    established_year?: SortOrder
    location_id?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    score_company?: SortOrder
    score_popularity?: SortOrder
    score_experience_of_job_seekers?: SortOrder
    score_responsiveness?: SortOrder
    organization_employ?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type CompanyRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type FollowersNullableRelationFilter = {
    is?: followersWhereInput | null
    isNot?: followersWhereInput | null
  }

  export type userCompanyFollowUser_idCompany_idCompoundUniqueInput = {
    user_id: string
    company_id: string
  }

  export type userCompanyFollowCountOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    followersId?: SortOrder
  }

  export type userCompanyFollowMaxOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    followersId?: SortOrder
  }

  export type userCompanyFollowMinOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    followersId?: SortOrder
  }

  export type FacilitiesAdvantageListRelationFilter = {
    every?: facilitiesAdvantageWhereInput
    some?: facilitiesAdvantageWhereInput
    none?: facilitiesAdvantageWhereInput
  }

  export type facilitiesAdvantageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type advantageCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type advantageMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type advantageMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
  }

  export type Enumseniority_levelFilter<$PrismaModel = never> = {
    equals?: $Enums.seniority_level | Enumseniority_levelFieldRefInput<$PrismaModel>
    in?: $Enums.seniority_level[]
    notIn?: $Enums.seniority_level[]
    not?: NestedEnumseniority_levelFilter<$PrismaModel> | $Enums.seniority_level
  }

  export type Enumcooperation_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.cooperation_type | Enumcooperation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.cooperation_type[]
    notIn?: $Enums.cooperation_type[]
    not?: NestedEnumcooperation_typeFilter<$PrismaModel> | $Enums.cooperation_type
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CvAdListRelationFilter = {
    every?: cvAdWhereInput
    some?: cvAdWhereInput
    none?: cvAdWhereInput
  }

  export type cvAdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adCountOrderByAggregateInput = {
    company_id?: SortOrder
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    work_time?: SortOrder
    travel_benefits?: SortOrder
    age?: SortOrder
    edicational_level?: SortOrder
    key_indicator?: SortOrder
    software_skills?: SortOrder
    tags?: SortOrder
    facilities?: SortOrder
    gender?: SortOrder
    seniority_level?: SortOrder
    cooperation_type?: SortOrder
    important?: SortOrder
    response?: SortOrder
    itern?: SortOrder
    telecommuting?: SortOrder
    disabledPeople?: SortOrder
    militaryOrder?: SortOrder
    created_at?: SortOrder
  }

  export type adMaxOrderByAggregateInput = {
    company_id?: SortOrder
    id?: SortOrder
    name?: SortOrder
    work_time?: SortOrder
    travel_benefits?: SortOrder
    gender?: SortOrder
    seniority_level?: SortOrder
    cooperation_type?: SortOrder
    important?: SortOrder
    response?: SortOrder
    itern?: SortOrder
    telecommuting?: SortOrder
    disabledPeople?: SortOrder
    militaryOrder?: SortOrder
    created_at?: SortOrder
  }

  export type adMinOrderByAggregateInput = {
    company_id?: SortOrder
    id?: SortOrder
    name?: SortOrder
    work_time?: SortOrder
    travel_benefits?: SortOrder
    gender?: SortOrder
    seniority_level?: SortOrder
    cooperation_type?: SortOrder
    important?: SortOrder
    response?: SortOrder
    itern?: SortOrder
    telecommuting?: SortOrder
    disabledPeople?: SortOrder
    militaryOrder?: SortOrder
    created_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
  }

  export type Enumseniority_levelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seniority_level | Enumseniority_levelFieldRefInput<$PrismaModel>
    in?: $Enums.seniority_level[]
    notIn?: $Enums.seniority_level[]
    not?: NestedEnumseniority_levelWithAggregatesFilter<$PrismaModel> | $Enums.seniority_level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumseniority_levelFilter<$PrismaModel>
    _max?: NestedEnumseniority_levelFilter<$PrismaModel>
  }

  export type Enumcooperation_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cooperation_type | Enumcooperation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.cooperation_type[]
    notIn?: $Enums.cooperation_type[]
    not?: NestedEnumcooperation_typeWithAggregatesFilter<$PrismaModel> | $Enums.cooperation_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcooperation_typeFilter<$PrismaModel>
    _max?: NestedEnumcooperation_typeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdRelationFilter = {
    is?: adWhereInput
    isNot?: adWhereInput
  }

  export type Category_collectionRelationFilter = {
    is?: category_collectionWhereInput
    isNot?: category_collectionWhereInput
  }

  export type adsCategory_collectionAd_idCategory_collection_idCompoundUniqueInput = {
    ad_id: string
    category_collection_id: string
  }

  export type adsCategory_collectionCountOrderByAggregateInput = {
    ad_id?: SortOrder
    category_collection_id?: SortOrder
  }

  export type adsCategory_collectionMaxOrderByAggregateInput = {
    ad_id?: SortOrder
    category_collection_id?: SortOrder
  }

  export type adsCategory_collectionMinOrderByAggregateInput = {
    ad_id?: SortOrder
    category_collection_id?: SortOrder
  }

  export type AdvantageRelationFilter = {
    is?: advantageWhereInput
    isNot?: advantageWhereInput
  }

  export type facilitiesAdvantageAd_idAdvantage_idCompoundUniqueInput = {
    ad_id: string
    advantage_id: string
  }

  export type facilitiesAdvantageCountOrderByAggregateInput = {
    ad_id?: SortOrder
    advantage_id?: SortOrder
  }

  export type facilitiesAdvantageMaxOrderByAggregateInput = {
    ad_id?: SortOrder
    advantage_id?: SortOrder
  }

  export type facilitiesAdvantageMinOrderByAggregateInput = {
    ad_id?: SortOrder
    advantage_id?: SortOrder
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type AdNullableRelationFilter = {
    is?: adWhereInput | null
    isNot?: adWhereInput | null
  }

  export type cvCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ad_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type cvMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ad_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type cvMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ad_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type CvRelationFilter = {
    is?: cvWhereInput
    isNot?: cvWhereInput
  }

  export type cvAdCv_idAd_idCompoundUniqueInput = {
    cv_id: string
    ad_id: string
  }

  export type cvAdCountOrderByAggregateInput = {
    cv_id?: SortOrder
    ad_id?: SortOrder
  }

  export type cvAdMaxOrderByAggregateInput = {
    cv_id?: SortOrder
    ad_id?: SortOrder
  }

  export type cvAdMinOrderByAggregateInput = {
    cv_id?: SortOrder
    ad_id?: SortOrder
  }

  export type categoryCreateNestedOneWithoutCategory_collectionsInput = {
    create?: XOR<categoryCreateWithoutCategory_collectionsInput, categoryUncheckedCreateWithoutCategory_collectionsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutCategory_collectionsInput
    connect?: categoryWhereUniqueInput
  }

  export type adsCategory_collectionCreateNestedManyWithoutCategory_collectionsInput = {
    create?: XOR<adsCategory_collectionCreateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput> | adsCategory_collectionCreateWithoutCategory_collectionsInput[] | adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput | adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput[]
    createMany?: adsCategory_collectionCreateManyCategory_collectionsInputEnvelope
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
  }

  export type adsCategory_collectionUncheckedCreateNestedManyWithoutCategory_collectionsInput = {
    create?: XOR<adsCategory_collectionCreateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput> | adsCategory_collectionCreateWithoutCategory_collectionsInput[] | adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput | adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput[]
    createMany?: adsCategory_collectionCreateManyCategory_collectionsInputEnvelope
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type categoryUpdateOneWithoutCategory_collectionsNestedInput = {
    create?: XOR<categoryCreateWithoutCategory_collectionsInput, categoryUncheckedCreateWithoutCategory_collectionsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutCategory_collectionsInput
    upsert?: categoryUpsertWithoutCategory_collectionsInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutCategory_collectionsInput, categoryUpdateWithoutCategory_collectionsInput>, categoryUncheckedUpdateWithoutCategory_collectionsInput>
  }

  export type adsCategory_collectionUpdateManyWithoutCategory_collectionsNestedInput = {
    create?: XOR<adsCategory_collectionCreateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput> | adsCategory_collectionCreateWithoutCategory_collectionsInput[] | adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput | adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput[]
    upsert?: adsCategory_collectionUpsertWithWhereUniqueWithoutCategory_collectionsInput | adsCategory_collectionUpsertWithWhereUniqueWithoutCategory_collectionsInput[]
    createMany?: adsCategory_collectionCreateManyCategory_collectionsInputEnvelope
    set?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    disconnect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    delete?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    update?: adsCategory_collectionUpdateWithWhereUniqueWithoutCategory_collectionsInput | adsCategory_collectionUpdateWithWhereUniqueWithoutCategory_collectionsInput[]
    updateMany?: adsCategory_collectionUpdateManyWithWhereWithoutCategory_collectionsInput | adsCategory_collectionUpdateManyWithWhereWithoutCategory_collectionsInput[]
    deleteMany?: adsCategory_collectionScalarWhereInput | adsCategory_collectionScalarWhereInput[]
  }

  export type adsCategory_collectionUncheckedUpdateManyWithoutCategory_collectionsNestedInput = {
    create?: XOR<adsCategory_collectionCreateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput> | adsCategory_collectionCreateWithoutCategory_collectionsInput[] | adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput | adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput[]
    upsert?: adsCategory_collectionUpsertWithWhereUniqueWithoutCategory_collectionsInput | adsCategory_collectionUpsertWithWhereUniqueWithoutCategory_collectionsInput[]
    createMany?: adsCategory_collectionCreateManyCategory_collectionsInputEnvelope
    set?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    disconnect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    delete?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    update?: adsCategory_collectionUpdateWithWhereUniqueWithoutCategory_collectionsInput | adsCategory_collectionUpdateWithWhereUniqueWithoutCategory_collectionsInput[]
    updateMany?: adsCategory_collectionUpdateManyWithWhereWithoutCategory_collectionsInput | adsCategory_collectionUpdateManyWithWhereWithoutCategory_collectionsInput[]
    deleteMany?: adsCategory_collectionScalarWhereInput | adsCategory_collectionScalarWhereInput[]
  }

  export type category_collectionCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<category_collectionCreateWithoutCategoriesInput, category_collectionUncheckedCreateWithoutCategoriesInput> | category_collectionCreateWithoutCategoriesInput[] | category_collectionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: category_collectionCreateOrConnectWithoutCategoriesInput | category_collectionCreateOrConnectWithoutCategoriesInput[]
    createMany?: category_collectionCreateManyCategoriesInputEnvelope
    connect?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
  }

  export type category_collectionUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<category_collectionCreateWithoutCategoriesInput, category_collectionUncheckedCreateWithoutCategoriesInput> | category_collectionCreateWithoutCategoriesInput[] | category_collectionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: category_collectionCreateOrConnectWithoutCategoriesInput | category_collectionCreateOrConnectWithoutCategoriesInput[]
    createMany?: category_collectionCreateManyCategoriesInputEnvelope
    connect?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
  }

  export type category_collectionUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<category_collectionCreateWithoutCategoriesInput, category_collectionUncheckedCreateWithoutCategoriesInput> | category_collectionCreateWithoutCategoriesInput[] | category_collectionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: category_collectionCreateOrConnectWithoutCategoriesInput | category_collectionCreateOrConnectWithoutCategoriesInput[]
    upsert?: category_collectionUpsertWithWhereUniqueWithoutCategoriesInput | category_collectionUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: category_collectionCreateManyCategoriesInputEnvelope
    set?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    disconnect?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    delete?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    connect?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    update?: category_collectionUpdateWithWhereUniqueWithoutCategoriesInput | category_collectionUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: category_collectionUpdateManyWithWhereWithoutCategoriesInput | category_collectionUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: category_collectionScalarWhereInput | category_collectionScalarWhereInput[]
  }

  export type category_collectionUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<category_collectionCreateWithoutCategoriesInput, category_collectionUncheckedCreateWithoutCategoriesInput> | category_collectionCreateWithoutCategoriesInput[] | category_collectionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: category_collectionCreateOrConnectWithoutCategoriesInput | category_collectionCreateOrConnectWithoutCategoriesInput[]
    upsert?: category_collectionUpsertWithWhereUniqueWithoutCategoriesInput | category_collectionUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: category_collectionCreateManyCategoriesInputEnvelope
    set?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    disconnect?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    delete?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    connect?: category_collectionWhereUniqueInput | category_collectionWhereUniqueInput[]
    update?: category_collectionUpdateWithWhereUniqueWithoutCategoriesInput | category_collectionUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: category_collectionUpdateManyWithWhereWithoutCategoriesInput | category_collectionUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: category_collectionScalarWhereInput | category_collectionScalarWhereInput[]
  }

  export type cityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
  }

  export type cityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
  }

  export type cityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    upsert?: cityUpsertWithWhereUniqueWithoutProvinceInput | cityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    set?: cityWhereUniqueInput | cityWhereUniqueInput[]
    disconnect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    delete?: cityWhereUniqueInput | cityWhereUniqueInput[]
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    update?: cityUpdateWithWhereUniqueWithoutProvinceInput | cityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: cityUpdateManyWithWhereWithoutProvinceInput | cityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: cityScalarWhereInput | cityScalarWhereInput[]
  }

  export type cityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    upsert?: cityUpsertWithWhereUniqueWithoutProvinceInput | cityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    set?: cityWhereUniqueInput | cityWhereUniqueInput[]
    disconnect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    delete?: cityWhereUniqueInput | cityWhereUniqueInput[]
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    update?: cityUpdateWithWhereUniqueWithoutProvinceInput | cityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: cityUpdateManyWithWhereWithoutProvinceInput | cityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: cityScalarWhereInput | cityScalarWhereInput[]
  }

  export type provinceCreateNestedOneWithoutCitiesInput = {
    create?: XOR<provinceCreateWithoutCitiesInput, provinceUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provinceCreateOrConnectWithoutCitiesInput
    connect?: provinceWhereUniqueInput
  }

  export type locationCreateNestedManyWithoutCityInput = {
    create?: XOR<locationCreateWithoutCityInput, locationUncheckedCreateWithoutCityInput> | locationCreateWithoutCityInput[] | locationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: locationCreateOrConnectWithoutCityInput | locationCreateOrConnectWithoutCityInput[]
    createMany?: locationCreateManyCityInputEnvelope
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[]
  }

  export type locationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<locationCreateWithoutCityInput, locationUncheckedCreateWithoutCityInput> | locationCreateWithoutCityInput[] | locationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: locationCreateOrConnectWithoutCityInput | locationCreateOrConnectWithoutCityInput[]
    createMany?: locationCreateManyCityInputEnvelope
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[]
  }

  export type provinceUpdateOneWithoutCitiesNestedInput = {
    create?: XOR<provinceCreateWithoutCitiesInput, provinceUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provinceCreateOrConnectWithoutCitiesInput
    upsert?: provinceUpsertWithoutCitiesInput
    disconnect?: provinceWhereInput | boolean
    delete?: provinceWhereInput | boolean
    connect?: provinceWhereUniqueInput
    update?: XOR<XOR<provinceUpdateToOneWithWhereWithoutCitiesInput, provinceUpdateWithoutCitiesInput>, provinceUncheckedUpdateWithoutCitiesInput>
  }

  export type locationUpdateManyWithoutCityNestedInput = {
    create?: XOR<locationCreateWithoutCityInput, locationUncheckedCreateWithoutCityInput> | locationCreateWithoutCityInput[] | locationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: locationCreateOrConnectWithoutCityInput | locationCreateOrConnectWithoutCityInput[]
    upsert?: locationUpsertWithWhereUniqueWithoutCityInput | locationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: locationCreateManyCityInputEnvelope
    set?: locationWhereUniqueInput | locationWhereUniqueInput[]
    disconnect?: locationWhereUniqueInput | locationWhereUniqueInput[]
    delete?: locationWhereUniqueInput | locationWhereUniqueInput[]
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[]
    update?: locationUpdateWithWhereUniqueWithoutCityInput | locationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: locationUpdateManyWithWhereWithoutCityInput | locationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: locationScalarWhereInput | locationScalarWhereInput[]
  }

  export type locationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<locationCreateWithoutCityInput, locationUncheckedCreateWithoutCityInput> | locationCreateWithoutCityInput[] | locationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: locationCreateOrConnectWithoutCityInput | locationCreateOrConnectWithoutCityInput[]
    upsert?: locationUpsertWithWhereUniqueWithoutCityInput | locationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: locationCreateManyCityInputEnvelope
    set?: locationWhereUniqueInput | locationWhereUniqueInput[]
    disconnect?: locationWhereUniqueInput | locationWhereUniqueInput[]
    delete?: locationWhereUniqueInput | locationWhereUniqueInput[]
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[]
    update?: locationUpdateWithWhereUniqueWithoutCityInput | locationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: locationUpdateManyWithWhereWithoutCityInput | locationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: locationScalarWhereInput | locationScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
    connectOrCreate?: companyCreateOrConnectWithoutUserInput
    connect?: companyWhereUniqueInput
  }

  export type cvCreateNestedManyWithoutUserInput = {
    create?: XOR<cvCreateWithoutUserInput, cvUncheckedCreateWithoutUserInput> | cvCreateWithoutUserInput[] | cvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cvCreateOrConnectWithoutUserInput | cvCreateOrConnectWithoutUserInput[]
    createMany?: cvCreateManyUserInputEnvelope
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
  }

  export type userCompanyFollowCreateNestedManyWithoutUserInput = {
    create?: XOR<userCompanyFollowCreateWithoutUserInput, userCompanyFollowUncheckedCreateWithoutUserInput> | userCompanyFollowCreateWithoutUserInput[] | userCompanyFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutUserInput | userCompanyFollowCreateOrConnectWithoutUserInput[]
    createMany?: userCompanyFollowCreateManyUserInputEnvelope
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
  }

  export type followersCreateNestedManyWithoutUserInput = {
    create?: XOR<followersCreateWithoutUserInput, followersUncheckedCreateWithoutUserInput> | followersCreateWithoutUserInput[] | followersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followersCreateOrConnectWithoutUserInput | followersCreateOrConnectWithoutUserInput[]
    createMany?: followersCreateManyUserInputEnvelope
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
  }

  export type cvUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cvCreateWithoutUserInput, cvUncheckedCreateWithoutUserInput> | cvCreateWithoutUserInput[] | cvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cvCreateOrConnectWithoutUserInput | cvCreateOrConnectWithoutUserInput[]
    createMany?: cvCreateManyUserInputEnvelope
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
  }

  export type userCompanyFollowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userCompanyFollowCreateWithoutUserInput, userCompanyFollowUncheckedCreateWithoutUserInput> | userCompanyFollowCreateWithoutUserInput[] | userCompanyFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutUserInput | userCompanyFollowCreateOrConnectWithoutUserInput[]
    createMany?: userCompanyFollowCreateManyUserInputEnvelope
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
  }

  export type followersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<followersCreateWithoutUserInput, followersUncheckedCreateWithoutUserInput> | followersCreateWithoutUserInput[] | followersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followersCreateOrConnectWithoutUserInput | followersCreateOrConnectWithoutUserInput[]
    createMany?: followersCreateManyUserInputEnvelope
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
    connectOrCreate?: companyCreateOrConnectWithoutUserInput
    upsert?: companyUpsertWithoutUserInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>, companyUncheckedUpdateWithoutUserInput>
  }

  export type cvUpdateManyWithoutUserNestedInput = {
    create?: XOR<cvCreateWithoutUserInput, cvUncheckedCreateWithoutUserInput> | cvCreateWithoutUserInput[] | cvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cvCreateOrConnectWithoutUserInput | cvCreateOrConnectWithoutUserInput[]
    upsert?: cvUpsertWithWhereUniqueWithoutUserInput | cvUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cvCreateManyUserInputEnvelope
    set?: cvWhereUniqueInput | cvWhereUniqueInput[]
    disconnect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    delete?: cvWhereUniqueInput | cvWhereUniqueInput[]
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    update?: cvUpdateWithWhereUniqueWithoutUserInput | cvUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cvUpdateManyWithWhereWithoutUserInput | cvUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cvScalarWhereInput | cvScalarWhereInput[]
  }

  export type userCompanyFollowUpdateManyWithoutUserNestedInput = {
    create?: XOR<userCompanyFollowCreateWithoutUserInput, userCompanyFollowUncheckedCreateWithoutUserInput> | userCompanyFollowCreateWithoutUserInput[] | userCompanyFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutUserInput | userCompanyFollowCreateOrConnectWithoutUserInput[]
    upsert?: userCompanyFollowUpsertWithWhereUniqueWithoutUserInput | userCompanyFollowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userCompanyFollowCreateManyUserInputEnvelope
    set?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    disconnect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    delete?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    update?: userCompanyFollowUpdateWithWhereUniqueWithoutUserInput | userCompanyFollowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userCompanyFollowUpdateManyWithWhereWithoutUserInput | userCompanyFollowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
  }

  export type followersUpdateManyWithoutUserNestedInput = {
    create?: XOR<followersCreateWithoutUserInput, followersUncheckedCreateWithoutUserInput> | followersCreateWithoutUserInput[] | followersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followersCreateOrConnectWithoutUserInput | followersCreateOrConnectWithoutUserInput[]
    upsert?: followersUpsertWithWhereUniqueWithoutUserInput | followersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: followersCreateManyUserInputEnvelope
    set?: followersWhereUniqueInput | followersWhereUniqueInput[]
    disconnect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    delete?: followersWhereUniqueInput | followersWhereUniqueInput[]
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    update?: followersUpdateWithWhereUniqueWithoutUserInput | followersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: followersUpdateManyWithWhereWithoutUserInput | followersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: followersScalarWhereInput | followersScalarWhereInput[]
  }

  export type cvUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cvCreateWithoutUserInput, cvUncheckedCreateWithoutUserInput> | cvCreateWithoutUserInput[] | cvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cvCreateOrConnectWithoutUserInput | cvCreateOrConnectWithoutUserInput[]
    upsert?: cvUpsertWithWhereUniqueWithoutUserInput | cvUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cvCreateManyUserInputEnvelope
    set?: cvWhereUniqueInput | cvWhereUniqueInput[]
    disconnect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    delete?: cvWhereUniqueInput | cvWhereUniqueInput[]
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    update?: cvUpdateWithWhereUniqueWithoutUserInput | cvUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cvUpdateManyWithWhereWithoutUserInput | cvUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cvScalarWhereInput | cvScalarWhereInput[]
  }

  export type userCompanyFollowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userCompanyFollowCreateWithoutUserInput, userCompanyFollowUncheckedCreateWithoutUserInput> | userCompanyFollowCreateWithoutUserInput[] | userCompanyFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutUserInput | userCompanyFollowCreateOrConnectWithoutUserInput[]
    upsert?: userCompanyFollowUpsertWithWhereUniqueWithoutUserInput | userCompanyFollowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userCompanyFollowCreateManyUserInputEnvelope
    set?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    disconnect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    delete?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    update?: userCompanyFollowUpdateWithWhereUniqueWithoutUserInput | userCompanyFollowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userCompanyFollowUpdateManyWithWhereWithoutUserInput | userCompanyFollowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
  }

  export type followersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<followersCreateWithoutUserInput, followersUncheckedCreateWithoutUserInput> | followersCreateWithoutUserInput[] | followersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followersCreateOrConnectWithoutUserInput | followersCreateOrConnectWithoutUserInput[]
    upsert?: followersUpsertWithWhereUniqueWithoutUserInput | followersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: followersCreateManyUserInputEnvelope
    set?: followersWhereUniqueInput | followersWhereUniqueInput[]
    disconnect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    delete?: followersWhereUniqueInput | followersWhereUniqueInput[]
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    update?: followersUpdateWithWhereUniqueWithoutUserInput | followersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: followersUpdateManyWithWhereWithoutUserInput | followersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: followersScalarWhereInput | followersScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutFollowersInput = {
    create?: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowersInput
    connect?: userWhereUniqueInput
  }

  export type companyCreateNestedOneWithoutFollowersInput = {
    create?: XOR<companyCreateWithoutFollowersInput, companyUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: companyCreateOrConnectWithoutFollowersInput
    connect?: companyWhereUniqueInput
  }

  export type userCompanyFollowCreateNestedManyWithoutFollowersInput = {
    create?: XOR<userCompanyFollowCreateWithoutFollowersInput, userCompanyFollowUncheckedCreateWithoutFollowersInput> | userCompanyFollowCreateWithoutFollowersInput[] | userCompanyFollowUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutFollowersInput | userCompanyFollowCreateOrConnectWithoutFollowersInput[]
    createMany?: userCompanyFollowCreateManyFollowersInputEnvelope
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
  }

  export type userCompanyFollowUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<userCompanyFollowCreateWithoutFollowersInput, userCompanyFollowUncheckedCreateWithoutFollowersInput> | userCompanyFollowCreateWithoutFollowersInput[] | userCompanyFollowUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutFollowersInput | userCompanyFollowCreateOrConnectWithoutFollowersInput[]
    createMany?: userCompanyFollowCreateManyFollowersInputEnvelope
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
  }

  export type userUpdateOneWithoutFollowersNestedInput = {
    create?: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowersInput
    upsert?: userUpsertWithoutFollowersInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollowersInput, userUpdateWithoutFollowersInput>, userUncheckedUpdateWithoutFollowersInput>
  }

  export type companyUpdateOneWithoutFollowersNestedInput = {
    create?: XOR<companyCreateWithoutFollowersInput, companyUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: companyCreateOrConnectWithoutFollowersInput
    upsert?: companyUpsertWithoutFollowersInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutFollowersInput, companyUpdateWithoutFollowersInput>, companyUncheckedUpdateWithoutFollowersInput>
  }

  export type userCompanyFollowUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<userCompanyFollowCreateWithoutFollowersInput, userCompanyFollowUncheckedCreateWithoutFollowersInput> | userCompanyFollowCreateWithoutFollowersInput[] | userCompanyFollowUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutFollowersInput | userCompanyFollowCreateOrConnectWithoutFollowersInput[]
    upsert?: userCompanyFollowUpsertWithWhereUniqueWithoutFollowersInput | userCompanyFollowUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: userCompanyFollowCreateManyFollowersInputEnvelope
    set?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    disconnect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    delete?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    update?: userCompanyFollowUpdateWithWhereUniqueWithoutFollowersInput | userCompanyFollowUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: userCompanyFollowUpdateManyWithWhereWithoutFollowersInput | userCompanyFollowUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
  }

  export type userCompanyFollowUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<userCompanyFollowCreateWithoutFollowersInput, userCompanyFollowUncheckedCreateWithoutFollowersInput> | userCompanyFollowCreateWithoutFollowersInput[] | userCompanyFollowUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutFollowersInput | userCompanyFollowCreateOrConnectWithoutFollowersInput[]
    upsert?: userCompanyFollowUpsertWithWhereUniqueWithoutFollowersInput | userCompanyFollowUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: userCompanyFollowCreateManyFollowersInputEnvelope
    set?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    disconnect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    delete?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    update?: userCompanyFollowUpdateWithWhereUniqueWithoutFollowersInput | userCompanyFollowUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: userCompanyFollowUpdateManyWithWhereWithoutFollowersInput | userCompanyFollowUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
  }

  export type cityCreateNestedOneWithoutLocationsInput = {
    create?: XOR<cityCreateWithoutLocationsInput, cityUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: cityCreateOrConnectWithoutLocationsInput
    connect?: cityWhereUniqueInput
  }

  export type companyCreateNestedManyWithoutLocationInput = {
    create?: XOR<companyCreateWithoutLocationInput, companyUncheckedCreateWithoutLocationInput> | companyCreateWithoutLocationInput[] | companyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: companyCreateOrConnectWithoutLocationInput | companyCreateOrConnectWithoutLocationInput[]
    createMany?: companyCreateManyLocationInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type companyUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<companyCreateWithoutLocationInput, companyUncheckedCreateWithoutLocationInput> | companyCreateWithoutLocationInput[] | companyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: companyCreateOrConnectWithoutLocationInput | companyCreateOrConnectWithoutLocationInput[]
    createMany?: companyCreateManyLocationInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type cityUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<cityCreateWithoutLocationsInput, cityUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: cityCreateOrConnectWithoutLocationsInput
    upsert?: cityUpsertWithoutLocationsInput
    connect?: cityWhereUniqueInput
    update?: XOR<XOR<cityUpdateToOneWithWhereWithoutLocationsInput, cityUpdateWithoutLocationsInput>, cityUncheckedUpdateWithoutLocationsInput>
  }

  export type companyUpdateManyWithoutLocationNestedInput = {
    create?: XOR<companyCreateWithoutLocationInput, companyUncheckedCreateWithoutLocationInput> | companyCreateWithoutLocationInput[] | companyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: companyCreateOrConnectWithoutLocationInput | companyCreateOrConnectWithoutLocationInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutLocationInput | companyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: companyCreateManyLocationInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutLocationInput | companyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: companyUpdateManyWithWhereWithoutLocationInput | companyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type companyUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<companyCreateWithoutLocationInput, companyUncheckedCreateWithoutLocationInput> | companyCreateWithoutLocationInput[] | companyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: companyCreateOrConnectWithoutLocationInput | companyCreateOrConnectWithoutLocationInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutLocationInput | companyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: companyCreateManyLocationInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutLocationInput | companyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: companyUpdateManyWithWhereWithoutLocationInput | companyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type locationCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<locationCreateWithoutCompaniesInput, locationUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: locationCreateOrConnectWithoutCompaniesInput
    connect?: locationWhereUniqueInput
  }

  export type userCreateNestedManyWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput> | userCreateWithoutCompanyInput[] | userUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[]
    createMany?: userCreateManyCompanyInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type adCreateNestedManyWithoutCompanyInput = {
    create?: XOR<adCreateWithoutCompanyInput, adUncheckedCreateWithoutCompanyInput> | adCreateWithoutCompanyInput[] | adUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: adCreateOrConnectWithoutCompanyInput | adCreateOrConnectWithoutCompanyInput[]
    createMany?: adCreateManyCompanyInputEnvelope
    connect?: adWhereUniqueInput | adWhereUniqueInput[]
  }

  export type cvCreateNestedManyWithoutCompanyInput = {
    create?: XOR<cvCreateWithoutCompanyInput, cvUncheckedCreateWithoutCompanyInput> | cvCreateWithoutCompanyInput[] | cvUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: cvCreateOrConnectWithoutCompanyInput | cvCreateOrConnectWithoutCompanyInput[]
    createMany?: cvCreateManyCompanyInputEnvelope
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
  }

  export type followersCreateNestedManyWithoutCompanyInput = {
    create?: XOR<followersCreateWithoutCompanyInput, followersUncheckedCreateWithoutCompanyInput> | followersCreateWithoutCompanyInput[] | followersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: followersCreateOrConnectWithoutCompanyInput | followersCreateOrConnectWithoutCompanyInput[]
    createMany?: followersCreateManyCompanyInputEnvelope
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
  }

  export type userCompanyFollowCreateNestedManyWithoutCompanyInput = {
    create?: XOR<userCompanyFollowCreateWithoutCompanyInput, userCompanyFollowUncheckedCreateWithoutCompanyInput> | userCompanyFollowCreateWithoutCompanyInput[] | userCompanyFollowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutCompanyInput | userCompanyFollowCreateOrConnectWithoutCompanyInput[]
    createMany?: userCompanyFollowCreateManyCompanyInputEnvelope
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput> | userCreateWithoutCompanyInput[] | userUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[]
    createMany?: userCreateManyCompanyInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type adUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<adCreateWithoutCompanyInput, adUncheckedCreateWithoutCompanyInput> | adCreateWithoutCompanyInput[] | adUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: adCreateOrConnectWithoutCompanyInput | adCreateOrConnectWithoutCompanyInput[]
    createMany?: adCreateManyCompanyInputEnvelope
    connect?: adWhereUniqueInput | adWhereUniqueInput[]
  }

  export type cvUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<cvCreateWithoutCompanyInput, cvUncheckedCreateWithoutCompanyInput> | cvCreateWithoutCompanyInput[] | cvUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: cvCreateOrConnectWithoutCompanyInput | cvCreateOrConnectWithoutCompanyInput[]
    createMany?: cvCreateManyCompanyInputEnvelope
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
  }

  export type followersUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<followersCreateWithoutCompanyInput, followersUncheckedCreateWithoutCompanyInput> | followersCreateWithoutCompanyInput[] | followersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: followersCreateOrConnectWithoutCompanyInput | followersCreateOrConnectWithoutCompanyInput[]
    createMany?: followersCreateManyCompanyInputEnvelope
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
  }

  export type userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<userCompanyFollowCreateWithoutCompanyInput, userCompanyFollowUncheckedCreateWithoutCompanyInput> | userCompanyFollowCreateWithoutCompanyInput[] | userCompanyFollowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutCompanyInput | userCompanyFollowCreateOrConnectWithoutCompanyInput[]
    createMany?: userCompanyFollowCreateManyCompanyInputEnvelope
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type locationUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<locationCreateWithoutCompaniesInput, locationUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: locationCreateOrConnectWithoutCompaniesInput
    upsert?: locationUpsertWithoutCompaniesInput
    connect?: locationWhereUniqueInput
    update?: XOR<XOR<locationUpdateToOneWithWhereWithoutCompaniesInput, locationUpdateWithoutCompaniesInput>, locationUncheckedUpdateWithoutCompaniesInput>
  }

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput> | userCreateWithoutCompanyInput[] | userUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[]
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: userCreateManyCompanyInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type adUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<adCreateWithoutCompanyInput, adUncheckedCreateWithoutCompanyInput> | adCreateWithoutCompanyInput[] | adUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: adCreateOrConnectWithoutCompanyInput | adCreateOrConnectWithoutCompanyInput[]
    upsert?: adUpsertWithWhereUniqueWithoutCompanyInput | adUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: adCreateManyCompanyInputEnvelope
    set?: adWhereUniqueInput | adWhereUniqueInput[]
    disconnect?: adWhereUniqueInput | adWhereUniqueInput[]
    delete?: adWhereUniqueInput | adWhereUniqueInput[]
    connect?: adWhereUniqueInput | adWhereUniqueInput[]
    update?: adUpdateWithWhereUniqueWithoutCompanyInput | adUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: adUpdateManyWithWhereWithoutCompanyInput | adUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: adScalarWhereInput | adScalarWhereInput[]
  }

  export type cvUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<cvCreateWithoutCompanyInput, cvUncheckedCreateWithoutCompanyInput> | cvCreateWithoutCompanyInput[] | cvUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: cvCreateOrConnectWithoutCompanyInput | cvCreateOrConnectWithoutCompanyInput[]
    upsert?: cvUpsertWithWhereUniqueWithoutCompanyInput | cvUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: cvCreateManyCompanyInputEnvelope
    set?: cvWhereUniqueInput | cvWhereUniqueInput[]
    disconnect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    delete?: cvWhereUniqueInput | cvWhereUniqueInput[]
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    update?: cvUpdateWithWhereUniqueWithoutCompanyInput | cvUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: cvUpdateManyWithWhereWithoutCompanyInput | cvUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: cvScalarWhereInput | cvScalarWhereInput[]
  }

  export type followersUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<followersCreateWithoutCompanyInput, followersUncheckedCreateWithoutCompanyInput> | followersCreateWithoutCompanyInput[] | followersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: followersCreateOrConnectWithoutCompanyInput | followersCreateOrConnectWithoutCompanyInput[]
    upsert?: followersUpsertWithWhereUniqueWithoutCompanyInput | followersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: followersCreateManyCompanyInputEnvelope
    set?: followersWhereUniqueInput | followersWhereUniqueInput[]
    disconnect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    delete?: followersWhereUniqueInput | followersWhereUniqueInput[]
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    update?: followersUpdateWithWhereUniqueWithoutCompanyInput | followersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: followersUpdateManyWithWhereWithoutCompanyInput | followersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: followersScalarWhereInput | followersScalarWhereInput[]
  }

  export type userCompanyFollowUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<userCompanyFollowCreateWithoutCompanyInput, userCompanyFollowUncheckedCreateWithoutCompanyInput> | userCompanyFollowCreateWithoutCompanyInput[] | userCompanyFollowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutCompanyInput | userCompanyFollowCreateOrConnectWithoutCompanyInput[]
    upsert?: userCompanyFollowUpsertWithWhereUniqueWithoutCompanyInput | userCompanyFollowUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: userCompanyFollowCreateManyCompanyInputEnvelope
    set?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    disconnect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    delete?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    update?: userCompanyFollowUpdateWithWhereUniqueWithoutCompanyInput | userCompanyFollowUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: userCompanyFollowUpdateManyWithWhereWithoutCompanyInput | userCompanyFollowUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput> | userCreateWithoutCompanyInput[] | userUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[]
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: userCreateManyCompanyInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type adUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<adCreateWithoutCompanyInput, adUncheckedCreateWithoutCompanyInput> | adCreateWithoutCompanyInput[] | adUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: adCreateOrConnectWithoutCompanyInput | adCreateOrConnectWithoutCompanyInput[]
    upsert?: adUpsertWithWhereUniqueWithoutCompanyInput | adUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: adCreateManyCompanyInputEnvelope
    set?: adWhereUniqueInput | adWhereUniqueInput[]
    disconnect?: adWhereUniqueInput | adWhereUniqueInput[]
    delete?: adWhereUniqueInput | adWhereUniqueInput[]
    connect?: adWhereUniqueInput | adWhereUniqueInput[]
    update?: adUpdateWithWhereUniqueWithoutCompanyInput | adUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: adUpdateManyWithWhereWithoutCompanyInput | adUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: adScalarWhereInput | adScalarWhereInput[]
  }

  export type cvUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<cvCreateWithoutCompanyInput, cvUncheckedCreateWithoutCompanyInput> | cvCreateWithoutCompanyInput[] | cvUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: cvCreateOrConnectWithoutCompanyInput | cvCreateOrConnectWithoutCompanyInput[]
    upsert?: cvUpsertWithWhereUniqueWithoutCompanyInput | cvUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: cvCreateManyCompanyInputEnvelope
    set?: cvWhereUniqueInput | cvWhereUniqueInput[]
    disconnect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    delete?: cvWhereUniqueInput | cvWhereUniqueInput[]
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    update?: cvUpdateWithWhereUniqueWithoutCompanyInput | cvUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: cvUpdateManyWithWhereWithoutCompanyInput | cvUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: cvScalarWhereInput | cvScalarWhereInput[]
  }

  export type followersUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<followersCreateWithoutCompanyInput, followersUncheckedCreateWithoutCompanyInput> | followersCreateWithoutCompanyInput[] | followersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: followersCreateOrConnectWithoutCompanyInput | followersCreateOrConnectWithoutCompanyInput[]
    upsert?: followersUpsertWithWhereUniqueWithoutCompanyInput | followersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: followersCreateManyCompanyInputEnvelope
    set?: followersWhereUniqueInput | followersWhereUniqueInput[]
    disconnect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    delete?: followersWhereUniqueInput | followersWhereUniqueInput[]
    connect?: followersWhereUniqueInput | followersWhereUniqueInput[]
    update?: followersUpdateWithWhereUniqueWithoutCompanyInput | followersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: followersUpdateManyWithWhereWithoutCompanyInput | followersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: followersScalarWhereInput | followersScalarWhereInput[]
  }

  export type userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<userCompanyFollowCreateWithoutCompanyInput, userCompanyFollowUncheckedCreateWithoutCompanyInput> | userCompanyFollowCreateWithoutCompanyInput[] | userCompanyFollowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: userCompanyFollowCreateOrConnectWithoutCompanyInput | userCompanyFollowCreateOrConnectWithoutCompanyInput[]
    upsert?: userCompanyFollowUpsertWithWhereUniqueWithoutCompanyInput | userCompanyFollowUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: userCompanyFollowCreateManyCompanyInputEnvelope
    set?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    disconnect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    delete?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    connect?: userCompanyFollowWhereUniqueInput | userCompanyFollowWhereUniqueInput[]
    update?: userCompanyFollowUpdateWithWhereUniqueWithoutCompanyInput | userCompanyFollowUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: userCompanyFollowUpdateManyWithWhereWithoutCompanyInput | userCompanyFollowUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: userCreateOrConnectWithoutCompaniesInput
    connect?: userWhereUniqueInput
  }

  export type companyCreateNestedOneWithoutUserCompanyFollowInput = {
    create?: XOR<companyCreateWithoutUserCompanyFollowInput, companyUncheckedCreateWithoutUserCompanyFollowInput>
    connectOrCreate?: companyCreateOrConnectWithoutUserCompanyFollowInput
    connect?: companyWhereUniqueInput
  }

  export type followersCreateNestedOneWithoutUserCompanyFollowInput = {
    create?: XOR<followersCreateWithoutUserCompanyFollowInput, followersUncheckedCreateWithoutUserCompanyFollowInput>
    connectOrCreate?: followersCreateOrConnectWithoutUserCompanyFollowInput
    connect?: followersWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: userCreateOrConnectWithoutCompaniesInput
    upsert?: userUpsertWithoutCompaniesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCompaniesInput, userUpdateWithoutCompaniesInput>, userUncheckedUpdateWithoutCompaniesInput>
  }

  export type companyUpdateOneRequiredWithoutUserCompanyFollowNestedInput = {
    create?: XOR<companyCreateWithoutUserCompanyFollowInput, companyUncheckedCreateWithoutUserCompanyFollowInput>
    connectOrCreate?: companyCreateOrConnectWithoutUserCompanyFollowInput
    upsert?: companyUpsertWithoutUserCompanyFollowInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutUserCompanyFollowInput, companyUpdateWithoutUserCompanyFollowInput>, companyUncheckedUpdateWithoutUserCompanyFollowInput>
  }

  export type followersUpdateOneWithoutUserCompanyFollowNestedInput = {
    create?: XOR<followersCreateWithoutUserCompanyFollowInput, followersUncheckedCreateWithoutUserCompanyFollowInput>
    connectOrCreate?: followersCreateOrConnectWithoutUserCompanyFollowInput
    upsert?: followersUpsertWithoutUserCompanyFollowInput
    disconnect?: followersWhereInput | boolean
    delete?: followersWhereInput | boolean
    connect?: followersWhereUniqueInput
    update?: XOR<XOR<followersUpdateToOneWithWhereWithoutUserCompanyFollowInput, followersUpdateWithoutUserCompanyFollowInput>, followersUncheckedUpdateWithoutUserCompanyFollowInput>
  }

  export type facilitiesAdvantageCreateNestedManyWithoutAdvantageInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdvantageInput, facilitiesAdvantageUncheckedCreateWithoutAdvantageInput> | facilitiesAdvantageCreateWithoutAdvantageInput[] | facilitiesAdvantageUncheckedCreateWithoutAdvantageInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdvantageInput | facilitiesAdvantageCreateOrConnectWithoutAdvantageInput[]
    createMany?: facilitiesAdvantageCreateManyAdvantageInputEnvelope
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
  }

  export type facilitiesAdvantageUncheckedCreateNestedManyWithoutAdvantageInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdvantageInput, facilitiesAdvantageUncheckedCreateWithoutAdvantageInput> | facilitiesAdvantageCreateWithoutAdvantageInput[] | facilitiesAdvantageUncheckedCreateWithoutAdvantageInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdvantageInput | facilitiesAdvantageCreateOrConnectWithoutAdvantageInput[]
    createMany?: facilitiesAdvantageCreateManyAdvantageInputEnvelope
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
  }

  export type facilitiesAdvantageUpdateManyWithoutAdvantageNestedInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdvantageInput, facilitiesAdvantageUncheckedCreateWithoutAdvantageInput> | facilitiesAdvantageCreateWithoutAdvantageInput[] | facilitiesAdvantageUncheckedCreateWithoutAdvantageInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdvantageInput | facilitiesAdvantageCreateOrConnectWithoutAdvantageInput[]
    upsert?: facilitiesAdvantageUpsertWithWhereUniqueWithoutAdvantageInput | facilitiesAdvantageUpsertWithWhereUniqueWithoutAdvantageInput[]
    createMany?: facilitiesAdvantageCreateManyAdvantageInputEnvelope
    set?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    disconnect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    delete?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    update?: facilitiesAdvantageUpdateWithWhereUniqueWithoutAdvantageInput | facilitiesAdvantageUpdateWithWhereUniqueWithoutAdvantageInput[]
    updateMany?: facilitiesAdvantageUpdateManyWithWhereWithoutAdvantageInput | facilitiesAdvantageUpdateManyWithWhereWithoutAdvantageInput[]
    deleteMany?: facilitiesAdvantageScalarWhereInput | facilitiesAdvantageScalarWhereInput[]
  }

  export type facilitiesAdvantageUncheckedUpdateManyWithoutAdvantageNestedInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdvantageInput, facilitiesAdvantageUncheckedCreateWithoutAdvantageInput> | facilitiesAdvantageCreateWithoutAdvantageInput[] | facilitiesAdvantageUncheckedCreateWithoutAdvantageInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdvantageInput | facilitiesAdvantageCreateOrConnectWithoutAdvantageInput[]
    upsert?: facilitiesAdvantageUpsertWithWhereUniqueWithoutAdvantageInput | facilitiesAdvantageUpsertWithWhereUniqueWithoutAdvantageInput[]
    createMany?: facilitiesAdvantageCreateManyAdvantageInputEnvelope
    set?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    disconnect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    delete?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    update?: facilitiesAdvantageUpdateWithWhereUniqueWithoutAdvantageInput | facilitiesAdvantageUpdateWithWhereUniqueWithoutAdvantageInput[]
    updateMany?: facilitiesAdvantageUpdateManyWithWhereWithoutAdvantageInput | facilitiesAdvantageUpdateManyWithWhereWithoutAdvantageInput[]
    deleteMany?: facilitiesAdvantageScalarWhereInput | facilitiesAdvantageScalarWhereInput[]
  }

  export type adsCategory_collectionCreateNestedManyWithoutAdInput = {
    create?: XOR<adsCategory_collectionCreateWithoutAdInput, adsCategory_collectionUncheckedCreateWithoutAdInput> | adsCategory_collectionCreateWithoutAdInput[] | adsCategory_collectionUncheckedCreateWithoutAdInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutAdInput | adsCategory_collectionCreateOrConnectWithoutAdInput[]
    createMany?: adsCategory_collectionCreateManyAdInputEnvelope
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
  }

  export type facilitiesAdvantageCreateNestedManyWithoutAdInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdInput, facilitiesAdvantageUncheckedCreateWithoutAdInput> | facilitiesAdvantageCreateWithoutAdInput[] | facilitiesAdvantageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdInput | facilitiesAdvantageCreateOrConnectWithoutAdInput[]
    createMany?: facilitiesAdvantageCreateManyAdInputEnvelope
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutAdsInput = {
    create?: XOR<companyCreateWithoutAdsInput, companyUncheckedCreateWithoutAdsInput>
    connectOrCreate?: companyCreateOrConnectWithoutAdsInput
    connect?: companyWhereUniqueInput
  }

  export type cvAdCreateNestedManyWithoutAdInput = {
    create?: XOR<cvAdCreateWithoutAdInput, cvAdUncheckedCreateWithoutAdInput> | cvAdCreateWithoutAdInput[] | cvAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutAdInput | cvAdCreateOrConnectWithoutAdInput[]
    createMany?: cvAdCreateManyAdInputEnvelope
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
  }

  export type cvCreateNestedManyWithoutAdInput = {
    create?: XOR<cvCreateWithoutAdInput, cvUncheckedCreateWithoutAdInput> | cvCreateWithoutAdInput[] | cvUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvCreateOrConnectWithoutAdInput | cvCreateOrConnectWithoutAdInput[]
    createMany?: cvCreateManyAdInputEnvelope
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
  }

  export type adsCategory_collectionUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<adsCategory_collectionCreateWithoutAdInput, adsCategory_collectionUncheckedCreateWithoutAdInput> | adsCategory_collectionCreateWithoutAdInput[] | adsCategory_collectionUncheckedCreateWithoutAdInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutAdInput | adsCategory_collectionCreateOrConnectWithoutAdInput[]
    createMany?: adsCategory_collectionCreateManyAdInputEnvelope
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
  }

  export type facilitiesAdvantageUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdInput, facilitiesAdvantageUncheckedCreateWithoutAdInput> | facilitiesAdvantageCreateWithoutAdInput[] | facilitiesAdvantageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdInput | facilitiesAdvantageCreateOrConnectWithoutAdInput[]
    createMany?: facilitiesAdvantageCreateManyAdInputEnvelope
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
  }

  export type cvAdUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<cvAdCreateWithoutAdInput, cvAdUncheckedCreateWithoutAdInput> | cvAdCreateWithoutAdInput[] | cvAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutAdInput | cvAdCreateOrConnectWithoutAdInput[]
    createMany?: cvAdCreateManyAdInputEnvelope
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
  }

  export type cvUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<cvCreateWithoutAdInput, cvUncheckedCreateWithoutAdInput> | cvCreateWithoutAdInput[] | cvUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvCreateOrConnectWithoutAdInput | cvCreateOrConnectWithoutAdInput[]
    createMany?: cvCreateManyAdInputEnvelope
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
  }

  export type EnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender
  }

  export type Enumseniority_levelFieldUpdateOperationsInput = {
    set?: $Enums.seniority_level
  }

  export type Enumcooperation_typeFieldUpdateOperationsInput = {
    set?: $Enums.cooperation_type
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type adsCategory_collectionUpdateManyWithoutAdNestedInput = {
    create?: XOR<adsCategory_collectionCreateWithoutAdInput, adsCategory_collectionUncheckedCreateWithoutAdInput> | adsCategory_collectionCreateWithoutAdInput[] | adsCategory_collectionUncheckedCreateWithoutAdInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutAdInput | adsCategory_collectionCreateOrConnectWithoutAdInput[]
    upsert?: adsCategory_collectionUpsertWithWhereUniqueWithoutAdInput | adsCategory_collectionUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: adsCategory_collectionCreateManyAdInputEnvelope
    set?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    disconnect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    delete?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    update?: adsCategory_collectionUpdateWithWhereUniqueWithoutAdInput | adsCategory_collectionUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: adsCategory_collectionUpdateManyWithWhereWithoutAdInput | adsCategory_collectionUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: adsCategory_collectionScalarWhereInput | adsCategory_collectionScalarWhereInput[]
  }

  export type facilitiesAdvantageUpdateManyWithoutAdNestedInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdInput, facilitiesAdvantageUncheckedCreateWithoutAdInput> | facilitiesAdvantageCreateWithoutAdInput[] | facilitiesAdvantageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdInput | facilitiesAdvantageCreateOrConnectWithoutAdInput[]
    upsert?: facilitiesAdvantageUpsertWithWhereUniqueWithoutAdInput | facilitiesAdvantageUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: facilitiesAdvantageCreateManyAdInputEnvelope
    set?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    disconnect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    delete?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    update?: facilitiesAdvantageUpdateWithWhereUniqueWithoutAdInput | facilitiesAdvantageUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: facilitiesAdvantageUpdateManyWithWhereWithoutAdInput | facilitiesAdvantageUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: facilitiesAdvantageScalarWhereInput | facilitiesAdvantageScalarWhereInput[]
  }

  export type companyUpdateOneRequiredWithoutAdsNestedInput = {
    create?: XOR<companyCreateWithoutAdsInput, companyUncheckedCreateWithoutAdsInput>
    connectOrCreate?: companyCreateOrConnectWithoutAdsInput
    upsert?: companyUpsertWithoutAdsInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutAdsInput, companyUpdateWithoutAdsInput>, companyUncheckedUpdateWithoutAdsInput>
  }

  export type cvAdUpdateManyWithoutAdNestedInput = {
    create?: XOR<cvAdCreateWithoutAdInput, cvAdUncheckedCreateWithoutAdInput> | cvAdCreateWithoutAdInput[] | cvAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutAdInput | cvAdCreateOrConnectWithoutAdInput[]
    upsert?: cvAdUpsertWithWhereUniqueWithoutAdInput | cvAdUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: cvAdCreateManyAdInputEnvelope
    set?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    disconnect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    delete?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    update?: cvAdUpdateWithWhereUniqueWithoutAdInput | cvAdUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: cvAdUpdateManyWithWhereWithoutAdInput | cvAdUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: cvAdScalarWhereInput | cvAdScalarWhereInput[]
  }

  export type cvUpdateManyWithoutAdNestedInput = {
    create?: XOR<cvCreateWithoutAdInput, cvUncheckedCreateWithoutAdInput> | cvCreateWithoutAdInput[] | cvUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvCreateOrConnectWithoutAdInput | cvCreateOrConnectWithoutAdInput[]
    upsert?: cvUpsertWithWhereUniqueWithoutAdInput | cvUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: cvCreateManyAdInputEnvelope
    set?: cvWhereUniqueInput | cvWhereUniqueInput[]
    disconnect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    delete?: cvWhereUniqueInput | cvWhereUniqueInput[]
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    update?: cvUpdateWithWhereUniqueWithoutAdInput | cvUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: cvUpdateManyWithWhereWithoutAdInput | cvUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: cvScalarWhereInput | cvScalarWhereInput[]
  }

  export type adsCategory_collectionUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<adsCategory_collectionCreateWithoutAdInput, adsCategory_collectionUncheckedCreateWithoutAdInput> | adsCategory_collectionCreateWithoutAdInput[] | adsCategory_collectionUncheckedCreateWithoutAdInput[]
    connectOrCreate?: adsCategory_collectionCreateOrConnectWithoutAdInput | adsCategory_collectionCreateOrConnectWithoutAdInput[]
    upsert?: adsCategory_collectionUpsertWithWhereUniqueWithoutAdInput | adsCategory_collectionUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: adsCategory_collectionCreateManyAdInputEnvelope
    set?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    disconnect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    delete?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    connect?: adsCategory_collectionWhereUniqueInput | adsCategory_collectionWhereUniqueInput[]
    update?: adsCategory_collectionUpdateWithWhereUniqueWithoutAdInput | adsCategory_collectionUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: adsCategory_collectionUpdateManyWithWhereWithoutAdInput | adsCategory_collectionUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: adsCategory_collectionScalarWhereInput | adsCategory_collectionScalarWhereInput[]
  }

  export type facilitiesAdvantageUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<facilitiesAdvantageCreateWithoutAdInput, facilitiesAdvantageUncheckedCreateWithoutAdInput> | facilitiesAdvantageCreateWithoutAdInput[] | facilitiesAdvantageUncheckedCreateWithoutAdInput[]
    connectOrCreate?: facilitiesAdvantageCreateOrConnectWithoutAdInput | facilitiesAdvantageCreateOrConnectWithoutAdInput[]
    upsert?: facilitiesAdvantageUpsertWithWhereUniqueWithoutAdInput | facilitiesAdvantageUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: facilitiesAdvantageCreateManyAdInputEnvelope
    set?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    disconnect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    delete?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    connect?: facilitiesAdvantageWhereUniqueInput | facilitiesAdvantageWhereUniqueInput[]
    update?: facilitiesAdvantageUpdateWithWhereUniqueWithoutAdInput | facilitiesAdvantageUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: facilitiesAdvantageUpdateManyWithWhereWithoutAdInput | facilitiesAdvantageUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: facilitiesAdvantageScalarWhereInput | facilitiesAdvantageScalarWhereInput[]
  }

  export type cvAdUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<cvAdCreateWithoutAdInput, cvAdUncheckedCreateWithoutAdInput> | cvAdCreateWithoutAdInput[] | cvAdUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutAdInput | cvAdCreateOrConnectWithoutAdInput[]
    upsert?: cvAdUpsertWithWhereUniqueWithoutAdInput | cvAdUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: cvAdCreateManyAdInputEnvelope
    set?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    disconnect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    delete?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    update?: cvAdUpdateWithWhereUniqueWithoutAdInput | cvAdUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: cvAdUpdateManyWithWhereWithoutAdInput | cvAdUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: cvAdScalarWhereInput | cvAdScalarWhereInput[]
  }

  export type cvUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<cvCreateWithoutAdInput, cvUncheckedCreateWithoutAdInput> | cvCreateWithoutAdInput[] | cvUncheckedCreateWithoutAdInput[]
    connectOrCreate?: cvCreateOrConnectWithoutAdInput | cvCreateOrConnectWithoutAdInput[]
    upsert?: cvUpsertWithWhereUniqueWithoutAdInput | cvUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: cvCreateManyAdInputEnvelope
    set?: cvWhereUniqueInput | cvWhereUniqueInput[]
    disconnect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    delete?: cvWhereUniqueInput | cvWhereUniqueInput[]
    connect?: cvWhereUniqueInput | cvWhereUniqueInput[]
    update?: cvUpdateWithWhereUniqueWithoutAdInput | cvUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: cvUpdateManyWithWhereWithoutAdInput | cvUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: cvScalarWhereInput | cvScalarWhereInput[]
  }

  export type adCreateNestedOneWithoutAdsCategory_collectionsInput = {
    create?: XOR<adCreateWithoutAdsCategory_collectionsInput, adUncheckedCreateWithoutAdsCategory_collectionsInput>
    connectOrCreate?: adCreateOrConnectWithoutAdsCategory_collectionsInput
    connect?: adWhereUniqueInput
  }

  export type category_collectionCreateNestedOneWithoutAdsCategory_collectionsInput = {
    create?: XOR<category_collectionCreateWithoutAdsCategory_collectionsInput, category_collectionUncheckedCreateWithoutAdsCategory_collectionsInput>
    connectOrCreate?: category_collectionCreateOrConnectWithoutAdsCategory_collectionsInput
    connect?: category_collectionWhereUniqueInput
  }

  export type adUpdateOneRequiredWithoutAdsCategory_collectionsNestedInput = {
    create?: XOR<adCreateWithoutAdsCategory_collectionsInput, adUncheckedCreateWithoutAdsCategory_collectionsInput>
    connectOrCreate?: adCreateOrConnectWithoutAdsCategory_collectionsInput
    upsert?: adUpsertWithoutAdsCategory_collectionsInput
    connect?: adWhereUniqueInput
    update?: XOR<XOR<adUpdateToOneWithWhereWithoutAdsCategory_collectionsInput, adUpdateWithoutAdsCategory_collectionsInput>, adUncheckedUpdateWithoutAdsCategory_collectionsInput>
  }

  export type category_collectionUpdateOneRequiredWithoutAdsCategory_collectionsNestedInput = {
    create?: XOR<category_collectionCreateWithoutAdsCategory_collectionsInput, category_collectionUncheckedCreateWithoutAdsCategory_collectionsInput>
    connectOrCreate?: category_collectionCreateOrConnectWithoutAdsCategory_collectionsInput
    upsert?: category_collectionUpsertWithoutAdsCategory_collectionsInput
    connect?: category_collectionWhereUniqueInput
    update?: XOR<XOR<category_collectionUpdateToOneWithWhereWithoutAdsCategory_collectionsInput, category_collectionUpdateWithoutAdsCategory_collectionsInput>, category_collectionUncheckedUpdateWithoutAdsCategory_collectionsInput>
  }

  export type adCreateNestedOneWithoutFacilitiesAdvantageInput = {
    create?: XOR<adCreateWithoutFacilitiesAdvantageInput, adUncheckedCreateWithoutFacilitiesAdvantageInput>
    connectOrCreate?: adCreateOrConnectWithoutFacilitiesAdvantageInput
    connect?: adWhereUniqueInput
  }

  export type advantageCreateNestedOneWithoutFacilitiesAdvantageInput = {
    create?: XOR<advantageCreateWithoutFacilitiesAdvantageInput, advantageUncheckedCreateWithoutFacilitiesAdvantageInput>
    connectOrCreate?: advantageCreateOrConnectWithoutFacilitiesAdvantageInput
    connect?: advantageWhereUniqueInput
  }

  export type adUpdateOneRequiredWithoutFacilitiesAdvantageNestedInput = {
    create?: XOR<adCreateWithoutFacilitiesAdvantageInput, adUncheckedCreateWithoutFacilitiesAdvantageInput>
    connectOrCreate?: adCreateOrConnectWithoutFacilitiesAdvantageInput
    upsert?: adUpsertWithoutFacilitiesAdvantageInput
    connect?: adWhereUniqueInput
    update?: XOR<XOR<adUpdateToOneWithWhereWithoutFacilitiesAdvantageInput, adUpdateWithoutFacilitiesAdvantageInput>, adUncheckedUpdateWithoutFacilitiesAdvantageInput>
  }

  export type advantageUpdateOneRequiredWithoutFacilitiesAdvantageNestedInput = {
    create?: XOR<advantageCreateWithoutFacilitiesAdvantageInput, advantageUncheckedCreateWithoutFacilitiesAdvantageInput>
    connectOrCreate?: advantageCreateOrConnectWithoutFacilitiesAdvantageInput
    upsert?: advantageUpsertWithoutFacilitiesAdvantageInput
    connect?: advantageWhereUniqueInput
    update?: XOR<XOR<advantageUpdateToOneWithWhereWithoutFacilitiesAdvantageInput, advantageUpdateWithoutFacilitiesAdvantageInput>, advantageUncheckedUpdateWithoutFacilitiesAdvantageInput>
  }

  export type userCreateNestedOneWithoutCvInput = {
    create?: XOR<userCreateWithoutCvInput, userUncheckedCreateWithoutCvInput>
    connectOrCreate?: userCreateOrConnectWithoutCvInput
    connect?: userWhereUniqueInput
  }

  export type adCreateNestedOneWithoutCvInput = {
    create?: XOR<adCreateWithoutCvInput, adUncheckedCreateWithoutCvInput>
    connectOrCreate?: adCreateOrConnectWithoutCvInput
    connect?: adWhereUniqueInput
  }

  export type companyCreateNestedOneWithoutCvInput = {
    create?: XOR<companyCreateWithoutCvInput, companyUncheckedCreateWithoutCvInput>
    connectOrCreate?: companyCreateOrConnectWithoutCvInput
    connect?: companyWhereUniqueInput
  }

  export type cvAdCreateNestedManyWithoutCvInput = {
    create?: XOR<cvAdCreateWithoutCvInput, cvAdUncheckedCreateWithoutCvInput> | cvAdCreateWithoutCvInput[] | cvAdUncheckedCreateWithoutCvInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutCvInput | cvAdCreateOrConnectWithoutCvInput[]
    createMany?: cvAdCreateManyCvInputEnvelope
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
  }

  export type cvAdUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<cvAdCreateWithoutCvInput, cvAdUncheckedCreateWithoutCvInput> | cvAdCreateWithoutCvInput[] | cvAdUncheckedCreateWithoutCvInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutCvInput | cvAdCreateOrConnectWithoutCvInput[]
    createMany?: cvAdCreateManyCvInputEnvelope
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type userUpdateOneWithoutCvNestedInput = {
    create?: XOR<userCreateWithoutCvInput, userUncheckedCreateWithoutCvInput>
    connectOrCreate?: userCreateOrConnectWithoutCvInput
    upsert?: userUpsertWithoutCvInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCvInput, userUpdateWithoutCvInput>, userUncheckedUpdateWithoutCvInput>
  }

  export type adUpdateOneWithoutCvNestedInput = {
    create?: XOR<adCreateWithoutCvInput, adUncheckedCreateWithoutCvInput>
    connectOrCreate?: adCreateOrConnectWithoutCvInput
    upsert?: adUpsertWithoutCvInput
    disconnect?: adWhereInput | boolean
    delete?: adWhereInput | boolean
    connect?: adWhereUniqueInput
    update?: XOR<XOR<adUpdateToOneWithWhereWithoutCvInput, adUpdateWithoutCvInput>, adUncheckedUpdateWithoutCvInput>
  }

  export type companyUpdateOneWithoutCvNestedInput = {
    create?: XOR<companyCreateWithoutCvInput, companyUncheckedCreateWithoutCvInput>
    connectOrCreate?: companyCreateOrConnectWithoutCvInput
    upsert?: companyUpsertWithoutCvInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutCvInput, companyUpdateWithoutCvInput>, companyUncheckedUpdateWithoutCvInput>
  }

  export type cvAdUpdateManyWithoutCvNestedInput = {
    create?: XOR<cvAdCreateWithoutCvInput, cvAdUncheckedCreateWithoutCvInput> | cvAdCreateWithoutCvInput[] | cvAdUncheckedCreateWithoutCvInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutCvInput | cvAdCreateOrConnectWithoutCvInput[]
    upsert?: cvAdUpsertWithWhereUniqueWithoutCvInput | cvAdUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: cvAdCreateManyCvInputEnvelope
    set?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    disconnect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    delete?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    update?: cvAdUpdateWithWhereUniqueWithoutCvInput | cvAdUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: cvAdUpdateManyWithWhereWithoutCvInput | cvAdUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: cvAdScalarWhereInput | cvAdScalarWhereInput[]
  }

  export type cvAdUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<cvAdCreateWithoutCvInput, cvAdUncheckedCreateWithoutCvInput> | cvAdCreateWithoutCvInput[] | cvAdUncheckedCreateWithoutCvInput[]
    connectOrCreate?: cvAdCreateOrConnectWithoutCvInput | cvAdCreateOrConnectWithoutCvInput[]
    upsert?: cvAdUpsertWithWhereUniqueWithoutCvInput | cvAdUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: cvAdCreateManyCvInputEnvelope
    set?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    disconnect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    delete?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    connect?: cvAdWhereUniqueInput | cvAdWhereUniqueInput[]
    update?: cvAdUpdateWithWhereUniqueWithoutCvInput | cvAdUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: cvAdUpdateManyWithWhereWithoutCvInput | cvAdUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: cvAdScalarWhereInput | cvAdScalarWhereInput[]
  }

  export type cvCreateNestedOneWithoutCvAdInput = {
    create?: XOR<cvCreateWithoutCvAdInput, cvUncheckedCreateWithoutCvAdInput>
    connectOrCreate?: cvCreateOrConnectWithoutCvAdInput
    connect?: cvWhereUniqueInput
  }

  export type adCreateNestedOneWithoutCvAdInput = {
    create?: XOR<adCreateWithoutCvAdInput, adUncheckedCreateWithoutCvAdInput>
    connectOrCreate?: adCreateOrConnectWithoutCvAdInput
    connect?: adWhereUniqueInput
  }

  export type cvUpdateOneRequiredWithoutCvAdNestedInput = {
    create?: XOR<cvCreateWithoutCvAdInput, cvUncheckedCreateWithoutCvAdInput>
    connectOrCreate?: cvCreateOrConnectWithoutCvAdInput
    upsert?: cvUpsertWithoutCvAdInput
    connect?: cvWhereUniqueInput
    update?: XOR<XOR<cvUpdateToOneWithWhereWithoutCvAdInput, cvUpdateWithoutCvAdInput>, cvUncheckedUpdateWithoutCvAdInput>
  }

  export type adUpdateOneRequiredWithoutCvAdNestedInput = {
    create?: XOR<adCreateWithoutCvAdInput, adUncheckedCreateWithoutCvAdInput>
    connectOrCreate?: adCreateOrConnectWithoutCvAdInput
    upsert?: adUpsertWithoutCvAdInput
    connect?: adWhereUniqueInput
    update?: XOR<XOR<adUpdateToOneWithWhereWithoutCvAdInput, adUpdateWithoutCvAdInput>, adUncheckedUpdateWithoutCvAdInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
  }

  export type NestedEnumseniority_levelFilter<$PrismaModel = never> = {
    equals?: $Enums.seniority_level | Enumseniority_levelFieldRefInput<$PrismaModel>
    in?: $Enums.seniority_level[]
    notIn?: $Enums.seniority_level[]
    not?: NestedEnumseniority_levelFilter<$PrismaModel> | $Enums.seniority_level
  }

  export type NestedEnumcooperation_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.cooperation_type | Enumcooperation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.cooperation_type[]
    notIn?: $Enums.cooperation_type[]
    not?: NestedEnumcooperation_typeFilter<$PrismaModel> | $Enums.cooperation_type
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
  }

  export type NestedEnumseniority_levelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seniority_level | Enumseniority_levelFieldRefInput<$PrismaModel>
    in?: $Enums.seniority_level[]
    notIn?: $Enums.seniority_level[]
    not?: NestedEnumseniority_levelWithAggregatesFilter<$PrismaModel> | $Enums.seniority_level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumseniority_levelFilter<$PrismaModel>
    _max?: NestedEnumseniority_levelFilter<$PrismaModel>
  }

  export type NestedEnumcooperation_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cooperation_type | Enumcooperation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.cooperation_type[]
    notIn?: $Enums.cooperation_type[]
    not?: NestedEnumcooperation_typeWithAggregatesFilter<$PrismaModel> | $Enums.cooperation_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcooperation_typeFilter<$PrismaModel>
    _max?: NestedEnumcooperation_typeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type categoryCreateWithoutCategory_collectionsInput = {
    id?: string
    name: string
    link: string
  }

  export type categoryUncheckedCreateWithoutCategory_collectionsInput = {
    id?: string
    name: string
    link: string
  }

  export type categoryCreateOrConnectWithoutCategory_collectionsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutCategory_collectionsInput, categoryUncheckedCreateWithoutCategory_collectionsInput>
  }

  export type adsCategory_collectionCreateWithoutCategory_collectionsInput = {
    ad: adCreateNestedOneWithoutAdsCategory_collectionsInput
  }

  export type adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput = {
    ad_id: string
  }

  export type adsCategory_collectionCreateOrConnectWithoutCategory_collectionsInput = {
    where: adsCategory_collectionWhereUniqueInput
    create: XOR<adsCategory_collectionCreateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput>
  }

  export type adsCategory_collectionCreateManyCategory_collectionsInputEnvelope = {
    data: adsCategory_collectionCreateManyCategory_collectionsInput | adsCategory_collectionCreateManyCategory_collectionsInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutCategory_collectionsInput = {
    update: XOR<categoryUpdateWithoutCategory_collectionsInput, categoryUncheckedUpdateWithoutCategory_collectionsInput>
    create: XOR<categoryCreateWithoutCategory_collectionsInput, categoryUncheckedCreateWithoutCategory_collectionsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutCategory_collectionsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutCategory_collectionsInput, categoryUncheckedUpdateWithoutCategory_collectionsInput>
  }

  export type categoryUpdateWithoutCategory_collectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutCategory_collectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type adsCategory_collectionUpsertWithWhereUniqueWithoutCategory_collectionsInput = {
    where: adsCategory_collectionWhereUniqueInput
    update: XOR<adsCategory_collectionUpdateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedUpdateWithoutCategory_collectionsInput>
    create: XOR<adsCategory_collectionCreateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedCreateWithoutCategory_collectionsInput>
  }

  export type adsCategory_collectionUpdateWithWhereUniqueWithoutCategory_collectionsInput = {
    where: adsCategory_collectionWhereUniqueInput
    data: XOR<adsCategory_collectionUpdateWithoutCategory_collectionsInput, adsCategory_collectionUncheckedUpdateWithoutCategory_collectionsInput>
  }

  export type adsCategory_collectionUpdateManyWithWhereWithoutCategory_collectionsInput = {
    where: adsCategory_collectionScalarWhereInput
    data: XOR<adsCategory_collectionUpdateManyMutationInput, adsCategory_collectionUncheckedUpdateManyWithoutCategory_collectionsInput>
  }

  export type adsCategory_collectionScalarWhereInput = {
    AND?: adsCategory_collectionScalarWhereInput | adsCategory_collectionScalarWhereInput[]
    OR?: adsCategory_collectionScalarWhereInput[]
    NOT?: adsCategory_collectionScalarWhereInput | adsCategory_collectionScalarWhereInput[]
    ad_id?: StringFilter<"adsCategory_collection"> | string
    category_collection_id?: StringFilter<"adsCategory_collection"> | string
  }

  export type category_collectionCreateWithoutCategoriesInput = {
    id?: string
    name?: string | null
    link?: string | null
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutCategory_collectionsInput
  }

  export type category_collectionUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name?: string | null
    link?: string | null
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutCategory_collectionsInput
  }

  export type category_collectionCreateOrConnectWithoutCategoriesInput = {
    where: category_collectionWhereUniqueInput
    create: XOR<category_collectionCreateWithoutCategoriesInput, category_collectionUncheckedCreateWithoutCategoriesInput>
  }

  export type category_collectionCreateManyCategoriesInputEnvelope = {
    data: category_collectionCreateManyCategoriesInput | category_collectionCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type category_collectionUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: category_collectionWhereUniqueInput
    update: XOR<category_collectionUpdateWithoutCategoriesInput, category_collectionUncheckedUpdateWithoutCategoriesInput>
    create: XOR<category_collectionCreateWithoutCategoriesInput, category_collectionUncheckedCreateWithoutCategoriesInput>
  }

  export type category_collectionUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: category_collectionWhereUniqueInput
    data: XOR<category_collectionUpdateWithoutCategoriesInput, category_collectionUncheckedUpdateWithoutCategoriesInput>
  }

  export type category_collectionUpdateManyWithWhereWithoutCategoriesInput = {
    where: category_collectionScalarWhereInput
    data: XOR<category_collectionUpdateManyMutationInput, category_collectionUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type category_collectionScalarWhereInput = {
    AND?: category_collectionScalarWhereInput | category_collectionScalarWhereInput[]
    OR?: category_collectionScalarWhereInput[]
    NOT?: category_collectionScalarWhereInput | category_collectionScalarWhereInput[]
    id?: StringFilter<"category_collection"> | string
    category_id?: StringNullableFilter<"category_collection"> | string | null
    name?: StringNullableFilter<"category_collection"> | string | null
    link?: StringNullableFilter<"category_collection"> | string | null
  }

  export type cityCreateWithoutProvinceInput = {
    id?: string
    name?: string | null
    locations?: locationCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateWithoutProvinceInput = {
    id?: string
    name?: string | null
    locations?: locationUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityCreateOrConnectWithoutProvinceInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput>
  }

  export type cityCreateManyProvinceInputEnvelope = {
    data: cityCreateManyProvinceInput | cityCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type cityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: cityWhereUniqueInput
    update: XOR<cityUpdateWithoutProvinceInput, cityUncheckedUpdateWithoutProvinceInput>
    create: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput>
  }

  export type cityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: cityWhereUniqueInput
    data: XOR<cityUpdateWithoutProvinceInput, cityUncheckedUpdateWithoutProvinceInput>
  }

  export type cityUpdateManyWithWhereWithoutProvinceInput = {
    where: cityScalarWhereInput
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type cityScalarWhereInput = {
    AND?: cityScalarWhereInput | cityScalarWhereInput[]
    OR?: cityScalarWhereInput[]
    NOT?: cityScalarWhereInput | cityScalarWhereInput[]
    id?: StringFilter<"city"> | string
    province_id?: StringNullableFilter<"city"> | string | null
    name?: StringNullableFilter<"city"> | string | null
  }

  export type provinceCreateWithoutCitiesInput = {
    id?: string
    name: string
  }

  export type provinceUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
  }

  export type provinceCreateOrConnectWithoutCitiesInput = {
    where: provinceWhereUniqueInput
    create: XOR<provinceCreateWithoutCitiesInput, provinceUncheckedCreateWithoutCitiesInput>
  }

  export type locationCreateWithoutCityInput = {
    id?: string
    address: string
    companies?: companyCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateWithoutCityInput = {
    id?: string
    address: string
    companies?: companyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationCreateOrConnectWithoutCityInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutCityInput, locationUncheckedCreateWithoutCityInput>
  }

  export type locationCreateManyCityInputEnvelope = {
    data: locationCreateManyCityInput | locationCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type provinceUpsertWithoutCitiesInput = {
    update: XOR<provinceUpdateWithoutCitiesInput, provinceUncheckedUpdateWithoutCitiesInput>
    create: XOR<provinceCreateWithoutCitiesInput, provinceUncheckedCreateWithoutCitiesInput>
    where?: provinceWhereInput
  }

  export type provinceUpdateToOneWithWhereWithoutCitiesInput = {
    where?: provinceWhereInput
    data: XOR<provinceUpdateWithoutCitiesInput, provinceUncheckedUpdateWithoutCitiesInput>
  }

  export type provinceUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type provinceUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type locationUpsertWithWhereUniqueWithoutCityInput = {
    where: locationWhereUniqueInput
    update: XOR<locationUpdateWithoutCityInput, locationUncheckedUpdateWithoutCityInput>
    create: XOR<locationCreateWithoutCityInput, locationUncheckedCreateWithoutCityInput>
  }

  export type locationUpdateWithWhereUniqueWithoutCityInput = {
    where: locationWhereUniqueInput
    data: XOR<locationUpdateWithoutCityInput, locationUncheckedUpdateWithoutCityInput>
  }

  export type locationUpdateManyWithWhereWithoutCityInput = {
    where: locationScalarWhereInput
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyWithoutCityInput>
  }

  export type locationScalarWhereInput = {
    AND?: locationScalarWhereInput | locationScalarWhereInput[]
    OR?: locationScalarWhereInput[]
    NOT?: locationScalarWhereInput | locationScalarWhereInput[]
    id?: StringFilter<"location"> | string
    city_id?: StringFilter<"location"> | string
    address?: StringFilter<"location"> | string
  }

  export type companyCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location: locationCreateNestedOneWithoutCompaniesInput
    ads?: adCreateNestedManyWithoutCompanyInput
    cv?: cvCreateNestedManyWithoutCompanyInput
    followers?: followersCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
    ads?: adUncheckedCreateNestedManyWithoutCompanyInput
    cv?: cvUncheckedCreateNestedManyWithoutCompanyInput
    followers?: followersUncheckedCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
  }

  export type cvCreateWithoutUserInput = {
    id?: string
    status: $Enums.status
    created_at?: Date | string
    ad?: adCreateNestedOneWithoutCvInput
    company?: companyCreateNestedOneWithoutCvInput
    cvAd?: cvAdCreateNestedManyWithoutCvInput
  }

  export type cvUncheckedCreateWithoutUserInput = {
    id?: string
    ad_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
    cvAd?: cvAdUncheckedCreateNestedManyWithoutCvInput
  }

  export type cvCreateOrConnectWithoutUserInput = {
    where: cvWhereUniqueInput
    create: XOR<cvCreateWithoutUserInput, cvUncheckedCreateWithoutUserInput>
  }

  export type cvCreateManyUserInputEnvelope = {
    data: cvCreateManyUserInput | cvCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userCompanyFollowCreateWithoutUserInput = {
    company: companyCreateNestedOneWithoutUserCompanyFollowInput
    followers?: followersCreateNestedOneWithoutUserCompanyFollowInput
  }

  export type userCompanyFollowUncheckedCreateWithoutUserInput = {
    company_id: string
    followersId?: string | null
  }

  export type userCompanyFollowCreateOrConnectWithoutUserInput = {
    where: userCompanyFollowWhereUniqueInput
    create: XOR<userCompanyFollowCreateWithoutUserInput, userCompanyFollowUncheckedCreateWithoutUserInput>
  }

  export type userCompanyFollowCreateManyUserInputEnvelope = {
    data: userCompanyFollowCreateManyUserInput | userCompanyFollowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type followersCreateWithoutUserInput = {
    id?: string
    company?: companyCreateNestedOneWithoutFollowersInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutFollowersInput
  }

  export type followersUncheckedCreateWithoutUserInput = {
    id?: string
    company_id: string
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type followersCreateOrConnectWithoutUserInput = {
    where: followersWhereUniqueInput
    create: XOR<followersCreateWithoutUserInput, followersUncheckedCreateWithoutUserInput>
  }

  export type followersCreateManyUserInputEnvelope = {
    data: followersCreateManyUserInput | followersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>
  }

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCompaniesNestedInput
    ads?: adUpdateManyWithoutCompanyNestedInput
    cv?: cvUpdateManyWithoutCompanyNestedInput
    followers?: followersUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
    ads?: adUncheckedUpdateManyWithoutCompanyNestedInput
    cv?: cvUncheckedUpdateManyWithoutCompanyNestedInput
    followers?: followersUncheckedUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type cvUpsertWithWhereUniqueWithoutUserInput = {
    where: cvWhereUniqueInput
    update: XOR<cvUpdateWithoutUserInput, cvUncheckedUpdateWithoutUserInput>
    create: XOR<cvCreateWithoutUserInput, cvUncheckedCreateWithoutUserInput>
  }

  export type cvUpdateWithWhereUniqueWithoutUserInput = {
    where: cvWhereUniqueInput
    data: XOR<cvUpdateWithoutUserInput, cvUncheckedUpdateWithoutUserInput>
  }

  export type cvUpdateManyWithWhereWithoutUserInput = {
    where: cvScalarWhereInput
    data: XOR<cvUpdateManyMutationInput, cvUncheckedUpdateManyWithoutUserInput>
  }

  export type cvScalarWhereInput = {
    AND?: cvScalarWhereInput | cvScalarWhereInput[]
    OR?: cvScalarWhereInput[]
    NOT?: cvScalarWhereInput | cvScalarWhereInput[]
    id?: StringFilter<"cv"> | string
    user_id?: StringFilter<"cv"> | string
    ad_id?: StringFilter<"cv"> | string
    company_id?: StringFilter<"cv"> | string
    status?: EnumstatusFilter<"cv"> | $Enums.status
    created_at?: DateTimeFilter<"cv"> | Date | string
  }

  export type userCompanyFollowUpsertWithWhereUniqueWithoutUserInput = {
    where: userCompanyFollowWhereUniqueInput
    update: XOR<userCompanyFollowUpdateWithoutUserInput, userCompanyFollowUncheckedUpdateWithoutUserInput>
    create: XOR<userCompanyFollowCreateWithoutUserInput, userCompanyFollowUncheckedCreateWithoutUserInput>
  }

  export type userCompanyFollowUpdateWithWhereUniqueWithoutUserInput = {
    where: userCompanyFollowWhereUniqueInput
    data: XOR<userCompanyFollowUpdateWithoutUserInput, userCompanyFollowUncheckedUpdateWithoutUserInput>
  }

  export type userCompanyFollowUpdateManyWithWhereWithoutUserInput = {
    where: userCompanyFollowScalarWhereInput
    data: XOR<userCompanyFollowUpdateManyMutationInput, userCompanyFollowUncheckedUpdateManyWithoutUserInput>
  }

  export type userCompanyFollowScalarWhereInput = {
    AND?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
    OR?: userCompanyFollowScalarWhereInput[]
    NOT?: userCompanyFollowScalarWhereInput | userCompanyFollowScalarWhereInput[]
    user_id?: StringFilter<"userCompanyFollow"> | string
    company_id?: StringFilter<"userCompanyFollow"> | string
    followersId?: StringNullableFilter<"userCompanyFollow"> | string | null
  }

  export type followersUpsertWithWhereUniqueWithoutUserInput = {
    where: followersWhereUniqueInput
    update: XOR<followersUpdateWithoutUserInput, followersUncheckedUpdateWithoutUserInput>
    create: XOR<followersCreateWithoutUserInput, followersUncheckedCreateWithoutUserInput>
  }

  export type followersUpdateWithWhereUniqueWithoutUserInput = {
    where: followersWhereUniqueInput
    data: XOR<followersUpdateWithoutUserInput, followersUncheckedUpdateWithoutUserInput>
  }

  export type followersUpdateManyWithWhereWithoutUserInput = {
    where: followersScalarWhereInput
    data: XOR<followersUpdateManyMutationInput, followersUncheckedUpdateManyWithoutUserInput>
  }

  export type followersScalarWhereInput = {
    AND?: followersScalarWhereInput | followersScalarWhereInput[]
    OR?: followersScalarWhereInput[]
    NOT?: followersScalarWhereInput | followersScalarWhereInput[]
    id?: StringFilter<"followers"> | string
    user_id?: StringFilter<"followers"> | string
    company_id?: StringFilter<"followers"> | string
  }

  export type userCreateWithoutFollowersInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company?: companyCreateNestedOneWithoutUserInput
    cv?: cvCreateNestedManyWithoutUserInput
    companies?: userCompanyFollowCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollowersInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company_id?: string | null
    cv?: cvUncheckedCreateNestedManyWithoutUserInput
    companies?: userCompanyFollowUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollowersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
  }

  export type companyCreateWithoutFollowersInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location: locationCreateNestedOneWithoutCompaniesInput
    user?: userCreateNestedManyWithoutCompanyInput
    ads?: adCreateNestedManyWithoutCompanyInput
    cv?: cvCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutFollowersInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
    user?: userUncheckedCreateNestedManyWithoutCompanyInput
    ads?: adUncheckedCreateNestedManyWithoutCompanyInput
    cv?: cvUncheckedCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutFollowersInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutFollowersInput, companyUncheckedCreateWithoutFollowersInput>
  }

  export type userCompanyFollowCreateWithoutFollowersInput = {
    user: userCreateNestedOneWithoutCompaniesInput
    company: companyCreateNestedOneWithoutUserCompanyFollowInput
  }

  export type userCompanyFollowUncheckedCreateWithoutFollowersInput = {
    user_id: string
    company_id: string
  }

  export type userCompanyFollowCreateOrConnectWithoutFollowersInput = {
    where: userCompanyFollowWhereUniqueInput
    create: XOR<userCompanyFollowCreateWithoutFollowersInput, userCompanyFollowUncheckedCreateWithoutFollowersInput>
  }

  export type userCompanyFollowCreateManyFollowersInputEnvelope = {
    data: userCompanyFollowCreateManyFollowersInput | userCompanyFollowCreateManyFollowersInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutFollowersInput = {
    update: XOR<userUpdateWithoutFollowersInput, userUncheckedUpdateWithoutFollowersInput>
    create: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollowersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollowersInput, userUncheckedUpdateWithoutFollowersInput>
  }

  export type userUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutUserNestedInput
    cv?: cvUpdateManyWithoutUserNestedInput
    companies?: userCompanyFollowUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: cvUncheckedUpdateManyWithoutUserNestedInput
    companies?: userCompanyFollowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type companyUpsertWithoutFollowersInput = {
    update: XOR<companyUpdateWithoutFollowersInput, companyUncheckedUpdateWithoutFollowersInput>
    create: XOR<companyCreateWithoutFollowersInput, companyUncheckedCreateWithoutFollowersInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutFollowersInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutFollowersInput, companyUncheckedUpdateWithoutFollowersInput>
  }

  export type companyUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCompaniesNestedInput
    user?: userUpdateManyWithoutCompanyNestedInput
    ads?: adUpdateManyWithoutCompanyNestedInput
    cv?: cvUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput
    ads?: adUncheckedUpdateManyWithoutCompanyNestedInput
    cv?: cvUncheckedUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type userCompanyFollowUpsertWithWhereUniqueWithoutFollowersInput = {
    where: userCompanyFollowWhereUniqueInput
    update: XOR<userCompanyFollowUpdateWithoutFollowersInput, userCompanyFollowUncheckedUpdateWithoutFollowersInput>
    create: XOR<userCompanyFollowCreateWithoutFollowersInput, userCompanyFollowUncheckedCreateWithoutFollowersInput>
  }

  export type userCompanyFollowUpdateWithWhereUniqueWithoutFollowersInput = {
    where: userCompanyFollowWhereUniqueInput
    data: XOR<userCompanyFollowUpdateWithoutFollowersInput, userCompanyFollowUncheckedUpdateWithoutFollowersInput>
  }

  export type userCompanyFollowUpdateManyWithWhereWithoutFollowersInput = {
    where: userCompanyFollowScalarWhereInput
    data: XOR<userCompanyFollowUpdateManyMutationInput, userCompanyFollowUncheckedUpdateManyWithoutFollowersInput>
  }

  export type cityCreateWithoutLocationsInput = {
    id?: string
    name?: string | null
    province?: provinceCreateNestedOneWithoutCitiesInput
  }

  export type cityUncheckedCreateWithoutLocationsInput = {
    id?: string
    province_id?: string | null
    name?: string | null
  }

  export type cityCreateOrConnectWithoutLocationsInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutLocationsInput, cityUncheckedCreateWithoutLocationsInput>
  }

  export type companyCreateWithoutLocationInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    user?: userCreateNestedManyWithoutCompanyInput
    ads?: adCreateNestedManyWithoutCompanyInput
    cv?: cvCreateNestedManyWithoutCompanyInput
    followers?: followersCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutLocationInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    user?: userUncheckedCreateNestedManyWithoutCompanyInput
    ads?: adUncheckedCreateNestedManyWithoutCompanyInput
    cv?: cvUncheckedCreateNestedManyWithoutCompanyInput
    followers?: followersUncheckedCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutLocationInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutLocationInput, companyUncheckedCreateWithoutLocationInput>
  }

  export type companyCreateManyLocationInputEnvelope = {
    data: companyCreateManyLocationInput | companyCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type cityUpsertWithoutLocationsInput = {
    update: XOR<cityUpdateWithoutLocationsInput, cityUncheckedUpdateWithoutLocationsInput>
    create: XOR<cityCreateWithoutLocationsInput, cityUncheckedCreateWithoutLocationsInput>
    where?: cityWhereInput
  }

  export type cityUpdateToOneWithWhereWithoutLocationsInput = {
    where?: cityWhereInput
    data: XOR<cityUpdateWithoutLocationsInput, cityUncheckedUpdateWithoutLocationsInput>
  }

  export type cityUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province?: provinceUpdateOneWithoutCitiesNestedInput
  }

  export type cityUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    province_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companyUpsertWithWhereUniqueWithoutLocationInput = {
    where: companyWhereUniqueInput
    update: XOR<companyUpdateWithoutLocationInput, companyUncheckedUpdateWithoutLocationInput>
    create: XOR<companyCreateWithoutLocationInput, companyUncheckedCreateWithoutLocationInput>
  }

  export type companyUpdateWithWhereUniqueWithoutLocationInput = {
    where: companyWhereUniqueInput
    data: XOR<companyUpdateWithoutLocationInput, companyUncheckedUpdateWithoutLocationInput>
  }

  export type companyUpdateManyWithWhereWithoutLocationInput = {
    where: companyScalarWhereInput
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutLocationInput>
  }

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[]
    OR?: companyScalarWhereInput[]
    NOT?: companyScalarWhereInput | companyScalarWhereInput[]
    id?: StringFilter<"company"> | string
    created_at?: DateTimeFilter<"company"> | Date | string
    name?: StringFilter<"company"> | string
    logo?: StringFilter<"company"> | string
    score_company?: FloatFilter<"company"> | number
    score_popularity?: FloatFilter<"company"> | number
    score_experience_of_job_seekers?: FloatFilter<"company"> | number
    score_responsiveness?: FloatFilter<"company"> | number
    website?: StringFilter<"company"> | string
    description?: StringFilter<"company"> | string
    slogan?: StringFilter<"company"> | string
    organization_employ?: IntFilter<"company"> | number
    type_of_activity?: StringFilter<"company"> | string
    industry?: StringFilter<"company"> | string
    established_year?: DateTimeFilter<"company"> | Date | string
    location_id?: StringFilter<"company"> | string
  }

  export type locationCreateWithoutCompaniesInput = {
    id?: string
    address: string
    city: cityCreateNestedOneWithoutLocationsInput
  }

  export type locationUncheckedCreateWithoutCompaniesInput = {
    id?: string
    city_id: string
    address: string
  }

  export type locationCreateOrConnectWithoutCompaniesInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutCompaniesInput, locationUncheckedCreateWithoutCompaniesInput>
  }

  export type userCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    cv?: cvCreateNestedManyWithoutUserInput
    companies?: userCompanyFollowCreateNestedManyWithoutUserInput
    followers?: followersCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    cv?: cvUncheckedCreateNestedManyWithoutUserInput
    companies?: userCompanyFollowUncheckedCreateNestedManyWithoutUserInput
    followers?: followersUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
  }

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type adCreateWithoutCompanyInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageCreateNestedManyWithoutAdInput
    cvAd?: cvAdCreateNestedManyWithoutAdInput
    cv?: cvCreateNestedManyWithoutAdInput
  }

  export type adUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedCreateNestedManyWithoutAdInput
    cvAd?: cvAdUncheckedCreateNestedManyWithoutAdInput
    cv?: cvUncheckedCreateNestedManyWithoutAdInput
  }

  export type adCreateOrConnectWithoutCompanyInput = {
    where: adWhereUniqueInput
    create: XOR<adCreateWithoutCompanyInput, adUncheckedCreateWithoutCompanyInput>
  }

  export type adCreateManyCompanyInputEnvelope = {
    data: adCreateManyCompanyInput | adCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type cvCreateWithoutCompanyInput = {
    id?: string
    status: $Enums.status
    created_at?: Date | string
    user?: userCreateNestedOneWithoutCvInput
    ad?: adCreateNestedOneWithoutCvInput
    cvAd?: cvAdCreateNestedManyWithoutCvInput
  }

  export type cvUncheckedCreateWithoutCompanyInput = {
    id?: string
    user_id: string
    ad_id: string
    status: $Enums.status
    created_at?: Date | string
    cvAd?: cvAdUncheckedCreateNestedManyWithoutCvInput
  }

  export type cvCreateOrConnectWithoutCompanyInput = {
    where: cvWhereUniqueInput
    create: XOR<cvCreateWithoutCompanyInput, cvUncheckedCreateWithoutCompanyInput>
  }

  export type cvCreateManyCompanyInputEnvelope = {
    data: cvCreateManyCompanyInput | cvCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type followersCreateWithoutCompanyInput = {
    id?: string
    user?: userCreateNestedOneWithoutFollowersInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutFollowersInput
  }

  export type followersUncheckedCreateWithoutCompanyInput = {
    id?: string
    user_id: string
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type followersCreateOrConnectWithoutCompanyInput = {
    where: followersWhereUniqueInput
    create: XOR<followersCreateWithoutCompanyInput, followersUncheckedCreateWithoutCompanyInput>
  }

  export type followersCreateManyCompanyInputEnvelope = {
    data: followersCreateManyCompanyInput | followersCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type userCompanyFollowCreateWithoutCompanyInput = {
    user: userCreateNestedOneWithoutCompaniesInput
    followers?: followersCreateNestedOneWithoutUserCompanyFollowInput
  }

  export type userCompanyFollowUncheckedCreateWithoutCompanyInput = {
    user_id: string
    followersId?: string | null
  }

  export type userCompanyFollowCreateOrConnectWithoutCompanyInput = {
    where: userCompanyFollowWhereUniqueInput
    create: XOR<userCompanyFollowCreateWithoutCompanyInput, userCompanyFollowUncheckedCreateWithoutCompanyInput>
  }

  export type userCompanyFollowCreateManyCompanyInputEnvelope = {
    data: userCompanyFollowCreateManyCompanyInput | userCompanyFollowCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type locationUpsertWithoutCompaniesInput = {
    update: XOR<locationUpdateWithoutCompaniesInput, locationUncheckedUpdateWithoutCompaniesInput>
    create: XOR<locationCreateWithoutCompaniesInput, locationUncheckedCreateWithoutCompaniesInput>
    where?: locationWhereInput
  }

  export type locationUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: locationWhereInput
    data: XOR<locationUpdateWithoutCompaniesInput, locationUncheckedUpdateWithoutCompaniesInput>
  }

  export type locationUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: cityUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type locationUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    city_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
  }

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>
  }

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    company_id?: StringNullableFilter<"user"> | string | null
  }

  export type adUpsertWithWhereUniqueWithoutCompanyInput = {
    where: adWhereUniqueInput
    update: XOR<adUpdateWithoutCompanyInput, adUncheckedUpdateWithoutCompanyInput>
    create: XOR<adCreateWithoutCompanyInput, adUncheckedCreateWithoutCompanyInput>
  }

  export type adUpdateWithWhereUniqueWithoutCompanyInput = {
    where: adWhereUniqueInput
    data: XOR<adUpdateWithoutCompanyInput, adUncheckedUpdateWithoutCompanyInput>
  }

  export type adUpdateManyWithWhereWithoutCompanyInput = {
    where: adScalarWhereInput
    data: XOR<adUpdateManyMutationInput, adUncheckedUpdateManyWithoutCompanyInput>
  }

  export type adScalarWhereInput = {
    AND?: adScalarWhereInput | adScalarWhereInput[]
    OR?: adScalarWhereInput[]
    NOT?: adScalarWhereInput | adScalarWhereInput[]
    company_id?: StringFilter<"ad"> | string
    id?: StringFilter<"ad"> | string
    name?: StringFilter<"ad"> | string
    price?: JsonFilter<"ad">
    work_time?: StringFilter<"ad"> | string
    travel_benefits?: StringFilter<"ad"> | string
    age?: JsonFilter<"ad">
    edicational_level?: JsonFilter<"ad">
    key_indicator?: JsonFilter<"ad">
    software_skills?: JsonFilter<"ad">
    tags?: JsonFilter<"ad">
    facilities?: JsonFilter<"ad">
    gender?: EnumgenderFilter<"ad"> | $Enums.gender
    seniority_level?: Enumseniority_levelFilter<"ad"> | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFilter<"ad"> | $Enums.cooperation_type
    important?: BoolFilter<"ad"> | boolean
    response?: BoolFilter<"ad"> | boolean
    itern?: BoolFilter<"ad"> | boolean
    telecommuting?: BoolFilter<"ad"> | boolean
    disabledPeople?: BoolFilter<"ad"> | boolean
    militaryOrder?: BoolFilter<"ad"> | boolean
    created_at?: DateTimeFilter<"ad"> | Date | string
  }

  export type cvUpsertWithWhereUniqueWithoutCompanyInput = {
    where: cvWhereUniqueInput
    update: XOR<cvUpdateWithoutCompanyInput, cvUncheckedUpdateWithoutCompanyInput>
    create: XOR<cvCreateWithoutCompanyInput, cvUncheckedCreateWithoutCompanyInput>
  }

  export type cvUpdateWithWhereUniqueWithoutCompanyInput = {
    where: cvWhereUniqueInput
    data: XOR<cvUpdateWithoutCompanyInput, cvUncheckedUpdateWithoutCompanyInput>
  }

  export type cvUpdateManyWithWhereWithoutCompanyInput = {
    where: cvScalarWhereInput
    data: XOR<cvUpdateManyMutationInput, cvUncheckedUpdateManyWithoutCompanyInput>
  }

  export type followersUpsertWithWhereUniqueWithoutCompanyInput = {
    where: followersWhereUniqueInput
    update: XOR<followersUpdateWithoutCompanyInput, followersUncheckedUpdateWithoutCompanyInput>
    create: XOR<followersCreateWithoutCompanyInput, followersUncheckedCreateWithoutCompanyInput>
  }

  export type followersUpdateWithWhereUniqueWithoutCompanyInput = {
    where: followersWhereUniqueInput
    data: XOR<followersUpdateWithoutCompanyInput, followersUncheckedUpdateWithoutCompanyInput>
  }

  export type followersUpdateManyWithWhereWithoutCompanyInput = {
    where: followersScalarWhereInput
    data: XOR<followersUpdateManyMutationInput, followersUncheckedUpdateManyWithoutCompanyInput>
  }

  export type userCompanyFollowUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userCompanyFollowWhereUniqueInput
    update: XOR<userCompanyFollowUpdateWithoutCompanyInput, userCompanyFollowUncheckedUpdateWithoutCompanyInput>
    create: XOR<userCompanyFollowCreateWithoutCompanyInput, userCompanyFollowUncheckedCreateWithoutCompanyInput>
  }

  export type userCompanyFollowUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userCompanyFollowWhereUniqueInput
    data: XOR<userCompanyFollowUpdateWithoutCompanyInput, userCompanyFollowUncheckedUpdateWithoutCompanyInput>
  }

  export type userCompanyFollowUpdateManyWithWhereWithoutCompanyInput = {
    where: userCompanyFollowScalarWhereInput
    data: XOR<userCompanyFollowUpdateManyMutationInput, userCompanyFollowUncheckedUpdateManyWithoutCompanyInput>
  }

  export type userCreateWithoutCompaniesInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company?: companyCreateNestedOneWithoutUserInput
    cv?: cvCreateNestedManyWithoutUserInput
    followers?: followersCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCompaniesInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company_id?: string | null
    cv?: cvUncheckedCreateNestedManyWithoutUserInput
    followers?: followersUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCompaniesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput>
  }

  export type companyCreateWithoutUserCompanyFollowInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location: locationCreateNestedOneWithoutCompaniesInput
    user?: userCreateNestedManyWithoutCompanyInput
    ads?: adCreateNestedManyWithoutCompanyInput
    cv?: cvCreateNestedManyWithoutCompanyInput
    followers?: followersCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutUserCompanyFollowInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
    user?: userUncheckedCreateNestedManyWithoutCompanyInput
    ads?: adUncheckedCreateNestedManyWithoutCompanyInput
    cv?: cvUncheckedCreateNestedManyWithoutCompanyInput
    followers?: followersUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutUserCompanyFollowInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutUserCompanyFollowInput, companyUncheckedCreateWithoutUserCompanyFollowInput>
  }

  export type followersCreateWithoutUserCompanyFollowInput = {
    id?: string
    user?: userCreateNestedOneWithoutFollowersInput
    company?: companyCreateNestedOneWithoutFollowersInput
  }

  export type followersUncheckedCreateWithoutUserCompanyFollowInput = {
    id?: string
    user_id: string
    company_id: string
  }

  export type followersCreateOrConnectWithoutUserCompanyFollowInput = {
    where: followersWhereUniqueInput
    create: XOR<followersCreateWithoutUserCompanyFollowInput, followersUncheckedCreateWithoutUserCompanyFollowInput>
  }

  export type userUpsertWithoutCompaniesInput = {
    update: XOR<userUpdateWithoutCompaniesInput, userUncheckedUpdateWithoutCompaniesInput>
    create: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCompaniesInput, userUncheckedUpdateWithoutCompaniesInput>
  }

  export type userUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutUserNestedInput
    cv?: cvUpdateManyWithoutUserNestedInput
    followers?: followersUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: cvUncheckedUpdateManyWithoutUserNestedInput
    followers?: followersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type companyUpsertWithoutUserCompanyFollowInput = {
    update: XOR<companyUpdateWithoutUserCompanyFollowInput, companyUncheckedUpdateWithoutUserCompanyFollowInput>
    create: XOR<companyCreateWithoutUserCompanyFollowInput, companyUncheckedCreateWithoutUserCompanyFollowInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutUserCompanyFollowInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutUserCompanyFollowInput, companyUncheckedUpdateWithoutUserCompanyFollowInput>
  }

  export type companyUpdateWithoutUserCompanyFollowInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCompaniesNestedInput
    user?: userUpdateManyWithoutCompanyNestedInput
    ads?: adUpdateManyWithoutCompanyNestedInput
    cv?: cvUpdateManyWithoutCompanyNestedInput
    followers?: followersUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutUserCompanyFollowInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput
    ads?: adUncheckedUpdateManyWithoutCompanyNestedInput
    cv?: cvUncheckedUpdateManyWithoutCompanyNestedInput
    followers?: followersUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type followersUpsertWithoutUserCompanyFollowInput = {
    update: XOR<followersUpdateWithoutUserCompanyFollowInput, followersUncheckedUpdateWithoutUserCompanyFollowInput>
    create: XOR<followersCreateWithoutUserCompanyFollowInput, followersUncheckedCreateWithoutUserCompanyFollowInput>
    where?: followersWhereInput
  }

  export type followersUpdateToOneWithWhereWithoutUserCompanyFollowInput = {
    where?: followersWhereInput
    data: XOR<followersUpdateWithoutUserCompanyFollowInput, followersUncheckedUpdateWithoutUserCompanyFollowInput>
  }

  export type followersUpdateWithoutUserCompanyFollowInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneWithoutFollowersNestedInput
    company?: companyUpdateOneWithoutFollowersNestedInput
  }

  export type followersUncheckedUpdateWithoutUserCompanyFollowInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type facilitiesAdvantageCreateWithoutAdvantageInput = {
    ad: adCreateNestedOneWithoutFacilitiesAdvantageInput
  }

  export type facilitiesAdvantageUncheckedCreateWithoutAdvantageInput = {
    ad_id: string
  }

  export type facilitiesAdvantageCreateOrConnectWithoutAdvantageInput = {
    where: facilitiesAdvantageWhereUniqueInput
    create: XOR<facilitiesAdvantageCreateWithoutAdvantageInput, facilitiesAdvantageUncheckedCreateWithoutAdvantageInput>
  }

  export type facilitiesAdvantageCreateManyAdvantageInputEnvelope = {
    data: facilitiesAdvantageCreateManyAdvantageInput | facilitiesAdvantageCreateManyAdvantageInput[]
    skipDuplicates?: boolean
  }

  export type facilitiesAdvantageUpsertWithWhereUniqueWithoutAdvantageInput = {
    where: facilitiesAdvantageWhereUniqueInput
    update: XOR<facilitiesAdvantageUpdateWithoutAdvantageInput, facilitiesAdvantageUncheckedUpdateWithoutAdvantageInput>
    create: XOR<facilitiesAdvantageCreateWithoutAdvantageInput, facilitiesAdvantageUncheckedCreateWithoutAdvantageInput>
  }

  export type facilitiesAdvantageUpdateWithWhereUniqueWithoutAdvantageInput = {
    where: facilitiesAdvantageWhereUniqueInput
    data: XOR<facilitiesAdvantageUpdateWithoutAdvantageInput, facilitiesAdvantageUncheckedUpdateWithoutAdvantageInput>
  }

  export type facilitiesAdvantageUpdateManyWithWhereWithoutAdvantageInput = {
    where: facilitiesAdvantageScalarWhereInput
    data: XOR<facilitiesAdvantageUpdateManyMutationInput, facilitiesAdvantageUncheckedUpdateManyWithoutAdvantageInput>
  }

  export type facilitiesAdvantageScalarWhereInput = {
    AND?: facilitiesAdvantageScalarWhereInput | facilitiesAdvantageScalarWhereInput[]
    OR?: facilitiesAdvantageScalarWhereInput[]
    NOT?: facilitiesAdvantageScalarWhereInput | facilitiesAdvantageScalarWhereInput[]
    ad_id?: StringFilter<"facilitiesAdvantage"> | string
    advantage_id?: StringFilter<"facilitiesAdvantage"> | string
  }

  export type adsCategory_collectionCreateWithoutAdInput = {
    category_collections: category_collectionCreateNestedOneWithoutAdsCategory_collectionsInput
  }

  export type adsCategory_collectionUncheckedCreateWithoutAdInput = {
    category_collection_id: string
  }

  export type adsCategory_collectionCreateOrConnectWithoutAdInput = {
    where: adsCategory_collectionWhereUniqueInput
    create: XOR<adsCategory_collectionCreateWithoutAdInput, adsCategory_collectionUncheckedCreateWithoutAdInput>
  }

  export type adsCategory_collectionCreateManyAdInputEnvelope = {
    data: adsCategory_collectionCreateManyAdInput | adsCategory_collectionCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type facilitiesAdvantageCreateWithoutAdInput = {
    advantage: advantageCreateNestedOneWithoutFacilitiesAdvantageInput
  }

  export type facilitiesAdvantageUncheckedCreateWithoutAdInput = {
    advantage_id: string
  }

  export type facilitiesAdvantageCreateOrConnectWithoutAdInput = {
    where: facilitiesAdvantageWhereUniqueInput
    create: XOR<facilitiesAdvantageCreateWithoutAdInput, facilitiesAdvantageUncheckedCreateWithoutAdInput>
  }

  export type facilitiesAdvantageCreateManyAdInputEnvelope = {
    data: facilitiesAdvantageCreateManyAdInput | facilitiesAdvantageCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutAdsInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location: locationCreateNestedOneWithoutCompaniesInput
    user?: userCreateNestedManyWithoutCompanyInput
    cv?: cvCreateNestedManyWithoutCompanyInput
    followers?: followersCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutAdsInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
    user?: userUncheckedCreateNestedManyWithoutCompanyInput
    cv?: cvUncheckedCreateNestedManyWithoutCompanyInput
    followers?: followersUncheckedCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutAdsInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutAdsInput, companyUncheckedCreateWithoutAdsInput>
  }

  export type cvAdCreateWithoutAdInput = {
    cv: cvCreateNestedOneWithoutCvAdInput
  }

  export type cvAdUncheckedCreateWithoutAdInput = {
    cv_id: string
  }

  export type cvAdCreateOrConnectWithoutAdInput = {
    where: cvAdWhereUniqueInput
    create: XOR<cvAdCreateWithoutAdInput, cvAdUncheckedCreateWithoutAdInput>
  }

  export type cvAdCreateManyAdInputEnvelope = {
    data: cvAdCreateManyAdInput | cvAdCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type cvCreateWithoutAdInput = {
    id?: string
    status: $Enums.status
    created_at?: Date | string
    user?: userCreateNestedOneWithoutCvInput
    company?: companyCreateNestedOneWithoutCvInput
    cvAd?: cvAdCreateNestedManyWithoutCvInput
  }

  export type cvUncheckedCreateWithoutAdInput = {
    id?: string
    user_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
    cvAd?: cvAdUncheckedCreateNestedManyWithoutCvInput
  }

  export type cvCreateOrConnectWithoutAdInput = {
    where: cvWhereUniqueInput
    create: XOR<cvCreateWithoutAdInput, cvUncheckedCreateWithoutAdInput>
  }

  export type cvCreateManyAdInputEnvelope = {
    data: cvCreateManyAdInput | cvCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type adsCategory_collectionUpsertWithWhereUniqueWithoutAdInput = {
    where: adsCategory_collectionWhereUniqueInput
    update: XOR<adsCategory_collectionUpdateWithoutAdInput, adsCategory_collectionUncheckedUpdateWithoutAdInput>
    create: XOR<adsCategory_collectionCreateWithoutAdInput, adsCategory_collectionUncheckedCreateWithoutAdInput>
  }

  export type adsCategory_collectionUpdateWithWhereUniqueWithoutAdInput = {
    where: adsCategory_collectionWhereUniqueInput
    data: XOR<adsCategory_collectionUpdateWithoutAdInput, adsCategory_collectionUncheckedUpdateWithoutAdInput>
  }

  export type adsCategory_collectionUpdateManyWithWhereWithoutAdInput = {
    where: adsCategory_collectionScalarWhereInput
    data: XOR<adsCategory_collectionUpdateManyMutationInput, adsCategory_collectionUncheckedUpdateManyWithoutAdInput>
  }

  export type facilitiesAdvantageUpsertWithWhereUniqueWithoutAdInput = {
    where: facilitiesAdvantageWhereUniqueInput
    update: XOR<facilitiesAdvantageUpdateWithoutAdInput, facilitiesAdvantageUncheckedUpdateWithoutAdInput>
    create: XOR<facilitiesAdvantageCreateWithoutAdInput, facilitiesAdvantageUncheckedCreateWithoutAdInput>
  }

  export type facilitiesAdvantageUpdateWithWhereUniqueWithoutAdInput = {
    where: facilitiesAdvantageWhereUniqueInput
    data: XOR<facilitiesAdvantageUpdateWithoutAdInput, facilitiesAdvantageUncheckedUpdateWithoutAdInput>
  }

  export type facilitiesAdvantageUpdateManyWithWhereWithoutAdInput = {
    where: facilitiesAdvantageScalarWhereInput
    data: XOR<facilitiesAdvantageUpdateManyMutationInput, facilitiesAdvantageUncheckedUpdateManyWithoutAdInput>
  }

  export type companyUpsertWithoutAdsInput = {
    update: XOR<companyUpdateWithoutAdsInput, companyUncheckedUpdateWithoutAdsInput>
    create: XOR<companyCreateWithoutAdsInput, companyUncheckedCreateWithoutAdsInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutAdsInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutAdsInput, companyUncheckedUpdateWithoutAdsInput>
  }

  export type companyUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCompaniesNestedInput
    user?: userUpdateManyWithoutCompanyNestedInput
    cv?: cvUpdateManyWithoutCompanyNestedInput
    followers?: followersUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput
    cv?: cvUncheckedUpdateManyWithoutCompanyNestedInput
    followers?: followersUncheckedUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type cvAdUpsertWithWhereUniqueWithoutAdInput = {
    where: cvAdWhereUniqueInput
    update: XOR<cvAdUpdateWithoutAdInput, cvAdUncheckedUpdateWithoutAdInput>
    create: XOR<cvAdCreateWithoutAdInput, cvAdUncheckedCreateWithoutAdInput>
  }

  export type cvAdUpdateWithWhereUniqueWithoutAdInput = {
    where: cvAdWhereUniqueInput
    data: XOR<cvAdUpdateWithoutAdInput, cvAdUncheckedUpdateWithoutAdInput>
  }

  export type cvAdUpdateManyWithWhereWithoutAdInput = {
    where: cvAdScalarWhereInput
    data: XOR<cvAdUpdateManyMutationInput, cvAdUncheckedUpdateManyWithoutAdInput>
  }

  export type cvAdScalarWhereInput = {
    AND?: cvAdScalarWhereInput | cvAdScalarWhereInput[]
    OR?: cvAdScalarWhereInput[]
    NOT?: cvAdScalarWhereInput | cvAdScalarWhereInput[]
    cv_id?: StringFilter<"cvAd"> | string
    ad_id?: StringFilter<"cvAd"> | string
  }

  export type cvUpsertWithWhereUniqueWithoutAdInput = {
    where: cvWhereUniqueInput
    update: XOR<cvUpdateWithoutAdInput, cvUncheckedUpdateWithoutAdInput>
    create: XOR<cvCreateWithoutAdInput, cvUncheckedCreateWithoutAdInput>
  }

  export type cvUpdateWithWhereUniqueWithoutAdInput = {
    where: cvWhereUniqueInput
    data: XOR<cvUpdateWithoutAdInput, cvUncheckedUpdateWithoutAdInput>
  }

  export type cvUpdateManyWithWhereWithoutAdInput = {
    where: cvScalarWhereInput
    data: XOR<cvUpdateManyMutationInput, cvUncheckedUpdateManyWithoutAdInput>
  }

  export type adCreateWithoutAdsCategory_collectionsInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    facilitiesAdvantage?: facilitiesAdvantageCreateNestedManyWithoutAdInput
    company: companyCreateNestedOneWithoutAdsInput
    cvAd?: cvAdCreateNestedManyWithoutAdInput
    cv?: cvCreateNestedManyWithoutAdInput
  }

  export type adUncheckedCreateWithoutAdsCategory_collectionsInput = {
    company_id: string
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    facilitiesAdvantage?: facilitiesAdvantageUncheckedCreateNestedManyWithoutAdInput
    cvAd?: cvAdUncheckedCreateNestedManyWithoutAdInput
    cv?: cvUncheckedCreateNestedManyWithoutAdInput
  }

  export type adCreateOrConnectWithoutAdsCategory_collectionsInput = {
    where: adWhereUniqueInput
    create: XOR<adCreateWithoutAdsCategory_collectionsInput, adUncheckedCreateWithoutAdsCategory_collectionsInput>
  }

  export type category_collectionCreateWithoutAdsCategory_collectionsInput = {
    id?: string
    name?: string | null
    link?: string | null
    categories?: categoryCreateNestedOneWithoutCategory_collectionsInput
  }

  export type category_collectionUncheckedCreateWithoutAdsCategory_collectionsInput = {
    id?: string
    category_id?: string | null
    name?: string | null
    link?: string | null
  }

  export type category_collectionCreateOrConnectWithoutAdsCategory_collectionsInput = {
    where: category_collectionWhereUniqueInput
    create: XOR<category_collectionCreateWithoutAdsCategory_collectionsInput, category_collectionUncheckedCreateWithoutAdsCategory_collectionsInput>
  }

  export type adUpsertWithoutAdsCategory_collectionsInput = {
    update: XOR<adUpdateWithoutAdsCategory_collectionsInput, adUncheckedUpdateWithoutAdsCategory_collectionsInput>
    create: XOR<adCreateWithoutAdsCategory_collectionsInput, adUncheckedCreateWithoutAdsCategory_collectionsInput>
    where?: adWhereInput
  }

  export type adUpdateToOneWithWhereWithoutAdsCategory_collectionsInput = {
    where?: adWhereInput
    data: XOR<adUpdateWithoutAdsCategory_collectionsInput, adUncheckedUpdateWithoutAdsCategory_collectionsInput>
  }

  export type adUpdateWithoutAdsCategory_collectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    facilitiesAdvantage?: facilitiesAdvantageUpdateManyWithoutAdNestedInput
    company?: companyUpdateOneRequiredWithoutAdsNestedInput
    cvAd?: cvAdUpdateManyWithoutAdNestedInput
    cv?: cvUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateWithoutAdsCategory_collectionsInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    facilitiesAdvantage?: facilitiesAdvantageUncheckedUpdateManyWithoutAdNestedInput
    cvAd?: cvAdUncheckedUpdateManyWithoutAdNestedInput
    cv?: cvUncheckedUpdateManyWithoutAdNestedInput
  }

  export type category_collectionUpsertWithoutAdsCategory_collectionsInput = {
    update: XOR<category_collectionUpdateWithoutAdsCategory_collectionsInput, category_collectionUncheckedUpdateWithoutAdsCategory_collectionsInput>
    create: XOR<category_collectionCreateWithoutAdsCategory_collectionsInput, category_collectionUncheckedCreateWithoutAdsCategory_collectionsInput>
    where?: category_collectionWhereInput
  }

  export type category_collectionUpdateToOneWithWhereWithoutAdsCategory_collectionsInput = {
    where?: category_collectionWhereInput
    data: XOR<category_collectionUpdateWithoutAdsCategory_collectionsInput, category_collectionUncheckedUpdateWithoutAdsCategory_collectionsInput>
  }

  export type category_collectionUpdateWithoutAdsCategory_collectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: categoryUpdateOneWithoutCategory_collectionsNestedInput
  }

  export type category_collectionUncheckedUpdateWithoutAdsCategory_collectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adCreateWithoutFacilitiesAdvantageInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutAdInput
    company: companyCreateNestedOneWithoutAdsInput
    cvAd?: cvAdCreateNestedManyWithoutAdInput
    cv?: cvCreateNestedManyWithoutAdInput
  }

  export type adUncheckedCreateWithoutFacilitiesAdvantageInput = {
    company_id: string
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutAdInput
    cvAd?: cvAdUncheckedCreateNestedManyWithoutAdInput
    cv?: cvUncheckedCreateNestedManyWithoutAdInput
  }

  export type adCreateOrConnectWithoutFacilitiesAdvantageInput = {
    where: adWhereUniqueInput
    create: XOR<adCreateWithoutFacilitiesAdvantageInput, adUncheckedCreateWithoutFacilitiesAdvantageInput>
  }

  export type advantageCreateWithoutFacilitiesAdvantageInput = {
    id?: string
    type: string
  }

  export type advantageUncheckedCreateWithoutFacilitiesAdvantageInput = {
    id?: string
    type: string
  }

  export type advantageCreateOrConnectWithoutFacilitiesAdvantageInput = {
    where: advantageWhereUniqueInput
    create: XOR<advantageCreateWithoutFacilitiesAdvantageInput, advantageUncheckedCreateWithoutFacilitiesAdvantageInput>
  }

  export type adUpsertWithoutFacilitiesAdvantageInput = {
    update: XOR<adUpdateWithoutFacilitiesAdvantageInput, adUncheckedUpdateWithoutFacilitiesAdvantageInput>
    create: XOR<adCreateWithoutFacilitiesAdvantageInput, adUncheckedCreateWithoutFacilitiesAdvantageInput>
    where?: adWhereInput
  }

  export type adUpdateToOneWithWhereWithoutFacilitiesAdvantageInput = {
    where?: adWhereInput
    data: XOR<adUpdateWithoutFacilitiesAdvantageInput, adUncheckedUpdateWithoutFacilitiesAdvantageInput>
  }

  export type adUpdateWithoutFacilitiesAdvantageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutAdNestedInput
    company?: companyUpdateOneRequiredWithoutAdsNestedInput
    cvAd?: cvAdUpdateManyWithoutAdNestedInput
    cv?: cvUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateWithoutFacilitiesAdvantageInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutAdNestedInput
    cvAd?: cvAdUncheckedUpdateManyWithoutAdNestedInput
    cv?: cvUncheckedUpdateManyWithoutAdNestedInput
  }

  export type advantageUpsertWithoutFacilitiesAdvantageInput = {
    update: XOR<advantageUpdateWithoutFacilitiesAdvantageInput, advantageUncheckedUpdateWithoutFacilitiesAdvantageInput>
    create: XOR<advantageCreateWithoutFacilitiesAdvantageInput, advantageUncheckedCreateWithoutFacilitiesAdvantageInput>
    where?: advantageWhereInput
  }

  export type advantageUpdateToOneWithWhereWithoutFacilitiesAdvantageInput = {
    where?: advantageWhereInput
    data: XOR<advantageUpdateWithoutFacilitiesAdvantageInput, advantageUncheckedUpdateWithoutFacilitiesAdvantageInput>
  }

  export type advantageUpdateWithoutFacilitiesAdvantageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type advantageUncheckedUpdateWithoutFacilitiesAdvantageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateWithoutCvInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company?: companyCreateNestedOneWithoutUserInput
    companies?: userCompanyFollowCreateNestedManyWithoutUserInput
    followers?: followersCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCvInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    company_id?: string | null
    companies?: userCompanyFollowUncheckedCreateNestedManyWithoutUserInput
    followers?: followersUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCvInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCvInput, userUncheckedCreateWithoutCvInput>
  }

  export type adCreateWithoutCvInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageCreateNestedManyWithoutAdInput
    company: companyCreateNestedOneWithoutAdsInput
    cvAd?: cvAdCreateNestedManyWithoutAdInput
  }

  export type adUncheckedCreateWithoutCvInput = {
    company_id: string
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedCreateNestedManyWithoutAdInput
    cvAd?: cvAdUncheckedCreateNestedManyWithoutAdInput
  }

  export type adCreateOrConnectWithoutCvInput = {
    where: adWhereUniqueInput
    create: XOR<adCreateWithoutCvInput, adUncheckedCreateWithoutCvInput>
  }

  export type companyCreateWithoutCvInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location: locationCreateNestedOneWithoutCompaniesInput
    user?: userCreateNestedManyWithoutCompanyInput
    ads?: adCreateNestedManyWithoutCompanyInput
    followers?: followersCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutCvInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
    location_id: string
    user?: userUncheckedCreateNestedManyWithoutCompanyInput
    ads?: adUncheckedCreateNestedManyWithoutCompanyInput
    followers?: followersUncheckedCreateNestedManyWithoutCompanyInput
    userCompanyFollow?: userCompanyFollowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutCvInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutCvInput, companyUncheckedCreateWithoutCvInput>
  }

  export type cvAdCreateWithoutCvInput = {
    ad: adCreateNestedOneWithoutCvAdInput
  }

  export type cvAdUncheckedCreateWithoutCvInput = {
    ad_id: string
  }

  export type cvAdCreateOrConnectWithoutCvInput = {
    where: cvAdWhereUniqueInput
    create: XOR<cvAdCreateWithoutCvInput, cvAdUncheckedCreateWithoutCvInput>
  }

  export type cvAdCreateManyCvInputEnvelope = {
    data: cvAdCreateManyCvInput | cvAdCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCvInput = {
    update: XOR<userUpdateWithoutCvInput, userUncheckedUpdateWithoutCvInput>
    create: XOR<userCreateWithoutCvInput, userUncheckedCreateWithoutCvInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCvInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCvInput, userUncheckedUpdateWithoutCvInput>
  }

  export type userUpdateWithoutCvInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutUserNestedInput
    companies?: userCompanyFollowUpdateManyWithoutUserNestedInput
    followers?: followersUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCvInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: userCompanyFollowUncheckedUpdateManyWithoutUserNestedInput
    followers?: followersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type adUpsertWithoutCvInput = {
    update: XOR<adUpdateWithoutCvInput, adUncheckedUpdateWithoutCvInput>
    create: XOR<adCreateWithoutCvInput, adUncheckedCreateWithoutCvInput>
    where?: adWhereInput
  }

  export type adUpdateToOneWithWhereWithoutCvInput = {
    where?: adWhereInput
    data: XOR<adUpdateWithoutCvInput, adUncheckedUpdateWithoutCvInput>
  }

  export type adUpdateWithoutCvInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUpdateManyWithoutAdNestedInput
    company?: companyUpdateOneRequiredWithoutAdsNestedInput
    cvAd?: cvAdUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateWithoutCvInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedUpdateManyWithoutAdNestedInput
    cvAd?: cvAdUncheckedUpdateManyWithoutAdNestedInput
  }

  export type companyUpsertWithoutCvInput = {
    update: XOR<companyUpdateWithoutCvInput, companyUncheckedUpdateWithoutCvInput>
    create: XOR<companyCreateWithoutCvInput, companyUncheckedCreateWithoutCvInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutCvInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutCvInput, companyUncheckedUpdateWithoutCvInput>
  }

  export type companyUpdateWithoutCvInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCompaniesNestedInput
    user?: userUpdateManyWithoutCompanyNestedInput
    ads?: adUpdateManyWithoutCompanyNestedInput
    followers?: followersUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutCvInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput
    ads?: adUncheckedUpdateManyWithoutCompanyNestedInput
    followers?: followersUncheckedUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type cvAdUpsertWithWhereUniqueWithoutCvInput = {
    where: cvAdWhereUniqueInput
    update: XOR<cvAdUpdateWithoutCvInput, cvAdUncheckedUpdateWithoutCvInput>
    create: XOR<cvAdCreateWithoutCvInput, cvAdUncheckedCreateWithoutCvInput>
  }

  export type cvAdUpdateWithWhereUniqueWithoutCvInput = {
    where: cvAdWhereUniqueInput
    data: XOR<cvAdUpdateWithoutCvInput, cvAdUncheckedUpdateWithoutCvInput>
  }

  export type cvAdUpdateManyWithWhereWithoutCvInput = {
    where: cvAdScalarWhereInput
    data: XOR<cvAdUpdateManyMutationInput, cvAdUncheckedUpdateManyWithoutCvInput>
  }

  export type cvCreateWithoutCvAdInput = {
    id?: string
    status: $Enums.status
    created_at?: Date | string
    user?: userCreateNestedOneWithoutCvInput
    ad?: adCreateNestedOneWithoutCvInput
    company?: companyCreateNestedOneWithoutCvInput
  }

  export type cvUncheckedCreateWithoutCvAdInput = {
    id?: string
    user_id: string
    ad_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
  }

  export type cvCreateOrConnectWithoutCvAdInput = {
    where: cvWhereUniqueInput
    create: XOR<cvCreateWithoutCvAdInput, cvUncheckedCreateWithoutCvAdInput>
  }

  export type adCreateWithoutCvAdInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageCreateNestedManyWithoutAdInput
    company: companyCreateNestedOneWithoutAdsInput
    cv?: cvCreateNestedManyWithoutAdInput
  }

  export type adUncheckedCreateWithoutCvAdInput = {
    company_id: string
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedCreateNestedManyWithoutAdInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedCreateNestedManyWithoutAdInput
    cv?: cvUncheckedCreateNestedManyWithoutAdInput
  }

  export type adCreateOrConnectWithoutCvAdInput = {
    where: adWhereUniqueInput
    create: XOR<adCreateWithoutCvAdInput, adUncheckedCreateWithoutCvAdInput>
  }

  export type cvUpsertWithoutCvAdInput = {
    update: XOR<cvUpdateWithoutCvAdInput, cvUncheckedUpdateWithoutCvAdInput>
    create: XOR<cvCreateWithoutCvAdInput, cvUncheckedCreateWithoutCvAdInput>
    where?: cvWhereInput
  }

  export type cvUpdateToOneWithWhereWithoutCvAdInput = {
    where?: cvWhereInput
    data: XOR<cvUpdateWithoutCvAdInput, cvUncheckedUpdateWithoutCvAdInput>
  }

  export type cvUpdateWithoutCvAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutCvNestedInput
    ad?: adUpdateOneWithoutCvNestedInput
    company?: companyUpdateOneWithoutCvNestedInput
  }

  export type cvUncheckedUpdateWithoutCvAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adUpsertWithoutCvAdInput = {
    update: XOR<adUpdateWithoutCvAdInput, adUncheckedUpdateWithoutCvAdInput>
    create: XOR<adCreateWithoutCvAdInput, adUncheckedCreateWithoutCvAdInput>
    where?: adWhereInput
  }

  export type adUpdateToOneWithWhereWithoutCvAdInput = {
    where?: adWhereInput
    data: XOR<adUpdateWithoutCvAdInput, adUncheckedUpdateWithoutCvAdInput>
  }

  export type adUpdateWithoutCvAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUpdateManyWithoutAdNestedInput
    company?: companyUpdateOneRequiredWithoutAdsNestedInput
    cv?: cvUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateWithoutCvAdInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedUpdateManyWithoutAdNestedInput
    cv?: cvUncheckedUpdateManyWithoutAdNestedInput
  }

  export type adsCategory_collectionCreateManyCategory_collectionsInput = {
    ad_id: string
  }

  export type adsCategory_collectionUpdateWithoutCategory_collectionsInput = {
    ad?: adUpdateOneRequiredWithoutAdsCategory_collectionsNestedInput
  }

  export type adsCategory_collectionUncheckedUpdateWithoutCategory_collectionsInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type adsCategory_collectionUncheckedUpdateManyWithoutCategory_collectionsInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type category_collectionCreateManyCategoriesInput = {
    id?: string
    name?: string | null
    link?: string | null
  }

  export type category_collectionUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutCategory_collectionsNestedInput
  }

  export type category_collectionUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutCategory_collectionsNestedInput
  }

  export type category_collectionUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cityCreateManyProvinceInput = {
    id?: string
    name?: string | null
  }

  export type cityUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: locationUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: locationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateManyWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type locationCreateManyCityInput = {
    id?: string
    address: string
  }

  export type locationUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    companies?: companyUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    companies?: companyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type cvCreateManyUserInput = {
    id?: string
    ad_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
  }

  export type userCompanyFollowCreateManyUserInput = {
    company_id: string
    followersId?: string | null
  }

  export type followersCreateManyUserInput = {
    id?: string
    company_id: string
  }

  export type cvUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ad?: adUpdateOneWithoutCvNestedInput
    company?: companyUpdateOneWithoutCvNestedInput
    cvAd?: cvAdUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvAd?: cvAdUncheckedUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCompanyFollowUpdateWithoutUserInput = {
    company?: companyUpdateOneRequiredWithoutUserCompanyFollowNestedInput
    followers?: followersUpdateOneWithoutUserCompanyFollowNestedInput
  }

  export type userCompanyFollowUncheckedUpdateWithoutUserInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    followersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCompanyFollowUncheckedUpdateManyWithoutUserInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    followersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type followersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateOneWithoutFollowersNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutFollowersNestedInput
  }

  export type followersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type followersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type userCompanyFollowCreateManyFollowersInput = {
    user_id: string
    company_id: string
  }

  export type userCompanyFollowUpdateWithoutFollowersInput = {
    user?: userUpdateOneRequiredWithoutCompaniesNestedInput
    company?: companyUpdateOneRequiredWithoutUserCompanyFollowNestedInput
  }

  export type userCompanyFollowUncheckedUpdateWithoutFollowersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type userCompanyFollowUncheckedUpdateManyWithoutFollowersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type companyCreateManyLocationInput = {
    id?: string
    created_at?: Date | string
    name: string
    logo: string
    score_company: number
    score_popularity: number
    score_experience_of_job_seekers: number
    score_responsiveness: number
    website: string
    description: string
    slogan: string
    organization_employ: number
    type_of_activity: string
    industry: string
    established_year: Date | string
  }

  export type companyUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutCompanyNestedInput
    ads?: adUpdateManyWithoutCompanyNestedInput
    cv?: cvUpdateManyWithoutCompanyNestedInput
    followers?: followersUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput
    ads?: adUncheckedUpdateManyWithoutCompanyNestedInput
    cv?: cvUncheckedUpdateManyWithoutCompanyNestedInput
    followers?: followersUncheckedUpdateManyWithoutCompanyNestedInput
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    score_company?: FloatFieldUpdateOperationsInput | number
    score_popularity?: FloatFieldUpdateOperationsInput | number
    score_experience_of_job_seekers?: FloatFieldUpdateOperationsInput | number
    score_responsiveness?: FloatFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    organization_employ?: IntFieldUpdateOperationsInput | number
    type_of_activity?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    established_year?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyCompanyInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type adCreateManyCompanyInput = {
    id?: string
    name: string
    price?: JsonNullValueInput | InputJsonValue
    work_time: string
    travel_benefits: string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender: $Enums.gender
    seniority_level: $Enums.seniority_level
    cooperation_type: $Enums.cooperation_type
    important?: boolean
    response?: boolean
    itern?: boolean
    telecommuting?: boolean
    disabledPeople?: boolean
    militaryOrder?: boolean
    created_at?: Date | string
  }

  export type cvCreateManyCompanyInput = {
    id?: string
    user_id: string
    ad_id: string
    status: $Enums.status
    created_at?: Date | string
  }

  export type followersCreateManyCompanyInput = {
    id?: string
    user_id: string
  }

  export type userCompanyFollowCreateManyCompanyInput = {
    user_id: string
    followersId?: string | null
  }

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: cvUpdateManyWithoutUserNestedInput
    companies?: userCompanyFollowUpdateManyWithoutUserNestedInput
    followers?: followersUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: cvUncheckedUpdateManyWithoutUserNestedInput
    companies?: userCompanyFollowUncheckedUpdateManyWithoutUserNestedInput
    followers?: followersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUpdateManyWithoutAdNestedInput
    cvAd?: cvAdUpdateManyWithoutAdNestedInput
    cv?: cvUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adsCategory_collections?: adsCategory_collectionUncheckedUpdateManyWithoutAdNestedInput
    facilitiesAdvantage?: facilitiesAdvantageUncheckedUpdateManyWithoutAdNestedInput
    cvAd?: cvAdUncheckedUpdateManyWithoutAdNestedInput
    cv?: cvUncheckedUpdateManyWithoutAdNestedInput
  }

  export type adUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    work_time?: StringFieldUpdateOperationsInput | string
    travel_benefits?: StringFieldUpdateOperationsInput | string
    age?: JsonNullValueInput | InputJsonValue
    edicational_level?: JsonNullValueInput | InputJsonValue
    key_indicator?: JsonNullValueInput | InputJsonValue
    software_skills?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    facilities?: JsonNullValueInput | InputJsonValue
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    seniority_level?: Enumseniority_levelFieldUpdateOperationsInput | $Enums.seniority_level
    cooperation_type?: Enumcooperation_typeFieldUpdateOperationsInput | $Enums.cooperation_type
    important?: BoolFieldUpdateOperationsInput | boolean
    response?: BoolFieldUpdateOperationsInput | boolean
    itern?: BoolFieldUpdateOperationsInput | boolean
    telecommuting?: BoolFieldUpdateOperationsInput | boolean
    disabledPeople?: BoolFieldUpdateOperationsInput | boolean
    militaryOrder?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cvUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutCvNestedInput
    ad?: adUpdateOneWithoutCvNestedInput
    cvAd?: cvAdUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvAd?: cvAdUncheckedUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneWithoutFollowersNestedInput
    userCompanyFollow?: userCompanyFollowUpdateManyWithoutFollowersNestedInput
  }

  export type followersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    userCompanyFollow?: userCompanyFollowUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type followersUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type userCompanyFollowUpdateWithoutCompanyInput = {
    user?: userUpdateOneRequiredWithoutCompaniesNestedInput
    followers?: followersUpdateOneWithoutUserCompanyFollowNestedInput
  }

  export type userCompanyFollowUncheckedUpdateWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    followersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCompanyFollowUncheckedUpdateManyWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    followersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facilitiesAdvantageCreateManyAdvantageInput = {
    ad_id: string
  }

  export type facilitiesAdvantageUpdateWithoutAdvantageInput = {
    ad?: adUpdateOneRequiredWithoutFacilitiesAdvantageNestedInput
  }

  export type facilitiesAdvantageUncheckedUpdateWithoutAdvantageInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type facilitiesAdvantageUncheckedUpdateManyWithoutAdvantageInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type adsCategory_collectionCreateManyAdInput = {
    category_collection_id: string
  }

  export type facilitiesAdvantageCreateManyAdInput = {
    advantage_id: string
  }

  export type cvAdCreateManyAdInput = {
    cv_id: string
  }

  export type cvCreateManyAdInput = {
    id?: string
    user_id: string
    company_id: string
    status: $Enums.status
    created_at?: Date | string
  }

  export type adsCategory_collectionUpdateWithoutAdInput = {
    category_collections?: category_collectionUpdateOneRequiredWithoutAdsCategory_collectionsNestedInput
  }

  export type adsCategory_collectionUncheckedUpdateWithoutAdInput = {
    category_collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type adsCategory_collectionUncheckedUpdateManyWithoutAdInput = {
    category_collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type facilitiesAdvantageUpdateWithoutAdInput = {
    advantage?: advantageUpdateOneRequiredWithoutFacilitiesAdvantageNestedInput
  }

  export type facilitiesAdvantageUncheckedUpdateWithoutAdInput = {
    advantage_id?: StringFieldUpdateOperationsInput | string
  }

  export type facilitiesAdvantageUncheckedUpdateManyWithoutAdInput = {
    advantage_id?: StringFieldUpdateOperationsInput | string
  }

  export type cvAdUpdateWithoutAdInput = {
    cv?: cvUpdateOneRequiredWithoutCvAdNestedInput
  }

  export type cvAdUncheckedUpdateWithoutAdInput = {
    cv_id?: StringFieldUpdateOperationsInput | string
  }

  export type cvAdUncheckedUpdateManyWithoutAdInput = {
    cv_id?: StringFieldUpdateOperationsInput | string
  }

  export type cvUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutCvNestedInput
    company?: companyUpdateOneWithoutCvNestedInput
    cvAd?: cvAdUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvAd?: cvAdUncheckedUpdateManyWithoutCvNestedInput
  }

  export type cvUncheckedUpdateManyWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cvAdCreateManyCvInput = {
    ad_id: string
  }

  export type cvAdUpdateWithoutCvInput = {
    ad?: adUpdateOneRequiredWithoutCvAdNestedInput
  }

  export type cvAdUncheckedUpdateWithoutCvInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
  }

  export type cvAdUncheckedUpdateManyWithoutCvInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Category_collectionCountOutputTypeDefaultArgs instead
     */
    export type Category_collectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Category_collectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProvinceCountOutputTypeDefaultArgs instead
     */
    export type ProvinceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProvinceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowersCountOutputTypeDefaultArgs instead
     */
    export type FollowersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdvantageCountOutputTypeDefaultArgs instead
     */
    export type AdvantageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdvantageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdCountOutputTypeDefaultArgs instead
     */
    export type AdCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CvCountOutputTypeDefaultArgs instead
     */
    export type CvCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CvCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use category_collectionDefaultArgs instead
     */
    export type category_collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = category_collectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryDefaultArgs instead
     */
    export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use provinceDefaultArgs instead
     */
    export type provinceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = provinceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cityDefaultArgs instead
     */
    export type cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use followersDefaultArgs instead
     */
    export type followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = followersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use locationDefaultArgs instead
     */
    export type locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = locationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use companyDefaultArgs instead
     */
    export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = companyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userCompanyFollowDefaultArgs instead
     */
    export type userCompanyFollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userCompanyFollowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use advantageDefaultArgs instead
     */
    export type advantageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = advantageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adDefaultArgs instead
     */
    export type adArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adsCategory_collectionDefaultArgs instead
     */
    export type adsCategory_collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adsCategory_collectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facilitiesAdvantageDefaultArgs instead
     */
    export type facilitiesAdvantageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facilitiesAdvantageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cvDefaultArgs instead
     */
    export type cvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cvDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cvAdDefaultArgs instead
     */
    export type cvAdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cvAdDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}