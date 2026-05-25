import { useState, useEffect } from 'react';
import { BookOpen, Plus, Search } from 'lucide-react';
import { supabase } from './lib/supabase';
import { PaperCard } from './components/PaperCard';
import { AddPaperForm } from './components/AddPaperForm';
import type { ResearchPaper, PaperInsert } from './types/database';

function App() {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('research_papers')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setPapers(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch papers');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPaper = async (paper: PaperInsert) => {
    const { error: insertError } = await supabase
      .from('research_papers')
      .insert([paper]);

    if (insertError) throw insertError;
    await fetchPapers();
  };

  const filteredPapers = papers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Research Papers
                </h1>
                <p className="text-sm text-gray-500">
                  {papers.length} paper{papers.length !== 1 ? 's' : ''} in
                  collection
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all shadow-sm"
            >
              <Plus className="w-5 h-5" />
              Add Paper
            </button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search papers by title, author, abstract, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-700">{error}</p>
            <button
              onClick={fetchPapers}
              className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredPapers.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchQuery ? 'No papers found' : 'No papers yet'}
            </h3>
            <p className="text-gray-500 mb-6">
              {searchQuery
                ? 'Try adjusting your search query'
                : 'Start by adding your first research paper'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Your First Paper
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        )}
      </main>

      {/* Add Paper Modal */}
      {showForm && (
        <AddPaperForm
          onSubmit={handleAddPaper}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;
