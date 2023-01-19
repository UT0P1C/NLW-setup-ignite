
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\prisma\\client",
    "prisma\\client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DayHabitsScalarFieldEnum = makeEnum({
  id: 'id',
  day_id: 'day_id',
  habit_id: 'habit_id'
});

exports.Prisma.DayScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date'
});

exports.Prisma.HabitScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  created_at: 'created_at'
});

exports.Prisma.HabitWeekDaysScalarFieldEnum = makeEnum({
  id: 'id',
  habit_id: 'habit_id',
  week_day: 'week_day'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Habit: 'Habit',
  HabitWeekDays: 'HabitWeekDays',
  Day: 'Day',
  DayHabits: 'DayHabits'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Habit\",\"dbName\":\"habits\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HabitWeekDays\",\"dbName\":\"habit_week_days\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"week_day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"habit_id\",\"week_day\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"habit_id\",\"week_day\"]}],\"isGenerated\":false},{\"name\":\"Day\",\"dbName\":\"days\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"date\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"date\"]}],\"isGenerated\":false},{\"name\":\"DayHabits\",\"dbName\":\"day_habits\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"day_id\",\"habit_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"day_id\",\"habit_id\"]}],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Habit\",\"plural\":\"habits\",\"findUnique\":\"findUniqueHabit\",\"findUniqueOrThrow\":\"findUniqueHabitOrThrow\",\"findFirst\":\"findFirstHabit\",\"findFirstOrThrow\":\"findFirstHabitOrThrow\",\"findMany\":\"findManyHabit\",\"create\":\"createOneHabit\",\"delete\":\"deleteOneHabit\",\"update\":\"updateOneHabit\",\"deleteMany\":\"deleteManyHabit\",\"updateMany\":\"updateManyHabit\",\"upsert\":\"upsertOneHabit\",\"aggregate\":\"aggregateHabit\",\"groupBy\":\"groupByHabit\"},{\"model\":\"HabitWeekDays\",\"plural\":\"habitWeekDays\",\"findUnique\":\"findUniqueHabitWeekDays\",\"findUniqueOrThrow\":\"findUniqueHabitWeekDaysOrThrow\",\"findFirst\":\"findFirstHabitWeekDays\",\"findFirstOrThrow\":\"findFirstHabitWeekDaysOrThrow\",\"findMany\":\"findManyHabitWeekDays\",\"create\":\"createOneHabitWeekDays\",\"delete\":\"deleteOneHabitWeekDays\",\"update\":\"updateOneHabitWeekDays\",\"deleteMany\":\"deleteManyHabitWeekDays\",\"updateMany\":\"updateManyHabitWeekDays\",\"upsert\":\"upsertOneHabitWeekDays\",\"aggregate\":\"aggregateHabitWeekDays\",\"groupBy\":\"groupByHabitWeekDays\"},{\"model\":\"Day\",\"plural\":\"days\",\"findUnique\":\"findUniqueDay\",\"findUniqueOrThrow\":\"findUniqueDayOrThrow\",\"findFirst\":\"findFirstDay\",\"findFirstOrThrow\":\"findFirstDayOrThrow\",\"findMany\":\"findManyDay\",\"create\":\"createOneDay\",\"delete\":\"deleteOneDay\",\"update\":\"updateOneDay\",\"deleteMany\":\"deleteManyDay\",\"updateMany\":\"updateManyDay\",\"upsert\":\"upsertOneDay\",\"aggregate\":\"aggregateDay\",\"groupBy\":\"groupByDay\"},{\"model\":\"DayHabits\",\"plural\":\"dayHabits\",\"findUnique\":\"findUniqueDayHabits\",\"findUniqueOrThrow\":\"findUniqueDayHabitsOrThrow\",\"findFirst\":\"findFirstDayHabits\",\"findFirstOrThrow\":\"findFirstDayHabitsOrThrow\",\"findMany\":\"findManyDayHabits\",\"create\":\"createOneDayHabits\",\"delete\":\"deleteOneDayHabits\",\"update\":\"updateOneDayHabits\",\"deleteMany\":\"deleteManyDayHabits\",\"updateMany\":\"updateManyDayHabits\",\"upsert\":\"upsertOneDayHabits\",\"aggregate\":\"aggregateDayHabits\",\"groupBy\":\"groupByDayHabits\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\esqzb\\Desktop\\code\\NLW-setup-ignite\\server\\prisma\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\prisma\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\prisma\\client\\schema.prisma")
