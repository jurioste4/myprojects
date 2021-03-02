cube(`PgStatSysTables`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_sys_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, relname, relid]
    },
    
    autoanalyzeCount: {
      sql: `autoanalyze_count`,
      type: `sum`
    },
    
    vacuumCount: {
      sql: `vacuum_count`,
      type: `sum`
    },
    
    autovacuumCount: {
      sql: `autovacuum_count`,
      type: `sum`
    },
    
    analyzeCount: {
      sql: `analyze_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    lastAutovacuum: {
      sql: `last_autovacuum`,
      type: `time`
    },
    
    lastAutoanalyze: {
      sql: `last_autoanalyze`,
      type: `time`
    },
    
    lastVacuum: {
      sql: `last_vacuum`,
      type: `time`
    },
    
    lastAnalyze: {
      sql: `last_analyze`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
