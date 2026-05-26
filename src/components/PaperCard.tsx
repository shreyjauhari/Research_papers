// // import { FileText, ExternalLink, Calendar, Users, Tag } from 'lucide-react';
// // import type { ResearchPaper } from '../types/database';

// // interface PaperCardProps {
// //   paper: ResearchPaper;
// // }

// // export function PaperCard({ paper }: PaperCardProps) {
// //   const formattedDate = paper.publication_date
// //     ? new Date(paper.publication_date).toLocaleDateString('en-US', {
// //         year: 'numeric',
// //         month: 'long',
// //         day: 'numeric',
// //       })
// //     : null;

// //   return (
// //     <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
// //       <div className="p-6">
// //         <div className="flex items-start gap-4">
// //           <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
// //             <FileText className="w-6 h-6 text-white" />
// //           </div>

// //           <div className="flex-1 min-w-0">
// //             <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
// //               {paper.title}
// //             </h3>

// //             <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
// //               <Users className="w-4 h-4 flex-shrink-0" />
// //               <span className="line-clamp-1">{paper.authors}</span>
// //             </div>

// //             {formattedDate && (
// //               <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
// //                 <Calendar className="w-4 h-4 flex-shrink-0" />
// //                 <span>{formattedDate}</span>
// //               </div>
// //             )}

// //             <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
// //               {paper.abstract}
// //             </p>

// //             {paper.tags.length > 0 && (
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {paper.tags.map((tag, index) => (
// //                   <span
// //                     key={index}
// //                     className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full"
// //                   >
// //                     <Tag className="w-3 h-3" />
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             )}

// //             <a
// //               href={paper.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 group"
// //             >
// //               View Paper
// //               <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // }
// import { FileText, ExternalLink, Calendar, Users, Tag } from 'lucide-react';
// import type { ResearchPaper } from '../types/database';

// interface PaperCardProps {
//   paper: ResearchPaper;
// }

// export function PaperCard({ paper }: PaperCardProps) {
//   const formattedDate = paper.publication_date
//     ? new Date(paper.publication_date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//       })
//     : null;

//   return (
//     <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
//       <div className="p-6">
//         <div className="flex items-start gap-4">
//           <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
//             <FileText className="w-6 h-6 text-white" />
//           </div>

//           <div className="flex-1 min-w-0">
//             <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
//               {paper.title}
//             </h3>

//             <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
//               <Users className="w-4 h-4 flex-shrink-0" />
//               <span className="line-clamp-1">{paper.authors}</span>
//             </div>

//             {formattedDate && (
//               <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 flex-shrink-0" />
//                 <span>{formattedDate}</span>
//               </div>
//             )}

//             <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
//               {paper.abstract}
//             </p>

//             {paper.tags.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {paper.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full"
//                   >
//                     <Tag className="w-3 h-3" />
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             <a
//               href={paper.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 group"
//             >
//               View Paper
//               <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }
import { useState } from "react";
import { FileText, ExternalLink, Calendar, Users, Tag, Pencil, X, Check, Plus, Trash2 } from "lucide-react";

const defaultPaper = {
  title: "Attention Is All You Need",
  authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit",
  publication_date: "2017-06-12",
  abstract:
    "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
  tags: ["Transformers", "NLP", "Attention Mechanism", "Deep Learning"],
  link: "https://arxiv.org/abs/1706.03762",
};

function EditField({ label, value, onChange, multiline = false }) {
  return (
    <div className="edit-field">
      <label className="edit-label">{label}</label>
      {multiline ? (
        <textarea
          className="edit-input edit-textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
        />
      ) : (
        <input
          className="edit-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

export function PaperCard({ paper: initialPaper = defaultPaper }) {
  const [paper, setPaper] = useState(initialPaper);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(paper);
  const [newTag, setNewTag] = useState("");

  const formattedDate = paper.publication_date
    ? new Date(paper.publication_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const handleEdit = () => {
    setDraft({ ...paper });
    setEditing(true);
  };

  const handleSave = () => {
    setPaper({ ...draft });
    setEditing(false);
    setNewTag("");
  };

  const handleCancel = () => {
    setDraft({ ...paper });
    setEditing(false);
    setNewTag("");
  };

  const addTag = () => {
    const tag = newTag.trim();
    if (tag && !draft.tags.includes(tag)) {
      setDraft((d) => ({ ...d, tags: [...d.tags, tag] }));
    }
    setNewTag("");
  };

  const removeTag = (index) => {
    setDraft((d) => ({ ...d, tags: d.tags.filter((_, i) => i !== index) }));
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e8ecf0;
          overflow: hidden;
          transition: box-shadow 0.2s ease;
          font-family: 'Georgia', serif;
          max-width: 680px;
          margin: 24px auto;
          position: relative;
        }
        .card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .card.is-editing { border-color: #3b7dd8; box-shadow: 0 0 0 3px rgba(59,125,216,0.12); }

        .card-body { padding: 28px 28px 24px; }

        .card-top { display: flex; gap: 18px; align-items: flex-start; }

        .icon-box {
          flex-shrink: 0;
          width: 48px; height: 48px;
          background: linear-gradient(135deg, #3b7dd8, #29b6a8);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .icon-box svg { color: #fff; }

        .card-content { flex: 1; min-width: 0; }

        .card-title {
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .meta-row {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: #6b7280;
          margin-bottom: 8px;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .meta-row svg { flex-shrink: 0; color: #9ca3af; }
        .meta-row span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .abstract {
          font-size: 13.5px;
          color: #4b5563;
          line-height: 1.65;
          margin: 12px 0 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: 'Helvetica Neue', sans-serif;
        }

        .tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 18px; }
        .tag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 11px;
          background: #f0f4ff;
          color: #3b5fc0;
          font-size: 11.5px;
          font-weight: 600;
          border-radius: 999px;
          font-family: 'Helvetica Neue', sans-serif;
          letter-spacing: 0.02em;
        }
        .tag svg { color: #7a94d4; }

        .card-actions { display: flex; align-items: center; gap: 10px; }

        .btn-view {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 18px;
          background: linear-gradient(135deg, #3b7dd8, #29b6a8);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          border-radius: 9px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .btn-view:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-view svg { transition: transform 0.15s; }
        .btn-view:hover svg { transform: translateX(2px); }

        .btn-edit {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px;
          background: #f3f4f6;
          color: #374151;
          font-size: 13px;
          font-weight: 600;
          border-radius: 9px;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .btn-edit:hover { background: #e9ebee; border-color: #d1d5db; }

        /* ── Edit panel ── */
        .edit-panel {
          border-top: 1px solid #e8ecf0;
          padding: 22px 28px 24px;
          background: #fafbfc;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .edit-panel-title {
          font-size: 13px;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-family: 'Helvetica Neue', sans-serif;
          margin-bottom: 4px;
        }

        .edit-field { display: flex; flex-direction: column; gap: 5px; }
        .edit-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .edit-input {
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 13.5px;
          color: #111827;
          background: #fff;
          font-family: 'Georgia', serif;
          transition: border-color 0.15s, box-shadow 0.15s;
          resize: vertical;
          outline: none;
        }
        .edit-input:focus {
          border-color: #3b7dd8;
          box-shadow: 0 0 0 3px rgba(59,125,216,0.12);
        }
        .edit-textarea { min-height: 80px; }

        .tag-editor { display: flex; flex-wrap: wrap; gap: 7px; align-items: center; }
        .tag-removable {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px 4px 11px;
          background: #f0f4ff; color: #3b5fc0;
          font-size: 11.5px; font-weight: 600;
          border-radius: 999px;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .tag-remove {
          display: flex; align-items: center; justify-content: center;
          width: 14px; height: 14px;
          background: #c7d4f5;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.15s;
        }
        .tag-remove:hover { background: #f87171; color: #fff; }
        .tag-remove svg { width: 9px; height: 9px; color: inherit; }

        .tag-add-row { display: flex; gap: 6px; margin-top: 4px; }
        .tag-add-input {
          flex: 1;
          padding: 6px 10px;
          border: 1px dashed #c0c8d8;
          border-radius: 7px;
          font-size: 12.5px;
          color: #374151;
          background: #fff;
          font-family: 'Helvetica Neue', sans-serif;
          outline: none;
        }
        .tag-add-input:focus { border-color: #3b7dd8; border-style: solid; }
        .btn-add-tag {
          display: flex; align-items: center; gap: 4px;
          padding: 6px 12px;
          background: #e9f0fb;
          color: #3b5fc0;
          font-size: 12px;
          font-weight: 600;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          font-family: 'Helvetica Neue', sans-serif;
          transition: background 0.15s;
        }
        .btn-add-tag:hover { background: #d6e4f8; }

        .edit-footer { display: flex; gap: 10px; justify-content: flex-end; margin-top: 6px; }

        .btn-save {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px;
          background: linear-gradient(135deg, #3b7dd8, #29b6a8);
          color: #fff;
          font-size: 13px; font-weight: 700;
          border-radius: 9px; border: none; cursor: pointer;
          font-family: 'Helvetica Neue', sans-serif;
          transition: opacity 0.15s;
        }
        .btn-save:hover { opacity: 0.88; }

        .btn-cancel {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 18px;
          background: #fff;
          color: #374151;
          font-size: 13px; font-weight: 600;
          border-radius: 9px;
          border: 1px solid #d1d5db;
          cursor: pointer;
          font-family: 'Helvetica Neue', sans-serif;
          transition: background 0.15s;
        }
        .btn-cancel:hover { background: #f3f4f6; }
      `}</style>

      <article className={`card${editing ? " is-editing" : ""}`}>
        <div className="card-body">
          <div className="card-top">
            <div className="icon-box">
              <FileText size={22} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{paper.title}</h3>

              <div className="meta-row">
                <Users size={14} />
                <span>{paper.authors}</span>
              </div>

              {formattedDate && (
                <div className="meta-row">
                  <Calendar size={14} />
                  <span>{formattedDate}</span>
                </div>
              )}

              <p className="abstract">{paper.abstract}</p>

              {paper.tags.length > 0 && (
                <div className="tags">
                  {paper.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="card-actions">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-view"
                >
                  View Paper
                  <ExternalLink size={14} />
                </a>

                {!editing && (
                  <button className="btn-edit" onClick={handleEdit}>
                    <Pencil size={14} />
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {editing && (
          <div className="edit-panel">
            <div className="edit-panel-title">✏ Editing Paper</div>

            <EditField
              label="Title"
              value={draft.title}
              onChange={(v) => setDraft((d) => ({ ...d, title: v }))}
            />
            <EditField
              label="Authors"
              value={draft.authors}
              onChange={(v) => setDraft((d) => ({ ...d, authors: v }))}
            />
            <EditField
              label="Publication Date"
              value={draft.publication_date}
              onChange={(v) => setDraft((d) => ({ ...d, publication_date: v }))}
            />
            <EditField
              label="Abstract"
              value={draft.abstract}
              onChange={(v) => setDraft((d) => ({ ...d, abstract: v }))}
              multiline
            />
            <EditField
              label="Link"
              value={draft.link}
              onChange={(v) => setDraft((d) => ({ ...d, link: v }))}
            />

            <div className="edit-field">
              <span className="edit-label">Tags</span>
              <div className="tag-editor">
                {draft.tags.map((tag, i) => (
                  <span key={i} className="tag-removable">
                    {tag}
                    <button className="tag-remove" onClick={() => removeTag(i)}>
                      <X />
                    </button>
                  </span>
                ))}
              </div>
              <div className="tag-add-row">
                <input
                  className="tag-add-input"
                  placeholder="Add a tag…"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTag()}
                />
                <button className="btn-add-tag" onClick={addTag}>
                  <Plus size={13} /> Add
                </button>
              </div>
            </div>

            <div className="edit-footer">
              <button className="btn-cancel" onClick={handleCancel}>
                <X size={14} /> Cancel
              </button>
              <button className="btn-save" onClick={handleSave}>
                <Check size={14} /> Save Changes
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

export default PaperCard;

