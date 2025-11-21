
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
 * Model activites
 * 
 */
export type activites = $Result.DefaultSelection<Prisma.$activitesPayload>
/**
 * Model amortissements
 * 
 */
export type amortissements = $Result.DefaultSelection<Prisma.$amortissementsPayload>
/**
 * Model collaborations
 * 
 */
export type collaborations = $Result.DefaultSelection<Prisma.$collaborationsPayload>
/**
 * Model commentaires
 * 
 */
export type commentaires = $Result.DefaultSelection<Prisma.$commentairesPayload>
/**
 * Model fichiers
 * 
 */
export type fichiers = $Result.DefaultSelection<Prisma.$fichiersPayload>
/**
 * Model flux_tresorerie
 * 
 */
export type flux_tresorerie = $Result.DefaultSelection<Prisma.$flux_tresoreriePayload>
/**
 * Model indicateurs_financiers
 * 
 */
export type indicateurs_financiers = $Result.DefaultSelection<Prisma.$indicateurs_financiersPayload>
/**
 * Model lignes_budget
 * 
 */
export type lignes_budget = $Result.DefaultSelection<Prisma.$lignes_budgetPayload>
/**
 * Model modeles
 * 
 */
export type modeles = $Result.DefaultSelection<Prisma.$modelesPayload>
/**
 * Model organisations
 * 
 */
export type organisations = $Result.DefaultSelection<Prisma.$organisationsPayload>
/**
 * Model projets
 * 
 */
export type projets = $Result.DefaultSelection<Prisma.$projetsPayload>
/**
 * Model ressources
 * 
 */
export type ressources = $Result.DefaultSelection<Prisma.$ressourcesPayload>
/**
 * Model resultats
 * 
 */
export type resultats = $Result.DefaultSelection<Prisma.$resultatsPayload>
/**
 * Model utilisateurs
 * 
 */
export type utilisateurs = $Result.DefaultSelection<Prisma.$utilisateursPayload>
/**
 * Model versions_projet
 * 
 */
export type versions_projet = $Result.DefaultSelection<Prisma.$versions_projetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const utilisateurs_role: {
  user: 'user',
  pro: 'pro',
  admin: 'admin',
  superadmin: 'superadmin'
};

export type utilisateurs_role = (typeof utilisateurs_role)[keyof typeof utilisateurs_role]


export const collaborations_role: {
  owner: 'owner',
  editor: 'editor',
  viewer: 'viewer',
  supervisor: 'supervisor'
};

export type collaborations_role = (typeof collaborations_role)[keyof typeof collaborations_role]


export const projets_type: {
  entreprise: 'entreprise',
  developpement: 'developpement',
  mixte: 'mixte'
};

export type projets_type = (typeof projets_type)[keyof typeof projets_type]


export const ressources_type_ressource: {
  RH: 'RH',
  RF: 'RF',
  RMF: 'RMF',
  RMN: 'RMN',
  SERVICE: 'SERVICE',
  MATERIEL: 'MATERIEL'
};

export type ressources_type_ressource = (typeof ressources_type_ressource)[keyof typeof ressources_type_ressource]


export const projets_statut: {
  brouillon: 'brouillon',
  soumis: 'soumis',
  en_cours_de_r_vision: 'en_cours_de_r_vision',
  approuv_: 'approuv_',
  rejet_: 'rejet_',
  archiv_: 'archiv_'
};

export type projets_statut = (typeof projets_statut)[keyof typeof projets_statut]


export const fichiers_usage: {
  attachment: 'attachment',
  export: 'export',
  template: 'template',
  submission: 'submission'
};

export type fichiers_usage = (typeof fichiers_usage)[keyof typeof fichiers_usage]


export const ressources_frequence: {
  one_time: 'one_time',
  monthly: 'monthly',
  quarterly: 'quarterly',
  annual: 'annual'
};

export type ressources_frequence = (typeof ressources_frequence)[keyof typeof ressources_frequence]

}

export type utilisateurs_role = $Enums.utilisateurs_role

export const utilisateurs_role: typeof $Enums.utilisateurs_role

export type collaborations_role = $Enums.collaborations_role

export const collaborations_role: typeof $Enums.collaborations_role

export type projets_type = $Enums.projets_type

export const projets_type: typeof $Enums.projets_type

export type ressources_type_ressource = $Enums.ressources_type_ressource

export const ressources_type_ressource: typeof $Enums.ressources_type_ressource

export type projets_statut = $Enums.projets_statut

export const projets_statut: typeof $Enums.projets_statut

export type fichiers_usage = $Enums.fichiers_usage

export const fichiers_usage: typeof $Enums.fichiers_usage

export type ressources_frequence = $Enums.ressources_frequence

export const ressources_frequence: typeof $Enums.ressources_frequence

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activites
 * const activites = await prisma.activites.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Activites
   * const activites = await prisma.activites.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.activites`: Exposes CRUD operations for the **activites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activites
    * const activites = await prisma.activites.findMany()
    * ```
    */
  get activites(): Prisma.activitesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amortissements`: Exposes CRUD operations for the **amortissements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amortissements
    * const amortissements = await prisma.amortissements.findMany()
    * ```
    */
  get amortissements(): Prisma.amortissementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaborations`: Exposes CRUD operations for the **collaborations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborations
    * const collaborations = await prisma.collaborations.findMany()
    * ```
    */
  get collaborations(): Prisma.collaborationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaires`: Exposes CRUD operations for the **commentaires** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaires.findMany()
    * ```
    */
  get commentaires(): Prisma.commentairesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fichiers`: Exposes CRUD operations for the **fichiers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fichiers
    * const fichiers = await prisma.fichiers.findMany()
    * ```
    */
  get fichiers(): Prisma.fichiersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flux_tresorerie`: Exposes CRUD operations for the **flux_tresorerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flux_tresoreries
    * const flux_tresoreries = await prisma.flux_tresorerie.findMany()
    * ```
    */
  get flux_tresorerie(): Prisma.flux_tresorerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indicateurs_financiers`: Exposes CRUD operations for the **indicateurs_financiers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indicateurs_financiers
    * const indicateurs_financiers = await prisma.indicateurs_financiers.findMany()
    * ```
    */
  get indicateurs_financiers(): Prisma.indicateurs_financiersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lignes_budget`: Exposes CRUD operations for the **lignes_budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lignes_budgets
    * const lignes_budgets = await prisma.lignes_budget.findMany()
    * ```
    */
  get lignes_budget(): Prisma.lignes_budgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modeles`: Exposes CRUD operations for the **modeles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modeles
    * const modeles = await prisma.modeles.findMany()
    * ```
    */
  get modeles(): Prisma.modelesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organisations`: Exposes CRUD operations for the **organisations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisations.findMany()
    * ```
    */
  get organisations(): Prisma.organisationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projets`: Exposes CRUD operations for the **projets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projets
    * const projets = await prisma.projets.findMany()
    * ```
    */
  get projets(): Prisma.projetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ressources`: Exposes CRUD operations for the **ressources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressources
    * const ressources = await prisma.ressources.findMany()
    * ```
    */
  get ressources(): Prisma.ressourcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultats`: Exposes CRUD operations for the **resultats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultats
    * const resultats = await prisma.resultats.findMany()
    * ```
    */
  get resultats(): Prisma.resultatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateurs`: Exposes CRUD operations for the **utilisateurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateurs.findMany()
    * ```
    */
  get utilisateurs(): Prisma.utilisateursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.versions_projet`: Exposes CRUD operations for the **versions_projet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Versions_projets
    * const versions_projets = await prisma.versions_projet.findMany()
    * ```
    */
  get versions_projet(): Prisma.versions_projetDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    activites: 'activites',
    amortissements: 'amortissements',
    collaborations: 'collaborations',
    commentaires: 'commentaires',
    fichiers: 'fichiers',
    flux_tresorerie: 'flux_tresorerie',
    indicateurs_financiers: 'indicateurs_financiers',
    lignes_budget: 'lignes_budget',
    modeles: 'modeles',
    organisations: 'organisations',
    projets: 'projets',
    ressources: 'ressources',
    resultats: 'resultats',
    utilisateurs: 'utilisateurs',
    versions_projet: 'versions_projet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "activites" | "amortissements" | "collaborations" | "commentaires" | "fichiers" | "flux_tresorerie" | "indicateurs_financiers" | "lignes_budget" | "modeles" | "organisations" | "projets" | "ressources" | "resultats" | "utilisateurs" | "versions_projet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      activites: {
        payload: Prisma.$activitesPayload<ExtArgs>
        fields: Prisma.activitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>
          }
          findFirst: {
            args: Prisma.activitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>
          }
          findMany: {
            args: Prisma.activitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>[]
          }
          create: {
            args: Prisma.activitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>
          }
          createMany: {
            args: Prisma.activitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.activitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>
          }
          update: {
            args: Prisma.activitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>
          }
          deleteMany: {
            args: Prisma.activitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.activitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitesPayload>
          }
          aggregate: {
            args: Prisma.ActivitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivites>
          }
          groupBy: {
            args: Prisma.activitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.activitesCountArgs<ExtArgs>
            result: $Utils.Optional<ActivitesCountAggregateOutputType> | number
          }
        }
      }
      amortissements: {
        payload: Prisma.$amortissementsPayload<ExtArgs>
        fields: Prisma.amortissementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.amortissementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.amortissementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>
          }
          findFirst: {
            args: Prisma.amortissementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.amortissementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>
          }
          findMany: {
            args: Prisma.amortissementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>[]
          }
          create: {
            args: Prisma.amortissementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>
          }
          createMany: {
            args: Prisma.amortissementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.amortissementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>
          }
          update: {
            args: Prisma.amortissementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>
          }
          deleteMany: {
            args: Prisma.amortissementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.amortissementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.amortissementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$amortissementsPayload>
          }
          aggregate: {
            args: Prisma.AmortissementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmortissements>
          }
          groupBy: {
            args: Prisma.amortissementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmortissementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.amortissementsCountArgs<ExtArgs>
            result: $Utils.Optional<AmortissementsCountAggregateOutputType> | number
          }
        }
      }
      collaborations: {
        payload: Prisma.$collaborationsPayload<ExtArgs>
        fields: Prisma.collaborationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.collaborationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.collaborationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>
          }
          findFirst: {
            args: Prisma.collaborationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.collaborationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>
          }
          findMany: {
            args: Prisma.collaborationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>[]
          }
          create: {
            args: Prisma.collaborationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>
          }
          createMany: {
            args: Prisma.collaborationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.collaborationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>
          }
          update: {
            args: Prisma.collaborationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>
          }
          deleteMany: {
            args: Prisma.collaborationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.collaborationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.collaborationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collaborationsPayload>
          }
          aggregate: {
            args: Prisma.CollaborationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborations>
          }
          groupBy: {
            args: Prisma.collaborationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaborationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.collaborationsCountArgs<ExtArgs>
            result: $Utils.Optional<CollaborationsCountAggregateOutputType> | number
          }
        }
      }
      commentaires: {
        payload: Prisma.$commentairesPayload<ExtArgs>
        fields: Prisma.commentairesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentairesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentairesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>
          }
          findFirst: {
            args: Prisma.commentairesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentairesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>
          }
          findMany: {
            args: Prisma.commentairesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>[]
          }
          create: {
            args: Prisma.commentairesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>
          }
          createMany: {
            args: Prisma.commentairesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentairesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>
          }
          update: {
            args: Prisma.commentairesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>
          }
          deleteMany: {
            args: Prisma.commentairesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentairesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentairesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentairesPayload>
          }
          aggregate: {
            args: Prisma.CommentairesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaires>
          }
          groupBy: {
            args: Prisma.commentairesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentairesGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentairesCountArgs<ExtArgs>
            result: $Utils.Optional<CommentairesCountAggregateOutputType> | number
          }
        }
      }
      fichiers: {
        payload: Prisma.$fichiersPayload<ExtArgs>
        fields: Prisma.fichiersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fichiersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fichiersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>
          }
          findFirst: {
            args: Prisma.fichiersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fichiersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>
          }
          findMany: {
            args: Prisma.fichiersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>[]
          }
          create: {
            args: Prisma.fichiersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>
          }
          createMany: {
            args: Prisma.fichiersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fichiersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>
          }
          update: {
            args: Prisma.fichiersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>
          }
          deleteMany: {
            args: Prisma.fichiersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fichiersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fichiersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichiersPayload>
          }
          aggregate: {
            args: Prisma.FichiersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFichiers>
          }
          groupBy: {
            args: Prisma.fichiersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FichiersGroupByOutputType>[]
          }
          count: {
            args: Prisma.fichiersCountArgs<ExtArgs>
            result: $Utils.Optional<FichiersCountAggregateOutputType> | number
          }
        }
      }
      flux_tresorerie: {
        payload: Prisma.$flux_tresoreriePayload<ExtArgs>
        fields: Prisma.flux_tresorerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flux_tresorerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flux_tresorerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>
          }
          findFirst: {
            args: Prisma.flux_tresorerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flux_tresorerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>
          }
          findMany: {
            args: Prisma.flux_tresorerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>[]
          }
          create: {
            args: Prisma.flux_tresorerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>
          }
          createMany: {
            args: Prisma.flux_tresorerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.flux_tresorerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>
          }
          update: {
            args: Prisma.flux_tresorerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>
          }
          deleteMany: {
            args: Prisma.flux_tresorerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flux_tresorerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.flux_tresorerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flux_tresoreriePayload>
          }
          aggregate: {
            args: Prisma.Flux_tresorerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlux_tresorerie>
          }
          groupBy: {
            args: Prisma.flux_tresorerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flux_tresorerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.flux_tresorerieCountArgs<ExtArgs>
            result: $Utils.Optional<Flux_tresorerieCountAggregateOutputType> | number
          }
        }
      }
      indicateurs_financiers: {
        payload: Prisma.$indicateurs_financiersPayload<ExtArgs>
        fields: Prisma.indicateurs_financiersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.indicateurs_financiersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.indicateurs_financiersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>
          }
          findFirst: {
            args: Prisma.indicateurs_financiersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.indicateurs_financiersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>
          }
          findMany: {
            args: Prisma.indicateurs_financiersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>[]
          }
          create: {
            args: Prisma.indicateurs_financiersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>
          }
          createMany: {
            args: Prisma.indicateurs_financiersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.indicateurs_financiersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>
          }
          update: {
            args: Prisma.indicateurs_financiersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>
          }
          deleteMany: {
            args: Prisma.indicateurs_financiersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.indicateurs_financiersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.indicateurs_financiersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indicateurs_financiersPayload>
          }
          aggregate: {
            args: Prisma.Indicateurs_financiersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndicateurs_financiers>
          }
          groupBy: {
            args: Prisma.indicateurs_financiersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Indicateurs_financiersGroupByOutputType>[]
          }
          count: {
            args: Prisma.indicateurs_financiersCountArgs<ExtArgs>
            result: $Utils.Optional<Indicateurs_financiersCountAggregateOutputType> | number
          }
        }
      }
      lignes_budget: {
        payload: Prisma.$lignes_budgetPayload<ExtArgs>
        fields: Prisma.lignes_budgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lignes_budgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lignes_budgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>
          }
          findFirst: {
            args: Prisma.lignes_budgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lignes_budgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>
          }
          findMany: {
            args: Prisma.lignes_budgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>[]
          }
          create: {
            args: Prisma.lignes_budgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>
          }
          createMany: {
            args: Prisma.lignes_budgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lignes_budgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>
          }
          update: {
            args: Prisma.lignes_budgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>
          }
          deleteMany: {
            args: Prisma.lignes_budgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lignes_budgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lignes_budgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lignes_budgetPayload>
          }
          aggregate: {
            args: Prisma.Lignes_budgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLignes_budget>
          }
          groupBy: {
            args: Prisma.lignes_budgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lignes_budgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.lignes_budgetCountArgs<ExtArgs>
            result: $Utils.Optional<Lignes_budgetCountAggregateOutputType> | number
          }
        }
      }
      modeles: {
        payload: Prisma.$modelesPayload<ExtArgs>
        fields: Prisma.modelesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modelesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modelesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>
          }
          findFirst: {
            args: Prisma.modelesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modelesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>
          }
          findMany: {
            args: Prisma.modelesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>[]
          }
          create: {
            args: Prisma.modelesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>
          }
          createMany: {
            args: Prisma.modelesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.modelesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>
          }
          update: {
            args: Prisma.modelesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>
          }
          deleteMany: {
            args: Prisma.modelesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modelesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.modelesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelesPayload>
          }
          aggregate: {
            args: Prisma.ModelesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModeles>
          }
          groupBy: {
            args: Prisma.modelesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelesGroupByOutputType>[]
          }
          count: {
            args: Prisma.modelesCountArgs<ExtArgs>
            result: $Utils.Optional<ModelesCountAggregateOutputType> | number
          }
        }
      }
      organisations: {
        payload: Prisma.$organisationsPayload<ExtArgs>
        fields: Prisma.organisationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organisationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organisationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          findFirst: {
            args: Prisma.organisationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organisationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          findMany: {
            args: Prisma.organisationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>[]
          }
          create: {
            args: Prisma.organisationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          createMany: {
            args: Prisma.organisationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.organisationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          update: {
            args: Prisma.organisationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          deleteMany: {
            args: Prisma.organisationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organisationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organisationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          aggregate: {
            args: Prisma.OrganisationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisations>
          }
          groupBy: {
            args: Prisma.organisationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.organisationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsCountAggregateOutputType> | number
          }
        }
      }
      projets: {
        payload: Prisma.$projetsPayload<ExtArgs>
        fields: Prisma.projetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>
          }
          findFirst: {
            args: Prisma.projetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>
          }
          findMany: {
            args: Prisma.projetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>[]
          }
          create: {
            args: Prisma.projetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>
          }
          createMany: {
            args: Prisma.projetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>
          }
          update: {
            args: Prisma.projetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>
          }
          deleteMany: {
            args: Prisma.projetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetsPayload>
          }
          aggregate: {
            args: Prisma.ProjetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjets>
          }
          groupBy: {
            args: Prisma.projetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projetsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetsCountAggregateOutputType> | number
          }
        }
      }
      ressources: {
        payload: Prisma.$ressourcesPayload<ExtArgs>
        fields: Prisma.ressourcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ressourcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ressourcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>
          }
          findFirst: {
            args: Prisma.ressourcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ressourcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>
          }
          findMany: {
            args: Prisma.ressourcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>[]
          }
          create: {
            args: Prisma.ressourcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>
          }
          createMany: {
            args: Prisma.ressourcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ressourcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>
          }
          update: {
            args: Prisma.ressourcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>
          }
          deleteMany: {
            args: Prisma.ressourcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ressourcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ressourcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressourcesPayload>
          }
          aggregate: {
            args: Prisma.RessourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRessources>
          }
          groupBy: {
            args: Prisma.ressourcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RessourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ressourcesCountArgs<ExtArgs>
            result: $Utils.Optional<RessourcesCountAggregateOutputType> | number
          }
        }
      }
      resultats: {
        payload: Prisma.$resultatsPayload<ExtArgs>
        fields: Prisma.resultatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resultatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resultatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>
          }
          findFirst: {
            args: Prisma.resultatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resultatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>
          }
          findMany: {
            args: Prisma.resultatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>[]
          }
          create: {
            args: Prisma.resultatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>
          }
          createMany: {
            args: Prisma.resultatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.resultatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>
          }
          update: {
            args: Prisma.resultatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>
          }
          deleteMany: {
            args: Prisma.resultatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resultatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.resultatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultatsPayload>
          }
          aggregate: {
            args: Prisma.ResultatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultats>
          }
          groupBy: {
            args: Prisma.resultatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.resultatsCountArgs<ExtArgs>
            result: $Utils.Optional<ResultatsCountAggregateOutputType> | number
          }
        }
      }
      utilisateurs: {
        payload: Prisma.$utilisateursPayload<ExtArgs>
        fields: Prisma.utilisateursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilisateursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilisateursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          findFirst: {
            args: Prisma.utilisateursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilisateursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          findMany: {
            args: Prisma.utilisateursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>[]
          }
          create: {
            args: Prisma.utilisateursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          createMany: {
            args: Prisma.utilisateursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.utilisateursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          update: {
            args: Prisma.utilisateursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          deleteMany: {
            args: Prisma.utilisateursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilisateursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.utilisateursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          aggregate: {
            args: Prisma.UtilisateursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateurs>
          }
          groupBy: {
            args: Prisma.utilisateursGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilisateursCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursCountAggregateOutputType> | number
          }
        }
      }
      versions_projet: {
        payload: Prisma.$versions_projetPayload<ExtArgs>
        fields: Prisma.versions_projetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.versions_projetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.versions_projetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>
          }
          findFirst: {
            args: Prisma.versions_projetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.versions_projetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>
          }
          findMany: {
            args: Prisma.versions_projetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>[]
          }
          create: {
            args: Prisma.versions_projetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>
          }
          createMany: {
            args: Prisma.versions_projetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.versions_projetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>
          }
          update: {
            args: Prisma.versions_projetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>
          }
          deleteMany: {
            args: Prisma.versions_projetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.versions_projetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.versions_projetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versions_projetPayload>
          }
          aggregate: {
            args: Prisma.Versions_projetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVersions_projet>
          }
          groupBy: {
            args: Prisma.versions_projetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Versions_projetGroupByOutputType>[]
          }
          count: {
            args: Prisma.versions_projetCountArgs<ExtArgs>
            result: $Utils.Optional<Versions_projetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    activites?: activitesOmit
    amortissements?: amortissementsOmit
    collaborations?: collaborationsOmit
    commentaires?: commentairesOmit
    fichiers?: fichiersOmit
    flux_tresorerie?: flux_tresorerieOmit
    indicateurs_financiers?: indicateurs_financiersOmit
    lignes_budget?: lignes_budgetOmit
    modeles?: modelesOmit
    organisations?: organisationsOmit
    projets?: projetsOmit
    ressources?: ressourcesOmit
    resultats?: resultatsOmit
    utilisateurs?: utilisateursOmit
    versions_projet?: versions_projetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model activites
   */

  export type AggregateActivites = {
    _count: ActivitesCountAggregateOutputType | null
    _avg: ActivitesAvgAggregateOutputType | null
    _sum: ActivitesSumAggregateOutputType | null
    _min: ActivitesMinAggregateOutputType | null
    _max: ActivitesMaxAggregateOutputType | null
  }

  export type ActivitesAvgAggregateOutputType = {
    id: number | null
    resultat_id: number | null
    projet_id: number | null
    duree_jours: number | null
    ordre: number | null
  }

  export type ActivitesSumAggregateOutputType = {
    id: bigint | null
    resultat_id: bigint | null
    projet_id: bigint | null
    duree_jours: number | null
    ordre: number | null
  }

  export type ActivitesMinAggregateOutputType = {
    id: bigint | null
    resultat_id: bigint | null
    projet_id: bigint | null
    titre: string | null
    description: string | null
    date_debut: Date | null
    date_fin: Date | null
    duree_jours: number | null
    ordre: number | null
    metadonnees: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ActivitesMaxAggregateOutputType = {
    id: bigint | null
    resultat_id: bigint | null
    projet_id: bigint | null
    titre: string | null
    description: string | null
    date_debut: Date | null
    date_fin: Date | null
    duree_jours: number | null
    ordre: number | null
    metadonnees: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ActivitesCountAggregateOutputType = {
    id: number
    resultat_id: number
    projet_id: number
    titre: number
    description: number
    date_debut: number
    date_fin: number
    duree_jours: number
    ordre: number
    metadonnees: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type ActivitesAvgAggregateInputType = {
    id?: true
    resultat_id?: true
    projet_id?: true
    duree_jours?: true
    ordre?: true
  }

  export type ActivitesSumAggregateInputType = {
    id?: true
    resultat_id?: true
    projet_id?: true
    duree_jours?: true
    ordre?: true
  }

  export type ActivitesMinAggregateInputType = {
    id?: true
    resultat_id?: true
    projet_id?: true
    titre?: true
    description?: true
    date_debut?: true
    date_fin?: true
    duree_jours?: true
    ordre?: true
    metadonnees?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ActivitesMaxAggregateInputType = {
    id?: true
    resultat_id?: true
    projet_id?: true
    titre?: true
    description?: true
    date_debut?: true
    date_fin?: true
    duree_jours?: true
    ordre?: true
    metadonnees?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ActivitesCountAggregateInputType = {
    id?: true
    resultat_id?: true
    projet_id?: true
    titre?: true
    description?: true
    date_debut?: true
    date_fin?: true
    duree_jours?: true
    ordre?: true
    metadonnees?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type ActivitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activites to aggregate.
     */
    where?: activitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activites to fetch.
     */
    orderBy?: activitesOrderByWithRelationInput | activitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activites
    **/
    _count?: true | ActivitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitesMaxAggregateInputType
  }

  export type GetActivitesAggregateType<T extends ActivitesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivites[P]>
      : GetScalarType<T[P], AggregateActivites[P]>
  }




  export type activitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitesWhereInput
    orderBy?: activitesOrderByWithAggregationInput | activitesOrderByWithAggregationInput[]
    by: ActivitesScalarFieldEnum[] | ActivitesScalarFieldEnum
    having?: activitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitesCountAggregateInputType | true
    _avg?: ActivitesAvgAggregateInputType
    _sum?: ActivitesSumAggregateInputType
    _min?: ActivitesMinAggregateInputType
    _max?: ActivitesMaxAggregateInputType
  }

  export type ActivitesGroupByOutputType = {
    id: bigint
    resultat_id: bigint
    projet_id: bigint
    titre: string
    description: string | null
    date_debut: Date | null
    date_fin: Date | null
    duree_jours: number | null
    ordre: number | null
    metadonnees: string | null
    cree_le: Date
    modifie_le: Date
    _count: ActivitesCountAggregateOutputType | null
    _avg: ActivitesAvgAggregateOutputType | null
    _sum: ActivitesSumAggregateOutputType | null
    _min: ActivitesMinAggregateOutputType | null
    _max: ActivitesMaxAggregateOutputType | null
  }

  type GetActivitesGroupByPayload<T extends activitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitesGroupByOutputType[P]>
        }
      >
    >


  export type activitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultat_id?: boolean
    projet_id?: boolean
    titre?: boolean
    description?: boolean
    date_debut?: boolean
    date_fin?: boolean
    duree_jours?: boolean
    ordre?: boolean
    metadonnees?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["activites"]>



  export type activitesSelectScalar = {
    id?: boolean
    resultat_id?: boolean
    projet_id?: boolean
    titre?: boolean
    description?: boolean
    date_debut?: boolean
    date_fin?: boolean
    duree_jours?: boolean
    ordre?: boolean
    metadonnees?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type activitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resultat_id" | "projet_id" | "titre" | "description" | "date_debut" | "date_fin" | "duree_jours" | "ordre" | "metadonnees" | "cree_le" | "modifie_le", ExtArgs["result"]["activites"]>

  export type $activitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activites"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      resultat_id: bigint
      projet_id: bigint
      titre: string
      description: string | null
      date_debut: Date | null
      date_fin: Date | null
      duree_jours: number | null
      ordre: number | null
      metadonnees: string | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["activites"]>
    composites: {}
  }

  type activitesGetPayload<S extends boolean | null | undefined | activitesDefaultArgs> = $Result.GetResult<Prisma.$activitesPayload, S>

  type activitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivitesCountAggregateInputType | true
    }

  export interface activitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activites'], meta: { name: 'activites' } }
    /**
     * Find zero or one Activites that matches the filter.
     * @param {activitesFindUniqueArgs} args - Arguments to find a Activites
     * @example
     * // Get one Activites
     * const activites = await prisma.activites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activitesFindUniqueArgs>(args: SelectSubset<T, activitesFindUniqueArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activitesFindUniqueOrThrowArgs} args - Arguments to find a Activites
     * @example
     * // Get one Activites
     * const activites = await prisma.activites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activitesFindUniqueOrThrowArgs>(args: SelectSubset<T, activitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitesFindFirstArgs} args - Arguments to find a Activites
     * @example
     * // Get one Activites
     * const activites = await prisma.activites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activitesFindFirstArgs>(args?: SelectSubset<T, activitesFindFirstArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitesFindFirstOrThrowArgs} args - Arguments to find a Activites
     * @example
     * // Get one Activites
     * const activites = await prisma.activites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activitesFindFirstOrThrowArgs>(args?: SelectSubset<T, activitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activites
     * const activites = await prisma.activites.findMany()
     * 
     * // Get first 10 Activites
     * const activites = await prisma.activites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitesWithIdOnly = await prisma.activites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activitesFindManyArgs>(args?: SelectSubset<T, activitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activites.
     * @param {activitesCreateArgs} args - Arguments to create a Activites.
     * @example
     * // Create one Activites
     * const Activites = await prisma.activites.create({
     *   data: {
     *     // ... data to create a Activites
     *   }
     * })
     * 
     */
    create<T extends activitesCreateArgs>(args: SelectSubset<T, activitesCreateArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activites.
     * @param {activitesCreateManyArgs} args - Arguments to create many Activites.
     * @example
     * // Create many Activites
     * const activites = await prisma.activites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activitesCreateManyArgs>(args?: SelectSubset<T, activitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activites.
     * @param {activitesDeleteArgs} args - Arguments to delete one Activites.
     * @example
     * // Delete one Activites
     * const Activites = await prisma.activites.delete({
     *   where: {
     *     // ... filter to delete one Activites
     *   }
     * })
     * 
     */
    delete<T extends activitesDeleteArgs>(args: SelectSubset<T, activitesDeleteArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activites.
     * @param {activitesUpdateArgs} args - Arguments to update one Activites.
     * @example
     * // Update one Activites
     * const activites = await prisma.activites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activitesUpdateArgs>(args: SelectSubset<T, activitesUpdateArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activites.
     * @param {activitesDeleteManyArgs} args - Arguments to filter Activites to delete.
     * @example
     * // Delete a few Activites
     * const { count } = await prisma.activites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activitesDeleteManyArgs>(args?: SelectSubset<T, activitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activites
     * const activites = await prisma.activites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activitesUpdateManyArgs>(args: SelectSubset<T, activitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activites.
     * @param {activitesUpsertArgs} args - Arguments to update or create a Activites.
     * @example
     * // Update or create a Activites
     * const activites = await prisma.activites.upsert({
     *   create: {
     *     // ... data to create a Activites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activites we want to update
     *   }
     * })
     */
    upsert<T extends activitesUpsertArgs>(args: SelectSubset<T, activitesUpsertArgs<ExtArgs>>): Prisma__activitesClient<$Result.GetResult<Prisma.$activitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitesCountArgs} args - Arguments to filter Activites to count.
     * @example
     * // Count the number of Activites
     * const count = await prisma.activites.count({
     *   where: {
     *     // ... the filter for the Activites we want to count
     *   }
     * })
    **/
    count<T extends activitesCountArgs>(
      args?: Subset<T, activitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivitesAggregateArgs>(args: Subset<T, ActivitesAggregateArgs>): Prisma.PrismaPromise<GetActivitesAggregateType<T>>

    /**
     * Group by Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitesGroupByArgs} args - Group by arguments.
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
      T extends activitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activitesGroupByArgs['orderBy'] }
        : { orderBy?: activitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activites model
   */
  readonly fields: activitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the activites model
   */
  interface activitesFieldRefs {
    readonly id: FieldRef<"activites", 'BigInt'>
    readonly resultat_id: FieldRef<"activites", 'BigInt'>
    readonly projet_id: FieldRef<"activites", 'BigInt'>
    readonly titre: FieldRef<"activites", 'String'>
    readonly description: FieldRef<"activites", 'String'>
    readonly date_debut: FieldRef<"activites", 'DateTime'>
    readonly date_fin: FieldRef<"activites", 'DateTime'>
    readonly duree_jours: FieldRef<"activites", 'Int'>
    readonly ordre: FieldRef<"activites", 'Int'>
    readonly metadonnees: FieldRef<"activites", 'String'>
    readonly cree_le: FieldRef<"activites", 'DateTime'>
    readonly modifie_le: FieldRef<"activites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activites findUnique
   */
  export type activitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * Filter, which activites to fetch.
     */
    where: activitesWhereUniqueInput
  }

  /**
   * activites findUniqueOrThrow
   */
  export type activitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * Filter, which activites to fetch.
     */
    where: activitesWhereUniqueInput
  }

  /**
   * activites findFirst
   */
  export type activitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * Filter, which activites to fetch.
     */
    where?: activitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activites to fetch.
     */
    orderBy?: activitesOrderByWithRelationInput | activitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activites.
     */
    cursor?: activitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activites.
     */
    distinct?: ActivitesScalarFieldEnum | ActivitesScalarFieldEnum[]
  }

  /**
   * activites findFirstOrThrow
   */
  export type activitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * Filter, which activites to fetch.
     */
    where?: activitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activites to fetch.
     */
    orderBy?: activitesOrderByWithRelationInput | activitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activites.
     */
    cursor?: activitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activites.
     */
    distinct?: ActivitesScalarFieldEnum | ActivitesScalarFieldEnum[]
  }

  /**
   * activites findMany
   */
  export type activitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * Filter, which activites to fetch.
     */
    where?: activitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activites to fetch.
     */
    orderBy?: activitesOrderByWithRelationInput | activitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activites.
     */
    cursor?: activitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activites.
     */
    skip?: number
    distinct?: ActivitesScalarFieldEnum | ActivitesScalarFieldEnum[]
  }

  /**
   * activites create
   */
  export type activitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * The data needed to create a activites.
     */
    data: XOR<activitesCreateInput, activitesUncheckedCreateInput>
  }

  /**
   * activites createMany
   */
  export type activitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activites.
     */
    data: activitesCreateManyInput | activitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activites update
   */
  export type activitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * The data needed to update a activites.
     */
    data: XOR<activitesUpdateInput, activitesUncheckedUpdateInput>
    /**
     * Choose, which activites to update.
     */
    where: activitesWhereUniqueInput
  }

  /**
   * activites updateMany
   */
  export type activitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activites.
     */
    data: XOR<activitesUpdateManyMutationInput, activitesUncheckedUpdateManyInput>
    /**
     * Filter which activites to update
     */
    where?: activitesWhereInput
    /**
     * Limit how many activites to update.
     */
    limit?: number
  }

  /**
   * activites upsert
   */
  export type activitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * The filter to search for the activites to update in case it exists.
     */
    where: activitesWhereUniqueInput
    /**
     * In case the activites found by the `where` argument doesn't exist, create a new activites with this data.
     */
    create: XOR<activitesCreateInput, activitesUncheckedCreateInput>
    /**
     * In case the activites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activitesUpdateInput, activitesUncheckedUpdateInput>
  }

  /**
   * activites delete
   */
  export type activitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
    /**
     * Filter which activites to delete.
     */
    where: activitesWhereUniqueInput
  }

  /**
   * activites deleteMany
   */
  export type activitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activites to delete
     */
    where?: activitesWhereInput
    /**
     * Limit how many activites to delete.
     */
    limit?: number
  }

  /**
   * activites without action
   */
  export type activitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activites
     */
    select?: activitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activites
     */
    omit?: activitesOmit<ExtArgs> | null
  }


  /**
   * Model amortissements
   */

  export type AggregateAmortissements = {
    _count: AmortissementsCountAggregateOutputType | null
    _avg: AmortissementsAvgAggregateOutputType | null
    _sum: AmortissementsSumAggregateOutputType | null
    _min: AmortissementsMinAggregateOutputType | null
    _max: AmortissementsMaxAggregateOutputType | null
  }

  export type AmortissementsAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    cout_achat: Decimal | null
    duree_utilite_mois: number | null
    valeur_residuelle: Decimal | null
    amortissement_mensuel: Decimal | null
  }

  export type AmortissementsSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    cout_achat: Decimal | null
    duree_utilite_mois: number | null
    valeur_residuelle: Decimal | null
    amortissement_mensuel: Decimal | null
  }

  export type AmortissementsMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    libelle_actif: string | null
    date_achat: Date | null
    cout_achat: Decimal | null
    duree_utilite_mois: number | null
    valeur_residuelle: Decimal | null
    amortissement_mensuel: Decimal | null
    cree_le: Date | null
  }

  export type AmortissementsMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    libelle_actif: string | null
    date_achat: Date | null
    cout_achat: Decimal | null
    duree_utilite_mois: number | null
    valeur_residuelle: Decimal | null
    amortissement_mensuel: Decimal | null
    cree_le: Date | null
  }

  export type AmortissementsCountAggregateOutputType = {
    id: number
    projet_id: number
    libelle_actif: number
    date_achat: number
    cout_achat: number
    duree_utilite_mois: number
    valeur_residuelle: number
    amortissement_mensuel: number
    cree_le: number
    _all: number
  }


  export type AmortissementsAvgAggregateInputType = {
    id?: true
    projet_id?: true
    cout_achat?: true
    duree_utilite_mois?: true
    valeur_residuelle?: true
    amortissement_mensuel?: true
  }

  export type AmortissementsSumAggregateInputType = {
    id?: true
    projet_id?: true
    cout_achat?: true
    duree_utilite_mois?: true
    valeur_residuelle?: true
    amortissement_mensuel?: true
  }

  export type AmortissementsMinAggregateInputType = {
    id?: true
    projet_id?: true
    libelle_actif?: true
    date_achat?: true
    cout_achat?: true
    duree_utilite_mois?: true
    valeur_residuelle?: true
    amortissement_mensuel?: true
    cree_le?: true
  }

  export type AmortissementsMaxAggregateInputType = {
    id?: true
    projet_id?: true
    libelle_actif?: true
    date_achat?: true
    cout_achat?: true
    duree_utilite_mois?: true
    valeur_residuelle?: true
    amortissement_mensuel?: true
    cree_le?: true
  }

  export type AmortissementsCountAggregateInputType = {
    id?: true
    projet_id?: true
    libelle_actif?: true
    date_achat?: true
    cout_achat?: true
    duree_utilite_mois?: true
    valeur_residuelle?: true
    amortissement_mensuel?: true
    cree_le?: true
    _all?: true
  }

  export type AmortissementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which amortissements to aggregate.
     */
    where?: amortissementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amortissements to fetch.
     */
    orderBy?: amortissementsOrderByWithRelationInput | amortissementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: amortissementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amortissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amortissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned amortissements
    **/
    _count?: true | AmortissementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmortissementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmortissementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmortissementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmortissementsMaxAggregateInputType
  }

  export type GetAmortissementsAggregateType<T extends AmortissementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAmortissements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmortissements[P]>
      : GetScalarType<T[P], AggregateAmortissements[P]>
  }




  export type amortissementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: amortissementsWhereInput
    orderBy?: amortissementsOrderByWithAggregationInput | amortissementsOrderByWithAggregationInput[]
    by: AmortissementsScalarFieldEnum[] | AmortissementsScalarFieldEnum
    having?: amortissementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmortissementsCountAggregateInputType | true
    _avg?: AmortissementsAvgAggregateInputType
    _sum?: AmortissementsSumAggregateInputType
    _min?: AmortissementsMinAggregateInputType
    _max?: AmortissementsMaxAggregateInputType
  }

  export type AmortissementsGroupByOutputType = {
    id: bigint
    projet_id: bigint
    libelle_actif: string
    date_achat: Date | null
    cout_achat: Decimal | null
    duree_utilite_mois: number | null
    valeur_residuelle: Decimal | null
    amortissement_mensuel: Decimal | null
    cree_le: Date
    _count: AmortissementsCountAggregateOutputType | null
    _avg: AmortissementsAvgAggregateOutputType | null
    _sum: AmortissementsSumAggregateOutputType | null
    _min: AmortissementsMinAggregateOutputType | null
    _max: AmortissementsMaxAggregateOutputType | null
  }

  type GetAmortissementsGroupByPayload<T extends amortissementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmortissementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmortissementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmortissementsGroupByOutputType[P]>
            : GetScalarType<T[P], AmortissementsGroupByOutputType[P]>
        }
      >
    >


  export type amortissementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    libelle_actif?: boolean
    date_achat?: boolean
    cout_achat?: boolean
    duree_utilite_mois?: boolean
    valeur_residuelle?: boolean
    amortissement_mensuel?: boolean
    cree_le?: boolean
  }, ExtArgs["result"]["amortissements"]>



  export type amortissementsSelectScalar = {
    id?: boolean
    projet_id?: boolean
    libelle_actif?: boolean
    date_achat?: boolean
    cout_achat?: boolean
    duree_utilite_mois?: boolean
    valeur_residuelle?: boolean
    amortissement_mensuel?: boolean
    cree_le?: boolean
  }

  export type amortissementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "libelle_actif" | "date_achat" | "cout_achat" | "duree_utilite_mois" | "valeur_residuelle" | "amortissement_mensuel" | "cree_le", ExtArgs["result"]["amortissements"]>

  export type $amortissementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "amortissements"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      libelle_actif: string
      date_achat: Date | null
      cout_achat: Prisma.Decimal | null
      duree_utilite_mois: number | null
      valeur_residuelle: Prisma.Decimal | null
      amortissement_mensuel: Prisma.Decimal | null
      cree_le: Date
    }, ExtArgs["result"]["amortissements"]>
    composites: {}
  }

  type amortissementsGetPayload<S extends boolean | null | undefined | amortissementsDefaultArgs> = $Result.GetResult<Prisma.$amortissementsPayload, S>

  type amortissementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<amortissementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmortissementsCountAggregateInputType | true
    }

  export interface amortissementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['amortissements'], meta: { name: 'amortissements' } }
    /**
     * Find zero or one Amortissements that matches the filter.
     * @param {amortissementsFindUniqueArgs} args - Arguments to find a Amortissements
     * @example
     * // Get one Amortissements
     * const amortissements = await prisma.amortissements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends amortissementsFindUniqueArgs>(args: SelectSubset<T, amortissementsFindUniqueArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amortissements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {amortissementsFindUniqueOrThrowArgs} args - Arguments to find a Amortissements
     * @example
     * // Get one Amortissements
     * const amortissements = await prisma.amortissements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends amortissementsFindUniqueOrThrowArgs>(args: SelectSubset<T, amortissementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amortissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amortissementsFindFirstArgs} args - Arguments to find a Amortissements
     * @example
     * // Get one Amortissements
     * const amortissements = await prisma.amortissements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends amortissementsFindFirstArgs>(args?: SelectSubset<T, amortissementsFindFirstArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amortissements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amortissementsFindFirstOrThrowArgs} args - Arguments to find a Amortissements
     * @example
     * // Get one Amortissements
     * const amortissements = await prisma.amortissements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends amortissementsFindFirstOrThrowArgs>(args?: SelectSubset<T, amortissementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amortissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amortissementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amortissements
     * const amortissements = await prisma.amortissements.findMany()
     * 
     * // Get first 10 Amortissements
     * const amortissements = await prisma.amortissements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amortissementsWithIdOnly = await prisma.amortissements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends amortissementsFindManyArgs>(args?: SelectSubset<T, amortissementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amortissements.
     * @param {amortissementsCreateArgs} args - Arguments to create a Amortissements.
     * @example
     * // Create one Amortissements
     * const Amortissements = await prisma.amortissements.create({
     *   data: {
     *     // ... data to create a Amortissements
     *   }
     * })
     * 
     */
    create<T extends amortissementsCreateArgs>(args: SelectSubset<T, amortissementsCreateArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amortissements.
     * @param {amortissementsCreateManyArgs} args - Arguments to create many Amortissements.
     * @example
     * // Create many Amortissements
     * const amortissements = await prisma.amortissements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends amortissementsCreateManyArgs>(args?: SelectSubset<T, amortissementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Amortissements.
     * @param {amortissementsDeleteArgs} args - Arguments to delete one Amortissements.
     * @example
     * // Delete one Amortissements
     * const Amortissements = await prisma.amortissements.delete({
     *   where: {
     *     // ... filter to delete one Amortissements
     *   }
     * })
     * 
     */
    delete<T extends amortissementsDeleteArgs>(args: SelectSubset<T, amortissementsDeleteArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amortissements.
     * @param {amortissementsUpdateArgs} args - Arguments to update one Amortissements.
     * @example
     * // Update one Amortissements
     * const amortissements = await prisma.amortissements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends amortissementsUpdateArgs>(args: SelectSubset<T, amortissementsUpdateArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amortissements.
     * @param {amortissementsDeleteManyArgs} args - Arguments to filter Amortissements to delete.
     * @example
     * // Delete a few Amortissements
     * const { count } = await prisma.amortissements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends amortissementsDeleteManyArgs>(args?: SelectSubset<T, amortissementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amortissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amortissementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amortissements
     * const amortissements = await prisma.amortissements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends amortissementsUpdateManyArgs>(args: SelectSubset<T, amortissementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Amortissements.
     * @param {amortissementsUpsertArgs} args - Arguments to update or create a Amortissements.
     * @example
     * // Update or create a Amortissements
     * const amortissements = await prisma.amortissements.upsert({
     *   create: {
     *     // ... data to create a Amortissements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amortissements we want to update
     *   }
     * })
     */
    upsert<T extends amortissementsUpsertArgs>(args: SelectSubset<T, amortissementsUpsertArgs<ExtArgs>>): Prisma__amortissementsClient<$Result.GetResult<Prisma.$amortissementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amortissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amortissementsCountArgs} args - Arguments to filter Amortissements to count.
     * @example
     * // Count the number of Amortissements
     * const count = await prisma.amortissements.count({
     *   where: {
     *     // ... the filter for the Amortissements we want to count
     *   }
     * })
    **/
    count<T extends amortissementsCountArgs>(
      args?: Subset<T, amortissementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmortissementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amortissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortissementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmortissementsAggregateArgs>(args: Subset<T, AmortissementsAggregateArgs>): Prisma.PrismaPromise<GetAmortissementsAggregateType<T>>

    /**
     * Group by Amortissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amortissementsGroupByArgs} args - Group by arguments.
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
      T extends amortissementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: amortissementsGroupByArgs['orderBy'] }
        : { orderBy?: amortissementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, amortissementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmortissementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the amortissements model
   */
  readonly fields: amortissementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for amortissements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__amortissementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the amortissements model
   */
  interface amortissementsFieldRefs {
    readonly id: FieldRef<"amortissements", 'BigInt'>
    readonly projet_id: FieldRef<"amortissements", 'BigInt'>
    readonly libelle_actif: FieldRef<"amortissements", 'String'>
    readonly date_achat: FieldRef<"amortissements", 'DateTime'>
    readonly cout_achat: FieldRef<"amortissements", 'Decimal'>
    readonly duree_utilite_mois: FieldRef<"amortissements", 'Int'>
    readonly valeur_residuelle: FieldRef<"amortissements", 'Decimal'>
    readonly amortissement_mensuel: FieldRef<"amortissements", 'Decimal'>
    readonly cree_le: FieldRef<"amortissements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * amortissements findUnique
   */
  export type amortissementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * Filter, which amortissements to fetch.
     */
    where: amortissementsWhereUniqueInput
  }

  /**
   * amortissements findUniqueOrThrow
   */
  export type amortissementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * Filter, which amortissements to fetch.
     */
    where: amortissementsWhereUniqueInput
  }

  /**
   * amortissements findFirst
   */
  export type amortissementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * Filter, which amortissements to fetch.
     */
    where?: amortissementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amortissements to fetch.
     */
    orderBy?: amortissementsOrderByWithRelationInput | amortissementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for amortissements.
     */
    cursor?: amortissementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amortissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amortissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of amortissements.
     */
    distinct?: AmortissementsScalarFieldEnum | AmortissementsScalarFieldEnum[]
  }

  /**
   * amortissements findFirstOrThrow
   */
  export type amortissementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * Filter, which amortissements to fetch.
     */
    where?: amortissementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amortissements to fetch.
     */
    orderBy?: amortissementsOrderByWithRelationInput | amortissementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for amortissements.
     */
    cursor?: amortissementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amortissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amortissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of amortissements.
     */
    distinct?: AmortissementsScalarFieldEnum | AmortissementsScalarFieldEnum[]
  }

  /**
   * amortissements findMany
   */
  export type amortissementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * Filter, which amortissements to fetch.
     */
    where?: amortissementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amortissements to fetch.
     */
    orderBy?: amortissementsOrderByWithRelationInput | amortissementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing amortissements.
     */
    cursor?: amortissementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amortissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amortissements.
     */
    skip?: number
    distinct?: AmortissementsScalarFieldEnum | AmortissementsScalarFieldEnum[]
  }

  /**
   * amortissements create
   */
  export type amortissementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * The data needed to create a amortissements.
     */
    data: XOR<amortissementsCreateInput, amortissementsUncheckedCreateInput>
  }

  /**
   * amortissements createMany
   */
  export type amortissementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many amortissements.
     */
    data: amortissementsCreateManyInput | amortissementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * amortissements update
   */
  export type amortissementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * The data needed to update a amortissements.
     */
    data: XOR<amortissementsUpdateInput, amortissementsUncheckedUpdateInput>
    /**
     * Choose, which amortissements to update.
     */
    where: amortissementsWhereUniqueInput
  }

  /**
   * amortissements updateMany
   */
  export type amortissementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update amortissements.
     */
    data: XOR<amortissementsUpdateManyMutationInput, amortissementsUncheckedUpdateManyInput>
    /**
     * Filter which amortissements to update
     */
    where?: amortissementsWhereInput
    /**
     * Limit how many amortissements to update.
     */
    limit?: number
  }

  /**
   * amortissements upsert
   */
  export type amortissementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * The filter to search for the amortissements to update in case it exists.
     */
    where: amortissementsWhereUniqueInput
    /**
     * In case the amortissements found by the `where` argument doesn't exist, create a new amortissements with this data.
     */
    create: XOR<amortissementsCreateInput, amortissementsUncheckedCreateInput>
    /**
     * In case the amortissements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<amortissementsUpdateInput, amortissementsUncheckedUpdateInput>
  }

  /**
   * amortissements delete
   */
  export type amortissementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
    /**
     * Filter which amortissements to delete.
     */
    where: amortissementsWhereUniqueInput
  }

  /**
   * amortissements deleteMany
   */
  export type amortissementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which amortissements to delete
     */
    where?: amortissementsWhereInput
    /**
     * Limit how many amortissements to delete.
     */
    limit?: number
  }

  /**
   * amortissements without action
   */
  export type amortissementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the amortissements
     */
    select?: amortissementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the amortissements
     */
    omit?: amortissementsOmit<ExtArgs> | null
  }


  /**
   * Model collaborations
   */

  export type AggregateCollaborations = {
    _count: CollaborationsCountAggregateOutputType | null
    _avg: CollaborationsAvgAggregateOutputType | null
    _sum: CollaborationsSumAggregateOutputType | null
    _min: CollaborationsMinAggregateOutputType | null
    _max: CollaborationsMaxAggregateOutputType | null
  }

  export type CollaborationsAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    utilisateur_id: number | null
    invite_par: number | null
  }

  export type CollaborationsSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    utilisateur_id: bigint | null
    invite_par: bigint | null
  }

  export type CollaborationsMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    utilisateur_id: bigint | null
    role: $Enums.collaborations_role | null
    invite_par: bigint | null
    accepte_le: Date | null
    cree_le: Date | null
  }

  export type CollaborationsMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    utilisateur_id: bigint | null
    role: $Enums.collaborations_role | null
    invite_par: bigint | null
    accepte_le: Date | null
    cree_le: Date | null
  }

  export type CollaborationsCountAggregateOutputType = {
    id: number
    projet_id: number
    utilisateur_id: number
    role: number
    invite_par: number
    accepte_le: number
    cree_le: number
    _all: number
  }


  export type CollaborationsAvgAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    invite_par?: true
  }

  export type CollaborationsSumAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    invite_par?: true
  }

  export type CollaborationsMinAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    role?: true
    invite_par?: true
    accepte_le?: true
    cree_le?: true
  }

  export type CollaborationsMaxAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    role?: true
    invite_par?: true
    accepte_le?: true
    cree_le?: true
  }

  export type CollaborationsCountAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    role?: true
    invite_par?: true
    accepte_le?: true
    cree_le?: true
    _all?: true
  }

  export type CollaborationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collaborations to aggregate.
     */
    where?: collaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationsOrderByWithRelationInput | collaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: collaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned collaborations
    **/
    _count?: true | CollaborationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollaborationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollaborationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaborationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaborationsMaxAggregateInputType
  }

  export type GetCollaborationsAggregateType<T extends CollaborationsAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborations[P]>
      : GetScalarType<T[P], AggregateCollaborations[P]>
  }




  export type collaborationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collaborationsWhereInput
    orderBy?: collaborationsOrderByWithAggregationInput | collaborationsOrderByWithAggregationInput[]
    by: CollaborationsScalarFieldEnum[] | CollaborationsScalarFieldEnum
    having?: collaborationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaborationsCountAggregateInputType | true
    _avg?: CollaborationsAvgAggregateInputType
    _sum?: CollaborationsSumAggregateInputType
    _min?: CollaborationsMinAggregateInputType
    _max?: CollaborationsMaxAggregateInputType
  }

  export type CollaborationsGroupByOutputType = {
    id: bigint
    projet_id: bigint
    utilisateur_id: bigint
    role: $Enums.collaborations_role | null
    invite_par: bigint | null
    accepte_le: Date | null
    cree_le: Date
    _count: CollaborationsCountAggregateOutputType | null
    _avg: CollaborationsAvgAggregateOutputType | null
    _sum: CollaborationsSumAggregateOutputType | null
    _min: CollaborationsMinAggregateOutputType | null
    _max: CollaborationsMaxAggregateOutputType | null
  }

  type GetCollaborationsGroupByPayload<T extends collaborationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaborationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaborationsGroupByOutputType[P]>
            : GetScalarType<T[P], CollaborationsGroupByOutputType[P]>
        }
      >
    >


  export type collaborationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    utilisateur_id?: boolean
    role?: boolean
    invite_par?: boolean
    accepte_le?: boolean
    cree_le?: boolean
  }, ExtArgs["result"]["collaborations"]>



  export type collaborationsSelectScalar = {
    id?: boolean
    projet_id?: boolean
    utilisateur_id?: boolean
    role?: boolean
    invite_par?: boolean
    accepte_le?: boolean
    cree_le?: boolean
  }

  export type collaborationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "utilisateur_id" | "role" | "invite_par" | "accepte_le" | "cree_le", ExtArgs["result"]["collaborations"]>

  export type $collaborationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "collaborations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      utilisateur_id: bigint
      role: $Enums.collaborations_role | null
      invite_par: bigint | null
      accepte_le: Date | null
      cree_le: Date
    }, ExtArgs["result"]["collaborations"]>
    composites: {}
  }

  type collaborationsGetPayload<S extends boolean | null | undefined | collaborationsDefaultArgs> = $Result.GetResult<Prisma.$collaborationsPayload, S>

  type collaborationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<collaborationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaborationsCountAggregateInputType | true
    }

  export interface collaborationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collaborations'], meta: { name: 'collaborations' } }
    /**
     * Find zero or one Collaborations that matches the filter.
     * @param {collaborationsFindUniqueArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends collaborationsFindUniqueArgs>(args: SelectSubset<T, collaborationsFindUniqueArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaborations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {collaborationsFindUniqueOrThrowArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends collaborationsFindUniqueOrThrowArgs>(args: SelectSubset<T, collaborationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationsFindFirstArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends collaborationsFindFirstArgs>(args?: SelectSubset<T, collaborationsFindFirstArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationsFindFirstOrThrowArgs} args - Arguments to find a Collaborations
     * @example
     * // Get one Collaborations
     * const collaborations = await prisma.collaborations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends collaborationsFindFirstOrThrowArgs>(args?: SelectSubset<T, collaborationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborations
     * const collaborations = await prisma.collaborations.findMany()
     * 
     * // Get first 10 Collaborations
     * const collaborations = await prisma.collaborations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaborationsWithIdOnly = await prisma.collaborations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends collaborationsFindManyArgs>(args?: SelectSubset<T, collaborationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaborations.
     * @param {collaborationsCreateArgs} args - Arguments to create a Collaborations.
     * @example
     * // Create one Collaborations
     * const Collaborations = await prisma.collaborations.create({
     *   data: {
     *     // ... data to create a Collaborations
     *   }
     * })
     * 
     */
    create<T extends collaborationsCreateArgs>(args: SelectSubset<T, collaborationsCreateArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborations.
     * @param {collaborationsCreateManyArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaborations = await prisma.collaborations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends collaborationsCreateManyArgs>(args?: SelectSubset<T, collaborationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collaborations.
     * @param {collaborationsDeleteArgs} args - Arguments to delete one Collaborations.
     * @example
     * // Delete one Collaborations
     * const Collaborations = await prisma.collaborations.delete({
     *   where: {
     *     // ... filter to delete one Collaborations
     *   }
     * })
     * 
     */
    delete<T extends collaborationsDeleteArgs>(args: SelectSubset<T, collaborationsDeleteArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaborations.
     * @param {collaborationsUpdateArgs} args - Arguments to update one Collaborations.
     * @example
     * // Update one Collaborations
     * const collaborations = await prisma.collaborations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends collaborationsUpdateArgs>(args: SelectSubset<T, collaborationsUpdateArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborations.
     * @param {collaborationsDeleteManyArgs} args - Arguments to filter Collaborations to delete.
     * @example
     * // Delete a few Collaborations
     * const { count } = await prisma.collaborations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends collaborationsDeleteManyArgs>(args?: SelectSubset<T, collaborationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborations
     * const collaborations = await prisma.collaborations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends collaborationsUpdateManyArgs>(args: SelectSubset<T, collaborationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collaborations.
     * @param {collaborationsUpsertArgs} args - Arguments to update or create a Collaborations.
     * @example
     * // Update or create a Collaborations
     * const collaborations = await prisma.collaborations.upsert({
     *   create: {
     *     // ... data to create a Collaborations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborations we want to update
     *   }
     * })
     */
    upsert<T extends collaborationsUpsertArgs>(args: SelectSubset<T, collaborationsUpsertArgs<ExtArgs>>): Prisma__collaborationsClient<$Result.GetResult<Prisma.$collaborationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationsCountArgs} args - Arguments to filter Collaborations to count.
     * @example
     * // Count the number of Collaborations
     * const count = await prisma.collaborations.count({
     *   where: {
     *     // ... the filter for the Collaborations we want to count
     *   }
     * })
    **/
    count<T extends collaborationsCountArgs>(
      args?: Subset<T, collaborationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollaborationsAggregateArgs>(args: Subset<T, CollaborationsAggregateArgs>): Prisma.PrismaPromise<GetCollaborationsAggregateType<T>>

    /**
     * Group by Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationsGroupByArgs} args - Group by arguments.
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
      T extends collaborationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collaborationsGroupByArgs['orderBy'] }
        : { orderBy?: collaborationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, collaborationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaborationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the collaborations model
   */
  readonly fields: collaborationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collaborations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collaborationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the collaborations model
   */
  interface collaborationsFieldRefs {
    readonly id: FieldRef<"collaborations", 'BigInt'>
    readonly projet_id: FieldRef<"collaborations", 'BigInt'>
    readonly utilisateur_id: FieldRef<"collaborations", 'BigInt'>
    readonly role: FieldRef<"collaborations", 'collaborations_role'>
    readonly invite_par: FieldRef<"collaborations", 'BigInt'>
    readonly accepte_le: FieldRef<"collaborations", 'DateTime'>
    readonly cree_le: FieldRef<"collaborations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * collaborations findUnique
   */
  export type collaborationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * Filter, which collaborations to fetch.
     */
    where: collaborationsWhereUniqueInput
  }

  /**
   * collaborations findUniqueOrThrow
   */
  export type collaborationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * Filter, which collaborations to fetch.
     */
    where: collaborationsWhereUniqueInput
  }

  /**
   * collaborations findFirst
   */
  export type collaborationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * Filter, which collaborations to fetch.
     */
    where?: collaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationsOrderByWithRelationInput | collaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collaborations.
     */
    cursor?: collaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collaborations.
     */
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * collaborations findFirstOrThrow
   */
  export type collaborationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * Filter, which collaborations to fetch.
     */
    where?: collaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationsOrderByWithRelationInput | collaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collaborations.
     */
    cursor?: collaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collaborations.
     */
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * collaborations findMany
   */
  export type collaborationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * Filter, which collaborations to fetch.
     */
    where?: collaborationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationsOrderByWithRelationInput | collaborationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing collaborations.
     */
    cursor?: collaborationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collaborations.
     */
    skip?: number
    distinct?: CollaborationsScalarFieldEnum | CollaborationsScalarFieldEnum[]
  }

  /**
   * collaborations create
   */
  export type collaborationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * The data needed to create a collaborations.
     */
    data: XOR<collaborationsCreateInput, collaborationsUncheckedCreateInput>
  }

  /**
   * collaborations createMany
   */
  export type collaborationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collaborations.
     */
    data: collaborationsCreateManyInput | collaborationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * collaborations update
   */
  export type collaborationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * The data needed to update a collaborations.
     */
    data: XOR<collaborationsUpdateInput, collaborationsUncheckedUpdateInput>
    /**
     * Choose, which collaborations to update.
     */
    where: collaborationsWhereUniqueInput
  }

  /**
   * collaborations updateMany
   */
  export type collaborationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collaborations.
     */
    data: XOR<collaborationsUpdateManyMutationInput, collaborationsUncheckedUpdateManyInput>
    /**
     * Filter which collaborations to update
     */
    where?: collaborationsWhereInput
    /**
     * Limit how many collaborations to update.
     */
    limit?: number
  }

  /**
   * collaborations upsert
   */
  export type collaborationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * The filter to search for the collaborations to update in case it exists.
     */
    where: collaborationsWhereUniqueInput
    /**
     * In case the collaborations found by the `where` argument doesn't exist, create a new collaborations with this data.
     */
    create: XOR<collaborationsCreateInput, collaborationsUncheckedCreateInput>
    /**
     * In case the collaborations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collaborationsUpdateInput, collaborationsUncheckedUpdateInput>
  }

  /**
   * collaborations delete
   */
  export type collaborationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
    /**
     * Filter which collaborations to delete.
     */
    where: collaborationsWhereUniqueInput
  }

  /**
   * collaborations deleteMany
   */
  export type collaborationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collaborations to delete
     */
    where?: collaborationsWhereInput
    /**
     * Limit how many collaborations to delete.
     */
    limit?: number
  }

  /**
   * collaborations without action
   */
  export type collaborationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaborations
     */
    select?: collaborationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collaborations
     */
    omit?: collaborationsOmit<ExtArgs> | null
  }


  /**
   * Model commentaires
   */

  export type AggregateCommentaires = {
    _count: CommentairesCountAggregateOutputType | null
    _avg: CommentairesAvgAggregateOutputType | null
    _sum: CommentairesSumAggregateOutputType | null
    _min: CommentairesMinAggregateOutputType | null
    _max: CommentairesMaxAggregateOutputType | null
  }

  export type CommentairesAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    utilisateur_id: number | null
    commentaire_parent_id: number | null
  }

  export type CommentairesSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    utilisateur_id: bigint | null
    commentaire_parent_id: bigint | null
  }

  export type CommentairesMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    utilisateur_id: bigint | null
    commentaire_parent_id: bigint | null
    contenu: string | null
    metadonnees: string | null
    cree_le: Date | null
  }

  export type CommentairesMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    utilisateur_id: bigint | null
    commentaire_parent_id: bigint | null
    contenu: string | null
    metadonnees: string | null
    cree_le: Date | null
  }

  export type CommentairesCountAggregateOutputType = {
    id: number
    projet_id: number
    utilisateur_id: number
    commentaire_parent_id: number
    contenu: number
    metadonnees: number
    cree_le: number
    _all: number
  }


  export type CommentairesAvgAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    commentaire_parent_id?: true
  }

  export type CommentairesSumAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    commentaire_parent_id?: true
  }

  export type CommentairesMinAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    commentaire_parent_id?: true
    contenu?: true
    metadonnees?: true
    cree_le?: true
  }

  export type CommentairesMaxAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    commentaire_parent_id?: true
    contenu?: true
    metadonnees?: true
    cree_le?: true
  }

  export type CommentairesCountAggregateInputType = {
    id?: true
    projet_id?: true
    utilisateur_id?: true
    commentaire_parent_id?: true
    contenu?: true
    metadonnees?: true
    cree_le?: true
    _all?: true
  }

  export type CommentairesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commentaires to aggregate.
     */
    where?: commentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commentaires to fetch.
     */
    orderBy?: commentairesOrderByWithRelationInput | commentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commentaires
    **/
    _count?: true | CommentairesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentairesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentairesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentairesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentairesMaxAggregateInputType
  }

  export type GetCommentairesAggregateType<T extends CommentairesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaires]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaires[P]>
      : GetScalarType<T[P], AggregateCommentaires[P]>
  }




  export type commentairesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentairesWhereInput
    orderBy?: commentairesOrderByWithAggregationInput | commentairesOrderByWithAggregationInput[]
    by: CommentairesScalarFieldEnum[] | CommentairesScalarFieldEnum
    having?: commentairesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentairesCountAggregateInputType | true
    _avg?: CommentairesAvgAggregateInputType
    _sum?: CommentairesSumAggregateInputType
    _min?: CommentairesMinAggregateInputType
    _max?: CommentairesMaxAggregateInputType
  }

  export type CommentairesGroupByOutputType = {
    id: bigint
    projet_id: bigint
    utilisateur_id: bigint
    commentaire_parent_id: bigint | null
    contenu: string
    metadonnees: string | null
    cree_le: Date
    _count: CommentairesCountAggregateOutputType | null
    _avg: CommentairesAvgAggregateOutputType | null
    _sum: CommentairesSumAggregateOutputType | null
    _min: CommentairesMinAggregateOutputType | null
    _max: CommentairesMaxAggregateOutputType | null
  }

  type GetCommentairesGroupByPayload<T extends commentairesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentairesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentairesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentairesGroupByOutputType[P]>
            : GetScalarType<T[P], CommentairesGroupByOutputType[P]>
        }
      >
    >


  export type commentairesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    utilisateur_id?: boolean
    commentaire_parent_id?: boolean
    contenu?: boolean
    metadonnees?: boolean
    cree_le?: boolean
  }, ExtArgs["result"]["commentaires"]>



  export type commentairesSelectScalar = {
    id?: boolean
    projet_id?: boolean
    utilisateur_id?: boolean
    commentaire_parent_id?: boolean
    contenu?: boolean
    metadonnees?: boolean
    cree_le?: boolean
  }

  export type commentairesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "utilisateur_id" | "commentaire_parent_id" | "contenu" | "metadonnees" | "cree_le", ExtArgs["result"]["commentaires"]>

  export type $commentairesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "commentaires"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      utilisateur_id: bigint
      commentaire_parent_id: bigint | null
      contenu: string
      metadonnees: string | null
      cree_le: Date
    }, ExtArgs["result"]["commentaires"]>
    composites: {}
  }

  type commentairesGetPayload<S extends boolean | null | undefined | commentairesDefaultArgs> = $Result.GetResult<Prisma.$commentairesPayload, S>

  type commentairesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentairesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentairesCountAggregateInputType | true
    }

  export interface commentairesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['commentaires'], meta: { name: 'commentaires' } }
    /**
     * Find zero or one Commentaires that matches the filter.
     * @param {commentairesFindUniqueArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentairesFindUniqueArgs>(args: SelectSubset<T, commentairesFindUniqueArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaires that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentairesFindUniqueOrThrowArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentairesFindUniqueOrThrowArgs>(args: SelectSubset<T, commentairesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentairesFindFirstArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentairesFindFirstArgs>(args?: SelectSubset<T, commentairesFindFirstArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaires that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentairesFindFirstOrThrowArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentairesFindFirstOrThrowArgs>(args?: SelectSubset<T, commentairesFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentairesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaires.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaires.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentairesWithIdOnly = await prisma.commentaires.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentairesFindManyArgs>(args?: SelectSubset<T, commentairesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaires.
     * @param {commentairesCreateArgs} args - Arguments to create a Commentaires.
     * @example
     * // Create one Commentaires
     * const Commentaires = await prisma.commentaires.create({
     *   data: {
     *     // ... data to create a Commentaires
     *   }
     * })
     * 
     */
    create<T extends commentairesCreateArgs>(args: SelectSubset<T, commentairesCreateArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {commentairesCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaires = await prisma.commentaires.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentairesCreateManyArgs>(args?: SelectSubset<T, commentairesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commentaires.
     * @param {commentairesDeleteArgs} args - Arguments to delete one Commentaires.
     * @example
     * // Delete one Commentaires
     * const Commentaires = await prisma.commentaires.delete({
     *   where: {
     *     // ... filter to delete one Commentaires
     *   }
     * })
     * 
     */
    delete<T extends commentairesDeleteArgs>(args: SelectSubset<T, commentairesDeleteArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaires.
     * @param {commentairesUpdateArgs} args - Arguments to update one Commentaires.
     * @example
     * // Update one Commentaires
     * const commentaires = await prisma.commentaires.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentairesUpdateArgs>(args: SelectSubset<T, commentairesUpdateArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {commentairesDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaires.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentairesDeleteManyArgs>(args?: SelectSubset<T, commentairesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentairesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaires = await prisma.commentaires.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentairesUpdateManyArgs>(args: SelectSubset<T, commentairesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commentaires.
     * @param {commentairesUpsertArgs} args - Arguments to update or create a Commentaires.
     * @example
     * // Update or create a Commentaires
     * const commentaires = await prisma.commentaires.upsert({
     *   create: {
     *     // ... data to create a Commentaires
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaires we want to update
     *   }
     * })
     */
    upsert<T extends commentairesUpsertArgs>(args: SelectSubset<T, commentairesUpsertArgs<ExtArgs>>): Prisma__commentairesClient<$Result.GetResult<Prisma.$commentairesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentairesCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaires.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends commentairesCountArgs>(
      args?: Subset<T, commentairesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentairesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentairesAggregateArgs>(args: Subset<T, CommentairesAggregateArgs>): Prisma.PrismaPromise<GetCommentairesAggregateType<T>>

    /**
     * Group by Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentairesGroupByArgs} args - Group by arguments.
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
      T extends commentairesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentairesGroupByArgs['orderBy'] }
        : { orderBy?: commentairesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentairesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentairesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the commentaires model
   */
  readonly fields: commentairesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for commentaires.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentairesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the commentaires model
   */
  interface commentairesFieldRefs {
    readonly id: FieldRef<"commentaires", 'BigInt'>
    readonly projet_id: FieldRef<"commentaires", 'BigInt'>
    readonly utilisateur_id: FieldRef<"commentaires", 'BigInt'>
    readonly commentaire_parent_id: FieldRef<"commentaires", 'BigInt'>
    readonly contenu: FieldRef<"commentaires", 'String'>
    readonly metadonnees: FieldRef<"commentaires", 'String'>
    readonly cree_le: FieldRef<"commentaires", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * commentaires findUnique
   */
  export type commentairesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * Filter, which commentaires to fetch.
     */
    where: commentairesWhereUniqueInput
  }

  /**
   * commentaires findUniqueOrThrow
   */
  export type commentairesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * Filter, which commentaires to fetch.
     */
    where: commentairesWhereUniqueInput
  }

  /**
   * commentaires findFirst
   */
  export type commentairesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * Filter, which commentaires to fetch.
     */
    where?: commentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commentaires to fetch.
     */
    orderBy?: commentairesOrderByWithRelationInput | commentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commentaires.
     */
    cursor?: commentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commentaires.
     */
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * commentaires findFirstOrThrow
   */
  export type commentairesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * Filter, which commentaires to fetch.
     */
    where?: commentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commentaires to fetch.
     */
    orderBy?: commentairesOrderByWithRelationInput | commentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commentaires.
     */
    cursor?: commentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commentaires.
     */
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * commentaires findMany
   */
  export type commentairesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * Filter, which commentaires to fetch.
     */
    where?: commentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commentaires to fetch.
     */
    orderBy?: commentairesOrderByWithRelationInput | commentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commentaires.
     */
    cursor?: commentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commentaires.
     */
    skip?: number
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * commentaires create
   */
  export type commentairesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * The data needed to create a commentaires.
     */
    data: XOR<commentairesCreateInput, commentairesUncheckedCreateInput>
  }

  /**
   * commentaires createMany
   */
  export type commentairesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many commentaires.
     */
    data: commentairesCreateManyInput | commentairesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * commentaires update
   */
  export type commentairesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * The data needed to update a commentaires.
     */
    data: XOR<commentairesUpdateInput, commentairesUncheckedUpdateInput>
    /**
     * Choose, which commentaires to update.
     */
    where: commentairesWhereUniqueInput
  }

  /**
   * commentaires updateMany
   */
  export type commentairesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update commentaires.
     */
    data: XOR<commentairesUpdateManyMutationInput, commentairesUncheckedUpdateManyInput>
    /**
     * Filter which commentaires to update
     */
    where?: commentairesWhereInput
    /**
     * Limit how many commentaires to update.
     */
    limit?: number
  }

  /**
   * commentaires upsert
   */
  export type commentairesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * The filter to search for the commentaires to update in case it exists.
     */
    where: commentairesWhereUniqueInput
    /**
     * In case the commentaires found by the `where` argument doesn't exist, create a new commentaires with this data.
     */
    create: XOR<commentairesCreateInput, commentairesUncheckedCreateInput>
    /**
     * In case the commentaires was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentairesUpdateInput, commentairesUncheckedUpdateInput>
  }

  /**
   * commentaires delete
   */
  export type commentairesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
    /**
     * Filter which commentaires to delete.
     */
    where: commentairesWhereUniqueInput
  }

  /**
   * commentaires deleteMany
   */
  export type commentairesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commentaires to delete
     */
    where?: commentairesWhereInput
    /**
     * Limit how many commentaires to delete.
     */
    limit?: number
  }

  /**
   * commentaires without action
   */
  export type commentairesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commentaires
     */
    select?: commentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commentaires
     */
    omit?: commentairesOmit<ExtArgs> | null
  }


  /**
   * Model fichiers
   */

  export type AggregateFichiers = {
    _count: FichiersCountAggregateOutputType | null
    _avg: FichiersAvgAggregateOutputType | null
    _sum: FichiersSumAggregateOutputType | null
    _min: FichiersMinAggregateOutputType | null
    _max: FichiersMaxAggregateOutputType | null
  }

  export type FichiersAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    proprietaire_id: number | null
    taille_octets: number | null
  }

  export type FichiersSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    proprietaire_id: bigint | null
    taille_octets: bigint | null
  }

  export type FichiersMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    proprietaire_id: bigint | null
    cle_stockage: string | null
    nom_original: string | null
    type_mime: string | null
    taille_octets: bigint | null
    usage: $Enums.fichiers_usage | null
    cree_le: Date | null
  }

  export type FichiersMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    proprietaire_id: bigint | null
    cle_stockage: string | null
    nom_original: string | null
    type_mime: string | null
    taille_octets: bigint | null
    usage: $Enums.fichiers_usage | null
    cree_le: Date | null
  }

  export type FichiersCountAggregateOutputType = {
    id: number
    projet_id: number
    proprietaire_id: number
    cle_stockage: number
    nom_original: number
    type_mime: number
    taille_octets: number
    usage: number
    cree_le: number
    _all: number
  }


  export type FichiersAvgAggregateInputType = {
    id?: true
    projet_id?: true
    proprietaire_id?: true
    taille_octets?: true
  }

  export type FichiersSumAggregateInputType = {
    id?: true
    projet_id?: true
    proprietaire_id?: true
    taille_octets?: true
  }

  export type FichiersMinAggregateInputType = {
    id?: true
    projet_id?: true
    proprietaire_id?: true
    cle_stockage?: true
    nom_original?: true
    type_mime?: true
    taille_octets?: true
    usage?: true
    cree_le?: true
  }

  export type FichiersMaxAggregateInputType = {
    id?: true
    projet_id?: true
    proprietaire_id?: true
    cle_stockage?: true
    nom_original?: true
    type_mime?: true
    taille_octets?: true
    usage?: true
    cree_le?: true
  }

  export type FichiersCountAggregateInputType = {
    id?: true
    projet_id?: true
    proprietaire_id?: true
    cle_stockage?: true
    nom_original?: true
    type_mime?: true
    taille_octets?: true
    usage?: true
    cree_le?: true
    _all?: true
  }

  export type FichiersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fichiers to aggregate.
     */
    where?: fichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichiers to fetch.
     */
    orderBy?: fichiersOrderByWithRelationInput | fichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fichiers
    **/
    _count?: true | FichiersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FichiersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FichiersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichiersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichiersMaxAggregateInputType
  }

  export type GetFichiersAggregateType<T extends FichiersAggregateArgs> = {
        [P in keyof T & keyof AggregateFichiers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFichiers[P]>
      : GetScalarType<T[P], AggregateFichiers[P]>
  }




  export type fichiersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fichiersWhereInput
    orderBy?: fichiersOrderByWithAggregationInput | fichiersOrderByWithAggregationInput[]
    by: FichiersScalarFieldEnum[] | FichiersScalarFieldEnum
    having?: fichiersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichiersCountAggregateInputType | true
    _avg?: FichiersAvgAggregateInputType
    _sum?: FichiersSumAggregateInputType
    _min?: FichiersMinAggregateInputType
    _max?: FichiersMaxAggregateInputType
  }

  export type FichiersGroupByOutputType = {
    id: bigint
    projet_id: bigint | null
    proprietaire_id: bigint | null
    cle_stockage: string
    nom_original: string | null
    type_mime: string | null
    taille_octets: bigint | null
    usage: $Enums.fichiers_usage | null
    cree_le: Date
    _count: FichiersCountAggregateOutputType | null
    _avg: FichiersAvgAggregateOutputType | null
    _sum: FichiersSumAggregateOutputType | null
    _min: FichiersMinAggregateOutputType | null
    _max: FichiersMaxAggregateOutputType | null
  }

  type GetFichiersGroupByPayload<T extends fichiersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichiersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichiersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichiersGroupByOutputType[P]>
            : GetScalarType<T[P], FichiersGroupByOutputType[P]>
        }
      >
    >


  export type fichiersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    proprietaire_id?: boolean
    cle_stockage?: boolean
    nom_original?: boolean
    type_mime?: boolean
    taille_octets?: boolean
    usage?: boolean
    cree_le?: boolean
  }, ExtArgs["result"]["fichiers"]>



  export type fichiersSelectScalar = {
    id?: boolean
    projet_id?: boolean
    proprietaire_id?: boolean
    cle_stockage?: boolean
    nom_original?: boolean
    type_mime?: boolean
    taille_octets?: boolean
    usage?: boolean
    cree_le?: boolean
  }

  export type fichiersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "proprietaire_id" | "cle_stockage" | "nom_original" | "type_mime" | "taille_octets" | "usage" | "cree_le", ExtArgs["result"]["fichiers"]>

  export type $fichiersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fichiers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint | null
      proprietaire_id: bigint | null
      cle_stockage: string
      nom_original: string | null
      type_mime: string | null
      taille_octets: bigint | null
      usage: $Enums.fichiers_usage | null
      cree_le: Date
    }, ExtArgs["result"]["fichiers"]>
    composites: {}
  }

  type fichiersGetPayload<S extends boolean | null | undefined | fichiersDefaultArgs> = $Result.GetResult<Prisma.$fichiersPayload, S>

  type fichiersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fichiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FichiersCountAggregateInputType | true
    }

  export interface fichiersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fichiers'], meta: { name: 'fichiers' } }
    /**
     * Find zero or one Fichiers that matches the filter.
     * @param {fichiersFindUniqueArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fichiersFindUniqueArgs>(args: SelectSubset<T, fichiersFindUniqueArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fichiers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fichiersFindUniqueOrThrowArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fichiersFindUniqueOrThrowArgs>(args: SelectSubset<T, fichiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichiersFindFirstArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fichiersFindFirstArgs>(args?: SelectSubset<T, fichiersFindFirstArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichiers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichiersFindFirstOrThrowArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fichiersFindFirstOrThrowArgs>(args?: SelectSubset<T, fichiersFindFirstOrThrowArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fichiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichiersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fichiers
     * const fichiers = await prisma.fichiers.findMany()
     * 
     * // Get first 10 Fichiers
     * const fichiers = await prisma.fichiers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fichiersWithIdOnly = await prisma.fichiers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fichiersFindManyArgs>(args?: SelectSubset<T, fichiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fichiers.
     * @param {fichiersCreateArgs} args - Arguments to create a Fichiers.
     * @example
     * // Create one Fichiers
     * const Fichiers = await prisma.fichiers.create({
     *   data: {
     *     // ... data to create a Fichiers
     *   }
     * })
     * 
     */
    create<T extends fichiersCreateArgs>(args: SelectSubset<T, fichiersCreateArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fichiers.
     * @param {fichiersCreateManyArgs} args - Arguments to create many Fichiers.
     * @example
     * // Create many Fichiers
     * const fichiers = await prisma.fichiers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fichiersCreateManyArgs>(args?: SelectSubset<T, fichiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fichiers.
     * @param {fichiersDeleteArgs} args - Arguments to delete one Fichiers.
     * @example
     * // Delete one Fichiers
     * const Fichiers = await prisma.fichiers.delete({
     *   where: {
     *     // ... filter to delete one Fichiers
     *   }
     * })
     * 
     */
    delete<T extends fichiersDeleteArgs>(args: SelectSubset<T, fichiersDeleteArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fichiers.
     * @param {fichiersUpdateArgs} args - Arguments to update one Fichiers.
     * @example
     * // Update one Fichiers
     * const fichiers = await prisma.fichiers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fichiersUpdateArgs>(args: SelectSubset<T, fichiersUpdateArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fichiers.
     * @param {fichiersDeleteManyArgs} args - Arguments to filter Fichiers to delete.
     * @example
     * // Delete a few Fichiers
     * const { count } = await prisma.fichiers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fichiersDeleteManyArgs>(args?: SelectSubset<T, fichiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichiersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fichiers
     * const fichiers = await prisma.fichiers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fichiersUpdateManyArgs>(args: SelectSubset<T, fichiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fichiers.
     * @param {fichiersUpsertArgs} args - Arguments to update or create a Fichiers.
     * @example
     * // Update or create a Fichiers
     * const fichiers = await prisma.fichiers.upsert({
     *   create: {
     *     // ... data to create a Fichiers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fichiers we want to update
     *   }
     * })
     */
    upsert<T extends fichiersUpsertArgs>(args: SelectSubset<T, fichiersUpsertArgs<ExtArgs>>): Prisma__fichiersClient<$Result.GetResult<Prisma.$fichiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichiersCountArgs} args - Arguments to filter Fichiers to count.
     * @example
     * // Count the number of Fichiers
     * const count = await prisma.fichiers.count({
     *   where: {
     *     // ... the filter for the Fichiers we want to count
     *   }
     * })
    **/
    count<T extends fichiersCountArgs>(
      args?: Subset<T, fichiersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichiersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FichiersAggregateArgs>(args: Subset<T, FichiersAggregateArgs>): Prisma.PrismaPromise<GetFichiersAggregateType<T>>

    /**
     * Group by Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichiersGroupByArgs} args - Group by arguments.
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
      T extends fichiersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fichiersGroupByArgs['orderBy'] }
        : { orderBy?: fichiersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fichiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fichiers model
   */
  readonly fields: fichiersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fichiers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fichiersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fichiers model
   */
  interface fichiersFieldRefs {
    readonly id: FieldRef<"fichiers", 'BigInt'>
    readonly projet_id: FieldRef<"fichiers", 'BigInt'>
    readonly proprietaire_id: FieldRef<"fichiers", 'BigInt'>
    readonly cle_stockage: FieldRef<"fichiers", 'String'>
    readonly nom_original: FieldRef<"fichiers", 'String'>
    readonly type_mime: FieldRef<"fichiers", 'String'>
    readonly taille_octets: FieldRef<"fichiers", 'BigInt'>
    readonly usage: FieldRef<"fichiers", 'fichiers_usage'>
    readonly cree_le: FieldRef<"fichiers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fichiers findUnique
   */
  export type fichiersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * Filter, which fichiers to fetch.
     */
    where: fichiersWhereUniqueInput
  }

  /**
   * fichiers findUniqueOrThrow
   */
  export type fichiersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * Filter, which fichiers to fetch.
     */
    where: fichiersWhereUniqueInput
  }

  /**
   * fichiers findFirst
   */
  export type fichiersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * Filter, which fichiers to fetch.
     */
    where?: fichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichiers to fetch.
     */
    orderBy?: fichiersOrderByWithRelationInput | fichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fichiers.
     */
    cursor?: fichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fichiers.
     */
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * fichiers findFirstOrThrow
   */
  export type fichiersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * Filter, which fichiers to fetch.
     */
    where?: fichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichiers to fetch.
     */
    orderBy?: fichiersOrderByWithRelationInput | fichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fichiers.
     */
    cursor?: fichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fichiers.
     */
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * fichiers findMany
   */
  export type fichiersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * Filter, which fichiers to fetch.
     */
    where?: fichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichiers to fetch.
     */
    orderBy?: fichiersOrderByWithRelationInput | fichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fichiers.
     */
    cursor?: fichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichiers.
     */
    skip?: number
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * fichiers create
   */
  export type fichiersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * The data needed to create a fichiers.
     */
    data: XOR<fichiersCreateInput, fichiersUncheckedCreateInput>
  }

  /**
   * fichiers createMany
   */
  export type fichiersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fichiers.
     */
    data: fichiersCreateManyInput | fichiersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fichiers update
   */
  export type fichiersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * The data needed to update a fichiers.
     */
    data: XOR<fichiersUpdateInput, fichiersUncheckedUpdateInput>
    /**
     * Choose, which fichiers to update.
     */
    where: fichiersWhereUniqueInput
  }

  /**
   * fichiers updateMany
   */
  export type fichiersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fichiers.
     */
    data: XOR<fichiersUpdateManyMutationInput, fichiersUncheckedUpdateManyInput>
    /**
     * Filter which fichiers to update
     */
    where?: fichiersWhereInput
    /**
     * Limit how many fichiers to update.
     */
    limit?: number
  }

  /**
   * fichiers upsert
   */
  export type fichiersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * The filter to search for the fichiers to update in case it exists.
     */
    where: fichiersWhereUniqueInput
    /**
     * In case the fichiers found by the `where` argument doesn't exist, create a new fichiers with this data.
     */
    create: XOR<fichiersCreateInput, fichiersUncheckedCreateInput>
    /**
     * In case the fichiers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fichiersUpdateInput, fichiersUncheckedUpdateInput>
  }

  /**
   * fichiers delete
   */
  export type fichiersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
    /**
     * Filter which fichiers to delete.
     */
    where: fichiersWhereUniqueInput
  }

  /**
   * fichiers deleteMany
   */
  export type fichiersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fichiers to delete
     */
    where?: fichiersWhereInput
    /**
     * Limit how many fichiers to delete.
     */
    limit?: number
  }

  /**
   * fichiers without action
   */
  export type fichiersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichiers
     */
    select?: fichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichiers
     */
    omit?: fichiersOmit<ExtArgs> | null
  }


  /**
   * Model flux_tresorerie
   */

  export type AggregateFlux_tresorerie = {
    _count: Flux_tresorerieCountAggregateOutputType | null
    _avg: Flux_tresorerieAvgAggregateOutputType | null
    _sum: Flux_tresorerieSumAggregateOutputType | null
    _min: Flux_tresorerieMinAggregateOutputType | null
    _max: Flux_tresorerieMaxAggregateOutputType | null
  }

  export type Flux_tresorerieAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    entree: Decimal | null
    sortie: Decimal | null
    net: Decimal | null
  }

  export type Flux_tresorerieSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    entree: Decimal | null
    sortie: Decimal | null
    net: Decimal | null
  }

  export type Flux_tresorerieMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    libelle_periode: string | null
    date_periode: Date | null
    entree: Decimal | null
    sortie: Decimal | null
    net: Decimal | null
    cree_le: Date | null
  }

  export type Flux_tresorerieMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    libelle_periode: string | null
    date_periode: Date | null
    entree: Decimal | null
    sortie: Decimal | null
    net: Decimal | null
    cree_le: Date | null
  }

  export type Flux_tresorerieCountAggregateOutputType = {
    id: number
    projet_id: number
    libelle_periode: number
    date_periode: number
    entree: number
    sortie: number
    net: number
    cree_le: number
    _all: number
  }


  export type Flux_tresorerieAvgAggregateInputType = {
    id?: true
    projet_id?: true
    entree?: true
    sortie?: true
    net?: true
  }

  export type Flux_tresorerieSumAggregateInputType = {
    id?: true
    projet_id?: true
    entree?: true
    sortie?: true
    net?: true
  }

  export type Flux_tresorerieMinAggregateInputType = {
    id?: true
    projet_id?: true
    libelle_periode?: true
    date_periode?: true
    entree?: true
    sortie?: true
    net?: true
    cree_le?: true
  }

  export type Flux_tresorerieMaxAggregateInputType = {
    id?: true
    projet_id?: true
    libelle_periode?: true
    date_periode?: true
    entree?: true
    sortie?: true
    net?: true
    cree_le?: true
  }

  export type Flux_tresorerieCountAggregateInputType = {
    id?: true
    projet_id?: true
    libelle_periode?: true
    date_periode?: true
    entree?: true
    sortie?: true
    net?: true
    cree_le?: true
    _all?: true
  }

  export type Flux_tresorerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flux_tresorerie to aggregate.
     */
    where?: flux_tresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flux_tresoreries to fetch.
     */
    orderBy?: flux_tresorerieOrderByWithRelationInput | flux_tresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flux_tresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flux_tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flux_tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flux_tresoreries
    **/
    _count?: true | Flux_tresorerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flux_tresorerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flux_tresorerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flux_tresorerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flux_tresorerieMaxAggregateInputType
  }

  export type GetFlux_tresorerieAggregateType<T extends Flux_tresorerieAggregateArgs> = {
        [P in keyof T & keyof AggregateFlux_tresorerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlux_tresorerie[P]>
      : GetScalarType<T[P], AggregateFlux_tresorerie[P]>
  }




  export type flux_tresorerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flux_tresorerieWhereInput
    orderBy?: flux_tresorerieOrderByWithAggregationInput | flux_tresorerieOrderByWithAggregationInput[]
    by: Flux_tresorerieScalarFieldEnum[] | Flux_tresorerieScalarFieldEnum
    having?: flux_tresorerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flux_tresorerieCountAggregateInputType | true
    _avg?: Flux_tresorerieAvgAggregateInputType
    _sum?: Flux_tresorerieSumAggregateInputType
    _min?: Flux_tresorerieMinAggregateInputType
    _max?: Flux_tresorerieMaxAggregateInputType
  }

  export type Flux_tresorerieGroupByOutputType = {
    id: bigint
    projet_id: bigint
    libelle_periode: string | null
    date_periode: Date | null
    entree: Decimal | null
    sortie: Decimal | null
    net: Decimal | null
    cree_le: Date
    _count: Flux_tresorerieCountAggregateOutputType | null
    _avg: Flux_tresorerieAvgAggregateOutputType | null
    _sum: Flux_tresorerieSumAggregateOutputType | null
    _min: Flux_tresorerieMinAggregateOutputType | null
    _max: Flux_tresorerieMaxAggregateOutputType | null
  }

  type GetFlux_tresorerieGroupByPayload<T extends flux_tresorerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flux_tresorerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flux_tresorerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flux_tresorerieGroupByOutputType[P]>
            : GetScalarType<T[P], Flux_tresorerieGroupByOutputType[P]>
        }
      >
    >


  export type flux_tresorerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    libelle_periode?: boolean
    date_periode?: boolean
    entree?: boolean
    sortie?: boolean
    net?: boolean
    cree_le?: boolean
  }, ExtArgs["result"]["flux_tresorerie"]>



  export type flux_tresorerieSelectScalar = {
    id?: boolean
    projet_id?: boolean
    libelle_periode?: boolean
    date_periode?: boolean
    entree?: boolean
    sortie?: boolean
    net?: boolean
    cree_le?: boolean
  }

  export type flux_tresorerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "libelle_periode" | "date_periode" | "entree" | "sortie" | "net" | "cree_le", ExtArgs["result"]["flux_tresorerie"]>

  export type $flux_tresoreriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flux_tresorerie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      libelle_periode: string | null
      date_periode: Date | null
      entree: Prisma.Decimal | null
      sortie: Prisma.Decimal | null
      net: Prisma.Decimal | null
      cree_le: Date
    }, ExtArgs["result"]["flux_tresorerie"]>
    composites: {}
  }

  type flux_tresorerieGetPayload<S extends boolean | null | undefined | flux_tresorerieDefaultArgs> = $Result.GetResult<Prisma.$flux_tresoreriePayload, S>

  type flux_tresorerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flux_tresorerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flux_tresorerieCountAggregateInputType | true
    }

  export interface flux_tresorerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flux_tresorerie'], meta: { name: 'flux_tresorerie' } }
    /**
     * Find zero or one Flux_tresorerie that matches the filter.
     * @param {flux_tresorerieFindUniqueArgs} args - Arguments to find a Flux_tresorerie
     * @example
     * // Get one Flux_tresorerie
     * const flux_tresorerie = await prisma.flux_tresorerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flux_tresorerieFindUniqueArgs>(args: SelectSubset<T, flux_tresorerieFindUniqueArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flux_tresorerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flux_tresorerieFindUniqueOrThrowArgs} args - Arguments to find a Flux_tresorerie
     * @example
     * // Get one Flux_tresorerie
     * const flux_tresorerie = await prisma.flux_tresorerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flux_tresorerieFindUniqueOrThrowArgs>(args: SelectSubset<T, flux_tresorerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flux_tresorerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flux_tresorerieFindFirstArgs} args - Arguments to find a Flux_tresorerie
     * @example
     * // Get one Flux_tresorerie
     * const flux_tresorerie = await prisma.flux_tresorerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flux_tresorerieFindFirstArgs>(args?: SelectSubset<T, flux_tresorerieFindFirstArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flux_tresorerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flux_tresorerieFindFirstOrThrowArgs} args - Arguments to find a Flux_tresorerie
     * @example
     * // Get one Flux_tresorerie
     * const flux_tresorerie = await prisma.flux_tresorerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flux_tresorerieFindFirstOrThrowArgs>(args?: SelectSubset<T, flux_tresorerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flux_tresoreries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flux_tresorerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flux_tresoreries
     * const flux_tresoreries = await prisma.flux_tresorerie.findMany()
     * 
     * // Get first 10 Flux_tresoreries
     * const flux_tresoreries = await prisma.flux_tresorerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flux_tresorerieWithIdOnly = await prisma.flux_tresorerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flux_tresorerieFindManyArgs>(args?: SelectSubset<T, flux_tresorerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flux_tresorerie.
     * @param {flux_tresorerieCreateArgs} args - Arguments to create a Flux_tresorerie.
     * @example
     * // Create one Flux_tresorerie
     * const Flux_tresorerie = await prisma.flux_tresorerie.create({
     *   data: {
     *     // ... data to create a Flux_tresorerie
     *   }
     * })
     * 
     */
    create<T extends flux_tresorerieCreateArgs>(args: SelectSubset<T, flux_tresorerieCreateArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flux_tresoreries.
     * @param {flux_tresorerieCreateManyArgs} args - Arguments to create many Flux_tresoreries.
     * @example
     * // Create many Flux_tresoreries
     * const flux_tresorerie = await prisma.flux_tresorerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flux_tresorerieCreateManyArgs>(args?: SelectSubset<T, flux_tresorerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flux_tresorerie.
     * @param {flux_tresorerieDeleteArgs} args - Arguments to delete one Flux_tresorerie.
     * @example
     * // Delete one Flux_tresorerie
     * const Flux_tresorerie = await prisma.flux_tresorerie.delete({
     *   where: {
     *     // ... filter to delete one Flux_tresorerie
     *   }
     * })
     * 
     */
    delete<T extends flux_tresorerieDeleteArgs>(args: SelectSubset<T, flux_tresorerieDeleteArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flux_tresorerie.
     * @param {flux_tresorerieUpdateArgs} args - Arguments to update one Flux_tresorerie.
     * @example
     * // Update one Flux_tresorerie
     * const flux_tresorerie = await prisma.flux_tresorerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flux_tresorerieUpdateArgs>(args: SelectSubset<T, flux_tresorerieUpdateArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flux_tresoreries.
     * @param {flux_tresorerieDeleteManyArgs} args - Arguments to filter Flux_tresoreries to delete.
     * @example
     * // Delete a few Flux_tresoreries
     * const { count } = await prisma.flux_tresorerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flux_tresorerieDeleteManyArgs>(args?: SelectSubset<T, flux_tresorerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flux_tresoreries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flux_tresorerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flux_tresoreries
     * const flux_tresorerie = await prisma.flux_tresorerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flux_tresorerieUpdateManyArgs>(args: SelectSubset<T, flux_tresorerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flux_tresorerie.
     * @param {flux_tresorerieUpsertArgs} args - Arguments to update or create a Flux_tresorerie.
     * @example
     * // Update or create a Flux_tresorerie
     * const flux_tresorerie = await prisma.flux_tresorerie.upsert({
     *   create: {
     *     // ... data to create a Flux_tresorerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flux_tresorerie we want to update
     *   }
     * })
     */
    upsert<T extends flux_tresorerieUpsertArgs>(args: SelectSubset<T, flux_tresorerieUpsertArgs<ExtArgs>>): Prisma__flux_tresorerieClient<$Result.GetResult<Prisma.$flux_tresoreriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flux_tresoreries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flux_tresorerieCountArgs} args - Arguments to filter Flux_tresoreries to count.
     * @example
     * // Count the number of Flux_tresoreries
     * const count = await prisma.flux_tresorerie.count({
     *   where: {
     *     // ... the filter for the Flux_tresoreries we want to count
     *   }
     * })
    **/
    count<T extends flux_tresorerieCountArgs>(
      args?: Subset<T, flux_tresorerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flux_tresorerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flux_tresorerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flux_tresorerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Flux_tresorerieAggregateArgs>(args: Subset<T, Flux_tresorerieAggregateArgs>): Prisma.PrismaPromise<GetFlux_tresorerieAggregateType<T>>

    /**
     * Group by Flux_tresorerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flux_tresorerieGroupByArgs} args - Group by arguments.
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
      T extends flux_tresorerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flux_tresorerieGroupByArgs['orderBy'] }
        : { orderBy?: flux_tresorerieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flux_tresorerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlux_tresorerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flux_tresorerie model
   */
  readonly fields: flux_tresorerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flux_tresorerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flux_tresorerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the flux_tresorerie model
   */
  interface flux_tresorerieFieldRefs {
    readonly id: FieldRef<"flux_tresorerie", 'BigInt'>
    readonly projet_id: FieldRef<"flux_tresorerie", 'BigInt'>
    readonly libelle_periode: FieldRef<"flux_tresorerie", 'String'>
    readonly date_periode: FieldRef<"flux_tresorerie", 'DateTime'>
    readonly entree: FieldRef<"flux_tresorerie", 'Decimal'>
    readonly sortie: FieldRef<"flux_tresorerie", 'Decimal'>
    readonly net: FieldRef<"flux_tresorerie", 'Decimal'>
    readonly cree_le: FieldRef<"flux_tresorerie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * flux_tresorerie findUnique
   */
  export type flux_tresorerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * Filter, which flux_tresorerie to fetch.
     */
    where: flux_tresorerieWhereUniqueInput
  }

  /**
   * flux_tresorerie findUniqueOrThrow
   */
  export type flux_tresorerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * Filter, which flux_tresorerie to fetch.
     */
    where: flux_tresorerieWhereUniqueInput
  }

  /**
   * flux_tresorerie findFirst
   */
  export type flux_tresorerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * Filter, which flux_tresorerie to fetch.
     */
    where?: flux_tresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flux_tresoreries to fetch.
     */
    orderBy?: flux_tresorerieOrderByWithRelationInput | flux_tresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flux_tresoreries.
     */
    cursor?: flux_tresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flux_tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flux_tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flux_tresoreries.
     */
    distinct?: Flux_tresorerieScalarFieldEnum | Flux_tresorerieScalarFieldEnum[]
  }

  /**
   * flux_tresorerie findFirstOrThrow
   */
  export type flux_tresorerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * Filter, which flux_tresorerie to fetch.
     */
    where?: flux_tresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flux_tresoreries to fetch.
     */
    orderBy?: flux_tresorerieOrderByWithRelationInput | flux_tresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flux_tresoreries.
     */
    cursor?: flux_tresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flux_tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flux_tresoreries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flux_tresoreries.
     */
    distinct?: Flux_tresorerieScalarFieldEnum | Flux_tresorerieScalarFieldEnum[]
  }

  /**
   * flux_tresorerie findMany
   */
  export type flux_tresorerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * Filter, which flux_tresoreries to fetch.
     */
    where?: flux_tresorerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flux_tresoreries to fetch.
     */
    orderBy?: flux_tresorerieOrderByWithRelationInput | flux_tresorerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flux_tresoreries.
     */
    cursor?: flux_tresorerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flux_tresoreries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flux_tresoreries.
     */
    skip?: number
    distinct?: Flux_tresorerieScalarFieldEnum | Flux_tresorerieScalarFieldEnum[]
  }

  /**
   * flux_tresorerie create
   */
  export type flux_tresorerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * The data needed to create a flux_tresorerie.
     */
    data: XOR<flux_tresorerieCreateInput, flux_tresorerieUncheckedCreateInput>
  }

  /**
   * flux_tresorerie createMany
   */
  export type flux_tresorerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flux_tresoreries.
     */
    data: flux_tresorerieCreateManyInput | flux_tresorerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flux_tresorerie update
   */
  export type flux_tresorerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * The data needed to update a flux_tresorerie.
     */
    data: XOR<flux_tresorerieUpdateInput, flux_tresorerieUncheckedUpdateInput>
    /**
     * Choose, which flux_tresorerie to update.
     */
    where: flux_tresorerieWhereUniqueInput
  }

  /**
   * flux_tresorerie updateMany
   */
  export type flux_tresorerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flux_tresoreries.
     */
    data: XOR<flux_tresorerieUpdateManyMutationInput, flux_tresorerieUncheckedUpdateManyInput>
    /**
     * Filter which flux_tresoreries to update
     */
    where?: flux_tresorerieWhereInput
    /**
     * Limit how many flux_tresoreries to update.
     */
    limit?: number
  }

  /**
   * flux_tresorerie upsert
   */
  export type flux_tresorerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * The filter to search for the flux_tresorerie to update in case it exists.
     */
    where: flux_tresorerieWhereUniqueInput
    /**
     * In case the flux_tresorerie found by the `where` argument doesn't exist, create a new flux_tresorerie with this data.
     */
    create: XOR<flux_tresorerieCreateInput, flux_tresorerieUncheckedCreateInput>
    /**
     * In case the flux_tresorerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flux_tresorerieUpdateInput, flux_tresorerieUncheckedUpdateInput>
  }

  /**
   * flux_tresorerie delete
   */
  export type flux_tresorerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
    /**
     * Filter which flux_tresorerie to delete.
     */
    where: flux_tresorerieWhereUniqueInput
  }

  /**
   * flux_tresorerie deleteMany
   */
  export type flux_tresorerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flux_tresoreries to delete
     */
    where?: flux_tresorerieWhereInput
    /**
     * Limit how many flux_tresoreries to delete.
     */
    limit?: number
  }

  /**
   * flux_tresorerie without action
   */
  export type flux_tresorerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flux_tresorerie
     */
    select?: flux_tresorerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flux_tresorerie
     */
    omit?: flux_tresorerieOmit<ExtArgs> | null
  }


  /**
   * Model indicateurs_financiers
   */

  export type AggregateIndicateurs_financiers = {
    _count: Indicateurs_financiersCountAggregateOutputType | null
    _avg: Indicateurs_financiersAvgAggregateOutputType | null
    _sum: Indicateurs_financiersSumAggregateOutputType | null
    _min: Indicateurs_financiersMinAggregateOutputType | null
    _max: Indicateurs_financiersMaxAggregateOutputType | null
  }

  export type Indicateurs_financiersAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    valeur_indicateur: Decimal | null
    calcule_par: number | null
  }

  export type Indicateurs_financiersSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    valeur_indicateur: Decimal | null
    calcule_par: bigint | null
  }

  export type Indicateurs_financiersMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    cle_indicateur: string | null
    valeur_indicateur: Decimal | null
    calcule_le: Date | null
    calcule_par: bigint | null
  }

  export type Indicateurs_financiersMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    cle_indicateur: string | null
    valeur_indicateur: Decimal | null
    calcule_le: Date | null
    calcule_par: bigint | null
  }

  export type Indicateurs_financiersCountAggregateOutputType = {
    id: number
    projet_id: number
    cle_indicateur: number
    valeur_indicateur: number
    calcule_le: number
    calcule_par: number
    _all: number
  }


  export type Indicateurs_financiersAvgAggregateInputType = {
    id?: true
    projet_id?: true
    valeur_indicateur?: true
    calcule_par?: true
  }

  export type Indicateurs_financiersSumAggregateInputType = {
    id?: true
    projet_id?: true
    valeur_indicateur?: true
    calcule_par?: true
  }

  export type Indicateurs_financiersMinAggregateInputType = {
    id?: true
    projet_id?: true
    cle_indicateur?: true
    valeur_indicateur?: true
    calcule_le?: true
    calcule_par?: true
  }

  export type Indicateurs_financiersMaxAggregateInputType = {
    id?: true
    projet_id?: true
    cle_indicateur?: true
    valeur_indicateur?: true
    calcule_le?: true
    calcule_par?: true
  }

  export type Indicateurs_financiersCountAggregateInputType = {
    id?: true
    projet_id?: true
    cle_indicateur?: true
    valeur_indicateur?: true
    calcule_le?: true
    calcule_par?: true
    _all?: true
  }

  export type Indicateurs_financiersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which indicateurs_financiers to aggregate.
     */
    where?: indicateurs_financiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indicateurs_financiers to fetch.
     */
    orderBy?: indicateurs_financiersOrderByWithRelationInput | indicateurs_financiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: indicateurs_financiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indicateurs_financiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indicateurs_financiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned indicateurs_financiers
    **/
    _count?: true | Indicateurs_financiersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Indicateurs_financiersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Indicateurs_financiersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Indicateurs_financiersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Indicateurs_financiersMaxAggregateInputType
  }

  export type GetIndicateurs_financiersAggregateType<T extends Indicateurs_financiersAggregateArgs> = {
        [P in keyof T & keyof AggregateIndicateurs_financiers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicateurs_financiers[P]>
      : GetScalarType<T[P], AggregateIndicateurs_financiers[P]>
  }




  export type indicateurs_financiersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: indicateurs_financiersWhereInput
    orderBy?: indicateurs_financiersOrderByWithAggregationInput | indicateurs_financiersOrderByWithAggregationInput[]
    by: Indicateurs_financiersScalarFieldEnum[] | Indicateurs_financiersScalarFieldEnum
    having?: indicateurs_financiersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Indicateurs_financiersCountAggregateInputType | true
    _avg?: Indicateurs_financiersAvgAggregateInputType
    _sum?: Indicateurs_financiersSumAggregateInputType
    _min?: Indicateurs_financiersMinAggregateInputType
    _max?: Indicateurs_financiersMaxAggregateInputType
  }

  export type Indicateurs_financiersGroupByOutputType = {
    id: bigint
    projet_id: bigint
    cle_indicateur: string
    valeur_indicateur: Decimal | null
    calcule_le: Date
    calcule_par: bigint | null
    _count: Indicateurs_financiersCountAggregateOutputType | null
    _avg: Indicateurs_financiersAvgAggregateOutputType | null
    _sum: Indicateurs_financiersSumAggregateOutputType | null
    _min: Indicateurs_financiersMinAggregateOutputType | null
    _max: Indicateurs_financiersMaxAggregateOutputType | null
  }

  type GetIndicateurs_financiersGroupByPayload<T extends indicateurs_financiersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Indicateurs_financiersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Indicateurs_financiersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Indicateurs_financiersGroupByOutputType[P]>
            : GetScalarType<T[P], Indicateurs_financiersGroupByOutputType[P]>
        }
      >
    >


  export type indicateurs_financiersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    cle_indicateur?: boolean
    valeur_indicateur?: boolean
    calcule_le?: boolean
    calcule_par?: boolean
  }, ExtArgs["result"]["indicateurs_financiers"]>



  export type indicateurs_financiersSelectScalar = {
    id?: boolean
    projet_id?: boolean
    cle_indicateur?: boolean
    valeur_indicateur?: boolean
    calcule_le?: boolean
    calcule_par?: boolean
  }

  export type indicateurs_financiersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "cle_indicateur" | "valeur_indicateur" | "calcule_le" | "calcule_par", ExtArgs["result"]["indicateurs_financiers"]>

  export type $indicateurs_financiersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "indicateurs_financiers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      cle_indicateur: string
      valeur_indicateur: Prisma.Decimal | null
      calcule_le: Date
      calcule_par: bigint | null
    }, ExtArgs["result"]["indicateurs_financiers"]>
    composites: {}
  }

  type indicateurs_financiersGetPayload<S extends boolean | null | undefined | indicateurs_financiersDefaultArgs> = $Result.GetResult<Prisma.$indicateurs_financiersPayload, S>

  type indicateurs_financiersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<indicateurs_financiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Indicateurs_financiersCountAggregateInputType | true
    }

  export interface indicateurs_financiersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['indicateurs_financiers'], meta: { name: 'indicateurs_financiers' } }
    /**
     * Find zero or one Indicateurs_financiers that matches the filter.
     * @param {indicateurs_financiersFindUniqueArgs} args - Arguments to find a Indicateurs_financiers
     * @example
     * // Get one Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends indicateurs_financiersFindUniqueArgs>(args: SelectSubset<T, indicateurs_financiersFindUniqueArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Indicateurs_financiers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {indicateurs_financiersFindUniqueOrThrowArgs} args - Arguments to find a Indicateurs_financiers
     * @example
     * // Get one Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends indicateurs_financiersFindUniqueOrThrowArgs>(args: SelectSubset<T, indicateurs_financiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicateurs_financiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indicateurs_financiersFindFirstArgs} args - Arguments to find a Indicateurs_financiers
     * @example
     * // Get one Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends indicateurs_financiersFindFirstArgs>(args?: SelectSubset<T, indicateurs_financiersFindFirstArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicateurs_financiers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indicateurs_financiersFindFirstOrThrowArgs} args - Arguments to find a Indicateurs_financiers
     * @example
     * // Get one Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends indicateurs_financiersFindFirstOrThrowArgs>(args?: SelectSubset<T, indicateurs_financiersFindFirstOrThrowArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Indicateurs_financiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indicateurs_financiersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.findMany()
     * 
     * // Get first 10 Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indicateurs_financiersWithIdOnly = await prisma.indicateurs_financiers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends indicateurs_financiersFindManyArgs>(args?: SelectSubset<T, indicateurs_financiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Indicateurs_financiers.
     * @param {indicateurs_financiersCreateArgs} args - Arguments to create a Indicateurs_financiers.
     * @example
     * // Create one Indicateurs_financiers
     * const Indicateurs_financiers = await prisma.indicateurs_financiers.create({
     *   data: {
     *     // ... data to create a Indicateurs_financiers
     *   }
     * })
     * 
     */
    create<T extends indicateurs_financiersCreateArgs>(args: SelectSubset<T, indicateurs_financiersCreateArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Indicateurs_financiers.
     * @param {indicateurs_financiersCreateManyArgs} args - Arguments to create many Indicateurs_financiers.
     * @example
     * // Create many Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends indicateurs_financiersCreateManyArgs>(args?: SelectSubset<T, indicateurs_financiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Indicateurs_financiers.
     * @param {indicateurs_financiersDeleteArgs} args - Arguments to delete one Indicateurs_financiers.
     * @example
     * // Delete one Indicateurs_financiers
     * const Indicateurs_financiers = await prisma.indicateurs_financiers.delete({
     *   where: {
     *     // ... filter to delete one Indicateurs_financiers
     *   }
     * })
     * 
     */
    delete<T extends indicateurs_financiersDeleteArgs>(args: SelectSubset<T, indicateurs_financiersDeleteArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Indicateurs_financiers.
     * @param {indicateurs_financiersUpdateArgs} args - Arguments to update one Indicateurs_financiers.
     * @example
     * // Update one Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends indicateurs_financiersUpdateArgs>(args: SelectSubset<T, indicateurs_financiersUpdateArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Indicateurs_financiers.
     * @param {indicateurs_financiersDeleteManyArgs} args - Arguments to filter Indicateurs_financiers to delete.
     * @example
     * // Delete a few Indicateurs_financiers
     * const { count } = await prisma.indicateurs_financiers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends indicateurs_financiersDeleteManyArgs>(args?: SelectSubset<T, indicateurs_financiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicateurs_financiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indicateurs_financiersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends indicateurs_financiersUpdateManyArgs>(args: SelectSubset<T, indicateurs_financiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Indicateurs_financiers.
     * @param {indicateurs_financiersUpsertArgs} args - Arguments to update or create a Indicateurs_financiers.
     * @example
     * // Update or create a Indicateurs_financiers
     * const indicateurs_financiers = await prisma.indicateurs_financiers.upsert({
     *   create: {
     *     // ... data to create a Indicateurs_financiers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indicateurs_financiers we want to update
     *   }
     * })
     */
    upsert<T extends indicateurs_financiersUpsertArgs>(args: SelectSubset<T, indicateurs_financiersUpsertArgs<ExtArgs>>): Prisma__indicateurs_financiersClient<$Result.GetResult<Prisma.$indicateurs_financiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Indicateurs_financiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indicateurs_financiersCountArgs} args - Arguments to filter Indicateurs_financiers to count.
     * @example
     * // Count the number of Indicateurs_financiers
     * const count = await prisma.indicateurs_financiers.count({
     *   where: {
     *     // ... the filter for the Indicateurs_financiers we want to count
     *   }
     * })
    **/
    count<T extends indicateurs_financiersCountArgs>(
      args?: Subset<T, indicateurs_financiersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Indicateurs_financiersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indicateurs_financiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indicateurs_financiersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Indicateurs_financiersAggregateArgs>(args: Subset<T, Indicateurs_financiersAggregateArgs>): Prisma.PrismaPromise<GetIndicateurs_financiersAggregateType<T>>

    /**
     * Group by Indicateurs_financiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indicateurs_financiersGroupByArgs} args - Group by arguments.
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
      T extends indicateurs_financiersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: indicateurs_financiersGroupByArgs['orderBy'] }
        : { orderBy?: indicateurs_financiersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, indicateurs_financiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicateurs_financiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the indicateurs_financiers model
   */
  readonly fields: indicateurs_financiersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for indicateurs_financiers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__indicateurs_financiersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the indicateurs_financiers model
   */
  interface indicateurs_financiersFieldRefs {
    readonly id: FieldRef<"indicateurs_financiers", 'BigInt'>
    readonly projet_id: FieldRef<"indicateurs_financiers", 'BigInt'>
    readonly cle_indicateur: FieldRef<"indicateurs_financiers", 'String'>
    readonly valeur_indicateur: FieldRef<"indicateurs_financiers", 'Decimal'>
    readonly calcule_le: FieldRef<"indicateurs_financiers", 'DateTime'>
    readonly calcule_par: FieldRef<"indicateurs_financiers", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * indicateurs_financiers findUnique
   */
  export type indicateurs_financiersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * Filter, which indicateurs_financiers to fetch.
     */
    where: indicateurs_financiersWhereUniqueInput
  }

  /**
   * indicateurs_financiers findUniqueOrThrow
   */
  export type indicateurs_financiersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * Filter, which indicateurs_financiers to fetch.
     */
    where: indicateurs_financiersWhereUniqueInput
  }

  /**
   * indicateurs_financiers findFirst
   */
  export type indicateurs_financiersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * Filter, which indicateurs_financiers to fetch.
     */
    where?: indicateurs_financiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indicateurs_financiers to fetch.
     */
    orderBy?: indicateurs_financiersOrderByWithRelationInput | indicateurs_financiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for indicateurs_financiers.
     */
    cursor?: indicateurs_financiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indicateurs_financiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indicateurs_financiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of indicateurs_financiers.
     */
    distinct?: Indicateurs_financiersScalarFieldEnum | Indicateurs_financiersScalarFieldEnum[]
  }

  /**
   * indicateurs_financiers findFirstOrThrow
   */
  export type indicateurs_financiersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * Filter, which indicateurs_financiers to fetch.
     */
    where?: indicateurs_financiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indicateurs_financiers to fetch.
     */
    orderBy?: indicateurs_financiersOrderByWithRelationInput | indicateurs_financiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for indicateurs_financiers.
     */
    cursor?: indicateurs_financiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indicateurs_financiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indicateurs_financiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of indicateurs_financiers.
     */
    distinct?: Indicateurs_financiersScalarFieldEnum | Indicateurs_financiersScalarFieldEnum[]
  }

  /**
   * indicateurs_financiers findMany
   */
  export type indicateurs_financiersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * Filter, which indicateurs_financiers to fetch.
     */
    where?: indicateurs_financiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indicateurs_financiers to fetch.
     */
    orderBy?: indicateurs_financiersOrderByWithRelationInput | indicateurs_financiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing indicateurs_financiers.
     */
    cursor?: indicateurs_financiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indicateurs_financiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indicateurs_financiers.
     */
    skip?: number
    distinct?: Indicateurs_financiersScalarFieldEnum | Indicateurs_financiersScalarFieldEnum[]
  }

  /**
   * indicateurs_financiers create
   */
  export type indicateurs_financiersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * The data needed to create a indicateurs_financiers.
     */
    data: XOR<indicateurs_financiersCreateInput, indicateurs_financiersUncheckedCreateInput>
  }

  /**
   * indicateurs_financiers createMany
   */
  export type indicateurs_financiersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many indicateurs_financiers.
     */
    data: indicateurs_financiersCreateManyInput | indicateurs_financiersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * indicateurs_financiers update
   */
  export type indicateurs_financiersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * The data needed to update a indicateurs_financiers.
     */
    data: XOR<indicateurs_financiersUpdateInput, indicateurs_financiersUncheckedUpdateInput>
    /**
     * Choose, which indicateurs_financiers to update.
     */
    where: indicateurs_financiersWhereUniqueInput
  }

  /**
   * indicateurs_financiers updateMany
   */
  export type indicateurs_financiersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update indicateurs_financiers.
     */
    data: XOR<indicateurs_financiersUpdateManyMutationInput, indicateurs_financiersUncheckedUpdateManyInput>
    /**
     * Filter which indicateurs_financiers to update
     */
    where?: indicateurs_financiersWhereInput
    /**
     * Limit how many indicateurs_financiers to update.
     */
    limit?: number
  }

  /**
   * indicateurs_financiers upsert
   */
  export type indicateurs_financiersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * The filter to search for the indicateurs_financiers to update in case it exists.
     */
    where: indicateurs_financiersWhereUniqueInput
    /**
     * In case the indicateurs_financiers found by the `where` argument doesn't exist, create a new indicateurs_financiers with this data.
     */
    create: XOR<indicateurs_financiersCreateInput, indicateurs_financiersUncheckedCreateInput>
    /**
     * In case the indicateurs_financiers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<indicateurs_financiersUpdateInput, indicateurs_financiersUncheckedUpdateInput>
  }

  /**
   * indicateurs_financiers delete
   */
  export type indicateurs_financiersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
    /**
     * Filter which indicateurs_financiers to delete.
     */
    where: indicateurs_financiersWhereUniqueInput
  }

  /**
   * indicateurs_financiers deleteMany
   */
  export type indicateurs_financiersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which indicateurs_financiers to delete
     */
    where?: indicateurs_financiersWhereInput
    /**
     * Limit how many indicateurs_financiers to delete.
     */
    limit?: number
  }

  /**
   * indicateurs_financiers without action
   */
  export type indicateurs_financiersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indicateurs_financiers
     */
    select?: indicateurs_financiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indicateurs_financiers
     */
    omit?: indicateurs_financiersOmit<ExtArgs> | null
  }


  /**
   * Model lignes_budget
   */

  export type AggregateLignes_budget = {
    _count: Lignes_budgetCountAggregateOutputType | null
    _avg: Lignes_budgetAvgAggregateOutputType | null
    _sum: Lignes_budgetSumAggregateOutputType | null
    _min: Lignes_budgetMinAggregateOutputType | null
    _max: Lignes_budgetMaxAggregateOutputType | null
  }

  export type Lignes_budgetAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    activite_id: number | null
    ressource_id: number | null
    annee_periode: number | null
    montant: Decimal | null
  }

  export type Lignes_budgetSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    activite_id: bigint | null
    ressource_id: bigint | null
    annee_periode: number | null
    montant: Decimal | null
  }

  export type Lignes_budgetMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    activite_id: bigint | null
    ressource_id: bigint | null
    categorie: string | null
    description: string | null
    annee_periode: number | null
    montant: Decimal | null
    devise: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type Lignes_budgetMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    activite_id: bigint | null
    ressource_id: bigint | null
    categorie: string | null
    description: string | null
    annee_periode: number | null
    montant: Decimal | null
    devise: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type Lignes_budgetCountAggregateOutputType = {
    id: number
    projet_id: number
    activite_id: number
    ressource_id: number
    categorie: number
    description: number
    annee_periode: number
    montant: number
    devise: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type Lignes_budgetAvgAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    ressource_id?: true
    annee_periode?: true
    montant?: true
  }

  export type Lignes_budgetSumAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    ressource_id?: true
    annee_periode?: true
    montant?: true
  }

  export type Lignes_budgetMinAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    ressource_id?: true
    categorie?: true
    description?: true
    annee_periode?: true
    montant?: true
    devise?: true
    cree_le?: true
    modifie_le?: true
  }

  export type Lignes_budgetMaxAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    ressource_id?: true
    categorie?: true
    description?: true
    annee_periode?: true
    montant?: true
    devise?: true
    cree_le?: true
    modifie_le?: true
  }

  export type Lignes_budgetCountAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    ressource_id?: true
    categorie?: true
    description?: true
    annee_periode?: true
    montant?: true
    devise?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type Lignes_budgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lignes_budget to aggregate.
     */
    where?: lignes_budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lignes_budgets to fetch.
     */
    orderBy?: lignes_budgetOrderByWithRelationInput | lignes_budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lignes_budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lignes_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lignes_budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lignes_budgets
    **/
    _count?: true | Lignes_budgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lignes_budgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lignes_budgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lignes_budgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lignes_budgetMaxAggregateInputType
  }

  export type GetLignes_budgetAggregateType<T extends Lignes_budgetAggregateArgs> = {
        [P in keyof T & keyof AggregateLignes_budget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLignes_budget[P]>
      : GetScalarType<T[P], AggregateLignes_budget[P]>
  }




  export type lignes_budgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lignes_budgetWhereInput
    orderBy?: lignes_budgetOrderByWithAggregationInput | lignes_budgetOrderByWithAggregationInput[]
    by: Lignes_budgetScalarFieldEnum[] | Lignes_budgetScalarFieldEnum
    having?: lignes_budgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lignes_budgetCountAggregateInputType | true
    _avg?: Lignes_budgetAvgAggregateInputType
    _sum?: Lignes_budgetSumAggregateInputType
    _min?: Lignes_budgetMinAggregateInputType
    _max?: Lignes_budgetMaxAggregateInputType
  }

  export type Lignes_budgetGroupByOutputType = {
    id: bigint
    projet_id: bigint
    activite_id: bigint | null
    ressource_id: bigint | null
    categorie: string | null
    description: string | null
    annee_periode: number | null
    montant: Decimal | null
    devise: string | null
    cree_le: Date
    modifie_le: Date
    _count: Lignes_budgetCountAggregateOutputType | null
    _avg: Lignes_budgetAvgAggregateOutputType | null
    _sum: Lignes_budgetSumAggregateOutputType | null
    _min: Lignes_budgetMinAggregateOutputType | null
    _max: Lignes_budgetMaxAggregateOutputType | null
  }

  type GetLignes_budgetGroupByPayload<T extends lignes_budgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lignes_budgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lignes_budgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lignes_budgetGroupByOutputType[P]>
            : GetScalarType<T[P], Lignes_budgetGroupByOutputType[P]>
        }
      >
    >


  export type lignes_budgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    activite_id?: boolean
    ressource_id?: boolean
    categorie?: boolean
    description?: boolean
    annee_periode?: boolean
    montant?: boolean
    devise?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["lignes_budget"]>



  export type lignes_budgetSelectScalar = {
    id?: boolean
    projet_id?: boolean
    activite_id?: boolean
    ressource_id?: boolean
    categorie?: boolean
    description?: boolean
    annee_periode?: boolean
    montant?: boolean
    devise?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type lignes_budgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "activite_id" | "ressource_id" | "categorie" | "description" | "annee_periode" | "montant" | "devise" | "cree_le" | "modifie_le", ExtArgs["result"]["lignes_budget"]>

  export type $lignes_budgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lignes_budget"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      activite_id: bigint | null
      ressource_id: bigint | null
      categorie: string | null
      description: string | null
      annee_periode: number | null
      montant: Prisma.Decimal | null
      devise: string | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["lignes_budget"]>
    composites: {}
  }

  type lignes_budgetGetPayload<S extends boolean | null | undefined | lignes_budgetDefaultArgs> = $Result.GetResult<Prisma.$lignes_budgetPayload, S>

  type lignes_budgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lignes_budgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lignes_budgetCountAggregateInputType | true
    }

  export interface lignes_budgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lignes_budget'], meta: { name: 'lignes_budget' } }
    /**
     * Find zero or one Lignes_budget that matches the filter.
     * @param {lignes_budgetFindUniqueArgs} args - Arguments to find a Lignes_budget
     * @example
     * // Get one Lignes_budget
     * const lignes_budget = await prisma.lignes_budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lignes_budgetFindUniqueArgs>(args: SelectSubset<T, lignes_budgetFindUniqueArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lignes_budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lignes_budgetFindUniqueOrThrowArgs} args - Arguments to find a Lignes_budget
     * @example
     * // Get one Lignes_budget
     * const lignes_budget = await prisma.lignes_budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lignes_budgetFindUniqueOrThrowArgs>(args: SelectSubset<T, lignes_budgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lignes_budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lignes_budgetFindFirstArgs} args - Arguments to find a Lignes_budget
     * @example
     * // Get one Lignes_budget
     * const lignes_budget = await prisma.lignes_budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lignes_budgetFindFirstArgs>(args?: SelectSubset<T, lignes_budgetFindFirstArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lignes_budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lignes_budgetFindFirstOrThrowArgs} args - Arguments to find a Lignes_budget
     * @example
     * // Get one Lignes_budget
     * const lignes_budget = await prisma.lignes_budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lignes_budgetFindFirstOrThrowArgs>(args?: SelectSubset<T, lignes_budgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lignes_budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lignes_budgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lignes_budgets
     * const lignes_budgets = await prisma.lignes_budget.findMany()
     * 
     * // Get first 10 Lignes_budgets
     * const lignes_budgets = await prisma.lignes_budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lignes_budgetWithIdOnly = await prisma.lignes_budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lignes_budgetFindManyArgs>(args?: SelectSubset<T, lignes_budgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lignes_budget.
     * @param {lignes_budgetCreateArgs} args - Arguments to create a Lignes_budget.
     * @example
     * // Create one Lignes_budget
     * const Lignes_budget = await prisma.lignes_budget.create({
     *   data: {
     *     // ... data to create a Lignes_budget
     *   }
     * })
     * 
     */
    create<T extends lignes_budgetCreateArgs>(args: SelectSubset<T, lignes_budgetCreateArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lignes_budgets.
     * @param {lignes_budgetCreateManyArgs} args - Arguments to create many Lignes_budgets.
     * @example
     * // Create many Lignes_budgets
     * const lignes_budget = await prisma.lignes_budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lignes_budgetCreateManyArgs>(args?: SelectSubset<T, lignes_budgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lignes_budget.
     * @param {lignes_budgetDeleteArgs} args - Arguments to delete one Lignes_budget.
     * @example
     * // Delete one Lignes_budget
     * const Lignes_budget = await prisma.lignes_budget.delete({
     *   where: {
     *     // ... filter to delete one Lignes_budget
     *   }
     * })
     * 
     */
    delete<T extends lignes_budgetDeleteArgs>(args: SelectSubset<T, lignes_budgetDeleteArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lignes_budget.
     * @param {lignes_budgetUpdateArgs} args - Arguments to update one Lignes_budget.
     * @example
     * // Update one Lignes_budget
     * const lignes_budget = await prisma.lignes_budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lignes_budgetUpdateArgs>(args: SelectSubset<T, lignes_budgetUpdateArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lignes_budgets.
     * @param {lignes_budgetDeleteManyArgs} args - Arguments to filter Lignes_budgets to delete.
     * @example
     * // Delete a few Lignes_budgets
     * const { count } = await prisma.lignes_budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lignes_budgetDeleteManyArgs>(args?: SelectSubset<T, lignes_budgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lignes_budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lignes_budgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lignes_budgets
     * const lignes_budget = await prisma.lignes_budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lignes_budgetUpdateManyArgs>(args: SelectSubset<T, lignes_budgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lignes_budget.
     * @param {lignes_budgetUpsertArgs} args - Arguments to update or create a Lignes_budget.
     * @example
     * // Update or create a Lignes_budget
     * const lignes_budget = await prisma.lignes_budget.upsert({
     *   create: {
     *     // ... data to create a Lignes_budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lignes_budget we want to update
     *   }
     * })
     */
    upsert<T extends lignes_budgetUpsertArgs>(args: SelectSubset<T, lignes_budgetUpsertArgs<ExtArgs>>): Prisma__lignes_budgetClient<$Result.GetResult<Prisma.$lignes_budgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lignes_budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lignes_budgetCountArgs} args - Arguments to filter Lignes_budgets to count.
     * @example
     * // Count the number of Lignes_budgets
     * const count = await prisma.lignes_budget.count({
     *   where: {
     *     // ... the filter for the Lignes_budgets we want to count
     *   }
     * })
    **/
    count<T extends lignes_budgetCountArgs>(
      args?: Subset<T, lignes_budgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lignes_budgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lignes_budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lignes_budgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lignes_budgetAggregateArgs>(args: Subset<T, Lignes_budgetAggregateArgs>): Prisma.PrismaPromise<GetLignes_budgetAggregateType<T>>

    /**
     * Group by Lignes_budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lignes_budgetGroupByArgs} args - Group by arguments.
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
      T extends lignes_budgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lignes_budgetGroupByArgs['orderBy'] }
        : { orderBy?: lignes_budgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lignes_budgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLignes_budgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lignes_budget model
   */
  readonly fields: lignes_budgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lignes_budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lignes_budgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lignes_budget model
   */
  interface lignes_budgetFieldRefs {
    readonly id: FieldRef<"lignes_budget", 'BigInt'>
    readonly projet_id: FieldRef<"lignes_budget", 'BigInt'>
    readonly activite_id: FieldRef<"lignes_budget", 'BigInt'>
    readonly ressource_id: FieldRef<"lignes_budget", 'BigInt'>
    readonly categorie: FieldRef<"lignes_budget", 'String'>
    readonly description: FieldRef<"lignes_budget", 'String'>
    readonly annee_periode: FieldRef<"lignes_budget", 'Int'>
    readonly montant: FieldRef<"lignes_budget", 'Decimal'>
    readonly devise: FieldRef<"lignes_budget", 'String'>
    readonly cree_le: FieldRef<"lignes_budget", 'DateTime'>
    readonly modifie_le: FieldRef<"lignes_budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lignes_budget findUnique
   */
  export type lignes_budgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * Filter, which lignes_budget to fetch.
     */
    where: lignes_budgetWhereUniqueInput
  }

  /**
   * lignes_budget findUniqueOrThrow
   */
  export type lignes_budgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * Filter, which lignes_budget to fetch.
     */
    where: lignes_budgetWhereUniqueInput
  }

  /**
   * lignes_budget findFirst
   */
  export type lignes_budgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * Filter, which lignes_budget to fetch.
     */
    where?: lignes_budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lignes_budgets to fetch.
     */
    orderBy?: lignes_budgetOrderByWithRelationInput | lignes_budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lignes_budgets.
     */
    cursor?: lignes_budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lignes_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lignes_budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lignes_budgets.
     */
    distinct?: Lignes_budgetScalarFieldEnum | Lignes_budgetScalarFieldEnum[]
  }

  /**
   * lignes_budget findFirstOrThrow
   */
  export type lignes_budgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * Filter, which lignes_budget to fetch.
     */
    where?: lignes_budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lignes_budgets to fetch.
     */
    orderBy?: lignes_budgetOrderByWithRelationInput | lignes_budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lignes_budgets.
     */
    cursor?: lignes_budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lignes_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lignes_budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lignes_budgets.
     */
    distinct?: Lignes_budgetScalarFieldEnum | Lignes_budgetScalarFieldEnum[]
  }

  /**
   * lignes_budget findMany
   */
  export type lignes_budgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * Filter, which lignes_budgets to fetch.
     */
    where?: lignes_budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lignes_budgets to fetch.
     */
    orderBy?: lignes_budgetOrderByWithRelationInput | lignes_budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lignes_budgets.
     */
    cursor?: lignes_budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lignes_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lignes_budgets.
     */
    skip?: number
    distinct?: Lignes_budgetScalarFieldEnum | Lignes_budgetScalarFieldEnum[]
  }

  /**
   * lignes_budget create
   */
  export type lignes_budgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * The data needed to create a lignes_budget.
     */
    data: XOR<lignes_budgetCreateInput, lignes_budgetUncheckedCreateInput>
  }

  /**
   * lignes_budget createMany
   */
  export type lignes_budgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lignes_budgets.
     */
    data: lignes_budgetCreateManyInput | lignes_budgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lignes_budget update
   */
  export type lignes_budgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * The data needed to update a lignes_budget.
     */
    data: XOR<lignes_budgetUpdateInput, lignes_budgetUncheckedUpdateInput>
    /**
     * Choose, which lignes_budget to update.
     */
    where: lignes_budgetWhereUniqueInput
  }

  /**
   * lignes_budget updateMany
   */
  export type lignes_budgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lignes_budgets.
     */
    data: XOR<lignes_budgetUpdateManyMutationInput, lignes_budgetUncheckedUpdateManyInput>
    /**
     * Filter which lignes_budgets to update
     */
    where?: lignes_budgetWhereInput
    /**
     * Limit how many lignes_budgets to update.
     */
    limit?: number
  }

  /**
   * lignes_budget upsert
   */
  export type lignes_budgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * The filter to search for the lignes_budget to update in case it exists.
     */
    where: lignes_budgetWhereUniqueInput
    /**
     * In case the lignes_budget found by the `where` argument doesn't exist, create a new lignes_budget with this data.
     */
    create: XOR<lignes_budgetCreateInput, lignes_budgetUncheckedCreateInput>
    /**
     * In case the lignes_budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lignes_budgetUpdateInput, lignes_budgetUncheckedUpdateInput>
  }

  /**
   * lignes_budget delete
   */
  export type lignes_budgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
    /**
     * Filter which lignes_budget to delete.
     */
    where: lignes_budgetWhereUniqueInput
  }

  /**
   * lignes_budget deleteMany
   */
  export type lignes_budgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lignes_budgets to delete
     */
    where?: lignes_budgetWhereInput
    /**
     * Limit how many lignes_budgets to delete.
     */
    limit?: number
  }

  /**
   * lignes_budget without action
   */
  export type lignes_budgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lignes_budget
     */
    select?: lignes_budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lignes_budget
     */
    omit?: lignes_budgetOmit<ExtArgs> | null
  }


  /**
   * Model modeles
   */

  export type AggregateModeles = {
    _count: ModelesCountAggregateOutputType | null
    _avg: ModelesAvgAggregateOutputType | null
    _sum: ModelesSumAggregateOutputType | null
    _min: ModelesMinAggregateOutputType | null
    _max: ModelesMaxAggregateOutputType | null
  }

  export type ModelesAvgAggregateOutputType = {
    id: number | null
    cree_par: number | null
  }

  export type ModelesSumAggregateOutputType = {
    id: bigint | null
    cree_par: bigint | null
  }

  export type ModelesMinAggregateOutputType = {
    id: bigint | null
    identifiant_slug: string | null
    nom: string | null
    secteur: string | null
    description: string | null
    structure: string | null
    cree_par: bigint | null
    est_public: boolean | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ModelesMaxAggregateOutputType = {
    id: bigint | null
    identifiant_slug: string | null
    nom: string | null
    secteur: string | null
    description: string | null
    structure: string | null
    cree_par: bigint | null
    est_public: boolean | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ModelesCountAggregateOutputType = {
    id: number
    identifiant_slug: number
    nom: number
    secteur: number
    description: number
    structure: number
    cree_par: number
    est_public: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type ModelesAvgAggregateInputType = {
    id?: true
    cree_par?: true
  }

  export type ModelesSumAggregateInputType = {
    id?: true
    cree_par?: true
  }

  export type ModelesMinAggregateInputType = {
    id?: true
    identifiant_slug?: true
    nom?: true
    secteur?: true
    description?: true
    structure?: true
    cree_par?: true
    est_public?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ModelesMaxAggregateInputType = {
    id?: true
    identifiant_slug?: true
    nom?: true
    secteur?: true
    description?: true
    structure?: true
    cree_par?: true
    est_public?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ModelesCountAggregateInputType = {
    id?: true
    identifiant_slug?: true
    nom?: true
    secteur?: true
    description?: true
    structure?: true
    cree_par?: true
    est_public?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type ModelesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modeles to aggregate.
     */
    where?: modelesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modeles to fetch.
     */
    orderBy?: modelesOrderByWithRelationInput | modelesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modelesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modeles
    **/
    _count?: true | ModelesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelesMaxAggregateInputType
  }

  export type GetModelesAggregateType<T extends ModelesAggregateArgs> = {
        [P in keyof T & keyof AggregateModeles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModeles[P]>
      : GetScalarType<T[P], AggregateModeles[P]>
  }




  export type modelesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modelesWhereInput
    orderBy?: modelesOrderByWithAggregationInput | modelesOrderByWithAggregationInput[]
    by: ModelesScalarFieldEnum[] | ModelesScalarFieldEnum
    having?: modelesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelesCountAggregateInputType | true
    _avg?: ModelesAvgAggregateInputType
    _sum?: ModelesSumAggregateInputType
    _min?: ModelesMinAggregateInputType
    _max?: ModelesMaxAggregateInputType
  }

  export type ModelesGroupByOutputType = {
    id: bigint
    identifiant_slug: string
    nom: string
    secteur: string | null
    description: string | null
    structure: string
    cree_par: bigint | null
    est_public: boolean | null
    cree_le: Date
    modifie_le: Date
    _count: ModelesCountAggregateOutputType | null
    _avg: ModelesAvgAggregateOutputType | null
    _sum: ModelesSumAggregateOutputType | null
    _min: ModelesMinAggregateOutputType | null
    _max: ModelesMaxAggregateOutputType | null
  }

  type GetModelesGroupByPayload<T extends modelesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelesGroupByOutputType[P]>
            : GetScalarType<T[P], ModelesGroupByOutputType[P]>
        }
      >
    >


  export type modelesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifiant_slug?: boolean
    nom?: boolean
    secteur?: boolean
    description?: boolean
    structure?: boolean
    cree_par?: boolean
    est_public?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["modeles"]>



  export type modelesSelectScalar = {
    id?: boolean
    identifiant_slug?: boolean
    nom?: boolean
    secteur?: boolean
    description?: boolean
    structure?: boolean
    cree_par?: boolean
    est_public?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type modelesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifiant_slug" | "nom" | "secteur" | "description" | "structure" | "cree_par" | "est_public" | "cree_le" | "modifie_le", ExtArgs["result"]["modeles"]>

  export type $modelesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modeles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      identifiant_slug: string
      nom: string
      secteur: string | null
      description: string | null
      structure: string
      cree_par: bigint | null
      est_public: boolean | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["modeles"]>
    composites: {}
  }

  type modelesGetPayload<S extends boolean | null | undefined | modelesDefaultArgs> = $Result.GetResult<Prisma.$modelesPayload, S>

  type modelesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modelesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelesCountAggregateInputType | true
    }

  export interface modelesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modeles'], meta: { name: 'modeles' } }
    /**
     * Find zero or one Modeles that matches the filter.
     * @param {modelesFindUniqueArgs} args - Arguments to find a Modeles
     * @example
     * // Get one Modeles
     * const modeles = await prisma.modeles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modelesFindUniqueArgs>(args: SelectSubset<T, modelesFindUniqueArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modeles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modelesFindUniqueOrThrowArgs} args - Arguments to find a Modeles
     * @example
     * // Get one Modeles
     * const modeles = await prisma.modeles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modelesFindUniqueOrThrowArgs>(args: SelectSubset<T, modelesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modeles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelesFindFirstArgs} args - Arguments to find a Modeles
     * @example
     * // Get one Modeles
     * const modeles = await prisma.modeles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modelesFindFirstArgs>(args?: SelectSubset<T, modelesFindFirstArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modeles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelesFindFirstOrThrowArgs} args - Arguments to find a Modeles
     * @example
     * // Get one Modeles
     * const modeles = await prisma.modeles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modelesFindFirstOrThrowArgs>(args?: SelectSubset<T, modelesFindFirstOrThrowArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modeles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modeles
     * const modeles = await prisma.modeles.findMany()
     * 
     * // Get first 10 Modeles
     * const modeles = await prisma.modeles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelesWithIdOnly = await prisma.modeles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modelesFindManyArgs>(args?: SelectSubset<T, modelesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modeles.
     * @param {modelesCreateArgs} args - Arguments to create a Modeles.
     * @example
     * // Create one Modeles
     * const Modeles = await prisma.modeles.create({
     *   data: {
     *     // ... data to create a Modeles
     *   }
     * })
     * 
     */
    create<T extends modelesCreateArgs>(args: SelectSubset<T, modelesCreateArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modeles.
     * @param {modelesCreateManyArgs} args - Arguments to create many Modeles.
     * @example
     * // Create many Modeles
     * const modeles = await prisma.modeles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modelesCreateManyArgs>(args?: SelectSubset<T, modelesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modeles.
     * @param {modelesDeleteArgs} args - Arguments to delete one Modeles.
     * @example
     * // Delete one Modeles
     * const Modeles = await prisma.modeles.delete({
     *   where: {
     *     // ... filter to delete one Modeles
     *   }
     * })
     * 
     */
    delete<T extends modelesDeleteArgs>(args: SelectSubset<T, modelesDeleteArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modeles.
     * @param {modelesUpdateArgs} args - Arguments to update one Modeles.
     * @example
     * // Update one Modeles
     * const modeles = await prisma.modeles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modelesUpdateArgs>(args: SelectSubset<T, modelesUpdateArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modeles.
     * @param {modelesDeleteManyArgs} args - Arguments to filter Modeles to delete.
     * @example
     * // Delete a few Modeles
     * const { count } = await prisma.modeles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modelesDeleteManyArgs>(args?: SelectSubset<T, modelesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modeles
     * const modeles = await prisma.modeles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modelesUpdateManyArgs>(args: SelectSubset<T, modelesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modeles.
     * @param {modelesUpsertArgs} args - Arguments to update or create a Modeles.
     * @example
     * // Update or create a Modeles
     * const modeles = await prisma.modeles.upsert({
     *   create: {
     *     // ... data to create a Modeles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modeles we want to update
     *   }
     * })
     */
    upsert<T extends modelesUpsertArgs>(args: SelectSubset<T, modelesUpsertArgs<ExtArgs>>): Prisma__modelesClient<$Result.GetResult<Prisma.$modelesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelesCountArgs} args - Arguments to filter Modeles to count.
     * @example
     * // Count the number of Modeles
     * const count = await prisma.modeles.count({
     *   where: {
     *     // ... the filter for the Modeles we want to count
     *   }
     * })
    **/
    count<T extends modelesCountArgs>(
      args?: Subset<T, modelesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelesAggregateArgs>(args: Subset<T, ModelesAggregateArgs>): Prisma.PrismaPromise<GetModelesAggregateType<T>>

    /**
     * Group by Modeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelesGroupByArgs} args - Group by arguments.
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
      T extends modelesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modelesGroupByArgs['orderBy'] }
        : { orderBy?: modelesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modelesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modeles model
   */
  readonly fields: modelesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modeles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modelesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the modeles model
   */
  interface modelesFieldRefs {
    readonly id: FieldRef<"modeles", 'BigInt'>
    readonly identifiant_slug: FieldRef<"modeles", 'String'>
    readonly nom: FieldRef<"modeles", 'String'>
    readonly secteur: FieldRef<"modeles", 'String'>
    readonly description: FieldRef<"modeles", 'String'>
    readonly structure: FieldRef<"modeles", 'String'>
    readonly cree_par: FieldRef<"modeles", 'BigInt'>
    readonly est_public: FieldRef<"modeles", 'Boolean'>
    readonly cree_le: FieldRef<"modeles", 'DateTime'>
    readonly modifie_le: FieldRef<"modeles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * modeles findUnique
   */
  export type modelesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * Filter, which modeles to fetch.
     */
    where: modelesWhereUniqueInput
  }

  /**
   * modeles findUniqueOrThrow
   */
  export type modelesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * Filter, which modeles to fetch.
     */
    where: modelesWhereUniqueInput
  }

  /**
   * modeles findFirst
   */
  export type modelesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * Filter, which modeles to fetch.
     */
    where?: modelesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modeles to fetch.
     */
    orderBy?: modelesOrderByWithRelationInput | modelesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modeles.
     */
    cursor?: modelesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modeles.
     */
    distinct?: ModelesScalarFieldEnum | ModelesScalarFieldEnum[]
  }

  /**
   * modeles findFirstOrThrow
   */
  export type modelesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * Filter, which modeles to fetch.
     */
    where?: modelesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modeles to fetch.
     */
    orderBy?: modelesOrderByWithRelationInput | modelesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modeles.
     */
    cursor?: modelesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modeles.
     */
    distinct?: ModelesScalarFieldEnum | ModelesScalarFieldEnum[]
  }

  /**
   * modeles findMany
   */
  export type modelesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * Filter, which modeles to fetch.
     */
    where?: modelesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modeles to fetch.
     */
    orderBy?: modelesOrderByWithRelationInput | modelesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modeles.
     */
    cursor?: modelesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modeles.
     */
    skip?: number
    distinct?: ModelesScalarFieldEnum | ModelesScalarFieldEnum[]
  }

  /**
   * modeles create
   */
  export type modelesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * The data needed to create a modeles.
     */
    data: XOR<modelesCreateInput, modelesUncheckedCreateInput>
  }

  /**
   * modeles createMany
   */
  export type modelesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modeles.
     */
    data: modelesCreateManyInput | modelesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modeles update
   */
  export type modelesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * The data needed to update a modeles.
     */
    data: XOR<modelesUpdateInput, modelesUncheckedUpdateInput>
    /**
     * Choose, which modeles to update.
     */
    where: modelesWhereUniqueInput
  }

  /**
   * modeles updateMany
   */
  export type modelesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modeles.
     */
    data: XOR<modelesUpdateManyMutationInput, modelesUncheckedUpdateManyInput>
    /**
     * Filter which modeles to update
     */
    where?: modelesWhereInput
    /**
     * Limit how many modeles to update.
     */
    limit?: number
  }

  /**
   * modeles upsert
   */
  export type modelesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * The filter to search for the modeles to update in case it exists.
     */
    where: modelesWhereUniqueInput
    /**
     * In case the modeles found by the `where` argument doesn't exist, create a new modeles with this data.
     */
    create: XOR<modelesCreateInput, modelesUncheckedCreateInput>
    /**
     * In case the modeles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modelesUpdateInput, modelesUncheckedUpdateInput>
  }

  /**
   * modeles delete
   */
  export type modelesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
    /**
     * Filter which modeles to delete.
     */
    where: modelesWhereUniqueInput
  }

  /**
   * modeles deleteMany
   */
  export type modelesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modeles to delete
     */
    where?: modelesWhereInput
    /**
     * Limit how many modeles to delete.
     */
    limit?: number
  }

  /**
   * modeles without action
   */
  export type modelesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modeles
     */
    select?: modelesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modeles
     */
    omit?: modelesOmit<ExtArgs> | null
  }


  /**
   * Model organisations
   */

  export type AggregateOrganisations = {
    _count: OrganisationsCountAggregateOutputType | null
    _avg: OrganisationsAvgAggregateOutputType | null
    _sum: OrganisationsSumAggregateOutputType | null
    _min: OrganisationsMinAggregateOutputType | null
    _max: OrganisationsMaxAggregateOutputType | null
  }

  export type OrganisationsAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganisationsSumAggregateOutputType = {
    id: bigint | null
  }

  export type OrganisationsMinAggregateOutputType = {
    id: bigint | null
    nom: string | null
    type: string | null
    contact_json: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type OrganisationsMaxAggregateOutputType = {
    id: bigint | null
    nom: string | null
    type: string | null
    contact_json: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type OrganisationsCountAggregateOutputType = {
    id: number
    nom: number
    type: number
    contact_json: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type OrganisationsAvgAggregateInputType = {
    id?: true
  }

  export type OrganisationsSumAggregateInputType = {
    id?: true
  }

  export type OrganisationsMinAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    contact_json?: true
    cree_le?: true
    modifie_le?: true
  }

  export type OrganisationsMaxAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    contact_json?: true
    cree_le?: true
    modifie_le?: true
  }

  export type OrganisationsCountAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    contact_json?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type OrganisationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisations to aggregate.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organisations
    **/
    _count?: true | OrganisationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganisationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganisationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationsMaxAggregateInputType
  }

  export type GetOrganisationsAggregateType<T extends OrganisationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisations[P]>
      : GetScalarType<T[P], AggregateOrganisations[P]>
  }




  export type organisationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organisationsWhereInput
    orderBy?: organisationsOrderByWithAggregationInput | organisationsOrderByWithAggregationInput[]
    by: OrganisationsScalarFieldEnum[] | OrganisationsScalarFieldEnum
    having?: organisationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationsCountAggregateInputType | true
    _avg?: OrganisationsAvgAggregateInputType
    _sum?: OrganisationsSumAggregateInputType
    _min?: OrganisationsMinAggregateInputType
    _max?: OrganisationsMaxAggregateInputType
  }

  export type OrganisationsGroupByOutputType = {
    id: bigint
    nom: string
    type: string | null
    contact_json: string | null
    cree_le: Date
    modifie_le: Date
    _count: OrganisationsCountAggregateOutputType | null
    _avg: OrganisationsAvgAggregateOutputType | null
    _sum: OrganisationsSumAggregateOutputType | null
    _min: OrganisationsMinAggregateOutputType | null
    _max: OrganisationsMaxAggregateOutputType | null
  }

  type GetOrganisationsGroupByPayload<T extends organisationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationsGroupByOutputType[P]>
        }
      >
    >


  export type organisationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    type?: boolean
    contact_json?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["organisations"]>



  export type organisationsSelectScalar = {
    id?: boolean
    nom?: boolean
    type?: boolean
    contact_json?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type organisationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "type" | "contact_json" | "cree_le" | "modifie_le", ExtArgs["result"]["organisations"]>

  export type $organisationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organisations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nom: string
      type: string | null
      contact_json: string | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["organisations"]>
    composites: {}
  }

  type organisationsGetPayload<S extends boolean | null | undefined | organisationsDefaultArgs> = $Result.GetResult<Prisma.$organisationsPayload, S>

  type organisationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organisationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganisationsCountAggregateInputType | true
    }

  export interface organisationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organisations'], meta: { name: 'organisations' } }
    /**
     * Find zero or one Organisations that matches the filter.
     * @param {organisationsFindUniqueArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organisationsFindUniqueArgs>(args: SelectSubset<T, organisationsFindUniqueArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organisations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organisationsFindUniqueOrThrowArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organisationsFindUniqueOrThrowArgs>(args: SelectSubset<T, organisationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsFindFirstArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organisationsFindFirstArgs>(args?: SelectSubset<T, organisationsFindFirstArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsFindFirstOrThrowArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organisationsFindFirstOrThrowArgs>(args?: SelectSubset<T, organisationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisations.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationsWithIdOnly = await prisma.organisations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organisationsFindManyArgs>(args?: SelectSubset<T, organisationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organisations.
     * @param {organisationsCreateArgs} args - Arguments to create a Organisations.
     * @example
     * // Create one Organisations
     * const Organisations = await prisma.organisations.create({
     *   data: {
     *     // ... data to create a Organisations
     *   }
     * })
     * 
     */
    create<T extends organisationsCreateArgs>(args: SelectSubset<T, organisationsCreateArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisations.
     * @param {organisationsCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisations = await prisma.organisations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organisationsCreateManyArgs>(args?: SelectSubset<T, organisationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organisations.
     * @param {organisationsDeleteArgs} args - Arguments to delete one Organisations.
     * @example
     * // Delete one Organisations
     * const Organisations = await prisma.organisations.delete({
     *   where: {
     *     // ... filter to delete one Organisations
     *   }
     * })
     * 
     */
    delete<T extends organisationsDeleteArgs>(args: SelectSubset<T, organisationsDeleteArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organisations.
     * @param {organisationsUpdateArgs} args - Arguments to update one Organisations.
     * @example
     * // Update one Organisations
     * const organisations = await prisma.organisations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organisationsUpdateArgs>(args: SelectSubset<T, organisationsUpdateArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisations.
     * @param {organisationsDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organisationsDeleteManyArgs>(args?: SelectSubset<T, organisationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisations = await prisma.organisations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organisationsUpdateManyArgs>(args: SelectSubset<T, organisationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organisations.
     * @param {organisationsUpsertArgs} args - Arguments to update or create a Organisations.
     * @example
     * // Update or create a Organisations
     * const organisations = await prisma.organisations.upsert({
     *   create: {
     *     // ... data to create a Organisations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisations we want to update
     *   }
     * })
     */
    upsert<T extends organisationsUpsertArgs>(args: SelectSubset<T, organisationsUpsertArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisations.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends organisationsCountArgs>(
      args?: Subset<T, organisationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationsAggregateArgs>(args: Subset<T, OrganisationsAggregateArgs>): Prisma.PrismaPromise<GetOrganisationsAggregateType<T>>

    /**
     * Group by Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsGroupByArgs} args - Group by arguments.
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
      T extends organisationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organisationsGroupByArgs['orderBy'] }
        : { orderBy?: organisationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organisationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organisations model
   */
  readonly fields: organisationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organisations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organisationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organisations model
   */
  interface organisationsFieldRefs {
    readonly id: FieldRef<"organisations", 'BigInt'>
    readonly nom: FieldRef<"organisations", 'String'>
    readonly type: FieldRef<"organisations", 'String'>
    readonly contact_json: FieldRef<"organisations", 'String'>
    readonly cree_le: FieldRef<"organisations", 'DateTime'>
    readonly modifie_le: FieldRef<"organisations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * organisations findUnique
   */
  export type organisationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations findUniqueOrThrow
   */
  export type organisationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations findFirst
   */
  export type organisationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisations.
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisations.
     */
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * organisations findFirstOrThrow
   */
  export type organisationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisations.
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisations.
     */
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * organisations findMany
   */
  export type organisationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organisations.
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * organisations create
   */
  export type organisationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * The data needed to create a organisations.
     */
    data: XOR<organisationsCreateInput, organisationsUncheckedCreateInput>
  }

  /**
   * organisations createMany
   */
  export type organisationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organisations.
     */
    data: organisationsCreateManyInput | organisationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organisations update
   */
  export type organisationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * The data needed to update a organisations.
     */
    data: XOR<organisationsUpdateInput, organisationsUncheckedUpdateInput>
    /**
     * Choose, which organisations to update.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations updateMany
   */
  export type organisationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organisations.
     */
    data: XOR<organisationsUpdateManyMutationInput, organisationsUncheckedUpdateManyInput>
    /**
     * Filter which organisations to update
     */
    where?: organisationsWhereInput
    /**
     * Limit how many organisations to update.
     */
    limit?: number
  }

  /**
   * organisations upsert
   */
  export type organisationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * The filter to search for the organisations to update in case it exists.
     */
    where: organisationsWhereUniqueInput
    /**
     * In case the organisations found by the `where` argument doesn't exist, create a new organisations with this data.
     */
    create: XOR<organisationsCreateInput, organisationsUncheckedCreateInput>
    /**
     * In case the organisations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organisationsUpdateInput, organisationsUncheckedUpdateInput>
  }

  /**
   * organisations delete
   */
  export type organisationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Filter which organisations to delete.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations deleteMany
   */
  export type organisationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisations to delete
     */
    where?: organisationsWhereInput
    /**
     * Limit how many organisations to delete.
     */
    limit?: number
  }

  /**
   * organisations without action
   */
  export type organisationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
  }


  /**
   * Model projets
   */

  export type AggregateProjets = {
    _count: ProjetsCountAggregateOutputType | null
    _avg: ProjetsAvgAggregateOutputType | null
    _sum: ProjetsSumAggregateOutputType | null
    _min: ProjetsMinAggregateOutputType | null
    _max: ProjetsMaxAggregateOutputType | null
  }

  export type ProjetsAvgAggregateOutputType = {
    id: number | null
    proprietaire_id: number | null
    organisation_id: number | null
    progression: number | null
  }

  export type ProjetsSumAggregateOutputType = {
    id: bigint | null
    proprietaire_id: bigint | null
    organisation_id: bigint | null
    progression: number | null
  }

  export type ProjetsMinAggregateOutputType = {
    id: bigint | null
    proprietaire_id: bigint | null
    organisation_id: bigint | null
    type: $Enums.projets_type | null
    statut: $Enums.projets_statut | null
    titre: string | null
    description_courte: string | null
    metadonnees: string | null
    progression: number | null
    est_public: boolean | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ProjetsMaxAggregateOutputType = {
    id: bigint | null
    proprietaire_id: bigint | null
    organisation_id: bigint | null
    type: $Enums.projets_type | null
    statut: $Enums.projets_statut | null
    titre: string | null
    description_courte: string | null
    metadonnees: string | null
    progression: number | null
    est_public: boolean | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ProjetsCountAggregateOutputType = {
    id: number
    proprietaire_id: number
    organisation_id: number
    type: number
    statut: number
    titre: number
    description_courte: number
    metadonnees: number
    progression: number
    est_public: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type ProjetsAvgAggregateInputType = {
    id?: true
    proprietaire_id?: true
    organisation_id?: true
    progression?: true
  }

  export type ProjetsSumAggregateInputType = {
    id?: true
    proprietaire_id?: true
    organisation_id?: true
    progression?: true
  }

  export type ProjetsMinAggregateInputType = {
    id?: true
    proprietaire_id?: true
    organisation_id?: true
    type?: true
    statut?: true
    titre?: true
    description_courte?: true
    metadonnees?: true
    progression?: true
    est_public?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ProjetsMaxAggregateInputType = {
    id?: true
    proprietaire_id?: true
    organisation_id?: true
    type?: true
    statut?: true
    titre?: true
    description_courte?: true
    metadonnees?: true
    progression?: true
    est_public?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ProjetsCountAggregateInputType = {
    id?: true
    proprietaire_id?: true
    organisation_id?: true
    type?: true
    statut?: true
    titre?: true
    description_courte?: true
    metadonnees?: true
    progression?: true
    est_public?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type ProjetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projets to aggregate.
     */
    where?: projetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projets to fetch.
     */
    orderBy?: projetsOrderByWithRelationInput | projetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projets
    **/
    _count?: true | ProjetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetsMaxAggregateInputType
  }

  export type GetProjetsAggregateType<T extends ProjetsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjets[P]>
      : GetScalarType<T[P], AggregateProjets[P]>
  }




  export type projetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projetsWhereInput
    orderBy?: projetsOrderByWithAggregationInput | projetsOrderByWithAggregationInput[]
    by: ProjetsScalarFieldEnum[] | ProjetsScalarFieldEnum
    having?: projetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetsCountAggregateInputType | true
    _avg?: ProjetsAvgAggregateInputType
    _sum?: ProjetsSumAggregateInputType
    _min?: ProjetsMinAggregateInputType
    _max?: ProjetsMaxAggregateInputType
  }

  export type ProjetsGroupByOutputType = {
    id: bigint
    proprietaire_id: bigint
    organisation_id: bigint | null
    type: $Enums.projets_type
    statut: $Enums.projets_statut | null
    titre: string
    description_courte: string | null
    metadonnees: string | null
    progression: number | null
    est_public: boolean | null
    cree_le: Date
    modifie_le: Date
    _count: ProjetsCountAggregateOutputType | null
    _avg: ProjetsAvgAggregateOutputType | null
    _sum: ProjetsSumAggregateOutputType | null
    _min: ProjetsMinAggregateOutputType | null
    _max: ProjetsMaxAggregateOutputType | null
  }

  type GetProjetsGroupByPayload<T extends projetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetsGroupByOutputType[P]>
        }
      >
    >


  export type projetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proprietaire_id?: boolean
    organisation_id?: boolean
    type?: boolean
    statut?: boolean
    titre?: boolean
    description_courte?: boolean
    metadonnees?: boolean
    progression?: boolean
    est_public?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["projets"]>



  export type projetsSelectScalar = {
    id?: boolean
    proprietaire_id?: boolean
    organisation_id?: boolean
    type?: boolean
    statut?: boolean
    titre?: boolean
    description_courte?: boolean
    metadonnees?: boolean
    progression?: boolean
    est_public?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type projetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "proprietaire_id" | "organisation_id" | "type" | "statut" | "titre" | "description_courte" | "metadonnees" | "progression" | "est_public" | "cree_le" | "modifie_le", ExtArgs["result"]["projets"]>

  export type $projetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      proprietaire_id: bigint
      organisation_id: bigint | null
      type: $Enums.projets_type
      statut: $Enums.projets_statut | null
      titre: string
      description_courte: string | null
      metadonnees: string | null
      progression: number | null
      est_public: boolean | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["projets"]>
    composites: {}
  }

  type projetsGetPayload<S extends boolean | null | undefined | projetsDefaultArgs> = $Result.GetResult<Prisma.$projetsPayload, S>

  type projetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetsCountAggregateInputType | true
    }

  export interface projetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projets'], meta: { name: 'projets' } }
    /**
     * Find zero or one Projets that matches the filter.
     * @param {projetsFindUniqueArgs} args - Arguments to find a Projets
     * @example
     * // Get one Projets
     * const projets = await prisma.projets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projetsFindUniqueArgs>(args: SelectSubset<T, projetsFindUniqueArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projetsFindUniqueOrThrowArgs} args - Arguments to find a Projets
     * @example
     * // Get one Projets
     * const projets = await prisma.projets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projetsFindUniqueOrThrowArgs>(args: SelectSubset<T, projetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetsFindFirstArgs} args - Arguments to find a Projets
     * @example
     * // Get one Projets
     * const projets = await prisma.projets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projetsFindFirstArgs>(args?: SelectSubset<T, projetsFindFirstArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetsFindFirstOrThrowArgs} args - Arguments to find a Projets
     * @example
     * // Get one Projets
     * const projets = await prisma.projets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projetsFindFirstOrThrowArgs>(args?: SelectSubset<T, projetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projets
     * const projets = await prisma.projets.findMany()
     * 
     * // Get first 10 Projets
     * const projets = await prisma.projets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetsWithIdOnly = await prisma.projets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projetsFindManyArgs>(args?: SelectSubset<T, projetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projets.
     * @param {projetsCreateArgs} args - Arguments to create a Projets.
     * @example
     * // Create one Projets
     * const Projets = await prisma.projets.create({
     *   data: {
     *     // ... data to create a Projets
     *   }
     * })
     * 
     */
    create<T extends projetsCreateArgs>(args: SelectSubset<T, projetsCreateArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projets.
     * @param {projetsCreateManyArgs} args - Arguments to create many Projets.
     * @example
     * // Create many Projets
     * const projets = await prisma.projets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projetsCreateManyArgs>(args?: SelectSubset<T, projetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projets.
     * @param {projetsDeleteArgs} args - Arguments to delete one Projets.
     * @example
     * // Delete one Projets
     * const Projets = await prisma.projets.delete({
     *   where: {
     *     // ... filter to delete one Projets
     *   }
     * })
     * 
     */
    delete<T extends projetsDeleteArgs>(args: SelectSubset<T, projetsDeleteArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projets.
     * @param {projetsUpdateArgs} args - Arguments to update one Projets.
     * @example
     * // Update one Projets
     * const projets = await prisma.projets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projetsUpdateArgs>(args: SelectSubset<T, projetsUpdateArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projets.
     * @param {projetsDeleteManyArgs} args - Arguments to filter Projets to delete.
     * @example
     * // Delete a few Projets
     * const { count } = await prisma.projets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projetsDeleteManyArgs>(args?: SelectSubset<T, projetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projets
     * const projets = await prisma.projets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projetsUpdateManyArgs>(args: SelectSubset<T, projetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projets.
     * @param {projetsUpsertArgs} args - Arguments to update or create a Projets.
     * @example
     * // Update or create a Projets
     * const projets = await prisma.projets.upsert({
     *   create: {
     *     // ... data to create a Projets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projets we want to update
     *   }
     * })
     */
    upsert<T extends projetsUpsertArgs>(args: SelectSubset<T, projetsUpsertArgs<ExtArgs>>): Prisma__projetsClient<$Result.GetResult<Prisma.$projetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetsCountArgs} args - Arguments to filter Projets to count.
     * @example
     * // Count the number of Projets
     * const count = await prisma.projets.count({
     *   where: {
     *     // ... the filter for the Projets we want to count
     *   }
     * })
    **/
    count<T extends projetsCountArgs>(
      args?: Subset<T, projetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetsAggregateArgs>(args: Subset<T, ProjetsAggregateArgs>): Prisma.PrismaPromise<GetProjetsAggregateType<T>>

    /**
     * Group by Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetsGroupByArgs} args - Group by arguments.
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
      T extends projetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projetsGroupByArgs['orderBy'] }
        : { orderBy?: projetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projets model
   */
  readonly fields: projetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projets model
   */
  interface projetsFieldRefs {
    readonly id: FieldRef<"projets", 'BigInt'>
    readonly proprietaire_id: FieldRef<"projets", 'BigInt'>
    readonly organisation_id: FieldRef<"projets", 'BigInt'>
    readonly type: FieldRef<"projets", 'projets_type'>
    readonly statut: FieldRef<"projets", 'projets_statut'>
    readonly titre: FieldRef<"projets", 'String'>
    readonly description_courte: FieldRef<"projets", 'String'>
    readonly metadonnees: FieldRef<"projets", 'String'>
    readonly progression: FieldRef<"projets", 'Int'>
    readonly est_public: FieldRef<"projets", 'Boolean'>
    readonly cree_le: FieldRef<"projets", 'DateTime'>
    readonly modifie_le: FieldRef<"projets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projets findUnique
   */
  export type projetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * Filter, which projets to fetch.
     */
    where: projetsWhereUniqueInput
  }

  /**
   * projets findUniqueOrThrow
   */
  export type projetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * Filter, which projets to fetch.
     */
    where: projetsWhereUniqueInput
  }

  /**
   * projets findFirst
   */
  export type projetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * Filter, which projets to fetch.
     */
    where?: projetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projets to fetch.
     */
    orderBy?: projetsOrderByWithRelationInput | projetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projets.
     */
    cursor?: projetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projets.
     */
    distinct?: ProjetsScalarFieldEnum | ProjetsScalarFieldEnum[]
  }

  /**
   * projets findFirstOrThrow
   */
  export type projetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * Filter, which projets to fetch.
     */
    where?: projetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projets to fetch.
     */
    orderBy?: projetsOrderByWithRelationInput | projetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projets.
     */
    cursor?: projetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projets.
     */
    distinct?: ProjetsScalarFieldEnum | ProjetsScalarFieldEnum[]
  }

  /**
   * projets findMany
   */
  export type projetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * Filter, which projets to fetch.
     */
    where?: projetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projets to fetch.
     */
    orderBy?: projetsOrderByWithRelationInput | projetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projets.
     */
    cursor?: projetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projets.
     */
    skip?: number
    distinct?: ProjetsScalarFieldEnum | ProjetsScalarFieldEnum[]
  }

  /**
   * projets create
   */
  export type projetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * The data needed to create a projets.
     */
    data: XOR<projetsCreateInput, projetsUncheckedCreateInput>
  }

  /**
   * projets createMany
   */
  export type projetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projets.
     */
    data: projetsCreateManyInput | projetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projets update
   */
  export type projetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * The data needed to update a projets.
     */
    data: XOR<projetsUpdateInput, projetsUncheckedUpdateInput>
    /**
     * Choose, which projets to update.
     */
    where: projetsWhereUniqueInput
  }

  /**
   * projets updateMany
   */
  export type projetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projets.
     */
    data: XOR<projetsUpdateManyMutationInput, projetsUncheckedUpdateManyInput>
    /**
     * Filter which projets to update
     */
    where?: projetsWhereInput
    /**
     * Limit how many projets to update.
     */
    limit?: number
  }

  /**
   * projets upsert
   */
  export type projetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * The filter to search for the projets to update in case it exists.
     */
    where: projetsWhereUniqueInput
    /**
     * In case the projets found by the `where` argument doesn't exist, create a new projets with this data.
     */
    create: XOR<projetsCreateInput, projetsUncheckedCreateInput>
    /**
     * In case the projets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projetsUpdateInput, projetsUncheckedUpdateInput>
  }

  /**
   * projets delete
   */
  export type projetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
    /**
     * Filter which projets to delete.
     */
    where: projetsWhereUniqueInput
  }

  /**
   * projets deleteMany
   */
  export type projetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projets to delete
     */
    where?: projetsWhereInput
    /**
     * Limit how many projets to delete.
     */
    limit?: number
  }

  /**
   * projets without action
   */
  export type projetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projets
     */
    select?: projetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projets
     */
    omit?: projetsOmit<ExtArgs> | null
  }


  /**
   * Model ressources
   */

  export type AggregateRessources = {
    _count: RessourcesCountAggregateOutputType | null
    _avg: RessourcesAvgAggregateOutputType | null
    _sum: RessourcesSumAggregateOutputType | null
    _min: RessourcesMinAggregateOutputType | null
    _max: RessourcesMaxAggregateOutputType | null
  }

  export type RessourcesAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    activite_id: number | null
    quantite: Decimal | null
    cout_unitaire: Decimal | null
    cout_total: Decimal | null
  }

  export type RessourcesSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    activite_id: bigint | null
    quantite: Decimal | null
    cout_unitaire: Decimal | null
    cout_total: Decimal | null
  }

  export type RessourcesMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    activite_id: bigint | null
    type_ressource: $Enums.ressources_type_ressource | null
    libelle: string | null
    unite: string | null
    quantite: Decimal | null
    cout_unitaire: Decimal | null
    frequence: $Enums.ressources_frequence | null
    cout_total: Decimal | null
    notes: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type RessourcesMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    activite_id: bigint | null
    type_ressource: $Enums.ressources_type_ressource | null
    libelle: string | null
    unite: string | null
    quantite: Decimal | null
    cout_unitaire: Decimal | null
    frequence: $Enums.ressources_frequence | null
    cout_total: Decimal | null
    notes: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type RessourcesCountAggregateOutputType = {
    id: number
    projet_id: number
    activite_id: number
    type_ressource: number
    libelle: number
    unite: number
    quantite: number
    cout_unitaire: number
    frequence: number
    cout_total: number
    notes: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type RessourcesAvgAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    quantite?: true
    cout_unitaire?: true
    cout_total?: true
  }

  export type RessourcesSumAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    quantite?: true
    cout_unitaire?: true
    cout_total?: true
  }

  export type RessourcesMinAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    type_ressource?: true
    libelle?: true
    unite?: true
    quantite?: true
    cout_unitaire?: true
    frequence?: true
    cout_total?: true
    notes?: true
    cree_le?: true
    modifie_le?: true
  }

  export type RessourcesMaxAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    type_ressource?: true
    libelle?: true
    unite?: true
    quantite?: true
    cout_unitaire?: true
    frequence?: true
    cout_total?: true
    notes?: true
    cree_le?: true
    modifie_le?: true
  }

  export type RessourcesCountAggregateInputType = {
    id?: true
    projet_id?: true
    activite_id?: true
    type_ressource?: true
    libelle?: true
    unite?: true
    quantite?: true
    cout_unitaire?: true
    frequence?: true
    cout_total?: true
    notes?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type RessourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ressources to aggregate.
     */
    where?: ressourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources to fetch.
     */
    orderBy?: ressourcesOrderByWithRelationInput | ressourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ressourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ressources
    **/
    _count?: true | RessourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RessourcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RessourcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RessourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RessourcesMaxAggregateInputType
  }

  export type GetRessourcesAggregateType<T extends RessourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateRessources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRessources[P]>
      : GetScalarType<T[P], AggregateRessources[P]>
  }




  export type ressourcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ressourcesWhereInput
    orderBy?: ressourcesOrderByWithAggregationInput | ressourcesOrderByWithAggregationInput[]
    by: RessourcesScalarFieldEnum[] | RessourcesScalarFieldEnum
    having?: ressourcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RessourcesCountAggregateInputType | true
    _avg?: RessourcesAvgAggregateInputType
    _sum?: RessourcesSumAggregateInputType
    _min?: RessourcesMinAggregateInputType
    _max?: RessourcesMaxAggregateInputType
  }

  export type RessourcesGroupByOutputType = {
    id: bigint
    projet_id: bigint
    activite_id: bigint | null
    type_ressource: $Enums.ressources_type_ressource | null
    libelle: string
    unite: string | null
    quantite: Decimal | null
    cout_unitaire: Decimal | null
    frequence: $Enums.ressources_frequence | null
    cout_total: Decimal | null
    notes: string | null
    cree_le: Date
    modifie_le: Date
    _count: RessourcesCountAggregateOutputType | null
    _avg: RessourcesAvgAggregateOutputType | null
    _sum: RessourcesSumAggregateOutputType | null
    _min: RessourcesMinAggregateOutputType | null
    _max: RessourcesMaxAggregateOutputType | null
  }

  type GetRessourcesGroupByPayload<T extends ressourcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RessourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RessourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RessourcesGroupByOutputType[P]>
            : GetScalarType<T[P], RessourcesGroupByOutputType[P]>
        }
      >
    >


  export type ressourcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    activite_id?: boolean
    type_ressource?: boolean
    libelle?: boolean
    unite?: boolean
    quantite?: boolean
    cout_unitaire?: boolean
    frequence?: boolean
    cout_total?: boolean
    notes?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["ressources"]>



  export type ressourcesSelectScalar = {
    id?: boolean
    projet_id?: boolean
    activite_id?: boolean
    type_ressource?: boolean
    libelle?: boolean
    unite?: boolean
    quantite?: boolean
    cout_unitaire?: boolean
    frequence?: boolean
    cout_total?: boolean
    notes?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type ressourcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "activite_id" | "type_ressource" | "libelle" | "unite" | "quantite" | "cout_unitaire" | "frequence" | "cout_total" | "notes" | "cree_le" | "modifie_le", ExtArgs["result"]["ressources"]>

  export type $ressourcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ressources"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      activite_id: bigint | null
      type_ressource: $Enums.ressources_type_ressource | null
      libelle: string
      unite: string | null
      quantite: Prisma.Decimal | null
      cout_unitaire: Prisma.Decimal | null
      frequence: $Enums.ressources_frequence | null
      cout_total: Prisma.Decimal | null
      notes: string | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["ressources"]>
    composites: {}
  }

  type ressourcesGetPayload<S extends boolean | null | undefined | ressourcesDefaultArgs> = $Result.GetResult<Prisma.$ressourcesPayload, S>

  type ressourcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ressourcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RessourcesCountAggregateInputType | true
    }

  export interface ressourcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ressources'], meta: { name: 'ressources' } }
    /**
     * Find zero or one Ressources that matches the filter.
     * @param {ressourcesFindUniqueArgs} args - Arguments to find a Ressources
     * @example
     * // Get one Ressources
     * const ressources = await prisma.ressources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ressourcesFindUniqueArgs>(args: SelectSubset<T, ressourcesFindUniqueArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ressources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ressourcesFindUniqueOrThrowArgs} args - Arguments to find a Ressources
     * @example
     * // Get one Ressources
     * const ressources = await prisma.ressources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ressourcesFindUniqueOrThrowArgs>(args: SelectSubset<T, ressourcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressourcesFindFirstArgs} args - Arguments to find a Ressources
     * @example
     * // Get one Ressources
     * const ressources = await prisma.ressources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ressourcesFindFirstArgs>(args?: SelectSubset<T, ressourcesFindFirstArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressourcesFindFirstOrThrowArgs} args - Arguments to find a Ressources
     * @example
     * // Get one Ressources
     * const ressources = await prisma.ressources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ressourcesFindFirstOrThrowArgs>(args?: SelectSubset<T, ressourcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ressources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressourcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressources
     * const ressources = await prisma.ressources.findMany()
     * 
     * // Get first 10 Ressources
     * const ressources = await prisma.ressources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ressourcesWithIdOnly = await prisma.ressources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ressourcesFindManyArgs>(args?: SelectSubset<T, ressourcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ressources.
     * @param {ressourcesCreateArgs} args - Arguments to create a Ressources.
     * @example
     * // Create one Ressources
     * const Ressources = await prisma.ressources.create({
     *   data: {
     *     // ... data to create a Ressources
     *   }
     * })
     * 
     */
    create<T extends ressourcesCreateArgs>(args: SelectSubset<T, ressourcesCreateArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ressources.
     * @param {ressourcesCreateManyArgs} args - Arguments to create many Ressources.
     * @example
     * // Create many Ressources
     * const ressources = await prisma.ressources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ressourcesCreateManyArgs>(args?: SelectSubset<T, ressourcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ressources.
     * @param {ressourcesDeleteArgs} args - Arguments to delete one Ressources.
     * @example
     * // Delete one Ressources
     * const Ressources = await prisma.ressources.delete({
     *   where: {
     *     // ... filter to delete one Ressources
     *   }
     * })
     * 
     */
    delete<T extends ressourcesDeleteArgs>(args: SelectSubset<T, ressourcesDeleteArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ressources.
     * @param {ressourcesUpdateArgs} args - Arguments to update one Ressources.
     * @example
     * // Update one Ressources
     * const ressources = await prisma.ressources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ressourcesUpdateArgs>(args: SelectSubset<T, ressourcesUpdateArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ressources.
     * @param {ressourcesDeleteManyArgs} args - Arguments to filter Ressources to delete.
     * @example
     * // Delete a few Ressources
     * const { count } = await prisma.ressources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ressourcesDeleteManyArgs>(args?: SelectSubset<T, ressourcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressourcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressources
     * const ressources = await prisma.ressources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ressourcesUpdateManyArgs>(args: SelectSubset<T, ressourcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ressources.
     * @param {ressourcesUpsertArgs} args - Arguments to update or create a Ressources.
     * @example
     * // Update or create a Ressources
     * const ressources = await prisma.ressources.upsert({
     *   create: {
     *     // ... data to create a Ressources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ressources we want to update
     *   }
     * })
     */
    upsert<T extends ressourcesUpsertArgs>(args: SelectSubset<T, ressourcesUpsertArgs<ExtArgs>>): Prisma__ressourcesClient<$Result.GetResult<Prisma.$ressourcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressourcesCountArgs} args - Arguments to filter Ressources to count.
     * @example
     * // Count the number of Ressources
     * const count = await prisma.ressources.count({
     *   where: {
     *     // ... the filter for the Ressources we want to count
     *   }
     * })
    **/
    count<T extends ressourcesCountArgs>(
      args?: Subset<T, ressourcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RessourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RessourcesAggregateArgs>(args: Subset<T, RessourcesAggregateArgs>): Prisma.PrismaPromise<GetRessourcesAggregateType<T>>

    /**
     * Group by Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressourcesGroupByArgs} args - Group by arguments.
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
      T extends ressourcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ressourcesGroupByArgs['orderBy'] }
        : { orderBy?: ressourcesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ressourcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ressources model
   */
  readonly fields: ressourcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ressources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ressourcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ressources model
   */
  interface ressourcesFieldRefs {
    readonly id: FieldRef<"ressources", 'BigInt'>
    readonly projet_id: FieldRef<"ressources", 'BigInt'>
    readonly activite_id: FieldRef<"ressources", 'BigInt'>
    readonly type_ressource: FieldRef<"ressources", 'ressources_type_ressource'>
    readonly libelle: FieldRef<"ressources", 'String'>
    readonly unite: FieldRef<"ressources", 'String'>
    readonly quantite: FieldRef<"ressources", 'Decimal'>
    readonly cout_unitaire: FieldRef<"ressources", 'Decimal'>
    readonly frequence: FieldRef<"ressources", 'ressources_frequence'>
    readonly cout_total: FieldRef<"ressources", 'Decimal'>
    readonly notes: FieldRef<"ressources", 'String'>
    readonly cree_le: FieldRef<"ressources", 'DateTime'>
    readonly modifie_le: FieldRef<"ressources", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ressources findUnique
   */
  export type ressourcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * Filter, which ressources to fetch.
     */
    where: ressourcesWhereUniqueInput
  }

  /**
   * ressources findUniqueOrThrow
   */
  export type ressourcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * Filter, which ressources to fetch.
     */
    where: ressourcesWhereUniqueInput
  }

  /**
   * ressources findFirst
   */
  export type ressourcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * Filter, which ressources to fetch.
     */
    where?: ressourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources to fetch.
     */
    orderBy?: ressourcesOrderByWithRelationInput | ressourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ressources.
     */
    cursor?: ressourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ressources.
     */
    distinct?: RessourcesScalarFieldEnum | RessourcesScalarFieldEnum[]
  }

  /**
   * ressources findFirstOrThrow
   */
  export type ressourcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * Filter, which ressources to fetch.
     */
    where?: ressourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources to fetch.
     */
    orderBy?: ressourcesOrderByWithRelationInput | ressourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ressources.
     */
    cursor?: ressourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ressources.
     */
    distinct?: RessourcesScalarFieldEnum | RessourcesScalarFieldEnum[]
  }

  /**
   * ressources findMany
   */
  export type ressourcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * Filter, which ressources to fetch.
     */
    where?: ressourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources to fetch.
     */
    orderBy?: ressourcesOrderByWithRelationInput | ressourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ressources.
     */
    cursor?: ressourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources.
     */
    skip?: number
    distinct?: RessourcesScalarFieldEnum | RessourcesScalarFieldEnum[]
  }

  /**
   * ressources create
   */
  export type ressourcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * The data needed to create a ressources.
     */
    data: XOR<ressourcesCreateInput, ressourcesUncheckedCreateInput>
  }

  /**
   * ressources createMany
   */
  export type ressourcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ressources.
     */
    data: ressourcesCreateManyInput | ressourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ressources update
   */
  export type ressourcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * The data needed to update a ressources.
     */
    data: XOR<ressourcesUpdateInput, ressourcesUncheckedUpdateInput>
    /**
     * Choose, which ressources to update.
     */
    where: ressourcesWhereUniqueInput
  }

  /**
   * ressources updateMany
   */
  export type ressourcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ressources.
     */
    data: XOR<ressourcesUpdateManyMutationInput, ressourcesUncheckedUpdateManyInput>
    /**
     * Filter which ressources to update
     */
    where?: ressourcesWhereInput
    /**
     * Limit how many ressources to update.
     */
    limit?: number
  }

  /**
   * ressources upsert
   */
  export type ressourcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * The filter to search for the ressources to update in case it exists.
     */
    where: ressourcesWhereUniqueInput
    /**
     * In case the ressources found by the `where` argument doesn't exist, create a new ressources with this data.
     */
    create: XOR<ressourcesCreateInput, ressourcesUncheckedCreateInput>
    /**
     * In case the ressources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ressourcesUpdateInput, ressourcesUncheckedUpdateInput>
  }

  /**
   * ressources delete
   */
  export type ressourcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
    /**
     * Filter which ressources to delete.
     */
    where: ressourcesWhereUniqueInput
  }

  /**
   * ressources deleteMany
   */
  export type ressourcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ressources to delete
     */
    where?: ressourcesWhereInput
    /**
     * Limit how many ressources to delete.
     */
    limit?: number
  }

  /**
   * ressources without action
   */
  export type ressourcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources
     */
    select?: ressourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ressources
     */
    omit?: ressourcesOmit<ExtArgs> | null
  }


  /**
   * Model resultats
   */

  export type AggregateResultats = {
    _count: ResultatsCountAggregateOutputType | null
    _avg: ResultatsAvgAggregateOutputType | null
    _sum: ResultatsSumAggregateOutputType | null
    _min: ResultatsMinAggregateOutputType | null
    _max: ResultatsMaxAggregateOutputType | null
  }

  export type ResultatsAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    ordre: number | null
  }

  export type ResultatsSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    ordre: number | null
  }

  export type ResultatsMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    titre: string | null
    description: string | null
    ordre: number | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ResultatsMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    titre: string | null
    description: string | null
    ordre: number | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type ResultatsCountAggregateOutputType = {
    id: number
    projet_id: number
    titre: number
    description: number
    ordre: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type ResultatsAvgAggregateInputType = {
    id?: true
    projet_id?: true
    ordre?: true
  }

  export type ResultatsSumAggregateInputType = {
    id?: true
    projet_id?: true
    ordre?: true
  }

  export type ResultatsMinAggregateInputType = {
    id?: true
    projet_id?: true
    titre?: true
    description?: true
    ordre?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ResultatsMaxAggregateInputType = {
    id?: true
    projet_id?: true
    titre?: true
    description?: true
    ordre?: true
    cree_le?: true
    modifie_le?: true
  }

  export type ResultatsCountAggregateInputType = {
    id?: true
    projet_id?: true
    titre?: true
    description?: true
    ordre?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type ResultatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resultats to aggregate.
     */
    where?: resultatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultats to fetch.
     */
    orderBy?: resultatsOrderByWithRelationInput | resultatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resultatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resultats
    **/
    _count?: true | ResultatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultatsMaxAggregateInputType
  }

  export type GetResultatsAggregateType<T extends ResultatsAggregateArgs> = {
        [P in keyof T & keyof AggregateResultats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultats[P]>
      : GetScalarType<T[P], AggregateResultats[P]>
  }




  export type resultatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultatsWhereInput
    orderBy?: resultatsOrderByWithAggregationInput | resultatsOrderByWithAggregationInput[]
    by: ResultatsScalarFieldEnum[] | ResultatsScalarFieldEnum
    having?: resultatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultatsCountAggregateInputType | true
    _avg?: ResultatsAvgAggregateInputType
    _sum?: ResultatsSumAggregateInputType
    _min?: ResultatsMinAggregateInputType
    _max?: ResultatsMaxAggregateInputType
  }

  export type ResultatsGroupByOutputType = {
    id: bigint
    projet_id: bigint
    titre: string
    description: string | null
    ordre: number | null
    cree_le: Date
    modifie_le: Date
    _count: ResultatsCountAggregateOutputType | null
    _avg: ResultatsAvgAggregateOutputType | null
    _sum: ResultatsSumAggregateOutputType | null
    _min: ResultatsMinAggregateOutputType | null
    _max: ResultatsMaxAggregateOutputType | null
  }

  type GetResultatsGroupByPayload<T extends resultatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultatsGroupByOutputType[P]>
            : GetScalarType<T[P], ResultatsGroupByOutputType[P]>
        }
      >
    >


  export type resultatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    titre?: boolean
    description?: boolean
    ordre?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }, ExtArgs["result"]["resultats"]>



  export type resultatsSelectScalar = {
    id?: boolean
    projet_id?: boolean
    titre?: boolean
    description?: boolean
    ordre?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type resultatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "titre" | "description" | "ordre" | "cree_le" | "modifie_le", ExtArgs["result"]["resultats"]>

  export type $resultatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resultats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      titre: string
      description: string | null
      ordre: number | null
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["resultats"]>
    composites: {}
  }

  type resultatsGetPayload<S extends boolean | null | undefined | resultatsDefaultArgs> = $Result.GetResult<Prisma.$resultatsPayload, S>

  type resultatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resultatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultatsCountAggregateInputType | true
    }

  export interface resultatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resultats'], meta: { name: 'resultats' } }
    /**
     * Find zero or one Resultats that matches the filter.
     * @param {resultatsFindUniqueArgs} args - Arguments to find a Resultats
     * @example
     * // Get one Resultats
     * const resultats = await prisma.resultats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resultatsFindUniqueArgs>(args: SelectSubset<T, resultatsFindUniqueArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resultats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resultatsFindUniqueOrThrowArgs} args - Arguments to find a Resultats
     * @example
     * // Get one Resultats
     * const resultats = await prisma.resultats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resultatsFindUniqueOrThrowArgs>(args: SelectSubset<T, resultatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultatsFindFirstArgs} args - Arguments to find a Resultats
     * @example
     * // Get one Resultats
     * const resultats = await prisma.resultats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resultatsFindFirstArgs>(args?: SelectSubset<T, resultatsFindFirstArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultatsFindFirstOrThrowArgs} args - Arguments to find a Resultats
     * @example
     * // Get one Resultats
     * const resultats = await prisma.resultats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resultatsFindFirstOrThrowArgs>(args?: SelectSubset<T, resultatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resultats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultats
     * const resultats = await prisma.resultats.findMany()
     * 
     * // Get first 10 Resultats
     * const resultats = await prisma.resultats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultatsWithIdOnly = await prisma.resultats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends resultatsFindManyArgs>(args?: SelectSubset<T, resultatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resultats.
     * @param {resultatsCreateArgs} args - Arguments to create a Resultats.
     * @example
     * // Create one Resultats
     * const Resultats = await prisma.resultats.create({
     *   data: {
     *     // ... data to create a Resultats
     *   }
     * })
     * 
     */
    create<T extends resultatsCreateArgs>(args: SelectSubset<T, resultatsCreateArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resultats.
     * @param {resultatsCreateManyArgs} args - Arguments to create many Resultats.
     * @example
     * // Create many Resultats
     * const resultats = await prisma.resultats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resultatsCreateManyArgs>(args?: SelectSubset<T, resultatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resultats.
     * @param {resultatsDeleteArgs} args - Arguments to delete one Resultats.
     * @example
     * // Delete one Resultats
     * const Resultats = await prisma.resultats.delete({
     *   where: {
     *     // ... filter to delete one Resultats
     *   }
     * })
     * 
     */
    delete<T extends resultatsDeleteArgs>(args: SelectSubset<T, resultatsDeleteArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resultats.
     * @param {resultatsUpdateArgs} args - Arguments to update one Resultats.
     * @example
     * // Update one Resultats
     * const resultats = await prisma.resultats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resultatsUpdateArgs>(args: SelectSubset<T, resultatsUpdateArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resultats.
     * @param {resultatsDeleteManyArgs} args - Arguments to filter Resultats to delete.
     * @example
     * // Delete a few Resultats
     * const { count } = await prisma.resultats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resultatsDeleteManyArgs>(args?: SelectSubset<T, resultatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultats
     * const resultats = await prisma.resultats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resultatsUpdateManyArgs>(args: SelectSubset<T, resultatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resultats.
     * @param {resultatsUpsertArgs} args - Arguments to update or create a Resultats.
     * @example
     * // Update or create a Resultats
     * const resultats = await prisma.resultats.upsert({
     *   create: {
     *     // ... data to create a Resultats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultats we want to update
     *   }
     * })
     */
    upsert<T extends resultatsUpsertArgs>(args: SelectSubset<T, resultatsUpsertArgs<ExtArgs>>): Prisma__resultatsClient<$Result.GetResult<Prisma.$resultatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resultats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultatsCountArgs} args - Arguments to filter Resultats to count.
     * @example
     * // Count the number of Resultats
     * const count = await prisma.resultats.count({
     *   where: {
     *     // ... the filter for the Resultats we want to count
     *   }
     * })
    **/
    count<T extends resultatsCountArgs>(
      args?: Subset<T, resultatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultatsAggregateArgs>(args: Subset<T, ResultatsAggregateArgs>): Prisma.PrismaPromise<GetResultatsAggregateType<T>>

    /**
     * Group by Resultats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultatsGroupByArgs} args - Group by arguments.
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
      T extends resultatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resultatsGroupByArgs['orderBy'] }
        : { orderBy?: resultatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, resultatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resultats model
   */
  readonly fields: resultatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resultats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resultatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the resultats model
   */
  interface resultatsFieldRefs {
    readonly id: FieldRef<"resultats", 'BigInt'>
    readonly projet_id: FieldRef<"resultats", 'BigInt'>
    readonly titre: FieldRef<"resultats", 'String'>
    readonly description: FieldRef<"resultats", 'String'>
    readonly ordre: FieldRef<"resultats", 'Int'>
    readonly cree_le: FieldRef<"resultats", 'DateTime'>
    readonly modifie_le: FieldRef<"resultats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * resultats findUnique
   */
  export type resultatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * Filter, which resultats to fetch.
     */
    where: resultatsWhereUniqueInput
  }

  /**
   * resultats findUniqueOrThrow
   */
  export type resultatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * Filter, which resultats to fetch.
     */
    where: resultatsWhereUniqueInput
  }

  /**
   * resultats findFirst
   */
  export type resultatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * Filter, which resultats to fetch.
     */
    where?: resultatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultats to fetch.
     */
    orderBy?: resultatsOrderByWithRelationInput | resultatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resultats.
     */
    cursor?: resultatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resultats.
     */
    distinct?: ResultatsScalarFieldEnum | ResultatsScalarFieldEnum[]
  }

  /**
   * resultats findFirstOrThrow
   */
  export type resultatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * Filter, which resultats to fetch.
     */
    where?: resultatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultats to fetch.
     */
    orderBy?: resultatsOrderByWithRelationInput | resultatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resultats.
     */
    cursor?: resultatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resultats.
     */
    distinct?: ResultatsScalarFieldEnum | ResultatsScalarFieldEnum[]
  }

  /**
   * resultats findMany
   */
  export type resultatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * Filter, which resultats to fetch.
     */
    where?: resultatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultats to fetch.
     */
    orderBy?: resultatsOrderByWithRelationInput | resultatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resultats.
     */
    cursor?: resultatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultats.
     */
    skip?: number
    distinct?: ResultatsScalarFieldEnum | ResultatsScalarFieldEnum[]
  }

  /**
   * resultats create
   */
  export type resultatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * The data needed to create a resultats.
     */
    data: XOR<resultatsCreateInput, resultatsUncheckedCreateInput>
  }

  /**
   * resultats createMany
   */
  export type resultatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resultats.
     */
    data: resultatsCreateManyInput | resultatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resultats update
   */
  export type resultatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * The data needed to update a resultats.
     */
    data: XOR<resultatsUpdateInput, resultatsUncheckedUpdateInput>
    /**
     * Choose, which resultats to update.
     */
    where: resultatsWhereUniqueInput
  }

  /**
   * resultats updateMany
   */
  export type resultatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resultats.
     */
    data: XOR<resultatsUpdateManyMutationInput, resultatsUncheckedUpdateManyInput>
    /**
     * Filter which resultats to update
     */
    where?: resultatsWhereInput
    /**
     * Limit how many resultats to update.
     */
    limit?: number
  }

  /**
   * resultats upsert
   */
  export type resultatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * The filter to search for the resultats to update in case it exists.
     */
    where: resultatsWhereUniqueInput
    /**
     * In case the resultats found by the `where` argument doesn't exist, create a new resultats with this data.
     */
    create: XOR<resultatsCreateInput, resultatsUncheckedCreateInput>
    /**
     * In case the resultats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resultatsUpdateInput, resultatsUncheckedUpdateInput>
  }

  /**
   * resultats delete
   */
  export type resultatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
    /**
     * Filter which resultats to delete.
     */
    where: resultatsWhereUniqueInput
  }

  /**
   * resultats deleteMany
   */
  export type resultatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resultats to delete
     */
    where?: resultatsWhereInput
    /**
     * Limit how many resultats to delete.
     */
    limit?: number
  }

  /**
   * resultats without action
   */
  export type resultatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultats
     */
    select?: resultatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultats
     */
    omit?: resultatsOmit<ExtArgs> | null
  }


  /**
   * Model utilisateurs
   */

  export type AggregateUtilisateurs = {
    _count: UtilisateursCountAggregateOutputType | null
    _avg: UtilisateursAvgAggregateOutputType | null
    _sum: UtilisateursSumAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  export type UtilisateursAvgAggregateOutputType = {
    id: number | null
    organisation_id: number | null
  }

  export type UtilisateursSumAggregateOutputType = {
    id: bigint | null
    organisation_id: bigint | null
  }

  export type UtilisateursMinAggregateOutputType = {
    id: bigint | null
    organisation_id: bigint | null
    role: $Enums.utilisateurs_role | null
    email: string | null
    telephone: string | null
    mot_de_passe_hash: string | null
    nom_utilisateur: string | null
    langue: string | null
    double_auth_active: boolean | null
    profil: string | null
    cree_le: Date | null
    modifie_le: Date | null
    reset_token: string | null
    reset_token_expires: Date | null
  }

  export type UtilisateursMaxAggregateOutputType = {
    id: bigint | null
    organisation_id: bigint | null
    role: $Enums.utilisateurs_role | null
    email: string | null
    telephone: string | null
    mot_de_passe_hash: string | null
    nom_utilisateur: string | null
    langue: string | null
    double_auth_active: boolean | null
    profil: string | null
    cree_le: Date | null
    modifie_le: Date | null
    reset_token: string | null
    reset_token_expires: Date | null
  }

  export type UtilisateursCountAggregateOutputType = {
    id: number
    organisation_id: number
    role: number
    email: number
    telephone: number
    mot_de_passe_hash: number
    nom_utilisateur: number
    langue: number
    double_auth_active: number
    profil: number
    cree_le: number
    modifie_le: number
    reset_token: number
    reset_token_expires: number
    _all: number
  }


  export type UtilisateursAvgAggregateInputType = {
    id?: true
    organisation_id?: true
  }

  export type UtilisateursSumAggregateInputType = {
    id?: true
    organisation_id?: true
  }

  export type UtilisateursMinAggregateInputType = {
    id?: true
    organisation_id?: true
    role?: true
    email?: true
    telephone?: true
    mot_de_passe_hash?: true
    nom_utilisateur?: true
    langue?: true
    double_auth_active?: true
    profil?: true
    cree_le?: true
    modifie_le?: true
    reset_token?: true
    reset_token_expires?: true
  }

  export type UtilisateursMaxAggregateInputType = {
    id?: true
    organisation_id?: true
    role?: true
    email?: true
    telephone?: true
    mot_de_passe_hash?: true
    nom_utilisateur?: true
    langue?: true
    double_auth_active?: true
    profil?: true
    cree_le?: true
    modifie_le?: true
    reset_token?: true
    reset_token_expires?: true
  }

  export type UtilisateursCountAggregateInputType = {
    id?: true
    organisation_id?: true
    role?: true
    email?: true
    telephone?: true
    mot_de_passe_hash?: true
    nom_utilisateur?: true
    langue?: true
    double_auth_active?: true
    profil?: true
    cree_le?: true
    modifie_le?: true
    reset_token?: true
    reset_token_expires?: true
    _all?: true
  }

  export type UtilisateursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateurs to aggregate.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilisateurs
    **/
    _count?: true | UtilisateursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateursMaxAggregateInputType
  }

  export type GetUtilisateursAggregateType<T extends UtilisateursAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateurs[P]>
      : GetScalarType<T[P], AggregateUtilisateurs[P]>
  }




  export type utilisateursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateursWhereInput
    orderBy?: utilisateursOrderByWithAggregationInput | utilisateursOrderByWithAggregationInput[]
    by: UtilisateursScalarFieldEnum[] | UtilisateursScalarFieldEnum
    having?: utilisateursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateursCountAggregateInputType | true
    _avg?: UtilisateursAvgAggregateInputType
    _sum?: UtilisateursSumAggregateInputType
    _min?: UtilisateursMinAggregateInputType
    _max?: UtilisateursMaxAggregateInputType
  }

  export type UtilisateursGroupByOutputType = {
    id: bigint
    organisation_id: bigint | null
    role: $Enums.utilisateurs_role
    email: string
    telephone: string | null
    mot_de_passe_hash: string
    nom_utilisateur: string | null
    langue: string | null
    double_auth_active: boolean | null
    profil: string | null
    cree_le: Date
    modifie_le: Date
    reset_token: string | null
    reset_token_expires: Date | null
    _count: UtilisateursCountAggregateOutputType | null
    _avg: UtilisateursAvgAggregateOutputType | null
    _sum: UtilisateursSumAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  type GetUtilisateursGroupByPayload<T extends utilisateursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
        }
      >
    >


  export type utilisateursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisation_id?: boolean
    role?: boolean
    email?: boolean
    telephone?: boolean
    mot_de_passe_hash?: boolean
    nom_utilisateur?: boolean
    langue?: boolean
    double_auth_active?: boolean
    profil?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    reset_token?: boolean
    reset_token_expires?: boolean
  }, ExtArgs["result"]["utilisateurs"]>



  export type utilisateursSelectScalar = {
    id?: boolean
    organisation_id?: boolean
    role?: boolean
    email?: boolean
    telephone?: boolean
    mot_de_passe_hash?: boolean
    nom_utilisateur?: boolean
    langue?: boolean
    double_auth_active?: boolean
    profil?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    reset_token?: boolean
    reset_token_expires?: boolean
  }

  export type utilisateursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organisation_id" | "role" | "email" | "telephone" | "mot_de_passe_hash" | "nom_utilisateur" | "langue" | "double_auth_active" | "profil" | "cree_le" | "modifie_le" | "reset_token" | "reset_token_expires", ExtArgs["result"]["utilisateurs"]>

  export type $utilisateursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilisateurs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      organisation_id: bigint | null
      role: $Enums.utilisateurs_role
      email: string
      telephone: string | null
      mot_de_passe_hash: string
      nom_utilisateur: string | null
      langue: string | null
      double_auth_active: boolean | null
      profil: string | null
      cree_le: Date
      modifie_le: Date
      reset_token: string | null
      reset_token_expires: Date | null
    }, ExtArgs["result"]["utilisateurs"]>
    composites: {}
  }

  type utilisateursGetPayload<S extends boolean | null | undefined | utilisateursDefaultArgs> = $Result.GetResult<Prisma.$utilisateursPayload, S>

  type utilisateursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilisateursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateursCountAggregateInputType | true
    }

  export interface utilisateursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilisateurs'], meta: { name: 'utilisateurs' } }
    /**
     * Find zero or one Utilisateurs that matches the filter.
     * @param {utilisateursFindUniqueArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilisateursFindUniqueArgs>(args: SelectSubset<T, utilisateursFindUniqueArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilisateursFindUniqueOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilisateursFindUniqueOrThrowArgs>(args: SelectSubset<T, utilisateursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursFindFirstArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilisateursFindFirstArgs>(args?: SelectSubset<T, utilisateursFindFirstArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursFindFirstOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilisateursFindFirstOrThrowArgs>(args?: SelectSubset<T, utilisateursFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends utilisateursFindManyArgs>(args?: SelectSubset<T, utilisateursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateurs.
     * @param {utilisateursCreateArgs} args - Arguments to create a Utilisateurs.
     * @example
     * // Create one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.create({
     *   data: {
     *     // ... data to create a Utilisateurs
     *   }
     * })
     * 
     */
    create<T extends utilisateursCreateArgs>(args: SelectSubset<T, utilisateursCreateArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {utilisateursCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilisateursCreateManyArgs>(args?: SelectSubset<T, utilisateursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateurs.
     * @param {utilisateursDeleteArgs} args - Arguments to delete one Utilisateurs.
     * @example
     * // Delete one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.delete({
     *   where: {
     *     // ... filter to delete one Utilisateurs
     *   }
     * })
     * 
     */
    delete<T extends utilisateursDeleteArgs>(args: SelectSubset<T, utilisateursDeleteArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateurs.
     * @param {utilisateursUpdateArgs} args - Arguments to update one Utilisateurs.
     * @example
     * // Update one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilisateursUpdateArgs>(args: SelectSubset<T, utilisateursUpdateArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {utilisateursDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilisateursDeleteManyArgs>(args?: SelectSubset<T, utilisateursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilisateursUpdateManyArgs>(args: SelectSubset<T, utilisateursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateurs.
     * @param {utilisateursUpsertArgs} args - Arguments to update or create a Utilisateurs.
     * @example
     * // Update or create a Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.upsert({
     *   create: {
     *     // ... data to create a Utilisateurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateurs we want to update
     *   }
     * })
     */
    upsert<T extends utilisateursUpsertArgs>(args: SelectSubset<T, utilisateursUpsertArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateurs.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends utilisateursCountArgs>(
      args?: Subset<T, utilisateursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateursAggregateArgs>(args: Subset<T, UtilisateursAggregateArgs>): Prisma.PrismaPromise<GetUtilisateursAggregateType<T>>

    /**
     * Group by Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursGroupByArgs} args - Group by arguments.
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
      T extends utilisateursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilisateursGroupByArgs['orderBy'] }
        : { orderBy?: utilisateursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, utilisateursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilisateurs model
   */
  readonly fields: utilisateursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilisateurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilisateursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the utilisateurs model
   */
  interface utilisateursFieldRefs {
    readonly id: FieldRef<"utilisateurs", 'BigInt'>
    readonly organisation_id: FieldRef<"utilisateurs", 'BigInt'>
    readonly role: FieldRef<"utilisateurs", 'utilisateurs_role'>
    readonly email: FieldRef<"utilisateurs", 'String'>
    readonly telephone: FieldRef<"utilisateurs", 'String'>
    readonly mot_de_passe_hash: FieldRef<"utilisateurs", 'String'>
    readonly nom_utilisateur: FieldRef<"utilisateurs", 'String'>
    readonly langue: FieldRef<"utilisateurs", 'String'>
    readonly double_auth_active: FieldRef<"utilisateurs", 'Boolean'>
    readonly profil: FieldRef<"utilisateurs", 'String'>
    readonly cree_le: FieldRef<"utilisateurs", 'DateTime'>
    readonly modifie_le: FieldRef<"utilisateurs", 'DateTime'>
    readonly reset_token: FieldRef<"utilisateurs", 'String'>
    readonly reset_token_expires: FieldRef<"utilisateurs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * utilisateurs findUnique
   */
  export type utilisateursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs findUniqueOrThrow
   */
  export type utilisateursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs findFirst
   */
  export type utilisateursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * utilisateurs findFirstOrThrow
   */
  export type utilisateursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * utilisateurs findMany
   */
  export type utilisateursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilisateurs.
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * utilisateurs create
   */
  export type utilisateursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The data needed to create a utilisateurs.
     */
    data: XOR<utilisateursCreateInput, utilisateursUncheckedCreateInput>
  }

  /**
   * utilisateurs createMany
   */
  export type utilisateursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateursCreateManyInput | utilisateursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilisateurs update
   */
  export type utilisateursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The data needed to update a utilisateurs.
     */
    data: XOR<utilisateursUpdateInput, utilisateursUncheckedUpdateInput>
    /**
     * Choose, which utilisateurs to update.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs updateMany
   */
  export type utilisateursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateursUpdateManyMutationInput, utilisateursUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateursWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
  }

  /**
   * utilisateurs upsert
   */
  export type utilisateursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The filter to search for the utilisateurs to update in case it exists.
     */
    where: utilisateursWhereUniqueInput
    /**
     * In case the utilisateurs found by the `where` argument doesn't exist, create a new utilisateurs with this data.
     */
    create: XOR<utilisateursCreateInput, utilisateursUncheckedCreateInput>
    /**
     * In case the utilisateurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilisateursUpdateInput, utilisateursUncheckedUpdateInput>
  }

  /**
   * utilisateurs delete
   */
  export type utilisateursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter which utilisateurs to delete.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs deleteMany
   */
  export type utilisateursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateurs to delete
     */
    where?: utilisateursWhereInput
    /**
     * Limit how many utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * utilisateurs without action
   */
  export type utilisateursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
  }


  /**
   * Model versions_projet
   */

  export type AggregateVersions_projet = {
    _count: Versions_projetCountAggregateOutputType | null
    _avg: Versions_projetAvgAggregateOutputType | null
    _sum: Versions_projetSumAggregateOutputType | null
    _min: Versions_projetMinAggregateOutputType | null
    _max: Versions_projetMaxAggregateOutputType | null
  }

  export type Versions_projetAvgAggregateOutputType = {
    id: number | null
    projet_id: number | null
    cree_par: number | null
  }

  export type Versions_projetSumAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    cree_par: bigint | null
  }

  export type Versions_projetMinAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    cree_par: bigint | null
    etiquette_version: string | null
    capture: string | null
    cree_le: Date | null
  }

  export type Versions_projetMaxAggregateOutputType = {
    id: bigint | null
    projet_id: bigint | null
    cree_par: bigint | null
    etiquette_version: string | null
    capture: string | null
    cree_le: Date | null
  }

  export type Versions_projetCountAggregateOutputType = {
    id: number
    projet_id: number
    cree_par: number
    etiquette_version: number
    capture: number
    cree_le: number
    _all: number
  }


  export type Versions_projetAvgAggregateInputType = {
    id?: true
    projet_id?: true
    cree_par?: true
  }

  export type Versions_projetSumAggregateInputType = {
    id?: true
    projet_id?: true
    cree_par?: true
  }

  export type Versions_projetMinAggregateInputType = {
    id?: true
    projet_id?: true
    cree_par?: true
    etiquette_version?: true
    capture?: true
    cree_le?: true
  }

  export type Versions_projetMaxAggregateInputType = {
    id?: true
    projet_id?: true
    cree_par?: true
    etiquette_version?: true
    capture?: true
    cree_le?: true
  }

  export type Versions_projetCountAggregateInputType = {
    id?: true
    projet_id?: true
    cree_par?: true
    etiquette_version?: true
    capture?: true
    cree_le?: true
    _all?: true
  }

  export type Versions_projetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which versions_projet to aggregate.
     */
    where?: versions_projetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions_projets to fetch.
     */
    orderBy?: versions_projetOrderByWithRelationInput | versions_projetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: versions_projetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions_projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions_projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned versions_projets
    **/
    _count?: true | Versions_projetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Versions_projetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Versions_projetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Versions_projetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Versions_projetMaxAggregateInputType
  }

  export type GetVersions_projetAggregateType<T extends Versions_projetAggregateArgs> = {
        [P in keyof T & keyof AggregateVersions_projet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVersions_projet[P]>
      : GetScalarType<T[P], AggregateVersions_projet[P]>
  }




  export type versions_projetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: versions_projetWhereInput
    orderBy?: versions_projetOrderByWithAggregationInput | versions_projetOrderByWithAggregationInput[]
    by: Versions_projetScalarFieldEnum[] | Versions_projetScalarFieldEnum
    having?: versions_projetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Versions_projetCountAggregateInputType | true
    _avg?: Versions_projetAvgAggregateInputType
    _sum?: Versions_projetSumAggregateInputType
    _min?: Versions_projetMinAggregateInputType
    _max?: Versions_projetMaxAggregateInputType
  }

  export type Versions_projetGroupByOutputType = {
    id: bigint
    projet_id: bigint
    cree_par: bigint
    etiquette_version: string | null
    capture: string
    cree_le: Date
    _count: Versions_projetCountAggregateOutputType | null
    _avg: Versions_projetAvgAggregateOutputType | null
    _sum: Versions_projetSumAggregateOutputType | null
    _min: Versions_projetMinAggregateOutputType | null
    _max: Versions_projetMaxAggregateOutputType | null
  }

  type GetVersions_projetGroupByPayload<T extends versions_projetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Versions_projetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Versions_projetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Versions_projetGroupByOutputType[P]>
            : GetScalarType<T[P], Versions_projetGroupByOutputType[P]>
        }
      >
    >


  export type versions_projetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projet_id?: boolean
    cree_par?: boolean
    etiquette_version?: boolean
    capture?: boolean
    cree_le?: boolean
  }, ExtArgs["result"]["versions_projet"]>



  export type versions_projetSelectScalar = {
    id?: boolean
    projet_id?: boolean
    cree_par?: boolean
    etiquette_version?: boolean
    capture?: boolean
    cree_le?: boolean
  }

  export type versions_projetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projet_id" | "cree_par" | "etiquette_version" | "capture" | "cree_le", ExtArgs["result"]["versions_projet"]>

  export type $versions_projetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "versions_projet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projet_id: bigint
      cree_par: bigint
      etiquette_version: string | null
      capture: string
      cree_le: Date
    }, ExtArgs["result"]["versions_projet"]>
    composites: {}
  }

  type versions_projetGetPayload<S extends boolean | null | undefined | versions_projetDefaultArgs> = $Result.GetResult<Prisma.$versions_projetPayload, S>

  type versions_projetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<versions_projetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Versions_projetCountAggregateInputType | true
    }

  export interface versions_projetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['versions_projet'], meta: { name: 'versions_projet' } }
    /**
     * Find zero or one Versions_projet that matches the filter.
     * @param {versions_projetFindUniqueArgs} args - Arguments to find a Versions_projet
     * @example
     * // Get one Versions_projet
     * const versions_projet = await prisma.versions_projet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends versions_projetFindUniqueArgs>(args: SelectSubset<T, versions_projetFindUniqueArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Versions_projet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {versions_projetFindUniqueOrThrowArgs} args - Arguments to find a Versions_projet
     * @example
     * // Get one Versions_projet
     * const versions_projet = await prisma.versions_projet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends versions_projetFindUniqueOrThrowArgs>(args: SelectSubset<T, versions_projetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Versions_projet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versions_projetFindFirstArgs} args - Arguments to find a Versions_projet
     * @example
     * // Get one Versions_projet
     * const versions_projet = await prisma.versions_projet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends versions_projetFindFirstArgs>(args?: SelectSubset<T, versions_projetFindFirstArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Versions_projet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versions_projetFindFirstOrThrowArgs} args - Arguments to find a Versions_projet
     * @example
     * // Get one Versions_projet
     * const versions_projet = await prisma.versions_projet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends versions_projetFindFirstOrThrowArgs>(args?: SelectSubset<T, versions_projetFindFirstOrThrowArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Versions_projets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versions_projetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Versions_projets
     * const versions_projets = await prisma.versions_projet.findMany()
     * 
     * // Get first 10 Versions_projets
     * const versions_projets = await prisma.versions_projet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const versions_projetWithIdOnly = await prisma.versions_projet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends versions_projetFindManyArgs>(args?: SelectSubset<T, versions_projetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Versions_projet.
     * @param {versions_projetCreateArgs} args - Arguments to create a Versions_projet.
     * @example
     * // Create one Versions_projet
     * const Versions_projet = await prisma.versions_projet.create({
     *   data: {
     *     // ... data to create a Versions_projet
     *   }
     * })
     * 
     */
    create<T extends versions_projetCreateArgs>(args: SelectSubset<T, versions_projetCreateArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Versions_projets.
     * @param {versions_projetCreateManyArgs} args - Arguments to create many Versions_projets.
     * @example
     * // Create many Versions_projets
     * const versions_projet = await prisma.versions_projet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends versions_projetCreateManyArgs>(args?: SelectSubset<T, versions_projetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Versions_projet.
     * @param {versions_projetDeleteArgs} args - Arguments to delete one Versions_projet.
     * @example
     * // Delete one Versions_projet
     * const Versions_projet = await prisma.versions_projet.delete({
     *   where: {
     *     // ... filter to delete one Versions_projet
     *   }
     * })
     * 
     */
    delete<T extends versions_projetDeleteArgs>(args: SelectSubset<T, versions_projetDeleteArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Versions_projet.
     * @param {versions_projetUpdateArgs} args - Arguments to update one Versions_projet.
     * @example
     * // Update one Versions_projet
     * const versions_projet = await prisma.versions_projet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends versions_projetUpdateArgs>(args: SelectSubset<T, versions_projetUpdateArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Versions_projets.
     * @param {versions_projetDeleteManyArgs} args - Arguments to filter Versions_projets to delete.
     * @example
     * // Delete a few Versions_projets
     * const { count } = await prisma.versions_projet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends versions_projetDeleteManyArgs>(args?: SelectSubset<T, versions_projetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Versions_projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versions_projetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Versions_projets
     * const versions_projet = await prisma.versions_projet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends versions_projetUpdateManyArgs>(args: SelectSubset<T, versions_projetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Versions_projet.
     * @param {versions_projetUpsertArgs} args - Arguments to update or create a Versions_projet.
     * @example
     * // Update or create a Versions_projet
     * const versions_projet = await prisma.versions_projet.upsert({
     *   create: {
     *     // ... data to create a Versions_projet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Versions_projet we want to update
     *   }
     * })
     */
    upsert<T extends versions_projetUpsertArgs>(args: SelectSubset<T, versions_projetUpsertArgs<ExtArgs>>): Prisma__versions_projetClient<$Result.GetResult<Prisma.$versions_projetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Versions_projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versions_projetCountArgs} args - Arguments to filter Versions_projets to count.
     * @example
     * // Count the number of Versions_projets
     * const count = await prisma.versions_projet.count({
     *   where: {
     *     // ... the filter for the Versions_projets we want to count
     *   }
     * })
    **/
    count<T extends versions_projetCountArgs>(
      args?: Subset<T, versions_projetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Versions_projetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Versions_projet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Versions_projetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Versions_projetAggregateArgs>(args: Subset<T, Versions_projetAggregateArgs>): Prisma.PrismaPromise<GetVersions_projetAggregateType<T>>

    /**
     * Group by Versions_projet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versions_projetGroupByArgs} args - Group by arguments.
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
      T extends versions_projetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: versions_projetGroupByArgs['orderBy'] }
        : { orderBy?: versions_projetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, versions_projetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersions_projetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the versions_projet model
   */
  readonly fields: versions_projetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for versions_projet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__versions_projetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the versions_projet model
   */
  interface versions_projetFieldRefs {
    readonly id: FieldRef<"versions_projet", 'BigInt'>
    readonly projet_id: FieldRef<"versions_projet", 'BigInt'>
    readonly cree_par: FieldRef<"versions_projet", 'BigInt'>
    readonly etiquette_version: FieldRef<"versions_projet", 'String'>
    readonly capture: FieldRef<"versions_projet", 'String'>
    readonly cree_le: FieldRef<"versions_projet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * versions_projet findUnique
   */
  export type versions_projetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * Filter, which versions_projet to fetch.
     */
    where: versions_projetWhereUniqueInput
  }

  /**
   * versions_projet findUniqueOrThrow
   */
  export type versions_projetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * Filter, which versions_projet to fetch.
     */
    where: versions_projetWhereUniqueInput
  }

  /**
   * versions_projet findFirst
   */
  export type versions_projetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * Filter, which versions_projet to fetch.
     */
    where?: versions_projetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions_projets to fetch.
     */
    orderBy?: versions_projetOrderByWithRelationInput | versions_projetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for versions_projets.
     */
    cursor?: versions_projetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions_projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions_projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of versions_projets.
     */
    distinct?: Versions_projetScalarFieldEnum | Versions_projetScalarFieldEnum[]
  }

  /**
   * versions_projet findFirstOrThrow
   */
  export type versions_projetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * Filter, which versions_projet to fetch.
     */
    where?: versions_projetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions_projets to fetch.
     */
    orderBy?: versions_projetOrderByWithRelationInput | versions_projetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for versions_projets.
     */
    cursor?: versions_projetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions_projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions_projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of versions_projets.
     */
    distinct?: Versions_projetScalarFieldEnum | Versions_projetScalarFieldEnum[]
  }

  /**
   * versions_projet findMany
   */
  export type versions_projetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * Filter, which versions_projets to fetch.
     */
    where?: versions_projetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions_projets to fetch.
     */
    orderBy?: versions_projetOrderByWithRelationInput | versions_projetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing versions_projets.
     */
    cursor?: versions_projetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions_projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions_projets.
     */
    skip?: number
    distinct?: Versions_projetScalarFieldEnum | Versions_projetScalarFieldEnum[]
  }

  /**
   * versions_projet create
   */
  export type versions_projetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * The data needed to create a versions_projet.
     */
    data: XOR<versions_projetCreateInput, versions_projetUncheckedCreateInput>
  }

  /**
   * versions_projet createMany
   */
  export type versions_projetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many versions_projets.
     */
    data: versions_projetCreateManyInput | versions_projetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * versions_projet update
   */
  export type versions_projetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * The data needed to update a versions_projet.
     */
    data: XOR<versions_projetUpdateInput, versions_projetUncheckedUpdateInput>
    /**
     * Choose, which versions_projet to update.
     */
    where: versions_projetWhereUniqueInput
  }

  /**
   * versions_projet updateMany
   */
  export type versions_projetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update versions_projets.
     */
    data: XOR<versions_projetUpdateManyMutationInput, versions_projetUncheckedUpdateManyInput>
    /**
     * Filter which versions_projets to update
     */
    where?: versions_projetWhereInput
    /**
     * Limit how many versions_projets to update.
     */
    limit?: number
  }

  /**
   * versions_projet upsert
   */
  export type versions_projetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * The filter to search for the versions_projet to update in case it exists.
     */
    where: versions_projetWhereUniqueInput
    /**
     * In case the versions_projet found by the `where` argument doesn't exist, create a new versions_projet with this data.
     */
    create: XOR<versions_projetCreateInput, versions_projetUncheckedCreateInput>
    /**
     * In case the versions_projet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<versions_projetUpdateInput, versions_projetUncheckedUpdateInput>
  }

  /**
   * versions_projet delete
   */
  export type versions_projetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
    /**
     * Filter which versions_projet to delete.
     */
    where: versions_projetWhereUniqueInput
  }

  /**
   * versions_projet deleteMany
   */
  export type versions_projetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which versions_projets to delete
     */
    where?: versions_projetWhereInput
    /**
     * Limit how many versions_projets to delete.
     */
    limit?: number
  }

  /**
   * versions_projet without action
   */
  export type versions_projetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions_projet
     */
    select?: versions_projetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the versions_projet
     */
    omit?: versions_projetOmit<ExtArgs> | null
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


  export const ActivitesScalarFieldEnum: {
    id: 'id',
    resultat_id: 'resultat_id',
    projet_id: 'projet_id',
    titre: 'titre',
    description: 'description',
    date_debut: 'date_debut',
    date_fin: 'date_fin',
    duree_jours: 'duree_jours',
    ordre: 'ordre',
    metadonnees: 'metadonnees',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type ActivitesScalarFieldEnum = (typeof ActivitesScalarFieldEnum)[keyof typeof ActivitesScalarFieldEnum]


  export const AmortissementsScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    libelle_actif: 'libelle_actif',
    date_achat: 'date_achat',
    cout_achat: 'cout_achat',
    duree_utilite_mois: 'duree_utilite_mois',
    valeur_residuelle: 'valeur_residuelle',
    amortissement_mensuel: 'amortissement_mensuel',
    cree_le: 'cree_le'
  };

  export type AmortissementsScalarFieldEnum = (typeof AmortissementsScalarFieldEnum)[keyof typeof AmortissementsScalarFieldEnum]


  export const CollaborationsScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    utilisateur_id: 'utilisateur_id',
    role: 'role',
    invite_par: 'invite_par',
    accepte_le: 'accepte_le',
    cree_le: 'cree_le'
  };

  export type CollaborationsScalarFieldEnum = (typeof CollaborationsScalarFieldEnum)[keyof typeof CollaborationsScalarFieldEnum]


  export const CommentairesScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    utilisateur_id: 'utilisateur_id',
    commentaire_parent_id: 'commentaire_parent_id',
    contenu: 'contenu',
    metadonnees: 'metadonnees',
    cree_le: 'cree_le'
  };

  export type CommentairesScalarFieldEnum = (typeof CommentairesScalarFieldEnum)[keyof typeof CommentairesScalarFieldEnum]


  export const FichiersScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    proprietaire_id: 'proprietaire_id',
    cle_stockage: 'cle_stockage',
    nom_original: 'nom_original',
    type_mime: 'type_mime',
    taille_octets: 'taille_octets',
    usage: 'usage',
    cree_le: 'cree_le'
  };

  export type FichiersScalarFieldEnum = (typeof FichiersScalarFieldEnum)[keyof typeof FichiersScalarFieldEnum]


  export const Flux_tresorerieScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    libelle_periode: 'libelle_periode',
    date_periode: 'date_periode',
    entree: 'entree',
    sortie: 'sortie',
    net: 'net',
    cree_le: 'cree_le'
  };

  export type Flux_tresorerieScalarFieldEnum = (typeof Flux_tresorerieScalarFieldEnum)[keyof typeof Flux_tresorerieScalarFieldEnum]


  export const Indicateurs_financiersScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    cle_indicateur: 'cle_indicateur',
    valeur_indicateur: 'valeur_indicateur',
    calcule_le: 'calcule_le',
    calcule_par: 'calcule_par'
  };

  export type Indicateurs_financiersScalarFieldEnum = (typeof Indicateurs_financiersScalarFieldEnum)[keyof typeof Indicateurs_financiersScalarFieldEnum]


  export const Lignes_budgetScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    activite_id: 'activite_id',
    ressource_id: 'ressource_id',
    categorie: 'categorie',
    description: 'description',
    annee_periode: 'annee_periode',
    montant: 'montant',
    devise: 'devise',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type Lignes_budgetScalarFieldEnum = (typeof Lignes_budgetScalarFieldEnum)[keyof typeof Lignes_budgetScalarFieldEnum]


  export const ModelesScalarFieldEnum: {
    id: 'id',
    identifiant_slug: 'identifiant_slug',
    nom: 'nom',
    secteur: 'secteur',
    description: 'description',
    structure: 'structure',
    cree_par: 'cree_par',
    est_public: 'est_public',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type ModelesScalarFieldEnum = (typeof ModelesScalarFieldEnum)[keyof typeof ModelesScalarFieldEnum]


  export const OrganisationsScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    type: 'type',
    contact_json: 'contact_json',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type OrganisationsScalarFieldEnum = (typeof OrganisationsScalarFieldEnum)[keyof typeof OrganisationsScalarFieldEnum]


  export const ProjetsScalarFieldEnum: {
    id: 'id',
    proprietaire_id: 'proprietaire_id',
    organisation_id: 'organisation_id',
    type: 'type',
    statut: 'statut',
    titre: 'titre',
    description_courte: 'description_courte',
    metadonnees: 'metadonnees',
    progression: 'progression',
    est_public: 'est_public',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type ProjetsScalarFieldEnum = (typeof ProjetsScalarFieldEnum)[keyof typeof ProjetsScalarFieldEnum]


  export const RessourcesScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    activite_id: 'activite_id',
    type_ressource: 'type_ressource',
    libelle: 'libelle',
    unite: 'unite',
    quantite: 'quantite',
    cout_unitaire: 'cout_unitaire',
    frequence: 'frequence',
    cout_total: 'cout_total',
    notes: 'notes',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type RessourcesScalarFieldEnum = (typeof RessourcesScalarFieldEnum)[keyof typeof RessourcesScalarFieldEnum]


  export const ResultatsScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    titre: 'titre',
    description: 'description',
    ordre: 'ordre',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type ResultatsScalarFieldEnum = (typeof ResultatsScalarFieldEnum)[keyof typeof ResultatsScalarFieldEnum]


  export const UtilisateursScalarFieldEnum: {
    id: 'id',
    organisation_id: 'organisation_id',
    role: 'role',
    email: 'email',
    telephone: 'telephone',
    mot_de_passe_hash: 'mot_de_passe_hash',
    nom_utilisateur: 'nom_utilisateur',
    langue: 'langue',
    double_auth_active: 'double_auth_active',
    profil: 'profil',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    reset_token: 'reset_token',
    reset_token_expires: 'reset_token_expires'
  };

  export type UtilisateursScalarFieldEnum = (typeof UtilisateursScalarFieldEnum)[keyof typeof UtilisateursScalarFieldEnum]


  export const Versions_projetScalarFieldEnum: {
    id: 'id',
    projet_id: 'projet_id',
    cree_par: 'cree_par',
    etiquette_version: 'etiquette_version',
    capture: 'capture',
    cree_le: 'cree_le'
  };

  export type Versions_projetScalarFieldEnum = (typeof Versions_projetScalarFieldEnum)[keyof typeof Versions_projetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const activitesOrderByRelevanceFieldEnum: {
    titre: 'titre',
    description: 'description',
    metadonnees: 'metadonnees'
  };

  export type activitesOrderByRelevanceFieldEnum = (typeof activitesOrderByRelevanceFieldEnum)[keyof typeof activitesOrderByRelevanceFieldEnum]


  export const amortissementsOrderByRelevanceFieldEnum: {
    libelle_actif: 'libelle_actif'
  };

  export type amortissementsOrderByRelevanceFieldEnum = (typeof amortissementsOrderByRelevanceFieldEnum)[keyof typeof amortissementsOrderByRelevanceFieldEnum]


  export const commentairesOrderByRelevanceFieldEnum: {
    contenu: 'contenu',
    metadonnees: 'metadonnees'
  };

  export type commentairesOrderByRelevanceFieldEnum = (typeof commentairesOrderByRelevanceFieldEnum)[keyof typeof commentairesOrderByRelevanceFieldEnum]


  export const fichiersOrderByRelevanceFieldEnum: {
    cle_stockage: 'cle_stockage',
    nom_original: 'nom_original',
    type_mime: 'type_mime'
  };

  export type fichiersOrderByRelevanceFieldEnum = (typeof fichiersOrderByRelevanceFieldEnum)[keyof typeof fichiersOrderByRelevanceFieldEnum]


  export const flux_tresorerieOrderByRelevanceFieldEnum: {
    libelle_periode: 'libelle_periode'
  };

  export type flux_tresorerieOrderByRelevanceFieldEnum = (typeof flux_tresorerieOrderByRelevanceFieldEnum)[keyof typeof flux_tresorerieOrderByRelevanceFieldEnum]


  export const indicateurs_financiersOrderByRelevanceFieldEnum: {
    cle_indicateur: 'cle_indicateur'
  };

  export type indicateurs_financiersOrderByRelevanceFieldEnum = (typeof indicateurs_financiersOrderByRelevanceFieldEnum)[keyof typeof indicateurs_financiersOrderByRelevanceFieldEnum]


  export const lignes_budgetOrderByRelevanceFieldEnum: {
    categorie: 'categorie',
    description: 'description',
    devise: 'devise'
  };

  export type lignes_budgetOrderByRelevanceFieldEnum = (typeof lignes_budgetOrderByRelevanceFieldEnum)[keyof typeof lignes_budgetOrderByRelevanceFieldEnum]


  export const modelesOrderByRelevanceFieldEnum: {
    identifiant_slug: 'identifiant_slug',
    nom: 'nom',
    secteur: 'secteur',
    description: 'description',
    structure: 'structure'
  };

  export type modelesOrderByRelevanceFieldEnum = (typeof modelesOrderByRelevanceFieldEnum)[keyof typeof modelesOrderByRelevanceFieldEnum]


  export const organisationsOrderByRelevanceFieldEnum: {
    nom: 'nom',
    type: 'type',
    contact_json: 'contact_json'
  };

  export type organisationsOrderByRelevanceFieldEnum = (typeof organisationsOrderByRelevanceFieldEnum)[keyof typeof organisationsOrderByRelevanceFieldEnum]


  export const projetsOrderByRelevanceFieldEnum: {
    titre: 'titre',
    description_courte: 'description_courte',
    metadonnees: 'metadonnees'
  };

  export type projetsOrderByRelevanceFieldEnum = (typeof projetsOrderByRelevanceFieldEnum)[keyof typeof projetsOrderByRelevanceFieldEnum]


  export const ressourcesOrderByRelevanceFieldEnum: {
    libelle: 'libelle',
    unite: 'unite',
    notes: 'notes'
  };

  export type ressourcesOrderByRelevanceFieldEnum = (typeof ressourcesOrderByRelevanceFieldEnum)[keyof typeof ressourcesOrderByRelevanceFieldEnum]


  export const resultatsOrderByRelevanceFieldEnum: {
    titre: 'titre',
    description: 'description'
  };

  export type resultatsOrderByRelevanceFieldEnum = (typeof resultatsOrderByRelevanceFieldEnum)[keyof typeof resultatsOrderByRelevanceFieldEnum]


  export const utilisateursOrderByRelevanceFieldEnum: {
    email: 'email',
    telephone: 'telephone',
    mot_de_passe_hash: 'mot_de_passe_hash',
    nom_utilisateur: 'nom_utilisateur',
    langue: 'langue',
    profil: 'profil',
    reset_token: 'reset_token'
  };

  export type utilisateursOrderByRelevanceFieldEnum = (typeof utilisateursOrderByRelevanceFieldEnum)[keyof typeof utilisateursOrderByRelevanceFieldEnum]


  export const versions_projetOrderByRelevanceFieldEnum: {
    etiquette_version: 'etiquette_version',
    capture: 'capture'
  };

  export type versions_projetOrderByRelevanceFieldEnum = (typeof versions_projetOrderByRelevanceFieldEnum)[keyof typeof versions_projetOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'collaborations_role'
   */
  export type Enumcollaborations_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'collaborations_role'>
    


  /**
   * Reference to a field of type 'fichiers_usage'
   */
  export type Enumfichiers_usageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fichiers_usage'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'projets_type'
   */
  export type Enumprojets_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projets_type'>
    


  /**
   * Reference to a field of type 'projets_statut'
   */
  export type Enumprojets_statutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projets_statut'>
    


  /**
   * Reference to a field of type 'ressources_type_ressource'
   */
  export type Enumressources_type_ressourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ressources_type_ressource'>
    


  /**
   * Reference to a field of type 'ressources_frequence'
   */
  export type Enumressources_frequenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ressources_frequence'>
    


  /**
   * Reference to a field of type 'utilisateurs_role'
   */
  export type Enumutilisateurs_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'utilisateurs_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type activitesWhereInput = {
    AND?: activitesWhereInput | activitesWhereInput[]
    OR?: activitesWhereInput[]
    NOT?: activitesWhereInput | activitesWhereInput[]
    id?: BigIntFilter<"activites"> | bigint | number
    resultat_id?: BigIntFilter<"activites"> | bigint | number
    projet_id?: BigIntFilter<"activites"> | bigint | number
    titre?: StringFilter<"activites"> | string
    description?: StringNullableFilter<"activites"> | string | null
    date_debut?: DateTimeNullableFilter<"activites"> | Date | string | null
    date_fin?: DateTimeNullableFilter<"activites"> | Date | string | null
    duree_jours?: IntNullableFilter<"activites"> | number | null
    ordre?: IntNullableFilter<"activites"> | number | null
    metadonnees?: StringNullableFilter<"activites"> | string | null
    cree_le?: DateTimeFilter<"activites"> | Date | string
    modifie_le?: DateTimeFilter<"activites"> | Date | string
  }

  export type activitesOrderByWithRelationInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    date_debut?: SortOrderInput | SortOrder
    date_fin?: SortOrderInput | SortOrder
    duree_jours?: SortOrderInput | SortOrder
    ordre?: SortOrderInput | SortOrder
    metadonnees?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: activitesOrderByRelevanceInput
  }

  export type activitesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: activitesWhereInput | activitesWhereInput[]
    OR?: activitesWhereInput[]
    NOT?: activitesWhereInput | activitesWhereInput[]
    resultat_id?: BigIntFilter<"activites"> | bigint | number
    projet_id?: BigIntFilter<"activites"> | bigint | number
    titre?: StringFilter<"activites"> | string
    description?: StringNullableFilter<"activites"> | string | null
    date_debut?: DateTimeNullableFilter<"activites"> | Date | string | null
    date_fin?: DateTimeNullableFilter<"activites"> | Date | string | null
    duree_jours?: IntNullableFilter<"activites"> | number | null
    ordre?: IntNullableFilter<"activites"> | number | null
    metadonnees?: StringNullableFilter<"activites"> | string | null
    cree_le?: DateTimeFilter<"activites"> | Date | string
    modifie_le?: DateTimeFilter<"activites"> | Date | string
  }, "id">

  export type activitesOrderByWithAggregationInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    date_debut?: SortOrderInput | SortOrder
    date_fin?: SortOrderInput | SortOrder
    duree_jours?: SortOrderInput | SortOrder
    ordre?: SortOrderInput | SortOrder
    metadonnees?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: activitesCountOrderByAggregateInput
    _avg?: activitesAvgOrderByAggregateInput
    _max?: activitesMaxOrderByAggregateInput
    _min?: activitesMinOrderByAggregateInput
    _sum?: activitesSumOrderByAggregateInput
  }

  export type activitesScalarWhereWithAggregatesInput = {
    AND?: activitesScalarWhereWithAggregatesInput | activitesScalarWhereWithAggregatesInput[]
    OR?: activitesScalarWhereWithAggregatesInput[]
    NOT?: activitesScalarWhereWithAggregatesInput | activitesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"activites"> | bigint | number
    resultat_id?: BigIntWithAggregatesFilter<"activites"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"activites"> | bigint | number
    titre?: StringWithAggregatesFilter<"activites"> | string
    description?: StringNullableWithAggregatesFilter<"activites"> | string | null
    date_debut?: DateTimeNullableWithAggregatesFilter<"activites"> | Date | string | null
    date_fin?: DateTimeNullableWithAggregatesFilter<"activites"> | Date | string | null
    duree_jours?: IntNullableWithAggregatesFilter<"activites"> | number | null
    ordre?: IntNullableWithAggregatesFilter<"activites"> | number | null
    metadonnees?: StringNullableWithAggregatesFilter<"activites"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"activites"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"activites"> | Date | string
  }

  export type amortissementsWhereInput = {
    AND?: amortissementsWhereInput | amortissementsWhereInput[]
    OR?: amortissementsWhereInput[]
    NOT?: amortissementsWhereInput | amortissementsWhereInput[]
    id?: BigIntFilter<"amortissements"> | bigint | number
    projet_id?: BigIntFilter<"amortissements"> | bigint | number
    libelle_actif?: StringFilter<"amortissements"> | string
    date_achat?: DateTimeNullableFilter<"amortissements"> | Date | string | null
    cout_achat?: DecimalNullableFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: IntNullableFilter<"amortissements"> | number | null
    valeur_residuelle?: DecimalNullableFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: DecimalNullableFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFilter<"amortissements"> | Date | string
  }

  export type amortissementsOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_actif?: SortOrder
    date_achat?: SortOrderInput | SortOrder
    cout_achat?: SortOrderInput | SortOrder
    duree_utilite_mois?: SortOrderInput | SortOrder
    valeur_residuelle?: SortOrderInput | SortOrder
    amortissement_mensuel?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _relevance?: amortissementsOrderByRelevanceInput
  }

  export type amortissementsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: amortissementsWhereInput | amortissementsWhereInput[]
    OR?: amortissementsWhereInput[]
    NOT?: amortissementsWhereInput | amortissementsWhereInput[]
    projet_id?: BigIntFilter<"amortissements"> | bigint | number
    libelle_actif?: StringFilter<"amortissements"> | string
    date_achat?: DateTimeNullableFilter<"amortissements"> | Date | string | null
    cout_achat?: DecimalNullableFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: IntNullableFilter<"amortissements"> | number | null
    valeur_residuelle?: DecimalNullableFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: DecimalNullableFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFilter<"amortissements"> | Date | string
  }, "id">

  export type amortissementsOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_actif?: SortOrder
    date_achat?: SortOrderInput | SortOrder
    cout_achat?: SortOrderInput | SortOrder
    duree_utilite_mois?: SortOrderInput | SortOrder
    valeur_residuelle?: SortOrderInput | SortOrder
    amortissement_mensuel?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _count?: amortissementsCountOrderByAggregateInput
    _avg?: amortissementsAvgOrderByAggregateInput
    _max?: amortissementsMaxOrderByAggregateInput
    _min?: amortissementsMinOrderByAggregateInput
    _sum?: amortissementsSumOrderByAggregateInput
  }

  export type amortissementsScalarWhereWithAggregatesInput = {
    AND?: amortissementsScalarWhereWithAggregatesInput | amortissementsScalarWhereWithAggregatesInput[]
    OR?: amortissementsScalarWhereWithAggregatesInput[]
    NOT?: amortissementsScalarWhereWithAggregatesInput | amortissementsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"amortissements"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"amortissements"> | bigint | number
    libelle_actif?: StringWithAggregatesFilter<"amortissements"> | string
    date_achat?: DateTimeNullableWithAggregatesFilter<"amortissements"> | Date | string | null
    cout_achat?: DecimalNullableWithAggregatesFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: IntNullableWithAggregatesFilter<"amortissements"> | number | null
    valeur_residuelle?: DecimalNullableWithAggregatesFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: DecimalNullableWithAggregatesFilter<"amortissements"> | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeWithAggregatesFilter<"amortissements"> | Date | string
  }

  export type collaborationsWhereInput = {
    AND?: collaborationsWhereInput | collaborationsWhereInput[]
    OR?: collaborationsWhereInput[]
    NOT?: collaborationsWhereInput | collaborationsWhereInput[]
    id?: BigIntFilter<"collaborations"> | bigint | number
    projet_id?: BigIntFilter<"collaborations"> | bigint | number
    utilisateur_id?: BigIntFilter<"collaborations"> | bigint | number
    role?: Enumcollaborations_roleNullableFilter<"collaborations"> | $Enums.collaborations_role | null
    invite_par?: BigIntNullableFilter<"collaborations"> | bigint | number | null
    accepte_le?: DateTimeNullableFilter<"collaborations"> | Date | string | null
    cree_le?: DateTimeFilter<"collaborations"> | Date | string
  }

  export type collaborationsOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    role?: SortOrderInput | SortOrder
    invite_par?: SortOrderInput | SortOrder
    accepte_le?: SortOrderInput | SortOrder
    cree_le?: SortOrder
  }

  export type collaborationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: collaborationsWhereInput | collaborationsWhereInput[]
    OR?: collaborationsWhereInput[]
    NOT?: collaborationsWhereInput | collaborationsWhereInput[]
    projet_id?: BigIntFilter<"collaborations"> | bigint | number
    utilisateur_id?: BigIntFilter<"collaborations"> | bigint | number
    role?: Enumcollaborations_roleNullableFilter<"collaborations"> | $Enums.collaborations_role | null
    invite_par?: BigIntNullableFilter<"collaborations"> | bigint | number | null
    accepte_le?: DateTimeNullableFilter<"collaborations"> | Date | string | null
    cree_le?: DateTimeFilter<"collaborations"> | Date | string
  }, "id">

  export type collaborationsOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    role?: SortOrderInput | SortOrder
    invite_par?: SortOrderInput | SortOrder
    accepte_le?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _count?: collaborationsCountOrderByAggregateInput
    _avg?: collaborationsAvgOrderByAggregateInput
    _max?: collaborationsMaxOrderByAggregateInput
    _min?: collaborationsMinOrderByAggregateInput
    _sum?: collaborationsSumOrderByAggregateInput
  }

  export type collaborationsScalarWhereWithAggregatesInput = {
    AND?: collaborationsScalarWhereWithAggregatesInput | collaborationsScalarWhereWithAggregatesInput[]
    OR?: collaborationsScalarWhereWithAggregatesInput[]
    NOT?: collaborationsScalarWhereWithAggregatesInput | collaborationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"collaborations"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"collaborations"> | bigint | number
    utilisateur_id?: BigIntWithAggregatesFilter<"collaborations"> | bigint | number
    role?: Enumcollaborations_roleNullableWithAggregatesFilter<"collaborations"> | $Enums.collaborations_role | null
    invite_par?: BigIntNullableWithAggregatesFilter<"collaborations"> | bigint | number | null
    accepte_le?: DateTimeNullableWithAggregatesFilter<"collaborations"> | Date | string | null
    cree_le?: DateTimeWithAggregatesFilter<"collaborations"> | Date | string
  }

  export type commentairesWhereInput = {
    AND?: commentairesWhereInput | commentairesWhereInput[]
    OR?: commentairesWhereInput[]
    NOT?: commentairesWhereInput | commentairesWhereInput[]
    id?: BigIntFilter<"commentaires"> | bigint | number
    projet_id?: BigIntFilter<"commentaires"> | bigint | number
    utilisateur_id?: BigIntFilter<"commentaires"> | bigint | number
    commentaire_parent_id?: BigIntNullableFilter<"commentaires"> | bigint | number | null
    contenu?: StringFilter<"commentaires"> | string
    metadonnees?: StringNullableFilter<"commentaires"> | string | null
    cree_le?: DateTimeFilter<"commentaires"> | Date | string
  }

  export type commentairesOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrderInput | SortOrder
    contenu?: SortOrder
    metadonnees?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _relevance?: commentairesOrderByRelevanceInput
  }

  export type commentairesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: commentairesWhereInput | commentairesWhereInput[]
    OR?: commentairesWhereInput[]
    NOT?: commentairesWhereInput | commentairesWhereInput[]
    projet_id?: BigIntFilter<"commentaires"> | bigint | number
    utilisateur_id?: BigIntFilter<"commentaires"> | bigint | number
    commentaire_parent_id?: BigIntNullableFilter<"commentaires"> | bigint | number | null
    contenu?: StringFilter<"commentaires"> | string
    metadonnees?: StringNullableFilter<"commentaires"> | string | null
    cree_le?: DateTimeFilter<"commentaires"> | Date | string
  }, "id">

  export type commentairesOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrderInput | SortOrder
    contenu?: SortOrder
    metadonnees?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _count?: commentairesCountOrderByAggregateInput
    _avg?: commentairesAvgOrderByAggregateInput
    _max?: commentairesMaxOrderByAggregateInput
    _min?: commentairesMinOrderByAggregateInput
    _sum?: commentairesSumOrderByAggregateInput
  }

  export type commentairesScalarWhereWithAggregatesInput = {
    AND?: commentairesScalarWhereWithAggregatesInput | commentairesScalarWhereWithAggregatesInput[]
    OR?: commentairesScalarWhereWithAggregatesInput[]
    NOT?: commentairesScalarWhereWithAggregatesInput | commentairesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"commentaires"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"commentaires"> | bigint | number
    utilisateur_id?: BigIntWithAggregatesFilter<"commentaires"> | bigint | number
    commentaire_parent_id?: BigIntNullableWithAggregatesFilter<"commentaires"> | bigint | number | null
    contenu?: StringWithAggregatesFilter<"commentaires"> | string
    metadonnees?: StringNullableWithAggregatesFilter<"commentaires"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"commentaires"> | Date | string
  }

  export type fichiersWhereInput = {
    AND?: fichiersWhereInput | fichiersWhereInput[]
    OR?: fichiersWhereInput[]
    NOT?: fichiersWhereInput | fichiersWhereInput[]
    id?: BigIntFilter<"fichiers"> | bigint | number
    projet_id?: BigIntNullableFilter<"fichiers"> | bigint | number | null
    proprietaire_id?: BigIntNullableFilter<"fichiers"> | bigint | number | null
    cle_stockage?: StringFilter<"fichiers"> | string
    nom_original?: StringNullableFilter<"fichiers"> | string | null
    type_mime?: StringNullableFilter<"fichiers"> | string | null
    taille_octets?: BigIntNullableFilter<"fichiers"> | bigint | number | null
    usage?: Enumfichiers_usageNullableFilter<"fichiers"> | $Enums.fichiers_usage | null
    cree_le?: DateTimeFilter<"fichiers"> | Date | string
  }

  export type fichiersOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrderInput | SortOrder
    proprietaire_id?: SortOrderInput | SortOrder
    cle_stockage?: SortOrder
    nom_original?: SortOrderInput | SortOrder
    type_mime?: SortOrderInput | SortOrder
    taille_octets?: SortOrderInput | SortOrder
    usage?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _relevance?: fichiersOrderByRelevanceInput
  }

  export type fichiersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: fichiersWhereInput | fichiersWhereInput[]
    OR?: fichiersWhereInput[]
    NOT?: fichiersWhereInput | fichiersWhereInput[]
    projet_id?: BigIntNullableFilter<"fichiers"> | bigint | number | null
    proprietaire_id?: BigIntNullableFilter<"fichiers"> | bigint | number | null
    cle_stockage?: StringFilter<"fichiers"> | string
    nom_original?: StringNullableFilter<"fichiers"> | string | null
    type_mime?: StringNullableFilter<"fichiers"> | string | null
    taille_octets?: BigIntNullableFilter<"fichiers"> | bigint | number | null
    usage?: Enumfichiers_usageNullableFilter<"fichiers"> | $Enums.fichiers_usage | null
    cree_le?: DateTimeFilter<"fichiers"> | Date | string
  }, "id">

  export type fichiersOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrderInput | SortOrder
    proprietaire_id?: SortOrderInput | SortOrder
    cle_stockage?: SortOrder
    nom_original?: SortOrderInput | SortOrder
    type_mime?: SortOrderInput | SortOrder
    taille_octets?: SortOrderInput | SortOrder
    usage?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _count?: fichiersCountOrderByAggregateInput
    _avg?: fichiersAvgOrderByAggregateInput
    _max?: fichiersMaxOrderByAggregateInput
    _min?: fichiersMinOrderByAggregateInput
    _sum?: fichiersSumOrderByAggregateInput
  }

  export type fichiersScalarWhereWithAggregatesInput = {
    AND?: fichiersScalarWhereWithAggregatesInput | fichiersScalarWhereWithAggregatesInput[]
    OR?: fichiersScalarWhereWithAggregatesInput[]
    NOT?: fichiersScalarWhereWithAggregatesInput | fichiersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"fichiers"> | bigint | number
    projet_id?: BigIntNullableWithAggregatesFilter<"fichiers"> | bigint | number | null
    proprietaire_id?: BigIntNullableWithAggregatesFilter<"fichiers"> | bigint | number | null
    cle_stockage?: StringWithAggregatesFilter<"fichiers"> | string
    nom_original?: StringNullableWithAggregatesFilter<"fichiers"> | string | null
    type_mime?: StringNullableWithAggregatesFilter<"fichiers"> | string | null
    taille_octets?: BigIntNullableWithAggregatesFilter<"fichiers"> | bigint | number | null
    usage?: Enumfichiers_usageNullableWithAggregatesFilter<"fichiers"> | $Enums.fichiers_usage | null
    cree_le?: DateTimeWithAggregatesFilter<"fichiers"> | Date | string
  }

  export type flux_tresorerieWhereInput = {
    AND?: flux_tresorerieWhereInput | flux_tresorerieWhereInput[]
    OR?: flux_tresorerieWhereInput[]
    NOT?: flux_tresorerieWhereInput | flux_tresorerieWhereInput[]
    id?: BigIntFilter<"flux_tresorerie"> | bigint | number
    projet_id?: BigIntFilter<"flux_tresorerie"> | bigint | number
    libelle_periode?: StringNullableFilter<"flux_tresorerie"> | string | null
    date_periode?: DateTimeNullableFilter<"flux_tresorerie"> | Date | string | null
    entree?: DecimalNullableFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    sortie?: DecimalNullableFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    net?: DecimalNullableFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFilter<"flux_tresorerie"> | Date | string
  }

  export type flux_tresorerieOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_periode?: SortOrderInput | SortOrder
    date_periode?: SortOrderInput | SortOrder
    entree?: SortOrderInput | SortOrder
    sortie?: SortOrderInput | SortOrder
    net?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _relevance?: flux_tresorerieOrderByRelevanceInput
  }

  export type flux_tresorerieWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: flux_tresorerieWhereInput | flux_tresorerieWhereInput[]
    OR?: flux_tresorerieWhereInput[]
    NOT?: flux_tresorerieWhereInput | flux_tresorerieWhereInput[]
    projet_id?: BigIntFilter<"flux_tresorerie"> | bigint | number
    libelle_periode?: StringNullableFilter<"flux_tresorerie"> | string | null
    date_periode?: DateTimeNullableFilter<"flux_tresorerie"> | Date | string | null
    entree?: DecimalNullableFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    sortie?: DecimalNullableFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    net?: DecimalNullableFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFilter<"flux_tresorerie"> | Date | string
  }, "id">

  export type flux_tresorerieOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_periode?: SortOrderInput | SortOrder
    date_periode?: SortOrderInput | SortOrder
    entree?: SortOrderInput | SortOrder
    sortie?: SortOrderInput | SortOrder
    net?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    _count?: flux_tresorerieCountOrderByAggregateInput
    _avg?: flux_tresorerieAvgOrderByAggregateInput
    _max?: flux_tresorerieMaxOrderByAggregateInput
    _min?: flux_tresorerieMinOrderByAggregateInput
    _sum?: flux_tresorerieSumOrderByAggregateInput
  }

  export type flux_tresorerieScalarWhereWithAggregatesInput = {
    AND?: flux_tresorerieScalarWhereWithAggregatesInput | flux_tresorerieScalarWhereWithAggregatesInput[]
    OR?: flux_tresorerieScalarWhereWithAggregatesInput[]
    NOT?: flux_tresorerieScalarWhereWithAggregatesInput | flux_tresorerieScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"flux_tresorerie"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"flux_tresorerie"> | bigint | number
    libelle_periode?: StringNullableWithAggregatesFilter<"flux_tresorerie"> | string | null
    date_periode?: DateTimeNullableWithAggregatesFilter<"flux_tresorerie"> | Date | string | null
    entree?: DecimalNullableWithAggregatesFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    sortie?: DecimalNullableWithAggregatesFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    net?: DecimalNullableWithAggregatesFilter<"flux_tresorerie"> | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeWithAggregatesFilter<"flux_tresorerie"> | Date | string
  }

  export type indicateurs_financiersWhereInput = {
    AND?: indicateurs_financiersWhereInput | indicateurs_financiersWhereInput[]
    OR?: indicateurs_financiersWhereInput[]
    NOT?: indicateurs_financiersWhereInput | indicateurs_financiersWhereInput[]
    id?: BigIntFilter<"indicateurs_financiers"> | bigint | number
    projet_id?: BigIntFilter<"indicateurs_financiers"> | bigint | number
    cle_indicateur?: StringFilter<"indicateurs_financiers"> | string
    valeur_indicateur?: DecimalNullableFilter<"indicateurs_financiers"> | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeFilter<"indicateurs_financiers"> | Date | string
    calcule_par?: BigIntNullableFilter<"indicateurs_financiers"> | bigint | number | null
  }

  export type indicateurs_financiersOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cle_indicateur?: SortOrder
    valeur_indicateur?: SortOrderInput | SortOrder
    calcule_le?: SortOrder
    calcule_par?: SortOrderInput | SortOrder
    _relevance?: indicateurs_financiersOrderByRelevanceInput
  }

  export type indicateurs_financiersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: indicateurs_financiersWhereInput | indicateurs_financiersWhereInput[]
    OR?: indicateurs_financiersWhereInput[]
    NOT?: indicateurs_financiersWhereInput | indicateurs_financiersWhereInput[]
    projet_id?: BigIntFilter<"indicateurs_financiers"> | bigint | number
    cle_indicateur?: StringFilter<"indicateurs_financiers"> | string
    valeur_indicateur?: DecimalNullableFilter<"indicateurs_financiers"> | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeFilter<"indicateurs_financiers"> | Date | string
    calcule_par?: BigIntNullableFilter<"indicateurs_financiers"> | bigint | number | null
  }, "id">

  export type indicateurs_financiersOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cle_indicateur?: SortOrder
    valeur_indicateur?: SortOrderInput | SortOrder
    calcule_le?: SortOrder
    calcule_par?: SortOrderInput | SortOrder
    _count?: indicateurs_financiersCountOrderByAggregateInput
    _avg?: indicateurs_financiersAvgOrderByAggregateInput
    _max?: indicateurs_financiersMaxOrderByAggregateInput
    _min?: indicateurs_financiersMinOrderByAggregateInput
    _sum?: indicateurs_financiersSumOrderByAggregateInput
  }

  export type indicateurs_financiersScalarWhereWithAggregatesInput = {
    AND?: indicateurs_financiersScalarWhereWithAggregatesInput | indicateurs_financiersScalarWhereWithAggregatesInput[]
    OR?: indicateurs_financiersScalarWhereWithAggregatesInput[]
    NOT?: indicateurs_financiersScalarWhereWithAggregatesInput | indicateurs_financiersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"indicateurs_financiers"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"indicateurs_financiers"> | bigint | number
    cle_indicateur?: StringWithAggregatesFilter<"indicateurs_financiers"> | string
    valeur_indicateur?: DecimalNullableWithAggregatesFilter<"indicateurs_financiers"> | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeWithAggregatesFilter<"indicateurs_financiers"> | Date | string
    calcule_par?: BigIntNullableWithAggregatesFilter<"indicateurs_financiers"> | bigint | number | null
  }

  export type lignes_budgetWhereInput = {
    AND?: lignes_budgetWhereInput | lignes_budgetWhereInput[]
    OR?: lignes_budgetWhereInput[]
    NOT?: lignes_budgetWhereInput | lignes_budgetWhereInput[]
    id?: BigIntFilter<"lignes_budget"> | bigint | number
    projet_id?: BigIntFilter<"lignes_budget"> | bigint | number
    activite_id?: BigIntNullableFilter<"lignes_budget"> | bigint | number | null
    ressource_id?: BigIntNullableFilter<"lignes_budget"> | bigint | number | null
    categorie?: StringNullableFilter<"lignes_budget"> | string | null
    description?: StringNullableFilter<"lignes_budget"> | string | null
    annee_periode?: IntNullableFilter<"lignes_budget"> | number | null
    montant?: DecimalNullableFilter<"lignes_budget"> | Decimal | DecimalJsLike | number | string | null
    devise?: StringNullableFilter<"lignes_budget"> | string | null
    cree_le?: DateTimeFilter<"lignes_budget"> | Date | string
    modifie_le?: DateTimeFilter<"lignes_budget"> | Date | string
  }

  export type lignes_budgetOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrderInput | SortOrder
    ressource_id?: SortOrderInput | SortOrder
    categorie?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    annee_periode?: SortOrderInput | SortOrder
    montant?: SortOrderInput | SortOrder
    devise?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: lignes_budgetOrderByRelevanceInput
  }

  export type lignes_budgetWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: lignes_budgetWhereInput | lignes_budgetWhereInput[]
    OR?: lignes_budgetWhereInput[]
    NOT?: lignes_budgetWhereInput | lignes_budgetWhereInput[]
    projet_id?: BigIntFilter<"lignes_budget"> | bigint | number
    activite_id?: BigIntNullableFilter<"lignes_budget"> | bigint | number | null
    ressource_id?: BigIntNullableFilter<"lignes_budget"> | bigint | number | null
    categorie?: StringNullableFilter<"lignes_budget"> | string | null
    description?: StringNullableFilter<"lignes_budget"> | string | null
    annee_periode?: IntNullableFilter<"lignes_budget"> | number | null
    montant?: DecimalNullableFilter<"lignes_budget"> | Decimal | DecimalJsLike | number | string | null
    devise?: StringNullableFilter<"lignes_budget"> | string | null
    cree_le?: DateTimeFilter<"lignes_budget"> | Date | string
    modifie_le?: DateTimeFilter<"lignes_budget"> | Date | string
  }, "id">

  export type lignes_budgetOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrderInput | SortOrder
    ressource_id?: SortOrderInput | SortOrder
    categorie?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    annee_periode?: SortOrderInput | SortOrder
    montant?: SortOrderInput | SortOrder
    devise?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: lignes_budgetCountOrderByAggregateInput
    _avg?: lignes_budgetAvgOrderByAggregateInput
    _max?: lignes_budgetMaxOrderByAggregateInput
    _min?: lignes_budgetMinOrderByAggregateInput
    _sum?: lignes_budgetSumOrderByAggregateInput
  }

  export type lignes_budgetScalarWhereWithAggregatesInput = {
    AND?: lignes_budgetScalarWhereWithAggregatesInput | lignes_budgetScalarWhereWithAggregatesInput[]
    OR?: lignes_budgetScalarWhereWithAggregatesInput[]
    NOT?: lignes_budgetScalarWhereWithAggregatesInput | lignes_budgetScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"lignes_budget"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"lignes_budget"> | bigint | number
    activite_id?: BigIntNullableWithAggregatesFilter<"lignes_budget"> | bigint | number | null
    ressource_id?: BigIntNullableWithAggregatesFilter<"lignes_budget"> | bigint | number | null
    categorie?: StringNullableWithAggregatesFilter<"lignes_budget"> | string | null
    description?: StringNullableWithAggregatesFilter<"lignes_budget"> | string | null
    annee_periode?: IntNullableWithAggregatesFilter<"lignes_budget"> | number | null
    montant?: DecimalNullableWithAggregatesFilter<"lignes_budget"> | Decimal | DecimalJsLike | number | string | null
    devise?: StringNullableWithAggregatesFilter<"lignes_budget"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"lignes_budget"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"lignes_budget"> | Date | string
  }

  export type modelesWhereInput = {
    AND?: modelesWhereInput | modelesWhereInput[]
    OR?: modelesWhereInput[]
    NOT?: modelesWhereInput | modelesWhereInput[]
    id?: BigIntFilter<"modeles"> | bigint | number
    identifiant_slug?: StringFilter<"modeles"> | string
    nom?: StringFilter<"modeles"> | string
    secteur?: StringNullableFilter<"modeles"> | string | null
    description?: StringNullableFilter<"modeles"> | string | null
    structure?: StringFilter<"modeles"> | string
    cree_par?: BigIntNullableFilter<"modeles"> | bigint | number | null
    est_public?: BoolNullableFilter<"modeles"> | boolean | null
    cree_le?: DateTimeFilter<"modeles"> | Date | string
    modifie_le?: DateTimeFilter<"modeles"> | Date | string
  }

  export type modelesOrderByWithRelationInput = {
    id?: SortOrder
    identifiant_slug?: SortOrder
    nom?: SortOrder
    secteur?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    structure?: SortOrder
    cree_par?: SortOrderInput | SortOrder
    est_public?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: modelesOrderByRelevanceInput
  }

  export type modelesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    identifiant_slug?: string
    AND?: modelesWhereInput | modelesWhereInput[]
    OR?: modelesWhereInput[]
    NOT?: modelesWhereInput | modelesWhereInput[]
    nom?: StringFilter<"modeles"> | string
    secteur?: StringNullableFilter<"modeles"> | string | null
    description?: StringNullableFilter<"modeles"> | string | null
    structure?: StringFilter<"modeles"> | string
    cree_par?: BigIntNullableFilter<"modeles"> | bigint | number | null
    est_public?: BoolNullableFilter<"modeles"> | boolean | null
    cree_le?: DateTimeFilter<"modeles"> | Date | string
    modifie_le?: DateTimeFilter<"modeles"> | Date | string
  }, "id" | "identifiant_slug">

  export type modelesOrderByWithAggregationInput = {
    id?: SortOrder
    identifiant_slug?: SortOrder
    nom?: SortOrder
    secteur?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    structure?: SortOrder
    cree_par?: SortOrderInput | SortOrder
    est_public?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: modelesCountOrderByAggregateInput
    _avg?: modelesAvgOrderByAggregateInput
    _max?: modelesMaxOrderByAggregateInput
    _min?: modelesMinOrderByAggregateInput
    _sum?: modelesSumOrderByAggregateInput
  }

  export type modelesScalarWhereWithAggregatesInput = {
    AND?: modelesScalarWhereWithAggregatesInput | modelesScalarWhereWithAggregatesInput[]
    OR?: modelesScalarWhereWithAggregatesInput[]
    NOT?: modelesScalarWhereWithAggregatesInput | modelesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"modeles"> | bigint | number
    identifiant_slug?: StringWithAggregatesFilter<"modeles"> | string
    nom?: StringWithAggregatesFilter<"modeles"> | string
    secteur?: StringNullableWithAggregatesFilter<"modeles"> | string | null
    description?: StringNullableWithAggregatesFilter<"modeles"> | string | null
    structure?: StringWithAggregatesFilter<"modeles"> | string
    cree_par?: BigIntNullableWithAggregatesFilter<"modeles"> | bigint | number | null
    est_public?: BoolNullableWithAggregatesFilter<"modeles"> | boolean | null
    cree_le?: DateTimeWithAggregatesFilter<"modeles"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"modeles"> | Date | string
  }

  export type organisationsWhereInput = {
    AND?: organisationsWhereInput | organisationsWhereInput[]
    OR?: organisationsWhereInput[]
    NOT?: organisationsWhereInput | organisationsWhereInput[]
    id?: BigIntFilter<"organisations"> | bigint | number
    nom?: StringFilter<"organisations"> | string
    type?: StringNullableFilter<"organisations"> | string | null
    contact_json?: StringNullableFilter<"organisations"> | string | null
    cree_le?: DateTimeFilter<"organisations"> | Date | string
    modifie_le?: DateTimeFilter<"organisations"> | Date | string
  }

  export type organisationsOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrderInput | SortOrder
    contact_json?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: organisationsOrderByRelevanceInput
  }

  export type organisationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: organisationsWhereInput | organisationsWhereInput[]
    OR?: organisationsWhereInput[]
    NOT?: organisationsWhereInput | organisationsWhereInput[]
    nom?: StringFilter<"organisations"> | string
    type?: StringNullableFilter<"organisations"> | string | null
    contact_json?: StringNullableFilter<"organisations"> | string | null
    cree_le?: DateTimeFilter<"organisations"> | Date | string
    modifie_le?: DateTimeFilter<"organisations"> | Date | string
  }, "id">

  export type organisationsOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrderInput | SortOrder
    contact_json?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: organisationsCountOrderByAggregateInput
    _avg?: organisationsAvgOrderByAggregateInput
    _max?: organisationsMaxOrderByAggregateInput
    _min?: organisationsMinOrderByAggregateInput
    _sum?: organisationsSumOrderByAggregateInput
  }

  export type organisationsScalarWhereWithAggregatesInput = {
    AND?: organisationsScalarWhereWithAggregatesInput | organisationsScalarWhereWithAggregatesInput[]
    OR?: organisationsScalarWhereWithAggregatesInput[]
    NOT?: organisationsScalarWhereWithAggregatesInput | organisationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"organisations"> | bigint | number
    nom?: StringWithAggregatesFilter<"organisations"> | string
    type?: StringNullableWithAggregatesFilter<"organisations"> | string | null
    contact_json?: StringNullableWithAggregatesFilter<"organisations"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"organisations"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"organisations"> | Date | string
  }

  export type projetsWhereInput = {
    AND?: projetsWhereInput | projetsWhereInput[]
    OR?: projetsWhereInput[]
    NOT?: projetsWhereInput | projetsWhereInput[]
    id?: BigIntFilter<"projets"> | bigint | number
    proprietaire_id?: BigIntFilter<"projets"> | bigint | number
    organisation_id?: BigIntNullableFilter<"projets"> | bigint | number | null
    type?: Enumprojets_typeFilter<"projets"> | $Enums.projets_type
    statut?: Enumprojets_statutNullableFilter<"projets"> | $Enums.projets_statut | null
    titre?: StringFilter<"projets"> | string
    description_courte?: StringNullableFilter<"projets"> | string | null
    metadonnees?: StringNullableFilter<"projets"> | string | null
    progression?: IntNullableFilter<"projets"> | number | null
    est_public?: BoolNullableFilter<"projets"> | boolean | null
    cree_le?: DateTimeFilter<"projets"> | Date | string
    modifie_le?: DateTimeFilter<"projets"> | Date | string
  }

  export type projetsOrderByWithRelationInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrderInput | SortOrder
    type?: SortOrder
    statut?: SortOrderInput | SortOrder
    titre?: SortOrder
    description_courte?: SortOrderInput | SortOrder
    metadonnees?: SortOrderInput | SortOrder
    progression?: SortOrderInput | SortOrder
    est_public?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: projetsOrderByRelevanceInput
  }

  export type projetsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: projetsWhereInput | projetsWhereInput[]
    OR?: projetsWhereInput[]
    NOT?: projetsWhereInput | projetsWhereInput[]
    proprietaire_id?: BigIntFilter<"projets"> | bigint | number
    organisation_id?: BigIntNullableFilter<"projets"> | bigint | number | null
    type?: Enumprojets_typeFilter<"projets"> | $Enums.projets_type
    statut?: Enumprojets_statutNullableFilter<"projets"> | $Enums.projets_statut | null
    titre?: StringFilter<"projets"> | string
    description_courte?: StringNullableFilter<"projets"> | string | null
    metadonnees?: StringNullableFilter<"projets"> | string | null
    progression?: IntNullableFilter<"projets"> | number | null
    est_public?: BoolNullableFilter<"projets"> | boolean | null
    cree_le?: DateTimeFilter<"projets"> | Date | string
    modifie_le?: DateTimeFilter<"projets"> | Date | string
  }, "id">

  export type projetsOrderByWithAggregationInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrderInput | SortOrder
    type?: SortOrder
    statut?: SortOrderInput | SortOrder
    titre?: SortOrder
    description_courte?: SortOrderInput | SortOrder
    metadonnees?: SortOrderInput | SortOrder
    progression?: SortOrderInput | SortOrder
    est_public?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: projetsCountOrderByAggregateInput
    _avg?: projetsAvgOrderByAggregateInput
    _max?: projetsMaxOrderByAggregateInput
    _min?: projetsMinOrderByAggregateInput
    _sum?: projetsSumOrderByAggregateInput
  }

  export type projetsScalarWhereWithAggregatesInput = {
    AND?: projetsScalarWhereWithAggregatesInput | projetsScalarWhereWithAggregatesInput[]
    OR?: projetsScalarWhereWithAggregatesInput[]
    NOT?: projetsScalarWhereWithAggregatesInput | projetsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"projets"> | bigint | number
    proprietaire_id?: BigIntWithAggregatesFilter<"projets"> | bigint | number
    organisation_id?: BigIntNullableWithAggregatesFilter<"projets"> | bigint | number | null
    type?: Enumprojets_typeWithAggregatesFilter<"projets"> | $Enums.projets_type
    statut?: Enumprojets_statutNullableWithAggregatesFilter<"projets"> | $Enums.projets_statut | null
    titre?: StringWithAggregatesFilter<"projets"> | string
    description_courte?: StringNullableWithAggregatesFilter<"projets"> | string | null
    metadonnees?: StringNullableWithAggregatesFilter<"projets"> | string | null
    progression?: IntNullableWithAggregatesFilter<"projets"> | number | null
    est_public?: BoolNullableWithAggregatesFilter<"projets"> | boolean | null
    cree_le?: DateTimeWithAggregatesFilter<"projets"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"projets"> | Date | string
  }

  export type ressourcesWhereInput = {
    AND?: ressourcesWhereInput | ressourcesWhereInput[]
    OR?: ressourcesWhereInput[]
    NOT?: ressourcesWhereInput | ressourcesWhereInput[]
    id?: BigIntFilter<"ressources"> | bigint | number
    projet_id?: BigIntFilter<"ressources"> | bigint | number
    activite_id?: BigIntNullableFilter<"ressources"> | bigint | number | null
    type_ressource?: Enumressources_type_ressourceNullableFilter<"ressources"> | $Enums.ressources_type_ressource | null
    libelle?: StringFilter<"ressources"> | string
    unite?: StringNullableFilter<"ressources"> | string | null
    quantite?: DecimalNullableFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: DecimalNullableFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    frequence?: Enumressources_frequenceNullableFilter<"ressources"> | $Enums.ressources_frequence | null
    cout_total?: DecimalNullableFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"ressources"> | string | null
    cree_le?: DateTimeFilter<"ressources"> | Date | string
    modifie_le?: DateTimeFilter<"ressources"> | Date | string
  }

  export type ressourcesOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrderInput | SortOrder
    type_ressource?: SortOrderInput | SortOrder
    libelle?: SortOrder
    unite?: SortOrderInput | SortOrder
    quantite?: SortOrderInput | SortOrder
    cout_unitaire?: SortOrderInput | SortOrder
    frequence?: SortOrderInput | SortOrder
    cout_total?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: ressourcesOrderByRelevanceInput
  }

  export type ressourcesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ressourcesWhereInput | ressourcesWhereInput[]
    OR?: ressourcesWhereInput[]
    NOT?: ressourcesWhereInput | ressourcesWhereInput[]
    projet_id?: BigIntFilter<"ressources"> | bigint | number
    activite_id?: BigIntNullableFilter<"ressources"> | bigint | number | null
    type_ressource?: Enumressources_type_ressourceNullableFilter<"ressources"> | $Enums.ressources_type_ressource | null
    libelle?: StringFilter<"ressources"> | string
    unite?: StringNullableFilter<"ressources"> | string | null
    quantite?: DecimalNullableFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: DecimalNullableFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    frequence?: Enumressources_frequenceNullableFilter<"ressources"> | $Enums.ressources_frequence | null
    cout_total?: DecimalNullableFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"ressources"> | string | null
    cree_le?: DateTimeFilter<"ressources"> | Date | string
    modifie_le?: DateTimeFilter<"ressources"> | Date | string
  }, "id">

  export type ressourcesOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrderInput | SortOrder
    type_ressource?: SortOrderInput | SortOrder
    libelle?: SortOrder
    unite?: SortOrderInput | SortOrder
    quantite?: SortOrderInput | SortOrder
    cout_unitaire?: SortOrderInput | SortOrder
    frequence?: SortOrderInput | SortOrder
    cout_total?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: ressourcesCountOrderByAggregateInput
    _avg?: ressourcesAvgOrderByAggregateInput
    _max?: ressourcesMaxOrderByAggregateInput
    _min?: ressourcesMinOrderByAggregateInput
    _sum?: ressourcesSumOrderByAggregateInput
  }

  export type ressourcesScalarWhereWithAggregatesInput = {
    AND?: ressourcesScalarWhereWithAggregatesInput | ressourcesScalarWhereWithAggregatesInput[]
    OR?: ressourcesScalarWhereWithAggregatesInput[]
    NOT?: ressourcesScalarWhereWithAggregatesInput | ressourcesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ressources"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"ressources"> | bigint | number
    activite_id?: BigIntNullableWithAggregatesFilter<"ressources"> | bigint | number | null
    type_ressource?: Enumressources_type_ressourceNullableWithAggregatesFilter<"ressources"> | $Enums.ressources_type_ressource | null
    libelle?: StringWithAggregatesFilter<"ressources"> | string
    unite?: StringNullableWithAggregatesFilter<"ressources"> | string | null
    quantite?: DecimalNullableWithAggregatesFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: DecimalNullableWithAggregatesFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    frequence?: Enumressources_frequenceNullableWithAggregatesFilter<"ressources"> | $Enums.ressources_frequence | null
    cout_total?: DecimalNullableWithAggregatesFilter<"ressources"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"ressources"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"ressources"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"ressources"> | Date | string
  }

  export type resultatsWhereInput = {
    AND?: resultatsWhereInput | resultatsWhereInput[]
    OR?: resultatsWhereInput[]
    NOT?: resultatsWhereInput | resultatsWhereInput[]
    id?: BigIntFilter<"resultats"> | bigint | number
    projet_id?: BigIntFilter<"resultats"> | bigint | number
    titre?: StringFilter<"resultats"> | string
    description?: StringNullableFilter<"resultats"> | string | null
    ordre?: IntNullableFilter<"resultats"> | number | null
    cree_le?: DateTimeFilter<"resultats"> | Date | string
    modifie_le?: DateTimeFilter<"resultats"> | Date | string
  }

  export type resultatsOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    ordre?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _relevance?: resultatsOrderByRelevanceInput
  }

  export type resultatsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: resultatsWhereInput | resultatsWhereInput[]
    OR?: resultatsWhereInput[]
    NOT?: resultatsWhereInput | resultatsWhereInput[]
    projet_id?: BigIntFilter<"resultats"> | bigint | number
    titre?: StringFilter<"resultats"> | string
    description?: StringNullableFilter<"resultats"> | string | null
    ordre?: IntNullableFilter<"resultats"> | number | null
    cree_le?: DateTimeFilter<"resultats"> | Date | string
    modifie_le?: DateTimeFilter<"resultats"> | Date | string
  }, "id">

  export type resultatsOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    ordre?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: resultatsCountOrderByAggregateInput
    _avg?: resultatsAvgOrderByAggregateInput
    _max?: resultatsMaxOrderByAggregateInput
    _min?: resultatsMinOrderByAggregateInput
    _sum?: resultatsSumOrderByAggregateInput
  }

  export type resultatsScalarWhereWithAggregatesInput = {
    AND?: resultatsScalarWhereWithAggregatesInput | resultatsScalarWhereWithAggregatesInput[]
    OR?: resultatsScalarWhereWithAggregatesInput[]
    NOT?: resultatsScalarWhereWithAggregatesInput | resultatsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"resultats"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"resultats"> | bigint | number
    titre?: StringWithAggregatesFilter<"resultats"> | string
    description?: StringNullableWithAggregatesFilter<"resultats"> | string | null
    ordre?: IntNullableWithAggregatesFilter<"resultats"> | number | null
    cree_le?: DateTimeWithAggregatesFilter<"resultats"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"resultats"> | Date | string
  }

  export type utilisateursWhereInput = {
    AND?: utilisateursWhereInput | utilisateursWhereInput[]
    OR?: utilisateursWhereInput[]
    NOT?: utilisateursWhereInput | utilisateursWhereInput[]
    id?: BigIntFilter<"utilisateurs"> | bigint | number
    organisation_id?: BigIntNullableFilter<"utilisateurs"> | bigint | number | null
    role?: Enumutilisateurs_roleFilter<"utilisateurs"> | $Enums.utilisateurs_role
    email?: StringFilter<"utilisateurs"> | string
    telephone?: StringNullableFilter<"utilisateurs"> | string | null
    mot_de_passe_hash?: StringFilter<"utilisateurs"> | string
    nom_utilisateur?: StringNullableFilter<"utilisateurs"> | string | null
    langue?: StringNullableFilter<"utilisateurs"> | string | null
    double_auth_active?: BoolNullableFilter<"utilisateurs"> | boolean | null
    profil?: StringNullableFilter<"utilisateurs"> | string | null
    cree_le?: DateTimeFilter<"utilisateurs"> | Date | string
    modifie_le?: DateTimeFilter<"utilisateurs"> | Date | string
    reset_token?: StringNullableFilter<"utilisateurs"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"utilisateurs"> | Date | string | null
  }

  export type utilisateursOrderByWithRelationInput = {
    id?: SortOrder
    organisation_id?: SortOrderInput | SortOrder
    role?: SortOrder
    email?: SortOrder
    telephone?: SortOrderInput | SortOrder
    mot_de_passe_hash?: SortOrder
    nom_utilisateur?: SortOrderInput | SortOrder
    langue?: SortOrderInput | SortOrder
    double_auth_active?: SortOrderInput | SortOrder
    profil?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    _relevance?: utilisateursOrderByRelevanceInput
  }

  export type utilisateursWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: utilisateursWhereInput | utilisateursWhereInput[]
    OR?: utilisateursWhereInput[]
    NOT?: utilisateursWhereInput | utilisateursWhereInput[]
    organisation_id?: BigIntNullableFilter<"utilisateurs"> | bigint | number | null
    role?: Enumutilisateurs_roleFilter<"utilisateurs"> | $Enums.utilisateurs_role
    telephone?: StringNullableFilter<"utilisateurs"> | string | null
    mot_de_passe_hash?: StringFilter<"utilisateurs"> | string
    nom_utilisateur?: StringNullableFilter<"utilisateurs"> | string | null
    langue?: StringNullableFilter<"utilisateurs"> | string | null
    double_auth_active?: BoolNullableFilter<"utilisateurs"> | boolean | null
    profil?: StringNullableFilter<"utilisateurs"> | string | null
    cree_le?: DateTimeFilter<"utilisateurs"> | Date | string
    modifie_le?: DateTimeFilter<"utilisateurs"> | Date | string
    reset_token?: StringNullableFilter<"utilisateurs"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"utilisateurs"> | Date | string | null
  }, "id" | "email">

  export type utilisateursOrderByWithAggregationInput = {
    id?: SortOrder
    organisation_id?: SortOrderInput | SortOrder
    role?: SortOrder
    email?: SortOrder
    telephone?: SortOrderInput | SortOrder
    mot_de_passe_hash?: SortOrder
    nom_utilisateur?: SortOrderInput | SortOrder
    langue?: SortOrderInput | SortOrder
    double_auth_active?: SortOrderInput | SortOrder
    profil?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    _count?: utilisateursCountOrderByAggregateInput
    _avg?: utilisateursAvgOrderByAggregateInput
    _max?: utilisateursMaxOrderByAggregateInput
    _min?: utilisateursMinOrderByAggregateInput
    _sum?: utilisateursSumOrderByAggregateInput
  }

  export type utilisateursScalarWhereWithAggregatesInput = {
    AND?: utilisateursScalarWhereWithAggregatesInput | utilisateursScalarWhereWithAggregatesInput[]
    OR?: utilisateursScalarWhereWithAggregatesInput[]
    NOT?: utilisateursScalarWhereWithAggregatesInput | utilisateursScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"utilisateurs"> | bigint | number
    organisation_id?: BigIntNullableWithAggregatesFilter<"utilisateurs"> | bigint | number | null
    role?: Enumutilisateurs_roleWithAggregatesFilter<"utilisateurs"> | $Enums.utilisateurs_role
    email?: StringWithAggregatesFilter<"utilisateurs"> | string
    telephone?: StringNullableWithAggregatesFilter<"utilisateurs"> | string | null
    mot_de_passe_hash?: StringWithAggregatesFilter<"utilisateurs"> | string
    nom_utilisateur?: StringNullableWithAggregatesFilter<"utilisateurs"> | string | null
    langue?: StringNullableWithAggregatesFilter<"utilisateurs"> | string | null
    double_auth_active?: BoolNullableWithAggregatesFilter<"utilisateurs"> | boolean | null
    profil?: StringNullableWithAggregatesFilter<"utilisateurs"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"utilisateurs"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"utilisateurs"> | Date | string
    reset_token?: StringNullableWithAggregatesFilter<"utilisateurs"> | string | null
    reset_token_expires?: DateTimeNullableWithAggregatesFilter<"utilisateurs"> | Date | string | null
  }

  export type versions_projetWhereInput = {
    AND?: versions_projetWhereInput | versions_projetWhereInput[]
    OR?: versions_projetWhereInput[]
    NOT?: versions_projetWhereInput | versions_projetWhereInput[]
    id?: BigIntFilter<"versions_projet"> | bigint | number
    projet_id?: BigIntFilter<"versions_projet"> | bigint | number
    cree_par?: BigIntFilter<"versions_projet"> | bigint | number
    etiquette_version?: StringNullableFilter<"versions_projet"> | string | null
    capture?: StringFilter<"versions_projet"> | string
    cree_le?: DateTimeFilter<"versions_projet"> | Date | string
  }

  export type versions_projetOrderByWithRelationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
    etiquette_version?: SortOrderInput | SortOrder
    capture?: SortOrder
    cree_le?: SortOrder
    _relevance?: versions_projetOrderByRelevanceInput
  }

  export type versions_projetWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: versions_projetWhereInput | versions_projetWhereInput[]
    OR?: versions_projetWhereInput[]
    NOT?: versions_projetWhereInput | versions_projetWhereInput[]
    projet_id?: BigIntFilter<"versions_projet"> | bigint | number
    cree_par?: BigIntFilter<"versions_projet"> | bigint | number
    etiquette_version?: StringNullableFilter<"versions_projet"> | string | null
    capture?: StringFilter<"versions_projet"> | string
    cree_le?: DateTimeFilter<"versions_projet"> | Date | string
  }, "id">

  export type versions_projetOrderByWithAggregationInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
    etiquette_version?: SortOrderInput | SortOrder
    capture?: SortOrder
    cree_le?: SortOrder
    _count?: versions_projetCountOrderByAggregateInput
    _avg?: versions_projetAvgOrderByAggregateInput
    _max?: versions_projetMaxOrderByAggregateInput
    _min?: versions_projetMinOrderByAggregateInput
    _sum?: versions_projetSumOrderByAggregateInput
  }

  export type versions_projetScalarWhereWithAggregatesInput = {
    AND?: versions_projetScalarWhereWithAggregatesInput | versions_projetScalarWhereWithAggregatesInput[]
    OR?: versions_projetScalarWhereWithAggregatesInput[]
    NOT?: versions_projetScalarWhereWithAggregatesInput | versions_projetScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"versions_projet"> | bigint | number
    projet_id?: BigIntWithAggregatesFilter<"versions_projet"> | bigint | number
    cree_par?: BigIntWithAggregatesFilter<"versions_projet"> | bigint | number
    etiquette_version?: StringNullableWithAggregatesFilter<"versions_projet"> | string | null
    capture?: StringWithAggregatesFilter<"versions_projet"> | string
    cree_le?: DateTimeWithAggregatesFilter<"versions_projet"> | Date | string
  }

  export type activitesCreateInput = {
    id?: bigint | number
    resultat_id: bigint | number
    projet_id: bigint | number
    titre: string
    description?: string | null
    date_debut?: Date | string | null
    date_fin?: Date | string | null
    duree_jours?: number | null
    ordre?: number | null
    metadonnees?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type activitesUncheckedCreateInput = {
    id?: bigint | number
    resultat_id: bigint | number
    projet_id: bigint | number
    titre: string
    description?: string | null
    date_debut?: Date | string | null
    date_fin?: Date | string | null
    duree_jours?: number | null
    ordre?: number | null
    metadonnees?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type activitesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resultat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date_debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resultat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date_debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitesCreateManyInput = {
    id?: bigint | number
    resultat_id: bigint | number
    projet_id: bigint | number
    titre: string
    description?: string | null
    date_debut?: Date | string | null
    date_fin?: Date | string | null
    duree_jours?: number | null
    ordre?: number | null
    metadonnees?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type activitesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resultat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date_debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resultat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date_debut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type amortissementsCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    libelle_actif: string
    date_achat?: Date | string | null
    cout_achat?: Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: number | null
    valeur_residuelle?: Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: Decimal | DecimalJsLike | number | string | null
    cree_le?: Date | string
  }

  export type amortissementsUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    libelle_actif: string
    date_achat?: Date | string | null
    cout_achat?: Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: number | null
    valeur_residuelle?: Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: Decimal | DecimalJsLike | number | string | null
    cree_le?: Date | string
  }

  export type amortissementsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_actif?: StringFieldUpdateOperationsInput | string
    date_achat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cout_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: NullableIntFieldUpdateOperationsInput | number | null
    valeur_residuelle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type amortissementsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_actif?: StringFieldUpdateOperationsInput | string
    date_achat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cout_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: NullableIntFieldUpdateOperationsInput | number | null
    valeur_residuelle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type amortissementsCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    libelle_actif: string
    date_achat?: Date | string | null
    cout_achat?: Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: number | null
    valeur_residuelle?: Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: Decimal | DecimalJsLike | number | string | null
    cree_le?: Date | string
  }

  export type amortissementsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_actif?: StringFieldUpdateOperationsInput | string
    date_achat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cout_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: NullableIntFieldUpdateOperationsInput | number | null
    valeur_residuelle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type amortissementsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_actif?: StringFieldUpdateOperationsInput | string
    date_achat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cout_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duree_utilite_mois?: NullableIntFieldUpdateOperationsInput | number | null
    valeur_residuelle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortissement_mensuel?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collaborationsCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    utilisateur_id: bigint | number
    role?: $Enums.collaborations_role | null
    invite_par?: bigint | number | null
    accepte_le?: Date | string | null
    cree_le?: Date | string
  }

  export type collaborationsUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    utilisateur_id: bigint | number
    role?: $Enums.collaborations_role | null
    invite_par?: bigint | number | null
    accepte_le?: Date | string | null
    cree_le?: Date | string
  }

  export type collaborationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableEnumcollaborations_roleFieldUpdateOperationsInput | $Enums.collaborations_role | null
    invite_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    accepte_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collaborationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableEnumcollaborations_roleFieldUpdateOperationsInput | $Enums.collaborations_role | null
    invite_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    accepte_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collaborationsCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    utilisateur_id: bigint | number
    role?: $Enums.collaborations_role | null
    invite_par?: bigint | number | null
    accepte_le?: Date | string | null
    cree_le?: Date | string
  }

  export type collaborationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableEnumcollaborations_roleFieldUpdateOperationsInput | $Enums.collaborations_role | null
    invite_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    accepte_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collaborationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: NullableEnumcollaborations_roleFieldUpdateOperationsInput | $Enums.collaborations_role | null
    invite_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    accepte_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentairesCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    utilisateur_id: bigint | number
    commentaire_parent_id?: bigint | number | null
    contenu: string
    metadonnees?: string | null
    cree_le?: Date | string
  }

  export type commentairesUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    utilisateur_id: bigint | number
    commentaire_parent_id?: bigint | number | null
    contenu: string
    metadonnees?: string | null
    cree_le?: Date | string
  }

  export type commentairesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    commentaire_parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contenu?: StringFieldUpdateOperationsInput | string
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentairesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    commentaire_parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contenu?: StringFieldUpdateOperationsInput | string
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentairesCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    utilisateur_id: bigint | number
    commentaire_parent_id?: bigint | number | null
    contenu: string
    metadonnees?: string | null
    cree_le?: Date | string
  }

  export type commentairesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    commentaire_parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contenu?: StringFieldUpdateOperationsInput | string
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentairesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    utilisateur_id?: BigIntFieldUpdateOperationsInput | bigint | number
    commentaire_parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contenu?: StringFieldUpdateOperationsInput | string
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fichiersCreateInput = {
    id?: bigint | number
    projet_id?: bigint | number | null
    proprietaire_id?: bigint | number | null
    cle_stockage: string
    nom_original?: string | null
    type_mime?: string | null
    taille_octets?: bigint | number | null
    usage?: $Enums.fichiers_usage | null
    cree_le?: Date | string
  }

  export type fichiersUncheckedCreateInput = {
    id?: bigint | number
    projet_id?: bigint | number | null
    proprietaire_id?: bigint | number | null
    cle_stockage: string
    nom_original?: string | null
    type_mime?: string | null
    taille_octets?: bigint | number | null
    usage?: $Enums.fichiers_usage | null
    cree_le?: Date | string
  }

  export type fichiersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    proprietaire_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cle_stockage?: StringFieldUpdateOperationsInput | string
    nom_original?: NullableStringFieldUpdateOperationsInput | string | null
    type_mime?: NullableStringFieldUpdateOperationsInput | string | null
    taille_octets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    usage?: NullableEnumfichiers_usageFieldUpdateOperationsInput | $Enums.fichiers_usage | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fichiersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    proprietaire_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cle_stockage?: StringFieldUpdateOperationsInput | string
    nom_original?: NullableStringFieldUpdateOperationsInput | string | null
    type_mime?: NullableStringFieldUpdateOperationsInput | string | null
    taille_octets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    usage?: NullableEnumfichiers_usageFieldUpdateOperationsInput | $Enums.fichiers_usage | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fichiersCreateManyInput = {
    id?: bigint | number
    projet_id?: bigint | number | null
    proprietaire_id?: bigint | number | null
    cle_stockage: string
    nom_original?: string | null
    type_mime?: string | null
    taille_octets?: bigint | number | null
    usage?: $Enums.fichiers_usage | null
    cree_le?: Date | string
  }

  export type fichiersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    proprietaire_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cle_stockage?: StringFieldUpdateOperationsInput | string
    nom_original?: NullableStringFieldUpdateOperationsInput | string | null
    type_mime?: NullableStringFieldUpdateOperationsInput | string | null
    taille_octets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    usage?: NullableEnumfichiers_usageFieldUpdateOperationsInput | $Enums.fichiers_usage | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fichiersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    proprietaire_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cle_stockage?: StringFieldUpdateOperationsInput | string
    nom_original?: NullableStringFieldUpdateOperationsInput | string | null
    type_mime?: NullableStringFieldUpdateOperationsInput | string | null
    taille_octets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    usage?: NullableEnumfichiers_usageFieldUpdateOperationsInput | $Enums.fichiers_usage | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flux_tresorerieCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    libelle_periode?: string | null
    date_periode?: Date | string | null
    entree?: Decimal | DecimalJsLike | number | string | null
    sortie?: Decimal | DecimalJsLike | number | string | null
    net?: Decimal | DecimalJsLike | number | string | null
    cree_le?: Date | string
  }

  export type flux_tresorerieUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    libelle_periode?: string | null
    date_periode?: Date | string | null
    entree?: Decimal | DecimalJsLike | number | string | null
    sortie?: Decimal | DecimalJsLike | number | string | null
    net?: Decimal | DecimalJsLike | number | string | null
    cree_le?: Date | string
  }

  export type flux_tresorerieUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_periode?: NullableStringFieldUpdateOperationsInput | string | null
    date_periode?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entree?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sortie?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    net?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flux_tresorerieUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_periode?: NullableStringFieldUpdateOperationsInput | string | null
    date_periode?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entree?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sortie?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    net?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flux_tresorerieCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    libelle_periode?: string | null
    date_periode?: Date | string | null
    entree?: Decimal | DecimalJsLike | number | string | null
    sortie?: Decimal | DecimalJsLike | number | string | null
    net?: Decimal | DecimalJsLike | number | string | null
    cree_le?: Date | string
  }

  export type flux_tresorerieUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_periode?: NullableStringFieldUpdateOperationsInput | string | null
    date_periode?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entree?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sortie?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    net?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flux_tresorerieUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_periode?: NullableStringFieldUpdateOperationsInput | string | null
    date_periode?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entree?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sortie?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    net?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type indicateurs_financiersCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    cle_indicateur: string
    valeur_indicateur?: Decimal | DecimalJsLike | number | string | null
    calcule_le?: Date | string
    calcule_par?: bigint | number | null
  }

  export type indicateurs_financiersUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    cle_indicateur: string
    valeur_indicateur?: Decimal | DecimalJsLike | number | string | null
    calcule_le?: Date | string
    calcule_par?: bigint | number | null
  }

  export type indicateurs_financiersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cle_indicateur?: StringFieldUpdateOperationsInput | string
    valeur_indicateur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeFieldUpdateOperationsInput | Date | string
    calcule_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type indicateurs_financiersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cle_indicateur?: StringFieldUpdateOperationsInput | string
    valeur_indicateur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeFieldUpdateOperationsInput | Date | string
    calcule_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type indicateurs_financiersCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    cle_indicateur: string
    valeur_indicateur?: Decimal | DecimalJsLike | number | string | null
    calcule_le?: Date | string
    calcule_par?: bigint | number | null
  }

  export type indicateurs_financiersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cle_indicateur?: StringFieldUpdateOperationsInput | string
    valeur_indicateur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeFieldUpdateOperationsInput | Date | string
    calcule_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type indicateurs_financiersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cle_indicateur?: StringFieldUpdateOperationsInput | string
    valeur_indicateur?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calcule_le?: DateTimeFieldUpdateOperationsInput | Date | string
    calcule_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type lignes_budgetCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    activite_id?: bigint | number | null
    ressource_id?: bigint | number | null
    categorie?: string | null
    description?: string | null
    annee_periode?: number | null
    montant?: Decimal | DecimalJsLike | number | string | null
    devise?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type lignes_budgetUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    activite_id?: bigint | number | null
    ressource_id?: bigint | number | null
    categorie?: string | null
    description?: string | null
    annee_periode?: number | null
    montant?: Decimal | DecimalJsLike | number | string | null
    devise?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type lignes_budgetUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ressource_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annee_periode?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lignes_budgetUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ressource_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annee_periode?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lignes_budgetCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    activite_id?: bigint | number | null
    ressource_id?: bigint | number | null
    categorie?: string | null
    description?: string | null
    annee_periode?: number | null
    montant?: Decimal | DecimalJsLike | number | string | null
    devise?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type lignes_budgetUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ressource_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annee_periode?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lignes_budgetUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ressource_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categorie?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annee_periode?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelesCreateInput = {
    id?: bigint | number
    identifiant_slug: string
    nom: string
    secteur?: string | null
    description?: string | null
    structure: string
    cree_par?: bigint | number | null
    est_public?: boolean | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type modelesUncheckedCreateInput = {
    id?: bigint | number
    identifiant_slug: string
    nom: string
    secteur?: string | null
    description?: string | null
    structure: string
    cree_par?: bigint | number | null
    est_public?: boolean | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type modelesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    identifiant_slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: StringFieldUpdateOperationsInput | string
    cree_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    identifiant_slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: StringFieldUpdateOperationsInput | string
    cree_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelesCreateManyInput = {
    id?: bigint | number
    identifiant_slug: string
    nom: string
    secteur?: string | null
    description?: string | null
    structure: string
    cree_par?: bigint | number | null
    est_public?: boolean | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type modelesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    identifiant_slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: StringFieldUpdateOperationsInput | string
    cree_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    identifiant_slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    secteur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: StringFieldUpdateOperationsInput | string
    cree_par?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organisationsCreateInput = {
    id?: bigint | number
    nom: string
    type?: string | null
    contact_json?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type organisationsUncheckedCreateInput = {
    id?: bigint | number
    nom: string
    type?: string | null
    contact_json?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type organisationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_json?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organisationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_json?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organisationsCreateManyInput = {
    id?: bigint | number
    nom: string
    type?: string | null
    contact_json?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type organisationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_json?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organisationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_json?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetsCreateInput = {
    id?: bigint | number
    proprietaire_id: bigint | number
    organisation_id?: bigint | number | null
    type?: $Enums.projets_type
    statut?: $Enums.projets_statut | null
    titre: string
    description_courte?: string | null
    metadonnees?: string | null
    progression?: number | null
    est_public?: boolean | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type projetsUncheckedCreateInput = {
    id?: bigint | number
    proprietaire_id: bigint | number
    organisation_id?: bigint | number | null
    type?: $Enums.projets_type
    statut?: $Enums.projets_statut | null
    titre: string
    description_courte?: string | null
    metadonnees?: string | null
    progression?: number | null
    est_public?: boolean | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type projetsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    proprietaire_id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: Enumprojets_typeFieldUpdateOperationsInput | $Enums.projets_type
    statut?: NullableEnumprojets_statutFieldUpdateOperationsInput | $Enums.projets_statut | null
    titre?: StringFieldUpdateOperationsInput | string
    description_courte?: NullableStringFieldUpdateOperationsInput | string | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    progression?: NullableIntFieldUpdateOperationsInput | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    proprietaire_id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: Enumprojets_typeFieldUpdateOperationsInput | $Enums.projets_type
    statut?: NullableEnumprojets_statutFieldUpdateOperationsInput | $Enums.projets_statut | null
    titre?: StringFieldUpdateOperationsInput | string
    description_courte?: NullableStringFieldUpdateOperationsInput | string | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    progression?: NullableIntFieldUpdateOperationsInput | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetsCreateManyInput = {
    id?: bigint | number
    proprietaire_id: bigint | number
    organisation_id?: bigint | number | null
    type?: $Enums.projets_type
    statut?: $Enums.projets_statut | null
    titre: string
    description_courte?: string | null
    metadonnees?: string | null
    progression?: number | null
    est_public?: boolean | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type projetsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    proprietaire_id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: Enumprojets_typeFieldUpdateOperationsInput | $Enums.projets_type
    statut?: NullableEnumprojets_statutFieldUpdateOperationsInput | $Enums.projets_statut | null
    titre?: StringFieldUpdateOperationsInput | string
    description_courte?: NullableStringFieldUpdateOperationsInput | string | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    progression?: NullableIntFieldUpdateOperationsInput | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    proprietaire_id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: Enumprojets_typeFieldUpdateOperationsInput | $Enums.projets_type
    statut?: NullableEnumprojets_statutFieldUpdateOperationsInput | $Enums.projets_statut | null
    titre?: StringFieldUpdateOperationsInput | string
    description_courte?: NullableStringFieldUpdateOperationsInput | string | null
    metadonnees?: NullableStringFieldUpdateOperationsInput | string | null
    progression?: NullableIntFieldUpdateOperationsInput | number | null
    est_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressourcesCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    activite_id?: bigint | number | null
    type_ressource?: $Enums.ressources_type_ressource | null
    libelle: string
    unite?: string | null
    quantite?: Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: Decimal | DecimalJsLike | number | string | null
    frequence?: $Enums.ressources_frequence | null
    cout_total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type ressourcesUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    activite_id?: bigint | number | null
    type_ressource?: $Enums.ressources_type_ressource | null
    libelle: string
    unite?: string | null
    quantite?: Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: Decimal | DecimalJsLike | number | string | null
    frequence?: $Enums.ressources_frequence | null
    cout_total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type ressourcesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type_ressource?: NullableEnumressources_type_ressourceFieldUpdateOperationsInput | $Enums.ressources_type_ressource | null
    libelle?: StringFieldUpdateOperationsInput | string
    unite?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frequence?: NullableEnumressources_frequenceFieldUpdateOperationsInput | $Enums.ressources_frequence | null
    cout_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressourcesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type_ressource?: NullableEnumressources_type_ressourceFieldUpdateOperationsInput | $Enums.ressources_type_ressource | null
    libelle?: StringFieldUpdateOperationsInput | string
    unite?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frequence?: NullableEnumressources_frequenceFieldUpdateOperationsInput | $Enums.ressources_frequence | null
    cout_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressourcesCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    activite_id?: bigint | number | null
    type_ressource?: $Enums.ressources_type_ressource | null
    libelle: string
    unite?: string | null
    quantite?: Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: Decimal | DecimalJsLike | number | string | null
    frequence?: $Enums.ressources_frequence | null
    cout_total?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type ressourcesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type_ressource?: NullableEnumressources_type_ressourceFieldUpdateOperationsInput | $Enums.ressources_type_ressource | null
    libelle?: StringFieldUpdateOperationsInput | string
    unite?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frequence?: NullableEnumressources_frequenceFieldUpdateOperationsInput | $Enums.ressources_frequence | null
    cout_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressourcesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    activite_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type_ressource?: NullableEnumressources_type_ressourceFieldUpdateOperationsInput | $Enums.ressources_type_ressource | null
    libelle?: StringFieldUpdateOperationsInput | string
    unite?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cout_unitaire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    frequence?: NullableEnumressources_frequenceFieldUpdateOperationsInput | $Enums.ressources_frequence | null
    cout_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resultatsCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    titre: string
    description?: string | null
    ordre?: number | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type resultatsUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    titre: string
    description?: string | null
    ordre?: number | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type resultatsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resultatsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resultatsCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    titre: string
    description?: string | null
    ordre?: number | null
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type resultatsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resultatsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: NullableIntFieldUpdateOperationsInput | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type utilisateursCreateInput = {
    id?: bigint | number
    organisation_id?: bigint | number | null
    role?: $Enums.utilisateurs_role
    email: string
    telephone?: string | null
    mot_de_passe_hash: string
    nom_utilisateur?: string | null
    langue?: string | null
    double_auth_active?: boolean | null
    profil?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
    reset_token?: string | null
    reset_token_expires?: Date | string | null
  }

  export type utilisateursUncheckedCreateInput = {
    id?: bigint | number
    organisation_id?: bigint | number | null
    role?: $Enums.utilisateurs_role
    email: string
    telephone?: string | null
    mot_de_passe_hash: string
    nom_utilisateur?: string | null
    langue?: string | null
    double_auth_active?: boolean | null
    profil?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
    reset_token?: string | null
    reset_token_expires?: Date | string | null
  }

  export type utilisateursUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    role?: Enumutilisateurs_roleFieldUpdateOperationsInput | $Enums.utilisateurs_role
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe_hash?: StringFieldUpdateOperationsInput | string
    nom_utilisateur?: NullableStringFieldUpdateOperationsInput | string | null
    langue?: NullableStringFieldUpdateOperationsInput | string | null
    double_auth_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profil?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateursUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    role?: Enumutilisateurs_roleFieldUpdateOperationsInput | $Enums.utilisateurs_role
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe_hash?: StringFieldUpdateOperationsInput | string
    nom_utilisateur?: NullableStringFieldUpdateOperationsInput | string | null
    langue?: NullableStringFieldUpdateOperationsInput | string | null
    double_auth_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profil?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateursCreateManyInput = {
    id?: bigint | number
    organisation_id?: bigint | number | null
    role?: $Enums.utilisateurs_role
    email: string
    telephone?: string | null
    mot_de_passe_hash: string
    nom_utilisateur?: string | null
    langue?: string | null
    double_auth_active?: boolean | null
    profil?: string | null
    cree_le?: Date | string
    modifie_le?: Date | string
    reset_token?: string | null
    reset_token_expires?: Date | string | null
  }

  export type utilisateursUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    role?: Enumutilisateurs_roleFieldUpdateOperationsInput | $Enums.utilisateurs_role
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe_hash?: StringFieldUpdateOperationsInput | string
    nom_utilisateur?: NullableStringFieldUpdateOperationsInput | string | null
    langue?: NullableStringFieldUpdateOperationsInput | string | null
    double_auth_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profil?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateursUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    organisation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    role?: Enumutilisateurs_roleFieldUpdateOperationsInput | $Enums.utilisateurs_role
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe_hash?: StringFieldUpdateOperationsInput | string
    nom_utilisateur?: NullableStringFieldUpdateOperationsInput | string | null
    langue?: NullableStringFieldUpdateOperationsInput | string | null
    double_auth_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profil?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type versions_projetCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    cree_par: bigint | number
    etiquette_version?: string | null
    capture: string
    cree_le?: Date | string
  }

  export type versions_projetUncheckedCreateInput = {
    id?: bigint | number
    projet_id: bigint | number
    cree_par: bigint | number
    etiquette_version?: string | null
    capture: string
    cree_le?: Date | string
  }

  export type versions_projetUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cree_par?: BigIntFieldUpdateOperationsInput | bigint | number
    etiquette_version?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type versions_projetUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cree_par?: BigIntFieldUpdateOperationsInput | bigint | number
    etiquette_version?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type versions_projetCreateManyInput = {
    id?: bigint | number
    projet_id: bigint | number
    cree_par: bigint | number
    etiquette_version?: string | null
    capture: string
    cree_le?: Date | string
  }

  export type versions_projetUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cree_par?: BigIntFieldUpdateOperationsInput | bigint | number
    etiquette_version?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type versions_projetUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projet_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cree_par?: BigIntFieldUpdateOperationsInput | bigint | number
    etiquette_version?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type activitesOrderByRelevanceInput = {
    fields: activitesOrderByRelevanceFieldEnum | activitesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type activitesCountOrderByAggregateInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrder
    ordre?: SortOrder
    metadonnees?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type activitesAvgOrderByAggregateInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    duree_jours?: SortOrder
    ordre?: SortOrder
  }

  export type activitesMaxOrderByAggregateInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrder
    ordre?: SortOrder
    metadonnees?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type activitesMinOrderByAggregateInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrder
    ordre?: SortOrder
    metadonnees?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type activitesSumOrderByAggregateInput = {
    id?: SortOrder
    resultat_id?: SortOrder
    projet_id?: SortOrder
    duree_jours?: SortOrder
    ordre?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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
    search?: string
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type amortissementsOrderByRelevanceInput = {
    fields: amortissementsOrderByRelevanceFieldEnum | amortissementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type amortissementsCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_actif?: SortOrder
    date_achat?: SortOrder
    cout_achat?: SortOrder
    duree_utilite_mois?: SortOrder
    valeur_residuelle?: SortOrder
    amortissement_mensuel?: SortOrder
    cree_le?: SortOrder
  }

  export type amortissementsAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cout_achat?: SortOrder
    duree_utilite_mois?: SortOrder
    valeur_residuelle?: SortOrder
    amortissement_mensuel?: SortOrder
  }

  export type amortissementsMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_actif?: SortOrder
    date_achat?: SortOrder
    cout_achat?: SortOrder
    duree_utilite_mois?: SortOrder
    valeur_residuelle?: SortOrder
    amortissement_mensuel?: SortOrder
    cree_le?: SortOrder
  }

  export type amortissementsMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_actif?: SortOrder
    date_achat?: SortOrder
    cout_achat?: SortOrder
    duree_utilite_mois?: SortOrder
    valeur_residuelle?: SortOrder
    amortissement_mensuel?: SortOrder
    cree_le?: SortOrder
  }

  export type amortissementsSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cout_achat?: SortOrder
    duree_utilite_mois?: SortOrder
    valeur_residuelle?: SortOrder
    amortissement_mensuel?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumcollaborations_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.collaborations_role | Enumcollaborations_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.collaborations_role[] | null
    notIn?: $Enums.collaborations_role[] | null
    not?: NestedEnumcollaborations_roleNullableFilter<$PrismaModel> | $Enums.collaborations_role | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type collaborationsCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    role?: SortOrder
    invite_par?: SortOrder
    accepte_le?: SortOrder
    cree_le?: SortOrder
  }

  export type collaborationsAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    invite_par?: SortOrder
  }

  export type collaborationsMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    role?: SortOrder
    invite_par?: SortOrder
    accepte_le?: SortOrder
    cree_le?: SortOrder
  }

  export type collaborationsMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    role?: SortOrder
    invite_par?: SortOrder
    accepte_le?: SortOrder
    cree_le?: SortOrder
  }

  export type collaborationsSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    invite_par?: SortOrder
  }

  export type Enumcollaborations_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.collaborations_role | Enumcollaborations_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.collaborations_role[] | null
    notIn?: $Enums.collaborations_role[] | null
    not?: NestedEnumcollaborations_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.collaborations_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcollaborations_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumcollaborations_roleNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type commentairesOrderByRelevanceInput = {
    fields: commentairesOrderByRelevanceFieldEnum | commentairesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentairesCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrder
    contenu?: SortOrder
    metadonnees?: SortOrder
    cree_le?: SortOrder
  }

  export type commentairesAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrder
  }

  export type commentairesMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrder
    contenu?: SortOrder
    metadonnees?: SortOrder
    cree_le?: SortOrder
  }

  export type commentairesMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrder
    contenu?: SortOrder
    metadonnees?: SortOrder
    cree_le?: SortOrder
  }

  export type commentairesSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    utilisateur_id?: SortOrder
    commentaire_parent_id?: SortOrder
  }

  export type Enumfichiers_usageNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.fichiers_usage | Enumfichiers_usageFieldRefInput<$PrismaModel> | null
    in?: $Enums.fichiers_usage[] | null
    notIn?: $Enums.fichiers_usage[] | null
    not?: NestedEnumfichiers_usageNullableFilter<$PrismaModel> | $Enums.fichiers_usage | null
  }

  export type fichiersOrderByRelevanceInput = {
    fields: fichiersOrderByRelevanceFieldEnum | fichiersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fichiersCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    proprietaire_id?: SortOrder
    cle_stockage?: SortOrder
    nom_original?: SortOrder
    type_mime?: SortOrder
    taille_octets?: SortOrder
    usage?: SortOrder
    cree_le?: SortOrder
  }

  export type fichiersAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    proprietaire_id?: SortOrder
    taille_octets?: SortOrder
  }

  export type fichiersMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    proprietaire_id?: SortOrder
    cle_stockage?: SortOrder
    nom_original?: SortOrder
    type_mime?: SortOrder
    taille_octets?: SortOrder
    usage?: SortOrder
    cree_le?: SortOrder
  }

  export type fichiersMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    proprietaire_id?: SortOrder
    cle_stockage?: SortOrder
    nom_original?: SortOrder
    type_mime?: SortOrder
    taille_octets?: SortOrder
    usage?: SortOrder
    cree_le?: SortOrder
  }

  export type fichiersSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    proprietaire_id?: SortOrder
    taille_octets?: SortOrder
  }

  export type Enumfichiers_usageNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fichiers_usage | Enumfichiers_usageFieldRefInput<$PrismaModel> | null
    in?: $Enums.fichiers_usage[] | null
    notIn?: $Enums.fichiers_usage[] | null
    not?: NestedEnumfichiers_usageNullableWithAggregatesFilter<$PrismaModel> | $Enums.fichiers_usage | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfichiers_usageNullableFilter<$PrismaModel>
    _max?: NestedEnumfichiers_usageNullableFilter<$PrismaModel>
  }

  export type flux_tresorerieOrderByRelevanceInput = {
    fields: flux_tresorerieOrderByRelevanceFieldEnum | flux_tresorerieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type flux_tresorerieCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_periode?: SortOrder
    date_periode?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    net?: SortOrder
    cree_le?: SortOrder
  }

  export type flux_tresorerieAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    net?: SortOrder
  }

  export type flux_tresorerieMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_periode?: SortOrder
    date_periode?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    net?: SortOrder
    cree_le?: SortOrder
  }

  export type flux_tresorerieMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    libelle_periode?: SortOrder
    date_periode?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    net?: SortOrder
    cree_le?: SortOrder
  }

  export type flux_tresorerieSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    net?: SortOrder
  }

  export type indicateurs_financiersOrderByRelevanceInput = {
    fields: indicateurs_financiersOrderByRelevanceFieldEnum | indicateurs_financiersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type indicateurs_financiersCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cle_indicateur?: SortOrder
    valeur_indicateur?: SortOrder
    calcule_le?: SortOrder
    calcule_par?: SortOrder
  }

  export type indicateurs_financiersAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    valeur_indicateur?: SortOrder
    calcule_par?: SortOrder
  }

  export type indicateurs_financiersMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cle_indicateur?: SortOrder
    valeur_indicateur?: SortOrder
    calcule_le?: SortOrder
    calcule_par?: SortOrder
  }

  export type indicateurs_financiersMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cle_indicateur?: SortOrder
    valeur_indicateur?: SortOrder
    calcule_le?: SortOrder
    calcule_par?: SortOrder
  }

  export type indicateurs_financiersSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    valeur_indicateur?: SortOrder
    calcule_par?: SortOrder
  }

  export type lignes_budgetOrderByRelevanceInput = {
    fields: lignes_budgetOrderByRelevanceFieldEnum | lignes_budgetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lignes_budgetCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    ressource_id?: SortOrder
    categorie?: SortOrder
    description?: SortOrder
    annee_periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type lignes_budgetAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    ressource_id?: SortOrder
    annee_periode?: SortOrder
    montant?: SortOrder
  }

  export type lignes_budgetMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    ressource_id?: SortOrder
    categorie?: SortOrder
    description?: SortOrder
    annee_periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type lignes_budgetMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    ressource_id?: SortOrder
    categorie?: SortOrder
    description?: SortOrder
    annee_periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type lignes_budgetSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    ressource_id?: SortOrder
    annee_periode?: SortOrder
    montant?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type modelesOrderByRelevanceInput = {
    fields: modelesOrderByRelevanceFieldEnum | modelesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type modelesCountOrderByAggregateInput = {
    id?: SortOrder
    identifiant_slug?: SortOrder
    nom?: SortOrder
    secteur?: SortOrder
    description?: SortOrder
    structure?: SortOrder
    cree_par?: SortOrder
    est_public?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type modelesAvgOrderByAggregateInput = {
    id?: SortOrder
    cree_par?: SortOrder
  }

  export type modelesMaxOrderByAggregateInput = {
    id?: SortOrder
    identifiant_slug?: SortOrder
    nom?: SortOrder
    secteur?: SortOrder
    description?: SortOrder
    structure?: SortOrder
    cree_par?: SortOrder
    est_public?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type modelesMinOrderByAggregateInput = {
    id?: SortOrder
    identifiant_slug?: SortOrder
    nom?: SortOrder
    secteur?: SortOrder
    description?: SortOrder
    structure?: SortOrder
    cree_par?: SortOrder
    est_public?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type modelesSumOrderByAggregateInput = {
    id?: SortOrder
    cree_par?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type organisationsOrderByRelevanceInput = {
    fields: organisationsOrderByRelevanceFieldEnum | organisationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type organisationsCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    contact_json?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type organisationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organisationsMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    contact_json?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type organisationsMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    contact_json?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type organisationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumprojets_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_type | Enumprojets_typeFieldRefInput<$PrismaModel>
    in?: $Enums.projets_type[]
    notIn?: $Enums.projets_type[]
    not?: NestedEnumprojets_typeFilter<$PrismaModel> | $Enums.projets_type
  }

  export type Enumprojets_statutNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_statut | Enumprojets_statutFieldRefInput<$PrismaModel> | null
    in?: $Enums.projets_statut[] | null
    notIn?: $Enums.projets_statut[] | null
    not?: NestedEnumprojets_statutNullableFilter<$PrismaModel> | $Enums.projets_statut | null
  }

  export type projetsOrderByRelevanceInput = {
    fields: projetsOrderByRelevanceFieldEnum | projetsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projetsCountOrderByAggregateInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    titre?: SortOrder
    description_courte?: SortOrder
    metadonnees?: SortOrder
    progression?: SortOrder
    est_public?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type projetsAvgOrderByAggregateInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrder
    progression?: SortOrder
  }

  export type projetsMaxOrderByAggregateInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    titre?: SortOrder
    description_courte?: SortOrder
    metadonnees?: SortOrder
    progression?: SortOrder
    est_public?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type projetsMinOrderByAggregateInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    titre?: SortOrder
    description_courte?: SortOrder
    metadonnees?: SortOrder
    progression?: SortOrder
    est_public?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type projetsSumOrderByAggregateInput = {
    id?: SortOrder
    proprietaire_id?: SortOrder
    organisation_id?: SortOrder
    progression?: SortOrder
  }

  export type Enumprojets_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_type | Enumprojets_typeFieldRefInput<$PrismaModel>
    in?: $Enums.projets_type[]
    notIn?: $Enums.projets_type[]
    not?: NestedEnumprojets_typeWithAggregatesFilter<$PrismaModel> | $Enums.projets_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojets_typeFilter<$PrismaModel>
    _max?: NestedEnumprojets_typeFilter<$PrismaModel>
  }

  export type Enumprojets_statutNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_statut | Enumprojets_statutFieldRefInput<$PrismaModel> | null
    in?: $Enums.projets_statut[] | null
    notIn?: $Enums.projets_statut[] | null
    not?: NestedEnumprojets_statutNullableWithAggregatesFilter<$PrismaModel> | $Enums.projets_statut | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprojets_statutNullableFilter<$PrismaModel>
    _max?: NestedEnumprojets_statutNullableFilter<$PrismaModel>
  }

  export type Enumressources_type_ressourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_type_ressource | Enumressources_type_ressourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_type_ressource[] | null
    notIn?: $Enums.ressources_type_ressource[] | null
    not?: NestedEnumressources_type_ressourceNullableFilter<$PrismaModel> | $Enums.ressources_type_ressource | null
  }

  export type Enumressources_frequenceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_frequence | Enumressources_frequenceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_frequence[] | null
    notIn?: $Enums.ressources_frequence[] | null
    not?: NestedEnumressources_frequenceNullableFilter<$PrismaModel> | $Enums.ressources_frequence | null
  }

  export type ressourcesOrderByRelevanceInput = {
    fields: ressourcesOrderByRelevanceFieldEnum | ressourcesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ressourcesCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    type_ressource?: SortOrder
    libelle?: SortOrder
    unite?: SortOrder
    quantite?: SortOrder
    cout_unitaire?: SortOrder
    frequence?: SortOrder
    cout_total?: SortOrder
    notes?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type ressourcesAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    quantite?: SortOrder
    cout_unitaire?: SortOrder
    cout_total?: SortOrder
  }

  export type ressourcesMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    type_ressource?: SortOrder
    libelle?: SortOrder
    unite?: SortOrder
    quantite?: SortOrder
    cout_unitaire?: SortOrder
    frequence?: SortOrder
    cout_total?: SortOrder
    notes?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type ressourcesMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    type_ressource?: SortOrder
    libelle?: SortOrder
    unite?: SortOrder
    quantite?: SortOrder
    cout_unitaire?: SortOrder
    frequence?: SortOrder
    cout_total?: SortOrder
    notes?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type ressourcesSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    activite_id?: SortOrder
    quantite?: SortOrder
    cout_unitaire?: SortOrder
    cout_total?: SortOrder
  }

  export type Enumressources_type_ressourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_type_ressource | Enumressources_type_ressourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_type_ressource[] | null
    notIn?: $Enums.ressources_type_ressource[] | null
    not?: NestedEnumressources_type_ressourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.ressources_type_ressource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumressources_type_ressourceNullableFilter<$PrismaModel>
    _max?: NestedEnumressources_type_ressourceNullableFilter<$PrismaModel>
  }

  export type Enumressources_frequenceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_frequence | Enumressources_frequenceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_frequence[] | null
    notIn?: $Enums.ressources_frequence[] | null
    not?: NestedEnumressources_frequenceNullableWithAggregatesFilter<$PrismaModel> | $Enums.ressources_frequence | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumressources_frequenceNullableFilter<$PrismaModel>
    _max?: NestedEnumressources_frequenceNullableFilter<$PrismaModel>
  }

  export type resultatsOrderByRelevanceInput = {
    fields: resultatsOrderByRelevanceFieldEnum | resultatsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type resultatsCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    ordre?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type resultatsAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    ordre?: SortOrder
  }

  export type resultatsMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    ordre?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type resultatsMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    ordre?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type resultatsSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    ordre?: SortOrder
  }

  export type Enumutilisateurs_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.utilisateurs_role | Enumutilisateurs_roleFieldRefInput<$PrismaModel>
    in?: $Enums.utilisateurs_role[]
    notIn?: $Enums.utilisateurs_role[]
    not?: NestedEnumutilisateurs_roleFilter<$PrismaModel> | $Enums.utilisateurs_role
  }

  export type utilisateursOrderByRelevanceInput = {
    fields: utilisateursOrderByRelevanceFieldEnum | utilisateursOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type utilisateursCountOrderByAggregateInput = {
    id?: SortOrder
    organisation_id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    mot_de_passe_hash?: SortOrder
    nom_utilisateur?: SortOrder
    langue?: SortOrder
    double_auth_active?: SortOrder
    profil?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    reset_token?: SortOrder
    reset_token_expires?: SortOrder
  }

  export type utilisateursAvgOrderByAggregateInput = {
    id?: SortOrder
    organisation_id?: SortOrder
  }

  export type utilisateursMaxOrderByAggregateInput = {
    id?: SortOrder
    organisation_id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    mot_de_passe_hash?: SortOrder
    nom_utilisateur?: SortOrder
    langue?: SortOrder
    double_auth_active?: SortOrder
    profil?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    reset_token?: SortOrder
    reset_token_expires?: SortOrder
  }

  export type utilisateursMinOrderByAggregateInput = {
    id?: SortOrder
    organisation_id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    mot_de_passe_hash?: SortOrder
    nom_utilisateur?: SortOrder
    langue?: SortOrder
    double_auth_active?: SortOrder
    profil?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    reset_token?: SortOrder
    reset_token_expires?: SortOrder
  }

  export type utilisateursSumOrderByAggregateInput = {
    id?: SortOrder
    organisation_id?: SortOrder
  }

  export type Enumutilisateurs_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.utilisateurs_role | Enumutilisateurs_roleFieldRefInput<$PrismaModel>
    in?: $Enums.utilisateurs_role[]
    notIn?: $Enums.utilisateurs_role[]
    not?: NestedEnumutilisateurs_roleWithAggregatesFilter<$PrismaModel> | $Enums.utilisateurs_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumutilisateurs_roleFilter<$PrismaModel>
    _max?: NestedEnumutilisateurs_roleFilter<$PrismaModel>
  }

  export type versions_projetOrderByRelevanceInput = {
    fields: versions_projetOrderByRelevanceFieldEnum | versions_projetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type versions_projetCountOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
    etiquette_version?: SortOrder
    capture?: SortOrder
    cree_le?: SortOrder
  }

  export type versions_projetAvgOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
  }

  export type versions_projetMaxOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
    etiquette_version?: SortOrder
    capture?: SortOrder
    cree_le?: SortOrder
  }

  export type versions_projetMinOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
    etiquette_version?: SortOrder
    capture?: SortOrder
    cree_le?: SortOrder
  }

  export type versions_projetSumOrderByAggregateInput = {
    id?: SortOrder
    projet_id?: SortOrder
    cree_par?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumcollaborations_roleFieldUpdateOperationsInput = {
    set?: $Enums.collaborations_role | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableEnumfichiers_usageFieldUpdateOperationsInput = {
    set?: $Enums.fichiers_usage | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Enumprojets_typeFieldUpdateOperationsInput = {
    set?: $Enums.projets_type
  }

  export type NullableEnumprojets_statutFieldUpdateOperationsInput = {
    set?: $Enums.projets_statut | null
  }

  export type NullableEnumressources_type_ressourceFieldUpdateOperationsInput = {
    set?: $Enums.ressources_type_ressource | null
  }

  export type NullableEnumressources_frequenceFieldUpdateOperationsInput = {
    set?: $Enums.ressources_frequence | null
  }

  export type Enumutilisateurs_roleFieldUpdateOperationsInput = {
    set?: $Enums.utilisateurs_role
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumcollaborations_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.collaborations_role | Enumcollaborations_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.collaborations_role[] | null
    notIn?: $Enums.collaborations_role[] | null
    not?: NestedEnumcollaborations_roleNullableFilter<$PrismaModel> | $Enums.collaborations_role | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumcollaborations_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.collaborations_role | Enumcollaborations_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.collaborations_role[] | null
    notIn?: $Enums.collaborations_role[] | null
    not?: NestedEnumcollaborations_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.collaborations_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcollaborations_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumcollaborations_roleNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumfichiers_usageNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.fichiers_usage | Enumfichiers_usageFieldRefInput<$PrismaModel> | null
    in?: $Enums.fichiers_usage[] | null
    notIn?: $Enums.fichiers_usage[] | null
    not?: NestedEnumfichiers_usageNullableFilter<$PrismaModel> | $Enums.fichiers_usage | null
  }

  export type NestedEnumfichiers_usageNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fichiers_usage | Enumfichiers_usageFieldRefInput<$PrismaModel> | null
    in?: $Enums.fichiers_usage[] | null
    notIn?: $Enums.fichiers_usage[] | null
    not?: NestedEnumfichiers_usageNullableWithAggregatesFilter<$PrismaModel> | $Enums.fichiers_usage | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfichiers_usageNullableFilter<$PrismaModel>
    _max?: NestedEnumfichiers_usageNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumprojets_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_type | Enumprojets_typeFieldRefInput<$PrismaModel>
    in?: $Enums.projets_type[]
    notIn?: $Enums.projets_type[]
    not?: NestedEnumprojets_typeFilter<$PrismaModel> | $Enums.projets_type
  }

  export type NestedEnumprojets_statutNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_statut | Enumprojets_statutFieldRefInput<$PrismaModel> | null
    in?: $Enums.projets_statut[] | null
    notIn?: $Enums.projets_statut[] | null
    not?: NestedEnumprojets_statutNullableFilter<$PrismaModel> | $Enums.projets_statut | null
  }

  export type NestedEnumprojets_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_type | Enumprojets_typeFieldRefInput<$PrismaModel>
    in?: $Enums.projets_type[]
    notIn?: $Enums.projets_type[]
    not?: NestedEnumprojets_typeWithAggregatesFilter<$PrismaModel> | $Enums.projets_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojets_typeFilter<$PrismaModel>
    _max?: NestedEnumprojets_typeFilter<$PrismaModel>
  }

  export type NestedEnumprojets_statutNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projets_statut | Enumprojets_statutFieldRefInput<$PrismaModel> | null
    in?: $Enums.projets_statut[] | null
    notIn?: $Enums.projets_statut[] | null
    not?: NestedEnumprojets_statutNullableWithAggregatesFilter<$PrismaModel> | $Enums.projets_statut | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprojets_statutNullableFilter<$PrismaModel>
    _max?: NestedEnumprojets_statutNullableFilter<$PrismaModel>
  }

  export type NestedEnumressources_type_ressourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_type_ressource | Enumressources_type_ressourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_type_ressource[] | null
    notIn?: $Enums.ressources_type_ressource[] | null
    not?: NestedEnumressources_type_ressourceNullableFilter<$PrismaModel> | $Enums.ressources_type_ressource | null
  }

  export type NestedEnumressources_frequenceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_frequence | Enumressources_frequenceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_frequence[] | null
    notIn?: $Enums.ressources_frequence[] | null
    not?: NestedEnumressources_frequenceNullableFilter<$PrismaModel> | $Enums.ressources_frequence | null
  }

  export type NestedEnumressources_type_ressourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_type_ressource | Enumressources_type_ressourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_type_ressource[] | null
    notIn?: $Enums.ressources_type_ressource[] | null
    not?: NestedEnumressources_type_ressourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.ressources_type_ressource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumressources_type_ressourceNullableFilter<$PrismaModel>
    _max?: NestedEnumressources_type_ressourceNullableFilter<$PrismaModel>
  }

  export type NestedEnumressources_frequenceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ressources_frequence | Enumressources_frequenceFieldRefInput<$PrismaModel> | null
    in?: $Enums.ressources_frequence[] | null
    notIn?: $Enums.ressources_frequence[] | null
    not?: NestedEnumressources_frequenceNullableWithAggregatesFilter<$PrismaModel> | $Enums.ressources_frequence | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumressources_frequenceNullableFilter<$PrismaModel>
    _max?: NestedEnumressources_frequenceNullableFilter<$PrismaModel>
  }

  export type NestedEnumutilisateurs_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.utilisateurs_role | Enumutilisateurs_roleFieldRefInput<$PrismaModel>
    in?: $Enums.utilisateurs_role[]
    notIn?: $Enums.utilisateurs_role[]
    not?: NestedEnumutilisateurs_roleFilter<$PrismaModel> | $Enums.utilisateurs_role
  }

  export type NestedEnumutilisateurs_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.utilisateurs_role | Enumutilisateurs_roleFieldRefInput<$PrismaModel>
    in?: $Enums.utilisateurs_role[]
    notIn?: $Enums.utilisateurs_role[]
    not?: NestedEnumutilisateurs_roleWithAggregatesFilter<$PrismaModel> | $Enums.utilisateurs_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumutilisateurs_roleFilter<$PrismaModel>
    _max?: NestedEnumutilisateurs_roleFilter<$PrismaModel>
  }



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