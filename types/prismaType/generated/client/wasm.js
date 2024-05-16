
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Category_collectionScalarFieldEnum = {
  id: 'id',
  category_id: 'category_id',
  name: 'name',
  link: 'link'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link'
};

exports.Prisma.ProvinceScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  province_id: 'province_id',
  name: 'name'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  created_at: 'created_at',
  company_id: 'company_id'
};

exports.Prisma.FollowersScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  company_id: 'company_id'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  city_id: 'city_id',
  address: 'address'
};

exports.Prisma.CompanyScalarFieldEnum = {
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

exports.Prisma.UserCompanyFollowScalarFieldEnum = {
  user_id: 'user_id',
  company_id: 'company_id',
  followersId: 'followersId'
};

exports.Prisma.AdvantageScalarFieldEnum = {
  id: 'id',
  type: 'type'
};

exports.Prisma.AdScalarFieldEnum = {
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

exports.Prisma.AdsCategory_collectionScalarFieldEnum = {
  ad_id: 'ad_id',
  category_collection_id: 'category_collection_id'
};

exports.Prisma.FacilitiesAdvantageScalarFieldEnum = {
  ad_id: 'ad_id',
  advantage_id: 'advantage_id'
};

exports.Prisma.CvScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ad_id: 'ad_id',
  company_id: 'company_id',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.CvAdScalarFieldEnum = {
  cv_id: 'cv_id',
  ad_id: 'ad_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.gender = exports.$Enums.gender = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  NOT_IMPORTANT: 'NOT_IMPORTANT'
};

exports.seniority_level = exports.$Enums.seniority_level = {
  WORKER: 'WORKER',
  EMPLOYEE: 'EMPLOYEE',
  EXPERT: 'EXPERT',
  MA: 'MA',
  ASSISTANCE: 'ASSISTANCE',
  CHIEF: 'CHIEF'
};

exports.cooperation_type = exports.$Enums.cooperation_type = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT'
};

exports.status = exports.$Enums.status = {
  accept: 'accept',
  reject: 'reject',
  waiting: 'waiting'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
