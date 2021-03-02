cube(`PgStatDatabaseConflicts`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_database_conflicts`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, datid]
    }
  },
  
  dimensions: {
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    datid: {
      sql: `datid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
