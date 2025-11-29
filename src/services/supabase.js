import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uwqdoyciruwvjwfcqqrz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cWRveWNpcnV3dmp3ZmNxcXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTcyODQsImV4cCI6MjA2OTk3MzI4NH0.K6O1Sx00MFjUz8SUiu1llmfIwwCWiiAB-QIBq9CjtlE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
