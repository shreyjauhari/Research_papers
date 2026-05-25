 

CREATE TABLE IF NOT EXISTS research_papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  authors text NOT NULL,
  abstract text NOT NULL,
  publication_date date,
  link text NOT NULL,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_research_papers_created_at ON research_papers(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_research_papers_publication_date ON research_papers(publication_date DESC);

-- Enable Row Level Security
ALTER TABLE research_papers ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read research papers (public access)
CREATE POLICY "Public can view research papers"
  ON research_papers FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Authenticated users can insert papers
CREATE POLICY "Authenticated users can add papers"
  ON research_papers FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update papers
CREATE POLICY "Authenticated users can update papers"
  ON research_papers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete papers
CREATE POLICY "Authenticated users can delete papers"
  ON research_papers FOR DELETE
  TO authenticated
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before each update
DROP TRIGGER IF EXISTS update_research_papers_updated_at ON research_papers;
CREATE TRIGGER update_research_papers_updated_at
  BEFORE UPDATE ON research_papers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();