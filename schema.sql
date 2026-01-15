CREATE TABLE martech_tools (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  category text,
  type text,
  short_pitch text,
  software_description text,
  features jsonb DEFAULT '[]'::jsonb,
  integrations jsonb DEFAULT '[]'::jsonb,
  pricing_model text,
  pricing_starting_at text,
  location text,
  logo_url text,
  cover_url text,
  website_url text,
  contact_email text,
  whatsapp_support text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Abilita l'accesso pubblico in lettura
ALTER TABLE martech_tools ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON martech_tools FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON martech_tools FOR INSERT WITH CHECK (true);
