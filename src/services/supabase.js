import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yzgzcysuthgozayfnfiy.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6Z3pjeXN1dGhnb3pheWZuZml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MTc0MTcsImV4cCI6MjAwNjE5MzQxN30.M1VdTjr0GiVGDIKr-A0WwHRMrkztxOC5dT__tZWON34";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
