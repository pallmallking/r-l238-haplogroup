import { useState, useMemo } from 'react';
import { 
  Search, 
  Dna, 
  MapPin, 
  Calendar, 
  Info, 
  Filter, 
  Grid, 
  List, 
  ArrowRight, 
  Clock, 
  Globe, 
  Users, 
  TrendingUp, 
  ChevronRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
// No tabs import needed since we use pure state-based buttons for conditional rendering
import { Separator } from '@/components/ui/separator';
import { SNP_IMAGES, BRANCH_INFO, COUNTRIES, TIMELINE_EVENTS, SNPImage } from '../const';
import ZoomableImage from '../components/ZoomableImage';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'trees' | 'timeline' | 'about'>('trees');

  // Handle branch filters
  const branches = useMemo(() => {
    return ['all', ...Object.keys(BRANCH_INFO)];
  }, []);

  // Filtered SNP Images
  const filteredImages = useMemo(() => {
    return SNP_IMAGES.filter(img => {
      const matchesBranch = selectedBranch === 'all' || img.branch === selectedBranch;
      
      const matchesCountry = selectedCountry === 'all' || img.countries.includes(selectedCountry);
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        img.title.toLowerCase().includes(query) ||
        img.description.toLowerCase().includes(query) ||
        img.keySNPs.some(snp => snp.toLowerCase().includes(query)) ||
        img.keyAncestors.some(anc => 
          anc.name.toLowerCase().includes(query) || 
          (anc.place && anc.place.toLowerCase().includes(query)) ||
          (anc.country && anc.country.toLowerCase().includes(query))
        );

      return matchesBranch && matchesCountry && matchesSearch;
    });
  }, [searchQuery, selectedBranch, selectedCountry]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBranch('all');
    setSelectedCountry('all');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Subtle top banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 text-center border-b border-slate-800 font-mono tracking-wide">
        GENETIC GENEALOGY ARCHIVE • R1B-L238 SNP TREE COLLECTION • MAY 2026 EDITION
      </div>

      {/* Hero Section */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24 border-b border-slate-800">
        {/* Abstract genomic network background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-black"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-blue-400 text-xs font-mono mb-4 animate-pulse">
                <Dna className="h-3.5 w-3.5" />
                <span>Haplogroup Subclade R1b-L238</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-4">
                The L238 Saga
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-light">
                Explore the complete genetic history and genealogical lineages of the 
                <strong className="font-semibold text-white"> R1b-L238</strong> haplogroup. Traced through 18 highly detailed, researcher-curated SNP trees from 2500 BCE to 2026 CE.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="default" 
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-5 py-2"
                  onClick={() => {
                    setActiveTab('trees');
                    document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore SNP Trees
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg"
                  onClick={() => {
                    setActiveTab('timeline');
                    document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Clock className="mr-1.5 h-4 w-4" />
                  View Timeline
                </Button>
              </div>
            </div>

            {/* Scientific Stat Box */}
            <div className="w-full md:w-auto bg-slate-900/80 border border-slate-800 rounded-xl p-6 backdrop-blur-sm md:min-w-[280px]">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Haplogroup Metadata
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500">Root Haplogroup</div>
                  <div className="text-sm font-mono font-medium text-slate-200">R1b-M269 &gt; L238</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Age Estimate</div>
                  <div className="text-sm font-mono font-medium text-slate-200">~4,600 Years (2593 BCE)</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Primary Geography</div>
                  <div className="text-sm font-mono font-medium text-slate-200">Scandinavia & British Isles</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Key Subclades Included</div>
                  <div className="text-sm font-mono font-medium text-slate-200">BY4675, Y11662, BY4663</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Section */}
      <main id="explore-section" className="flex-1 container max-w-6xl py-12">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-200/60 p-1 rounded-xl inline-flex gap-1 border border-slate-300/50">
            <Button
              variant={activeTab === 'trees' ? 'default' : 'ghost'}
              className={`rounded-lg px-6 ${activeTab === 'trees' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              onClick={() => setActiveTab('trees')}
            >
              <Dna className="mr-2 h-4 w-4" />
              SNP Tree Library ({SNP_IMAGES.length})
            </Button>
            <Button
              variant={activeTab === 'timeline' ? 'default' : 'ghost'}
              className={`rounded-lg px-6 ${activeTab === 'timeline' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              onClick={() => setActiveTab('timeline')}
            >
              <Clock className="mr-2 h-4 w-4" />
              Historical Timeline
            </Button>
            <Button
              variant={activeTab === 'about' ? 'default' : 'ghost'}
              className={`rounded-lg px-6 ${activeTab === 'about' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              onClick={() => setActiveTab('about')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              About R1b-L238
            </Button>
          </div>
        </div>

        {/* Tab Content: Trees */}
        {activeTab === 'trees' && (
          <div className="space-y-8">
            {/* Search and Filters Card */}
            <Card className="border-slate-200/80 shadow-sm bg-white rounded-xl">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search by SNP (e.g., BY4675, Y10827), ancestor name, country, or location..."
                      className="pl-10 h-12 border-slate-200 rounded-lg focus-visible:ring-blue-500 bg-slate-50/50"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Filters Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Branch Selector */}
                      <div className="flex items-center gap-1.5">
                        <Filter className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-xs font-medium text-slate-500 mr-1">Branch:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {branches.map((b) => (
                          <Button
                            key={b}
                            size="sm"
                            variant={selectedBranch === b ? 'default' : 'outline'}
                            className={`h-8 rounded-full text-xs px-3 ${
                              selectedBranch === b 
                                ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                            onClick={() => setSelectedBranch(b)}
                          >
                            {b === 'all' ? 'All Branches' : BRANCH_INFO[b as keyof typeof BRANCH_INFO]?.title || b}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
                      <Button
                        size="icon"
                        variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                        className="h-8 w-8 rounded-md"
                        onClick={() => setViewMode('grid')}
                        title="Grid View"
                      >
                        <Grid className="h-4 w-4 text-slate-600" />
                      </Button>
                      <Button
                        size="icon"
                        variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                        className="h-8 w-8 rounded-md"
                        onClick={() => setViewMode('list')}
                        title="List View"
                      >
                        <List className="h-4 w-4 text-slate-600" />
                      </Button>
                    </div>
                  </div>

                  {/* Country Quick Filters */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500 mr-2">Filter by Region:</span>
                    <Button
                      size="sm"
                      variant={selectedCountry === 'all' ? 'secondary' : 'outline'}
                      className="h-7 rounded-md text-xs px-2.5 border-slate-200"
                      onClick={() => setSelectedCountry('all')}
                    >
                      All Regions
                    </Button>
                    {COUNTRIES.map((c) => (
                      <Button
                        key={c.code}
                        size="sm"
                        variant={selectedCountry === c.name ? 'secondary' : 'outline'}
                        className={`h-7 rounded-md text-xs px-2.5 border-slate-200 ${
                          selectedCountry === c.name ? 'bg-blue-50 text-blue-700 border-blue-200' : ''
                        }`}
                        onClick={() => setSelectedCountry(c.name)}
                      >
                        <span className="mr-1">{c.flag}</span>
                        {c.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Branch Overview (if a single branch is filtered) */}
            {selectedBranch !== 'all' && BRANCH_INFO[selectedBranch as keyof typeof BRANCH_INFO] && (
              <div className={`p-6 rounded-xl border ${BRANCH_INFO[selectedBranch as keyof typeof BRANCH_INFO].color} transition-all`}>
                <h2 className="text-xl font-serif font-semibold mb-2">
                  {BRANCH_INFO[selectedBranch as keyof typeof BRANCH_INFO].title} Overview
                </h2>
                <p className="text-sm leading-relaxed font-light">
                  {BRANCH_INFO[selectedBranch as keyof typeof BRANCH_INFO].description}
                </p>
              </div>
            )}

            {/* Results Info */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
              <div>
                Showing {filteredImages.length} of {SNP_IMAGES.length} SNP Trees
              </div>
              {(searchQuery || selectedBranch !== 'all' || selectedCountry !== 'all') && (
                <Button 
                  variant="link" 
                  className="h-auto p-0 text-xs text-blue-600 font-mono"
                  onClick={handleResetFilters}
                >
                  Clear all filters
                </Button>
              )}
            </div>

            {/* No Results State */}
            {filteredImages.length === 0 && (
              <div className="text-center py-16 bg-white border border-slate-200 rounded-xl">
                <Info className="h-10 w-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-slate-700 mb-1">No matching SNP trees found</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Try adjusting your search keywords, clearing filters, or selecting a different branch.
                </p>
                <Button variant="outline" className="mt-4 border-slate-200" onClick={handleResetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && filteredImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredImages.map((img) => (
                  <Card key={img.id} className="border-slate-200/80 shadow-sm bg-white overflow-hidden rounded-xl flex flex-col group hover:shadow-md transition-all">
                    <CardHeader className="p-5 border-b border-slate-100">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge className={`mb-2 font-mono text-[10px] uppercase font-semibold tracking-wider rounded-md ${
                            BRANCH_INFO[img.branch as keyof typeof BRANCH_INFO]?.color || 'bg-slate-100 text-slate-700'
                          }`}>
                            {img.branch}
                          </Badge>
                          <CardTitle className="text-lg font-serif font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {img.title}
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-500 mt-1 font-mono flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            <span>Version: {img.version}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <div className="p-4 bg-slate-50 border-b border-slate-100">
                      <ZoomableImage src={img.path} alt={img.title} title={img.title} />
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col justify-between gap-4">
                      <div className="space-y-4">
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          {img.description}
                        </p>

                        {/* Key SNPs */}
                        <div>
                          <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                            Key Genetic Markers (SNPs)
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {img.keySNPs.map(snp => (
                              <Badge key={snp} variant="secondary" className="font-mono text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100/50">
                                {snp}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Geographic Tags */}
                        <div>
                          <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                            Geographic Footprint
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {img.countries.map(country => {
                              const countryObj = COUNTRIES.find(c => c.name === country);
                              return (
                                <Badge key={country} variant="outline" className="text-[10px] px-2 py-0.5 border-slate-200 bg-slate-50 text-slate-600">
                                  <span className="mr-1">{countryObj?.flag || '📍'}</span>
                                  {country}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>

                        {/* Notable Ancestors */}
                        <div>
                          <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                            Notable Lineages / Ancestors
                          </h4>
                          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 space-y-1.5 max-h-32 overflow-y-auto">
                            {img.keyAncestors.map((anc, i) => (
                              <div key={i} className="text-[11px] leading-tight flex items-start gap-1">
                                <span className="text-blue-500 mt-0.5">•</span>
                                <span className="font-medium text-slate-800">
                                  {anc.name}
                                  {anc.date && <span className="text-slate-500 font-light"> ({anc.date})</span>}
                                  {anc.place && <span className="text-slate-500 font-light"> - {anc.place}</span>}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {img.notes && (
                        <div className="mt-2 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-500 italic">
                          💡 Research Note: {img.notes}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && filteredImages.length > 0 && (
              <div className="space-y-6">
                {filteredImages.map((img) => (
                  <Card key={img.id} className="border-slate-200/80 shadow-sm bg-white overflow-hidden rounded-xl group hover:shadow-md transition-all">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image side */}
                      <div className="w-full lg:w-1/3 bg-slate-100 p-4 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div className="w-full max-w-sm">
                          <ZoomableImage src={img.path} alt={img.title} title={img.title} />
                        </div>
                      </div>

                      {/* Content side */}
                      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <Badge className={`font-mono text-[10px] uppercase font-semibold tracking-wider rounded-md ${
                              BRANCH_INFO[img.branch as keyof typeof BRANCH_INFO]?.color || 'bg-slate-100 text-slate-700'
                            }`}>
                              {img.branch}
                            </Badge>
                            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Version: {img.version}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {img.title}
                          </h3>
                          
                          <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                            {img.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                            {/* SNPs */}
                            <div>
                              <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                                Key SNPs
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {img.keySNPs.slice(0, 8).map(snp => (
                                  <Badge key={snp} variant="secondary" className="font-mono text-[9px] px-1.5 py-0 bg-blue-50 text-blue-700 border border-blue-100/30">
                                    {snp}
                                  </Badge>
                                ))}
                                {img.keySNPs.length > 8 && (
                                  <Badge variant="outline" className="text-[9px] px-1.5 py-0 border-slate-200">
                                    +{img.keySNPs.length - 8} more
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Geography */}
                            <div>
                              <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                                Regions
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {img.countries.map(country => {
                                  const countryObj = COUNTRIES.find(c => c.name === country);
                                  return (
                                    <Badge key={country} variant="outline" className="text-[9px] px-1.5 py-0 border-slate-200 bg-slate-50 text-slate-600">
                                      <span className="mr-1">{countryObj?.flag || '📍'}</span>
                                      {country}
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Ancestors */}
                            <div>
                              <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                                Featured Ancestors
                              </h4>
                              <div className="space-y-1">
                                {img.keyAncestors.slice(0, 3).map((anc, i) => (
                                  <div key={i} className="text-[10px] leading-tight text-slate-700 truncate">
                                    <span className="text-blue-500 mr-1">•</span>
                                    {anc.name}
                                  </div>
                                ))}
                                {img.keyAncestors.length > 3 && (
                                  <div className="text-[9px] text-slate-400 pl-2.5">
                                    +{img.keyAncestors.length - 3} more in detailed view
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {img.notes && (
                          <div className="text-[10px] font-mono text-slate-500 italic border-t border-slate-100 pt-3">
                            💡 Note: {img.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">
                The R1b-L238 Chronology
              </h2>
              <p className="text-slate-500 text-sm font-light">
                Follow the genetic journey of L238 from its Bronze Age origins through Viking migrations to the modern era of advanced genetic mapping.
              </p>
            </div>

            <div className="relative border-l border-slate-200 pl-6 ml-4 md:ml-32 space-y-12">
              {TIMELINE_EVENTS.map((evt, i) => (
                <div key={i} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 bg-blue-600 text-white rounded-full h-4 w-4 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                  
                  {/* Left-aligned year for larger screens */}
                  <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono font-bold text-sm text-blue-600">
                    {evt.year}
                  </div>

                  <div className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                    {/* Mobile year */}
                    <div className="md:hidden inline-block bg-blue-50 text-blue-700 font-mono font-bold text-xs px-2 py-0.5 rounded-md mb-2">
                      {evt.year}
                    </div>
                    <h3 className="text-base font-serif font-semibold text-slate-900 mb-2">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {evt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: About */}
        {activeTab === 'about' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Introductory Section */}
            <section className="bg-white border border-slate-200/80 p-8 rounded-xl shadow-sm space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
                Understanding R1b-L238
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4 font-light">
                <p>
                  <strong className="font-semibold text-slate-900">R1b-L238</strong> is a highly specific, geographically restricted genetic lineage under the massive Western European paternal haplogroup <strong className="font-semibold text-slate-900">R1b-M269</strong>. Unlike other major R1b subclades that spread widely across Western Europe, L238 developed a highly concentrated focus in Scandinavia—primarily Norway and Sweden—with subsequent maritime expansions into Finland, the British Isles, Iceland, and later, the Americas.
                </p>
                <p>
                  First emerging around <strong className="font-semibold text-slate-900">2593 BCE</strong> during the European Bronze Age, L238 is characterized by a series of successive genetic mutations (SNPs). For over two millennia, the branch remained relatively small. However, around <strong className="font-semibold text-slate-900">100 AD</strong>, a crucial founder event occurred under the <strong className="font-semibold text-slate-900">Y10827</strong> mutation. This founder line exploded in population size, establishing what genetic genealogists refer to as the primary Scandinavian cluster.
                </p>
                <p>
                  Today, thanks to high-throughput Next-Generation Sequencing (NGS) like FamilyTreeDNA's BigY700, researchers have been able to map out this lineage with incredible precision, connecting modern-day testers with direct paternal ancestors who lived hundreds or thousands of years ago.
                </p>
              </div>
            </section>

            {/* Geographical Distribution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200/80 p-6 rounded-xl shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Globe className="h-5 w-5" />
                  <h3 className="text-lg font-serif font-bold text-slate-900">Geographical Hotspots</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">🇳🇴</span>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800">Norway (West Coast & Valleys)</h4>
                      <p className="text-[11px] text-slate-500 font-light">High density in historic Hordaland, Rogaland, Telemark, and Sogn og Fjordane. Home of the BY4663 and FT126250 branches.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">🇸🇪</span>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800">Sweden (Götaland & Svealand)</h4>
                      <p className="text-[11px] text-slate-500 font-light">Strong concentration of the BY4659 and BY4675 branches, particularly around Västra Götaland, Bohuslän, and Halland.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">🇫🇮</span>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800">Finland (Ostrobothnia & Karelia)</h4>
                      <p className="text-[11px] text-slate-500 font-light">The prominent BY4661 branch (dating to 1400 CE) represents a massive Swedish-origin expansion into Finland, heavily present in Malax and Räisälä.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">🇬🇧</span>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800">British Isles (England, Scotland, Ireland)</h4>
                      <p className="text-[11px] text-slate-500 font-light">Viking Age settlements in Lincolnshire (Danelaw) and medieval Norse-Gaelic migrations into Shetland, Dundee, and Wicklow.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Methodology */}
              <div className="bg-white border border-slate-200/80 p-6 rounded-xl shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <TrendingUp className="h-5 w-5" />
                  <h3 className="text-lg font-serif font-bold text-slate-900">How to Read the Trees</h3>
                </div>
                <div className="prose prose-slate text-slate-600 text-xs leading-relaxed space-y-3 font-light">
                  <p>
                    The SNP trees in this archive are structured based on cladistic principles of paternal (Y-DNA) inheritance:
                  </p>
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>
                      <strong className="font-semibold text-slate-800">Vertical Axis / Flow:</strong> Represents the passage of time. The top of the tree shows modern descendants (labeled with names, kit details, and modern country flags), while the bottom or trunk represents ancient shared ancestors.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-800">Blue Nodes (Circles):</strong> Represent individual mutations or single-nucleotide polymorphisms (SNPs). Each blue dot represents a mutation that occurred in a specific father's germline and was passed down to all his direct paternal descendants.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-800">Ages (e.g., 500 CE, 1250 BCE):</strong> These are estimated dates of when the branching mutation occurred, calculated using statistical mutation rates (FTDNA's TiMR or similar scientific models).
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-800">Arrows & Connections:</strong> Indicate established genetic links. When two modern testers share a set of mutations, they are placed under a shared node, proving they share a common grandfather who first carried that mutation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-white font-serif font-bold text-lg mb-4">
                <Dna className="h-5 w-5 text-blue-500" />
                R1b-L238 Archive
              </div>
              <p className="text-xs leading-relaxed font-light">
                A scientific and genealogical project dedicated to preserving, indexing, and presenting the paternal lineages of the R1b-L238 haplogroup.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                Primary Branches
              </h4>
              <ul className="text-xs space-y-2 font-light">
                <li><span className="text-blue-500 mr-1.5">•</span>First L238 Branch</li>
                <li><span className="text-blue-500 mr-1.5">•</span>Norwegian Branch (FT49026)</li>
                <li><span className="text-blue-500 mr-1.5">•</span>Scandinavian Branch (BY4675)</li>
                <li><span className="text-blue-500 mr-1.5">•</span>Swedish Branch (Y11662)</li>
                <li><span className="text-blue-500 mr-1.5">•</span>Norwegian-British Branch (BY4663)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                Credits & References
              </h4>
              <p className="text-xs leading-relaxed font-light mb-2">
                All SNP trees are based on FamilyTreeDNA's Haplotree and compiled by dedicated genetic genealogy researchers.
              </p>
              <div className="text-[10px] text-slate-500 font-mono">
                Latest updates integrated: May 4, 2026
              </div>
            </div>
          </div>
          <Separator className="bg-slate-800 mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div>
              © 2026 R1b-L238 Haplogroup Project. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <a href="https://www.familytreedna.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                FamilyTreeDNA
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-slate-800">|</span>
              <span className="text-slate-500">Curated by FJE & Genetic Genealogists</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
