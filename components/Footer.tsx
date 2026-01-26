import React, { useState } from 'react';
import { Facebook, Mail, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://drive.google.com/thumbnail?id=1QbZZ0MJtwgMPll3ZhVS2BxkZ9_RcMUcM&sz=s200";
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');

    try {
        const response = await fetch("https://formsubmit.co/ajax/slrisehub@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                _subject: "New Newsletter Subscription",
                message: "Please add this email to the newsletter list.",
                _template: 'box'
            })
        });

        if (response.ok) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('error');
        }
    } catch (error) {
        setStatus('error');
    }
  };

  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 text-white mb-4">
              <img 
                src={logoUrl}
                alt="SLRiseHub Logo"
                className="h-8 w-8 rounded-full object-cover bg-white"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=SL&background=ffffff&color=1d4ed8&rounded=true&bold=true&size=128";
                  e.currentTarget.onerror = null;
                }}
              />
              <span className="text-xl font-bold font-heading">SLRiseHub</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering Sierra Leone’s Youth Through Innovation, Education & Media.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100068483297902" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-brand-royal hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:slrisehub@gmail.com" className="bg-slate-800 p-2 rounded-full hover:bg-brand-royal hover:text-white transition-all">
                <Mail className="h-5 w-5" />
              </a>
               <a href="tel:+23279095969" className="bg-slate-800 p-2 rounded-full hover:bg-brand-royal hover:text-white transition-all">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Digital Skills</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Media & Journalism</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Entrepreneurship</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Organization</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="#values" className="hover:text-brand-cyan transition-colors">Core Values</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Partners</a></li>
            </ul>
          </div>

          <div id="footer-newsletter">
            <h4 className="text-white font-semibold mb-4 font-heading">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for latest news and opportunities.</p>
            
            {status === 'success' ? (
                <div className="bg-green-900/30 border border-green-800 rounded-lg p-3 flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <div>
                        <p className="text-green-400 text-sm font-medium">Subscribed!</p>
                        <p className="text-green-500/80 text-xs mt-1">Check your email to confirm.</p>
                        <button onClick={() => setStatus('idle')} className="text-xs text-green-400 underline mt-2">Subscribe another</button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-cyan disabled:opacity-50" 
                    />
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="bg-brand-royal text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium disabled:opacity-70 flex justify-center items-center"
                    >
                        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-400 text-xs flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" /> Error. Please try again.
                        </p>
                    )}
                </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} SLRiseHub. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;