import { FileText, ExternalLink, Calendar, Users, Tag } from 'lucide-react';
import type { ResearchPaper } from '../types/database';

interface PaperCardProps {
  paper: ResearchPaper;
}

export function PaperCard({ paper }: PaperCardProps) {
  const formattedDate = paper.publication_date
    ? new Date(paper.publication_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {paper.title}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span className="line-clamp-1">{paper.authors}</span>
            </div>

            {formattedDate && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>{formattedDate}</span>
              </div>
            )}

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {paper.abstract}
            </p>

            {paper.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {paper.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 group"
            >
              View Paper
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
