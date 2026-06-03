import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dna, ArrowRight, HelpCircle } from 'lucide-react';
import { BRANCH_INFO } from '../const';

interface LineageMapProps {
  onSelectBranch: (branch: string) => void;
  activeBranch: string;
}

export default function LineageMap({ onSelectBranch, activeBranch }: LineageMapProps) {
  // Define the node structure for the SVG
  const nodes = [
    { id: 'L238', label: 'L238', x: 400, y: 40, age: '2593 BCE', desc: 'Root of the Paternal Haplogroup', branch: 'Main' },
    
    // First L238 Branch
    { id: 'FT393255', label: 'FT393255', x: 150, y: 120, age: '2050 BCE', desc: 'Early Split / French & American lines', branch: 'First L238' },
    { id: 'FTB73368', label: 'FTB73368', x: 150, y: 200, age: '1250 BCE', desc: 'Sirois & Tozier Lineages', branch: 'First L238' },
    
    // Continental
    { id: 'CTS11638', label: 'CTS11638', x: 400, y: 120, age: '2106 BCE', desc: 'Continental Europe (Czech, Italy, Ukraine)', branch: 'Continental' },
    
    // Scandinavian Founder
    { id: 'Y10827', label: 'Y10827', x: 650, y: 120, age: '100 AD', desc: 'The Scandinavian Founder Event', branch: 'Norwegian' },
    
    // Swedish / Scandinavian Branch
    { id: 'BY4675', label: 'BY4675', x: 550, y: 220, age: '500 CE', desc: 'Massive Swedish, Norwegian & Finnish cluster', branch: 'Swedish / Scandinavian' },
    { id: 'BY137601', label: 'BY137601', x: 450, y: 300, age: '570 CE', desc: 'Third Scandinavian Branch (American South)', branch: 'Swedish / Scandinavian' },
    { id: 'FTD61300', label: 'FTD61300', x: 550, y: 300, age: '550 CE', desc: 'Viking lines in Scotland & Ireland', branch: 'Swedish / Scandinavian' },
    
    // Swedish Branch Y11662
    { id: 'Y11662', label: 'Y11662', x: 680, y: 220, age: '450 CE', desc: 'Västra Götaland & Halland Swedish branch', branch: 'Swedish / Scandinavian' },
    { id: 'FT126250', label: 'FT126250', x: 680, y: 300, age: '750 CE', desc: 'West-Norwegian Sogn og Fjordane subclade', branch: 'Swedish / Scandinavian' },
    
    // Norwegian Branch FT49026
    { id: 'FT49026', label: 'FT49026', x: 800, y: 220, age: '310 AD', desc: 'Coastal Norwegian lines (Rogaland, Agder)', branch: 'Norwegian' },
    { id: 'BY4661', label: 'BY4661', x: 800, y: 300, age: '1400 CE', desc: 'Finnish expansion (Berner, Saloheimo)', branch: 'Norwegian' },
    
    // Norwegian-British Branch
    { id: 'BY4663', label: 'BY4663', x: 280, y: 220, age: '266 AD', desc: 'Hordaland to Lincolnshire (Viking Danelaw)', branch: 'British / Norwegian-British' },
    { id: 'BY18415', label: 'BY18415', x: 280, y: 300, age: '1250 CE', desc: 'Mincey & Minchew American Colonial lines', branch: 'British / Norwegian-British' }
  ];

  // Define connection lines between nodes
  const connections = [
    { from: 'L238', to: 'FT393255' },
    { from: 'L238', to: 'CTS11638' },
    { from: 'L238', to: 'Y10827' },
    
    { from: 'FT393255', to: 'FTB73368' },
    
    { from: 'Y10827', to: 'BY4663' },
    { from: 'Y10827', to: 'BY4675' },
    { from: 'Y10827', to: 'Y11662' },
    { from: 'Y10827', to: 'FT49026' },
    
    { from: 'BY4675', to: 'BY137601' },
    { from: 'BY4675', to: 'FTD61300' },
    
    { from: 'Y11662', to: 'FT126250' },
    
    { from: 'FT49026', to: 'BY4661' },
    
    { from: 'BY4663', to: 'BY18415' }
  ];

  const getBranchColor = (branchName: string, isBorder = false) => {
    switch (branchName) {
      case 'Main':
        return isBorder ? 'stroke-amber-500 fill-amber-50' : 'bg-amber-500 text-amber-950';
      case 'First L238':
        return isBorder ? 'stroke-blue-500 fill-blue-5' : 'bg-blue-500 text-blue-950';
      case 'Continental':
        return isBorder ? 'stroke-teal-500 fill-teal-5' : 'bg-teal-500 text-teal-950';
      case 'Norwegian':
        return isBorder ? 'stroke-emerald-500 fill-emerald-5' : 'bg-emerald-500 text-emerald-950';
      case 'Swedish / Scandinavian':
        return isBorder ? 'stroke-indigo-500 fill-indigo-5' : 'bg-indigo-500 text-indigo-950';
      case 'British / Norwegian-British':
        return isBorder ? 'stroke-rose-500 fill-rose-5' : 'bg-rose-500 text-rose-950';
      default:
        return isBorder ? 'stroke-slate-400 fill-slate-50' : 'bg-slate-500 text-white';
    }
  };

  return (
    <Card className="border-slate-200/80 shadow-sm bg-white rounded-xl overflow-hidden">
      <CardHeader className="p-6 border-b border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-600 font-mono text-xs uppercase tracking-wider mb-1">
              <Dna className="h-3.5 w-3.5" />
              <span>Step 1: Interactive Phylogeny Map</span>
            </div>
            <CardTitle className="text-xl font-serif font-bold text-slate-900">
              R1b-L238 Backbone Lineage Tree
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 mt-0.5">
              Click any node in this interactive genetic map to jump directly to that branch's SNP trees.
            </CardDescription>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100 text-xs">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Click any bubble to filter below</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 bg-slate-950 relative">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        <div className="w-full overflow-x-auto py-6">
          <div className="min-w-[950px] mx-auto relative px-4">
            <svg viewBox="0 0 950 380" className="w-full h-auto select-none">
              {/* Draw Connection Lines */}
              {connections.map((conn, idx) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const isPathActive = 
                  activeBranch === 'all' || 
                  fromNode.branch === activeBranch || 
                  toNode.branch === activeBranch;

                return (
                  <g key={idx}>
                    {/* Background Glow Line */}
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      className={`transition-all duration-300 ${
                        isPathActive ? 'stroke-blue-500/20 stroke-[4px]' : 'stroke-transparent'
                      }`}
                    />
                    {/* Primary Line */}
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      className={`transition-all duration-300 ${
                        isPathActive 
                          ? 'stroke-slate-300 stroke-[2px]' 
                          : 'stroke-slate-700/50 stroke-[1.5px]'
                      }`}
                      strokeDasharray={toNode.branch === 'Continental' ? '4 4' : 'none'}
                    />
                  </g>
                );
              })}

              {/* Draw Nodes */}
              {nodes.map((node) => {
                const isSelected = activeBranch === node.branch;
                const isAnySelected = activeBranch !== 'all';
                const isDimmed = isAnySelected && !isSelected;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer group"
                    onClick={() => onSelectBranch(isSelected ? 'all' : node.branch)}
                  >
                    {/* Outer Glow Ring for Selected or Hovered */}
                    <circle
                      r="28"
                      className={`fill-none stroke-2 transition-all duration-300 ${
                        isSelected 
                          ? 'stroke-blue-400 opacity-100 scale-110' 
                          : 'stroke-blue-500/0 group-hover:stroke-slate-400/40 group-hover:scale-105'
                      }`}
                    />

                    {/* Node Core Bubble */}
                    <circle
                      r="20"
                      className={`stroke-2 transition-all duration-300 ${getBranchColor(node.branch, true)} ${
                        isDimmed ? 'opacity-40' : 'opacity-100'
                      }`}
                    />

                    {/* Node Label (SNP Name) */}
                    <text
                      textAnchor="middle"
                      y="4"
                      className={`font-mono text-[10px] font-bold tracking-tight transition-all duration-300 ${
                        isDimmed ? 'fill-slate-500' : 'fill-slate-200'
                      } group-hover:fill-white`}
                    >
                      {node.label}
                    </text>

                    {/* Timeline Date Tag above/below node */}
                    <text
                      textAnchor="middle"
                      y={node.y < 150 ? '-26' : '32'}
                      className={`font-mono text-[9px] transition-all duration-300 ${
                        isSelected ? 'fill-blue-400 font-bold' : 'fill-slate-500'
                      } ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
                    >
                      {node.age}
                    </text>

                    {/* Tooltip Overlay / Subtext */}
                    <text
                      textAnchor="middle"
                      y={node.y < 150 ? '-38' : '44'}
                      className="font-sans text-[8px] fill-slate-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                    >
                      {node.desc}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Legend Panel */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">Branches:</span>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant="outline" 
                className={`cursor-pointer border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 ${
                  activeBranch === 'all' ? 'ring-1 ring-blue-500 border-blue-500' : ''
                }`}
                onClick={() => onSelectBranch('all')}
              >
                All Branches
              </Badge>
              {Object.keys(BRANCH_INFO).map((b) => (
                <Badge
                  key={b}
                  variant="outline"
                  className={`cursor-pointer border-slate-700 text-slate-300 hover:bg-slate-700 transition-all ${
                    getBranchColor(b, true).split(' ')[0]
                  } ${activeBranch === b ? 'ring-1 ring-blue-500 border-blue-500 scale-105' : ''}`}
                  onClick={() => onSelectBranch(activeBranch === b ? 'all' : b)}
                >
                  {BRANCH_INFO[b as keyof typeof BRANCH_INFO]?.title || b}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-slate-500 font-mono text-[10px] italic">
            Dotted lines indicate Continental branches
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
