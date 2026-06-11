import { Dna, Lock, LogIn, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLoginUrl } from '@/const';

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = getLoginUrl('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-black" />

      {/* Top bar */}
      <div className="relative z-10 bg-slate-900/80 border-b border-slate-800 py-2 px-4 text-center font-mono text-xs text-slate-400 tracking-widest">
        GENETIC GENEALOGY ARCHIVE &bull; R1B-L238 SNP TREE COLLECTION &bull; PRIVATE ACCESS
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Logo / Brand */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-5">
              <Dna className="h-8 w-8 text-blue-400" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-white tracking-tight mb-2">
              The L238 Saga
            </h1>
            <p className="text-slate-400 text-sm font-light">
              R1b-L238 Haplogroup Family Archive
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="h-4 w-4 text-blue-400" />
              <h2 className="text-base font-semibold text-slate-200">
                Private Access Required
              </h2>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8 font-light">
              This archive contains private genealogical research, SNP tree charts, and ancestral records for the R1b-L238 haplogroup family. Access is restricted to authorized members only.
            </p>

            {/* Features preview */}
            <div className="space-y-3 mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                What's inside
              </div>
              {[
                '19 high-resolution SNP tree charts by Timo Rossi',
                '290+ FTDNA ancestral records & kit directory',
                'Interactive backbone lineage map',
                'Historical timeline from 2593 BCE to 2026',
                'Downloadable PDF catalog',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                  <span className="text-blue-500 text-[10px]">▸</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Login Button */}
            <Button
              className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base transition-all active:scale-[0.97]"
              onClick={handleLogin}
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign In to Access
            </Button>

            <p className="text-center text-[11px] text-slate-600 mt-4 font-light">
              Authentication is handled securely via Manus OAuth.
            </p>
          </div>

          {/* Footer note */}
          <div className="text-center mt-8 flex items-center justify-center gap-2 text-xs text-slate-600">
            <Shield className="h-3.5 w-3.5" />
            <span>Restricted to authorized R1b-L238 family members</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-slate-800 py-4 px-4 text-center font-mono text-[10px] text-slate-600">
        © 2026 R1b-L238 Haplogroup Project &bull; SNP Trees by Timo Rossi
      </div>
    </div>
  );
}
