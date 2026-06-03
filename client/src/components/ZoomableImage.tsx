import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, Maximize2, RotateCcw, X, Download, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ZoomableImageProps {
  src: string;
  alt: string;
  title: string;
}

export default function ZoomableImage({ src, alt, title }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset zoom/pan when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 4));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    const direction = e.deltaY < 0 ? 1 : -1;
    setScale(prev => {
      const nextScale = prev + direction * zoomFactor;
      return Math.max(0.5, Math.min(nextScale, 4));
    });
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${alt.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download image', error);
      // Fallback
      window.open(src, '_blank');
    }
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl border border-border bg-muted shadow-sm transition-all hover:shadow-md">
        <div className="aspect-[4/3] w-full overflow-hidden bg-white">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full bg-white text-slate-900 hover:bg-slate-100"
            onClick={() => setIsOpen(true)}
          >
            <Maximize2 className="mr-1.5 h-4 w-4" />
            Explore Tree
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-white text-slate-900 hover:bg-slate-100"
            onClick={handleDownload}
            title="Download Image"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] max-h-[90vh] p-0 flex flex-col overflow-hidden bg-slate-950 border-slate-800 text-white">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
            <div>
              <DialogTitle className="text-lg font-semibold text-slate-100">{title}</DialogTitle>
              <DialogDescription className="text-xs text-slate-400 mt-0.5">
                Use mouse drag/touch to pan. Scroll/buttons to zoom.
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 mr-2 text-xs text-slate-300">
                <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
                <span>Tip: Hover and scroll to zoom</span>
              </div>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-md border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                onClick={handleZoomIn}
                title="Zoom In"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-md border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                onClick={handleZoomOut}
                title="Zoom Out"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-md border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                onClick={handleReset}
                title="Reset Zoom"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-md border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                onClick={handleDownload}
                title="Download Full Resolution"
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-md border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div
            ref={containerRef}
            className={`flex-1 relative overflow-hidden bg-slate-900 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-75 ease-out origin-center"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              }}
            >
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain pointer-events-none"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '90%',
                  maxHeight: '85vh',
                }}
              />
            </div>

            {/* Scale indicator */}
            <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-slate-800 px-3 py-1 rounded-full text-xs font-mono text-slate-300">
              Zoom: {Math.round(scale * 100)}%
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
