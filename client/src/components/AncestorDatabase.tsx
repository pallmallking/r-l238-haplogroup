import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar, Dna, ExternalLink, SlidersHorizontal, Users } from 'lucide-react';
import { SNP_IMAGES, COUNTRIES, BRANCH_INFO } from '../const';

interface AncestorRow {
  name: string;
  date?: string;
  place?: string;
  country?: string;
  associatedSNP: string;
  branch: string;
  treeTitle: string;
  treeId: string;
}

export default function AncestorDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  // Compile flat database of all ancestors listed in the SNP images
  const ancestors: AncestorRow[] = useMemo(() => {
    const list: AncestorRow[] = [];
    const seen = new Set<string>();

    SNP_IMAGES.forEach(img => {
      img.keyAncestors.forEach(anc => {
        // Create unique key to prevent exact duplicates (some ancestors appear in multiple versions of trees)
        const key = `${anc.name}-${anc.place || ''}-${anc.date || ''}-${img.branch}`;
        if (!seen.has(key)) {
          seen.add(key);
          list.push({
            name: anc.name,
            date: anc.date,
            place: anc.place,
            country: anc.country,
            associatedSNP: img.keySNPs[0] || 'L238', // Fallback
            branch: img.branch,
            treeTitle: img.title,
            treeId: img.id
          });
        }
      });
    });

    // Sort alphabetically by name
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Filtered ancestors list
  const filteredAncestors = useMemo(() => {
    return ancestors.filter(anc => {
      const matchesBranch = selectedBranch === 'all' || anc.branch === selectedBranch;
      const matchesCountry = selectedCountry === 'all' || anc.country === selectedCountry;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        anc.name.toLowerCase().includes(query) ||
        (anc.date && anc.date.toLowerCase().includes(query)) ||
        (anc.place && anc.place.toLowerCase().includes(query)) ||
        (anc.country && anc.country.toLowerCase().includes(query)) ||
        anc.associatedSNP.toLowerCase().includes(query);

      return matchesBranch && matchesCountry && matchesSearch;
    });
  }, [ancestors, searchQuery, selectedBranch, selectedCountry]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBranch('all');
    setSelectedCountry('all');
  };

  const getCountryFlag = (countryName?: string) => {
    if (!countryName) return '📍';
    const found = COUNTRIES.find(c => c.name === countryName);
    return found ? found.flag : '📍';
  };

  return (
    <Card className="border-slate-200/80 shadow-sm bg-white rounded-xl overflow-hidden">
      <CardHeader className="p-6 border-b border-slate-100 bg-slate-50/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-600 font-mono text-xs uppercase tracking-wider mb-1">
              <Users className="h-3.5 w-3.5" />
              <span>Step 2: Ancestral Records</span>
            </div>
            <CardTitle className="text-xl font-serif font-bold text-slate-900">
              R1b-L238 Ancestor Database
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 mt-0.5">
              A comprehensive directory of direct paternal lineages, historical founders, and colonial pioneers.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-mono text-xs px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100">
              Total Records: {ancestors.length}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by ancestor name, birth year, region, or terminal SNP..."
              className="pl-9 border-slate-200 rounded-lg focus-visible:ring-blue-500 h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Branch Select */}
          <div className="w-full lg:w-56">
            <select
              className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="all">All Branches</option>
              {Object.keys(BRANCH_INFO).map(b => (
                <option key={b} value={b}>
                  {BRANCH_INFO[b as keyof typeof BRANCH_INFO]?.title || b}
                </option>
              ))}
            </select>
          </div>

          {/* Country Select */}
          <div className="w-full lg:w-48">
            <select
              className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="all">All Countries</option>
              {COUNTRIES.map(c => (
                <option key={c.code} value={c.name}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Reset */}
          {(searchQuery || selectedBranch !== 'all' || selectedCountry !== 'all') && (
            <Button variant="outline" className="border-slate-200 h-10 rounded-lg" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-500 font-mono">
          Showing {filteredAncestors.length} of {ancestors.length} ancestral lineages
        </div>

        {/* Table Container */}
        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="border-b border-slate-200 hover:bg-slate-50/50">
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-slate-500 py-3.5 pl-6">Ancestor / Lineage</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-slate-500 py-3.5">Approx. Date</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-slate-500 py-3.5">Historical Location</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-slate-500 py-3.5">Haplogroup Node</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-slate-500 py-3.5">Paternal Branch</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-slate-500 py-3.5 text-right pr-6">Source Tree</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAncestors.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-slate-400 font-light text-sm">
                      No ancestral records match your current filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAncestors.map((row, idx) => (
                    <TableRow key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      {/* Name */}
                      <TableCell className="font-medium text-slate-900 py-4 pl-6">
                        <div className="flex items-center gap-2">
                          <span className="text-base leading-none" title={row.country}>
                            {getCountryFlag(row.country)}
                          </span>
                          <span className="font-serif text-sm">{row.name}</span>
                        </div>
                      </TableCell>

                      {/* Date */}
                      <TableCell className="text-xs text-slate-600 font-mono py-4">
                        {row.date ? (
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-slate-400" />
                            {row.date}
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">Undocumented</span>
                        )}
                      </TableCell>

                      {/* Place */}
                      <TableCell className="text-xs text-slate-600 py-4 max-w-xs truncate">
                        {row.place ? (
                          <span className="inline-flex items-center gap-1" title={row.place}>
                            <MapPin className="h-3 w-3 text-slate-400 flex-shrink-0" />
                            <span className="truncate">{row.place}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">Not Specified</span>
                        )}
                      </TableCell>

                      {/* Associated SNP */}
                      <TableCell className="py-4">
                        <Badge variant="secondary" className="font-mono text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100/30">
                          {row.associatedSNP}
                        </Badge>
                      </TableCell>

                      {/* Branch */}
                      <TableCell className="py-4">
                        <Badge className={`font-mono text-[9px] uppercase tracking-wider font-semibold rounded-md ${
                          BRANCH_INFO[row.branch as keyof typeof BRANCH_INFO]?.color || 'bg-slate-100 text-slate-700'
                        }`}>
                          {row.branch}
                        </Badge>
                      </TableCell>

                      {/* Source Tree Link */}
                      <TableCell className="py-4 text-right pr-6">
                        <span className="text-xs text-slate-500 font-serif inline-flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                          {row.treeTitle.replace('R1b-L238', '').replace('Branch', '').trim()}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
