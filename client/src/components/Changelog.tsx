import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, Calendar, User, CheckCircle2, Award, Database, Info } from 'lucide-react';
import { CHANGELOG_ENTRIES, ChangelogEntry } from '../const';

export default function Changelog() {
  const getTypeBadge = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'major':
        return <Badge className="bg-blue-600 text-white font-mono text-[10px] font-semibold tracking-wider rounded-md uppercase">Major Release</Badge>;
      case 'minor':
        return <Badge className="bg-emerald-600 text-white font-mono text-[10px] font-semibold tracking-wider rounded-md uppercase">Tree Update</Badge>;
      case 'data':
        return <Badge className="bg-indigo-600 text-white font-mono text-[10px] font-semibold tracking-wider rounded-md uppercase">Database Import</Badge>;
      default:
        return <Badge variant="secondary" className="font-mono text-[10px] font-semibold tracking-wider rounded-md uppercase">Update</Badge>;
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-blue-600 font-mono text-xs uppercase tracking-wider mb-2">
          <GitBranch className="h-3.5 w-3.5" />
          <span>Genealogy Revision History</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">
          R1b-L238 Project Changelog
        </h2>
        <p className="text-slate-500 text-sm font-light">
          Track research updates, newly discovered genetic sub-branches, and member integrations added to our physical and digital catalog over time.
        </p>
      </div>

      <div className="relative border-l border-slate-200 pl-6 ml-4 md:ml-32 space-y-12">
        {CHANGELOG_ENTRIES.map((entry, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1.5 bg-blue-600 text-white rounded-full h-4 w-4 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
            
            {/* Left-aligned date & version for larger screens */}
            <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono">
              <div className="font-bold text-sm text-blue-600">{entry.version}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{entry.date}</div>
            </div>

            <Card className="border-slate-200/80 shadow-sm bg-white overflow-hidden rounded-xl hover:shadow-md transition-all">
              <CardHeader className="p-5 border-b border-slate-100 bg-slate-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    {/* Mobile version and date */}
                    <div className="md:hidden flex items-center gap-2 mb-1.5">
                      <span className="font-mono font-bold text-xs text-blue-600">{entry.version}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500 font-mono">{entry.date}</span>
                    </div>
                    
                    <CardTitle className="text-lg font-serif font-semibold text-slate-900">
                      {entry.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-mono">
                        <User className="h-3 w-3 text-slate-400" />
                        Researcher: <strong>{entry.author}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-start sm:self-center">
                    {getTypeBadge(entry.type)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-3">
                  {entry.changes.map((change, cIdx) => (
                    <li key={cIdx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2.5 font-light">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
