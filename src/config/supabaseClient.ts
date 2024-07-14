import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yfshjkhlwimrgjlarsar.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmc2hqa2hsd2ltcmdqbGFyc2FyI' +
    'iwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NTY0MjYsImV4cCI6MjAzMzEzMjQyNn0.' +
    'LuxyWtKHtKqAhHgOEDAYoZsCKbzZARbxUCBHWqwzw0M';

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
