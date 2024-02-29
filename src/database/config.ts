import { createClient } from '@supabase/supabase-js';

export class ConfigDatabase {
  connectDatabaseUsingAnonKey() {
    return createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY,
    );
  }

  connectDatabaseUsingServiceKey() {
    return createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY,
    );
  }
}
